import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { BasePage } from '../base/base';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {
  porducts=[];
  porducts_width="0px";
  constructor(public navCtrl: NavController,public httpServer: HttpProvider) {
    super(httpServer);
    for(let i=0;i<10;i++){
      this.porducts.push({name:'商品'+(i+1),img:'./assets/imgs/0'+i+'.jpg'});
    }
    this.porducts_width = this.porducts.length*90+'px';
  }

  // 跳转到到搜索页面
  goSearch(){
    this.navCtrl.push(SearchPage);
  }

}
