import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';
import {ColorantDTO} from "../../../models/colorant.model";
import {ColorantService} from "../../../services/colorant/colorant.service";

@Component({
  selector: 'app-colorant',
  templateUrl: './colorant.component.html',
  styleUrls: ['./colorant.component.scss']
})

export class ColorantComponent implements OnInit {
  code : string = null;
  name : string = null;

  sortedData: ColorantDTO[];

  constructor(private colorantService: ColorantService) {

  }

  ngOnInit() {
    this.sortedData = this.colorantService.search(this.code, this.name);
  }

  filter(){
    this.sortedData = this.colorantService.search(this.code, this.name);
  }

  sortData(sort: Sort) {
    this.sortedData =  this.colorantService.sortData(sort);
  }
}
