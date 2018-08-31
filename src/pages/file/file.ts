import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileDetailPage } from '../file-detail/file-detail';
import { HttpProvider } from '../../providers/http/http';
import { Search } from '../../entity/search/search';

/**
 * 文档页面
 */

@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {
  search:Search = new Search();
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServee: HttpProvider) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    this.getData('')
  }

  /**
   * 查询数据
   * @param res 条件
   */
  getData(res){
    
  }


  /**
   * 文件详情
   */
  fileDetail(){
    this.navCtrl.push(FileDetailPage);
  }

}
