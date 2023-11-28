import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-module10',
  templateUrl: './content-module10.component.html',
  styleUrls: ['./content-module10.component.css']
})
export class ContentModule10Component {

  constructor(private router: Router, private route: ActivatedRoute){}

  texto10(){
    this.router.navigate(['resource', 'texto-plano10'], { relativeTo: this.route });
  }

  texto101(){
    this.router.navigate(['resource', 'texto-plano101'], { relativeTo: this.route });
  }

  texto102(){
    this.router.navigate(['resource', 'texto-plano102'], { relativeTo: this.route });
  }

  texto103(){
    this.router.navigate(['resource', 'texto-plano103'], { relativeTo: this.route });
  }


  titulo = [
    "Los restaurantes y establecimientos destinados a la preparación y consumo de alimentos cumplirán con las condiciones sanitarias generales",
    "Condiciones específicas del área de preparación de alimentos",
    "Equipos y utensilios",
    "Operaciones de preparación y servido de los alimentos"
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
