import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {ApplicationModule} from "./application.module";

platformBrowserDynamic().bootstrapModule(ApplicationModule)
    .then(success => console.log(`Application bootstrap succeeded`))
    .catch(error => console.log(error));

