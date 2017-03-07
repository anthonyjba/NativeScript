import { Injectable } from '@angular/core';

// app
import * as fakeDataServiceModule from './fake-data.service';
import { ISession } from '../shared/interfaces';
import { SessionModel } from '../sessions/shared/session.model';

@Injectable()
export class SessionsService {

    public sessionsLoaded = false;
    private _useHttpService : boolean = false;
    public _allSessions: Array<SessionModel> = [];

    private newSessions1 = new Array<ISession>(
            {
                id: '1',
                title: 'session 1',
                start: '2016-10-03T12:00:00Z',
                end: '2016-10-03T13:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 1 desc',
                descriptionShort: 'session 1 short desc',
                isBreak: false
            },
            {
                id: '2',
                title: 'session 2',
                start: '2016-10-03T13:00:00Z',
                end: '2016-10-03T14:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 2 desc',
                descriptionShort: 'session 2 short desc',
                isBreak: true
            },
            {
                id: '3',
                title: 'session 3',
                start: '2016-10-03T14:00:00Z',
                end: '2016-10-03T15:00:00Z',
                room: 'room2',
                roomInfo: {
                    roomId: 'room3',
                    name: 'myroom3',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 3 desc',
                descriptionShort: 'session 3 short desc',
                isBreak: false
            }
    );

    public loadSessions<T>(): Promise<T> {
        return new Promise((resolve, reject) => {
            if (this._useHttpService) {
                return this.loadSessionsViaHttp<T>();
            }
            else {
                this.loadSessionsViaFaker<Array<ISession>>()
                    .then((newSessions: Array<ISession>) => {
                        this._allSessions = newSessions.map(s => new SessionModel(s)); 
                        this.sessionsLoaded = true;
                        resolve(this._allSessions);       
                    });
            }
        });
        
    }

    private loadSessionsViaHttp<T>(): Promise<T> {
        //return new Promise<T>(() => {});
        return new Promise((resolve, reject) => {
                this._allSessions = this.newSessions1.map(s => new SessionModel(s));
                this.sessionsLoaded = true;
                resolve(this._allSessions);
            });
    }

    private loadSessionsViaFaker<T>(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let sessions = <any>fakeDataServiceModule.generateSessions(null, null);
            resolve(sessions)
        });
    }

    toggleFavorite(session: SessionModel) {
        session.toggleFavorite();
    }
}