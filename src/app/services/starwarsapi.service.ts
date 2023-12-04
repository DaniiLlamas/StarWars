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

  getPersonajes():Observable<IData>{
    return this.http.get<IData>(`${this.apiUrl}`);
  }
}
