import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module7',
  templateUrl: './content-module7.component.html',
  styleUrls: ['./content-module7.component.css']
})
export class ContentModule7Component {

  
  constructor(private router: Router, private route: ActivatedRoute){}

  texto7(){
    this.router.navigate(['resource', 'texto-plano7'], { relativeTo: this.route });
  }

  texto71(){
    this.router.navigate(['resource', 'texto-plano71'], { relativeTo: this.route });
  }

  texto72(){
    this.router.navigate(['resource', 'texto-plano72'], { relativeTo: this.route });
  }

  titulo = [
    "Calidad e inocuidad",
    "Sistemas de control",
    "Garantía de la confiabilidad de las mediciones"
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
