import { ISession, IRoomInfo, ISpeaker } from '../shared/interfaces';

let NUM_SPEAKERS = 40;
let NUM_ROOM_INFOS = 10;
let SESSION_LENGTH = 3; //60;

export function generateSpeakers() : Array<ISpeaker> {
    var speakerList: Array<ISpeaker> = [];

    return speakerList;
}

export function generateRoomInfos() : Array<IRoomInfo> {
    var roomInfoList: Array<IRoomInfo> = [];

    return roomInfoList;
}

export function generateSessions(speakers: Array<ISpeaker>, roomInfos: Array<IRoomInfo>) : Array<ISession> {
    var sessionList: Array<ISession> = [];
    var idSeed = 1000;

    for (var i = 0; i <= NUM_SPEAKERS; i++) {
            let s: ISession = {
                id: (idSeed++).toString(),
                title: "",
                isBreak: true,
                room: '',
                roomInfo: null,
                speakers: [],
                description: '',
                descriptionShort: '',
                start: '',
                end: '',                
                //calendarEventId: ''
            };
            sessionList.push(s);
    }

    return sessionList;
}