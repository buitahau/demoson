import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userName : string = null;
  password : string = null;

  constructor(private userService : UserService, private router: Router) { }

  // @ContentChild(MatFormFieldControl) _control: MatFormFieldControl<any>;
  // @ViewChild(MatFormField) _matFormField: MatFormField;

  ngOnInit() {
    // this._matFormField._control = this._control;
  }

  login (){
    let currentUser = this.userService.login(this.userName, this.password);
    if(currentUser != null){
      this.router.navigate(['/dashboard']);
    }
  }
}
