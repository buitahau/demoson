import { Component, OnInit } from '@angular/core';
import {CollectionDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";
import {CollectionService} from "../../../services/collection/collection.service";




@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  // filter : ColorFilter = null;
  collectionCode : string = null;
  collectionName : string = null;

  listItems: CollectionDTO[] = null;
  sortedData: CollectionDTO[] = null;

  constructor(private collectionService: CollectionService) {

  }

  ngOnInit() {
    this.listItems = this.collectionService.getListItems();
    this.sortedData = this.listItems.slice();
  }

  // filter(){
  //   this.sortedData = this.listItems.filter(filterByProp({code: this.code, name : this.name}));
  //   // this.sortedData =  this.listItems.filter(item => ((this.filter.code == null || item.code === this.filter.code) || (this.filter.name  == null || item.name == this.filter)));
  // }

  sortData(sort: Sort) {
    const data = this.listItems.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'code': return compare(a.collectionCode, b.collectionCode, isAsc);
        case 'collectionName': return compare(a.collectionName, b.collectionName, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
