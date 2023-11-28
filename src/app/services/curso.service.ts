import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    
    private http = inject(HttpClient);

    private myAppUrl:string = environment.endpoint; // http://localhost:3006/
    private myApiUrl = "api/cursos/";

    getCourse(id:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}Course/${id}`);
    }

    getAllCursos():Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
    }
}