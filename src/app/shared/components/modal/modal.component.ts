import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Signal, ViewContainerRef, viewChild } from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { delay, filter } from "rxjs";
import { Modal } from "../../models/modal.model";
import { ModalService } from "../../services/modal.service";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styles: `.transform-50 { transform: translate(-50%, -50%) }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  protected vcr: Signal<ViewContainerRef> = viewChild.required('vcr', { read: ViewContainerRef });
  protected container: Signal<ElementRef> = viewChild.required('modalContainer', { read: ElementRef });

  public constructor(protected modalService: ModalService) {
    toObservable(this.modalService.modal)
      .pipe(
        filter(Boolean), 
        delay(50),
        takeUntilDestroyed())
      .subscribe((modal: Modal) => this.attachContent(modal));
  }

  private attachContent(modal: Modal): void {
    if (this.vcr.length > 0) 
      return;

    const componentRef = this.vcr().createComponent(modal.componentRef);
    componentRef.changeDetectorRef.detectChanges();
  }

  protected close(): void {
    this.modalService.close();
  }

  @HostListener('document:click', ['$event'])
  protected checkClickOutside(event: any): void {
    if (this.modalService.modal() && !this.container()?.nativeElement.contains(event.target))
      this.close();
  }
}