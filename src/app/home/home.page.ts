import { Component } from '@angular/core';
import { StarwarsapiService } from '../services/starwarsapi.service';
import { IPersonaje } from '../interfaces/ipersonaje';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personajes: IPersonaje[];

  constructor(private StarwarsApi : StarwarsapiService) {}

  ngOnInit(){
    this.StarwarsApi.getPersonajes().subscribe(s => {this.personajes = data)
  }
}
