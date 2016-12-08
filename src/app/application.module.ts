import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {TypeaheadModule} from "ng2-bootstrap";
import {ToastrModule} from "toastr-ng2";


import {ApplicationComponent} from './application.component';
import {ApplicationHeaderComponent} from "./component/application-header/application-header.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {UserService} from "./service/user/user.service";
import {UserData} from "./demo-data/user.data";
import {MessageViewerComponent} from "./component/message-viewer/message-viewer.component";
import {MessageObservableViewerComponent} from "./component/message-observable-viewer/message-observable-viewer.component";
import {UserListViewerComponent} from "./component/user-list-viewer/user-list-viewer.component";
import {UserViewerComponent} from "./component/user-viewer/user-viewer.component";
import {UserEditorComponent} from "./component/user-editor/user-editor.component";

@NgModule({
    declarations: [
        ApplicationComponent,
        ApplicationHeaderComponent,

        MessageViewerComponent,
        MessageObservableViewerComponent,

        UserListViewerComponent,
        UserViewerComponent,
        UserEditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ToastrModule,
        TypeaheadModule,
        InMemoryWebApiModule.forRoot(UserData,{delay:2000}),


    ],
    bootstrap: [ApplicationComponent],
    providers: [UserService],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationModule {

}