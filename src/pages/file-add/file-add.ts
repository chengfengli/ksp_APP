///<reference path="../../yntree/yntree.d.ts"/>
import { Component } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Docu } from '../../entity/docu/Docu';

/**
 * 上传文档
 */

@Component({
  selector: 'page-file-add',
  templateUrl: 'file-add.html',
})
export class FileAddPage {
  docu:Docu = new Docu();
  showDep = false;
  showColumn = false;
  showTag = false;
  title = '';
  // 显示的栏目
  columStr = '';
  // 显示的部门
  depStr = '';
  // 显示的标签
  tagStr = '';
  fileURL = '';
  formData = null;;
  constructor(public navCtrl: NavController, public navParams: NavParams,private transfer: FileTransfer, private file: File,private fileChooser: FileChooser,public httpServe: HttpProvider) {
    let $this = this;
    document.getElementById('file').onchange=function(){
      $this.formData = new FormData();
      let files = this.file;
      $this.formData.append('file',files[0]);
    }
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
      params: this.docu
    }
    fileTransfer.upload(this.fileURL,'/doc/create.json', options)
    .then((data) => {
      this.httpServe.successToast('成功');
    }, (err) => {
      this.httpServe.errorToast('异常'+JSON.stringify(err));
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
    this.columStr = res.name;
  }

  /**
   * 获取标签
   * @param res 
   */
  getTag(res){
    this.showTag = false;
    if(res.length==0){
      this.tagStr = '';
    }else{
      this.tagStr = '';
      for(let i=0;i<res.length;i++){
        this.tagStr+=res[i].name+'，';
      }
    }
  }

  /**
   * 保存
   */
  saveFile(){
    this.upload();
    // this.httpServe.get({url:'/doc/create.json',params:this.docu},(res) => {

    // })
  }

}
