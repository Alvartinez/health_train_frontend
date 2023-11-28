import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module2',
  templateUrl: './content-module2.component.html',
  styleUrls: ['./content-module2.component.css']
})
export class ContentModule2Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  titulo = [
    "Legislaciones",
    "Instituciones"
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

  texto2(){
    this.router.navigate(['resource', 'texto-plano2'], { relativeTo: this.route });
  }

  texto21(){
    this.router.navigate(['resource', 'texto-plano21'], { relativeTo: this.route });
  }

}
