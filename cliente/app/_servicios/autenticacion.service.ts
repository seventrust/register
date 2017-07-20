import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import  {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AutenticacionService {
  headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', {usualogin: username, usuapass: password}, this.headers)
    .map((response: Response) => {
      let user = response.json();
      if(user){
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
