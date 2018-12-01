import { Injectable } from '@angular/core';

import {BASE_DE, BASE_EDE, BASE_EPA, BASE_PA} from '../base/base.service';
import {A, B, C3, D, E, s} from '../product/product.service'
import {
  BaseDTO,
  ProductBaseCanDTO, ProductBaseDTO,
  ProductDTO
} from "../../models/colorant.model";


let listPrefillComponent = [
  generateBaseProduct(1,BASE_PA,A,'1 lt',10,80,'871100000001'),
  generateBaseProduct(2,BASE_PA,A,'2.5 LT',25,90,'871100000002'),
  generateBaseProduct(3,BASE_EPA,A,'1 lt',10,80,'871100000003'),
  generateBaseProduct(4,BASE_EPA,A,'2.5 LT',25,90,'871100000004'),
  generateBaseProduct(5,BASE_DE,A,'1 lt',10,80,'871100000005'),
  generateBaseProduct(6,BASE_DE,A,'2.5 LT',25,90,'871100000006'),
  generateBaseProduct(7,BASE_EDE,A,'1 lt',10,80,'871100000007'),
  generateBaseProduct(8,BASE_EDE,A,'2.5 LT',25,90,'871100000008'),
  generateBaseProduct(9,BASE_PA,B,'1 lt',10,80,'871100000009'),
  generateBaseProduct(10,BASE_PA,B,'3 lt',30,90,'871100000010'),
  generateBaseProduct(11,BASE_EPA,B,'1 lt',10,80,'871100000011'),
  generateBaseProduct(12,BASE_EPA,B,'3 lt',30,90,'871100000012'),
  generateBaseProduct(13,BASE_DE,B,'1 lt',10,80,'871100000013'),
  generateBaseProduct(14,BASE_DE,B,'3 lt',30,90,'871100000014'),
  generateBaseProduct(15,BASE_EDE,B,'1 lt',10,80,'871100000015'),
  generateBaseProduct(16,BASE_EDE,B,'3 lt',30,90,'871100000016'),
  generateBaseProduct(17,BASE_PA,C3,'1 lt',10,80,'871100000017'),
  generateBaseProduct(18,BASE_PA,C3,'3 lt',30,90,'871100000018'),
  generateBaseProduct(19,BASE_EPA,C3,'1 lt',10,80,'871100000019'),
  generateBaseProduct(20,BASE_EPA,C3,'3 lt',30,90,'871100000020'),
  generateBaseProduct(21,BASE_DE,C3,'1 lt',10,80,'871100000021'),
  generateBaseProduct(22,BASE_DE,C3,'3 lt',30,90,'871100000022'),
  generateBaseProduct(23,BASE_EDE,C3,'1 lt',10,80,'871100000023'),
  generateBaseProduct(24,BASE_EDE,C3,'3 lt',30,90,'871100000024'),
  generateBaseProduct(25,BASE_PA,D,'1 lt',10,80,'871100000025'),
  generateBaseProduct(26,BASE_PA,D,'2.5 LT',25,90,'871100000026'),
  generateBaseProduct(27,BASE_EPA,D,'1 lt',10,80,'871100000027'),
  generateBaseProduct(28,BASE_EPA,D,'2.5 LT',25,90,'871100000028'),
  generateBaseProduct(29,BASE_DE,D,'1 lt',10,80,'871100000029'),
  generateBaseProduct(30,BASE_DE,D,'2.5 LT',25,90,'871100000030'),
  generateBaseProduct(31,BASE_EDE,D,'1 lt',10,80,'871100000031'),
  generateBaseProduct(32,BASE_EDE,D,'2.5 LT',25,90,'871100000032'),
];


function generateBaseProduct(productBaseCanId : number, base : BaseDTO, product : ProductDTO, unitStr : string, pricePerCan: number, percentage : number, barCode: string) : ProductBaseCanDTO {
  return {
    productBaseCanId : productBaseCanId,
    productBase : {
      product : product,
      base : base,
    },
    can : getCanFromUnitStr(unitStr),
    unit : getUnitFromUnitStr(unitStr),
    pricePerCan : pricePerCan,
    barCode : barCode,
    percentage : percentage,
  };
}

function getCanFromUnitStr(unitStr : string) : number{
  let totalValue = unitStr.replace(" lt", "").replace(" LT", "");
  return totalValue;
}

function getUnitFromUnitStr(unitStr : string){
  let unitArray = unitStr.split(" ");
  if(unitArray.length > 1){
    return unitArray[1];
  } else {
    return unitArray[0];
  }
}


@Injectable({
  providedIn: 'root'
})
export class ProductBaseService {

  listDBItems = listPrefillComponent;

  constructor() { }

  filterByProductCodeAndBaseType(productCode, baseType) : ProductBaseCanDTO[] | null{
    if(productCode == null || productCode == "" || baseType == null || baseType == ""){
      return [];

    } else {
      return this.listDBItems.filter(filterByProductAndBase);

      function filterByProductAndBase(item, index, array) {
        return (item.productBase.product.productCode == productCode && item.productBase.base.type == baseType);
      }
    }
  }
}
