import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../interfaces/seller-authentification.interface';

@Component({
  selector: 'app-seller-authentication',
  templateUrl: './seller-authentication.component.html',
  styleUrls: ['./seller-authentication.component.scss']
})
export class SellerAuthenticationComponent implements OnInit {

  constructor(private sellerService: SellerService, private router: Router) { }
  showLogin: boolean = false;
  authError: string = ' ';

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp(data: SignUp): void
  {
    console.log(data);
    this.sellerService.userSignUp(data);
  }

  loginHere()
  {
    this.showLogin = true;
  }

  signUpHere()
  {
    this.showLogin = false;
  }

  login(data: SignUp)
  {
    this.authError = '';
    this.sellerService.sellerLogin(data);
    this.sellerService.isLogginError.subscribe((error)=>
    {
      if(error){
        this.authError = 'Email or Password is not correct'
      }
    })
  }

}
