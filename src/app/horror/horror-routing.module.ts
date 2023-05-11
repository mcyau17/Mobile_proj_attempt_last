import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorrorPage } from './horror.page';

const routes: Routes = [
  {
    path: '',
    component: HorrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorrorPageRoutingModule {}
