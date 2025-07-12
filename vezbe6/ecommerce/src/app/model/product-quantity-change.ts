import { ProductModel } from "./product";

// This interface we will use to emit custom made events
export interface ProductQuantityChange {
    // We will send product and amountChange to parent component
    // We could also send only id of the product and if change is positive or negative
    product: ProductModel;
    amountChange: number;
}