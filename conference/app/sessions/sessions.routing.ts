import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SessionsComponent } from "./sessions.component";

const sessionsRoutes: Routes = [
    {
        path: "Sessions/",
        component: SessionsComponent
    }
];

export const sessionsRouting: ModuleWithProviders = RouterModule.forChild(sessionsRoutes);