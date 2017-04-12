import {Component, Input, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  socket;
  users = [];


  @Input()
  msg = '';


  ngOnInit() {
    this.socket = io('127.0.0.1:3000');
    this.socket.emit('onUserConnection', {name: 'Bombel'});

    this.socket.on('users', (data) => {
      console.log(data);
      this.users = data;
    });
  }

}
