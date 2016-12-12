import {Component, OnInit} from '@angular/core';
import {Observable, Observer, Subject, Subscription} from "rxjs";
import {ArrayObservable} from "rxjs/observable/ArrayObservable";

@Component({
    moduleId: module.id,
    selector: 'observable-tester',
    templateUrl: 'observable-tester.component.html'
})
export class ObservableTesterComponent {

    constructor() { }

    startCode() : void {
        this.testTakeWhile();
    }

    testCode1() : void {
       delayedOf<string>(1000,"a","b","c","d","e","f","g").subscribe(
         new Logger()
       )
    }

    testError() : void {
        delayedOf<string>(1000,"a","b","c","d","e","f","g").map(x => {
            if (x === "e") {
                throw new Error("I do not like the letter e");
            }
            return x.toUpperCase();
        }).subscribe(new Logger());

    }

    testTakeWhile() : void {
        delayedOf<string>(1000,"a","b","c","d","e","f","g").takeWhile(x => x !== "e").subscribe(new Logger());

    }

    testScan() : void {
        delayedOf<string>(1000,"a","b","c","d","e","f","g").scan((acc,value)=>acc+value).subscribe(
            new Logger()
        )
    }

    unicastTest() : void {

        let obs = Observable.interval(1000).do(new Logger("interceptor"));

        let logger1 = new Logger("1");
        let logger2 = new Logger("2");

        let sub1 : Subscription;
        let sub2 : Subscription;

        Observable.timer(3000).subscribe(x=>sub1 = obs.subscribe(logger1));
        Observable.timer(7000).subscribe(x=>sub2 = obs.subscribe(logger2));

        Observable.timer(10000).subscribe(x=>sub1.unsubscribe());
        Observable.timer(25000).subscribe(x=>sub2.unsubscribe());



    }

    multicast() : void {

        let obs = Observable.interval(1000).do(new Logger("interceptor"));

        let logger1 = new Logger("1");
        let logger2 = new Logger("2");

        let mc = obs.multicast(new Subject());

        /**
         * Nothing happens until you start mc, by calling mc.connect(). This returns a subscription that you can use to stop the source.
         */

        let sub1 : Subscription;
        let sub2 : Subscription;

        Observable.timer(3000).subscribe(x=>sub1 = mc.subscribe(logger1));
        Observable.timer(7000).subscribe(x=>sub2 = mc.subscribe(logger2));

        Observable.timer(10000).subscribe(x=>sub1.unsubscribe());
        Observable.timer(25000).subscribe(x=>sub2.unsubscribe());


    }

    multicastWithRefCount() : void {

        let obs = Observable.interval(1000).do(new Logger("interceptor"));

        let logger1 = new Logger("1");
        let logger2 = new Logger("2");

        let mc = obs.multicast(new Subject()).refCount();

        /**
         * This will start when the first one subscribes.
         * It will stop when the last one unsubscribes.
         */

        let sub1 : Subscription;
        let sub2 : Subscription;

        Observable.timer(3000).subscribe(x=>sub1 = mc.subscribe(logger1));
        Observable.timer(7000).subscribe(x=>sub2 = mc.subscribe(logger2));

        Observable.timer(10000).subscribe(x=>sub1.unsubscribe());
        Observable.timer(25000).subscribe(x=>sub2.unsubscribe());

    }

}

function delayedArray<T>(delay:number,values :Array<T>) {
    return Observable.zip(Observable.interval(delay), ArrayObservable.create(values), (t,v)=>v);
}

function delayedOf<T>(delay:number,...values :Array<T>) {
    return delayedArray<T>(delay,values);
}

class Logger implements  Observer<any> {

    constructor(private context : string = "") {

    }

    next(value:any) {
        console.log(`${this.context}: ${JSON.stringify(value)}`);
    }

    error(err:any) {
        console.log(`Error in Observable ${this.context}:`)
        console.log(err);
    }

    complete() {
        console.log(`Observable ${this.context} completed`);
    }

}

