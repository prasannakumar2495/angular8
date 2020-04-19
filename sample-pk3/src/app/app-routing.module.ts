import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './my-module/dashboard/dashboard.component';
import { AboutComponent } from './my-module/about/about.component';


const routes: Routes = [
  {path:"Dashboard",component:DashboardComponent},
  {path:"About", component:AboutComponent},
  {path:"",redirectTo:"Dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
