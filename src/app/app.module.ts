import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { WebIntent } from '@ionic-native/web-intent';

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
import { AboutPage } from '../pages/about/about';
import { InfomationlistPage } from '../pages/infomationlist/infomationlist';
import { DetailsPage } from '../pages/details/details';

import { FileAddPage } from '../pages/file-add/file-add';
import { FileMePage } from '../pages/file-me/file-me';
import { ComponentsModule } from '../components/components.module';
import { ReleaseinfoPage } from '../pages/releaseinfo/releaseinfo';
import { AdvicePage } from '../pages/advice/advice';
import { MyquestionPage } from '../pages/myquestion/myquestion';
import { QuestiondetailsPage } from '../pages/questiondetails/questiondetails';
import { IntegralPage } from '../pages/integral/integral';
import { MyaskPage } from '../pages/myask/myask';
import { MeanswerPage } from '../pages/meanswer/meanswer';
import { InstructionsPage } from '../pages/instructions/instructions';
import { MycollectionPage } from '../pages/mycollection/mycollection';
import { SetPage } from '../pages/set/set';
import { Camera } from '@ionic-native/camera';
import { FileDetailPage } from '../pages/file-detail/file-detail';
import { CommentPage } from '../pages/comment/comment';
import { InformationAddPage } from '../pages/information-add/information-add';

import { SocialSharing } from '@ionic-native/social-sharing';
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
    AboutPage,
    InfomationlistPage,
    DetailsPage,
    FileAddPage,
    FileMePage,
    ReleaseinfoPage,
    AdvicePage,
    MyquestionPage,
    QuestiondetailsPage,
    IntegralPage,
    InstructionsPage,
    SetPage,
    MyaskPage,
    MeanswerPage,
    InstructionsPage,
    MycollectionPage,
    FileDetailPage,
    CommentPage,
    InformationAddPage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    HttpModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      backButtonIcon:'angle-left',
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
    AboutPage,
    InfomationlistPage,
    DetailsPage,
    FileAddPage,
    FileMePage,
    ReleaseinfoPage,
    AdvicePage,
    MyquestionPage,
    QuestiondetailsPage,
    IntegralPage,
    InstructionsPage,
    SetPage,
    MyaskPage,
    MeanswerPage,
    InstructionsPage,
    MycollectionPage,
    FileDetailPage,
    CommentPage,
    InformationAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,HttpProvider,Network,FileTransfer, FileTransferObject,File,FileChooser,Camera,FilePath,WebIntent,SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})
export class AppModule {}
