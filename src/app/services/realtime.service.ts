import { Injectable, OnDestroy, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Subscription, takeWhile, timer } from "rxjs";
import { RealtimeData } from "../models/realtime.model";
import Utils from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class RealtimeService implements OnDestroy {
  private _data: WritableSignal<RealtimeData[]> = signal([]);
  private streaming: WritableSignal<boolean> = signal(false);
  private timer$!: Subscription;
  private readonly updateDataDelay: number = 300;

  public ngOnDestroy(): void {
    this.timer$.unsubscribe();
  }

  public get data(): Signal<RealtimeData[]> {
    return computed(() => this._data());
  }

  public isStreaming(): boolean {
    return this.streaming();
  }

  public startStream(): void {
    if (this.isStreaming())
      return;

    this.streaming.set(true);
    this.timer$ = timer(0, this.updateDataDelay)
      .pipe(
        takeWhile(() => this.streaming())
      ).subscribe(() => this.appendNewData());
  }

  public stopStream(): void {
    if (this.isStreaming())
      this.streaming.set(false);
  }

  public clearData(): void {
    this._data.set([]);
  }

  private appendNewData(): void {
    const newData: RealtimeData = {
      id: Utils.getRandomInteger(1, 100),
      amount: Utils.getRandomInteger(100, 1000),
      value: Utils.getRandomInteger(1000, 10000)
    };

    this._data.update((oldValue: RealtimeData[]) => [newData, ...oldValue]);
  }
}