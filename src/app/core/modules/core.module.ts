import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from '../handlers/global-error.handler';
import { HttpRequestInterceptor } from '../interceptors/http-request.interceptor';

@NgModule({
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpRequestInterceptor, 
      multi: true 
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class CoreModule {}