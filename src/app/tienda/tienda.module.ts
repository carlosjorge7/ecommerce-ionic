import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TiendaPage } from './tienda.page';
//import { PipesModule } from '../pipes/pipes.module';
import { TiendaPageRoutingModule } from './tienda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TiendaPageRoutingModule,
    //PipesModule
  ],
  declarations: [TiendaPage]
})
export class TiendaPageModule {}
