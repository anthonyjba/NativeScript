import { Component, OnInit } from '@angular/core';

//app
import * as fakeDataServiceModule from '../../services/fake-data.service'; 
import { SessionModel } from '../shared/session.model'

@Component({
    moduleId: module.id,
    selector: 'session-details',
    templateUrl: 'session-details.component.html',    
    styleUrls: ['session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

    public session: SessionModel;

    ngOnInit() {
        this.session = loadFirstSessionViaFaker();
        console.log("Session Detail: ")
        console.dump(this.session);
    }
}

export function loadFirstSessionViaFaker(){
    let speakers = fakeDataServiceModule.generateSpeakers();
    let roomInfos = fakeDataServiceModule.generateRoomInfos();
    let sessions = <any>fakeDataServiceModule.generateSessions(speakers, roomInfos);
    var nonBreaksessions = sessions.filter(s => {
        return !s.isBreak && s.speakers.length > 0;
    });
    return nonBreaksessions[0];
}