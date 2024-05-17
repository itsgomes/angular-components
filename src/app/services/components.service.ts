import { Injectable } from "@angular/core";
import { AVAILABLE_COMPONENTS, Components, ComponentsType } from "../models/components.model";
import { Observable, of } from "rxjs";

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
    }
  }
}