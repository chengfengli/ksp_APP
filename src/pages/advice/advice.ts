import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-advice',
  templateUrl: 'advice.html',
})
export class AdvicePage {
  currentChoice = 'column';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  choice(type){
    this.currentChoice = type;
    console.log(23)
  }
}
