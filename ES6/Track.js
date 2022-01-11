'use strict';

class Track {
    #id;
    #colour;
    #name;
    #instruments;

    constructor (id, colour, name, instruments = []){
        this.#id = id;
        this.#colour = colour;
        this.#name = name;
        this.#instruments = instruments;
    }

    get id (){
        return this.#id;
    }

    get colour (){
        return this.#colour;
    };

    set colour (colour){
        this.#colour = colour;
    }

    get name (){
        return this.#name;
    }

    set name (name){
        this.#name = name;
    }

    get instruments (){
        if (this.#instruments){
            return this.#instruments;
        }
        return null;
    }

    addInstrument (instrument){
        if (instrument){
            this.#instruments.push(instrument);
        }
    }

    removeInstrumentById (id){
        if (id && this.#instruments.length > 0){
            this.#instruments.forEach((instrument, index, instruments) => {
                if (instrument.id === id){
                    instruments.splice(index, 1);
                }
            });
        }
    }
}