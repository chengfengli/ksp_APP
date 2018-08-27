import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InstructionsPage } from '../instructions/instructions';

/**
 * 积分
 */

@Component({
  selector: 'page-integral',
  templateUrl: 'integral.html',
})
export class IntegralPage {
  InstructionsPage = InstructionsPage;
  currentDate = '2018-08';
  model = 'all';
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntegralPage');
  }

  getModel(res){
    this.model = res;
  }
}
