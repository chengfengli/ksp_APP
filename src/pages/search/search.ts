import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 搜索页面
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  flag = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // 搜索
  search(){
    this.flag = !this.flag;
  }

}
