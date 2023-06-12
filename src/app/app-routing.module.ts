import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiceGuardGuard } from './mice-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'dogs', loadChildren: () => import('./dogs/dogs.module').then(m => m.DogsModule) },
  { path: 'cats',canActivate: [MiceGuardGuard], loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule) },
  { path: 'mice', loadChildren: () => import('./mice/mice.module').then(m => m.MiceModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },  
  
  {path:'**',loadChildren: () => import('./page-not-found-page/page-not-found-page.module').then(m => m.PageNotFoundPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
