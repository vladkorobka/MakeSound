'use strict';

function Composer(name, sequencer = null){
    this.__name = name;
    this.__sequencer = sequencer;
}

Composer.prototype.getName = function (){
    return this.__name;
};

Composer.prototype.setName = function (name){
    this.__name = name;
};

Composer.prototype.getSequencer = function (){
    return this.__sequencer;
};

Composer.prototype.setSequencer = function (sequencer){
    this.__sequencer = sequencer;
};

Composer.prototype.changeBPM = function (bmp){
    if (bmp && this.__sequencer){
        this.__sequencer.setBPM(bmp);
    };
};

Composer.prototype.asyncChangeBPM = function (bmp, callback) {
    if (bmp && this.__sequencer){

        // var self = this;
        // setTimeout(function (){
        //     callback(self.__sequencer.setBPM(bmp));
        // }, 2000);

        // setTimeout(function (){
        //     callback(this.__sequencer.setBPM(bmp));
        // }.bind(this), 2000);

        setTimeout(function (){
            callback(bmp);
        }, 2000);  
    };
};

Composer.prototype.saveComposition = function (){
    if (this.__sequencer){
        var tracksForSave = [];
        this.__sequencer.getTracks().forEach(function (track){
            var instrumentsForSave = [];
            track.getInstruments().forEach(function (instrument){
                instrumentsForSave.push({
                    'name': instrument.getName(),
                    'volume': instrument.getVolume(),
                    'delay': instrument.getDelay()
                });
            });
            tracksForSave.push({
                'id': track.getId(),
                'name': track.getName(),
                'instruments': instrumentsForSave
            });
        });
        return {
            'time': this.__sequencer.getTime(),
            'tracks': tracksForSave
        };
    };
};