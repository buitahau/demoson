import { Component, OnInit } from '@angular/core';
import {CollectionDTO, ColorantDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";


function generateCollectionEntity (collectionId: number, collectionCode : string, collectionName: string, description : string, createdDate: string, createBy : number | null) : CollectionDTO {
  return {
    collectionId : collectionId,
    collectionCode : collectionCode,
    collectionName : collectionName,
    description : description,
    createdDate : createdDate,
    createBy : createBy | null
  }
}

function getListCollectionEntities() {
  return [
    generateCollectionEntity(1, "House", "House", "House", "", null),
    generateCollectionEntity(2, "NCS" , "NCS", "NSC", "" ,null),
    generateCollectionEntity(3, "RAL" , "RAL", "RAL" , "",null),
    generateCollectionEntity(4, "Special", "Special", "Special", "", null),
    generateCollectionEntity(5, "Sports" , "Sports", "Sports", "",null),
    generateCollectionEntity(6, "Art" , "Art", "Art", "", null),
    generateCollectionEntity(7, "Music" , "Music", "Music", "",null),
    generateCollectionEntity(8, "Galaxy" , "Galaxy", "Galaxy", "",null)
  ];
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  // filter : ColorFilter = null;
  collectionCode : string = null;
  collectionName : string = null;

  listItems: CollectionDTO[] = getListCollectionEntities();
  sortedData: CollectionDTO[];

  constructor() { }

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
