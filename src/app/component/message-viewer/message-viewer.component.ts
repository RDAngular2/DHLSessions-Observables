import {Component, Input} from '@angular/core';
import {Message} from "../../model/message";

@Component({
    moduleId: module.id,
    selector: 'message-viewer',
    templateUrl: 'message-viewer.component.html'
})
export class MessageViewerComponent {

    @Input()
    message : Message;

    constructor() { }

}