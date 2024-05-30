import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Toast, ToastType } from "../../models/toast.model";
import { AVAILABLE_VALIDATORS, CustomValidator, StrongPasswordRegex } from "../../models/validators.model";
import { ToasterService } from "../../services/toaster.service";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { forbiddenNameValidator } from "../../validators/form.validators";

@Component({
  selector: 'app-reactive-form',
  standalone:  true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent {
  protected availableValidators: WritableSignal<CustomValidator[]> = signal(AVAILABLE_VALIDATORS);
  protected form!: FormGroup;

  private formBuilder!: NonNullableFormBuilder;
  private toastService!: ToasterService;

  public constructor() {
    this.formBuilder = inject(NonNullableFormBuilder);
    this.toastService = inject(ToasterService);

    this.initializeForm();
  }

  protected submit(): void {
    const toast: Toast = {
      message: 'Your new account has been created successfully.',
      duration: 3000,
      type: ToastType.Success
    };

    this.toastService.add(toast);
    this.clearForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      account: this.formBuilder.control(
        { value: '', disabled: false }, 
        { validators: [Validators.required, Validators.minLength(5), forbiddenNameValidator(['admin'])] }
      ),
      password: this.formBuilder.control(
        { value: '', disabled: false }, 
        { validators: [Validators.required, Validators.minLength(8), Validators.pattern(StrongPasswordRegex)] }
      )
    });
  }

  private clearForm(): void {
    this.form.reset();
  }
}