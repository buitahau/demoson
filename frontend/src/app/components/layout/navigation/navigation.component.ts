import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentMode = "";
  devMode = "dev";
  settingMode = "setting";

  constructor() { }

  ngOnInit() {
  }

  public isCollapsed = true;


  updateCurrentMode (selectMode){
    if(this.currentMode == selectMode){
      this.currentMode = "";
    } else {
      this.currentMode = selectMode;
    }

    console.log(this.currentMode);
  }
}
