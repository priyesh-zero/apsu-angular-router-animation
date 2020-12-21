import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { HomesComponent } from './components/homes/homes.component';
import { CooksComponent } from './components/cooks/cooks.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { HomeProductComponent } from './components/home-product/home-product.component'
import { TestServiceService } from './service/test-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomesComponent,
    CooksComponent,
    FooterComponent,
    NavBarComponent,
    HomeProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
