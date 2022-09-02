import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent, canActivate: [RouteGuardService]},
  {path:'home/:name', component: HomeComponent, canActivate: [RouteGuardService]},
  {path: 'project', component: ProjectComponent, canActivate: [RouteGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
