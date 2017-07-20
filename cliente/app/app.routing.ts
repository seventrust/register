import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuardianGuard } from './_guardia/guardian.guard';
import { MapsComponent } from './maps/maps.component';
const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [GuardianGuard],
  children: [
    {path: 'mapas', component: MapsComponent}
  ]},
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
