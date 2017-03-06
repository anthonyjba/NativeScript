import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SessionsComponent } from "./sessions/sessions.component";

const routes: Routes = [
    {
        path: 'sessions',
        component: SessionsComponent
    },
    { path: "", redirectTo: "/sessions", pathMatch: "full" },    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }