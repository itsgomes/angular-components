import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DUMMY_API_URL, DummyProduct } from "../models/dummy-api.model";

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  public constructor(private _http: HttpClient) {}

  public getProducts(): Observable<DummyProduct[]> {
    return this._http.get<DummyProduct[]>(`${DUMMY_API_URL}products`);
  }
}