import {AfterViewInit, Component, OnInit} from '@angular/core';
import {searchResult} from "../interfaces/searchResult";
import {IpGeolocationService} from "../services/ip-geolocation.service";
import * as L from 'leaflet';
import {LatLngTuple, Layer, marker} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  public data: searchResult | undefined;
  private map: L.Map | undefined;

  private defaultPosition: LatLngTuple = [50, 0]

  private initMap(position: LatLngTuple): void {
    this.map = L.map('map', {
      center: position,
      zoom: 3
    });
    console.log("init map")

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  constructor(private ipGeolocation: IpGeolocationService) {
    IpGeolocationService.data.subscribe({
      next: value => {
        this.data=value;
        if(this.map){
          let center: LatLngTuple = [value.location.lat, value.location.lng];
          let name: string = `${value.location.city}, ${value.location.country}`;
          this.map.flyTo(center, 13);
          L.marker(center, {title:name}).addTo(this.map);
        }
      }
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap(this.defaultPosition);
  }

}
