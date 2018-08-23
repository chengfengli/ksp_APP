import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  testCheckboxOpen = false;
  testCheckboxResult: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alertCtrl: AlertController) {

  }

  collecEvent(){
      let alert = this.alertCtrl.create();
      alert.setTitle('请选择标签');
  
      alert.addInput({
          type: 'checkbox',
          label: 'Alderaan',
          value: 'value1',
          checked: true
      });
  
      alert.addInput({
          type: 'checkbox',
          label: 'Bespin',
          value: 'value2'
      });
  
      alert.addInput({
          type: 'checkbox',
          label: 'Coruscant',
          value: 'value3'
      });
  
      alert.addInput({
          type: 'checkbox',
          label: 'Endor',
          value: 'value4'
      });
  
      alert.addInput({
          type: 'checkbox',
          label: 'Hoth',
          value: 'value5'
      });
  
  
      alert.addButton('重置');
      alert.addButton({
        text: '确定',
        handler: (data: any) => {
            console.log('Checkbox data:', data);
            this.testCheckboxOpen = false;
            this.testCheckboxResult = data;
        }
      });
  
      alert.present();
  
  }
}
