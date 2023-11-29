import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPagePage } from './listado-page.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPagePageRoutingModule {}
