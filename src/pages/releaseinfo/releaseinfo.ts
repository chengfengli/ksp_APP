import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheet, ActionSheetController, Platform } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Camera } from '@ionic-native/camera';
import { News } from '../../entity/news/news';
import { User } from '../../entity/user/user';

/**
 * 发布资讯
 */

@Component({
  selector: 'page-releaseinfo',
  templateUrl: 'releaseinfo.html',
})
export class ReleaseinfoPage {
  news: News = new News();
  showColumn = false;
  showTag = false;
  user:User = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public httpServe: HttpProvider,public actionCtrl:ActionSheetController,
    public platform:Platform,public camera: Camera) {
    // this.httpServe.post({url:'my/test.json'},(res)=>{
    //   console.log(res)
    // },)
  }

  releaseEvent(){
    if(this.news.column ===''){
      this.httpServe.errorToast('请选择栏目');
      return;
    }else if(this.news.tags.length<=0){
      let toast = this.toastCtrl.create({
        message: '请选择标签',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.news.name===''){
      let toast = this.toastCtrl.create({
        message: '请输入资讯标题',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.news.sourceSite===''){
      let toast = this.toastCtrl.create({
        message: '请输入资讯来源',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else if(this.news.content===''){
      let toast = this.toastCtrl.create({
        message: '请输入资讯内容',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
      return;
    }else{
      
    }
  }
  //接收colum值
  getColumn(res){
    console.log(res)
    this.showColumn = false;
    if(res===null){
      this.news.column = '';
    }else{
      this.news.column = res.itemText;
    }
  }
  // 关闭栏目弹框
  closeColumn(){
    this.showColumn = false;
  }
  // 接收tags值
  getTag(res){
    console.log(res)
    this.showTag = false;
    if(res.length > 0){
      res.forEach(item => {
        this.news.tags +=item.tagName+ ','
      },this);
    }
  }
  // 关闭tag弹框
  closeTag(){
    this.showTag = false;
  }
  
  /**
   * 打开相册或照相机
   * @param sourceType 0,从相册选择，this.camera.PictureSourceType.CAMERA,照相机
   * @param edit 
   */
  choosePhoto(sourceType) {
    const options = {
      quality: 100,//定义保存图片的质量，取值范围为[0,100]，100表示质量最高
      destinationType: this.camera.DestinationType.FILE_URI,
      // 选择返回数据的格式，取值为三个常量之一
      // Camera.DestinationType.DATA_URL//表示返回图片作为base64编码 "data:image/jpeg;base64,"+
      // Camera.DestinationType.FILE_URI//表示返回图片作为文件URI
      // Camera.DestinationType.NATIVE_URI//表示返回图片作为文件URI
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      sourceType: sourceType,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
      correctOrientation: true,
      // allowEdit: edit, // true\flase
      targetWidth: 100,
      targetHeight: 100,
    }
    this.camera.getPicture(options).then((imageData) => {
      alert(imageData)
    }, (err) => {
      alert('err'+err)
    });
  }


  /**
   * 选择打开相册或照相机
   */
  setPhoto() {
    this.actionCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
          {
            cssClass:'action-sheets-button-pic',
            text: '从相册选择...',
            icon:!this.platform.is('ios') ? 'file-photo-o' : 'file-photo-o',
            handler: () =>{
              this.choosePhoto(0);
            }
        },
        {
          cssClass:'action-sheets-button-pic',
          text: '拍照',
          icon:!this.platform.is('ios') ? 'camera-retro' : 'camera-retro',
          handler: () =>{
            this.choosePhoto(this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    }).present();
  }

}
