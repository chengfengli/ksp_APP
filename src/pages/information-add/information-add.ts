import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WebIntent } from '@ionic-native/web-intent';

/**
 * 添加外部咨讯
 */

@Component({
  selector: 'page-information-add',
  templateUrl: 'information-add.html',
})
export class InformationAddPage {
  url = 'https://mp.weixin.qq.com/s/TeKk6y6Ra86uPn62XUhRkw';
  constructor(public navCtrl: NavController, public navParams: NavParams,public webIntent:WebIntent) {
    webIntent.getIntent().then((res)=>{
      let clipItems = res.clipItems;
      this.url = clipItems[0].htmlText;
      alert(this.url);
    }).catch(err=>{
      alert('异常：'+JSON.stringify(err))
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationAddPage');
  }

}