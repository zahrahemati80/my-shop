import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import {SignupComponent}from'./signup/signup.component';
import { HeaderComponent } from './header/header.component';
import {Sugest} from './Sugestoin/sugest.component';
import {Footer}from './footer/footer.component';
import{AllproductComponent}from './Allproduct/allproduct.component';
import{Reseed}from './reseed/reseed.component';




@Component({
  selector: 'app-root',
  imports:
    [
      RouterOutlet
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title = 'homes';
 counter: number = 0;

 updateCounter() {
    this.counter++;
 }

}
 //creat signal with signal function:
// const firstName=signal('Morgan');
//change value :
// firstName.set('jimi');
// console.log(firstName());
