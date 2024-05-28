import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Toast } from "../models/toast.model";

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private _toast: WritableSignal<Toast[]> = signal([]);

  public get toast(): Signal<Toast[]> {
    return computed(() => this._toast());
  }

  public add(toast: Toast): void {
    this._toast.update((oldValue: Toast[]) => [...oldValue, toast]);
    setTimeout(() => this.remove(0), toast.duration);
  }

  public remove(index: number): void {
    this._toast.update((oldValue: Toast[]) => {
      oldValue.splice(index, 1);
      return [...oldValue];
    });
  }
}