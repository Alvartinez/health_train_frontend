import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module9',
  templateUrl: './content-module9.component.html',
  styleUrls: ['./content-module9.component.css']
})
export class ContentModule9Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  texto9(){
    this.router.navigate(['resource', 'texto-plano9'], { relativeTo: this.route });
  }

  texto91(){
    this.router.navigate(['resource', 'texto-plano91'], { relativeTo: this.route });
  }

  texto92(){
    this.router.navigate(['resource', 'texto-plano92'], { relativeTo: this.route });
  }

  texto93(){
    this.router.navigate(['resource', 'texto-plano93'], { relativeTo: this.route });
  }

  texto94(){
    this.router.navigate(['resource', 'texto-plano94'], { relativeTo: this.route });
  }

  titulo = [
    "Evitando problemas en la cadena alimentaria: operaciones y condiciones clave",
    "Condiciones de transporte de alimentos y materias primas",
    "Prohibiciones en la industria alimentaria",
    "Mantenimiento de condiciones sanitarias en distribución y comercialización de alimentos",
    "Condiciones para el expendio de alimentos"
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
