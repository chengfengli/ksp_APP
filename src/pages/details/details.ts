import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alertCtrl: AlertController,
  public socialSharing:SocialSharing) {

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
   //分享
   shareeEvent(){
    this.socialSharing.share('分享、分享资讯!', '我的资讯', "../assets/imgs/logo.png", '');
  }
}
