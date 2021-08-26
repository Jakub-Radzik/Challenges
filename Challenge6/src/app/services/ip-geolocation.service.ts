import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {searchResult} from "../interfaces/searchResult";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  constructor(private httpClient: HttpClient) {
  }

  //TODO: extract api key and add git ignore
  getLocationByIP(ip: string): Observable<searchResult>{
    let key = "at_YfHLBSmjA9zzCFypd8dDdNV4jKDkT";
    let url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`;
    return this.httpClient.get<searchResult>(url);
  }

}
