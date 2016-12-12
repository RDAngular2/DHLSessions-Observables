import {Component} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Message} from "../../model/message";
import {createMessageSource, createMessageSources} from "../../service/message/message.service";
import {ToastrService} from "toastr-ng2";

@Component({
    moduleId: module.id,
    selector: 'message-observable-viewer',
    templateUrl: 'message-observable-viewer.component.html'
})
export class MessageObservableViewerComponent {

    messageObservable : Observable<Message> = null;

    subscription : Subscription = null;

    message : Message = null;

    messages : Message[] = [];

    names : string[] = [];

    constructor(private toastr:ToastrService) {
        this.createObservable();
    }
    createObservable() : void {
        this.messageObservable = this.createMessageObservableByMergeMap();
        this.toastr.success("Message Observable created");
    }

    private createSimpleMessageObservable(): Observable<Message> {
        return createMessageSource("1",10,2000);
    }

    private createMessageObservableByMergingTwoMessageObservables(): Observable<Message> {
        return null;
    }

    private createMessageObservableByMergeAll(): Observable<Message> {
        return null;
    }

    private createMessageObservableByMergeMap(): Observable<Message> {
        return null;
    }

    private createMessageObservableBySwitchMap(): Observable<Message> {
        return null;
    }

    subscribeToObservable() : void {
       if (this.messageObservable == null) {
           this.toastr.error("No message observable created!");
           return;
       }
     //  this.unsubscribeFromObservable();


       this.subscription = this.messageObservable.subscribe(
           m => this.messages.unshift( m),
           err => console.log("Error: " + err),
           () => {
               this.toastr.success("Message observable completed")
          }
       )
    }



    unsubscribeFromObservable() : void {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }

    }


}