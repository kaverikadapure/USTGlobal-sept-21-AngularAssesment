import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'cars', component:CarsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
