import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class Footer {
  protected readonly title = signal('project09_angular');
  //transport data from parent(app)to child:
  shoppingCounter = input(0);
}
