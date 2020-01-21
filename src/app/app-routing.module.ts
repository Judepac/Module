import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'identification', loadChildren: () => import('./pages/identification/identification.module').then(m => m.IdentificationModule) },
  { path: 'management', loadChildren: () => import('./pages/management/management.module').then(m => m.ManagementModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
