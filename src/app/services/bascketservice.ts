import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../productlist/product.model';

@Injectable({
  providedIn:'root'
})
export class BasketService {
  shoppingCounter=signal(0)
  basketItems = signal<Product[]>([]);

  addToBasket(product: Product) {
    this.basketItems.update(items => [...items, product]);

    this.shoppingCounter.update(count => count + 1);
  }
  removeFromBasket(index: number) {
    this.basketItems.update(items =>
      items.filter((_, i) => i !== index)
    );

    this.shoppingCounter.update(count => ( count - 1));
  }

}
