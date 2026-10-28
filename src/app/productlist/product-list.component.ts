import { Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './productListService';

import { list } from 'postcss';
import { Product } from './product.model';
import { BasketService } from '../services/bascketservice';

@Component({
  selector: 'app-product',
  imports: [
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  private readonly router= inject(Router)
  //transport data from child component to parent(app)
  productService=inject(ProductService)
  add = output<number>();
  protected readonly title = signal('project09_angular');
  productList = [1,2,3,4,5,6,7];
  protected readonly products = signal<Product[]>([]);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
ngOnInit() {
  //when component loaded in web
  this.loadProduct();
  console.log(this.productList);
  console.log(this.products);
}
loadProduct(){
 this.productService.getProducts().subscribe({
   next:(data)=>{
     this.products.set(data);

  }}
 )
}

  addToShop(product: number) {
    this.add.emit(product)
  }

  protected readonly list = list;


  //searchbar:
  // products=signal<Product[]>(
  //   [
  //     { id: 1, name: 'پیراهن سفید', category: 'پیراهن', price: 200_000 },
  //     { id: 2, name: 'شلوار جین', category: 'شلوار', price: 650_000 },
  //     { id: 3, name: 'تی‌شرت مشکی', category: 'تی‌شرت', price: 180_000 },
  //     { id: 4, name: 'پیراهن آبی', category: 'پیراهن', price: 350_000 },
  //     { id: 5, name: 'کاپشن زمستانی', category: 'کاپشن', price: 1_200_000 },
  //     { id: 6, name: 'تی‌شرت سفید', category: 'تی‌شرت', price: 250_000 }
  //   ]
  // )
  search=signal('');
  filteredProducts=computed(
    ()=>{
      // if (this.search().trim().length >= 2) {
        const query= this.search().trim().toLowerCase();
        return this.products().filter(product=>product.title.toLowerCase().includes(query))
    }
  )
  basketService = inject(BasketService);

  addProduct(product: Product) {
    this.basketService.addToBasket(product);
  }

  protected back() {
    this.router.navigate(['/']);
  }

}
