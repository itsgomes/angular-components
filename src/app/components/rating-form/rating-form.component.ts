import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RatingComponent } from "./rating.component";

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RatingComponent
  ],
  templateUrl: './rating-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingFormComponent {
  protected form!: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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
    console.log(this.form.getRawValue());
  }
}