import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Modal } from "../components/modal/modal.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modal: WritableSignal<Modal | undefined> = signal(undefined);
  
  public get modal(): Signal<Modal | undefined> {
    return computed(() => this._modal());
  }

  public open(modal: Modal): void {
    this._modal.set(modal);
  }

  public close(): void {
    this._modal.set(undefined);
  }
}