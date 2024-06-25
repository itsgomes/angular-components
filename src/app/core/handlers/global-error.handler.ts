import { ErrorHandler, Injectable } from "@angular/core";
import { LoggerService } from "../services/logger.service";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  public constructor(private _loggerService: LoggerService) {
    super();
  }

  public override handleError(error: any): void {
    this._loggerService.error(error);
  }
}