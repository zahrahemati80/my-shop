import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {Footer}from './footer/footer.component';




@Component({
  selector: 'app-root',
  imports:
    [
      RouterOutlet,
      Footer,
      HeaderComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
