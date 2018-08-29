import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MeanswerPage } from '../meanswer/meanswer';
import { typeSourceSpan } from '@angular/compiler';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the QuestiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-questiondetails',
  templateUrl: 'questiondetails.html',
})
export class QuestiondetailsPage {
  height = '';
  action = '展开';
  list = [];
  showTag = false;
  tags = '';
  comments = ''
  allcomments = [];
  showComments=false;
  adopt = true;
  color = '#ABAFB0';
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private socialSharing:SocialSharing) {
    for(let i=0;i<3;i++){
      this.list.push(i,this.allcomments);
    }
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
  //跳转到我要回答页面
  toMyAnswer() {
    this.navCtrl.push(MeanswerPage)
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
//关闭选择标签
  closeTag(){
    this.showTag = false;
  }
  presentPrompt() {
    this.showComments = true
    
  }
  //点赞
  praise(){
    this.color = '#5ce5c7';
  }
  //分享
  shareeEvent(){
    this.socialSharing.share('分享、分享问答!', '我的问答', "../assets/imgs/logo.png", '');
  }
}
