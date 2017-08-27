import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from "../pages/product/product";
import { CartPage } from "../pages/cart/cart";
import { ActionSheetPage } from "../pages/action-sheet/action-sheet";
import { AlertPage } from "../pages/alert/alert";
import { BadgePage } from "../pages/badge/badge";
import { ButtonPage } from "../pages/button/button";
import { CheckboxPage } from "../pages/checkbox/checkbox";
import { DatetimePage } from "../pages/datetime/datetime";
import { FabsPage } from "../pages/fabs/fabs";
import { GesturesPage } from "../pages/gestures/gestures";
import { InputPage } from "../pages/input/input";
import { ListsPage } from "../pages/lists/lists";
import { Lists2Page } from "../pages/lists2/lists2";
import { LoadingPage } from "../pages/loading/loading";
import { SliderPage } from "../pages/slider/slider";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Products', component: ProductPage },
      { title: 'Go to Cart', component: CartPage },
      { title: 'Action Sheet', component: ActionSheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Badge', component: BadgePage },
      { title: 'Buttons', component: ButtonPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'Datetime', component: DatetimePage },
      { title: 'Fabs', component: FabsPage },
      { title: 'Gestures', component: GesturesPage },
      { title: 'Input', component: InputPage },
      { title: 'Lists', component: ListsPage },
      { title: 'Lists 2', component: Lists2Page },
      { title: 'Loading', component: LoadingPage },
      { title: 'Slider', component: SliderPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
