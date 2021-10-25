import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCompiler } from '@angular/compiler';
import { NoteComponent } from './note/note.component';
import { ShowNoteComponent } from './note/show-note/show-note.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: NoteComponent},
  {path:'note', component:NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
