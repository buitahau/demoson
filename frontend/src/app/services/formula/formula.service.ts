import { Injectable } from '@angular/core';
import {CollectionDTO, FormulaDTO, ProductDTO} from "../../models/colorant.model";

import {A, B, C3, D, s} from "../product/product.service";
import {C_A, C_B, C_C, C_D, C_E, C_F, C_G, C_H, C_I, C_J, C_K, C_L, C_M, C_N, C_O, C_P, C_} from '../colorant/colorant.service';
import {C_Art, C_Galaxy, C_House, C_Music, C_NCS, C_RAL, C_Special, C_Sports} from "../collection/collection.service";
import {Sort} from "@angular/material";


function getListFormulaEntities() : FormulaDTO[]{
  return [
    generateFormula(1, 'PW5' , 'PW5', C_House, null, null, [A,B,C3],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(2, 'NVB1' , 'NVB1', C_House, null, null, [D,s],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:2}]),
    generateFormula(3, 'JK7' , 'JK7', C_House, null, null, [A,B,C3],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(4, 'JR8' , 'JR8', C_House, null, null, [D,s],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(5, 'DVDK15' , 'DVDK15', C_House, null, null, [A,B,C3],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(6, 'HO2' , 'HO2', C_House, null, null, [D,s],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(7, 'RM0' , 'RM0', C_House, null, null, [A,B,C3],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula(8, '104' , '104', C_NCS, null, null, [D,s],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(9, '105' , '105', C_NCS, null, null, [A,B,C3],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(10, '106' , '106', C_NCS, null, null, [D,s],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(11, '107' , '107', C_NCS, null, null, [A,B,C3],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(12, '108' , '108', C_NCS, null, null, [D,s],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula(13, '109' , '109', C_NCS, null, null, [A,B,C3],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(14, '9001' , '9001', C_RAL, null, null, [D,s],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(15, '9002' , '9002', C_RAL, null, null, [A,B,C3],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(16, '9003' , '9003', C_RAL, null, null, [D,s],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(17, '9004' , '9004', C_RAL, null, null, [A,B,C3],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}]),
    generateFormula(18, '9005' , '9005', C_RAL, null, null, [D,s],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(19, '9006' , '9006', C_RAL, null, null, [A,B,C3],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(20, 'Sassenheim' , 'Sassenheim', C_Special, null, null, [D,s],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(21, 'Milano' , 'Milano', C_Special, null, null, [A,B,C3],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(22, 'Unanderra' , 'Unanderra', C_Special, null, null, [D,s],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula(23, 'Chicago' , 'Chicago', C_Special, null, null, [A,B,C3],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(24, 'Barcelona' , 'Barcelona', C_Special, null, null, [D,s],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(25, 'Paris' , 'Paris', C_Special, null, null, [A,B,C3],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(26, 'London' , 'London', C_Special, null, null, [D,s],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(27, 'Torun' , 'Torun', C_Special, null, null, [A,B,C3],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula(28, 'Norderstedt' , 'Norderstedt', C_Special, null, null, [D,s],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(29, 'Soccer' , 'Soccer', C_Sports, null, null, [A,B,C3],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(30, 'Tennis' , 'Tennis', C_Sports, null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(31, 'Basketball' , 'Basketball', C_Sports, null, null, [A,B,C3],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(32, 'Cricket' , 'Cricket', C_Sports, null, null, [D,s],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}]),
    generateFormula(33, 'Darts' , 'Darts', C_Sports, null, null, [A,B,C3],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(34, 'Swimming' , 'Swimming', C_Sports, null, null, [D,s],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(35, 'Athletics' , 'Athletics', C_Sports, null, null, [A,B,C3],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(36, 'Formula 1' , 'Formula 1', C_Sports, null, null, [D,s],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(37, 'Snowboarding' , 'Snowboarding', C_Sports, null, null, [A,B,C3],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula(38, 'Da Vinci' , 'Da Vinci', C_Art, null, null, [D,s],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(39, 'Picasso' , 'Picasso', C_Art, null, null, [A,B,C3],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(40, 'Van Gogh' , 'Van Gogh', C_Art, null, null, [D,s],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(41, 'Michelangelo' , 'Michelangelo', C_Art, null, null, [A,B,C3],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(42, 'Gaudi' , 'Gaudi', C_Art, null, null, [D,s],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula(43, 'Rembrandt' , 'Rembrandt', C_Art, null, null, [A,B,C3],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(44, 'Brood' , 'Brood', C_Art, null, null, [D,s],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(45, 'Pop' , 'Pop', C_Music, null, null, [A,B,C3],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(46, 'Disco' , 'Disco', C_Music, null, null, [D,s],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(47, 'Rap' , 'Rap', C_Music, null, null, [A,B,C3],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}]),
    generateFormula(48, 'Classic' , 'Classic', C_Music, null, null, [D,s],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(49, 'Dance' , 'Dance', C_Music, null, null, [A,B,C3],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(50, 'Jazz' , 'Jazz', C_Music, null, null, [D,s],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(51, 'Polka' , 'Polka', C_Music, null, null, [A,B,C3],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(52, 'Musical' , 'Musical', C_Music, null, null, [D,s],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula(53, 'Mars' , 'Mars', C_Galaxy, null, null, [A,B,C3],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(54, 'Pluto' , 'Pluto', C_Galaxy, null, null, [D,s],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(55, 'Moon' , 'Moon', C_Galaxy, null, null, [A,B,C3],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(56, 'Earth' , 'Earth', C_Galaxy, null, null, [D,s],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(57, 'Venus' , 'Venus', C_Galaxy, null, null, [A,B,C3],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula(58, 'Sun' , 'Sun', C_Galaxy, null, null, [D,s],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(59, 'Jupiter' , 'Jupiter', C_Galaxy, null, null, [A,B,C3],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(60, 'Saturn' , 'Saturn', C_Galaxy, null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(61, 'Milky way' , 'Milky way', C_Galaxy, null, null, [A,B,C3,D,s],[{colorant: C_O,quantity:17},{colorant: C_P,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(62, 'Saturn' , 'Saturn', C_Galaxy, null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula(63, 'Milky way' , 'Milky way', C_Galaxy, null, null, [A,B,C3,D,s],[{colorant: C_O,quantity:17},{colorant: C_P,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
  ];
}

// export interface FormulaObject{
//   formulaId : number | string,
//   formulaCode : string,
//   formulaName : string,
//   collection : string,
//   createdDate : string,
//   createdBy : string,
//   listProduct : ProductDTO[],
//   listColorant : ColorantDTO[]
// }

function generateFormula(formulaId, formulaCode, formulaName, collection, createdDate, createdBy, listProduct, listColorant) : FormulaDTO{
  return {
    formulaId : formulaId,
    formulaCode : formulaCode,
    formulaName : formulaName,
    collection : collection,
    createdDate : createdDate,
    createdBy : createdBy,
    listProduct : listProduct,
    listColorant : listColorant
  }
}


export interface FormulaFilterResult {
  listColors : any,
  listCollections : any,
  listProducts : any,
  listFormula : any
}

@Injectable({
  providedIn: 'root'
})

export class FormulaService {
  listItems : FormulaDTO[] = getListFormulaEntities();

  constructor() {

  }

  getListItems (){
    return this.listItems;
  }

  filterAndSort(colorName: string, collection : string, product : string, sort : Sort | null) : FormulaFilterResult {
    let listColors = [];
    let listCollections : CollectionDTO[] = [];
    let listProducts : ProductDTO[] = [];
    let listFormula : FormulaDTO[] = [];

    for(let formula of this.listItems){
      let isMatchingColor = false;
      let isMatchingCollection = false;
      let isMatchingProduct = false;
      let targetProduct = null;


      if(colorName == null || colorName == "" || formula.formulaCode == colorName){
        isMatchingColor = true;
      }

      if(collection == null || collection == "" || formula.collection.collectionName == collection){
        isMatchingCollection = true;
      }

      if(product == null || product == ""){
        isMatchingProduct = true;
      } else {
        for(let _product of formula.listProduct) {
          if (_product.productCode == product || _product.productName == product) {
            isMatchingProduct = true;
            targetProduct = _product;
          }
        }
      }

      if(isMatchingCollection && isMatchingProduct && isMatchingColor){
        listColors.push(formula.formulaCode);

        listCollections.push(formula.collection);

        if(targetProduct != null){
          listProducts.push(targetProduct);
        } else {
          listProducts = listProducts.concat(formula.listProduct);
        }

        listFormula.push(formula);
      }
    }

    if(sort != null && sort != undefined){
      listFormula = listFormula.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'formulaCode': return compare(a.formulaCode, b.formulaCode, isAsc);
          case 'formulaName': return compare(a.formulaName, b.formulaName, isAsc);
          case 'collectionName': return compare(a.collection.collectionName, b.collection.collectionName, isAsc);

          // case 'density': return compare(a.density, b.density, isAsc);
          default: return 0;
        }
      });
    }

    return {
      listColors : listColors,
      listCollections : listCollections,
      listProducts : listProducts,
      listFormula : listFormula
    };

    function compare(a: string | number, b: string | number, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }



  getFormulaColor (): string[] | null{
    return null;
  }

  getFormulaProduct() : ProductDTO[] | null{
    return null;
  }

  getFormulaCollection () : CollectionDTO [] | null{
    return null;
  }
}
