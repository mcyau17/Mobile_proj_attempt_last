import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorrorPageRoutingModule } from './horror-routing.module';

import { HorrorPage } from './horror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorrorPageRoutingModule
  ],
  declarations: [HorrorPage]
})
export class HorrorPageModule {}
