
import { Component, OnInit, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})

export class LandingPageComponent implements OnInit {

  constructor(private App: AppComponent) {
    App.show.header = false
    App.show.footer = false
   }

  staticInfo = [
    {
      title: 'Homes',
      img: '../../../assets/home.jpg',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod.',
      link: 'home'
    },
    {
      title: 'Cooks',
      img: '../../../assets/cook.jpg',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod.',
      link: 'home'
    },
    {
      title: 'About',
      img: '../../../assets/home.jpg',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod.',
      link: 'about'
    }
  ]

  ngOnInit() {
  }

}
