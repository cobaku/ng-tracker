import {Component, Input} from '@angular/core';

@Component({
	selector: 'oscillator',
	templateUrl: './oscillator.component.html',
	styleUrls: ['./oscillator.component.css']
})
export class OscillatorComponent {

	@Input() oscillator: OscillatorNode;

}
