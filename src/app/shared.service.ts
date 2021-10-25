import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Observable, observable } from 'rxjs';
import { INote } from './model/note';
import { environment, requestHeader } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor(private http:HttpClient) { }

  getAllNotes():Observable<INote[]>{
    return this.http.get<INote[]>(environment.noteWebApiUrl, requestHeader).pipe();
  }

  getNote(val:any):Observable<any>{
    return this.http.get<any>(environment.noteWebApiUrl,requestHeader +val).pipe();
  }

  addNote(val:any){
    console.log("Val:" +val);
    return this.http.post(environment.noteWebApiUrl, val, requestHeader).pipe();
  }

  updateNote(val:any){
    return this.http.put(environment.noteWebApiUrl,val, requestHeader).pipe();
  }

  deleteNote(val:any){
    return this.http.delete(environment.noteWebApiUrl +'/'+val, requestHeader).pipe();
  }

  searchNote(val:any):Observable<INote[]>{
    return this.http.get<INote[]>(environment.noteWebApiUrl +'/term?term='+val, requestHeader).pipe();
  }

}
