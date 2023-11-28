import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano62',
  templateUrl: './texto-plano62.component.html',
  styleUrls: ['./texto-plano62.component.css']
})
export class TextoPlano62Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  direcciones = {
    microbiano:"https://www.youtube.com/embed/lomADwYsNu0",
    alimentaria:"https://www.youtube.com/embed/IHqkS3JxIxc"
  }

}
