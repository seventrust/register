import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../_servicios/index';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;

  constructor(private alertaService: AlertaService) { }

  ngOnInit() {
    this.alertaService.getMessage().subscribe(message => this.message = message);
  }

}
