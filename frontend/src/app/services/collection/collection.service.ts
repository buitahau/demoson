import { Injectable } from '@angular/core';
import {CollectionDTO, ColorantDTO} from "../../models/colorant.model";

function generateCollectionEntity (collectionId: number, collectionCode : string, collectionName: string, description : string, createdDate: string, createBy : number | null) : CollectionDTO {
  return {
    collectionId : collectionId,
    collectionCode : collectionCode,
    collectionName : collectionName,
    description : description,
    createdDate : createdDate,
    createBy : createBy
  }
}


export let C_House = generateCollectionEntity(1, "House", "House", "House", "", null);
export let C_NCS = generateCollectionEntity(2, "NCS" , "NCS", "NSC", "" ,null);
export let C_RAL = generateCollectionEntity(3, "RAL" , "RAL", "RAL" , "",null);
export let C_Special = generateCollectionEntity(4, "Special", "Special", "Special", "", null);
export let C_Sports = generateCollectionEntity(5, "Sports" , "Sports", "Sports", "",null);
export let C_Art = generateCollectionEntity(6, "Art" , "Art", "Art", "", null);
export let C_Music = generateCollectionEntity(7, "Music" , "Music", "Music", "",null);
export let C_Galaxy = generateCollectionEntity(8, "Galaxy" , "Galaxy", "Galaxy", "",null);


@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  listItems : CollectionDTO[] = [C_House, C_NCS, C_RAL, C_Special, C_Sports, C_Art, C_Music, C_Galaxy];

  constructor() { }

  getListItems() : CollectionDTO[]{
    return this.listItems;
  }
}
