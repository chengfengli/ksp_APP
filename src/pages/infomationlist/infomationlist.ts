import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { DetailsPage } from '../details/details';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the InfomationlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-infomationlist',
  templateUrl: 'infomationlist.html',
})
export class InfomationlistPage  extends BasePage{
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
  let num =id-1
  this.list.splice(num, 1)
}
todetailsPage(){
  this.navCtrl.push(DetailsPage)
}

getData(res){
  console.log(res);
}

}
