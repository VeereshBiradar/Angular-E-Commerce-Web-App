import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-authentication',
  templateUrl: './seller-authentication.component.html',
  styleUrls: ['./seller-authentication.component.scss']
})
export class SellerAuthenticationComponent implements OnInit {

  constructor(private seller: SellerService) { }

  ngOnInit(): void {
  }

  signUp(data: object): void
  {
    console.log(data);
    this.seller.userSignUp();
  }

}
