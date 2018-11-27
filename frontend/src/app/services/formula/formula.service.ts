import { Injectable } from '@angular/core';
import {CollectionDTO, ColorantDTO, FormulaDTO, ProductDTO} from "../../models/colorant.model";

import {A, B, C3, D, s} from "../product/product.service";
import {C_A, C_B, C_C, C_D, C_E, C_F, C_G, C_H, C_I, C_J, C_K, C_L, C_M, C_N, C_O, C_P, C_} from '../colorant/colorant.service';


function getListFormulaEntities() : FormulaDTO[]{
  return [
    generateFormula('1', 'PW5' , 'PW5', 'House', null, null, [A,B,C3],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('2', 'NVB1' , 'NVB1', 'House', null, null, [D,s],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:2}]),
    generateFormula('3', 'JK7' , 'JK7', 'House', null, null, [A,B,C3],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('4', 'JR8' , 'JR8', 'House', null, null, [D,s],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('5', 'DVDK15' , 'DVDK15', 'House', null, null, [A,B,C3],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('6', 'HO2' , 'HO2', 'House', null, null, [D,s],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('7', 'RM0' , 'RM0', 'House', null, null, [A,B,C3],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula('8', '104' , '104', 'NCS', null, null, [D,s],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('9', '105' , '105', 'NCS', null, null, [A,B,C3],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('10', '106' , '106', 'NCS', null, null, [D,s],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('11', '107' , '107', 'NCS', null, null, [A,B,C3],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('12', '108' , '108', 'NCS', null, null, [D,s],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula('13', '109' , '109', 'NCS', null, null, [A,B,C3],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('14', '9001' , '9001', 'RAL', null, null, [D,s],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('15', '9002' , '9002', 'RAL', null, null, [A,B,C3],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('16', '9003' , '9003', 'RAL', null, null, [D,s],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('17', '9004' , '9004', 'RAL', null, null, [A,B,C3],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}]),
    generateFormula('18', '9005' , '9005', 'RAL', null, null, [D,s],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('19', '9006' , '9006', 'RAL', null, null, [A,B,C3],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('20', 'Sassenheim' , 'Sassenheim', 'Special', null, null, [D,s],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('21', 'Milano' , 'Milano', 'Special', null, null, [A,B,C3],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('22', 'Unanderra' , 'Unanderra', 'Special', null, null, [D,s],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula('23', 'Chicago' , 'Chicago', 'Special', null, null, [A,B,C3],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('24', 'Barcelona' , 'Barcelona', 'Special', null, null, [D,s],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('25', 'Paris' , 'Paris', 'Special', null, null, [A,B,C3],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('26', 'London' , 'London', 'Special', null, null, [D,s],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('27', 'Torun' , 'Torun', 'Special', null, null, [A,B,C3],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula('28', 'Norderstedt' , 'Norderstedt', 'Special', null, null, [D,s],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('29', 'Soccer' , 'Soccer', 'Sports', null, null, [A,B,C3],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('30', 'Tennis' , 'Tennis', 'Sports', null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('31', 'Basketball' , 'Basketball', 'Sports', null, null, [A,B,C3],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('32', 'Cricket' , 'Cricket', 'Sports', null, null, [D,s],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}]),
    generateFormula('33', 'Darts' , 'Darts', 'Sports', null, null, [A,B,C3],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('34', 'Swimming' , 'Swimming', 'Sports', null, null, [D,s],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('35', 'Athletics' , 'Athletics', 'Sports', null, null, [A,B,C3],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('36', 'Formula 1' , 'Formula 1', 'Sports', null, null, [D,s],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('37', 'Snowboarding' , 'Snowboarding', 'Sports', null, null, [A,B,C3],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula('38', 'Da Vinci' , 'Da Vinci', 'Art', null, null, [D,s],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('39', 'Picasso' , 'Picasso', 'Art', null, null, [A,B,C3],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('40', 'Van Gogh' , 'Van Gogh', 'Art', null, null, [D,s],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('41', 'Michelangelo' , 'Michelangelo', 'Art', null, null, [A,B,C3],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('42', 'Gaudi' , 'Gaudi', 'Art', null, null, [D,s],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula('43', 'Rembrandt' , 'Rembrandt', 'Art', null, null, [A,B,C3],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('44', 'Brood' , 'Brood', 'Art', null, null, [D,s],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('45', 'Pop' , 'Pop', 'Music', null, null, [A,B,C3],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('46', 'Disco' , 'Disco', 'Music', null, null, [D,s],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('47', 'Rap' , 'Rap', 'Music', null, null, [A,B,C3],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}]),
    generateFormula('48', 'Classic' , 'Classic', 'Music', null, null, [D,s],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('49', 'Dance' , 'Dance', 'Music', null, null, [A,B,C3],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('50', 'Jazz' , 'Jazz', 'Music', null, null, [D,s],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('51', 'Polka' , 'Polka', 'Music', null, null, [A,B,C3],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('52', 'Musical' , 'Musical', 'Music', null, null, [D,s],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}]),
    generateFormula('53', 'Mars' , 'Mars', 'Galaxy', null, null, [A,B,C3],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('54', 'Pluto' , 'Pluto', 'Galaxy', null, null, [D,s],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('55', 'Moon' , 'Moon', 'Galaxy', null, null, [A,B,C3],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('56', 'Earth' , 'Earth', 'Galaxy', null, null, [D,s],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('57', 'Venus' , 'Venus', 'Galaxy', null, null, [A,B,C3],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}]),
    generateFormula('58', 'Sun' , 'Sun', 'Galaxy', null, null, [D,s],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('59', 'Jupiter' , 'Jupiter', 'Galaxy', null, null, [A,B,C3],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('60', 'Saturn' , 'Saturn', 'Galaxy', null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('61', 'Milky way' , 'Milky way', 'Galaxy', null, null, [A,B,C3,D,s],[{colorant: C_O,quantity:17},{colorant: C_P,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('62', 'Saturn' , 'Saturn', 'Galaxy', null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
    generateFormula('63', 'Milky way' , 'Milky way', 'Galaxy', null, null, [A,B,C3,D,s],[{colorant: C_O,quantity:17},{colorant: C_P,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}]),
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

@Injectable({
  providedIn: 'root'
})

export interface FormulaFilterResult {
  listColors : any,
  listCollections : any,
  listProducts : any,
  listFormula : any
}

export class FormulaService {
  listItems : FormulaDTO[] = getListFormulaEntities();

  constructor() {

  }

  getListItems (){
    return this.listItems;
  }

  filter(colorName: string, collection : string, product : string) : FormulaFilterResult {
    let listColors = [];
    let listCollections = [];
    let listProducts = [];
    let listFormula = [];

    for(let formula : FormulaDTO of this.listItems){
      let isMatchingColor = false;
      let isMatchingCollection = false;
      let isMatchingProduct = false;
      let targetProduct = null;


      if(colorName == null || colorName == "" || formula.formulaCode == colorName){
        isMatchingColor = true;
      }

      if(collection == null || collection == "" || formula.collection == collection){
        isMatchingCollection = true;
      }

      if(product == null || product == ""){
        isMatchingProduct = true;
      } else {
        for(let _product : ProductDTO of formula.listProduct) {
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

    return {
      listColors : listColors,
      listCollections : listCollections,
      listProducts : listProducts,
      listFormula : listFormula
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
