import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 系统设置
 */

@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

}
