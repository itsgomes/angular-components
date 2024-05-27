import { ChangeDetectionStrategy, Component, Signal, signal } from "@angular/core";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ToasterService } from "../../services/toaster.service";
import { TOAST_EXAMPLE_ARRAY, Toast } from "../../models/toast.model";

@Component({
  selector: 'app-toaster-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './toaster-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToasterExampleComponent {
  protected toasts: Signal<Toast[]> = signal(TOAST_EXAMPLE_ARRAY);

  public constructor(private toasterService: ToasterService) {}

  protected showToast(toast: Toast) {
    this.toasterService.add(toast);
  }
}