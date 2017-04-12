import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  messageBody = '';

  @Output() SendingMessage = new EventEmitter();

  sendMessage() {
    this.SendingMessage.emit(this.messageBody);
  }

  ngOnInit() {
  }

}
