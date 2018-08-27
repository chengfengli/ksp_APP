import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MeanswerPage } from '../meanswer/meanswer';

/**
 * Generated class for the QuestiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-questiondetails',
  templateUrl: 'questiondetails.html',
})
export class QuestiondetailsPage {
  height = '';
  action = '展开';
  list = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i=0;i<3;i++){
      this.list.push(i);
    }
  }
  collecEvent(){
    console.log(32)
  }
  toggleEvent(){
    if(this.action == '展开'){
      this.height = 'auto';
      this.action = '收起'
    }else{
      this.height = '24px';
      this.action = '展开'
    }
    
  }
  toMyAnswer() {
    this.navCtrl.push(MeanswerPage)
  }
}
