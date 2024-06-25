import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  public constructor(
    private _loadingService: LoadingService,
    private _loggerService: LoggerService
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.isLoading = true;
    
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this._loggerService.error(error);
          throw error;
        }),
        finalize(() => this._loadingService.isLoading = false)
      );
  }
}