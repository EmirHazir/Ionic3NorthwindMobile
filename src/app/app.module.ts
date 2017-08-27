import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'; //ekle
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from "../pages/product/product";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { CartService } from "../providers/cart.service";
import { CartPage } from "../pages/cart/cart";
import { ActionSheetPage } from "../pages/action-sheet/action-sheet";
import { AlertPage } from "../pages/alert/alert";
import { BadgePage } from "../pages/badge/badge";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    ActionSheetPage,
    AlertPage,
    BadgePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    ActionSheetPage,
    AlertPage,
    BadgePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CartService,
    {provide:"apiUrl", useValue:"http://northwindapi.azurewebsites.net/api"}, //api ile çalışıyorum
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
