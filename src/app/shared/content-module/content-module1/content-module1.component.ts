import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module1',
  templateUrl: './content-module1.component.html',
  styleUrls: ['./content-module1.component.css']
})
export class ContentModule1Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  titulo = [
    "2500000 A.C - Año 1857",
    "Año 1877 - Año 2009"
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

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/contenido')[0];
    console.log(baseUrl)

    this.router.navigateByUrl(baseUrl+"/contenidos/contenido1");
  }

  lineaTiempo(){
    this.router.navigate(['resource', 'linea-tiempo'], { relativeTo: this.route });
  }

  lineaTiempo1(){
    this.router.navigate(['resource', 'linea-tiempo1'], { relativeTo: this.route });
  }

}
