import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MeanswerPage } from '../meanswer/meanswer';

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
  allcomments = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
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
  presentPrompt(key) {
    let alert = this.alertCtrl.create({
      title: '评论',
      inputs: [
        {
          name: 'comments',
          placeholder: '请输入评论信息'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log(data.comments)
            this.comments = data.comments
            this.allcomments.push({name:"张三",comments:data.comments})

          }
        }
      ]
    });
    alert.present();
  }
}
