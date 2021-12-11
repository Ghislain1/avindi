import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TontinardListComponent } from './components/tontinard-list/tontinard-list.component';
import { TontinardDetailComponent } from './components/tontinard-detail/tontinard-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ManageTontinardsComponent } from './components/manage-tontinards/manage-tontinards.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
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
