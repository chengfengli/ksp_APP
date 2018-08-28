import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-advice',
  templateUrl: 'advice.html',
})
export class AdvicePage {
  currentChoice = 'column';
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionCtrl:ActionSheetController,public platform:Platform,
  public camera:Camera) {

  }

  choice(type){
    this.currentChoice = type;
    console.log(23)
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
            icon:!this.platform.is('ios') ? 'ios-folder' : 'md-folder',
            handler: () =>{
              this.choosePhoto(0);
            }
        },
        {
          cssClass:'action-sheets-button-pic',
          text: '拍照',
          icon:!this.platform.is('ios') ? 'ios-camera' : 'md-camera',
          handler: () =>{
            this.choosePhoto(this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    }).present();
  }
}
