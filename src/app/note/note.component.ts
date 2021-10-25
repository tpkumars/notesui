import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { INote } from 'src/app/model/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
    console.log("In Note, ngOnInit(): ",this.router.url);
  }
}
