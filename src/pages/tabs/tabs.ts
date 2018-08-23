import { Component } from '@angular/core';

import { MePage } from '../me/me';
import { InformationPage } from '../information/information';
import { QuestionPage } from '../question/question';
import { FilePage } from '../file/file';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MePage;
  tab2Root = QuestionPage;
  tab3Root = FilePage;
  tab4Root = MePage;

  constructor() {

  }
}
