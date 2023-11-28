import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias4',
  templateUrl: './modal-sabias4.component.html',
  styleUrls: ['./modal-sabias4.component.css']
})
export class ModalSabias4Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }
  
  sabia: boolean = false;

}
