import { Component, OnInit } from '@angular/core';
import {FormulaService} from "../../../services/formula/formula.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulaDTO, ProductBaseCanDTO} from "../../../models/colorant.model";
import {ProductBaseService} from "../../../services/productbase/productbase.service";

@Component({
  selector: 'app-viewformula',
  templateUrl: './viewformula.component.html',
  styleUrls: ['./viewformula.component.scss']
})
export class ViewFormulaComponent implements OnInit {
  id: number;
  dbItem : FormulaDTO | null = null;
  quantity = 0;


  canSize = 1;
  numberOfCan = 1;
  selectProductBase : ProductBaseCanDTO = null;
  listProductBase : ProductBaseCanDTO[] | null = null;

  constructor(private formulaService : FormulaService, private productBaseService : ProductBaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchDBItem();
    });
  }

  fetchDBItem(){
    this.selectProductBase = null;
    this.dbItem = this.formulaService.findById(this.id);

    for(let colorant of this.dbItem.listColorant){
      if(this.quantity == 0 || this.quantity < colorant.quantity){
        this.quantity = colorant.quantity;
      }
    }

    let listProductBase = this.productBaseService.filterByProductCodeAndBaseType(this.dbItem.product.productCode, this.dbItem.base.type);
    this.listProductBase = [];

    for(let productBase : ProductBaseCanDTO of listProductBase){
      this.listProductBase.push({id : productBase.can, text: productBase.can + " " + productBase.unit});
      if(productBase.can == this.canSize){
        this.selectProductBase =  productBase;
      }
    }

    if(this.selectProductBase == null && listProductBase.length > 0){
      this.selectProductBase = listProductBase[0];
      this.canSize = this.selectProductBase.can;
    }

    console.log(this.listProductBase);
    console.log(this.selectProductBase);
  }

  changedCanSize(e: any): void {
    this.canSize = e.value;
  }
}
