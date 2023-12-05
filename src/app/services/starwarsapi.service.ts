import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersonaje } from '../interfaces/ipersonaje';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/iData';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) { }

  getPersonajes(): Observable<IData> {
    return this.http.get<IData>(`${this.apiUrl}`).pipe(
      map((data: IData) => {
        let i = 1;
        data.results.forEach((perso: IPersonaje) => {
          // Asigna un id único a cada personaje dentro de los resultados
          perso.id = i;
          i++;
        });
        return data;
      })
    );
  }

  getPersonajesById(id: number): Observable<IPersonaje> {
    return this.http.get<IPersonaje>(`${this.apiUrl}/${id}`)
  }
}
