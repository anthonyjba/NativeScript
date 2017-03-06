import { Injectable } from '@angular/core';

import { ISession } from '../shared/interfaces';

@Injectable()
export class SessionsService {

    private sessionArray = new Array<ISession>(
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
                    roomId: 'room1',
                    name: 'myroom1',
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
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 3 desc',
                descriptionShort: 'session 3 short desc',
                isBreak: false
            }
    );

    getItems(): ISession[] {
        return this.sessionArray;
    }

    getItem(id: number): ISession {
        return this.sessionArray.filter(item => parseInt(item.id) === id)[0];
    }

}