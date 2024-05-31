import { ChangeDetectionStrategy, Component, Signal, signal } from "@angular/core";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { TOAST_EXAMPLE_ARRAY, Toast } from "../../../shared/models/toast.model";
import { ToasterService } from "../../../shared/services/toaster.service";

@Component({
  selector: 'app-toaster-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './toaster-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToasterExampleComponent {
  protected toasts: Signal<Toast[]> = signal(TOAST_EXAMPLE_ARRAY);

  public constructor(private _toasterService: ToasterService) {}

  protected showToast(toast: Toast) {
    this._toasterService.add(toast);
  }
}