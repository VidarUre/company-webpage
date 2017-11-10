import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutEmployeeComponent } from './about-employee/about-employee.component';
import { ContactEmployeeComponent } from './contact-employee/contact-employee.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProjectBoxComponent } from './project-box/project-box.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    AboutEmployeeComponent,
    ContactEmployeeComponent,
    ContactFormComponent,
    ProjectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
