import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPersonajesPagePageRoutingModule } from './mis-personajes-page-routing.module';

import { MisPersonajesPagePage } from './mis-personajes-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPersonajesPagePageRoutingModule
  ],
  declarations: [MisPersonajesPagePage]
})
export class MisPersonajesPagePageModule {}
