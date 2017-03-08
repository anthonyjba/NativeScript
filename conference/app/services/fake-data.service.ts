import { ISession, IRoomInfo, ISpeaker, IConferenceDay, IConfTimeSlot } from '../shared/interfaces';
import { conferenceDays } from '../shared/static-data';

import faker = require('faker');

let NUM_SPEAKERS = 40;
let NUM_ROOM_INFOS = 10;
let SESSION_LENGTH = 60;

export function generateSpeakers() : Array<ISpeaker> {
    var speakerList: Array<ISpeaker> = [];
    for (var i = 0; i <= NUM_SPEAKERS; i++) {
        var genderBool = faker.random.boolean();
        var genderInt = parseInt(genderBool + '');
        var firstName = faker.name.firstName(genderInt);
        var lastName = faker.name.lastName(genderInt);
        //var picture = genderBool ? avatarsMen[faker.random.number(avatarsMen.length - 1)] : avatarsWomen[faker.random.number(avatarsWomen.length - 1)];

        let s: ISpeaker = {
            id: faker.random.uuid(),
            name: firstName + ' ' + lastName,
            title: faker.name.jobTitle(),
            company: faker.company.companyName(),
            picture: '', //picture
            twitterName: '@' + faker.internet.userName(firstName, lastName)
        }
        speakerList.push(s);
    }
    return speakerList;
}

export function generateRoomInfos() : Array<IRoomInfo> {
    var roomInfoList: Array<IRoomInfo> = [];

    for (var i = 0; i <= NUM_ROOM_INFOS; i++) {
        let r : IRoomInfo = {
            roomId: faker.random.uuid(),
            name: faker.address.streetName() + ' ' + faker.random.number(10),
            url: faker.internet.domainName(),
            theme: faker.lorem.words(1) 
        }
        roomInfoList.push(r);
    }
    return roomInfoList;
}

export function generateSessions(speakers: Array<ISpeaker>, roomInfos: Array<IRoomInfo>) : Array<ISession> {
    var sessionList: Array<ISession> = [];
    var idSeed = 1000;

    for (var confDay of conferenceDays) {
        var timeSlots = generateTimeSlots(confDay);
        for (var confTimeSlot of timeSlots){
            if (confTimeSlot.isBreak) {
                //break session
                let s: ISession = {
                    id: (idSeed++).toString(),
                    title: toTitleCase(confTimeSlot.title),
                    isBreak: true,
                    start: confTimeSlot.start.toString(),
                    end: confTimeSlot.end.toString(),
                    room: '',
                    roomInfo: null,
                    speakers: [],
                    description: '',
                    descriptionShort: '',
                    //calendarEventId: ''
                };
                sessionList.push(s);
            }
            else {
                //speaker session
                var subSpeakers = getRandomArrayElements(speakers, faker.random.number({ min: 1, max: 3 }));
                var roomInfo = roomInfos[faker.random.number(roomInfos.length - 1)];               

                let s: ISession = {
                    id: (idSeed++).toString(),
                    title: toTitleCase(faker.company.bs()),
                    isBreak: false,
                    start: confTimeSlot.start.toString(),
                    end: confTimeSlot.end.toString(),
                    room: roomInfo.name,
                    roomInfo: roomInfo,
                    speakers: subSpeakers,
                    description: faker.lorem.paragraph(8),
                    descriptionShort: faker.lorem.sentence()
                    //calendarEventId: ''
                };
                sessionList.push(s);
            }
        }
    }
    
    return sessionList;
}

function generateTimeSlots(confDay: IConferenceDay): Array<IConfTimeSlot> {
    var timeSlotList: Array<IConfTimeSlot> = [];
    var startTimeList = getTimeRange(addMinutes(confDay.date, 240), addMinutes(confDay.date, 780), SESSION_LENGTH);
    for (var startTime of startTimeList) {
        var isBreak = false;
        var sessionTitle = '';
        if (startTime.getHours() == 4) {
            isBreak = true;
            sessionTitle = 'Welcome Message';
        }
        else if (startTime.getHours() == 8) {
            isBreak = true;
            sessionTitle = 'Lunch Break';
        }
        var cTimeSlot: IConfTimeSlot = { title: sessionTitle, isBreak: isBreak, start: startTime, end: addMinutes(startTime, SESSION_LENGTH) };
        timeSlotList.push(cTimeSlot);
    }
    return timeSlotList;
}

function getTimeRange(startTime: Date, endTime: Date, minutesBetween: number): Array<Date> {
    var startTimeList: Array<Date> = [];
    var diffInMinutes = Math.round((endTime.getTime() - startTime.getTime()) / 60000);
    var periods: number = diffInMinutes / minutesBetween;
    for (var i = 0; i <= periods; i++) {
        let periodStart = addMinutes(startTime, (minutesBetween * i));
        startTimeList.push(periodStart);
    }
    return startTimeList;
}

function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
}

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}