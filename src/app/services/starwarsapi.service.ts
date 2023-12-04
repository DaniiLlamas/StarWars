import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersonaje } from '../interfaces/ipersonaje';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/iData';
@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<IData> {
    let a = this.http.get<IData>(`${this.apiUrl}`);;
    let i = 1;
    a.forEach(element => {
      element.results.forEach(perso => {
        perso.id = i;
        i++;
      })

    });
    return a;
  }

  getPersonajesById(id: number): Observable<IPersonaje> {
    return this.http.get<IPersonaje>(`${this.apiUrl}/${id}`)
  }
}
