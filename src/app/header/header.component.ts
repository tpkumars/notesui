import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INote } from '../model/note';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle:string;
  @Output() searchNotesResult = new EventEmitter<INote[]>();
  constructor(private service:SharedService) {
    this.headerTitle = "Notes";
   }

  ngOnInit(): void {
    this.searchNote("note");
  }

  searchNote(val:string){
    console.log("val=", val)
    if(val!='')
    {
      this.service.searchNote(val).subscribe((res:INote[])=>{
        console.log("searchNote: ", res);
        this.searchNotesResult.emit(res);
      })
    }
  }
}
