import { not } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INote } from 'src/app/model/note';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  @Input() objNote:INote = <INote>{};
  id: number = 0;
  title: string = "";
  content: string = "";
  message: string = "";

  @Output() objNoteDataOut = new EventEmitter<any>();
  public note!: any;
  constructor(private service:SharedService, private router:Router) { 
    console.log("In EditNote: constructor()");
  }

  ngOnInit(): void {
    console.log("In EditNote: ngOnInit(): ",this.router.url);
    //this.reloadComponent();
  }

  updateNote(formValue: NgForm,note:INote){
    console.log("formvalues: " ,formValue.value)
    console.log("formvalues: title:"+ formValue.value.title +", Notecontent: " +formValue.value.content);
    console.log("objNote objec: ", note);
    note=<INote>{
      id: note.id,
      noteId: note.noteId,
      title: formValue.value.title,
      noteContent: formValue.value.content,
      createdDate: note.createdDate
    }
    console.log("note objec: ", note);
    this.service.updateNote(note).subscribe(res =>{
      console.log(res);
      if(res!=null)
        this.message="Your note has been updated sucessfully."
      else
        this.message = "Failed to update your changes."
    })
  }

  deleteNote(note:INote){
    if(confirm("Are you Sure?")){
      this.service.deleteNote(note.id).toPromise().then((res:any) =>{
        console.log(res);

      })
    }
  }

  closeForm(){
    //this.gotoNotesList();
    this.reloadComponent();
  }

  gotoNotesList()
  {
    this.router.navigateByUrl('.', { skipLocationChange: true });                   
    this.router.navigateByUrl('/notes');
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
