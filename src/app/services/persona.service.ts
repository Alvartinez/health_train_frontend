import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Person } from '../interfaces/persona';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonService { 
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http:HttpClient) { 
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = "api/personas/";
    }

    getPerson(): Observable<Person[]>{
        return this.http.get<Person[]>(`${this.myAppUrl}${this.myApiUrl}`);
    }

    signIn(user: Person): Observable<any>{
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}newUser`, user);
    }

    login(user: Person): Observable<string> {
        return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}loginUser`, user);
    }
}