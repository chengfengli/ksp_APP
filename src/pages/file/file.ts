import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileDetailPage } from '../file-detail/file-detail';

/**
 * 文档页面
 */

@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }

  /**
   * 查询数据
   * @param res 条件
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
