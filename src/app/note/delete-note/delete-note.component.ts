import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INote } from 'src/app/model/note';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {

  @Input() note: INote=<INote>{};

  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteNote(id:number){
    console.log("In DeleteNote: id",id);
    this.service.deleteNote(id).toPromise().then((res:any) =>{
        console.log(res);

      })
    this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
