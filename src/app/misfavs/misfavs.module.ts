import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisfavsPageRoutingModule } from './misfavs-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MisfavsPage } from './misfavs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisfavsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisfavsPage]
})
export class MisfavsPageModule {}
