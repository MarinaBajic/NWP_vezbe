import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
	selector: 'app-product-component',
	imports: [CurrencyPipe, CommonModule],
	templateUrl: './product-component.html',
	styleUrl: './product-component.css'
})
export class ProductComponent {

	@Input() product!: Product;
	@Output() changeQuantity!: EventEmitter<ProductQuantityChange>;

	productClasses!: { [key: string]: boolean }
	productStyles!: { [key: string]: string }

	constructor() {
		this.changeQuantity = new EventEmitter<ProductQuantityChange>();
	};

	ngOnInit(): void {
		this.productClasses = {
			'on-sale': this.product.isOnSale,
		}
		this.productStyles = {
			'font-size': this.product.isOnSale ? "36px" : "28px"
		}
	}

	increaseQuantity() {
		this.changeQuantity.emit({ product: this.product, amountChange: 1 });
	}

	decreaseQuantity() {
		this.changeQuantity.emit({ product: this.product, amountChange: -1 });
	}
}
