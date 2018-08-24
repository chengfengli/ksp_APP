import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ReleaseinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-releaseinfo',
  templateUrl: 'releaseinfo.html',
})
export class ReleaseinfoPage {
  colum= '';
  tags= [];
  resource ='';
  title = '';
  con = '';
  showColumn = false
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  releaseEvent(){
    if(this.colum ===''){
      let toast = this.toastCtrl.create({
        message: '请选择栏目',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.tags.length<=0){
      let toast = this.toastCtrl.create({
        message: '请选择标签',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.title===''){
      let toast = this.toastCtrl.create({
        message: '请输入资讯标题',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.resource===''){
      let toast = this.toastCtrl.create({
        message: '请输入资讯来源',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.con===''){
      let toast = this.toastCtrl.create({
        message: '请输入资讯内容',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else{
      var res ={
        colum : this.colum,
        tags: this.tags,
        resource: this.resource,
        title: this.title,
        con: this.con
      }
      console.log(res)
    }
  }
  getColumn(res){
    console.log(res)
    this.showColumn = false;
    if(res.length==0){
      this.colum = '';
    }else{
      this.colum ='栏目'+ res;
    }
  }

  closeColumn(){
    this.showColumn = false;
  }

}
