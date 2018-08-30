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
    this.httpServe.storageGet('account').subscribe(res => {
      this.user.account = res;
    });
    this.httpServe.storageGet('pwd').subscribe(res => {
      this.user.password = res;
    });
    this.httpServe.storageGet('remeberPwd').subscribe(res => {
      this.remeberPwd = res;
    });
  }

  // 非空验证
  check(){
    if(this.httpServe.isEmpty(this.user.account)){
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
      this.httpServe.post({url:'/user/login.json',params:this.user},(res)=>{
        if(res.code==='200'){
          this.httpServe.storageSet("user",res.data);
          this.navCtrl.setRoot(TabsPage);
        }else{
          this.httpServe.errorToast(res.msg);
        }
      });
    }
  }

  getUser(){
    this.httpServe.post({url:'app/getUser'},(res)=>{

    });
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
    this.httpServe.storageSet('remeberPwd',this.remeberPwd);
    if(this.remeberPwd){
      this.httpServe.storageSet('account',this.user.account);
      this.httpServe.storageSet('pwd',this.user.password);
    }else{
      this.httpServe.storageRemove('account');
      this.httpServe.storageRemove('pwd');
    }
  }

}
