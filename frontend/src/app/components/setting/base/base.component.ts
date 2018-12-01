import { Component, OnInit } from '@angular/core';
import {BaseDTO} from "../../../models/colorant.model";
import {Sort} from "@angular/material";
import {BaseService} from "../../../services/base/base.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {

  constructor(private baseService : BaseService) { }

  sortedData: BaseDTO[];

  ngOnInit() {
    this.sortedData = this.baseService.sortData(null);
  }

  sortData(sort: Sort) {
    this.sortedData =  this.baseService.sortData(sort);
  }
}
