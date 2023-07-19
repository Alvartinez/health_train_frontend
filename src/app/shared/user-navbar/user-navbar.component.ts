import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces/persona';
import { ErrorService } from 'src/app/services/error.service';
import { PersonService } from 'src/app/services/persona.service';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  listPerson: Person[] = []
  nombre: String | undefined = ""

  constructor(private router: Router, private _personService: PersonService, private _errorService: ErrorService) {}
  
  ngOnInit(): void {
    this.getNombre();
  }

  getNombre() {
    this._personService.getPerson().subscribe({
      next: (data) => {
        this.listPerson = data;
        this.nombre = this.listPerson[0].nombre;
      }
    });
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  
}
