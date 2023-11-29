import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeDetallePagePageRoutingModule } from './personaje-detalle-page-routing.module';

import { PersonajeDetallePagePage } from './personaje-detalle-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajeDetallePagePageRoutingModule
  ],
  declarations: [PersonajeDetallePagePage]
})
export class PersonajeDetallePagePageModule {}
