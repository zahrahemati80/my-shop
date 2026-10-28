import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './signup/login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowDetailComponent } from './order/show-detail/show-detail.component';
import { ProductListComponent } from './productlist/product-list.component';
import { authenticationGuard } from './authentication-guard';
import { Reseed } from './reseed/reseed.component';
import { SugestComponent } from './suggestion/sugest.component';
import { BasketComponent } from './basket/basket.component';

export const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'home',component:HomepageComponent},
  {path:'login',component:LoginComponent },
  {path:'order',component:OrderComponent ,canActivate:[authenticationGuard]},
  {path:'details',component:ShowDetailComponent},
  {path:'signup',component:SignupComponent},
  {path:'list',component:ProductListComponent},
  {path:'receipt', component:Reseed},
  {path:'suggest',component:SugestComponent},
  {path:'basket',component:BasketComponent},

];
