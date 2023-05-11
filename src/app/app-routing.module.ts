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
  },  {
    path: 'comedy',
    loadChildren: () => import('./comedy/comedy.module').then( m => m.ComedyPageModule)
  },
  {
    path: 'romance',
    loadChildren: () => import('./romance/romance.module').then( m => m.RomancePageModule)
  },
  {
    path: 'horror',
    loadChildren: () => import('./horror/horror.module').then( m => m.HorrorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
