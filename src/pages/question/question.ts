import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestiondetailsPage } from '../questiondetails/questiondetails';

/**
 * 问答页面
 */

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  toQuestionDetails() {
    this.navCtrl.push(QuestiondetailsPage);
  }

}
