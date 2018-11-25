import { Component, OnInit } from '@angular/core';
import {BaseDTO} from "../../../models/base.model";
import {Sort} from "@angular/material";

let BASE_PA = generateBaseEntity(1, "PA", "Pale", null);
let BASE_EPA = generateBaseEntity(2,"EPA", "Extra Pale", null);
let BASE_DE = generateBaseEntity(3,"DE", "Deep", null);
let BASE_EDE = generateBaseEntity(4,"EPA", "Extra Deep", null);


function generateBaseEntity (baseId: number, type : string, name: string, createdBy : number | null) {
  return {
    baseId: baseId, type: type, name: name, createdBy : createdBy
  }
}

function getListBaseEntities() {
  return [BASE_PA, BASE_EPA, BASE_DE, BASE_EDE];
}


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {

  constructor() { }

  listItems: BaseDTO[] = getListBaseEntities();
  sortedData: BaseDTO[];

  ngOnInit() {
    this.sortedData = this.listItems.slice();
  }

  sortData(sort: Sort) {
    const data = this.listItems.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'type': return compare(a.type, b.type, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'createdBy': return compare(a.createdBy, b.createdBy, isAsc);
        default: return 0;
      }
    });

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
