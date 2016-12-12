import {Component, Input, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../model/user";
import {UserData} from "../../demo-data/user.data";

@Component({
    moduleId: module.id,
    selector: 'user-editor',
    templateUrl: 'user-editor.component.html'
})
export class UserEditorComponent implements OnInit {

    @ViewChild(NgForm)
    userForm : NgForm;

    @Input()
    user : User = new User();

    constructor() { }

    get  countries() : string[] {
        return UserData.countries;
    }

    ngOnInit(): void {

        this.userForm.valueChanges.subscribe(
            value => console.log(JSON.stringify(value))
        );

        this.userForm.statusChanges.subscribe(
            value => {
                console.log(value);
            }
        )


    }


}