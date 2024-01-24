import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisfavsPageRoutingModule } from './misfavs-routing.module';

import { MisfavsPage } from './misfavs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisfavsPageRoutingModule
  ],
  declarations: [MisfavsPage]
})
export class MisfavsPageModule {}
