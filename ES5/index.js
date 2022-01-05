'use strict';

var piano1 = new Piano(1, 'Piano1', 50, 2, 'A#', 0.5);
var piano2 = new Piano(2, 'Piano2', 70, 0, 'D', 0.2);
var piano3 = new Piano(3, 'Piano3', 45, 3, 'C', 0.4);

var track1 = new Track(1, '#ffffff', 'track1');
var track2 = new Track(2, '#000000', 'track2');

var track3 = new Track(3, '#acacac', 'track3');
var track4 = new Track(4, '#6d71ab', 'track4');
var track5 = new Track(5, '#13196b', 'track5');

var sequencer = new Sequencer(120, 15, false);

track1.addInstrument(piano1);
track1.addInstrument(piano2);

track2.addInstrument(piano3);

sequencer.addTrack(track1);
sequencer.addTrack(track2);

var user = new Composer('user1', sequencer);

//console.log(user.saveComposition());

// user.asyncChangeBPM(140, function (){
//     console.log(sequencer.getBPM());
// });

user.asyncChangeBPM(172, function (){
    console.log(sequencer.getBPM());
    user.asyncChangeBPM(170, function (){
        console.log(sequencer.getBPM());
        user.asyncChangeBPM(155, function (){
            console.log(sequencer.getBPM());
        });
    });
});

// user.asyncChangeBPM(125, function (bmp){
//     this.__sequencer.setBPM(bmp);
//     console.log(sequencer.getBPM());
//     user.asyncChangeBPM(135, function (bmp){
//         this.__sequencer.setBPM(bmp);
//         console.log(sequencer.getBPM());
//         user.asyncChangeBPM(145, function (bmp){
//             this.__sequencer.setBPM(bmp);
//             console.log(sequencer.getBPM());
//         }.bind(user));
//     }.bind(user));
// }.bind(user));