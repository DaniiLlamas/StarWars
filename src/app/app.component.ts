import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Añadir al equipo', url: '/anadir', icon: 'mail' },
    { title: 'Listado de personajes', url: '/home', icon:'paper-plane'},
    { title: 'Mis favoritos', url: '/misfavs', icon:'paper-plane'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
