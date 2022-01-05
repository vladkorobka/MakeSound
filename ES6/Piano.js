'use strict';

class Piano extends Instrument {
    constructor (id, name, volume, delay, note, push){
        super(id, name, volume, delay);
        this.__note = note;
        this.__push = push;
    }

    get getNote (){
        return this.__note;
    }

    set setNote (note){
        this.__note = note;
    }

    get getPush (){
        return this.__push;
    }

    set setPush (push){
        this.__push = push;
    }
}