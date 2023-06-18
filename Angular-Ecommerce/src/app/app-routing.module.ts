import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthenticationComponent } from './seller-authentication/seller-authentication.component';
import { SellerHomePageComponent } from './seller-home-page/seller-home-page.component';
import { SellerAuthGuardGuard } from './seller-auth-guard.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'seller-auth', component: SellerAuthenticationComponent
  }, 
  {
    path: 'seller-home-page', component: SellerHomePageComponent, canActivate: [SellerAuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
