import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComedyPageRoutingModule } from './comedy-routing.module';

import { ComedyPage } from './comedy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComedyPageRoutingModule
  ],
  declarations: [ComedyPage]
})
export class ComedyPageModule {}
