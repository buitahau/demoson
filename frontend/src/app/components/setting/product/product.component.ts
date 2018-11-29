import { Component, OnInit } from '@angular/core';
import {ProductDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";
import {ProductService} from "../../../services/product/product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  productCode : string = null;
  productName : string = null;

  listItems : ProductDTO[] = null;
  sortedData : ProductDTO[] = null;

  constructor(private productService : ProductService) { }

  ngOnInit( ) {
    this.sortedData = this.productService.getListItems();
  }

  filter(){
    var filterProduct = function (filter) {
      return function (item: ProductDTO): boolean {
        return (filter.productCode === null || filter.productCode === "" || item.productCode === filter.productCode) && (filter.productName === null || filter.productName == "" || item.productName === filter.productName)
      }
    };

    this.sortedData = this.listItems.filter(filterProduct({code: this.productCode, name : this.productName}));
  }

  sortData(sort: Sort) {
    return this.productService.sortData(sort);
  }
}
