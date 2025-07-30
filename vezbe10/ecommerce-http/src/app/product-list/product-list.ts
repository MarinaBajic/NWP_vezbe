import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductComponent } from '../product-component/product-component';
import { ProductService } from '../services/product-service';

@Component({
	selector: 'app-product-list',
	imports: [ProductComponent],
	templateUrl: './product-list.html',
	styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

	products = signal<Product[]>([]);

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.products = this.productService.productsSignal;
	}

	onChangeQuantity(pc: ProductQuantityChange) {
		this.productService.changeQuantity(pc.product.id, pc.amountChange).subscribe({
			next: () => {
				this.productService.reloadProducts();
				console.log('Quantity changed!');
			},
			error: (msg: string) => {
				console.log(msg);
			}
		});
	}
}
