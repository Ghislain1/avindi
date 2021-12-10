import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }

];
// list of component which can be used outside of this module
const components: any = [HeaderComponent, FooterComponent, HomeComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    components
  ]
})
export class CoreModule { }
