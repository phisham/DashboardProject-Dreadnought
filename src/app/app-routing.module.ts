import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './mainpage/dashboard/dashboard.component';
import { HomeComponent } from './mainpage/home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {
    component:MainpageComponent,
    path:'main',
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:"full"
      }
    ]
  },
  {
    path:'',
    redirectTo:'main',
    pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
