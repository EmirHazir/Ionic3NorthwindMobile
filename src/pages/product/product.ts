import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ProductService } from "../../providers/product.service";
import { Product } from "../../entities/product";
import { ProductDetailPage } from "../product-detail/product-detail";
import { Category } from "../../entities/category";
import { CategoryService } from "../../providers/category.service";


@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductService, CategoryService]
})

export class ProductPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService,
    public categoryService: CategoryService,
    public loadingCtrl: LoadingController) { }


  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    })
    //Yukarıdaki loadingi presnet içinde ne basıldıysa sayfaya düşene dek çalıştır. Bir duration vermedim.
    //then ile verileri cekip verilerin sayfaya düşmesi ile dismiss le loadingi kapattım
    loader.present().then(() => {
      this.getProducts();
      this.getCategories();
      loader.dismiss();
    })

  }

  products: Product[];
  getProducts() {
    this.productService.getProducts().subscribe(p => {
      this.products = p;
    });
  }

  itemTapped(event, product) {
    this.navCtrl.push(ProductDetailPage, { item: product })
  }

  categories: Category[];
  selectedCategory: string;
  getCategories() {
    this.categoryService.getCategories().subscribe(c => {
      this.categories = c;
    })
  }

  filterText: string = '';
  getItems() {
    var val = this.filterText;
    if (val && val.trim() != '') {
      this.productService.getProducts(this.selectedCategory).subscribe(p => this.products = p.filter(item => {
        return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
      }))
    } else {
      this.productService.getProducts(this.selectedCategory).subscribe(p => {
        this.products = p;
      })
    }
  }



}
