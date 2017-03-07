import { Component, OnInit } from '@angular/core';

import { ISession } from '../../shared/interfaces';
import { SessionModel } from '../../sessions/shared/session.model';
import { SessionsService } from '../../services/sessions.service'

@Component({
    moduleId: module.id,
    selector: "session-list",
    styleUrls: ["session-list.component.css"],
    templateUrl: "session-list.component.html"
})
export class SessionListComponent implements OnInit {
    //items: ISession[];    
    //favorite = false;
    private _selectedIndex: number = 0;

    constructor(private _sessionsService: SessionsService) { }

    ngOnInit() : void {
        this._sessionsService.loadSessions<Array<ISession>>()
                .then(data => { 
                    console.dump(data);
                } );        
    }

    public toggleFavorite(session: SessionModel) {
        this._sessionsService.toggleFavorite(session);
    }
}