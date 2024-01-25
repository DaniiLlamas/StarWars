import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { IPersonaje } from '../interfaces/ipersonaje';
import { AuthService } from './auth.service';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StarwarsfbService {
   user : any
  constructor(private asf : AngularFirestore, private auth: Auth) { 
     this.user = this.auth.currentUser?.uid

  }

  getAll(): Observable<IPersonaje[]> {
    console.log("llamando a firebase")
    return this.asf.collection<IPersonaje>(this.user).valueChanges();
    

  }

  addOneFav(personaje: IPersonaje): Promise<DocumentReference> | void {
  // Realiza la verificación si el personaje ya existe antes de agregarlo
  return this.asf.collection<IPersonaje>(this.user, ref =>
    ref.where('name', '==', personaje.name)
  ).get().toPromise().then(querySnapshot => {
    if (querySnapshot!.empty) {
      // Si no hay coincidencias, agrega el nuevo personaje
      return this.asf.collection<IPersonaje>(this.user).add(personaje).then(d => {
        console.log(d.id);
        this.updateId(d.id);
        return d;
      });
    } else {
      console.log('El personaje ya existe');
      return Promise.reject('El personaje ya existe');
    }
  });
}


  updateId(idPasado:string):Promise<void>{
    const documentRef = this.asf.collection(this.user).doc(idPasado);
    return documentRef.update({ idFB: idPasado});
  }

  getOneById(id:number):Observable<IPersonaje | undefined> { 
    return this.asf.collection<IPersonaje>('Starwarsfavs').doc(id.toString()).valueChanges();
  }

  

}


