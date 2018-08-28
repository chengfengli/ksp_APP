import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheet, ActionSheetController, Platform } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * 发布资讯
 */

@Component({
  selector: 'page-releaseinfo',
  templateUrl: 'releaseinfo.html',
})
export class ReleaseinfoPage {
  colum= '';
  tags= '';
  resource ='';
  title = '';
  con = '';
  showColumn = false;
  showTag = false;
  actionHud:ActionSheet;
  imgTyep: string;
  //是否裁剪图片
  picEdit: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public httpServe: HttpProvider,public actionCtrl:ActionSheetController,
    public platform:Platform) {
    this.httpServe.post({url:'my/test.json'},(res)=>{
      console.log(res)
    },)
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
  getTag(res){
    console.log(res)
    this.showTag = false;
    // if(res.length==0){
    //   this.tags = '';
    // }else{
    //   console.log(res)
    //   this.tags ='标签'+ res;
    // }
    if(res.length==0){
      this.tags = '';
    }else{
      this.tags = res;
      // for(let i=0;i<res.length;i++){
      //   this.tags+=res[i].name+'，';
      // }
    }
  }

  closeTag(){
    this.showTag = false;
  }
  


  //选择图片上传方式
  setPhoto(imgTyep) {
    if (imgTyep == "logo") {
      this.picEdit = true;
  } else {
      this.picEdit = false;
  }
    this.actionHud = this.actionCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
          {
            cssClass:'action-sheets-button-pic',
            text: '从相册选择...',
            icon:!this.platform.is('ios') ? 'ios-image' : 'md-image',
            handler: () =>{
              // this.choosePhoto(0, this.picEdit);
            }
        },
        {
          cssClass:'action-sheets-button-pic',
          text: '拍照',
          icon:!this.platform.is('ios') ? 'ios-camera' : 'md-camera',
          handler: () =>{
            // console.log('拍照')
            //this.choosePhoto(this.camera.PictureSourceType.CAMERA, this.picEdit);
          }
        }
      ]
  });
  this.actionHud.present();
  }
  addImg(img) {
    this.setPhoto(img);
}

}
