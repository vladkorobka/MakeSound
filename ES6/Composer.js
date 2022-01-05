'use strict';

class Composer {
    constructor (name, sequencer = null){
        this.__name = name;
        this.__sequencer = sequencer;
    }

    get getName (){
        return this.__name;
    }

    set setName (name){
        this.__name = name;
    }

    get getSequencer (){
        return this.__sequencer;
    }

    set setSequencer (sequencer){
        this.__sequencer = sequencer;
    }

    changeBPM (bpm){
        if (bpm && this.__sequencer){
            this.__sequencer.setBPM = bpm;
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
        //     self.__sequencer.setBPM = bpm
        //     callback(error, bpm);
        // }, 2000);

        // 2) using bind
        setTimeout(function (){
            let error;
            if (!bpm){
                error = new Error ("BPM is not defined");
            }
            this.__sequencer.setBPM = bpm;
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
}