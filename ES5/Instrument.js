'use strict';

function Instrument(id, name, volume, delay){
    this._id = id;
    this._name = name;
    this._volume = volume;
    this._delay = delay;
}

Instrument.prototype.getId = function (){
	return this._id;
};

Instrument.prototype.getName = function (){
    return this._name;
};

Instrument.prototype.setName = function (name){
    this._name = name;
};

Instrument.prototype.getVolume = function (){
    return this._volume;
};

Instrument.prototype.setVolume = function (volume){
    this._volume = volume;
};

Instrument.prototype.getDelay = function (){
    return this._delay;
};

Instrument.prototype.setDelay = function (delay){
    this._delay = delay;
};