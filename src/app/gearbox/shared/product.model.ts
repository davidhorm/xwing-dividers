import { Pilot } from "./pilot.model";

export interface Product {
    name: string;
    numberOfTokens: number;
    pilotNames: string[];
    shipTokens: Pilot[][];
}