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
  array=[];
  currentSearch = {};
  time = 'all';
  list=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe: HttpProvider) {
    super(httpServe);
    this.httpServe.request({url:'/news/search.json',type:'post',params:this.search,params2:{time:this.time}},(res)=>{
      this.list = res.data.list;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
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
  }

  /**
   * 获取数据
   * @param res 
   */
  getData(res){
    this.currentSearch = res.search;
    this.time = res.time;
    this.httpServe.request({url:'/news/search.json',type:'post',params:this.currentSearch,params2:{time:this.time}},(res)=>{
      this.list = res.data.list;
    })
  }

  /**
   * 详情
   */
  todetailsPage(){
    this.navCtrl.push(DetailsPage);
  }
 
}
