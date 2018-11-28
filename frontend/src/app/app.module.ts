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
import {FormsModule} from "@angular/forms";
import {NgSelect2Module} from "ng-select2";


import {AppComponent} from './app.component';
import {ListComponent} from './components/issue/list/list.component';
import {CreateComponent} from './components/issue/create/create.component';
import {EditComponent} from './components/issue/edit/edit.component';
import {HelpComponent} from './components/help/help.component';

import {IssueService} from "./services/issues/issue.service";
import {ColorantService} from "./services/colorant/colorant.service";
import {ProductService} from "./services/product/product.service";
import {CollectionService} from "./services/collection/collection.service";
import {FormulaService} from "./services/formula/formula.service";

import {LoginComponent} from './components/login-page/login/login.component';
import {RegisterComponent} from './components/login-page/register/register.component';
import {ForgotpasswordComponent} from './components/login-page/forgotpassword/forgotpassword.component';

import {DashboardComponent} from "./components/dashboard/dashboard.component";

import {HeaderComponent} from "./components/layout/header/header.component";
import {NavigationComponent} from "./components/layout/navigation/navigation.component";
import {BreadcrumbComponent} from "./components/layout/breadcrumb/breadcrumb.component";
import {FooterComponent} from "./components/layout/footer/footer.component";

// setting
import {ColorantComponent} from './components/setting/colorant/colorant.component';
import {BaseComponent} from "./components/setting/base/base.component";
import {CollectionComponent} from "./components/setting/collection/collection.component";
import {ProductComponent} from "./components/setting/product/product.component"

// formula
import {FormulaComponent} from "./components/formula/formula/formula.component";

// help page !!
import {LanguageComponent} from "./components/help/language/language.component";


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
      {path: 'base', component: BaseComponent},
      {path: 'collection', component: CollectionComponent},
      {path: 'product', component: ProductComponent},


      {path: 'formula', component: FormulaComponent},

      {path: 'help', component: HelpComponent},
      {path: 'help/language', component: LanguageComponent},
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

    // help page
    HelpComponent,
    LanguageComponent,


    // common layout
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,


    ColorantComponent,
    BaseComponent,
    CollectionComponent,
    ProductComponent,

    // formula component
    FormulaComponent,

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
    NgSelect2Module,

    FormsModule
  ],
  providers: [
    IssueService,
    ColorantService,
    ProductService,
    CollectionService,
    FormulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
