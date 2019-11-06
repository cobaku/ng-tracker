import {Note} from './note';

export class Octave {

	private static OCTAVE_BASIC_FREQUENCIES = [
		27.5, 55, 110, 220, 440, 880, 1760, 3520
	];

	public static octave(number: number): Array<Note> {
		let aFreq = Octave.OCTAVE_BASIC_FREQUENCIES[number];

		let C = {name: 'C' + number, freq: aFreq * Math.pow(2, -9 / 12)};
		let Cs = {name: 'C#' + number, freq: aFreq * Math.pow(2, -8 / 12)};
		let Df = {name: 'Db' + number, freq: aFreq * Math.pow(2, -8 / 12)};
		let D = {name: 'D' + number, freq: aFreq * Math.pow(2, -7 / 12)};
		let Ds = {name: 'D#' + number, freq: aFreq * Math.pow(2, -6 / 12)};
		let Ef = {name: 'Eb' + number, freq: aFreq * Math.pow(2, -6 / 12)};
		let E = {name: 'E' + number, freq: aFreq * Math.pow(2, -5 / 12)};
		let F = {name: 'F' + number, freq: aFreq * Math.pow(2, -4 / 12)};
		let Fs = {name: 'F#' + number, freq: aFreq * Math.pow(2, -3 / 12)};
		let Gf = {name: 'Gb' + number, freq: aFreq * Math.pow(2, -3 / 12)};
		let G = {name: 'G' + number, freq: aFreq * Math.pow(2, -2 / 12)};
		let Gs = {name: 'G#' + number, freq: aFreq * Math.pow(2, -1 / 12)};
		let Af = {name: 'Ab' + number, freq: aFreq * Math.pow(2, -1 / 12)};
		let A = {name: 'A' + number, freq: aFreq};
		let As = {name: 'A#' + number, freq: aFreq * Math.pow(2, 1 / 12)};
		let Bf = {name: 'Bb' + number, freq: aFreq * Math.pow(2, 1 / 12)};
		let B = {name: 'B' + number, freq: aFreq * Math.pow(2, 2 / 12)};

		return [C, Cs, Df, D, Ds, Ef, E, F, Fs, Gf, G, Gs, Af, A, As, Bf, B];
	}
}
