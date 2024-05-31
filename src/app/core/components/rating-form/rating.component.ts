import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Rating, RATINGS } from './rating.model';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ],
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements ControlValueAccessor {
  protected value: WritableSignal<number> = signal(0);
  protected disabled: WritableSignal<boolean> = signal(false);
  protected onChanged!: (rating: Rating) => void;
  protected onTouched!: () => void;

  protected get ratings(): Rating[] {
    return RATINGS;
  }

  public writeValue(rating: Rating): void {
    this.value.set(rating.ratingLevel);
  }

  public registerOnChange(fn: (rating: Rating) => void): void {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled.set(disabled);
  }

  protected setRatingValue(rating: Rating): void {
    if (this.disabled())
      return;

    this.writeValue(rating);
    this.onChanged(rating);
    this.onTouched();
  }
}