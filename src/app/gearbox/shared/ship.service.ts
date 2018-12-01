import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ship } from "./ship.model";

@Injectable()
export class ShipService {
    
    constructor(private http: HttpClient) {}
    
    getShipData() {
        let shipDataUrl: string = 'assets/ship-data.json';
        return this.http.get<Ship[]>(shipDataUrl);
    }
}