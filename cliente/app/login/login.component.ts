import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertaService, AutenticacionService } from '../_servicios/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autenticacionService: AutenticacionService,
    private alertaService: AlertaService
  ) { }

  ngOnInit() {
    this.autenticacionService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    console.log(this.returnUrl);
  }

  login() {
    this.loading = true;
    this.autenticacionService.login(this.model.usualogin, this.model.usuapass)
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl+'/mapas']);
      },
      error => {
        this.alertaService.error(error);
        this.loading = false;
      }
    )
  }

}
