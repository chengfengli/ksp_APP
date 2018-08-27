import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MycollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mycollection',
  templateUrl: 'mycollection.html',
})
export class MycollectionPage {
  showInformation = false;
  showQuestion = false;
  showFile = false;
  model = 'information'
  list = []
  questionList = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<10;i++){
      this.list.push(i);
    }
    for(let i=0;i<10;i++){
      this.questionList.push(i);
    }
  }
  getModel(item){
    this.model = item;
  }
  deleteEvent(index){
    this.list.splice(index, 1);
  }
  cancelEvent(index){
    this.questionList.splice(index, 1);
  }
}
