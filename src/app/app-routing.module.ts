import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Read: https://angular.io/guide/router-tutorial-toh#milestone-6-asynchronous-routing
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
