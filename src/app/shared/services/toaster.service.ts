import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { take, timer } from "rxjs";
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

    timer(toast.duration)
      .pipe(take(1))
      .subscribe(() => this.remove(0));
  }

  public remove(index: number): void {
    this._toast.update((oldValue: Toast[]) => {
      oldValue.splice(index, 1);
      return [...oldValue];
    });
  }
}