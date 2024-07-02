import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastType } from '../../models/toast.model';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'toaster.component.html',
  styles: `.translate-50 { transform: translate(-50%, 0px) }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToasterComponent {
  protected get toastType(): typeof ToastType { 
    return ToastType; 
  }

  public constructor(protected toasterService: ToasterService) {}

  protected close(index: number): void {
    this.toasterService.remove(index);
  }
}