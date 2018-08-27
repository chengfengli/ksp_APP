import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntegralPage } from '../pages/integral/integral';
import { TabsPage } from '../pages/tabs/tabs';
import { InstructionsPage } from '../pages/instructions/instructions';
import { MeanswerPage } from '../pages/meanswer/meanswer';
import { MycollectionPage } from '../pages/mycollection/mycollection';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
