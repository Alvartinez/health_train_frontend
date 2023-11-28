import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module3',
  templateUrl: './content-module3.component.html',
  styleUrls: ['./content-module3.component.css']
})
export class ContentModule3Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  titulo = [
    "Localización y accesos",
    "Instalaciones sanitarias",
    "Condiciones específicas de las áreas de elaboración"
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

  texto3(){
    this.router.navigate(['resource', 'texto-plano3'], { relativeTo: this.route });
  }

  texto31(){
    this.router.navigate(['resource', 'texto-plano31'], { relativeTo: this.route });
  }

  texto32(){
    this.router.navigate(['resource', 'texto-plano32'], { relativeTo: this.route });
  }

}
