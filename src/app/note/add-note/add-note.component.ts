import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INote } from 'src/app/model/note';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  constructor(private service:SharedService, private router:Router) {
    console.log("In AddNote: constructor()");
   }

  ngOnInit(): void {
    console.log("In AddNote: ngOnInit(): ",this.router.url);
    let noteInfo = {
      id: 0,
      title:'',
      content:''
    }

    console.log("current url: ", this.router.url)
  }

}
