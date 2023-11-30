import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main/main-layout/main-layout.component';
import { HomeComponent } from './views/main/home/home.component';
import { ProjectsComponent } from './views/main/projects/projects.component';
import { AboutComponent } from './views/main/about/about.component';
import { ContactComponent } from './views/main/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
