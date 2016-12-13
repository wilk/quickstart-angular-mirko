import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<my-user-list [pippo]="myTuple" (init)="onListInit($event)"></my-user-list>

`
})
export class AppComponent { 
  name = 'Angular';
  myTuple: [number, boolean, string] = [10, true, 'wat']

  onListInit(sentence: string): void {
    console.log(sentence)
  }
}
