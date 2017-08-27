import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

//Terminalden plugini ekledim
//ionic cordova plugin add call-number
//npm install --save @ionic-native/call-number

@IonicPage()
@Component({
  selector: 'page-telefon-no',
  templateUrl: 'telefon-no.html',
  providers : [CallNumber]
})
export class TelefonNoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public callNumber:CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelefonNoPage');
  }

  numberToCall:number;
  call(someNumber){
    this.callNumber.callNumber(someNumber, true)
    .then(()=>{
      console.log("Calling..")
    }).catch(()=>{
      console.log('Couldnt the call!')      
    })
  }

}
