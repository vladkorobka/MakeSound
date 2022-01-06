'use strict';

class Piano extends Instrument {
    #note;
    #push;

    constructor (id, name, volume, delay, note, push){
        super(id, name, volume, delay);
        this.#note = note;
        this.#push = push;
    }

    get getNote (){
        return this.#note;
    }

    set setNote (note){
        this.#note = note;
    }

    get getPush (){
        return this.#push;
    }

    set setPush (push){
        this.#push = push;
    }
}