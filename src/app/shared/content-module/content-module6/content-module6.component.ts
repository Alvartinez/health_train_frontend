import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module6',
  templateUrl: './content-module6.component.html',
  styleUrls: ['./content-module6.component.css']
})
export class ContentModule6Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  texto6(){
    this.router.navigate(['resource', 'texto-plano6'], { relativeTo: this.route });
  }

  texto61(){
    this.router.navigate(['resource', 'texto-plano61'], { relativeTo: this.route });
  }

  texto62(){
    this.router.navigate(['resource', 'texto-plano62'], { relativeTo: this.route });
  }

  texto63(){
    this.router.navigate(['resource', 'texto-plano63'], { relativeTo: this.route });
  }

  texto64(){
    this.router.navigate(['resource', 'texto-plano64'], { relativeTo: this.route });
  }

  titulo = [
    "Materias primas e insumos",
    "Envases y embalajes",
    "Fabricación",
    "Envasado y embalado",
    "Prevención de la contaminación cruzada"
  ];

  module_selected =[
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
  ]

  titulos = [
    "HISTORIA Y EVOLUCIÓN",
    "LEGISLACIONES E INSTITUCIONES",
    "EDIFICACIÓN E INSTALACIONES",
    "EQUIPOS Y UTENSILIOS",
    "PERSONAL MANIPULADOR DE ALIMENTOS",
    "REQUISITOS DE HIGIENE Y FABRICACION",
    "ASEGURAMIENTO Y CONTROL DE LA CALIDAD E INOCUIDAD",
    "SANEAMIENTO",
    "ALMACENAMIENTO Y TRANSPORTE",
    "RESTAURANTES Y ESTABLECIMIENTOS GASTRONÓMICOS"
  ]

}
