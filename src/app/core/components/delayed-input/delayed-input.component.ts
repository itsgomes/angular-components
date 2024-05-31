import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-delayed-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delayed-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelayedInputComponent {
  protected message: WritableSignal<string> = signal('');
  protected formValue: FormControl<string | null> = new FormControl('');
  protected debounceTime: WritableSignal<number> = signal(1000);

  public constructor() {
    this.formValue.valueChanges
      .pipe(
        filter(Boolean),
        debounceTime(this.debounceTime()),
        distinctUntilChanged(),
        takeUntilDestroyed()
      ).subscribe((value: string) => this.onValueChanged(value));
  }

  private onValueChanged(value: string): void {
    if (value.trim())
      this.message.set(`After ${this.debounceTime()}ms the value '${value}' was emitted.`);
  }
}