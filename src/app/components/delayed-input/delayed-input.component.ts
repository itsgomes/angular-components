import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ChangeDetectionStrategy, Component, DestroyRef, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delayed-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delayed-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelayedInputComponent {
  protected formValue: FormControl<string | null> = new FormControl('');
  protected debounceTime: WritableSignal<number> = signal(1000);
  protected message: WritableSignal<string> = signal('');

  public constructor(private destroyRef: DestroyRef) {
    this.formValue.valueChanges
      .pipe(
        debounceTime(this.debounceTime()),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((value: string | null) => { 
        if (value?.trim()) 
          this.onValueChanged(value) 
      });
  }

  private onValueChanged(value: string): void {
    this.message.set(`After ${this.debounceTime()}ms the value '${value}' was emitted.`);
  }
}