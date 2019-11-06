import {Component, EventEmitter, Output} from '@angular/core';
import {Keys} from '../domain/keys';
import {PianoKey} from '../domain/piano-key';
import {PianoKeyboardEvent, PianoKeyboardEventType} from '../domain/piano-keyboard-event';

@Component({
	selector: 'piano-keyboard',
	templateUrl: './piano-keyboard.component.html',
	styleUrls: ['./piano-keyboard.component.css']
})
export class PianoKeyboardComponent {

	@Output() emitter: EventEmitter<PianoKeyboardEvent> = new EventEmitter<PianoKeyboardEvent>();

	public keys = Keys.KEYS;

	public onUp(): void {
		this.emitter.emit({
			type: PianoKeyboardEventType.KEY_RELEASE
		});
	}

	public onDown(key: PianoKey): void {
		this.emitter.emit({
			type: PianoKeyboardEventType.KEY_PRESS,
			payload: key.note
		});
	}
}


