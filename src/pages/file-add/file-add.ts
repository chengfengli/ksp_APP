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
  showColumn = false;
  title = '';
  // 栏目
  colum = '';
  // 显示的部门
  depStr = '';
  // 标签
  tagStr = '';
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
      this.depStr = '';
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
   * 获取选择的栏目
   * @param res 
   */
  getColumn(res){
    this.showColumn = false;
  }

  closeColumn(){
    this.showColumn = false;
  }

  /**
   * 保存
   */
  saveFile(){
    
  }

}
