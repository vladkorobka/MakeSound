'use strict';

class Composer {
    #name;
    #sequencer;

    constructor (name, sequencer = null){
        this.#name = name;
        this.#sequencer = sequencer;
    }

    get name (){
        return this.#name;
    }

    set name (name){
        this.#name = name;
    }

    get sequencer (){
        return this.#sequencer;
    }

    set sequencer (sequencer){
        this.#sequencer = sequencer;
    }

    changeBPM (bpm){
        if (bpm && this.#sequencer){
            this.#sequencer.setBPM = bpm;
        }
    }

    asyncChangeBPM (bpm, callback){
        setTimeout(function (){
            let error;
            if (bpm && this.#sequencer){
                this.#sequencer.bpm = bpm;
            } else {
                error = new Error ("BPM is not defined");
            }
            callback(error);
        }.bind(this), 2000);
    }

    asyncPromiseChangeBPM (bpm){
        return new Promise ((resolve, reject) => {
            setTimeout(function (){
                if (bpm && this.#sequencer){
                    this.#sequencer.bpm = bpm;
                    resolve();
                } else {
                    reject(new Error ("BPM is not defined"));
                }
            }.bind(this), 2000);
        });
    }

    saveComposition (){
        if (this.#sequencer){
            const tracksForSave = [];
            this.#sequencer.getTracks.forEach(track => {
                const instrumentsForSave = [];
                track.getInstruments.forEach(instrument => {
                    instrumentsForSave.push({
                        'name': instrument.name,
                        'volume': instrument.volume,
                        'delay': instrument.delay
                    });
                });
                tracksForSave.push({
                    'id': track.id,
                    'name': track.name,
                    'instruments': instrumentsForSave
                });
            });
            return {
                'time': this.#sequencer.time,
                'tracks': tracksForSave
            }
        }
    }
}