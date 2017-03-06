import { Component, OnInit } from '@angular/core';

import { ISession } from '../../shared/interfaces';
import { SessionsService } from '../../services/sessions.service'

@Component({
    moduleId: module.id,
    selector: "session-list",
    styleUrls: ["session-list.component.css"],
    templateUrl: "session-list.component.html"
})
export class SessionListComponent implements OnInit {
    items: ISession[];    
    favorite = false;

    constructor(private _sessionsService : SessionsService) { }

    ngOnInit() : void {
        this.items = this._sessionsService.getItems();
        console.dump(this.items);
    }

    toggleFavorite() : void {
        this.favorite = !this.favorite;
    }
}