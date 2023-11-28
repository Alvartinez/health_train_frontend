import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from '@rutas/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@rutas/services/error.service';

@Component({
  selector: 'module-navbar',
  templateUrl: './module-navbar.component.html',
  styleUrls: ['./module-navbar.component.css']
})
export class ModuleNavbarComponent {

  @Input() titulo: String | undefined;
  nombre: String | undefined;

  constructor(private router: Router, private location: Location, private toastr: ToastrService,  private _personService: PersonService,  private _errorService: ErrorService) {}

  ngOnInit(): void {
    this.getName();
  }

  getName(){
    this._personService.getPerson().subscribe({
      next:(data) =>{
        this.nombre = data.nombre;
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }
    });

  }

  home(){
    const currentUrl = this.router.url;

    // Obtiene la parte de la URL antes de '/modules'
    const baseUrl = currentUrl.split('/modules')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }

  logOut() {
    localStorage.removeItem("x-token");
    this.toastr.success("¡Vuelva pronto!", "Exitoso");
    this.router.navigate(["healthtrain","login"]);
  }
}
