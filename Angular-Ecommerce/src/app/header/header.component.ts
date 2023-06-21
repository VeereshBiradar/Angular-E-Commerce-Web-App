import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuType : string = ' ';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res:any)=>
    {
       if(res.url)
       {
        if(localStorage.getItem('seller') && res.url.includes('seller'))
        {
          this.menuType = 'seller';
        }else{
          this.menuType = 'default'
        }
       }
    })
  }

}
