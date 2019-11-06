export enum PianoKeyboardEventType {
	KEY_PRESS,
	KEY_RELEASE
}

export interface PianoKeyboardEvent {

	type: PianoKeyboardEventType;
	payload?: any;

}
