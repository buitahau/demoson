import { Injectable } from '@angular/core';
import {ColorantDTO, ProductDTO} from "../../models/colorant.model";
import {Sort} from "@angular/material";

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
  listItems : ProductDTO[] = [A, B, C3, D, E, s];
  sortedData : ProductDTO[] = null;

  constructor() {
    this.sortedData = this.listItems;
  }

  getListItems() : ProductDTO[]{
    return this.listItems;
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productCode': return compare(a.productCode, b.productCode, isAsc);
        case 'productName': return compare(a.productName, b.productName, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | number, b: string | number, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

}
