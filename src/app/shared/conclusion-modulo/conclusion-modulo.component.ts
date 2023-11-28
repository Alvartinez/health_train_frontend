import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion-modulo',
  templateUrl: './conclusion-modulo.component.html',
  styleUrls: ['./conclusion-modulo.component.css']
})
export class ConclusionModuloComponent {

  constructor(private router: Router) {}

  modulo: string = "1";


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
