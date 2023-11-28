import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias8',
  templateUrl: './modal-sabias8.component.html',
  styleUrls: ['./modal-sabias8.component.css']
})
export class ModalSabias8Component {

  constructor(private router: Router) {}

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
