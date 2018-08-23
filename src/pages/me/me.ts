import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagelistPage } from '../messagelist/messagelist';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

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
