///<reference path="../../yntree/yntree.d.ts"/>
import { Component } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
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
  fileURL = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private transfer: FileTransfer, private file: File,private fileChooser: FileChooser) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileAddPage');
  }

  /**
   * 选择本地文件
   */
  chooserFile(){
    this.fileChooser.open().then(uri => {
      this.fileURL = uri;
    }).catch(e => {
      alert(e)
    })
  }


  /**
   * 上传文件
   */
  upload(){
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions  = {
      fileKey: 'file',
      fileName: 'name.jpg',  // 文件类型
      headers: {},
      params: {}
    }
    fileTransfer.upload('<file path>', '<api endpoint>', options)
    .then((data) => {
      // success
    }, (err) => {
      // error
    })
    
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
