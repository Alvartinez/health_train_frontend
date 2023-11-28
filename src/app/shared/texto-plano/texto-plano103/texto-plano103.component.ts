import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano103',
  templateUrl: './texto-plano103.component.html',
  styleUrls: ['./texto-plano103.component.css']
})
export class TextoPlano103Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
