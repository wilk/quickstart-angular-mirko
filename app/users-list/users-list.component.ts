import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core'
import {User} from "../interfaces";
import {UsersService} from "../services/users.service";

@Component({
    moduleId: module.id,
    selector: 'my-user-list',
    templateUrl: './users-list.html'
})
export class UsersListComponent implements OnInit {
    @Input() public pippo: [number, boolean, string]
    @Output() public init: EventEmitter<string> = new EventEmitter<string>()
    
    public users: User[]
    
    constructor(private usersService: UsersService) {
        console.log(this.pippo)
        
        usersService.getUsers().then(users => this.users = users)
    }
    
    ngOnInit(): void {
        console.log(this.pippo)

        this.init.emit('users list initialised')
    }
}