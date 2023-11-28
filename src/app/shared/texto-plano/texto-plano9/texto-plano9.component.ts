import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano9',
  templateUrl: './texto-plano9.component.html',
  styleUrls: ['./texto-plano9.component.css']
})
export class TextoPlano9Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  transporte = {
    industria: true,
    almacenamiento: false
  }

  resetTransporte() {
    for (let key in this.transporte) {
      this.transporte[key as keyof typeof this.transporte] = false;
    }
  }

  industria() {
    this.resetTransporte();
    this.transporte.industria = true;
  }

  almacenamiento() {
    this.resetTransporte();
    this.transporte.almacenamiento = true;
  }

  button_back() {
    if (this.transporte.almacenamiento) {
      this.resetTransporte();
      this.transporte.industria = true;
    }

  }

  button_next() {
    if (this.transporte.industria) {
      this.resetTransporte();
      this.transporte.almacenamiento = true;
    }

  }

}
