///<reference path="../../yntree/yntree.d.ts"/>
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

/**
 * 上传文档
 */

@Component({
  selector: 'page-file-add',
  templateUrl: 'file-add.html',
})
export class FileAddPage {

  showDep = false;
  title = '';
  colum = '';
  // 显示的部门
  depStr = '选择可见部门';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileAddPage');
  }

  count(){
    console.log(1)
  }

  /**
   * 获取选择的部门数据
   * @param res 
   */
  getDeps(res){
    this.showDep = false;
    if(res.length==0){
      this.depStr = '选择可见部门';
    }else{
      this.depStr = '';
      for(let i=0;i<res.length;i++){
        this.depStr+=res[i].name+'，';
      }
    }
  }

  /**
   * 关闭部门弹窗
   */
  closeDep(){
    this.showDep = false;
  }

  /**
   * 保存
   */
  saveFile(){
    
  }

}
