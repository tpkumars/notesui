import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { NoteComponent } from './note.component';
import { ShownoteComponent } from './shownote/shownote.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';
import { FormNoteComponent } from './form-note/form-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';


@NgModule({
  declarations: [
    NoteComponent,
    ShownoteComponent,
    AddNoteComponent,
    EditNoteComponent,
    ShowNoteComponent,
    FormNoteComponent,
    DeleteNoteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],  
  exports:[NoteComponent]
})
export class NoteModule { }
