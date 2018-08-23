import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { HttpProvider } from '../../providers/http/http';

/**
 * 消息列表页面
 */

@Component({
  selector: 'page-messagelist',
  templateUrl: 'messagelist.html',
})
export class MessagelistPage extends BasePage {
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServer: HttpProvider) {
    super(httpServer);
    for(let i=0;i<20;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    
  }

  //下拉刷新
  doRefresh(refresher){
    this.refresher = refresher;
    if(!this.httpServer.isEmpty(this.infiniteScroll)){
      this.infiniteScroll.enable(true);
    }
  }

}
