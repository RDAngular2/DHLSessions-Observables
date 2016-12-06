import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {TypeaheadModule} from "ng2-bootstrap";
import {ToastrModule} from "toastr-ng2";


import {ApplicationComponent} from './application.component';
import {ApplicationHeaderComponent} from "./component/application-header/application-header.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ContactService} from "./service/contact/contact.service";
import {ContactData} from "./demo-data/contact-data";

@NgModule({
    declarations: [
        ApplicationComponent,
        ApplicationHeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ToastrModule,
        TypeaheadModule,
        InMemoryWebApiModule.forRoot(ContactData,{delay:5000})

    ],
    bootstrap: [ApplicationComponent],
    providers: [ContactService],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationModule {

}