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
import { User } from '../../entity/user/user';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  user: User = new User();
  messagelistPage = MessagelistPage;
  myFile = FileMePage;
  setPage = SetPage;
  integralPage = IntegralPage;
  myCollection = MycollectionPage
  aboutMe = AboutPage;
  advicePage = AdvicePage;
  infomationlistPage = InfomationlistPage;
  myquestionPage = MyquestionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe: HttpProvider) {

  }

  ionViewDidLoad() {
    this.httpServe.storageGet('user').subscribe(res => {
      this.user = res;
    })
  }
}
