import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartService } from "../../providers/cart.service";
import { CartItem } from "../../entities/cart-item";


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cartService: CartService) {
  }

  cartItems: CartItem[];

  ionViewDidLoad() {
    this.cartItems = this.cartService.list();
  }

}
