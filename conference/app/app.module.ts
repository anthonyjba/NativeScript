import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

//App
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

//Sessions
import { SessionsService } from "./services/sessions.service";
import { SessionsModule } from "./sessions/sessions.module";

@NgModule({    
    providers: [
        SessionsService
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        SessionsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
