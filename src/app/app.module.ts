import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layouts/main/main-layout/main-layout.component';
import { MainHeaderComponent } from './shared/layouts/main/main-header/main-header.component';
import { MainFooterComponent } from './shared/layouts/main/main-footer/main-footer.component';
import { HomeComponent } from './views/main/home/home.component';
import { ProjectsComponent } from './views/main/projects/projects.component';
import { AboutComponent } from './views/main/about/about.component';
import { ContactComponent } from './views/main/contact/contact.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
