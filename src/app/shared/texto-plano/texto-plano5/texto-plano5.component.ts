import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano5',
  templateUrl: './texto-plano5.component.html',
  styleUrls: ['./texto-plano5.component.css']
})
export class TextoPlano5Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  personal = {
    estado: true,
    educacion: false,
    capacitacion: false,
    practica: false
  }

  resetPersonal() {
    for (let key in this.personal){
      this.personal[key as keyof typeof this.personal] = false;
    }
  }

  estado() {
    this.resetPersonal();
    this.personal.estado = true;
  }

  educacion() {
    this.resetPersonal();
    this.personal.educacion = true;
  }

  capacitacion() {
    this.resetPersonal();
    this.personal.capacitacion = true;
  }

  practica() {
    this.resetPersonal();
    this.personal.practica = true;
  }

  button_back() {
    if (this.personal.practica) {
      this.resetPersonal();
      this.personal.capacitacion = true;
      return;
    }

    if (this.personal.capacitacion) {
      this.resetPersonal();
      this.personal.educacion = true;
      return;
    }

    if (this.personal.educacion) {
      this.resetPersonal();
      this.personal.estado = true;
      return;
    }

  }

  button_next() {
    if (this.personal.estado) {
      this.resetPersonal();
      this.personal.educacion = true;
      return;
    }

    if (this.personal.educacion) {
      this.resetPersonal();
      this.personal.capacitacion = true;
      return;
    }

    if (this.personal.capacitacion) {
      this.resetPersonal();
      this.personal.practica = true;
      return;
    }
    

  }

}
