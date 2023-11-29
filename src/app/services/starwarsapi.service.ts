import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api';
  constructor(private http: HttpClient) { }

  getPersonajes(){
    return this.http.get(`${this.apiUrl}/people`);
  }
}
