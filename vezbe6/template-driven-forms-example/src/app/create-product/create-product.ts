import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {

  product: Product = new Product("", "", 0, "");
  confirmed!: boolean;

  nameToUpper(name: string) {
    this.product.name = name.toUpperCase();
  }

  reset() {
    this.product = new Product("", "", 0, "");
    this.confirmed = false;
  }

  submit() {
    console.log(this.product);
  }
}
