import { Component, OnInit } from '@angular/core';
import {ProductDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";


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

  constructor() { }

  ngOnInit( ) {
    this.sortedData = this.listItems;
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
    const data = this.listItems.slice();

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productCode': return compare(a.productCode, b.productCode, isAsc);
        case 'productName': return compare(a.productName, b.productName, isAsc);
        // case 'createdDate': return compare(a.createdDate, b.createdDate, isAsc);
        // case 'createdBy': return compare(a.createdBy, b.createdBy, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  filterByProp (){

  }

}
