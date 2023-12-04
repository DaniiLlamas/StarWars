import { Component, OnInit } from '@angular/core';
import { StarwarsapiService } from '../services/starwarsapi.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IPersonaje } from '../interfaces/ipersonaje';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.page.html',
  styleUrls: ['./listado-page.page.scss'],
})
export class ListadoPagePage implements OnInit {
  id!:number;
  personajeRecibido!:IPersonaje;
  navCtrl:any;
  constructor(private serviceStarWars : StarwarsapiService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.id = params['id']})
    this.serviceStarWars.getPersonajesById(this.id).subscribe(resp => 
      {
        this.personajeRecibido = resp;
      })
  }

  

}
