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

    get getId (){
        return this.#id;
    }

    get getColour (){
        return this.#colour;
    };

    set setColour (colour){
        this.#colour = colour;
    }

    get getName (){
        return this.#name;
    }

    set setName (name){
        this.#name = name;
    }

    get getInstruments (){
        if (this.#instruments.length > 0){
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
            this.#instruments.filter((instrument, index, instruments) => {
                if (instrument.getId === id){
                    instruments.splice(index, 1);
                }
            });
        }
    }
}