import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisfavsPage } from './misfavs.page';

const routes: Routes = [
  {
    path: '',
    component: MisfavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisfavsPageRoutingModule {}
