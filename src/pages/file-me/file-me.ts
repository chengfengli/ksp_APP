import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileAddPage } from '../file-add/file-add';
import { FileDetailPage } from '../file-detail/file-detail';

@Component({
  selector: 'page-file-me',
  templateUrl: 'file-me.html',
})
export class FileMePage {
  addFile = FileAddPage;
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileMePage');
  }

  
  /**
   * 查询数据
   * @param res 
   */
  getData(res){
    console.log(res);
  }

  /**
   * 文件详情
   */
  fileDetail(){
    this.navCtrl.push(FileDetailPage);
  }
}
