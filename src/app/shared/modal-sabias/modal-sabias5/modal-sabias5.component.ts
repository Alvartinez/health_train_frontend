import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias5',
  templateUrl: './modal-sabias5.component.html',
  styleUrls: ['./modal-sabias5.component.css']
})
export class ModalSabias5Component {

  constructor(private router: Router) {}

  sabia: boolean = false;

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

}
