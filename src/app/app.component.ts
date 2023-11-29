import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Añadir', url: '/anadir', icon: 'mail' },
    { title: 'Inicio', url: '/home', icon:'paper-plane'},
    { title: 'Buscar', url: '/buscar', icon:'paper-plane'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
