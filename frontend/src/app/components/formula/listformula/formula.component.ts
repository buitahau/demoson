import { Component, OnInit } from '@angular/core';
import {CollectionDTO, FormulaDTO, ProductDTO, Select2Item} from "../../../models/colorant.model";
import {FormulaService} from "../../../services/formula/formula.service";
import {Sort} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})

export class FormulaComponent implements OnInit {
  listItems : FormulaDTO [] = [];

  colorName : string = null;
  collectionCode : string = null;
  productCode : string = null;

  listColors : Select2Item []= null;
  listCollections : Select2Item [] = null;
  listProducts : Select2Item [] = null;

  constructor(private formulaService : FormulaService, private router: Router) { }


  ngOnInit() {
    this.filterFormula(null);
  }

  filterFormula (sort: Sort | null){
    if(this.colorName == ""){
      this.colorName = null;
    }

    if(this.collectionCode == ""){
      this.collectionCode = null;
    }

    if(this.productCode == ""){
      this.productCode = null;
    }

    let result  = this.formulaService.filterAndSort(this.colorName, this.collectionCode, this.productCode, sort);
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

    if(listProduct.length === 1){
      this.listProducts = [];
      this.productCode = listProduct[0].productCode;

    } else {
      this.listProducts = [];
      this.listProducts.push({id : "", text: "Choose Product"});

      for(let _product of listProduct){
        if(mapProduct[_product.productCode] == null){
          mapProduct[_product.productCode] = _product;
          this.listProducts.push({id : _product.productCode, text: _product.productName});
        }
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
    this.productCode = e.value;
    this.filterFormula(null);
  }

  changedCollection(e: any): void {
    this.collectionCode = e.value;
    this.filterFormula(null);
  }

  viewFormula(id){
    this.router.navigate([`../dashboard/view-formula/${id}`]);
  }
}
