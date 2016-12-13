import {Injectable} from '@angular/core'
import {User} from "../interfaces";

@Injectable()
export class UsersService {
    private _users: User[]
    
    constructor() {
        this._users = [{
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
    }
    
    get users(): User[] {
        return this._users
    }

    getUsers(): Promise<User[]> {
        return new Promise<User[]>(resolve => {
            setTimeout(() => {
                resolve(this._users)
            }, 3000)
        })
    }
}