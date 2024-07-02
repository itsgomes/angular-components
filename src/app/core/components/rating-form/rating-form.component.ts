import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Toast, ToastType } from '../../../shared/models/toast.model';
import { ToasterService } from '../../../shared/services/toaster.service';
import { RatingComponent } from './rating.component';
import { FormResponse } from './rating.model';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    ButtonComponent, 
    RatingComponent
  ],
  templateUrl: 'rating-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingFormComponent {
  protected form!: FormGroup;

  public constructor(
    private _formBuilder: FormBuilder,
    private _toasterService: ToasterService
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this._formBuilder.group({
      rating: [
        {value: 0, disabled: false}, 
        [Validators.required, Validators.min(1)] 
      ],
      comment: [
        {value: null, disabled: false}
      ]
    });
  }

  protected onSubmit(): void {
    const response: FormResponse = this.form.getRawValue();

    const toast: Toast = {
      message: response.rating.ratingLevelName,
      duration: 3000,
      type: this.toastType(response.rating.ratingLevel)
    }

    this._toasterService.add(toast);
  }

  private toastType(rating: number): ToastType {
    switch (rating) {
      case 5:
      case 4:
        return ToastType.Success;
      case 3:
      case 2:
        return ToastType.Warn;
      case 1: 
        return ToastType.Error;
      default:
        return ToastType.Primary;
    }
  }
}