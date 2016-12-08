import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

@Component({
    moduleId: module.id,
    selector: 'user-viewer',
    templateUrl: 'user-viewer.component.html',
    styleUrls: ['user-viewer.component.css']
})
export class UserViewerComponent {

    @Input()
    user : User;

    constructor() {
        this.user = new User("Donald","Trump",0);
        this.user.birthYear = 1946;
        this.user.country = "United States";
        this.user.phone = "(+1) 212-666-00-666"
        this.user.proficiency = 0.1;
    }



}