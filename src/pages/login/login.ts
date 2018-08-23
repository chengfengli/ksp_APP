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
  // 隐藏显示密码
  showPwd = false;
  // 是否记住密码
  remeberPwd = false;
  // 密码输入框的类型
  pwdInputType = 'password';
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
      this.remeberP();
      this.navCtrl.setRoot(TabsPage);
    }
  }

  // 隐藏显示密码
  showPasword(){
    if(this.showPwd){
      this.pwdInputType = 'text';
    }else{
      this.pwdInputType = 'password';
    }
  }

  // 记住密码
  remeberP(){
    if(this.remeberPwd){
      this.httpServe.storageSet('account',this.user.password);
      this.httpServe.storageSet('pwd',this.user.password);
    }else{
      this.httpServe.storageRemove('account');
    }
  }

}
