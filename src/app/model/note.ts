import { DatePipe } from "@angular/common";

export interface INote {
    id:number;
    noteId:string;
    title:string;
    noteContent: string;
    createdDate:Date;
}
