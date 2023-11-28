import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias',
  templateUrl: './modal-sabias.component.html',
  styleUrls: ['./modal-sabias.component.css']
})
export class ModalSabiasComponent {

  constructor(private router: Router) {}

  sabia: boolean = false;

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
