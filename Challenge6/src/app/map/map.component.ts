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
          let lat = value.location.lat;
          let lng = value.location.lng;

          let center: LatLngTuple = [lat, lng];
          let name: string = `${value.location.city}, ${value.location.country}`;
          if(lat === 0 && lng === 0){
            this.map.flyTo([50, 0], 3);
          }else{
            this.map.flyTo(center, 13);

            let width = 30;
            let height = 50;

            let icon = L.icon({
              iconUrl: 'assets/icon-location.svg',
              iconSize:     [width, height],
              iconAnchor:   [width/2, height],
              popupAnchor:  [-3, -76]
            });
            L.marker(center, {icon: icon, title:name}).addTo(this.map);
          }
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
