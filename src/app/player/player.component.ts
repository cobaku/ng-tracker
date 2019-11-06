import {Component, ViewChild} from '@angular/core';
import {PianoKeyboardEvent, PianoKeyboardEventType} from '../domain/piano-keyboard-event';
import {OscillatorsComponent} from '../oscillators/oscillators.component';

@Component({
	selector: 'player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent {

	@ViewChild(OscillatorsComponent) osc: OscillatorsComponent;

	private audioCtx = new AudioContext();

	public handlePianoKeyboardEvent(event: PianoKeyboardEvent): void {
		switch (event.type) {
			case PianoKeyboardEventType.KEY_PRESS:
				this.osc.play(event.payload);
				break;
			case PianoKeyboardEventType.KEY_RELEASE:
				this.osc.stop();
				break;
		}
	}
}
