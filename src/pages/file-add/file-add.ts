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
  colum = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileAddPage');
  }

  /**
   * 保存
   */
  saveFile(){
    
  }

}
