import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { CourseService } from '../../services/curso.service';

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<any> {
  constructor(private _cursoService: CourseService, private router:Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const courseId = route.params['id'];

    return this._cursoService.getCourse(courseId).pipe(
      catchError((error) => {
        // Manejar el error aquí, por ejemplo, redirigir al usuario a user-home
        this.router.navigate(['/user-home']);
        // Devolver un valor observable para evitar que la resolución falle
        return of(null);
      })
    );
  }
}