import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Actions',
      buttons: [{
        text: 'Delete',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          this.DeleteMetodu();
        }
      }, {
        text: 'Share',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          this.ShareMetodu();
        }
      }, {
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'heart-outline' : null,
        handler: () => {
          this.FavoriteMetodu();
        }
      }
      ]
    });
    actionSheet.present();
  }

  DeleteMetodu() {
    console.log("deleted!");
  }
  ShareMetodu() {
    console.log("shared!");
  }
  FavoriteMetodu() {
    console.log("favorited!");
  }

}
