'use strict';

class Instrument {
    #id;
    #name;
    #volume;
    #delay;

    constructor (id, name, volume, delay){
        this.#id = id;
        this.#name = name;
        this.#volume = volume;
        this.#delay = delay;
    }

    get getId (){
        return this.#id;
    }

    get getName (){
        return this.#name;
    }

    set setName (name){
        this.#name = name;
    }

    get getVolume (){
        return this.#volume;
    }

    set setVolume (volume){
        this.#volume = volume;
    }

    get getDelay (){
        return this.#delay;
    }

    set setDelay (delay){
        this.#delay = delay;
    }
}