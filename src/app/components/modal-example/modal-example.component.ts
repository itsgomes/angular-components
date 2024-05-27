import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Modal } from "../../models/modal.model";
import { ModalService } from "../../services/modal.service";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalExampleComponent {
  public constructor(private modalService: ModalService) {}

  protected async openModal(): Promise<void> {
    const componentRef = await import('./modal-content.component').then(component => component.ModalContentComponent);
    const modal: Modal = { title: 'Example title', componentRef };

    this.modalService.open(modal);
  }
}
