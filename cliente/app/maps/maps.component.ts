import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MarkerService } from '../_servicios/index';
import { Marker } from '../_modelo/marker';
declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit, OnDestroy {
  markers: Marker[];
  preMarkers: Marker[];
  lat: number = -33.4485353;
  lon: number = -70.6969406;
  zoom: number = 14;
  interval: any;
  color = '#388e3c';
  icon = '../assets/img/truck_icon.png';

  constructor(private markerService: MarkerService) { }

  ngOnInit() {
    let mapProp = {
      center: new google.maps.LatLng(this.lat, this.lon),
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.getMarkers();

    let map = new google.maps.Map(document.getElementById('map'), mapProp);
  }

  ngAfterViewInit(): void {
    this.interval = setInterval(() => { this.getMarkersCall(); }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getMarkers(): void {
    this.markerService.getMarkers()
      .then(markers => this.markers = markers);

  }

  getMarkersCall(): void {
    this.markerService.getMarkers()
      .then(markers => this.markers = markers);
    console.log(this.markers);
  }
}
