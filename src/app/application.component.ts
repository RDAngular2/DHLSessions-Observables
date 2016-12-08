import {Component} from '@angular/core';
import {ToastrService} from "toastr-ng2";

@Component({
    moduleId: module.id,
    selector: 'application',
    templateUrl: 'application.component.html'
})
export class ApplicationComponent  {

   name : string = "Angular 2 Workshop";

   constructor(private toastr:ToastrService) {

   }

   performSearch(searchString:string) {
       this.toastr.info(`Searching for ${searchString}. Not implemented yet.`);
   }

}