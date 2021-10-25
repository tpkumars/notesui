import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INote } from 'src/app/model/note';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.css']
})
export class ShowNoteComponent implements OnInit {
  notesList: INote[] =[];
  objNote:INote = <INote>{};
  noteid: number=0;

  constructor(private service:SharedService, private router:Router) { 
    console.log("In ShowNote: constructor()");
  }

  ngOnInit(): void {
    console.log("In ShowNote: ngOnInit() :", this.router.url);
    this.refreshNotesList();
  }

  refreshNotesList(){
    this.service.getAllNotes().subscribe(res => {
      this.notesList = res
      console.log("this.notesList:" ,this.notesList);
    });
  }

  editNote(note:INote){
    if(note != null)
    {
      this.objNote =note;
      console.log("In ShowNote: setting note to objNote", this.objNote);
    }
  }

  deleteNote(note:INote){
    if(note != null)
    {
      this.objNote =note;
      console.log("In ShowNote: setting note to noteid", this.noteid);
    }
  }
}
