import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login-component/login.component';
import { SignUpComponent } from './modules/sign-up-component/sign-up.component';
import { DeliveryScheduleFormComponent } from './modules/delivery-schedule-form/delivery-schedule-form.component';
import { DeliveryScheduleListComponent } from './modules/delivery-schedule-list.ts/delivery-schedule-list.component';
import { LocationFormComponent } from './modules/location-form/location-form.component';
import { ProductCategoryFormComponent } from './modules/product-category-form/product-category-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'delivery-schedule', component: DeliveryScheduleListComponent},
  {path: 'delivery-schedule/new', component: DeliveryScheduleFormComponent},
  {path: 'delivery-schedule/:id', component: DeliveryScheduleFormComponent},
  {path: 'location/new', component: LocationFormComponent},
  {path: 'product-category/new', component: ProductCategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
