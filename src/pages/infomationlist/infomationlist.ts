import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { DetailsPage } from '../details/details';
import { HttpProvider } from '../../providers/http/http';
import { ReleaseinfoPage } from '../releaseinfo/releaseinfo';
import { Search } from '../../entity/search/search';

/**
 * 我的咨询
 */

@Component({
  selector: 'page-infomationlist',
  templateUrl: 'infomationlist.html',
})
export class InfomationlistPage  extends BasePage{
  releaseinfoPage = ReleaseinfoPage;
  search:Search = new Search();
  list=[];
  time= 'all';
  currentSearch = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe:HttpProvider) {
    super(httpServe);
    
  }
  getData(res){
    this.search = res;
    // this.time = res.time;
    this.list = [];
    console.log(this.search);
    this.httpServe.request({url:'/news/search.json',type:'post',params:this.search,params2:{time:'all'}},(res)=>{
     // this.list = res.data.list;
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

  delete(itemId,key){
    console.log(itemId,key)
    this.httpServe.request({url:'/news/remove.json',type:'get',params:{id:itemId}},(res)=>{
      if(res.code === '200'){
        this.list.splice(key, 1)
        this.httpServe.successToast(res.msg);
      }else{
        this.httpServe.errorToast(res.msg);
      }
     })
    
  }
  //点击进入详情页
  todetailsPage(itemId){
    this.navCtrl.push(DetailsPage,{id:itemId})
  }
  ionViewDidLoad() {
    this.getData(this.search);
  }

 
}
