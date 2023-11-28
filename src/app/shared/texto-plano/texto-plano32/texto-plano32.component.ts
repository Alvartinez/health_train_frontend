import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano32',
  templateUrl: './texto-plano32.component.html',
  styleUrls: ['./texto-plano32.component.css']
})
export class TextoPlano32Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }
  
  areas = {
    pisos: true,
    paredes: false,
    techos: false,
    ventanas: false,
    puertas: false,
    escaleras: false,
    iluminaciones: false,
    ventilaciones: false
  }

  resetAreas() {
    for (let key in this.areas) {
      // Cambiamos el atributo a false
      this.areas[key as keyof typeof this.areas] = false;
    }
  }

  piso() {
    this.resetAreas();
    this.areas.pisos = true;
  }

  pared() {
    this.resetAreas();
    this.areas.paredes = true;    
  }

  techo() {
    this.resetAreas();
    this.areas. techos = true;   
  }

  ventana() {
    this.resetAreas();
    this.areas.ventanas = true;
  }

  puerta() {
    this.resetAreas();
    this.areas.puertas = true;   
  }

  escalera() {
    this.resetAreas();
    this.areas.escaleras = true;    
  }

  iluminacion() {
    this.resetAreas();
    this.areas.iluminaciones = true;    
  }

  ventilacion() {
    this.resetAreas();
    this.areas.ventilaciones = true;
  }

  button_back() {
    if (this.areas.ventilaciones) {
      this.resetAreas();
      this.areas.iluminaciones = true;
      return;
    }

    if (this.areas.iluminaciones) {
      this.resetAreas()
      this.areas.escaleras = true;
      return;
    }

    if (this.areas.escaleras) {
      this.resetAreas()
      this.areas.puertas = true;
      return;  
    }

    if (this.areas.puertas) {
      this.resetAreas()
      this.areas.ventanas = true;
      return;      
    }

    if (this.areas.ventanas) {
      this.resetAreas()
      this.areas.techos = true;
      return; 
    }

    if (this.areas.techos) {
      this.resetAreas()
      this.areas.paredes = true;
      return;      
    }

    if (this.areas.paredes) {
      this.resetAreas()
      this.areas.pisos = true;
      return;
    }

  }

  button_next() {
    if (this.areas.pisos) {
      this.resetAreas();
      this.areas.paredes = true;
      return;
    }

    if (this.areas.paredes) {
      this.resetAreas()
      this.areas.techos = true;
      return;
    }

    if (this.areas.techos) {
      this.resetAreas()
      this.areas.ventanas = true;
      return;      
    }    

    if (this.areas.ventanas) {
      this.resetAreas()
      this.areas.puertas = true;
      return; 
    }    

    if (this.areas.puertas) {
      this.resetAreas()
      this.areas.escaleras = true;
      return;      
    }

    if (this.areas.escaleras) {
      this.resetAreas()
      this.areas.iluminaciones = true;
      return;  
    }
    
    if (this.areas.iluminaciones) {
      this.resetAreas()
      this.areas.ventilaciones = true;
      return;
    }    

  }

}
