import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpRequestInterceptor } from '../interceptors/http-request.interceptor';

@NgModule({
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpRequestInterceptor, 
      multi: true 
    }
  ]
})
export class CoreModule {}