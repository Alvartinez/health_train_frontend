import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-modulo10',
  templateUrl: './conclusion-modulo10.component.html',
  styleUrls: ['./conclusion-modulo10.component.css']
})
export class ConclusionModulo10Component {

  modulo: string = "10";

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
