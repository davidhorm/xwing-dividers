import { Product } from "./product.model";

export interface Ship {
    ffg: number;
    name: string;
    size: string;
    faction: string;
    icon: string;
    products: Product[];
}