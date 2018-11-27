import { Injectable } from '@angular/core';
import {ProductDTO} from "../../models/colorant.model";

function generateProductEntity ( productId : number,
                                 productCode : string,
                                 productName : string,
                                 createdDate : string,
                                 createdBy : number | null) : ProductDTO{
  return {
    productId : productId,
    productCode : productCode,
    productName : productName,
    createdDate : createdDate,
    createdBy : createdBy,
  }
}

export const A = generateProductEntity(1, "A", "Egg Shell", "", null);
export const B = generateProductEntity(2, "B", "Primer", "", null);
export const C3 = generateProductEntity(3, "C3", "Floor Paint", "", null);
export const D = generateProductEntity(4, "D", "Nautic Paint", "", null);
export const E = generateProductEntity(5, "E", "Gloss", "", null);
export const s = generateProductEntity(6, "S", "Gloss", "", null);


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }
}
