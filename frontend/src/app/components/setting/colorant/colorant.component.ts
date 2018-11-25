import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {ColorantDTO} from "../../../models/colorant.model";

let COLOR_A = generateColorantEntity(1, "A", "Blue", 1.95, 48, 128, 207, null);
let COLOR_B = generateColorantEntity(2,"B", "Violet", 0.98, 125, 71, 199, null);
let COLOR_C = generateColorantEntity(3,"C", "Red", 1.06, 240, 0, 61, null);
let COLOR_D = generateColorantEntity(4,"D", "Pale Yellow", 1.37, 232, 250, 105, null);
let COLOR_E = generateColorantEntity(5,"E", "Graphite Black", 1, 0, 0, 0, null);
let COLOR_F = generateColorantEntity(6,"F", "Pale Red", 1.27, 249, 132, 143, null);
let COLOR_G = generateColorantEntity(7,"G", "Pale Blue", 1.01, 10, 173, 235, null);
let COLOR_H = generateColorantEntity(8,"H", "Orange", 1.03, 255, 92, 23, null);
let COLOR_I = generateColorantEntity(9,"I", "Yellow", 1.12, 255, 215, 55, null);
let COLOR_J = generateColorantEntity(10,"J", "Dirty yellow", 1.16, 230, 156, 19, null);
let COLOR_K = generateColorantEntity(11,"K", "Purple", 1.3, 224, 69, 228, null);
let COLOR_L = generateColorantEntity(12,"L", "Brown", 1.7, 149, 21, 21, null);
let COLOR_M = generateColorantEntity(13,"M", "White", 1.77, 255, 255, 255, null);
let COLOR_N = generateColorantEntity(14,"N", "Green", 1.15, 28, 151, 133, null);
let COLOR_O = generateColorantEntity(15,"O", "Moss Green", 1.09, 126, 149, 94, null);
let COLOR_P = generateColorantEntity(16,"P", "Black", 1.69, 0, 0, 0, null);

function getListColorantEntities () {
  return [
    COLOR_A, COLOR_B, COLOR_C, COLOR_D, COLOR_E, COLOR_F, COLOR_G, COLOR_H,
    COLOR_I, COLOR_J, COLOR_K, COLOR_L, COLOR_M, COLOR_N, COLOR_O, COLOR_P
  ];
}

function generateColorantEntity (colorantId, code, name, density, redV, greenV, blueV, color) : ColorantDTO {
  return {
    colorantId : colorantId,
    code: code,
    name: name,        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
    density: density,
    redV: redV,
    greenV: greenV,
    blueV: blueV,
    color: color
  };
}


export interface ColorFilter {
  code : string,
  name : string
}

const filterByProp = function (filter : ColorFilter) {
  return function (item: ColorantDTO): boolean {
    return (filter.code === null || filter.code === "" || item.code === filter.code) && (filter.name === null || filter.name == "" || item.name === filter.name)
  }
};

@Component({
  selector: 'app-colorant',
  templateUrl: './colorant.component.html',
  styleUrls: ['./colorant.component.scss']
})

export class ColorantComponent implements OnInit {
  constructor() { }

  // filter : ColorFilter = null;
  code : string = null;
  name : string = null;

  listItems: ColorantDTO[] = getListColorantEntities();
  sortedData: ColorantDTO[];

  ngOnInit() {
    this.sortedData = this.listItems.slice();
  }

  filter(){
    this.sortedData = this.listItems.filter(filterByProp({code: this.code, name : this.name}));
    // this.sortedData =  this.listItems.filter(item => ((this.filter.code == null || item.code === this.filter.code) || (this.filter.name  == null || item.name == this.filter)));
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }

    this.sortedData = data.sort((a, b) => {
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
