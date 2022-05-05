import { EMPTY, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages : Observable<string[]> = EMPTY;

constructor() { }

getMessages(): Observable<string[]>{
  return this.messages;
}

add(message: string){
  this.messages?.pipe(tap(messages =>{
    messages.push(message);
  }));
}

clear(){
  this.messages = EMPTY;
}
}
