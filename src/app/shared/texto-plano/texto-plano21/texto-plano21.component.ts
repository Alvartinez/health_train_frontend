import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano21',
  templateUrl: './texto-plano21.component.html',
  styleUrls: ['./texto-plano21.component.css']
})
export class TextoPlano21Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  isActive_next: boolean = false;
  isActive_back: boolean = false;
  isActive_return: boolean = false;

  institucionesInternacionales = {
    codex: false,
    fsma: false,
    gfsi: false,
    ops: false,
    fda: false,
    oms: false,
    cdc: false
  }
  
  resetInstitucionesInternacionales() { 
    for (let key in this.institucionesInternacionales) {
      // Cambiamos el atributo a false
      this.institucionesInternacionales[key as keyof typeof this.institucionesInternacionales] = false;
    }
    console.log(this.institucionesInternacionales);
  }

  institucionesNacionales = {
    invima: false,
    ins: false,
    eria: false
  }
  
  resetInstitucionesNacionales() { 
    for (let key in this.institucionesNacionales) {
      // Cambiamos el atributo a false
      this.institucionesNacionales[key as keyof typeof this.institucionesNacionales] = false;
    }
    console.log(this.institucionesNacionales);
  }

  Codex() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();
    this.institucionesInternacionales.codex = true;

    this.isActive_back = true;
    this.isActive_next = true;

  }

  Fsma() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesInternacionales.fsma = true;

    this.isActive_back = true;
    this.isActive_next = true;
  }

  Gfsi() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesInternacionales.gfsi = true;

    this.isActive_back = true;
    this.isActive_next = true;
  }

  Ops() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesInternacionales.ops = true;

    this.isActive_back = true;
    this.isActive_next = true;
  }

  Fda() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesInternacionales.fda = true;

    this.isActive_back = true;
    this.isActive_next = true;
  }

  Oms() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesInternacionales.oms = true;

    this.isActive_back = true;
    this.isActive_next = true;
  }

  Cdc() {

    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesInternacionales.cdc = true;

    this.isActive_back = true;
    this.isActive_next = false;
  }

  Invima() {
    
    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesNacionales.invima = true;

    this.isActive_back = false;
    this.isActive_next = true;
  }

  Ins() {
    
    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesNacionales.ins = true;

    this.isActive_back = true;
    this.isActive_next = true;
  }  

  Eria() {
    
    this.resetInstitucionesInternacionales();
    this.resetInstitucionesNacionales();

    this.institucionesNacionales.eria = true;

    this.isActive_back = true;
    this.isActive_next = false;
  }

  button_back() {
   //Internacionales
    if (this.institucionesInternacionales.cdc) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.oms = true;
      this.isActive_next = true;
      return;
    }

    if (this.institucionesInternacionales.oms) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.fda = true;
      this.isActive_next = true;
      return;
    }

    if (this.institucionesInternacionales.fda) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.ops = true;
      this.isActive_next = true;
      return;
    }

    if (this.institucionesInternacionales.ops) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.gfsi = true;
      this.isActive_next = true;
      return;
    }

    if (this.institucionesInternacionales.gfsi) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.fsma = true;
      this.isActive_next = true;
      return;
    }

    if (this.institucionesInternacionales.fsma) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.codex = true;
      this.isActive_back = true;
      this.isActive_next = true;
      return;
    }

   //Nacionales
    if (this.institucionesNacionales.eria) {
      this.resetInstitucionesNacionales();
      this.institucionesNacionales.ins = true;
      return;
    }

    if (this.institucionesNacionales.ins) {
      this.resetInstitucionesNacionales();
      this.institucionesNacionales.invima = true;
      this.isActive_back = true;
      this.isActive_next = true;
      return;
    }

  }

  button_next() {
   //Internacionales
    if (this.institucionesInternacionales.codex) {
      this.resetInstitucionesInternacionales();
      this.isActive_back = true;
      this.institucionesInternacionales.fsma = true;
      return;
    }

    if (this.institucionesInternacionales.fsma) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.gfsi = true;
      return;
    }

    if (this.institucionesInternacionales.gfsi) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.ops = true;
      return;
    }

    if (this.institucionesInternacionales.ops) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.fda = true;
      return;
    }

    if (this.institucionesInternacionales.fda) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.oms = true;
      return;
    }

    if (this.institucionesInternacionales.oms) {
      this.resetInstitucionesInternacionales();
      this.institucionesInternacionales.cdc = true;
      this.isActive_next = false;
      return;
    }

   //Nacionales
    if (this.institucionesNacionales.invima) {
      this.resetInstitucionesNacionales();
      this.institucionesNacionales.ins = true;
      this.isActive_back = true;
      this.isActive_next = true;
      return;
    }

    if (this.institucionesNacionales.ins) {
      this.resetInstitucionesNacionales();
      this.institucionesNacionales.eria = true;
      this.isActive_next = false;
      return;
    }

  }

}
