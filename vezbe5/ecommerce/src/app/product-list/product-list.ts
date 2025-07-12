import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
	selector: 'app-product-list',
	imports: [Product],
	templateUrl: './product-list.html',
	styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

	// Array of products
	products!: Array<ProductModel>;

	ngOnInit(): void {
		this.products = [
			new ProductModel(1, "Soldier", 29.99, "https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg", true),
			new ProductModel(2, "Bear", 39.99, "https://m.media-amazon.com/images/I/91oxSXgVD6L._AC_UF894,1000_QL80_.jpg", false),
			new ProductModel(3, "Car", 49.99, "https://cdn.ecommercedns.uk/files/9/253379/1/28429561/07-10141r-01-toy-mercedes-c-class-red-kids-12v-electric-sit-in-v.jpg", true)
		]
	}

	// Method to handle output event from product component
	onChangeQuantity(pc: ProductQuantityChange) {
		// Find product in array
		let product = this.products.find((prod) => {
			return prod.id === pc.product.id;
		});
		// If product is found, increase or decrease quantity
		if (product) {
			product.quantityInCart += pc.amountChange;
		} else {
			console.log("Something strange happenend!")
		}
	}
}
