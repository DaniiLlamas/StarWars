import { Component, OnInit } from '@angular/core';
import { StarwarsapiService } from '../services/starwarsapi.service';
import { IPersonaje } from '../interfaces/ipersonaje';
import { IData } from '../interfaces/iData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data!: IData;
  personajes: IPersonaje[] = []; 

  constructor(private starwarsApi: StarwarsapiService) {}

  async ngOnInit() {
    try {
      this.data = await this.starwarsApi.getPersonajes();
      console.log(this.data);
      if (this.data && this.data.results) {
        this.personajes = this.data.results;
      } else {
        console.error('No se encontraron resultados');
      }
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    }
  }
}
