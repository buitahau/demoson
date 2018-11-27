import { Injectable } from '@angular/core';
import {ColorantDTO} from "../../models/colorant.model";
import {Sort} from "@angular/material";

function generateColorantEntity (colorantId, code, name, density, redV, greenV, blueV) : ColorantDTO {
  return {
    colorantId : colorantId,
    code: code,
    name: name,        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
    density: density,
    redV: redV,
    greenV: greenV,
    blueV: blueV,
    color: 'rgba(' + redV + ',' + greenV + ',' + blueV +',' + density + ')'
  }
}

export const C_A = generateColorantEntity(1, 'A', 'Blue', 1.95, 48, 128, 207);
export const C_B = generateColorantEntity(2, 'B', 'Violet', 0.98, 125, 71, 199);
export const C_C = generateColorantEntity(3, 'C', 'Red', 1.06, 240, 0, 61);
export const C_D = generateColorantEntity(4, 'D', 'Pale Yellow', 1.37, 232, 250, 105);
export const C_E = generateColorantEntity(5, 'E', 'Graphite Black', 1, 0, 0, 0);
export const C_F = generateColorantEntity(6, 'F', 'Pale Red', 1.27, 249, 132, 143);
export const C_G = generateColorantEntity(7, 'G', 'Pale Blue', 1.01, 10, 173, 235);
export const C_H = generateColorantEntity(8, 'H', 'Orange', 1.03, 255, 92, 23);
export const C_I = generateColorantEntity(9, 'I', 'Yellow', 1.12, 255, 215, 55);
export const C_J = generateColorantEntity(10, 'J', 'Dirty yellow', 1.16, 230, 156, 19);
export const C_K = generateColorantEntity(11, 'K', 'Purple', 1.3, 224, 69, 228);
export const C_L = generateColorantEntity(12, 'L', 'Brown', 1.7, 149, 21, 21);
export const C_M = generateColorantEntity(13, 'M', 'White', 1.77, 255, 255, 255);
export const C_N = generateColorantEntity(14, 'N', 'Green', 1.15, 28, 151, 133);
export const C_O = generateColorantEntity(15, 'O', 'Moss Green', 1.09, 126, 149, 94);
export const C_P = generateColorantEntity(16, 'P', 'Black', 1.69, 0, 0, 0);
export const C_ = null;

export interface ColorFilter {
  code : string,
  name : string
}

const filterColor = function (filter : ColorFilter) {
  return function (item: ColorantDTO): boolean {
    return (filter.code === null || filter.code === "" || item.code === filter.code) && (filter.name === null || filter.name == "" || item.name === filter.name)
  }
};

@Injectable({
  providedIn: 'root'
})
export class ColorantService {
  listItems : ColorantDTO[] = [C_A, C_B, C_C, C_D, C_E, C_F, C_G, C_H, C_I, C_J, C_K, C_L, C_M, C_N, C_O, C_P];

  constructor() { }

  getListItems() : ColorantDTO[]{
    return this.listItems;
  }

  search (code : string, name : string){
    return this.listItems.filter(filterColor({code : code, name : name}));
  }

  sortData (sort: Sort){
    return this.listItems.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'code': return compare(a.code, b.code, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'density': return compare(a.density, b.density, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
