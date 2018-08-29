import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * 评论
 */

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  height = '';
  action = '展开';
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  //收缩事件
  toggleEvent(){
    if(this.action == '展开'){
      this.height = 'auto';
      this.action = '收起'
    }else{
      this.height = '24px';
      this.action = '展开'
    }
    
  }

}
