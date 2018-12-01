import { Injectable } from '@angular/core';
import {BaseDTO} from "../../models/colorant.model";
import {Sort} from "@angular/material";



export let BASE_PA = generateBaseEntity(1, "PA", "Pale", null);
export let BASE_EPA = generateBaseEntity(2,"EPA", "Extra Pale", null);
export let BASE_DE = generateBaseEntity(3,"DE", "Deep", null);
export let BASE_EDE = generateBaseEntity(4,"EPA", "Extra Deep", null);

function generateBaseEntity (baseId: number, type : string, name: string, createdBy : number | null) {
  return {
    baseId: baseId, type: type, name: name, createdBy : createdBy
  }
}

@Injectable({
  providedIn: 'root'
})

export class BaseService{
  listItems : BaseDTO [] = [BASE_PA, BASE_EPA, BASE_DE, BASE_EDE];
  sortedData : BaseDTO [] = this.listItems;

  constructor() { }

  sortData (sort : Sort) : BaseDTO[]{
    if(sort != null && sort != undefined){
      this.sortedData = this.listItems.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'type': return compare(a.type, b.type, isAsc);
          case 'name': return compare(a.name, b.name, isAsc);
          // case 'createdBy': return compare(a.createdBy, b.createdBy, isAsc);
          default: return 0;
        }
      });

    } else {
      this.sortedData = this.listItems
    }

    return this.sortedData;

    function compare(a: string | string, b: string | string, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
