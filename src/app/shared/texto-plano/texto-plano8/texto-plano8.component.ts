import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano8',
  templateUrl: './texto-plano8.component.html',
  styleUrls: ['./texto-plano8.component.css']
})
export class TextoPlano8Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  plan_Saneamiento = {
    inicio: true,
    limpieza: false,
    desecho: false,
    plaga: false,
    agua: false
  }

  resetSaneamiento() {
    for (let key in this.plan_Saneamiento) {
      this.plan_Saneamiento[key as keyof typeof this.plan_Saneamiento] = false;
    }
  }

  inicio() {
    this.resetSaneamiento();
    this.plan_Saneamiento.inicio = true;
  }

  limpiezas() {
    this.resetSaneamiento();
    this.plan_Saneamiento.limpieza = true;
  }

  desechos() {
    this.resetSaneamiento();
    this.plan_Saneamiento.desecho = true;
  }

  plagas() {
    this.resetSaneamiento();
    this.plan_Saneamiento.plaga = true;
  }

  potable() {
    this.resetSaneamiento();
    this.plan_Saneamiento.agua = true;
  }

  button_back() {
    if (this.plan_Saneamiento.agua) {
      this.resetSaneamiento();
      this.plan_Saneamiento.plaga = true;
      return;
    }

    if (this.plan_Saneamiento.plaga) {
      this.resetSaneamiento();
      this.plan_Saneamiento.desecho = true;
      return;
    }

    if (this.plan_Saneamiento.desecho) {
      this.resetSaneamiento();
      this.plan_Saneamiento.limpieza = true;
      return;
    }

    if (this.plan_Saneamiento.limpieza) {
      this.resetSaneamiento();
      this.plan_Saneamiento.inicio = true;
      return;
    }

  }

  button_next() {
    if (this.plan_Saneamiento.inicio) {
      this.resetSaneamiento();
      this.plan_Saneamiento.limpieza = true;
      return;
    }

    if (this.plan_Saneamiento.limpieza) {
      this.resetSaneamiento();
      this.plan_Saneamiento.desecho = true;
      return;
    }

    if (this.plan_Saneamiento.desecho) {
      this.resetSaneamiento();
      this.plan_Saneamiento.plaga = true;
      return;
    }

    if (this.plan_Saneamiento.plaga) {
      this.resetSaneamiento();
      this.plan_Saneamiento.agua = true;
      return;
    }

  }


}
