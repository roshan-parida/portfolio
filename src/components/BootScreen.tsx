import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SoundManager } from "../utils/SoundManager";

const bootSequenceLines = [
	"LUCIAN BIOS INITIALIZING...",
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

		if (bootIndex === 0) SoundManager.bootPlay();

		if (bootIndex < bootSequenceLines.length) {
			const timeout = setTimeout(
				() => setBootIndex((i) => i + 1),
				Math.random() * 200 + 50,
			);
			return () => clearTimeout(timeout);
		} else {
			SoundManager.bootStop();
			setBootFinished(true);
			setTimeout(() => onBootComplete(), 700);
		}
	}, [bootIndex, bootStarted, bootFinished, onBootComplete]);

	const handleBoot = () => {
		setBootStarted(true);
	};

	return (
		<div className="crt-effect bg-bg-main fixed inset-0 z-50 flex flex-col items-center justify-center px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			{!bootStarted ? (
				<motion.button
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "spring", stiffness: 200, damping: 20 }}
					onClick={handleBoot}
					className="terminal-button px-8 py-4 text-4xl sm:text-5xl lg:text-6xl"
				>
					Boot Up
				</motion.button>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full max-w-2xl text-center"
				>
					{bootSequenceLines
						.slice(0, bootIndex)
						.map((line, index) => (
							<motion.p
								key={index}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.03 }}
								className="whitespace-nowrap"
							>
								{line}
							</motion.p>
						))}
				</motion.div>
			)}
		</div>
	);
}
