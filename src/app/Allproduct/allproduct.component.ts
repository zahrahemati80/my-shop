import { Component, inject, OnInit, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './allproductService';
import { Product } from './product.model';

@Component({
  selector: 'app-allproduct',
  imports: [],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css'
})
export class AllproductComponent implements OnInit {
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
    next: (data) => {
      this.products.set(data);
      this.loading.set(true);
    },
    error: (err) => {
      this.error.set('خطا در دریافت محصولات');
      this.loading.set(false);
      console.error(err);
    },
  });
}
//pass data from allproduct to app
  addToShop(product: number) {
    this.add.emit(product)
  }
}
