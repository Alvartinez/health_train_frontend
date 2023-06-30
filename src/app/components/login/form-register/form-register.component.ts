import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  
  constructor(private loginComponent: LoginComponent) { }

  Ingresar() {
    this.loginComponent.login = true;
    this.loginComponent.register = false;
  }
}
