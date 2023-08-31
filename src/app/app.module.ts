import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login-component/login.component';
import { SignUpComponent } from './modules/sign-up-component/sign-up.component';
import { DeliveryScheduleFormComponent } from './modules/delivery-schedule-form/delivery-schedule-form.component';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryScheduleListComponent } from './modules/delivery-schedule-list.ts/delivery-schedule-list.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './modules/nav-bar/nav-bar';
import { LocationFormComponent } from './modules/location-form/location-form.component';
import { ProductCategoryFormComponent } from './modules/product-category-form/product-category-form.component';
import { NgSelectModule } from '@ng-select/ng-select';


let components = [
  LoginComponent,
  SignUpComponent,
  DeliveryScheduleFormComponent,
  DeliveryScheduleListComponent,
  NavBarComponent,
  LocationFormComponent,
  ProductCategoryFormComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgSelectModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
