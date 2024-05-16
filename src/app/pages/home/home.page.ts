import { ChangeDetectionStrategy, Component, Signal, ViewContainerRef, WritableSignal, signal, viewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsService } from "../../services/components.service";
import { ComponentCardComponent } from "../../components/component-card/component-card.component";
import { Components } from "../../models/components.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ComponentCardComponent],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  protected hasComponentOpened: WritableSignal<boolean> = signal(false);
  protected componentTpl: Signal<ViewContainerRef> = viewChild.required('vcr', { read: ViewContainerRef });

  public constructor(public componentsService: ComponentsService) {}

  protected async openComponent(component: Components): Promise<void> {
    this.hasComponentOpened.set(true);

    const componentClass = await this.componentsService.getComponentClass(component.id);
    if (!componentClass) return;

    const componentRef = this.componentTpl().createComponent(componentClass);
    componentRef.changeDetectorRef.detectChanges();
  }

  protected back(): void {
    this.hasComponentOpened.set(false);
    this.componentTpl().clear();
  }
}