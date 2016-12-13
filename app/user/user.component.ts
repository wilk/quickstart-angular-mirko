import {Component, Input} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'my-user',
    templateUrl: './user.html',
    styleUrls: ['./user.css']
})
export class UserComponent {
    @Input() public name: string
    @Input() public age: number
    @Input('valid') public isValid: boolean

    constructor() {
        console.log(`${this.name} - ${this.age}`)
    }

    onClick(name: string): void {
        alert(name)
        this.isValid = false
    }
}