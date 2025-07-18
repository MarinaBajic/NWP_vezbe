export class ProductModel {
    public quantityInCart: number;

    constructor(
        public name: string,
        public price: number,
        public imageUrl: string,
        public isOnSale: boolean,
    ) {
        this.quantityInCart = 0;
    };
}
