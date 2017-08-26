import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public categoryService: CategoryService) { }


  ionViewDidLoad() {
    this.getProducts();
    this.getCategories();
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
      })}
  }
}
