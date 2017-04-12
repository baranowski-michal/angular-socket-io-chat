import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() SendingMessageToAppComponent = new EventEmitter();

  messages = [
    {
      author: 'Bombel',
      body: 'Pierwsza wiadomosc!!!'
    },
    {
      author: 'Stanislaw',
      body: 'Druga wiadomosc!!!'
    }
  ];

  onReceivedMessage(msg) {
    this.messages.push(
      {
        author: 'Bombel',
        body: msg
      }
    );
    this.SendingMessageToAppComponent.emit(msg);
  }

  ngOnInit() {
  }

}
