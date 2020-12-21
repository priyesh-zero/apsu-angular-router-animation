import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { HomesComponent } from './components/homes/homes.component';
import { CooksComponent } from './components/cooks/cooks.component';
import { HomeProductComponent } from './components/home-product/home-product.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, data: { depth: 0 }},
  {path: 'home', component: HomesComponent, data: { depth: 1 }},
  {path: 'cook', component: CooksComponent, data: { depth: 1 }},
  {path: 'about', component: LandingPageComponent, data: { depth: 0 }},
  {path: 'home/:id', component: HomeProductComponent, data: { depth: 2 }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
