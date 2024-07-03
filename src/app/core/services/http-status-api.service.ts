import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { HttpStatusRequest } from '../models/http-status-api.model';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusApiService {
  public constructor(private _http: HttpClient) {}

  public getHttpStatus(request: HttpStatusRequest): Observable<string> {
    return this._http.get<string>(`${environment.httpStatusApiUrl}${request.code.toString()}?sleep=${request.sleep.toString()}`);
  }
}