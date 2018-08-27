import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReleaseinfoPage } from '../pages/releaseinfo/releaseinfo';
import { TabsPage } from '../pages/tabs/tabs';
import { MyquestionPage } from '../pages/myquestion/myquestion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MyquestionPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
