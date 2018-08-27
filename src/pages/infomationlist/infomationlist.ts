import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { DetailsPage } from '../details/details';
import { HttpProvider } from '../../providers/http/http';
import { ReleaseinfoPage } from '../releaseinfo/releaseinfo';

/**
 * 我的咨询
 */

@Component({
  selector: 'page-infomationlist',
  templateUrl: 'infomationlist.html',
})
export class InfomationlistPage  extends BasePage{
  releaseinfoPage = ReleaseinfoPage;
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServer:HttpProvider) {
    super(httpServer);
    // for(let i=0;i<20;i++){
    //   this.list.push(i);
    // }
  }
  //下拉刷新
  doRefresh(refresher){
    this.refresher = refresher;
    if(!this.httpServer.isEmpty(this.infiniteScroll)){
      this.infiniteScroll.enable(true);
    }
  }
  delete(id){
    this.list.splice(id, 1)
  }
  todetailsPage(){
    this.navCtrl.push(DetailsPage)
  }
  getData(res){
    console.log(res);
  }
}
