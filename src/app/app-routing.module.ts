import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listado-page',
    loadChildren: () => import('./listado-page/listado-page.module').then( m => m.ListadoPagePageModule)
  },
  {
    path: 'mis-personajes-page',
    loadChildren: () => import('./mis-personajes-page/mis-personajes-page.module').then( m => m.MisPersonajesPagePageModule)
  },
  {
    path: 'personaje-detalle-page',
    loadChildren: () => import('./personaje-detalle-page/personaje-detalle-page.module').then( m => m.PersonajeDetallePagePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
