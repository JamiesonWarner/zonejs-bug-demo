import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MyComponent} from "./comp";

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [MyComponent]
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
}
