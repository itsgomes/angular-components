import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Modal } from "../../../shared/components/modal/modal.model";
import { ModalService } from "../../../shared/services/modal.service";

@Component({
  selector: 'app-modal-example',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: 'modal-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalExampleComponent {
  public constructor(private _modalService: ModalService) {}

  protected async openModal(): Promise<void> {
    const componentRef = await import('./modal-content.component').then(component => component.ModalContentComponent);
    const modal: Modal = { title: 'Example title', componentRef };

    this._modalService.open(modal);
  }
}
