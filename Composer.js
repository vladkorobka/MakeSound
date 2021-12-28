'use strict'

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

Composer.prototype.saveComposition = function (){
    if (this.__sequencer){
        var tracksForSave = [];
        var sequencerTracks = this.__sequencer.getTracks();
        for (var i = 0; i < sequencerTracks.length; i++){
            var instrumentsForSave = [];
            var tracksIntruments = sequencerTracks[i].getInstruments()
            for (var j = 0; j < tracksIntruments.length; j++){
                instrumentsForSave.push({
                    'name': tracksIntruments[j].getName(),
                    'volume': tracksIntruments[j].getVolume(),
                    'delay': tracksIntruments[j].getDelay()
                });
            };
            tracksForSave.push({
                'id': sequencerTracks[i].getId(),
                'name': sequencerTracks[i].getName(),
                'instrument': instrumentsForSave
            });
        };
        return {
            'time': this.__sequencer.getTime(),
            'tracks': tracksForSave
        };
    };
};