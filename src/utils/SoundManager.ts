import { Howl } from "howler";

const bootSound = new Howl({
	src: ["/sounds/booting.mp3"],
	volume: 0.5,
	loop: true,
});

const clickSound = new Howl({
	src: ["/sounds/click.mp3"],
	volume: 0.7,
});

export const SoundManager = {
	bootPlay: () => {
		console.log("Playing boot sound...");
		bootSound.play();
	},
	bootStop: () => {
		console.log("Stopping boot sound...");
		bootSound.stop();
	},

	clickPlay: () => {
		console.log("Playing click sound...");
		clickSound.play();
	},
};
