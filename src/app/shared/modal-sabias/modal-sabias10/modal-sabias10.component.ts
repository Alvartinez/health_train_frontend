import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias10',
  templateUrl: './modal-sabias10.component.html',
  styleUrls: ['./modal-sabias10.component.css']
})
export class ModalSabias10Component {

  constructor(private router: Router) {}

  sabia: boolean = false;

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }
  
}
