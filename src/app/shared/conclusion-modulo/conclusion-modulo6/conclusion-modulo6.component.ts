import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-modulo6',
  templateUrl: './conclusion-modulo6.component.html',
  styleUrls: ['./conclusion-modulo6.component.css']
})
export class ConclusionModulo6Component {

  modulo: string = "6";

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
