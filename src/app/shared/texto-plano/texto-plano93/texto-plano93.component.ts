import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano93',
  templateUrl: './texto-plano93.component.html',
  styleUrls: ['./texto-plano93.component.css']
})
export class TextoPlano93Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
