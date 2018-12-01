import { Injectable } from '@angular/core';
import {CollectionDTO, FormulaDTO, ProductDTO} from "../../models/colorant.model";

import {A, B, C3, D, s} from "../product/product.service";
import {C_A, C_B, C_C, C_D, C_E, C_F, C_G, C_H, C_I, C_J, C_K, C_L, C_M, C_N, C_O, C_P, C_} from '../colorant/colorant.service';
import {C_Art, C_Galaxy, C_House, C_Music, C_NCS, C_RAL, C_Special, C_Sports} from "../collection/collection.service";
import {Sort} from "@angular/material";


function getListFormulaEntities() : FormulaDTO []{
  let listFormulaDTO = [];

  let listGenerateArray =  [
    generateFormula(1,'PW5' , 'PW5', C_House, null, null, [A,B,C3],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',28000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(2,'NVB1' , 'NVB1', C_House, null, null, [D,s],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:2}],'08/12/2005',56000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(3,'JK7' , 'JK7', C_House, null, null, [A,B,C3],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',84000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(4,'JR8' , 'JR8', C_House, null, null, [D,s],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',112000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(5,'DVDK15' , 'DVDK15', C_House, null, null, [A,B,C3],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',140000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(6,'HO2' , 'HO2', C_House, null, null, [D,s],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',168000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(7,'RM0' , 'RM0', C_House, null, null, [A,B,C3],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}],'08/12/2005',196000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(8,'104' , '104', C_NCS, null, null, [D,s],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',224000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(9,'105' , '105', C_NCS, null, null, [A,B,C3],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',252000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(10,'106' , '106', C_NCS, null, null, [D,s],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',280000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(11,'107' , '107', C_NCS, null, null, [A,B,C3],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',308000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(12,'108' , '108', C_NCS, null, null, [D,s],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}],'08/12/2005',336000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(13,'109' , '109', C_NCS, null, null, [A,B,C3],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',364000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(14,'9001' , '9001', C_RAL, null, null, [D,s],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',392000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(15,'9002' , '9002', C_RAL, null, null, [A,B,C3],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',420000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(16,'9003' , '9003', C_RAL, null, null, [D,s],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',448000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(17,'9004' , '9004', C_RAL, null, null, [A,B,C3],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}],'08/12/2005',476000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(18,'9005' , '9005', C_RAL, null, null, [D,s],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',504000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(19,'9006' , '9006', C_RAL, null, null, [A,B,C3],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',532000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(20,'Sassenheim' , 'Sassenheim', C_Special, null, null, [D,s],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',560000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(21,'Milano' , 'Milano', C_Special, null, null, [A,B,C3],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',588000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(22,'Unanderra' , 'Unanderra', C_Special, null, null, [D,s],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}],'08/12/2005',616000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(23,'Chicago' , 'Chicago', C_Special, null, null, [A,B,C3],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',644000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(24,'Barcelona' , 'Barcelona', C_Special, null, null, [D,s],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',672000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(25,'Paris' , 'Paris', C_Special, null, null, [A,B,C3],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',700000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(26,'London' , 'London', C_Special, null, null, [D,s],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',728000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(27,'Torun' , 'Torun', C_Special, null, null, [A,B,C3],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}],'08/12/2005',756000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(28,'Norderstedt' , 'Norderstedt', C_Special, null, null, [D,s],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',784000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(29,'Soccer' , 'Soccer', C_Sports, null, null, [A,B,C3],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',812000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(30,'Tennis' , 'Tennis', C_Sports, null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',840000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(31,'Basketball' , 'Basketball', C_Sports, null, null, [A,B,C3],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',868000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(32,'Cricket' , 'Cricket', C_Sports, null, null, [D,s],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}],'08/12/2005',896000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(33,'Darts' , 'Darts', C_Sports, null, null, [A,B,C3],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',924000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(34,'Swimming' , 'Swimming', C_Sports, null, null, [D,s],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',952000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(35,'Athletics' , 'Athletics', C_Sports, null, null, [A,B,C3],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',980000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(36,'Formula 1' , 'Formula 1', C_Sports, null, null, [D,s],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1008000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(37,'Snowboarding' , 'Snowboarding', C_Sports, null, null, [A,B,C3],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}],'08/12/2005',1036000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(38,'Da Vinci' , 'Da Vinci', C_Art, null, null, [D,s],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1064000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(39,'Picasso' , 'Picasso', C_Art, null, null, [A,B,C3],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1092000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(40,'Van Gogh' , 'Van Gogh', C_Art, null, null, [D,s],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1120000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(41,'Michelangelo' , 'Michelangelo', C_Art, null, null, [A,B,C3],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1148000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(42,'Gaudi' , 'Gaudi', C_Art, null, null, [D,s],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}],'08/12/2005',1176000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(43,'Rembrandt' , 'Rembrandt', C_Art, null, null, [A,B,C3],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1204000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(44,'Brood' , 'Brood', C_Art, null, null, [D,s],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1232000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(45,'Pop' , 'Pop', C_Music, null, null, [A,B,C3],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1260000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(46,'Disco' , 'Disco', C_Music, null, null, [D,s],[{colorant: C_A,quantity:2},{colorant: C_B,quantity:4.5},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1288000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(47,'Rap' , 'Rap', C_Music, null, null, [A,B,C3],[{colorant: C_C,quantity:4},{colorant: C_D,quantity:5},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.5},{colorant: C_G,quantity:2},{colorant: C_H,quantity:1}],'08/12/2005',1316000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(48,'Classic' , 'Classic', C_Music, null, null, [D,s],[{colorant: C_I,quantity:5.5},{colorant: C_J,quantity:2},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1344000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(49,'Dance' , 'Dance', C_Music, null, null, [A,B,C3],[{colorant: C_K,quantity:6},{colorant: C_L,quantity:4.6},{colorant: C_M,quantity:4},{colorant: C_N,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1372000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(50,'Jazz' , 'Jazz', C_Music, null, null, [D,s],[{colorant: C_O,quantity:8},{colorant: C_P,quantity:6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1400000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(51,'Polka' , 'Polka', C_Music, null, null, [A,B,C3],[{colorant: C_A,quantity:6},{colorant: C_B,quantity:4.6},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1428000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(52,'Musical' , 'Musical', C_Music, null, null, [D,s],[{colorant: C_C,quantity:8},{colorant: C_D,quantity:1},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.6},{colorant: C_G,quantity:3},{colorant: C_H,quantity:2}],'08/12/2005',1456000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(53,'Mars' , 'Mars', C_Galaxy, null, null, [A,B,C3],[{colorant: C_I,quantity:5.6},{colorant: C_J,quantity:4},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1484000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(54,'Pluto' , 'Pluto', C_Galaxy, null, null, [D,s],[{colorant: C_K,quantity:10},{colorant: C_L,quantity:4.7},{colorant: C_M,quantity:4},{colorant: C_N,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1512000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(55,'Moon' , 'Moon', C_Galaxy, null, null, [A,B,C3],[{colorant: C_O,quantity:12},{colorant: C_P,quantity:7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1540000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(56,'Earth' , 'Earth', C_Galaxy, null, null, [D,s],[{colorant: C_A,quantity:10},{colorant: C_B,quantity:4.7},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1568000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(57,'Venus' , 'Venus', C_Galaxy, null, null, [A,B,C3],[{colorant: C_C,quantity:12},{colorant: C_D,quantity:7},{colorant: C_E,quantity:4},{colorant: C_F,quantity:5.7},{colorant: C_G,quantity:4},{colorant: C_H,quantity:3}],'08/12/2005',1596000, 'Use paintbrush only ', 'Universal primer Red'),
    generateFormula(58,'Sun' , 'Sun', C_Galaxy, null, null, [D,s],[{colorant: C_I,quantity:5.7},{colorant: C_J,quantity:10},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1624000, 'Use paintbrush only ', 'Universal primer Grey'),
    generateFormula(59,'Jupiter' , 'Jupiter', C_Galaxy, null, null, [A,B,C3],[{colorant: C_K,quantity:14},{colorant: C_L,quantity:4.8},{colorant: C_M,quantity:4},{colorant: C_N,quantity:11},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1652000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(60,'Saturn' , 'Saturn', C_Galaxy, null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1670000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(61,'Milky way' , 'Milky way', C_Galaxy, null, null, [A,B,C3,D,s],[{colorant: C_O,quantity:17},{colorant: C_P,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'08/12/2005',1670000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(62,'Saturn' , 'Saturn', C_Galaxy, null, null, [D,s],[{colorant: C_O,quantity:16},{colorant: C_P,quantity:8},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'13/11/2018',1670000, 'Use paintbrush only ', 'Universal primer White'),
    generateFormula(63,'Milky way' , 'Milky way', C_Galaxy, null, null, [A,B,C3,D,s],[{colorant: C_O,quantity:17},{colorant: C_P,quantity:9},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0},{colorant: C_,quantity:0}],'13/11/2018',1670000, 'Use paintbrush only ', 'Universal primer White'),

  ];

  for(let _array of listGenerateArray){
    listFormulaDTO = listFormulaDTO.concat(_array);
  }

  let formulaId = 1;
  for(let _formula of listFormulaDTO){
    _formula.formulaId = formulaId;
    formulaId ++;
  }

  return listFormulaDTO;
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


function generateFormula(formulaId, formulaCode, formulaName, collection, createdDate, createdBy, listProduct, listColorant, formulaDate, colorHex, comments, substrate) : FormulaDTO []{
  let result = [];
  for(let product of listProduct){
    result.push({
      formulaId : formulaId,
      formulaCode : formulaCode,
      formulaName : formulaName,
      collection : collection,
      createdDate : createdDate,
      createdBy : createdBy,
      product : product,
      listColorant : listColorant.filter(e => e.colorant != null),
      formulaDate: formulaDate,
      colorRGB: convertColorHexToRGB(colorHex),
      comments: comments,
      substrate: substrate
    });
  }
  return result;


  function convertColorHexToRGB(colorHex: number){
    return colorHex.toString(16);
  }

  // convert hex to decimal --> convertNumberFromBaseTo(number, 16, 10)
  function convertColorHexToRGB_2(hex: string) {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    let bigint : number = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return [r, g, b].join();
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

  findById (formulaId){
    let result = this.listItems.filter(filterById);
    return result != null && result.length > 0 ?  result[0] : null;

    function filterById(item, index, array) {
      return (item.formulaId == formulaId);
    }
  }

  filterAndSort(colorName: string, collectionCode : string, productCode : string, sort : Sort | null) : FormulaFilterResult {
    let listColors = [];
    let listCollections : CollectionDTO[] = [];
    let listProducts : ProductDTO[] = [];
    let listFormula : FormulaDTO[] = [];

    for(let formula of this.listItems){
      let isMatchingColor = false;
      let isMatchingCollection = false;
      let isMatchingProduct = false;

      if(colorName == null || colorName == "" || formula.formulaCode == colorName){
        isMatchingColor = true;
      }

      if(collectionCode == null || collectionCode == "" || formula.collection.collectionCode == collectionCode){
        isMatchingCollection = true;
      }

      if(productCode == null || productCode == "" || formula.product.productCode == productCode ){
        isMatchingProduct = true;
      }

      if(isMatchingCollection && isMatchingProduct && isMatchingColor){
        listColors.push(formula.formulaCode);
        listCollections.push(formula.collection);
        listProducts.push(formula.product);
        listFormula.push(formula);
      }
    }

    if(sort != null && sort != undefined){
      listFormula = listFormula.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'formulaCode': return compare(a.formulaCode, b.formulaCode, isAsc);
          case 'formulaName': return compare(a.formulaName, b.formulaName, isAsc);
          case 'collection': return compare(a.collection.collectionName, b.collection.collectionName, isAsc);
          case 'product': return compare(a.product.productName, b.product.productName, isAsc);

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
