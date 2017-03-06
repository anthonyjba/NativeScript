import { NativeScriptModule } from 'nativescript-angular/platform';
import { NgModule } from '@angular/core';

//App
//import { sessionsRouting } from './sessions.routing';
import { SessionsComponent } from './sessions.component';
import { SessionListComponent } from '../sessions/session-list/session-list.component';

@NgModule({
    imports: [
        NativeScriptModule
        //sessionsRouting
    ],
    declarations: [
        SessionsComponent,
        SessionListComponent
    ]
})
export class SessionsModule { }