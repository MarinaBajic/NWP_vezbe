import { Injectable, signal } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private productList = signal<Product[]>([]);

	constructor(private http: HttpClient) {
		this.loadProducts();
	}

	loadProducts() {
		this.http.get<Product[]>('api/product').subscribe(products => {
			this.productList.set(products);
		});

	}

	get productsSignal() {
		return this.productList;
	}

	changeQuantity(id: number, amountChange: number) {
		return this.http.patch(`api/product/${id}`, { changeInQuantity: amountChange });
	}

	addProduct(product: Product) {
		return this.http.post<Product>("api/product", product);
	}
}
