import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductComponent } from '../product-component/product-component';
import { ProductService } from '../services/product-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-product-list',
	imports: [ProductComponent, AsyncPipe],
	templateUrl: './product-list.html',
	styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

	products!: Observable<Product[]>;

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.products = this.productService.getProducts();
	}

	onChangeQuantity(pc: ProductQuantityChange) {
		this.productService.changeQuantity(pc.product.id, pc.amountChange).subscribe({
			next: (product) => {
				console.log("Quantity changed: " + product);
			},
			error: (msg) => {
				console.log(msg);
			}
		});
	}
}
