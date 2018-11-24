import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

// IMPORT MATERIAL
import {MatToolbarModule} from "@angular/material";
import {MaterialModule} from './material.module';



import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {CreateComponent} from './components/create/create.component';
import {EditComponent} from './components/edit/edit.component';
import {HelpComponent} from './components/help/help.component';

import {IssueService} from "./issue.service";
import {LoginComponent} from './components/login/login.component';
import {ColorantComponent} from './components/colorant/colorant.component';

const routes: Routes = [
  {'path': 'login', component: LoginComponent},
  {'path': 'create', component: CreateComponent},
  {'path': 'edit/:id', component: EditComponent},
  {'path': 'list', component: ListComponent},
  {'path': 'help', component: HelpComponent},
  {'path': '', redirectTo: 'list', pathMatch: 'full'},

  {'path': 'manager/colorant', component : ColorantComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    HelpComponent,

    // page !!
    LoginComponent,
    ColorantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    RouterModule.forRoot(routes),

    // IMPORT MATERIAL
    MatToolbarModule,
    MaterialModule,
  ],
  providers: [
    IssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
