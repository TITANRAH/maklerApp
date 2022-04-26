import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { GestorComponent } from './gestor/gestor.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [GestorComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule
  ]
})
export class PagesModule { }
