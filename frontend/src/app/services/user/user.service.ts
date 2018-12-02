import { Injectable } from '@angular/core';
import {UserDTO} from "../../models/user.model";
import {USER_ROLE} from "../../models/constant";

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
      this.userDTO = {userName : "admin", password: "123456", role : USER_ROLE.ADMIN};
      this.isLogin = true;
    } else if (userName === "shop" && password === "123456"){
      this.userDTO = {userName : "shop", password: "123456", role : USER_ROLE.SHOP};
      this.isLogin = true;

    } else if (userName === "operator" && password === "123456"){
      this.userDTO = {userName : "operator", password: "123456", role : USER_ROLE.OPERATOR};
      this.isLogin = true;

    } else if (userName === "maintenance" && password === "123456"){
      this.userDTO = {userName : "maintenance", password: "123456", role : USER_ROLE.MAINTENANCE};
      this.isLogin = true;

    } else {
      this.userDTO = null;
      this.isLogin = false;
    }

    return this.userDTO;
  }

  getLogginUse() : UserDTO | null{
    return this.userDTO
  }

  logOut(){
    this.userDTO = null;
    this.isLogin = false;
  }
}
