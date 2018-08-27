import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-myask',
  templateUrl: 'myask.html',
})
export class MyaskPage {
  colum = '';
  tags = '';
  reward:number;
  showColumn = false;
  showTag = false
  anonymous = false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  getColumn(res){
    console.log(res)
    this.showColumn = false;
    if(res.length==0){
      this.colum = '';
    }else{
      this.colum ='栏目'+ res;
    }
  }

  closeColumn(){
    this.showColumn = false;
  }
  getTag(res){
    console.log(res)
    this.showTag = false;
    // if(res.length==0){
    //   this.tags = '';
    // }else{
    //   console.log(res)
    //   this.tags ='标签'+ res;
    // }
    if(res.length==0){
      this.tags = '';
    }else{
      this.tags = res;
      // for(let i=0;i<res.length;i++){
      //   this.tags+=res[i].name+'，';
      // }
    }
  }

  closeTag(){
    this.showTag = false;
  }

}
