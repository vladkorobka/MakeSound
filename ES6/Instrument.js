'use strict';

class Instrument {
    constructor (id, name, volume, delay){
        this._id = id;
        this._name = name;
        this._volume = volume;
        this._delay = delay;
    }

    get getId (){
        return this._id;
    }

    get getName (){
        return this._name;
    }

    set setName (name){
        this._name = name;
    }

    get getVolume (){
        return this._volume;
    }

    set setVolume (volume){
        this._volume = volume;
    }

    get getDelay (){
        return this._delay;
    }

    set setDelay (delay){
        this._delay = delay;
    }
}