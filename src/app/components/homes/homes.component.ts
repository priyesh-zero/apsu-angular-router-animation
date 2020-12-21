import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TestServiceService } from 'src/app/service/test-service.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  setting = false
  visibility = false

  homes = [
    {
      id: '145',
      rent: '25000',
      deposit: '45000',
      src: '../../../assets/cook.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas, sapiente facilis eius praesentium eos voluptatum obcaecati reiciendis aut eaque.'
    },
    {
      id: '141',
      rent: '25000',
      deposit: '45000',
      src: '../../../assets/cook.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas, sapiente facilis eius praesentium eos voluptatum obcaecati reiciendis aut eaque.'
    },
    {
      id: '132',
      rent: '25000',
      deposit: '45000',
      src: '../../../assets/cook.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas, sapiente facilis eius praesentium eos voluptatum obcaecati reiciendis aut eaque.'
    },
    {
      id: '122',
      rent: '25000',
      deposit: '45000',
      src: '../../../assets/cook.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas, sapiente facilis eius praesentium eos voluptatum obcaecati reiciendis aut eaque.'
    },
    {
      id: '123',
      rent: '25000',
      deposit: '45000',
      src: '../../../assets/cook.jpg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas, sapiente facilis eius praesentium eos voluptatum obcaecati reiciendis aut eaque.'
    },
  ]

  constructor(private App: AppComponent, private test: TestServiceService) { 
    App.show.header = true
    App.show.footer = true
    console.log("Hello")
  }

  ngOnInit() {
  }

  settingClick() {
    console.log("This is setting Click")
    this.setting = !this.setting
    if (this.visibility) {
      setTimeout(() => { this.visibility = !this.visibility }, 500)
    } else {
      this.visibility = !this.visibility
    }
    // console.log("Hello")
    this.test.getJson()
      .subscribe(data => {
        console.log(data)
      })

  }

}
