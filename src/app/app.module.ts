import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattiListComponent } from './components/contatti-list/contatti-list.component';
import { ContattoUpsertComponent } from './components/contatto-upsert/contatto-upsert.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattiListComponent,
    ContattoUpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
