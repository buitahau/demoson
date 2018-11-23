import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
// import {MatFormFieldControl} from "@angular/material";
// import {MatFormField} from "@angular/material/typings/esm5/form-field";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor() { }

  // @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
  // @ViewChild(MatFormField) _matFormField: MatFormField;

  ngOnInit() {
    // this._matFormField._control = this._control;
  }

}
