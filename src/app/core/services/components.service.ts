import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AVAILABLE_COMPONENTS, Components, ComponentsType } from '../models/components.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private _hasComponentsOpened: WritableSignal<boolean> = signal(false);

  public get hasComponentsOpened(): Signal<boolean> {
    return computed(() => this._hasComponentsOpened());
  }

  public set hasComponentsOpened(value: boolean) {
    this._hasComponentsOpened.set(value);
  }

  public getComponents(): Observable<Components[]> {
    return of<Components[]>(AVAILABLE_COMPONENTS);
  }

  public async getComponentClass(componentType: ComponentsType): Promise<any> {
    switch (componentType) {
      case ComponentsType.GalleryAnimations:
        return await import ('../components/gallery-animations/gallery-animations.component').then(component => component.GalleryAnimationsComponent);
      case ComponentsType.ProgressBar: 
        return await import('../components/progress-bar/progress-bar.component').then(component => component.ProgressBarComponent);
      case ComponentsType.OnlineChecker: 
        return await import('../components/online-checker/online-checker.component').then(component => component.OnlineCheckerComponent);
      case ComponentsType.DelayedInput: 
        return await import('../components/delayed-input/delayed-input.component').then(component => component.DelayedInputComponent);
      case ComponentsType.ResizableElement: 
        return await import('../components/resizable-element/resizable-element.component').then(component => component.ResizableElementComponent);
      case ComponentsType.InfiniteScroll: 
        return await import('../components/infinite-scroll/infinite-scroll.component').then(component => component.InfiniteScrollComponent);
      case ComponentsType.VirtualScroll: 
        return await import('../components/virtual-scroll/virtual-scroll.component').then(component => component.VirtualScrollComponent);
      case ComponentsType.RatingForm: 
        return await import('../components/rating-form/rating-form.component').then(component => component.RatingFormComponent);
      case ComponentsType.HttpRequest: 
        return await import('../components/http-request-example/http-request-example.component').then(component => component.HttpRequestExampleComponent);
      case ComponentsType.Toaster: 
        return await import('../components/toaster-example/toaster-example.component').then(component => component.ToasterExampleComponent);
      case ComponentsType.Modal: 
        return await import('../components/modal-example/modal-example.component').then(component => component.ModalExampleComponent);
      case ComponentsType.RealtimeDataTable: 
        return await import('../components/realtime-data-table/realtime-data-table.component').then(component => component.RealtimeDataTableComponent);
      case ComponentsType.ReactiveForm: 
        return await import('../components/reactive-form/reactive-form.component').then(component => component.ReactiveFormComponent);
      case ComponentsType.Chart: 
        return await import('../components/chart/chart.component').then(component => component.ChartComponent);
    }
  }
}