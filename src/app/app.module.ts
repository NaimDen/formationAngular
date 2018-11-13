import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListeCoursComponent} from './component/liste-Cours/listeCours.component';
import {CoursComponent} from './component/cours/cours.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCoursComponent,
    CoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
