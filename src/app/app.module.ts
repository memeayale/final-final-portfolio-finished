import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CanvasclockComponent } from './canvasclock/canvasclock.component';


@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ResumeComponent,
    HomeComponent,
    ContactComponent,
    CanvasclockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
