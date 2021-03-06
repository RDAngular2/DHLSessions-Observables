import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
    moduleId: module.id,
    selector: 'application-header',
    templateUrl: 'application-header.html'
})
export class ApplicationHeaderComponent implements OnInit {

    @Input()
    applicationName : string = "!!! dummy application name !!!";

    constructor() { }

    search(searchString:string) {
        console.log("Search button clicked");
    }

    ngOnInit() {
        console.log("Application Header initialized.");
    }

    public searchValueChanged(searchString:string) {
        console.log(searchString);
    }

}