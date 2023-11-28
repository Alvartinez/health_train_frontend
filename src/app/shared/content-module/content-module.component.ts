import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'content-module',
  templateUrl: './content-module.component.html',
  styleUrls: ['./content-module.component.css']
})
export class ContentModuleComponent {

  constructor(private router: Router, private route: ActivatedRoute){}

  titulo = [
    "Historia y evolución",
    "Características específicas de las bacterias para el diagnóstico a nivel industrial y clínico",
    "Existen alimentos implicados en infecciones virales, incluida el agua",
    "Alimentos contaminados por virus"
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

  contenidoLinea(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/contenido')[0];
    console.log(baseUrl)

    this.router.navigateByUrl(baseUrl+"/contenidos/contenido-linea");
  }

  texto(){
    this.router.navigate(['resource', 'texto-plano'], { relativeTo: this.route });
  }

  texto1(){
    this.router.navigate(['resource', 'texto-plano1'], { relativeTo: this.route });
  }

  texto12(){
    this.router.navigate(['resource', 'texto-plano12'], { relativeTo: this.route });
  }
 
}
