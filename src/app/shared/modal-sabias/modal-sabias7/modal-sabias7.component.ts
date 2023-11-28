import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias7',
  templateUrl: './modal-sabias7.component.html',
  styleUrls: ['./modal-sabias7.component.css']
})
export class ModalSabias7Component {
  
  constructor(private router: Router) {}

  sabia: boolean = false;

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  sabia1: boolean = true;
  sabia2: boolean = false;

  siguiente() {
    if (this.sabia1) {
      this.sabia1 = false;
      this.sabia2 = true;
      return;
    }
    
  }

  retrocede() {
    if (this.sabia2) {
      this.sabia2 = false;
      this.sabia1 = true;
      return;
    }
    
  }

}
