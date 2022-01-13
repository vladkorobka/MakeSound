'use strict';

class Sequencer {
    #bpm;
    #time;
    #play;
    #tracks;

    constructor (bpm = 120, time = 0, play = false, tracks = []){
        this.#bpm = bpm;
        this.#time = time;
        this.#play = play;
        this.#tracks = tracks;
    }

    get bpm (){
        return this.#bpm;
    }

    set bpm (bpm){
        if (bpm){
            this.#bpm = bpm;
        }
    }

    get time (){
        return this.#time;
    }

    isPlay (){
        return this.#play;
    }

    get tracks (){
        return this.#tracks;
    }
    
    addTrack (track){
        if (track){
            this.#tracks.push(track);
        }
    }

    removeTrackById (id){
        if (id){
            this.#tracks.forEach((track, index, tracks) => {
                if (track.id === id){
                    tracks.splice(index, 1);
                }
            });
        }
    }

    changeTrackNameById (id, name){
        if (id && name){
            this.#tracks.forEach(track => {
                if (track.id === id){
                    track.name = name;
                }
            });
        }
    }
    
    play (){
        this.#play = true;
    }
    
    stop (){
        this.#play = false;
    }
}