'use strict';

class Piano extends Instrument {
    #note;
    #push;

    constructor (id, name, volume, delay, note, push){
        super(id, name, volume, delay);
        this.#note = note;
        this.#push = push;
    }

    get note (){
        return this.#note;
    }

    set note (note){
        this.#note = note;
    }

    get push (){
        return this.#push;
    }

    set push (push){
        this.#push = push;
    }
}