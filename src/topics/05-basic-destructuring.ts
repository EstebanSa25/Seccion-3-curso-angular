// interface Details {
//     author: string;
//     year: number;
// }
// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: 'Mess',
//     details: {
//         author: 'Ed sheeran',
//         year: 2015,
//     },
// };

// const song = 'New song';
// const { song: anotherSong, songDuration: duration, details } = audioPlayer;
// const { author } = details;

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks = 'Not found'] = dbz;
console.log(`Personaje 3: ${trunks}`);

export {};
