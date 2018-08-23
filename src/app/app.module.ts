import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { IonicStorageModule } from '@ionic/storage';  
import { LoginPage } from '../pages/login/login';
import { Network } from '@ionic-native/network';
import { MePage } from '../pages/me/me';
import { InformationPage } from '../pages/information/information';
import { QuestionPage } from '../pages/question/question';
import { FilePage } from '../pages/file/file';
import { PipesModule } from '../pipes/pipes.module';
import { MessagelistPage } from '../pages/messagelist/messagelist';
import { FileAddPage } from '../pages/file-add/file-add';
import { FileMePage } from '../pages/file-me/file-me';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    MePage,
    InformationPage,
    QuestionPage,
    FilePage,
    MessagelistPage,
    FileAddPage,
    FileMePage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    HttpModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      iconMode:'ios',
      mode:'ios',
      tabsHideOnSubPages: 'true' // 隐藏tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    MePage,
    InformationPage,
    QuestionPage,
    FilePage,
    MessagelistPage,
    FileAddPage,
    FileMePage
  ],
  providers: [
    StatusBar,
    SplashScreen,HttpProvider,Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
