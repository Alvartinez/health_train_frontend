import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano3',
  templateUrl: './texto-plano3.component.html',
  styleUrls: ['./texto-plano3.component.css']
})
export class TextoPlano3Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }
 
  items = {
    localizacion1: true,
    localizacion2: false,
    localizacion3: false,
    localizacion4: false,
    localizacion5: false
  }


  isActive_next: boolean = false;
  isActive_back: boolean = false;

  resetItems() {
    for (let key in this.items) {
      // Cambiamos el atributo a false
      this.items[key as keyof typeof this.items] = false;
    }
  }

  diseno() {
    this.resetItems();
    this.items.localizacion2 = true;
  }

  agua() {
    this.resetItems();
    this.items.localizacion3 = true;    
  }

  liquido() {
    this.resetItems();
    this.items.localizacion4 = true;    
  }

  solido() {
    this.resetItems();
    this.items.localizacion5 = true;    
  }

  button_back() {
    if (this.items.localizacion5) {
      this.items.localizacion5 = false;
      this.items.localizacion4 = true;
      return;
    }

    if (this.items.localizacion4) {
      this.items.localizacion4 = false;
      this.items.localizacion3 = true;
      return;
    }

    if (this.items.localizacion3) {
      this.items.localizacion3 = false;
      this.items.localizacion2 = true;
      return;
    }

    if (this.items.localizacion2) {
      this.items.localizacion2 = false;
      this.items.localizacion1 = true;
      return;
    }

  }

  button_next() {
    if (this.items.localizacion1) {
      this.items.localizacion1 = false;
      this.items.localizacion2 = true;
      return;
    }

    if (this.items.localizacion2) {
      this.items.localizacion2 = false;
      this.items.localizacion3 = true;
      return;
    }

    if (this.items.localizacion3) {
      this.items.localizacion3 = false;
      this.items.localizacion4 = true;
      return;
    }

    if (this.items.localizacion4) {
      this.items.localizacion4 = false;
      this.items.localizacion5 = true;
      return;
    }

  }

}
