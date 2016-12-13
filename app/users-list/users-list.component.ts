import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'my-user-list',
    templateUrl: './users-list.html'
})
export class UsersListComponent implements OnInit {
    @Input() public pippo: [number, boolean, string]
    @Output() public init: EventEmitter<string> = new EventEmitter<string>()
    
    public users = [{
        name: 'dude',
        age: 42,
        isValid: true
    }, {
        name: 'gude',
        age: 32,
        isValid: true
    }, {
        name: 'bude',
        age: 22,
        isValid: false
    }, {
        name: 'tude',
        age: 62,
        isValid: true
    }, {
        name: 'rude',
        age: 82,
        isValid: false
    }]
    
    constructor() {
        console.log(this.pippo)
    }
    
    ngOnInit(): void {
        console.log(this.pippo)

        this.init.emit('users list initialised')
    }
}