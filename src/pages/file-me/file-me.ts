import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-file-me',
  templateUrl: 'file-me.html',
})
export class FileMePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileMePage');
  }

  // 查询
  getData(res){
    console.log(res);
  }
}
