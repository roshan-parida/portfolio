// utils/SoundManager.ts
import { Howl } from "howler";

const bootSound = new Howl({
	src: ["/sounds/boot.mp3"],
	volume: 0.5,
	loop: true,
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
};
