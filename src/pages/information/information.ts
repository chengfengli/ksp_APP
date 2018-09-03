import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MePage } from '../me/me';
import { BasePage } from '../base/base';
import { HttpProvider } from '../../providers/http/http';
import { DetailsPage } from '../details/details';
import { News } from '../../entity/news/news';
import { Search } from '../../entity/search/search';

/**
 * 咨讯页面
 */

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage extends BasePage {
  search:Search = new Search();
  list=[];
  time= 'all';
  currentSearch = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe: HttpProvider) {
    super(httpServe);
  }

  ionViewDidLoad() {
    this.getData(this.search);
  }


  /**
   * 获取数据
   * @param res 
   */
  getData(res){
    this.search = res;
    // this.time = res.time;
    this.list = [];
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
  /**
   * 详情
   */
  todetailsPage(itemId){
    this.navCtrl.push(DetailsPage,{id:itemId});
  }
 
}
