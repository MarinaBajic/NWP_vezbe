import { Component, NgModule } from '@angular/core';
import { ProductService } from '../services/product-service';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {

  public message = '';
  constructor(private productService: ProductService) { }

  createProduct(productForm: NgForm) {
    if (productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      this.message = '';
      const product: Product = productForm.value.product;
      console.log('Creating product', product);
      this.productService.addProduct(product);
    }
  }
}
