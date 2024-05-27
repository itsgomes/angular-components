import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AVAILABLE_COMPONENTS, Components, ComponentsType } from '../models/components.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  public getComponents(): Observable<Components[]> {
    return of<Components[]>(AVAILABLE_COMPONENTS);
  }

  public async getComponentClass(componentType: ComponentsType): Promise<any> {
    switch (componentType) {
      case ComponentsType.GalleryAnimations:
        return await import ('./../components/gallery-animations/gallery-animations.component').then(component => component.GalleryAnimationsComponent);
      case ComponentsType.ProgressBar: 
        return await import('./../components/progress-bar/progress-bar.component').then(component => component.ProgressBarComponent);
      case ComponentsType.OnlineChecker: 
        return await import('./../components/online-checker/online-checker.component').then(component => component.OnlineCheckerComponent);
      case ComponentsType.DelayedInput: 
        return await import('./../components/delayed-input/delayed-input.component').then(component => component.DelayedInputComponent);
      case ComponentsType.ResizableElement: 
        return await import('./../components/resizable-element/resizable-element.component').then(component => component.ResizableElementComponent);
      case ComponentsType.InfiniteScroll: 
        return await import('./../components/infinite-scroll/infinite-scroll.component').then(component => component.InfiniteScrollComponent);
      case ComponentsType.VirtualScroll: 
        return await import('./../components/virtual-scroll/virtual-scroll.component').then(component => component.VirtualScrollComponent);
      case ComponentsType.RatingForm: 
        return await import('./../components/rating-form/rating-form.component').then(component => component.RatingFormComponent);
      case ComponentsType.LoadingState: 
        return await import('../components/loading-example/loading-example.component').then(component => component.LoadingExampleComponent);
      case ComponentsType.Toaster: 
        return await import('../components/toaster-example/toaster-example.component').then(component => component.ToasterExampleComponent);
    }
  }
}