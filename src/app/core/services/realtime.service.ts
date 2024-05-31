import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { takeWhile, timer } from "rxjs";
import Utils from "../../shared/utils/utils";
import { DEFAULT_TEXT_COLOR_PRESET, RealtimeData, UPDATE_DELAY, lastAvailableColor } from "../models/realtime.model";

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {
  private _data: WritableSignal<RealtimeData[]> = signal([]);
  private _streaming: WritableSignal<boolean> = signal(false);
  private _startWithValue: number = 1000;

  public get data(): Signal<RealtimeData[]> {
    return computed(() => this._data());
  }

  public get uniqueValues(): Signal<number[]> {
    return computed(() => Array.from(new Set(this._data().map((data: RealtimeData) => data.value))).slice(0, DEFAULT_TEXT_COLOR_PRESET.length));
  }

  public get isStreaming(): boolean {
    return this._streaming();
  }

  public getTextColorByValue(_value: number): string {
    const index = this.uniqueValues().findIndex((value: number) => value == _value);
    return index != -1 ? DEFAULT_TEXT_COLOR_PRESET[index] : lastAvailableColor();
  }

  public startStream(): void {
    if (this.isStreaming)
      return;

    this._streaming.set(true);
    
    timer(0, UPDATE_DELAY)
      .pipe(
        takeWhile(() => this._streaming()))
      .subscribe(() => this.appendNewData());
  }

  public stopStream(): void {
    if (this.isStreaming)
      this._streaming.set(false);
  }

  public clearData(): void {
    this._data.set([]);
    this._startWithValue = 1000;
  }

  private appendNewData(): void {
    const newData: RealtimeData = {
      id: Utils.getRandomInteger(1, 100),
      amount: Utils.getRandomInteger(100, 1000),
      value: Utils.getRandomInteger(this._startWithValue - 1, this._startWithValue + 1)
    };

    this._data.update((oldValue: RealtimeData[]) => [newData, ...oldValue]);
    this._startWithValue--;
  }

}