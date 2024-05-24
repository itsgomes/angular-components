import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading: WritableSignal<boolean> = signal(false);

  public get isLoading(): Signal<boolean> {
    return computed(() => this._isLoading());
  }

  public set isLoading(value: boolean) {
    this._isLoading.set(value);
  }
}