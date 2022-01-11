'use strict';

class Instrument {
    constructor (id, name, volume, delay){
        this._id = id;
        this._name = name;
        this._volume = volume;
        this._delay = delay;
    }

    get id (){
        return this._id;
    }

    get name (){
        return this._name;
    }

    set name (name){
        this._name = name;
    }

    get volume (){
        return this._volume;
    }

    set volume (volume){
        this._volume = volume;
    }

    get delay (){
        return this._delay;
    }

    set delay (delay){
        this._delay = delay;
    }
}