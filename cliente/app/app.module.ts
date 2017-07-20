import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './app.material';
import { routing } from './app.routing';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { AlertComponent } from './alert/alert.component';

import { AlertaService, AutenticacionService, MarkerService } from './_servicios/index';
import { customHttpProvider } from './_helper/custom-http';
import { GuardianGuard } from './_guardia/guardian.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapsComponent,
    AlertComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJA_CvZ9KjE3Uw_lbQivuQVwWC6lg_G-4'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    routing

  ],
  providers: [
    customHttpProvider,
    GuardianGuard,
    AlertaService,
    AutenticacionService,
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
