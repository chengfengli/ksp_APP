import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FileAddPage } from '../pages/file-add/file-add';
import { QuestiondetailsPage } from '../pages/questiondetails/questiondetails';
import { TabsPage } from '../pages/tabs/tabs';
import { ReleaseinfoPage } from '../pages/releaseinfo/releaseinfo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ReleaseinfoPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
