import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {searchResult} from "../interfaces/searchResult";
import {Observable, Subject} from "rxjs";
import {ipApiKey} from "../../environments/apiKeys";

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  public static data: Subject<searchResult> = new Subject();
  public static loading: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  getLocationByIP(ip: string): Observable<searchResult>{
    IpGeolocationService.loading.next(true);
    let url = `https://geo.ipify.org/api/v1?apiKey=${ipApiKey}&ipAddress=${ip}`;

    let temp = this.httpClient.get<searchResult>(url);
    temp.subscribe(res=>IpGeolocationService.data.next(res));

    return temp;
  }

}
