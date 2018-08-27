import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagelistPage } from '../messagelist/messagelist';
import { AboutPage } from '../about/about';
import { InfomationlistPage } from '../infomationlist/infomationlist';
import { FileMePage } from '../file-me/file-me';
import { AdvicePage } from '../advice/advice';
import { MyApp } from '../../app/app.component';
import { MyquestionPage } from '../myquestion/myquestion';
import { MycollectionPage } from '../mycollection/mycollection';
import { SetPage } from '../set/set';
import { IntegralPage } from '../integral/integral';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  messagelistPage = MessagelistPage;
  myFile = FileMePage;
  setPage = SetPage;
  integralPage = IntegralPage;
  myCollection = MycollectionPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }
  //跳转到关于我们
  toAbout(){
    this.navCtrl.push(AboutPage);
  }
  //跳转到我的资讯
  toInfoListPage(){
    this.navCtrl.push(InfomationlistPage);
  }
  //跳转到反馈建议
  toAdvice() {
    this.navCtrl.push(AdvicePage);
  }
  //跳转到我的问答
  toMyQuestion() {
    this.navCtrl.push(MyquestionPage);
  }
  //跳转到我的收藏
  toMyCollection() {
    this.navCtrl.push(MycollectionPage);
  }
}
