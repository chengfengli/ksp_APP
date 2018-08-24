import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 文档页面
 */

@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }

}
