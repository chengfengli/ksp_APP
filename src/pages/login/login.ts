import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../entity/user/user';
import { HttpProvider } from '../../providers/http/http';

/**
 * 登录页面
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private user = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpServe: HttpProvider) {
  }

  ionViewDidLoad() {
    
  }

  // 非空验证
  check(){
    if(this.httpServe.isEmpty(this.user.name)){
      this.httpServe.errorToast('请输入登录账号');
      return false;
    }else if(this.httpServe.isEmpty(this.user.password)){
      this.httpServe.errorToast('请输入登录密码');
      return false;
    }else{
      return true;
    }
  }

  // 登录
  login(){
    if(this.check()){
      this.navCtrl.setRoot(TabsPage);
    }
  }

}
