import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpProvider } from '../providers/http/http';
import { LoginPage } from '../pages/login/login';
import { FileAddPage } from '../pages/file-add/file-add';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,httpServe: HttpProvider) {
    platform.ready().then(() => {
      // statusBar.styleDefault();
      splashScreen.hide();
      httpServe.storageGet('token').subscribe(res => {
        if(httpServe.isEmpty(res)){
          this.rootPage = FileAddPage;
        }else{
          this.rootPage = TabsPage;
        }
      });
    });
  }
}
