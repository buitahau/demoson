import { Component, OnInit } from '@angular/core';
import {CollectionDTO, ColorantDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";


function generateCollectionEntity (collectionId: number, code : string, name: string, filterGroup : string, createdBy : number | null) : CollectionDTO {
  return {
    collectionId : collectionId,
    code : code,
    name : name,
    filterGroup : filterGroup,
    createdBy : createdBy
  }
}

function getListCollectionEntities() {
  return [
    generateCollectionEntity(1, "House", "House", "A", null),
    generateCollectionEntity(2, "NCS" , "NCS", "B" ,null),
    generateCollectionEntity(3, "RAL" , "RAL", "A" , null),
    generateCollectionEntity(4, "Special", "Special", "B", null),
    generateCollectionEntity(5, "Sports" , "Sports", "A", null),
    generateCollectionEntity(6, "Art" , "Art", "B" , null),
    generateCollectionEntity(7, "Music" , "Music", "A", null),
    generateCollectionEntity(8, "Galaxy" , "Galaxy", "B", null)
  ];
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  // filter : ColorFilter = null;
  code : string = null;
  name : string = null;

  listItems: CollectionDTO[] = getListCollectionEntities();
  sortedData: CollectionDTO[];

  constructor() { }

  ngOnInit() {
  }

  ngOnInit() {
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
        case 'code': return compare(a.code, b.code, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'filterGroup': return compare(a.filterGroup, b.filterGroup, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
