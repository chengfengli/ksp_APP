import { Component } from '@angular/core';
import { NavController,App, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';

/**
 * 系统设置
 */

@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpServe: HttpProvider,public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

  /**
   * 退出账号
   */
  logout(){
    this.httpServe.confim('确定退出当前账号？',(res)=>{
      this.httpServe.storageRemove('token');
      this.app.getActiveNav().push(LoginPage)
    });
  }
}
