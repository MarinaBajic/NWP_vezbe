import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  product!: ProductModel;

  ngOnInit(): void {
    this.product = new ProductModel(
      'Sample Product',
      29.99,
      'https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg',
      true
    );
  }

  increaseQuantity(): void {
    this.product.quantityInCart++;
  }

  decreaseQuantity(): void {
    this.product.quantityInCart--;
  }

  canDecreaseQuantity(): boolean {
    return this.product.quantityInCart > 0;
  }
}
