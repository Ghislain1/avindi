import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
// list of component which can be used outside of this module
const exportedComponents: any = [
  HeaderComponent,
  FooterComponent,
]

@NgModule({
  declarations: [
    exportedComponents,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    RegistryComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,// due to form in html
    ReactiveFormsModule, // This provides convenient methods for generating controls.
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    exportedComponents // to use app-header in app.component.html
  ]
})
export class CoreModule { }
