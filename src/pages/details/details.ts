import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

/**
 * 资讯详情
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  testCheckboxOpen = false;
  testCheckboxResult: any;
  showTag = false;
  tags = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alertCtrl: AlertController) {

  }
  //接收tags值
  getTag(res){
    console.log(res)
    this.showTag = false;
    if(res.length==0){
      this.tags = '';
    }else{
      this.tags = res;
    }
  }
  //关闭tags弹框
  closeTag(){
    this.showTag = false;
  }
}
