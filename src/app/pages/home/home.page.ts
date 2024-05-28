import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, viewChild, ViewContainerRef } from '@angular/core';
import { Components } from '../../models/components.model';
import { ComponentsService } from '../../services/components.service';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  protected componentTpl: Signal<ViewContainerRef> = viewChild.required('vcr', { read: ViewContainerRef });

  public constructor(public componentsService: ComponentsService) {}

  protected async openComponent(component: Components): Promise<void> {
    this.componentsService.hasComponentsOpened = true;

    const componentClass = await this.componentsService.getComponentClass(component.id);
    if (!componentClass) return;

    const componentRef = this.componentTpl().createComponent(componentClass);
    componentRef.changeDetectorRef.detectChanges();
  }

  protected back(): void {
    this.componentsService.hasComponentsOpened = false;
    this.componentTpl().clear();
  }
}