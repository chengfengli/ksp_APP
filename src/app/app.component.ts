import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpProvider } from '../providers/http/http';
import { LoginPage } from '../pages/login/login';
import { WebIntent } from '@ionic-native/web-intent';
import { InformationAddPage } from '../pages/information-add/information-add';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,httpServe: HttpProvider,webIntent:WebIntent) {
    platform.ready().then(() => {
      // statusBar.styleDefault();
      splashScreen.hide();
      httpServe.storageGet('token').subscribe(token => {
        webIntent.getIntent().then((res)=>{
          let clipItems = res.clipItems;
          if(clipItems){
            alert(JSON.stringify(res))
            this.rootPage = InformationAddPage;
          }else{
            if(httpServe.isEmpty(token)){
              this.rootPage = LoginPage;
            }else{
              this.rootPage = TabsPage;
            }
          }
        }).catch(err=>{
          alert('异常：'+JSON.stringify(err));
          if(httpServe.isEmpty(token)){
            this.rootPage = LoginPage;
          }else{
            this.rootPage = InformationAddPage;
          }
        })
      });
    });
  }
}
