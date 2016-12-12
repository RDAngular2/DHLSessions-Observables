import {Component} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Message} from "../../model/message";
import {createMessageSource, createMessageSources} from "../../service/message/message.service";
import {ToastrService} from "toastr-ng2";

@Component({
    moduleId: module.id,
    selector: 'map-example-viewer',
    templateUrl: 'map-example-viewer.component.html'
})
export class MapExampleViewerComponent {

    namesObservable : Observable<string> = null;

    subscription : Subscription = null;

    names : string[] = [];

    constructor(private toastr:ToastrService) {
        this.createObservable();
    }

    createObservable() : void {
        let messageObservable : Observable<Message> = createMessageSource("1",20,1000);

        this.namesObservable = messageObservable.map(m => m.user.firstName + " " +  m.user.lastName);

        this.toastr.success("Observable created");
    }

    subscribeToObservable() : void {

     //  this.unsubscribeFromObservable();


       this.subscription = this.namesObservable.subscribe({
               next: name => this.names.unshift(name),
               complete: () => { this.toastr.success("Name observable completed") }
       })
    }



    unsubscribeFromObservable() : void {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }

    }


}