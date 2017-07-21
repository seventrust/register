import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../_servicios/index';
import { Marker } from '../_modelo/marker';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  markers: Marker[];
  lat: number = -33.4485353;
  lon: number = -70.6969406;
  constructor(private markerService: MarkerService) { }

  ngOnInit() {
   this.getHeroes();
    console.log(JSON.stringify(this.markers));
  }
  getHeroes(): void {
    this.markerService.getMarkers()
      .then(markers => this.markers = markers);

  }
}
