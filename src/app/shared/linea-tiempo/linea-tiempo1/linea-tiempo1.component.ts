import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea-tiempo1',
  templateUrl: './linea-tiempo1.component.html',
  styleUrls: ['./linea-tiempo1.component.css']
})
export class LineaTiempo1Component {

  constructor(private router: Router) {}

  titulo: string = "HISTORIA Y EVOLUCIÓN";
  hitos: string = "Año 1877 - Año 2009";

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    console.log(baseUrl)

    this.router.navigateByUrl(baseUrl);
  }

}
