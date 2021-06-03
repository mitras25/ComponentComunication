import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { EventEmmiterComponent } from './event-emmiter/event-emmiter.component';
import { AuxiliarComponent } from './event-emmiter/auxiliar/auxiliar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    EventEmmiterComponent,
    AuxiliarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
