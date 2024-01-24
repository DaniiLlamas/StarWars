import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPersonaje } from '../interfaces/ipersonaje';
import { StarwarsfbService } from '../services/starwarsfb.service';

@Component({
  selector: 'app-misfavs',
  templateUrl: './misfavs.page.html',
  styleUrls: ['./misfavs.page.scss'],
})
export class MisfavsPage implements OnInit {
  misfavs !: IPersonaje[]
  respuestinia : any
  constructor(private fbs : StarwarsfbService) { }

  ngOnInit() {
    this.fbs.getAll().subscribe(resp => {
      this.misfavs = resp
    })

    this.fbs.getOneById(1).subscribe(respit => {
      this.respuestinia = respit
    })
    
    console.log(this.respuestinia)
  }

}
