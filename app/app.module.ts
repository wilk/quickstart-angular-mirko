import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {UserComponent} from './user/user.component'
import {UsersListComponent} from "./users-list/users-list.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    UserComponent,
    UsersListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
