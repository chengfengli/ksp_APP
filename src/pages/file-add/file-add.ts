///<reference path="../../yntree/yntree.d.ts"/>
import { Component } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Docu } from '../../entity/docu/Docu';
import { FilePath } from '@ionic-native/file-path';
import { FileMePage } from '../file-me/file-me';

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
  fileName = '';
  // 显示的部门
  depStr = '';
  fileURL = '';
  token = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private transfer: FileTransfer,private fileChooser: FileChooser,public httpServe: HttpProvider,
    public filePath: FilePath) {
      this.httpServe.storageGet('token').subscribe((res)=>{
        this.token = res;
      })
  }

  ionViewDidLoad() {
  }

  /**
   * 选择本地文件
   */
  chooserFile(){
    this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(filePath => {
        if(this.httpServe.checkSuffix(filePath)){
          this.fileURL = filePath;
          this.fileName = filePath.substring(filePath.lastIndexOf('/')+1);
        }else{
          this.httpServe.errorToast('文件格式不正确');
        }
      }).catch(e => {
        alert(e)
      })
    }).catch(e => {
      alert(e)
    })
  }


  /**
   * 上传文件
   */
  upload(){
    console.log(this.docu)
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions  = {
      fileKey: 'file',
      fileName: this.fileName,
      params: this.docu
    }
    fileTransfer.upload(this.fileURL,encodeURI(this.httpServe.apiURL+'/doc/create.json?token='+this.token), options)
    .then((data) => {
      if(data.responseCode===200){
        this.httpServe.successToast('上传成功',()=>{
          this.navCtrl.popTo(FileMePage);
        });
      }else{
        this.httpServe.errorToast('上传失败');
      }
    }, (err) => {
      console.log(JSON.stringify(err));
      alert('异常'+JSON.stringify(err));
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
        this.depStr+=res[i].name+',';
        this.docu.orgResource+=res[i].value+',';
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
    this.docu.column = res.typeName;
  }

  /**
   * 获取标签
   * @param res 
   */
  getTag(res){
    this.showTag = false;
    if(res.length==0){
      this.docu.tagStr = '';
    }else{
      this.docu.tagStr = '';
      for(let i=0;i<res.length;i++){
        this.docu.tagStr+=res[i].tagName+',';
        this.docu.tagId+=res[i].id+',';
      }
    }
  }
}
