import {Component, Input} from '@angular/core';
import {Note} from '../domain/note';

@Component({
	selector: 'oscillators',
	templateUrl: './oscillators.component.html',
	styleUrls: ['./oscillators.component.css']
})
export class OscillatorsComponent {

	public activeOscillator: OscillatorNode;
	public oscillators: Array<OscillatorNode> = [];

	@Input() ctx: AudioContext;

	public addOsc(): void {
		const oscillator = this.ctx.createOscillator();
		oscillator.type = 'sine';
		oscillator.start();
		this.oscillators.push(oscillator);
		this.activeOscillator = oscillator;
	}

	public play(note: Note): void {
		if (this.activeOscillator == null) {
			return;
		}
		this.activeOscillator.frequency.setValueAtTime(note.freq, this.ctx.currentTime);
		this.activeOscillator.connect(this.ctx.destination);
	}

	stop(): void {
		if (this.activeOscillator == null) {
			return;
		}
		this.activeOscillator.disconnect();
	}
}
