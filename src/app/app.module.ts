import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolsucksComponent } from './lolsucks/lolsucks.component';
import { Servicio1Service } from './servicios/servicio1.service';

@NgModule({
  declarations: [
    AppComponent,
    LolsucksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Servicio1Service
  ],
  providers: [Servicio1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
