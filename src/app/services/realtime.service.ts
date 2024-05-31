import { Injectable, OnDestroy, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Subscription, takeWhile, timer } from "rxjs";
import { DEFAULT_TEXT_COLOR_PRESET, RealtimeData, lastAvailableColor } from "../models/realtime.model";
import Utils, { UtilsCountdownValue } from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class RealtimeService implements OnDestroy {
  private _data: WritableSignal<RealtimeData[]> = signal([]);
  private streaming: WritableSignal<boolean> = signal(false);
  private timer$!: Subscription;
  private countdownValue: UtilsCountdownValue = new UtilsCountdownValue(1000);
  private readonly updateDataDelay: number = 300;

  public get data(): Signal<RealtimeData[]> {
    return computed(() => this._data());
  }

  public get dataValues(): Signal<number[]> {
    return computed(() => Array
      .from(
        new Set(
          this._data().map(data => data.value)
        )
      ).slice(0, DEFAULT_TEXT_COLOR_PRESET.length)
    );
  }

  public ngOnDestroy(): void {
    this.timer$.unsubscribe();
  }

  public getTextColorByValue(value: number): string {
    const index = this.dataValues().findIndex((val: number) => val == value);
    return index > -1 ? DEFAULT_TEXT_COLOR_PRESET[index] : lastAvailableColor();
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
    this.countdownValue = new UtilsCountdownValue(1000);
  }

  private appendNewData(): void {
    const newData: RealtimeData = {
      id: Utils.getRandomInteger(1, 100),
      amount: Utils.getRandomInteger(100, 1000),
      value: this.countdownValue.getValue()
    };

    this._data.update((oldValue: RealtimeData[]) => [newData, ...oldValue]);
  }
}