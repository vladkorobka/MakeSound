'use strict';

const piano1 = new Piano(1, 'Piano1', 50, 2, 'A#', 0.5);
const piano2 = new Piano(2, 'Piano2', 70, 0, 'D', 0.2);
const piano3 = new Piano(3, 'Piano3', 45, 3, 'C', 0.4);

let track1 = new Track(1, '#ffffff', 'track1');
let track2 = new Track(2, '#000000', 'track2');
let track3 = new Track(3, '#acacac', 'track3');
let track4 = new Track(4, '#6d71ab', 'track4');
let track5 = new Track(5, '#13196b', 'track5');

let sequencer = new Sequencer();

track1.addInstrument(piano1);
track1.addInstrument(piano2);

track2.addInstrument(piano3);

let user = new Composer('user1', sequencer);

// console.log(piano1);
// console.log(piano1.getId);
// console.log(piano1.getName);
// piano1.setName = 'piano1_copy';
// console.log(piano1.getName);
// console.log(piano1.getVolume);
// piano1.setVolume = 70;
// console.log(piano1.getVolume);
// console.log(piano1.getDelay);
// piano1.setDelay = 0;
// console.log(piano1.getDelay);
// console.log(piano1.getNote);
// piano1.setNote = 'A+';
// console.log(piano1.getNote);
// console.log(piano1.getPush);
// piano1.setPush = 0.7;
// console.log(piano1.getPush);
//----------------------------
// console.log(track1);
// console.log(track1.getId);
// console.log(track1.getColour);
// track1.setColour = '#000000';
// console.log(track1.getColour);
// console.log(track1.getName);
// track1.setName = 'track1_copy';
// console.log(track1.getName);
// console.log(track1.getInstruments);
// track1.addInstrument(track1);
// track1.addInstrument(track2);
// track1.addInstrument(track3);
// track1.addInstrument(track4);
// track1.addInstrument(track5);
// console.log(track1.getInstruments);
// track1.removeInstrumentById(3);
// console.log(track1.getInstruments);
//----------------------------
// console.log(sequencer);
// console.log(sequencer.getBPM);
// sequencer.setBPM = '172';
// console.log(sequencer.getBPM);
// console.log(sequencer.getTime);
// console.log(sequencer.getTracks);
sequencer.addTrack(track1);
sequencer.addTrack(track2);
// console.log(sequencer.getTracks);
// sequencer.removeTrackById();
// console.log(sequencer.getTracks);
// sequencer.changeTrackNameById(1, 'track1_copy');
// console.log(sequencer.getTracks);
// console.log(sequencer.play());
// console.log(sequencer.stop());
//----------------------------
// console.log(user);
// console.log(user.getName);
// user.setName = 'user1_copy';
// console.log(user.getName);
// console.log(user.getSequencer);
// user.changeBPM(130);
// console.log(sequencer.getBPM);
console.log(user.saveComposition());
// user.asyncChangeBPM(172, function (error, bpm){
//     if (error){
//         console.error(error);
//     } else {
//         // sequencer.setBPM = bpm;
//         console.log(sequencer.getBPM);
//     }
// });