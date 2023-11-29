import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPersonajesPagePage } from './mis-personajes-page.page';

const routes: Routes = [
  {
    path: '',
    component: MisPersonajesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPersonajesPagePageRoutingModule {}
