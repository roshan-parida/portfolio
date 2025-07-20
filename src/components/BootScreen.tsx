import { useEffect, useState } from "react";
import { SoundManager } from "../utils/SoundManager";

const bootSequenceLines = [
	"MOE BIOS v2.3 INITIALIZING...",
	"MEMORY CHECK: 640K OK",
	"LOADING KERNEL...",
	"DETECTING HARDWARE...",
	"ESTABLISHING SECURE CONNECTION...",
	"CONNECTION ESTABLISHED.",
	"AWAITING USER AUTHENTICATION...",
	"USER VERIFIED.",
	"LOADING INTERFACE...",
	"BOOT COMPLETE.",
];

type BootScreenProps = {
	onBootComplete: () => void;
};

export default function BootScreen({ onBootComplete }: BootScreenProps) {
	const [bootStarted, setBootStarted] = useState(false);
	const [bootIndex, setBootIndex] = useState(0);
	const [bootFinished, setBootFinished] = useState(false);

	useEffect(() => {
		if (!bootStarted || bootFinished) return;

		if (bootIndex === 0) {
			SoundManager.bootPlay();
		}

		if (bootIndex < bootSequenceLines.length) {
			const timeout = setTimeout(
				() => setBootIndex(bootIndex + 1),
				Math.random() * 200 + 50,
			);
			return () => clearTimeout(timeout);
		} else if (!bootFinished) {
			SoundManager.bootStop();
			setBootFinished(true);
			setTimeout(() => onBootComplete(), 500);
		}
	}, [bootIndex, bootStarted, bootFinished, onBootComplete]);

	const handleBoot = () => {
		setBootStarted(true);
	};

	return (
		<div className="crt-effect bg-bg-main fixed inset-0 z-50 flex flex-col items-center justify-center text-lg">
			{!bootStarted ? (
				<button
					onClick={handleBoot}
					className="terminal-button px-8 py-4 text-4xl"
				>
					Boot Up
				</button>
			) : (
				bootSequenceLines
					.slice(0, bootIndex)
					.map((line, i) => <p key={i}>{line}</p>)
			)}
		</div>
	);
}
