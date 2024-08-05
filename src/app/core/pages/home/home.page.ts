import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ChartComponent } from "../../components/chart/chart.component";
import { ContextMenuContainerComponent } from "../../components/context-menu/context-menu-container.component";
import { DelayedInputComponent } from "../../components/delayed-input/delayed-input.component";
import { GalleryAnimationsComponent } from '../../components/gallery-animations/gallery-animations.component';
import { HttpRequestExampleComponent } from "../../components/http-request-example/http-request-example.component";
import { InfiniteScrollComponent } from "../../components/infinite-scroll/infinite-scroll.component";
import { ModalExampleComponent } from "../../components/modal-example/modal-example.component";
import { OnlineCheckerComponent } from "../../components/online-checker/online-checker.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";
import { RatingFormComponent } from "../../components/rating-form/rating-form.component";
import { ReactiveFormComponent } from "../../components/reactive-form/reactive-form.component";
import { RealtimeDataTableComponent } from "../../components/realtime-data-table/realtime-data-table.component";
import { ResizableElementComponent } from "../../components/resizable-element/resizable-element.component";
import { ResponsiveToolbarComponent } from '../../components/responsive-toolbar/responsive-toolbar.component';
import { ToasterExampleComponent } from "../../components/toaster-example/toaster-example.component";
import { VirtualScrollComponent } from "../../components/virtual-scroll/virtual-scroll.component";
import { Components, ComponentsType } from '../../models/components.model';
import { FilterComponentsPipe } from '../../pipes/filter-components.pipe';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FilterComponentsPipe, GalleryAnimationsComponent, ProgressBarComponent, OnlineCheckerComponent, DelayedInputComponent, ResizableElementComponent, InfiniteScrollComponent, VirtualScrollComponent, RatingFormComponent, HttpRequestExampleComponent, ToasterExampleComponent, ModalExampleComponent, RealtimeDataTableComponent, ReactiveFormComponent, ResponsiveToolbarComponent, ChartComponent, ContextMenuContainerComponent],
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  protected get ComponentTypes(): typeof ComponentsType {
    return ComponentsType;
  }

  protected get currentComponentId(): ComponentsType | undefined {
    return this.componentsService.currentComponent()?.id;
  }

  public constructor(protected componentsService: ComponentsService) {}

  protected async openComponent(component: Components): Promise<void> {
    this.componentsService.openComponent(component);
  }

  protected back(): void {
    this.componentsService.closeComponent();
  }
}