import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { INote } from 'src/app/model/note';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  id: number = 0;
  title: string = "";
  content: string = "";
  message: string = "";
  @Input() noteDataIn : any;
  @Output() noteDataOut = new EventEmitter<any>();

  constructor(private service:SharedService, private router:Router) {
    if(this.noteDataIn!=null)
    {
      this.id = this.noteDataIn.Id;
      this.title = this.noteDataIn.Title;
      this.content = this.noteDataIn.NoteContent;
    }
   }

  ngOnInit(): void {
    //this.noteDataOut.emit({Id:this.id,Title:this.title,NoteContent: this.content, UpdatedDate: new Date()});
  }
 
  fillForm(formValue: NgForm){
    let noteInfo ={
      id: this.noteDataIn.Id,
      title: this.noteDataIn.Title,
      content: this.noteDataIn.NoteContent
    }

    formValue.setValue(noteInfo);
  }

  saveNote(formValue: NgForm){
    console.log("In SaveNote method: formValues: " +JSON.stringify(formValue.value));
    console.log("In SaveNote method: title: " +formValue.value.title);
    console.log("In SaveNote method: id: " +formValue.value.id);
    var val ={Title: formValue.value.title, NoteContent: formValue.value.content}
    this.service.addNote(val).subscribe(res =>{
      console.log(res);
      if(res!=null)
        this.message="Your note has been added sucessfully."
      else
        this.message = "Failed to store your note."
    })
  }

  resetForm(formValue: NgForm){
    formValue.reset();
    this.message="";
  }

  closeForm(formValue: NgForm){
    this.reloadComponent();
    this.resetForm(formValue);

  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
