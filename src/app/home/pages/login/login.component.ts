import { Component } from '@angular/core';
import { LocalStorageService } from '@rutas/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit() {
    // Limpia el localStorage al iniciar la aplicación
    this._localStorageService.clearLocalStorage();
  }
}
