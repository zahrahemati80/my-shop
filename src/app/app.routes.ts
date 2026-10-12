import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './signup/login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowDetailComponent } from './order/show-detail/show-detail.component';
import { AllproductComponent } from './Allproduct/allproduct.component';
import { authenticationGuard } from './authentication-guard';

export const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'login',component:LoginComponent },
  {path:'home',component:HomepageComponent},
  {path:'order',component:OrderComponent ,canActivate:[authenticationGuard]},
  {path:'details',component:ShowDetailComponent},
  {path:'signup',component:SignupComponent},
  {path:'allproducts',component:AllproductComponent},

];
