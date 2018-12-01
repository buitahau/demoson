import { Injectable } from '@angular/core';
import {UserDTO} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogin : boolean = false;
  userDTO : UserDTO = null;
  role : string  = null;

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
      this.role = "ADMIN";
    } else if (userName === "shop" && password === "123456"){
      this.userDTO = {userName : "shop", password: "123456"};
      this.isLogin = true;
      this.role = "SHOP";

    } else if (userName === "operator" && password === "123456"){
      this.userDTO = {userName : "shop", password: "123456"};
      this.isLogin = true;
      this.role = "OPERATOR";

    } else if (userName === "maintenance" && password === "123456"){
      this.userDTO = {userName : "shop", password: "123456"};
      this.isLogin = true;
      this.role = "MAINTENANCE";

    } else {
      this.userDTO = null;
      this.isLogin = false;
      this.role = "ANONYMOUS";
    }

    return this.userDTO;
  }
}
