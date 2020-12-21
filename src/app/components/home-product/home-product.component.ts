import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  homeProduct = {
    id: '123',
    rent: 25000,
    deposit: 45000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dolor. Ipsam, laudantium repellat deserunt itaque eum officiis omnis. Animi, necessitatibus!',
    rating: 1.752,
    imgScr: [
      '../../../assets/home.jpg',
      '../../../assets/cook.jpg',
      '../../../assets/landing.jpg',
      
    ]
  }

  index = 0

  fullScreen = false

  ratingStar = []

  constructor(private App:AppComponent, private route:ActivatedRoute) { 
    App.show.header = true
    App.show.footer = true
   }

  ngOnInit() {
    this.homeProduct.id = this.route.snapshot.paramMap.get('id')
    this.ratingStar = []
    this.ratingStar = this.ratingImg()
  }

  nextImg () {
    this.index = this.index==(this.homeProduct.imgScr.length-1)?0:this.index+1
  }

  prevImg () {
    this.index = this.index==0?this.homeProduct.imgScr.length-1:this.index-1
  }

  ratingImg () {
    let fullRating = Math.floor(this.homeProduct.rating%10)
    console.log(Math.floor(fullRating), this.homeProduct.rating%10)
    let imgHTML = []
    for(let i = 0; i < fullRating; i++) {
      imgHTML.push('../../../assets/rating_stars/full.png')
    }
    let decVal = this.homeProduct.rating%1
    if (decVal <= 0.25) {
      imgHTML.push('../../../assets/rating_stars/quater.png')
    } else if (decVal > 0.25 && decVal < 0.75) {
      imgHTML.push('../../../assets/rating_stars/half.png')
    } else {
      imgHTML.push('../../../assets/rating_stars/3quater.png')
    }
    for (let i = 0; i < (5 - imgHTML.length); i++) {
      imgHTML.push('../../../assets/rating_stars/empty.png')
    }
    return imgHTML
  }

  fullScreenClick () {
    console.log(this.fullScreen)
    this.fullScreen = !this.fullScreen
  }

}
