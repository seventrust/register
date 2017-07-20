import { Component, OnInit } from '@angular/core';
import { User } from '../_modelo/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor() { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
