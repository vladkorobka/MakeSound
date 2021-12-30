'use strict';

function Piano(id, name, volume, delay, note, push){
    Instrument.call(this, id, name, volume, delay);
    this.__note = note;
    this.__push = push;
}

Piano.prototype = Object.create(Instrument.prototype);
Piano.prototype.constructor = Piano;

Piano.prototype.getNote = function (){
	return this.__note;
};

Piano.prototype.setNote = function (note){
    this.__note = note;
};

Piano.prototype.getPush = function (){
	return this.__push;
};

Piano.prototype.setPush = function (push){
    this.__push = push;
};