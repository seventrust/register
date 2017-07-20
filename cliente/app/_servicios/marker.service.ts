import { Injectable } from '@angular/core';
import { Marker } from '../_modelo/marker';
import { MARKERS } from './mock-marker';

@Injectable()
export class MarkerService {

  constructor() { }

  getMarkers(): Marker[] {
    return MARKERS;
  }
}
