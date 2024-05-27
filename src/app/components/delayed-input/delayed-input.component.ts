import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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

  public constructor() {
    this.formValue.valueChanges
      .pipe(
        debounceTime(this.debounceTime()),
        distinctUntilChanged(),
        takeUntilDestroyed()
      ).subscribe((value: string | null) => { 
        if (value?.trim()) 
          this.onValueChanged(value) 
      });
  }

  private onValueChanged(value: string): void {
    this.message.set(`After ${this.debounceTime()}ms the value '${value}' was emitted.`);
  }
}