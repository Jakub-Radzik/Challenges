import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {searchResult} from "../interfaces/searchResult";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  public static data: Subject<searchResult> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  //TODO: extract api key and add git ignore
  getLocationByIP(ip: string): Observable<searchResult>{
    let key = "at_YfHLBSmjA9zzCFypd8dDdNV4jKDkT";
    let url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`;

    let temp = this.httpClient.get<searchResult>(url);
    temp.subscribe(res=>IpGeolocationService.data.next(res));

    return temp;
  }

}
