import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environment/environment";
import { DummyProduct } from "../models/dummy-api.model";

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  public constructor(private _http: HttpClient) {}

  public getProducts(): Observable<DummyProduct[]> {
    return this._http.get<DummyProduct[]>(`${environment.dummyApiUrl}products`);
  }
}