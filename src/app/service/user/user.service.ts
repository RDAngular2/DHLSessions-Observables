import {Injectable} from '@angular/core';
import {User} from "../../model/user";
import {UserData} from "../../demo-data/user.data";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    constructor(private http:Http) { }

    getUsers() : Observable<User[]> {
        return this.http.get(`api/users`).map(
            res => res.json().data
        );
    }

    saveUser(user:User) : void {
        this.http.post(`api/users/${user.id}`,user);
    }

    getUser(id:number) : Observable<User> {
        return this.http.get(`api/users/${id}`).map(
            res => res.json().data
        );
    }

}