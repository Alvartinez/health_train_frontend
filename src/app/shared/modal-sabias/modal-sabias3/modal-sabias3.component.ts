import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias3',
  templateUrl: './modal-sabias3.component.html',
  styleUrls: ['./modal-sabias3.component.css']
})
export class ModalSabias3Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  sabia: boolean = false;
}
