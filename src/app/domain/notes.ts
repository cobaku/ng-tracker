import {Note} from './note';
import {Octave} from './octave';

export class Notes {

	public static NOTES: Array<Note> = Notes.notes();

	private static notes(): Array<Note> {
		let result = [];

		for (let o = 0; o <= 8; o++) {
			result = result.concat(Octave.octave(o));
		}

		return result;
	}
}
