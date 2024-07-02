import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, viewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Components } from '../../models/components.model';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  private _componentTpl: Signal<ViewContainerRef> = viewChild.required('vcr', { read: ViewContainerRef });

  public constructor(protected componentsService: ComponentsService) {}

  protected async openComponent(component: Components): Promise<void> {
    this.componentsService.hasComponentsOpened = true;

    const componentClass = await this.componentsService.getComponentClass(component.id);
    if (!componentClass) 
      return;

    const componentRef = this._componentTpl().createComponent(componentClass);
    componentRef.changeDetectorRef.detectChanges();
  }

  protected back(): void {
    this.componentsService.hasComponentsOpened = false;
    this._componentTpl().clear();
  }
}