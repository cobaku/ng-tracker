import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PlayerComponent} from './player/player.component';
import {PianoKeyboardComponent} from './piano-keyboard/piano-keyboard.component';
import {OscillatorsComponent} from './oscillators/oscillators.component';
import {OscillatorComponent} from './oscillator/oscillator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		PlayerComponent,
		PianoKeyboardComponent,
		OscillatorsComponent,
		OscillatorComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
