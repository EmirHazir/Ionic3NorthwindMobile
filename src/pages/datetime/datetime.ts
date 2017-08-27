import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  event={
    dateStarts:'2017-08-09',
    timeStarts:'09:45',
    dateEnds:'2017-08-12'
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DatetimePage');
  }

}
