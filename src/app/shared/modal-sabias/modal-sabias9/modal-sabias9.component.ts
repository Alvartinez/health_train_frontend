import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias9',
  templateUrl: './modal-sabias9.component.html',
  styleUrls: ['./modal-sabias9.component.css']
})
export class ModalSabias9Component {

  constructor(private router: Router) {}

  sabia: boolean = false;

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
