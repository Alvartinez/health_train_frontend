import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-modulo2',
  templateUrl: './conclusion-modulo2.component.html',
  styleUrls: ['./conclusion-modulo2.component.css']
})
export class ConclusionModulo2Component {
  
  constructor(private router: Router) {}

  modulo: string = "2";

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
