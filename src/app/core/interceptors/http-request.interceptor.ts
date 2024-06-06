import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  public constructor(private _loadingService: LoadingService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.isLoading = true;
    
    return next.handle(req)
      .pipe(
        finalize(() => this._loadingService.isLoading = false)
      );
  }
}