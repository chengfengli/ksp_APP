import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileAddPage } from '../file-add/file-add';
import { FileDetailPage } from '../file-detail/file-detail';
import { HttpProvider } from '../../providers/http/http';
import { Search } from '../../entity/search/search';
import { BasePage } from '../base/base';

@Component({
  selector: 'page-file-me',
  templateUrl: 'file-me.html',
})
export class FileMePage extends BasePage {
  search:Search = new Search();
  addFile = FileAddPage;
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe: HttpProvider) {
    super(httpServe);
  }

  ionViewDidLoad() {
    this.getData(this.search);
  }

  getDataByCondetion(res){
    this.list = [];
    this.getData(res);
  }
  
  /**
   * 查询数据
   * @param res 
   */
  getData(res){
    this.search = res;
    this.httpServe.request({url:'/doc/search.json',params:res,params2:{selector:''}},(res)=>{
      this.closeRefreshAndInfinite();
      if(res.data.size!=0){
        for(let i in res.data.list){
          this.list.push(res.data.list[i]);
        }
        this.notMoreScroll();
      }
      this.search.isNextPage = res.data.size>=this.search.limit;
    })
  }

  /**
   * 下拉刷新
   * @param refresher 
   */
  doRefresh(refresher){
    this.refresher = refresher;
    if(!this.httpServer.isEmpty(this.infiniteScroll)){
      this.infiniteScroll.enable(true);
    }
    this.search.isNextPage = true;
    this.search.pageNumber = 1;
    if(this.search.isNextPage){
      this.list = [];
      this.getData(this.search);
    }
  }

  //加载更多
  doInfinite(infiniteScroll){
    this.infiniteScroll = infiniteScroll;
    if(this.search.isNextPage){
      this.search.pageNumber+=1;
      this.getData(this.search);
    }else{
      this.notMoreScroll();
    }
  }

  /**
   * 文件详情
   */
  fileDetail(){
    this.navCtrl.push(FileDetailPage);
  }

  /**
   * 删除文档
   */
  delete(id){
    this.httpServe.request({url:'/doc/remove.json',type:'get',params:{id:id}},(res)=>{
      this.httpServe.successToast(res.msg,()=>{
        let i=0
        for(;i<this.list.length;i++){
          if(this.list[i].id===id){
            break;
          }
        }
        this.list.splice(i,1);
      });
    })
  }
}
