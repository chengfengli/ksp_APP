import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestiondetailsPage } from '../questiondetails/questiondetails';

/**
 * Generated class for the MyquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-myquestion',
  templateUrl: 'myquestion.html',
})
export class MyquestionPage {
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  getData(res){
    console.log(res);
  }
  toQuestionDetails() {
    this.navCtrl.push(QuestiondetailsPage)
  }

}
