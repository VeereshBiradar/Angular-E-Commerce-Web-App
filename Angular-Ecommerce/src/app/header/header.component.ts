import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuType : string = ' ';
  sellerName: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res:any)=>
    {
       if(res.url)
       {
        if(localStorage.getItem('seller') && res.url.includes('seller'))
        {
          this.menuType = 'seller';
          this.getSellerName();
        }else{
          this.menuType = 'default'
        }
       }
    })
  }

  public logout()
  {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  public getSellerName()
  {
    let value = localStorage.getItem('seller');
    if(value)
    {
        let sellerData = value && JSON.parse(value)[0];
        console.log(sellerData)
        this.sellerName = sellerData.name;
    }
  }

}
