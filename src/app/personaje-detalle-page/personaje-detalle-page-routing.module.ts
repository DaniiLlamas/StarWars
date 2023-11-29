import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeDetallePagePage } from './personaje-detalle-page.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeDetallePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeDetallePagePageRoutingModule {}
