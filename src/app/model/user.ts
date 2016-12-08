

export class User {

    id : number;

    firstName : string;

    lastName : string;

    country : string;

    birthYear : number;

    phone : string;

    skills : any = {};

    proficiency : number;

    image : string;

    constructor(firstName:string = null,lastName:string = null,id:number=NaN) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    copy() : User {
        let copy = new User(this.firstName,this.lastName,this.id);
        copy.country = this.country;
        copy.birthYear = this.birthYear;
        copy.phone = this.phone;
        copy.proficiency = this.proficiency;
        return copy;
    }



}