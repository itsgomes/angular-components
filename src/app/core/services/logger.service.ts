import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public log(message: string): void {
    console.log(message);
  }

  public error(error: any): void {
    console.error(error);
  }
}