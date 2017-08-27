import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastController} from 'ionic-angular'; //cart için serviceController

import { Product } from "../../entities/product";
import { CartService } from "../../providers/cart.service";


@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
  
})
export class ProductDetailPage {
  selectedProduct: Product;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public toastController:ToastController) {
    this.selectedProduct = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.showToast('bottom');
  }
//ürün eklendiğinde verilen mesaj
  showToast(position?:string){
    let toast = this.toastController.create({
      message:'your product was added to your cart',
      duration:3000,
      position:position,
      showCloseButton:true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
