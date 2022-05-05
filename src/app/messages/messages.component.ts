import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages : string[] = [];
  constructor(public messageService : MessagesService) { }

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(messages => messages = this.messages);
  }

}
