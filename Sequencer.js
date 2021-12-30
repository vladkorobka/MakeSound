'use strict';

function Sequencer(bpm = 120, time = 0, play = false, tracks = []){
    this.__bpm = bpm;
    this.__time = time;
    this.__play = play;
    this.__tracks = tracks;
}

Sequencer.prototype.getBPM = function (){
    return this.__bpm;
};

Sequencer.prototype.setBPM = function (bpm){
    this.__bpm = bpm;
};

Sequencer.prototype.getTime = function (){
    return this.__time;
};

Sequencer.prototype.getTracks = function (){
    return this.__tracks;
};

Sequencer.prototype.addTrack = function (track){
    this.__tracks.push(track);
};

Sequencer.prototype.removeTrackById = function (id){
    if (id){
        this.__tracks.filter(function (track, index, tracks){
            if (track.getId() === id){
                tracks.splice(index, 1);
            };
        });
    };
};

Sequencer.prototype.changeTrackNameById = function (id, name){
    if (id && name){
        this.__tracks.forEach(function (track, index, tracks){
            if (track.getId() === id){
                tracks[index].setName(name);
            };
        });
    };
};

Sequencer.prototype.play = function (){
    this.__play = true;
};

Sequencer.prototype.stop = function (){
    this.__play = false;
};