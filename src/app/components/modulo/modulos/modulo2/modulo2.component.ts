import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.component.html',
  styleUrls: ['./modulo2.component.css']
})
export class Modulo2Component {

  module_selected =[
    "1", "2", "4", "5", "6", "7", "8", "9", "10"
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
