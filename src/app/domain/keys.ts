import {Notes} from './notes';
import {PianoKey} from './piano-key';

export class Keys {

	public static KEYS = Keys.keys();

	private static keys(): Array<PianoKey> {
		return Notes.NOTES.map(n => {
			if (n.name.length == 2) {
				return {
					isBlack: false,
					note: n
				};
			} else if (n.name.charAt(1) == '#') {
				return {
					isBlack: true,
					note: n
				};
			} else {
				return null;
			}
		}).filter(k => k != null);
	}
}
