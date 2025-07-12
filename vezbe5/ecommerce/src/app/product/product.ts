import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../model/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
	selector: 'app-product',
	imports: [CurrencyPipe, CommonModule],
	templateUrl: './product.html',
	styleUrl: './product.css'
})
export class Product implements OnInit {

	// Input decorator allows us to pass data from parent to child component
	@Input() product!: ProductModel;
	// Output decorator allows us to pass data from child to parent component
	// EventEmitter is used to emit custom made events
	// ProductQuantityChange is a custom made event (interface)
	@Output() changeQuantity!: EventEmitter<ProductQuantityChange>;

	// Object to store classes for ngClass directive
	productClasses!: { [key: string]: boolean }
	// Object to store styles for ngStyle directive
	productStyles!: { [key: string]: string }

	constructor() {
		// We must initialize EventEmitter in constructor
		this.changeQuantity = new EventEmitter<ProductQuantityChange>();
	};

	ngOnInit(): void {
		// Initializing productClasses and productStyles objects
		this.productClasses = {
			'on-sale': this.product.isOnSale,
		}
		this.productStyles = {
			'font-size': this.product.isOnSale ? "36px" : "28px"
		}
	}

	// Instead of increasing quantity here, we emit an event and send necessary data to parent component
	increaseQuantity() {
		this.changeQuantity.emit({ product: this.product, amountChange: 1 });
	}

	// Instead of decreasing quantity here, we emit an event and send necessary data to parent component
	decreaseQuantity() {
		this.changeQuantity.emit({ product: this.product, amountChange: -1 });
	}
}
