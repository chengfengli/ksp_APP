import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReleaseinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-releaseinfo',
  templateUrl: 'releaseinfo.html',
})
export class ReleaseinfoPage {
  column= [];
  tags= [];
  resource ='';
  title = '';
  con = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  releaseEvent(){
    var res ={
      column : this.column,
      tags: this.tags,
      resource: this.resource,
      title: this.title,
      con: this.con
    }
    console.log(res)
  }
}
