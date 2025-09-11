import { Howl, Howler } from "howler";

let isMuted = false;
let analyser: AnalyserNode | null = null;

function initAnalyser() {
	if (!analyser) {
		const ctx = Howler.ctx;
		analyser = ctx.createAnalyser();
		analyser.fftSize = 256;

		Howler.masterGain.connect(analyser);
		analyser.connect(ctx.destination);
	}
	return analyser;
}

function createSound(src: string, volume = 0.5, loop = false) {
	return new Howl({
		src: [src],
		volume,
		loop,
		html5: false,
	});
}

// Sounds
const bootSound = createSound("/sounds/boot.mp3", 0.5, true);
const transmitSound = createSound("/sounds/transmit.mp3", 0.5, true);
const clickSound = createSound("/sounds/click.mp3", 0.5);
const buttonSound = createSound("/sounds/button.mp3", 0.5);
const unmuteSound = createSound("/sounds/unmute.mp3", 0.3);

export const SoundManager = {
	// === Audio Control ===
	toggleMute: () => {
		isMuted = !isMuted;
		Howler.mute(isMuted);
		return isMuted;
	},
	isMuted: () => isMuted,

	// === Sounds ===
	bootPlay: () => bootSound.play(),
	bootStop: () => bootSound.stop(),

	transmitPlay: () => !isMuted && transmitSound.play(),
	transmitStop: () => transmitSound.stop(),

	clickPlay: () => !isMuted && clickSound.play(),
	buttonPlay: () => !isMuted && buttonSound.play(),
	unmutePlay: () => !isMuted && unmuteSound.play(),

	// === Analyser Access ===
	getAnalyser: () => initAnalyser(),
};
