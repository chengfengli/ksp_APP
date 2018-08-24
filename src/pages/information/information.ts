import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MePage } from '../me/me';

/**
 * 咨讯页面
 */

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }


  to(){
    this.navCtrl.push(MePage);
  }
}
