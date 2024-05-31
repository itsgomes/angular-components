export default class Utils {
  public static getArray(size: number = 30): string[] {
    return Array.from({ length: size })
      .map((_) => "Item ");
  }

  public static getRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export class UtilsCountdownValue {
  private _maxCountdownValue: number = 1000;

  public constructor(public maxCountdownValue: number) {
    this._maxCountdownValue = maxCountdownValue;
  }

  public getValue(): number {
    this._maxCountdownValue -= Utils.getRandomInteger(0, 2);
    return this._maxCountdownValue;
  }
}