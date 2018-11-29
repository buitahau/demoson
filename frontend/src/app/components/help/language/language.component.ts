import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  test_if_value : boolean = true;
  pageTitle : string = "ANGULAR LANGUAGE !!";
  listItems : string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"];

}
