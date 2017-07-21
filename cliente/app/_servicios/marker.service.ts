import { Injectable } from '@angular/core';
import { Marker } from '../_modelo/marker';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MarkerService {
  markerUrl = '/monitor/rutas';
  constructor(private http: Http) { }

  getMarkers(): Promise<Marker[]> {
    return this.http.get(this.markerUrl)
      .toPromise()
      .then(response => response.json() as Marker[])
      .catch(this.handleErrors);
  }

  handleErrors(error: any): Promise<any> {
    console.error('Un error con la promesa ha ocurrido', error);
    return Promise.reject(error.message || error);
  }
}
