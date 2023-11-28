import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'texto-plano',
  templateUrl: './texto-plano.component.html',
  styleUrls: ['./texto-plano.component.css']
})
export class TextoPlanoComponent {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
