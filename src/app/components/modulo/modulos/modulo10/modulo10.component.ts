import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo10',
  templateUrl: './modulo10.component.html',
  styleUrls: ['./modulo10.component.css']
})
export class Modulo10Component {
  module_selected =[
    "1", "2","3", "4", "5", "6", "7", "8", "9", "10"
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
