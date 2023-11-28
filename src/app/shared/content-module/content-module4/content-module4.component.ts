import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module4',
  templateUrl: './content-module4.component.html',
  styleUrls: ['./content-module4.component.css']
})
export class ContentModule4Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  texto4(){
    this.router.navigate(['resource', 'texto-plano4'], { relativeTo: this.route });
  }

  texto41(){
    this.router.navigate(['resource', 'texto-plano41'], { relativeTo: this.route });
  }

  texto42(){
    this.router.navigate(['resource', 'texto-plano42'], { relativeTo: this.route });
  }

  texto43(){
    this.router.navigate(['resource', 'texto-plano43'], { relativeTo: this.route });
  }

  texto44(){
    this.router.navigate(['resource', 'texto-plano44'], { relativeTo: this.route });
  }


  titulo = [
    "Características específicas de los equipos y utensilios",
    "Condiciones de instalación y funcionamiento", 
    "Fuentes de contaminación de los alimentos", 
    "¿Qué es la inspección, vigilancia y control ( IVC) sanitarias?",
    "Importancia del agua" 
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
