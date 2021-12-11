import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TontinardDetailComponent } from './components/tontinard-detail/tontinard-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ManageTontinardsComponent } from './components/manage-tontinards/manage-tontinards.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../shared/auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // The admin feature is now protected by the guard
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard], // Children are now protected by the guard
        children: [
          { path: 'tontinards', component: ManageTontinardsComponent },
          { path: 'tontinards/:id', component: TontinardDetailComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];



@NgModule({
  declarations: [
    TontinardDetailComponent,
    AdminComponent,
    ManageTontinardsComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
