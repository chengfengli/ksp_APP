import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { SocialSharing } from '@ionic-native/social-sharing';

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
  tags = [];
  id = '';
  detailsCon = {}
  flag = {collectIs: true}

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alertCtrl: AlertController,public httpServe:HttpProvider,
  public socialSharing: SocialSharing) {
    this.id = this.navParams.get('id')
  }
  ionViewDidLoad() {
    this.defaultEvent();
  }
  defaultEvent(){
    this.httpServe.request({url:'/news/oneNews.json',type:'get',params:{id:this.id}},(res)=>{
      this.detailsCon = res.data.news;
      this.flag = res.data;
     })
  }
  //接收tags值
  getTag(res){
    this.showTag = false;
    if(res.length==0){
      this.tags = [];
    }else{
      this.tags = [];
      for(let i = 0; i < res.length; i++){
        this.tags.push(res[i].id)
      }
      // 收藏
      this.httpServe.request({url:'/news/collect.json',type:'get',params:{newsId:this.id, tagIds:this.tags}},(res)=>{
        if(res.code==='200'){
          this.httpServe.successToast(res.msg);
        }else{
          this.httpServe.errorToast(res.msg);
        }
       })
    }
  }
  //判断是否显示tags弹框
  showTagEvent(){
    if(this.flag.collectIs == true){
      this.tags = [];
      // 取消收藏
      this.httpServe.request({url:'/news/collect.json',type:'get',params:{newsId:this.id, tagIds:this.tags}},(res)=>{
        if(res.code==='200'){
          this.httpServe.successToast(res.msg);
        }else{
          this.httpServe.errorToast(res.msg);
        }
       })
    }else{
      this.showTag = true
    }
  }
  //关闭tags弹框
  closeTag(){
    this.showTag = false;
  }
  //分享
  share() {
    this.socialSharing.share('分享、分享问答!', '我的问答', "../assets/imgs/logo.png", '');
  }
}
