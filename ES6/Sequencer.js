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

    get getBPM (){
        return this.#bpm;
    }

    set setBPM (bpm){
        if (bpm){
            this.#bpm = bpm;
        }
    }

    get getTime (){
        return this.#time;
    }

    get getTracks (){
        return this.#tracks;
    }
    
    addTrack (track){
        if (track){
            this.#tracks.push(track);
        }
    }
    
    removeTrackById (id){
        if (id){
            this.#tracks.filter((track, index, tracks) => {
                if (track.getId === id){
                    tracks.splice(index, 1);
                }
            });
        }
    }
    
    changeTrackNameById (id, name){
        if (id && name){
            this.#tracks.forEach((track, index, tracks) => {
                if (track.getId === id){
                    tracks[index].setName = name;
                };
            });
        }
    }
    
    play (){
        this.#play = true;
        return 'Sequencer is playing';
    }
    
    stop (){
        this.#play = false;
        return 'Sequencer has stopped';
    }
}