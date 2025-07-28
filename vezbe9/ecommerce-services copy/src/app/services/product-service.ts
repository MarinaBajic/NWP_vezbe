import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private products!: Product[];

	constructor() {
		this.products = [
			new Product(1, "Soldier", 29.99, "https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg", true),
			new Product(2, "Bear", 39.99, "https://m.media-amazon.com/images/I/91oxSXgVD6L._AC_UF894,1000_QL80_.jpg", false),
			new Product(3, "Car", 49.99, "https://cdn.ecommercedns.uk/files/9/253379/1/28429561/07-10141r-01-toy-mercedes-c-class-red-kids-12v-electric-sit-in-v.jpg", true)
		]
	}

	getProducts(): Observable<Product[]> {
		return of(this.products);
	}

	changeQuantity(id: number, amountChange: number) {
		let product = this.products.find((p) => {
			return p.id === id;
		});

		return new Observable(observer => {
			if (!product) {
				observer.error("Product with given id does not exist!");
			} else {
				product.quantityInCart += amountChange;
				observer.next(product);
			}
			observer.complete();
		});
	}

	addProduct(product: Product) {
		let productClone: Product = Object.assign({}, product);
		productClone.id = this.products.length + 1;
		productClone.quantityInCart = 0;
		this.products.push(productClone);
		return new Observable(observer => {
			observer.next(productClone);
			observer.complete();
		});
	}
}
