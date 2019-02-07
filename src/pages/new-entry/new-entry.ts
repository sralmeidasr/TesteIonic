import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-entry',
  templateUrl: 'new-entry.html',
})
export class NewEntryPage {
  entry = {
    value: '0,00',
    category: 1
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEntryPage');
  }

  submitForm() {
    console.log('Submit form');
    console.log(this.entry)

    // rotinas de bd
    
   this.goBack();
  }

  goBack() {
    console.log('go back');
    // sair sem fazer nada!
    this.navCtrl.pop();
  }

}
