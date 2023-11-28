import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texto-plano2',
  templateUrl: './texto-plano2.component.html',
  styleUrls: ['./texto-plano2.component.css']
})
export class TextoPlano2Component {

  constructor(private router: Router) {}

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  isActive_next: boolean = false;
  isActive_back: boolean = false;
  isActive_return: boolean = false;

  //legislaciones
  legislaciones = {
    a1979: true,
    a1997: false,
    a2002: false,
    a2005: false,
    a1575_2007: false,
    a2115_2007: false,
    a2012: false,
    a2013: false,
    a2019: false,
    a2021: false
  };
  
  resetLegislaciones() { 
    for (let key in this.legislaciones) {
      // Cambiamos el atributo a false
      this.legislaciones[key as keyof typeof this.legislaciones] = false;
    }
    console.log(this.legislaciones);
  }

  button_back() {
    
    if (this.legislaciones.a1997) {
      this.resetLegislaciones();
      this.legislaciones.a1979 = true;
      this.isActive_back = false;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2002) {
      this.resetLegislaciones();
      this.legislaciones.a1997 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2005) {
      this.resetLegislaciones();
      this.legislaciones.a2002 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a1575_2007) {
      this.resetLegislaciones();
      this.legislaciones.a2005 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2115_2007) {
      this.resetLegislaciones();
      this.legislaciones.a1575_2007 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2012) {
      this.resetLegislaciones();
      this.legislaciones.a2115_2007 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2013) {
      this.resetLegislaciones();
      this.legislaciones.a2012 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2019) {
      this.resetLegislaciones();
      this.legislaciones.a2013 = true;
      this.isActive_next = true;
    }

    if (this.legislaciones.a2021) {
      this.resetLegislaciones();
      this.legislaciones.a2019 = true;
      this.isActive_next = true;
    }

  }

  button_next() {
    if (this.legislaciones.a1979) {
      this.resetLegislaciones();
      this.legislaciones.a1997 = true;
      this.isActive_back = true;
      return;
    }
    
    if (this.legislaciones.a1997) {
      this.resetLegislaciones();
      this.legislaciones.a2002 = true;
      return;
    }

    if (this.legislaciones.a2002) {
      this.resetLegislaciones();
      this.legislaciones.a2005 = true;
      return;
    }

    if (this.legislaciones.a2005) {
      this.resetLegislaciones();
      this.legislaciones.a1575_2007 = true;
      return;
    }

    if (this.legislaciones.a1575_2007) {
      this.resetLegislaciones();
      this.legislaciones.a2115_2007 = true;
      return;
    }

    if (this.legislaciones.a2115_2007) {
      this.resetLegislaciones();
      this.legislaciones.a2012 = true;
      return;
    }

    if (this.legislaciones.a2012) {
      this.resetLegislaciones();
      this.legislaciones.a2013 = true;
      return;
    }

    if (this.legislaciones.a2013) {
      this.resetLegislaciones();
      this.legislaciones.a2019 = true;
      return;
    }

    if (this.legislaciones.a2019) {
      this.resetLegislaciones();
      this.legislaciones.a2021 = true;
      this.isActive_next = false;
      return;
    }
  
  } 

vista1979() {
    this.resetLegislaciones();
    this.isActive_next = true;
    this.isActive_back = false;
    this.isActive_return = false;
    this.legislaciones.a1979 = true;
    this.isActive_return = true;
  }

  vista1997() {
    this.resetLegislaciones();
    this.legislaciones.a1997 = true;
    this.isActive_next = true;
    this.isActive_back = true;
    this.isActive_return = true;
  }

  vista2002() {
    this.resetLegislaciones();
    this.legislaciones.a2002 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }

  vista2005() {
    this.resetLegislaciones();
    this.legislaciones.a2005 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }
  
  vista1575() {
    this.resetLegislaciones();
    this.legislaciones.a1575_2007 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }

  vista2115() {
    this.resetLegislaciones();
    this.legislaciones.a2115_2007 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }

  vista2012() {
    this.resetLegislaciones();
    this.legislaciones.a2012 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }

  vista2013() {
    this.resetLegislaciones();
    this.legislaciones.a2013 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }
  
  vista2019() {
    this.resetLegislaciones();
    this.legislaciones.a2019 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = true;
  }

  vista2021() {
    this.resetLegislaciones();
    this.legislaciones.a2021 = true;
    this.isActive_return = true;
    this.isActive_back = true;
    this.isActive_next = false;
  }

}
