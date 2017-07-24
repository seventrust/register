import { Injectable } from '@angular/core';
import { User } from '../_modelo/user';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class UsersService {
  usuarios: User[];
  headers = new Headers({
    'Content-Type': 'aplication/json'
  });

  constructor(private http: Http) { }

  getUsuarios() {
    return this.http.get('/usuarios')
      .map((response: Response) => {
        this.usuarios = response.json();
      });
  }

}
