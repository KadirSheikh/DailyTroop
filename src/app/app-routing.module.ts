import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EleAcPlumbComponent } from './ele-ac-plumb/ele-ac-plumb.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { GrocceryComponent } from './groccery/groccery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PackageShipmentComponent } from './package-shipment/package-shipment.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { PaytmResponseComponent } from './paytm-response/paytm-response.component';
import { PremiumComponent } from './premium/premium.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ViewOrderHistoryComponent } from './view-order-history/view-order-history.component';

const routes: Routes = [
{path:"" , redirectTo:"home" , pathMatch:"full"},
{path:"home" , component:HomeComponent},
{path:"login" , component:LoginComponent},
{path:"register" , component:RegisterComponent},
{path:"dashboard" , component:DashboardComponent},
{path:"profile" , component:ProfileComponent},
{path:"userDetails" , component:UserDetailComponent},
{path:"eleAcPumb" , component:EleAcPlumbComponent},
{path:"packageShipment" , component:PackageShipmentComponent},
{path:"medicine" , component:MedicineComponent},
{path:"premium" , component:PremiumComponent},
{path:"orderHistory" , component:OrderHistoryComponent},
{path:"getOrder" , component:GetOrdersComponent},
{path:"grocery" , component:GrocceryComponent},
{path:"paymentOption" , component:PaymentOptionComponent},
{path:"paytmResponse" , component:PaytmResponseComponent},
{path:"viewOrderHistory" , component:ViewOrderHistoryComponent},
{path:"checkout" , component:CheckoutComponent},
{path:"forgetPassword" , component:ForgetPasswordComponent},
{path:"**" , redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
