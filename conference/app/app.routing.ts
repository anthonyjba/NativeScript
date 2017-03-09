import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SessionsComponent } from "./sessions/sessions.component";
import { SessionDetailsComponent } from "./sessions/session-details/session-details.component";

const routes: Routes = [
    {
        path: 'sessions',
        component: SessionsComponent
    },
    {
        path: 'session-details',
        component: SessionDetailsComponent
    },
    { path: "", redirectTo: "/session-details", pathMatch: "full" },    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }