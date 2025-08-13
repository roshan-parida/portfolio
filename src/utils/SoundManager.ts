import { Howl } from "howler";

const bootSound = new Howl({
	src: ["/sounds/boot.mp3"],
	volume: 0.5,
	loop: true,
});

const clickSound = new Howl({
	src: ["/sounds/click.mp3"],
	volume: 0.5,
});

const buttonSound = new Howl({
	src: ["/sounds/button.mp3"],
	volume: 0.5,
});

export const SoundManager = {
	bootPlay: () => {
		bootSound.play();
	},
	bootStop: () => {
		bootSound.stop();
	},

	clickPlay: () => {
		clickSound.play();
	},

	buttonPlay: () => {
		buttonSound.play();
	},
};
