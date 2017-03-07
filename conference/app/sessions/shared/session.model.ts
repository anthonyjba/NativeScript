import { ISession, IRoomInfo, ISpeaker } from '../../shared/interfaces';
//import { Observable } from 'data/observable';

export class SessionModel implements ISession {
    private _session: ISession;
    private _favorite: boolean;

    get id() : string {
        return this._session.id;
    }

    get title() : string {
        return this._session.title;
    }
    
    get room() : string {
        if (this._session.room) {
            return this._session.room;
        }
        if (this._session.roomInfo) {
            return this._session.roomInfo.name;
        }

        return null;
    }
    
    get roomInfo() : IRoomInfo {
        return this._session.roomInfo;
    }
    
    get start() : string {
        return this._session.start;
    }
    
    get end() : string {
        return this._session.end;
    }
    
    get speakers() : Array<ISpeaker> {
        return this._session.speakers;
    }
    
    get description() : string {
        return this._session.description;
    }
    
    get descriptionShort() : string {
        if(this._session.description.length > 160) {
            return this._session.description.substr(0, 160) + '...';
        }
        else {
            return this._session.description;
        }
    }
    
    get isBreak() : boolean {
        return this._session.isBreak;
    }

    get favorite() : boolean {
        return this._favorite;
    }
    set favorite(value: boolean){
        if(this._favorite !== value && !this._session.isBreak){
            this._favorite = value; 
            //this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: 'favorite', value: this._favorite });
        }
    }

    public toggleFavorite() {
        this.favorite = !this.favorite;
    }

    constructor(public source : ISession) {
        if (source) {
            this._session = source;
        }
    }
}