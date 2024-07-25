import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AVAILABLE_COMPONENTS, Components } from '../models/components.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private _currentComponent: WritableSignal<Components | null> = signal(null);
  private _query: WritableSignal<string> = signal('');
  
  public get components(): Observable<Components[]> {
    return of<Components[]>(AVAILABLE_COMPONENTS);
  }

  public get query(): Signal<string> {
    return computed(() => this._query());
  }

  public get currentComponent(): Signal<Components | null> {
    return computed(() => this._currentComponent());
  }

  public openComponent(component: Components): void {
    this._currentComponent.set(component);
  }

  public closeComponent(): void {
    this._currentComponent.set(null);
  }

  public queryComponents(query: string): void {
    this._query.set(query);
  }
}