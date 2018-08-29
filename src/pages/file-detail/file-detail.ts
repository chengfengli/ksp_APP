import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 文档详情
 */

@Component({
  selector: 'page-file-detail',
  templateUrl: 'file-detail.html',
})
export class FileDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileDetailPage');
  }

}
