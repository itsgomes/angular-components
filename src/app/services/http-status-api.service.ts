import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_STATUS_API_URL } from '../constants/constant';
import { HttpStatusRequest } from '../models/http-status-api.model';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusApiService {
  public constructor(private http: HttpClient) {}

  public getHttpStatus(request: HttpStatusRequest): Observable<string> {
    return this.http.get<string>(`${HTTP_STATUS_API_URL}${request.code.toString()}?sleep=${request.sleep.toString()}`);
  }
}