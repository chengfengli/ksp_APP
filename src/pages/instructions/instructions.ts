import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 积分说明
 */

@Component({
  selector: 'page-instructions',
  templateUrl: 'instructions.html',
})
export class InstructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructionsPage');
  }

}
