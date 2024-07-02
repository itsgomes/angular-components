import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Toast, ToastType } from "../../../shared/models/toast.model";
import { ToasterService } from "../../../shared/services/toaster.service";
import { AVAILABLE_VALIDATORS, CustomValidator, StrongPasswordRegex } from "../../models/validators.model";
import { forbiddenNameValidator } from "./reactive-form.validators";

@Component({
  selector: 'app-reactive-form',
  standalone:  true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    ButtonComponent
  ],
  templateUrl: 'reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent {
  protected availableValidators: WritableSignal<CustomValidator[]> = signal(AVAILABLE_VALIDATORS);
  protected form!: FormGroup;

  public constructor(
    private _formBuilder: NonNullableFormBuilder,
    private _toasterService: ToasterService
  ) {
    this.initializeForm();
  }

  protected submit(): void {
    const toast: Toast = {
      message: 'Your new account has been created successfully.',
      duration: 3000,
      type: ToastType.Success
    };

    this._toasterService.add(toast);
    this.clearForm();
  }

  private initializeForm(): void {
    this.form = this._formBuilder.group({
      account: this._formBuilder.control(
        { value: '', disabled: false }, 
        { validators: [Validators.required, Validators.minLength(5), forbiddenNameValidator(['admin'])] }
      ),
      password: this._formBuilder.control(
        { value: '', disabled: false }, 
        { validators: [Validators.required, Validators.minLength(8), Validators.pattern(StrongPasswordRegex)] }
      )
    });
  }

  private clearForm(): void {
    this.form.reset();
  }
}