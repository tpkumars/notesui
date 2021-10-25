import { Component, OnInit, ViewChild,NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-shownote',
  templateUrl: './shownote.component.html',
  styleUrls: ['./shownote.component.css']
})
export class ShownoteComponent implements OnInit {

  notesList: any=[];
  note: any;
  showModal: boolean=false;
  modalTitle: string="";
  addEditButtonText:string="";
  activateDeleteButton: boolean = false;

  id: number=0;
  noteTitle: string="";
  noteContent: string="";

  @ViewChild('closebutton') closebutton: any;
  message:string ="";

  constructor(private service:SharedService) {

   }

  ngOnInit(): void {
    if(this.note != null)
    {
      this.id = this.note.Id;
      this.noteTitle = this.note.Title;
      this.noteContent = this.note.NoteContent;
    }
    this.refreshNotesList();
  }

  refreshNotesList(){
    this.service.getAllNotes().subscribe(res => {
      console.log("Getall: Data: " + JSON.stringify(res));
      this.notesList = res
    });
  }

  addNote(){
    this.showModal = true;
    this.addEditButtonText="Save";
    this.activateDeleteButton = false;
    this.modalTitle = "Add Note";
    this.note ={
      Id: 0,
      Title: "",
      NoteContent: ""
    }
  }

  editNote(note:any){
    this.addEditButtonText="Update";
    this.activateDeleteButton =true;
    this.modalTitle = "Edit Note";
    console.log(this.note);
    this.note ={Id: note.Id, Title: note.Title, NoteContent:note.NoteContent};
    if(note != null)
    {
      this.id = note.Id;
      this.noteTitle = note.Title;
      this.noteContent = note.NoteContent;
    }
    
  }

  saveNote(){
    var val = {Id:this.id, Title:this.noteTitle, NoteContent:this.noteContent,UpdatedDate: new Date()};
    console.log("date: "+new Date());
    if(this.id>0)
    {
      var params ={id:this.id,note:val};
      console.log("params: "+JSON.stringify(params));
      this.service.updateNote(val).subscribe((res:any) =>{
        console.log(res);
        if(res!=null)
        this.message = "Your changes updated successfully";
        
      });
    }
    else{
      this.service.addNote(val).toPromise().then((res:any) =>{
        console.log(res);
        if(res!=null)
        this.message = "Your note Added Successfully";
      });
    }
  }

  storeNote(noteForm : NgForm){
    console.log("form Values:"+noteForm.value);

  }

  deleteNote(id:number){
    if(confirm("Are you Sure?")){
      this.service.deleteNote(id).toPromise().then((res:any) =>{
        console.log(res);
        this.clear();
        this.refreshNotesList();

      })
    }
  }

  clear(){
    this.id=0;
    this.noteTitle="";
    this.noteContent="";
  }

  clickClose(){
    this.message = "";
    this.addEditButtonText="Save";
    this.activateDeleteButton =false;
    this.modalTitle ="";
    this.refreshNotesList();
  }

}
