import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sabias2',
  templateUrl: './modal-sabias2.component.html',
  styleUrls: ['./modal-sabias2.component.css']
})
export class ModalSabias2Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/sabias')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  sabia1: boolean = true;
  sabia2: boolean = false;
  sabia3: boolean = false;

  siguiente() {
    if (this.sabia1) {
      this.sabia1 = false;
      this.sabia2 = true;
      return;
    }

    if (this.sabia2) {
      this.sabia2 = false;
      this.sabia3 = true;
      return;
    }
    
  }

  retrocede() {
    if (this.sabia2) {
      this.sabia2 = false;
      this.sabia1 = true;
      return;
    }

    if (this.sabia3) {
      this.sabia3 = false;
      this.sabia2 = true;
      return;
    }
    
  }

}
