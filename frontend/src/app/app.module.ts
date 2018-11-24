import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

// IMPORT MATERIAL
import {MatToolbarModule} from "@angular/material";
import {MaterialModule} from './material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {CreateComponent} from './components/create/create.component';
import {EditComponent} from './components/edit/edit.component';
import {HelpComponent} from './components/help/help.component';

import {IssueService} from "./issue.service";

import {LoginComponent} from './components/login-page/login/login.component';
import {RegisterComponent} from './components/login-page/register/register.component';
import {ForgotpasswordComponent} from './components/login-page/forgotpassword/forgotpassword.component';

import {DashboardComponent} from "./components/dashboard/dashboard.component";

import {HeaderComponent} from "./components/layout/header/header.component";
import {NavigationComponent} from "./components/layout/navigation/navigation.component";
import {BreadcrumbComponent} from "./components/layout/breadcrumb/breadcrumb.component";
import {FooterComponent} from "./components/layout/footer/footer.component";

import {ColorantComponent} from './components/setting/colorant/colorant.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {'path': '', redirectTo: 'login', pathMatch: 'full'},
  {'path': 'index', component: DashboardComponent},
  {'path': 'login', component: LoginComponent},       {'path': 'sign-in', component: LoginComponent},
  {'path': 'register', component: RegisterComponent}, {'path': 'sign-up', component: RegisterComponent},
  {'path': 'forgot-password', component: ForgotpasswordComponent},

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'colorant', component: ColorantComponent},
      {path: 'help', component: HelpComponent},
      {path: 'create', component: CreateComponent},
      {path: 'edit/:id', component: EditComponent},
      {path: 'list', component: ListComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,

    // page !!
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,

    // dashboard after login
    DashboardComponent,

    ListComponent,
    CreateComponent,
    EditComponent,
    HelpComponent,


    // common layout
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,


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

    // import boostrap
    NgbModule,

    FormsModule
  ],
  providers: [
    IssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
