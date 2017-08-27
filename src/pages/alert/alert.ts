import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  //basit kullanım
  // showAlert(){
  //   let alert = this.alertCtrl.create({
  //     title:'Save!',
  //     subTitle:'Are you sure?',
  //     buttons:['Ok']
  //   });
  //   alert.present();
  // }

  // showAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Your Name!',
  //     message: 'enter your name',
  //     inputs: [{
  //       name: 'firstName',
  //       placeholder: 'First Name',
  //     }],
  //     buttons: [{
  //       text: 'Save',
  //       handler: data => {
  //         this.alertSave(data);
  //       }
  //     },
  //   {
  //       text: 'Cancel',
  //       handler: data => {
  //         this.alertCancel();
  //       }
  //     }]
  //   });
  //   alert.present();
  // }

  // alertSave(data) {
  //   console.log(data.firstName);
  // }

  // alertCancel() {
  //   console.log('Cancelled!');
  // }




  showAlert(){
    let alert = this.alertCtrl.create();
    alert.setTitle('choose color');

    alert.addInput({
      type:'radio',
      label:'Blue',
      value:'blue',
      checked:true
    });

    alert.addInput({
      type:'radio',
      label:'Red',
      value:'red',
      checked:false
    })

    alert.addButton('Cancel');
    alert.addButton({
      text:'Ok',
      handler:data=>{
        console.log(data)
      }
    })

    alert.present();
  }
}
