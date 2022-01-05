'use strict';

class Track {
    constructor (id, colour, name, instruments = []){
        this.__id = id;
        this.__colour = colour;
        this.__name = name;
        this.__instruments = instruments;
    }

    get getId (){
        return this.__id;
    }

    get getColour (){
        return this.__colour;
    };

    set setColour (colour){
        this.__colour = colour;
    }

    get getName (){
        return this.__name;
    }

    set setName (name){
        this.__name = name;
    }

    get getInstruments (){
        if (this.__instruments.length > 0){
            return this.__instruments;
        }
        return null;
    }

    addInstrument (instrument){
        if (instrument){
            this.__instruments.push(instrument);
        }
    }

    removeInstrumentById (id){
        if (id && this.__instruments.length > 0){
            this.__instruments.filter((instrument, index, instruments) => {
                if (instrument.getId === id){
                    instruments.splice(index, 1);
                }
            });
        }
    }
}