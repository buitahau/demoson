import { Component, OnInit } from '@angular/core';
import {CollectionDTO, FormulaDTO, ProductDTO} from "../../../models/colorant.model";
import {FormulaService} from "../../../services/formula/formula.service";

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

  constructor(private formulaService : FormulaService) { }


  ngOnInit() {
    this.listItems = this.formulaService.getListItems();
  }

  filterFormula (){
    let result  = this.formulaService.filter(this.colorName, this.collection, this.product);
    this.listColors = result.listColors;
    this.listCollections = result.listCollections;
    this.listProducts = result.listProducts;
    this.listItems = result.listFormula;
  }

  sortData(){
    this.filterFormula();
  }
}
