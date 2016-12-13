import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {UserComponent} from './user/user.component'
import {UsersListComponent} from "./users-list/users-list.component";
import {UsersService} from "./services/users.service"

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    UserComponent,
    UsersListComponent
  ],
  providers: [UsersService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
