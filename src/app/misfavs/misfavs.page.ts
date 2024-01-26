import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPersonaje } from '../interfaces/ipersonaje';
import { StarwarsfbService } from '../services/starwarsfb.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-misfavs',
  templateUrl: './misfavs.page.html',
  styleUrls: ['./misfavs.page.scss'],
})
export class MisfavsPage implements OnInit {
  misfavs !: IPersonaje[]
  user : any
  respuestinia : any
  constructor(private fbs : StarwarsfbService, private auth:Auth) { }

  ngOnInit() {
    this.fbs.getAll().subscribe(resp => {
      this.misfavs = resp
    })

    this.fbs.getOneById(1).subscribe(respit => {
      this.respuestinia = respit
    })
    this.user = this.auth.currentUser?.email
    console.log(this.respuestinia)
  }

  async delete(id:string | undefined){
    try{
      await this.fbs.deleteOneById(id)
      console.log('Eliminación exitosa')
    }catch(error){
      console.log('Eliminación fallida')
    }
    this.fbs.deleteOneById(id)
  }

}
