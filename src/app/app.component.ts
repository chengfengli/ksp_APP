import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { MyquestionPage } from '../pages/myquestion/myquestion';
import { QuestiondetailsPage } from '../pages/questiondetails/questiondetails';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = QuestiondetailsPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
