'use strict';

class Sequencer {
    constructor (bpm = 120, time = 0, play = false, tracks = []){
        this.__bpm = bpm;
        this.__time = time;
        this.__play = play;
        this.__tracks = tracks;
    }

    get getBPM (){
        return this.__bpm;
    }

    set setBPM (bpm){
        if (bpm){
            this.__bpm = bpm;
        }
    }

    get getTime (){
        return this.__time;
    }

    get getTracks (){
        return this.__tracks;
    }
    
    addTrack (track){
        if (track){
            this.__tracks.push(track);
        }
    }
    
    removeTrackById (id){
        if (id){
            this.__tracks.filter((track, index, tracks) => {
                if (track.getId === id){
                    tracks.splice(index, 1);
                }
            });
        }
    }
    
    changeTrackNameById (id, name){
        if (id && name){
            this.__tracks.forEach((track, index, tracks) => {
                if (track.getId === id){
                    tracks[index].setName = name;
                };
            });
        }
    }
    
    play (){
        this.__play = true;
    }
    
    stop (){
        this.__play = false;
    }
}