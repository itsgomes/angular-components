export default class Utils {

  public static getArray(size: number = 30): string[] {
    return Array.from({ length: size })
      .map((_) => "Item ");
  }
  
}