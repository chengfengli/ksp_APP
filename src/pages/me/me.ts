import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagelistPage } from '../messagelist/messagelist';
import { FileMePage } from '../file-me/file-me';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  myFile = FileMePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

  // 跳转到消息中心页面
  toMessagePage(){
    this.navCtrl.push(MessagelistPage);
  }

}
