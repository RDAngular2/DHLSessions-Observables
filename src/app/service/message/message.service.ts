import {Observable} from "rxjs";
import {UserData} from "../../demo-data/user.data";
import {User} from "../../model/user";
import {quotes} from "../../demo-data/quote.data";
import {Quote} from "../../model/quote";
import {Message} from "../../model/message";



export function createMessageSource(source:string, numberOfMessages:number=10, frequency:number=5000) : Observable<Message> {

    let users = UserData.createUsers(10);

    let messages = Observable.interval(frequency)
        .take(numberOfMessages)
        .map(id => {
            let user : User =  users[Math.floor(Math.random() * 9)];
            let quote : Quote = quotes[Math.floor(Math.random() * quotes.length)];
            let message : Message = new Message();
            message.source = source;
            message.sourceFrequency = frequency;
            message.sourceNumberOfMessages = numberOfMessages;
            message.id = id+1;
            message.user = user;
            message.text = quote.text;
            console.log(`Message ${message.id} created on source ${source}`);
            return message;
        });

    return messages;
}

export function createMessageSources(numberOfMessageSources:number=10, messageSourceFrequency:number=5000) : Observable<Observable<Message>> {

    let messageSources = Observable.interval(messageSourceFrequency)
        .take(numberOfMessageSources)
        .map(id => {
            let numberOfMessages : number =  Math.floor(Math.random() * 20) + 5;
            let frequency : number = (Math.floor(Math.random() * 5) + 1)*1000;
            return createMessageSource(`Message Source ${id+1}`,numberOfMessages,frequency)
        });

    return messageSources;

}