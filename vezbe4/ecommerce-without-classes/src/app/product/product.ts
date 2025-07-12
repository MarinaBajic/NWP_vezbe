import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  name!: string;
  price!: number;
  imageUrl!: string;
  isOnSale: boolean = true;
  quantityInCart: number = 0;

  ngOnInit(): void {
    this.name = 'Sample Product';
    this.price = 29.99;
    this.imageUrl = 'https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg'; // Placeholder image URL
  }

  increaseQuantity(): void {
    this.quantityInCart++;
  }

  decreaseQuantity(): void {
    this.quantityInCart--;
  }

  canDecreaseQuantity(): boolean {
    return this.quantityInCart > 0;
  }
}
