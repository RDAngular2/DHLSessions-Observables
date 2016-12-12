import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {User} from "../../model/user";
import {Observable} from "rxjs";

@Component({
    moduleId: module.id,
    selector: 'user-list-viewer',
    templateUrl: 'user-list-viewer.component.html',
})
export class UserListViewerComponent implements OnInit {

    users : User[] = [];

    selected : User = null;

    @Output()
    userChange : EventEmitter<User> = new EventEmitter<User>();

    constructor(private userService : UserService) {

    }

    refresh() {
        this.userService.getUsers().subscribe(
          result => this.users = result
        );
    }

    ngOnInit() {
        this.refresh();
    }

    handleClick(user:User) : void {
        if (user != this.selected) {
            this.selected = user;
        } else {
            this.selected = null;
        }
        this.userChange.next(this.selected);
    }

}