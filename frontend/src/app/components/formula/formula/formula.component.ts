import { Component, OnInit } from '@angular/core';
import {CollectionDTO, ColorantDTO, FormulaDTO, ProductDTO, Select2Item} from "../../../models/colorant.model";
import {FormulaService} from "../../../services/formula/formula.service";
import {Sort} from "@angular/material";

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

  listColors : Select2Item []= null;
  listCollections : Select2Item [] = null;
  listProducts : Select2Item [] = null;

  constructor(private formulaService : FormulaService) { }


  ngOnInit() {
    this.filterFormula(null);
  }

  filterFormula (sort: Sort | null){
    if(this.colorName == ""){
      this.colorName = null;
    }

    if(this.collection == ""){
      this.collection = null;
    }

    if(this.product == ""){
      this.product = null;
    }

    console.log(this.colorName + " : " + this.collection + " : " + this.product);

    let result  = this.formulaService.filterAndSort(this.colorName, this.collection, this.product, sort);
    let listColors : string [] = result.listColors;
    let listProduct : ProductDTO [] = result.listProducts;
    let listCollection : CollectionDTO [] = result.listCollections;

    let mapColor = {};
    let mapProduct = {};
    let mapCollection = {};

    this.listColors = [];
    this.listColors.push({id : "", text: "Choose Color"});

    for(let _color of listColors){
      if(mapColor[_color] == null){
        mapColor[_color] = _color;
        this.listColors.push({id : _color, text: _color});
      }
    }
    this.listProducts = [];
    this.listProducts.push({id : "", text: "Choose Product"});

    for(let _product of listProduct){
      if(mapProduct[_product.productId] == null){
        mapProduct[_product.productId] = _product;
        this.listProducts.push({id : _product.productCode, text: _product.productCode});
      }
    }

    this.listCollections = [];
    this.listCollections.push({id : "", text: "Choose Collection"});

    for(let _collection of listCollection){
      if(mapCollection[_collection.collectionId] == null){
        mapCollection[_collection.collectionId] = _collection;
        this.listCollections.push({id : _collection.collectionCode, text: _collection.collectionName});
      }
    }

    this.listItems = result.listFormula;
  }

  sortData(sort: Sort) {
    this.filterFormula(sort);
  }

  changedColor(e: any): void {
    this.colorName = e.value;
    this.filterFormula(null);
  }

  changedProduct(e: any): void {
    this.product = e.value;
    this.filterFormula(null);
  }

  changedColection(e: any): void {
    this.collection = e.value;
    this.filterFormula(null);
  }

  changedHandle (){
    console.log(this.collection + " : " + this.colorName + " : " + this.product);
    this.filterFormula(null);
  }
}
