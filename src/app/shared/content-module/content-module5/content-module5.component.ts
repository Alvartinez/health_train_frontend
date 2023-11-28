import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module5',
  templateUrl: './content-module5.component.html',
  styleUrls: ['./content-module5.component.css']
})
export class ContentModule5Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  texto5(){
    this.router.navigate(['resource', 'texto-plano5'], { relativeTo: this.route });
  }

  texto51(){
    this.router.navigate(['resource', 'texto-plano51'], { relativeTo: this.route });
  }

  texto52(){
    this.router.navigate(['resource', 'texto-plano52'], { relativeTo: this.route });
  }

  texto53(){
    this.router.navigate(['resource', 'texto-plano53'], { relativeTo: this.route });
  }


  titulo = [
    "Características Generales y especificas del personal manipulador",
    "Características de las bacterias que pudieran estar presentes en las manos de los manipuladores de alimentos",
    "También se pueden llegar a encontrar Norovirus y el virus de la hepatitis A",
    "El agua y el personal manipulador de alimentos"
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
