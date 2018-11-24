import {Component, OnInit} from '@angular/core';



export interface ColorantItem {
  code: "string",
  name: "string",        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
  density: "number",
  redV: "number",
  greenV: "number",
  blueV: "number",
  color: "string"
}

let COLOR_A = generateColorantEntity("A", "Blue", 1.95, 48, 128, 207, null);
let COLOR_B = generateColorantEntity("B", "Violet", 0.98, 125, 71, 199, null);
let COLOR_C = generateColorantEntity("C", "Red", 1.06, 240, 0, 61, null);
let COLOR_D = generateColorantEntity("D", "Pale Yellow", 1.37, 232, 250, 105, null);
let COLOR_E = generateColorantEntity("E", "Graphite Black", 1, 0, 0, 0, null);
let COLOR_F = generateColorantEntity("F", "Pale Red", 1.27, 249, 132, 143, null);
let COLOR_G = generateColorantEntity("G", "Pale Blue", 1.01, 10, 173, 235, null);
let COLOR_H = generateColorantEntity("H", "Orange", 1.03, 255, 92, 23, null);
let COLOR_I = generateColorantEntity("I", "Yellow", 1.12, 255, 215, 55, null);
let COLOR_J = generateColorantEntity("J", "Dirty yellow", 1.16, 230, 156, 19, null);
let COLOR_K = generateColorantEntity("K", "Purple", 1.3, 224, 69, 228, null);
let COLOR_L = generateColorantEntity("L", "Brown", 1.7, 149, 21, 21, null);
let COLOR_M = generateColorantEntity("M", "White", 1.77, 255, 255, 255, null);
let COLOR_N = generateColorantEntity("N", "Green", 1.15, 28, 151, 133, null);
let COLOR_O = generateColorantEntity("O", "Moss Green", 1.09, 126, 149, 94, null);
let COLOR_P = generateColorantEntity("P", "Black", 1.69, 0, 0, 0, null);

function getListColorantEntities () {
  return [
    COLOR_A, COLOR_B, COLOR_C, COLOR_D, COLOR_E, COLOR_F, COLOR_G, COLOR_H,
    COLOR_I, COLOR_J, COLOR_K, COLOR_L, COLOR_M, COLOR_N, COLOR_O, COLOR_P
  ];
}

function generateColorantEntity (code, name, density, redV, greenV, blueV, color) : ColorantItem {
  return {
    code: code,
    name: name,        // dựa vào 4 giá trị (density, red, green, blue) này để xác định màu. cách tính màu thì chưa xem chưa biết.
    density: density,
    redV: redV,
    greenV: greenV,
    blueV: blueV,
    color: color
  };
}

const ELEMENT_DATA: ColorantItem[] = getListColorantEntities();


@Component({
  selector: 'app-colorant',
  templateUrl: './colorant.component.html',
  styleUrls: ['./colorant.component.scss']
})

export class ColorantComponent implements OnInit {
  constructor() { }

  ngOnInit() {  }

  displayedColumns: string[] = ['code', 'name', 'density', 'redV', 'greenV', 'blueV', 'color'];
  dataSource = ELEMENT_DATA;
}