import { Component, OnInit } from '@angular/core';
import {FormulaService} from "../../../services/formula/formula.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormulaDTO} from "../../../models/colorant.model";

@Component({
  selector: 'app-viewformula',
  templateUrl: './viewformula.component.html',
  styleUrls: ['./viewformula.component.scss']
})
export class ViewFormulaComponent implements OnInit {
  id: number;
  dbItem : FormulaDTO | null = null;

  constructor(private formulaService : FormulaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.fetchDBItem();
    });
  }

  fetchDBItem(){
    this.dbItem = this.formulaService.findById(this.id);
    console.log(this.dbItem);
  }


}
