import { Component, inject, Inject, input, signal } from '@angular/core';
import { RouterLink, RouterOutlet ,Router} from '@angular/router';
import { BasketService } from '../services/bascketservice';

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
  private readonly router= inject(Router)

  basketService=inject(BasketService);


  protected goToHome() {
    this.router.navigate(['/home']);
  }

}
