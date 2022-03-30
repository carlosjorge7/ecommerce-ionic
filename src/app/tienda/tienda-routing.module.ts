import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaPage } from './tienda.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaPageRoutingModule {}
