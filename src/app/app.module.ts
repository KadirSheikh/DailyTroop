import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GrocceryComponent } from './groccery/groccery.component';
import { EleAcPlumbComponent } from './ele-ac-plumb/ele-ac-plumb.component';
import { PackageShipmentComponent } from './package-shipment/package-shipment.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PremiumComponent } from './premium/premium.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { PaytmResponseComponent } from './paytm-response/paytm-response.component';
import { ViewOrderHistoryComponent } from './view-order-history/view-order-history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    UserDetailComponent,
    GrocceryComponent,
    EleAcPlumbComponent,
    PackageShipmentComponent,
    MedicineComponent,
    PremiumComponent,
    OrderHistoryComponent,
    GetOrdersComponent,
    PaymentOptionComponent,
    PaytmResponseComponent,
    ViewOrderHistoryComponent,
    CheckoutComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
