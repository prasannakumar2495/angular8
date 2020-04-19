import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from "../dashboard.service";

/** import { DashboardService } from "../dashboard.service";
 * this specifies that the service is made available only in the my-module module*/


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent,
    AboutComponent,
    MyProfileComponent],
  providers: [DashboardService]
})
export class MyModuleModule { }
