import { Injectable } from '@angular/core';
import {UserDTO} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogin : boolean = false;
  userDTO : UserDTO = null;

  constructor() {
    this.checkIsLogin();
  }

  checkIsLogin (){
    return this.isLogin;
  }


  login(userName : string, password : string) : UserDTO{
    if(userName === "admin" && password === "123456"){
      this.userDTO = {userName : "admin", password: "123456"};
      this.isLogin = true;

    } else if (userName === "shop" && password === "123456"){
      this.userDTO = {userName : "shop", password: "123456"};
      this.isLogin = true;

    } else {
      this.userDTO = null;
      this.isLogin = false;
    }

    return this.userDTO;
  }
}
