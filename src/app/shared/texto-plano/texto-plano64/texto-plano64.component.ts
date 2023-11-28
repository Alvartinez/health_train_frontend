import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano64',
  templateUrl: './texto-plano64.component.html',
  styleUrls: ['./texto-plano64.component.css']
})
export class TextoPlano64Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
