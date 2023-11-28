import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-modulo9',
  templateUrl: './conclusion-modulo9.component.html',
  styleUrls: ['./conclusion-modulo9.component.css']
})
export class ConclusionModulo9Component {

  modulo: string = "9";

  constructor(private router: Router) {}

  module(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/quiz')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  course(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/modules')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
