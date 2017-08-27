import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

//Terminalden eklenecekler
//ionic cordova plugin add cordova-plugin-camera
//npm install --save @ionic-native/camera
@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
  providers:[Camera]
})
export class CameraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private camera:Camera) {
  }

  //Cameradan çekmek isteniler seçenekleri belirttim kalite 100 nereye kaydedileceği ne tipte ve resim mi video mu oldugunu belirledim
   options:CameraOptions={
    quality:100,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE
  }

  public base64Image:string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture(){
    this.camera.getPicture(this.options).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64"+imageData;
    }).catch((err)=>{
      console.log(err)
    });
  }

}
