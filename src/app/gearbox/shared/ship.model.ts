import { Product } from "./product.model";

export interface Ship {
    ffg: number;
    name: string;
    size: string;
    faction: string;
    shipIcon: string;
    products: Product[];
}