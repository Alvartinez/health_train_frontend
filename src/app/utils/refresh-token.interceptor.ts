import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,private router:Router,) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('x-token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          // El token ha expirado, intenta renovarlo
          return this.authService.refreshToken(token).pipe(
            switchMap((newToken:any) => {
              // Reintentar la solicitud con el nuevo token
              const clonedRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              });
              return next.handle(clonedRequest);
            }),
            catchError(err => {
              // Manejar errores de renovación de token
              // Por ejemplo, redirigir a la página de inicio de sesión
              this.router.navigate(['login']);
              return throwError(err);
            })
          );
        }
        return throwError(error);
      })
    );
  }
}