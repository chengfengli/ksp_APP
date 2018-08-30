import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MePage } from '../me/me';
import { BasePage } from '../base/base';
import { HttpProvider } from '../../providers/http/http';
import { DetailsPage } from '../details/details';
import { News } from '../../entity/news/news';

/**
 * 咨讯页面
 */

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage extends BasePage {
  // news:News = new News();
  array=[];
  list=[
    {
      title:'星期一',
      time:'2018-8-20',
      num:100,
      id:1
    },
    {
      title:'星期二',
      time:'2018-8-20',
      num:100,
      id:2
    },
    {
      title:'星期三',
      time:'2018-8-20',
      id:3
    },
    {
      title:'星期一',
      time:'2018-8-20',
      num:100,
      id:1
    },
    {
      title:'星期二',
      time:'2018-8-20',
      num:100,
      id:2
    },
    {
      title:'星期三',
      time:'2018-8-20',
      id:3
    },
    {
      title:'星期一',
      time:'2018-8-20',
      num:100,
      id:1
    },
    {
      title:'星期二',
      time:'2018-8-20',
      num:100,
      id:2
    },
    {
      title:'星期三',
      time:'2018-8-20',
      id:3
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe: HttpProvider) {
    super(httpServe);
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
  getDate(res){

  }

  /**
   * 详情
   */
  todetailsPage(){
    this.navCtrl.push(DetailsPage);
  }
 
}
