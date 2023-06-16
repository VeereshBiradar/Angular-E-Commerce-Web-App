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

  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(data: SignUp): void
  {
    console.log(data);
    this.seller.userSignUp(data).subscribe((res)=>
    {
      if(res)
      {
        this.router.navigate(['seller-home-page'])
      }
    });
  }

}
