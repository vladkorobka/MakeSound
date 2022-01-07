'use strict';

class Composer {
    #name;
    #sequencer;

    constructor (name, sequencer = null){
        this.#name = name;
        this.#sequencer = sequencer;
    }

    get getName (){
        return this.#name;
    }

    set setName (name){
        this.#name = name;
    }

    get getSequencer (){
        return this.#sequencer;
    }

    set setSequencer (sequencer){
        this.#sequencer = sequencer;
    }

    changeBPM (bpm){
        if (bpm && this.#sequencer){
            this.#sequencer.setBPM = bpm;
        }
    }

    asyncChangeBPM (bpm, callback){

        // 1) using self
        // let self = this;
        // setTimeout(function (){
        //     let error;
        //     if (!bpm){
        //         error = new Error ("BPM is not defined");
        //     }
        //     self.#sequencer.setBPM = bpm
        //     callback(error, bpm);
        // }, 2000);

        // 2) using bind
        setTimeout(function (){
            let error;
            if (!bpm){
                error = new Error ("BPM is not defined");
            }
            this.#sequencer.setBPM = bpm;
            callback(error, bpm);
        }.bind(this), 2000);

        // 3) using callback with argument and calling setter in index.js
        // setTimeout(function (){
        //     let error;
        //     if (!bpm){
        //         error = new Error ("BPM is not defined");
        //     }
        //     callback(error, bpm);
        // }, 2000);
    }

    saveComposition (){
        if (this.#sequencer){
            let tracksForSave = [];
            this.#sequencer.getTracks.forEach(track => {
                let instrumentsForSave = [];
                track.getInstruments.forEach(instrument => {
                    instrumentsForSave.push({
                        'name': instrument.getName,
                        'volume': instrument.getVolume,
                        'delay': instrument.getDelay
                    });
                });
                tracksForSave.push({
                    'id': track.getId,
                    'name': track.getName,
                    'instruments': instrumentsForSave
                });
            });
            return {
                'time': this.#sequencer.getTime,
                'tracks': tracksForSave
            };
        };
    }
}