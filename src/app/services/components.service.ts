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
        return null;
      case ComponentsType.ProgressBar: 
        return await import('./../components/progress-bar/progress-bar.component').then(component => component.ProgressBarComponent);
    }
  }
}