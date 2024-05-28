import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_STATUS_API_URL, HttpStatusRequest } from '../models/http-status-api.model';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusApiService {
  public constructor(private http: HttpClient) {}

  public getHttpStatus(request: HttpStatusRequest): Observable<string> {
    return this.http.get<string>(`${HTTP_STATUS_API_URL}${request.code.toString()}?sleep=${request.sleep.toString()}`);
  }
}