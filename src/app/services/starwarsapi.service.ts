import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersonaje } from '../interfaces/ipersonaje';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/iData';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient, private loadingController: LoadingController) { }

  async getPersonajes(): Promise<IData> {
    const loading = await this.loadingController.create({
      message: 'Cargando personajes...',
    });
    await loading.present();

    try {
      const response = await this.http.get<IData>(`${this.apiUrl}`).toPromise();
      if (response) {
        let i = 1;
        response.results.forEach((perso: IPersonaje) => {
          perso.id = i;
          i++;
        });
        loading.dismiss();
        return response;
      } else {
        throw new Error('No se obtuvieron datos');
      }
    } catch (error) {
      loading.dismiss();
      throw new Error('Error al obtener los personajes');
    }
  }



  getPersonajesById(id: number): Observable<IPersonaje> {
    return this.http.get<IPersonaje>(`${this.apiUrl}/${id}`)
  }


  
}
