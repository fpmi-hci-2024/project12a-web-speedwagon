import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './security/auth.guard';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ProfileComponent } from './components/profile-component/profile-component.component';
import { RoutesComponent } from './components/routes-component/routes-component.component';
import { SearchComponent } from './components/search-component/search-component.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'reservations',
    component: ReservationsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'routes',
    component: RoutesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
