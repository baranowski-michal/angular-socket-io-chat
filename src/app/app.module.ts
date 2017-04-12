import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { MessagesComponent } from './messages/messages.component';
import { SenderComponent } from './messages/sender/sender.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    MessagesComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
