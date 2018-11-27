import { Component, OnInit } from '@angular/core';
import {CollectionDTO, FormulaDTO, ProductDTO} from "../../../models/colorant.model";

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})

export class FormulaComponent implements OnInit {
  listItems : FormulaDTO [] = [];

  colorName : string = null;
  collection : string = null;
  product : string = null;

  listColors : string [] = null;
  listCollections : CollectionDTO[] = null;
  listProducts : ProductDTO[] = null;

  constructor() { }

  ngOnInit() {
  }

}
