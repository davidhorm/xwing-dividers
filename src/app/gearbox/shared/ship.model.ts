import { Token } from "./token.model";

export interface Ship {
    ffg: number;
    name: string;
    size: string;
    faction: string;
    shipIcon: string;
    factionIcon: string;
    tokens: Token[];
}