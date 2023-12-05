import { Component } from '@angular/core';
import { StarwarsapiService } from '../services/starwarsapi.service';
import { IPersonaje } from '../interfaces/ipersonaje';
import { IData } from '../interfaces/iData';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data !: IData;
  personajes!: IPersonaje[];
  id = 1
  constructor(private StarwarsApi : StarwarsapiService) {
    StarwarsApi.getPersonajes().subscribe(
      resp=>{
        this.data = resp;
        console.log(this.data)
        this.personajes = this.data.results
      }
    )
   
  }

  ngOnInit(){
    
  }
}
