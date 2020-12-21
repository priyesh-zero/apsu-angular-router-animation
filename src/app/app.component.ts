import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animation } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animation]
})
export class AppComponent {
  title = 'Apsu'
  user = {
    user: 'Guest',
    type: 'guest'
  }
  show = {
    header: false,
    footer: false
  }

  outletFunc(outletRef: RouterOutlet) {
    console.log(outletRef.activatedRouteData['depth'])
    return outletRef && outletRef.isActivated && outletRef.activatedRouteData['depth']
  }
}
