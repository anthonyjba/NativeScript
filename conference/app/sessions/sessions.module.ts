import { NativeScriptModule } from 'nativescript-angular/platform';
import { NgModule } from '@angular/core';

//App
//import { sessionsRouting } from './sessions.routing';
import { SessionsComponent } from './sessions.component';
import { SessionListComponent } from '../sessions/session-list/session-list.component';
import { SessionDetailsComponent } from '../sessions/session-details/session-details.component';

@NgModule({
    imports: [
        NativeScriptModule
        //sessionsRouting
    ],
    declarations: [
        SessionsComponent,
        SessionListComponent,
        SessionDetailsComponent
    ]
})
export class SessionsModule { }