import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { IPersonaje } from '../interfaces/ipersonaje';

@Injectable({
  providedIn: 'root'
})
export class StarwarsfbService {

  constructor(private asf : AngularFirestore) { 

  }

  getAll(): Observable<IPersonaje[]> {
    console.log("llamando a firebase")
    return this.asf.collection<IPersonaje>('Starwarsfavs').valueChanges();

  }

  addOneFav(personaje: IPersonaje): Promise<DocumentReference> | void {
  // Realiza la verificación si el personaje ya existe antes de agregarlo
  return this.asf.collection<IPersonaje>('Starwarsfavs', ref =>
    ref.where('name', '==', personaje.name)
  ).get().toPromise().then(querySnapshot => {
    if (querySnapshot!.empty) {
      // Si no hay coincidencias, agrega el nuevo personaje
      return this.asf.collection<IPersonaje>('Starwarsfavs').add(personaje).then(d => {
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
    const documentRef = this.asf.collection('Starwarsfavs').doc(idPasado);
    return documentRef.update({ idFB: idPasado});
  }

  getOneById(id:number):Observable<IPersonaje | undefined> { 
    return this.asf.collection<IPersonaje>('Starwarsfavs').doc(id.toString()).valueChanges();
  }

  

}


