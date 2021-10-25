import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BodyComponent } from './body/body.component';


import { EventEmitterService } from './event-emitter.service';
import { NoteModule } from './note/note.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoteModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
