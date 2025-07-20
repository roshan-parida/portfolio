import { Howl } from "howler";

const bootSound = new Howl({
	src: ["/sounds/booting.wav"],
	volume: 0.5,
});

const clickSound = new Howl({
	src: ["/sounds/click.mp3"],
	volume: 0.5,
});

export const SoundManager = {
	boot: () => bootSound.play(),
	click: () => clickSound.play(),
};
