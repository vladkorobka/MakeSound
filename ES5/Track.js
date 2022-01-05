'use strict';

function Track(id, colour, name, instruments = []){
    this.__id = id;
    this.__colour = colour;
    this.__name = name;
    this.__instruments = instruments;
}

Track.prototype.getId = function (){
    return this.__id;
};

Track.prototype.getColour = function (){
    return this.__colour;
};

Track.prototype.setColour = function (colour){
    this.__colour = colour;
};

Track.prototype.getName = function (){
    return this.__name;
};

Track.prototype.setName = function (name){
    this.__name = name;
};

Track.prototype.getInstruments = function (){
    if (this.__instruments){
        return this.__instruments;
    };
};

Track.prototype.addInstrument = function (instrument){
    if (instrument){
        this.__instruments.push(instrument);
    };
};

Track.prototype.removeInstrunmentbyId = function (id){
    if (id && this.__instruments){
        this.__instruments.filter(function (instrument, index, instruments){
            if (instrument.getId() === id){
                instruments.splice(index, 1);
            };
        });
    };
};