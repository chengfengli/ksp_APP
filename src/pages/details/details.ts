import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

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
  tags = '';
  id = '';
  detailsCon = {}

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alertCtrl: AlertController,public httpServe:HttpProvider) {
    this.id = this.navParams.get('id')
    console.log(this.id)
   
  }
  ionViewDidLoad() {
    this.defaultEvent();
  }
  defaultEvent(){
    this.httpServe.request({url:'/news/oneNews.json',type:'get',params:{id:this.id}},(res)=>{
      console.log(res)
      this.detailsCon = res.data.news;
     })
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
