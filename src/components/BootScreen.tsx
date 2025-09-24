import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SoundManager } from "../utils/SoundManager";

type BootScreenProps = {
	onBootComplete: () => void;
};

export default function BootScreen({ onBootComplete }: BootScreenProps) {
	const [bootStarted, setBootStarted] = useState(false);
	const [bootIndex, setBootIndex] = useState(0);
	const [bootFinished, setBootFinished] = useState(false);
	const [bootSequenceLines, setBootSequenceLines] = useState<string[]>([]);

	const getClientInfo = () => {
		const info: string[] = [];
		info.push("LUCIAN BIOS INITIALIZING...");
		info.push("LOADING KERNEL...");
		info.push("DETECTING HARDWARE...");

		// Browser
		info.push(`LANGUAGE: ${navigator.language}`);

		// Screen
		info.push(`SCREEN: ${window.screen.width}x${window.screen.height}`);

		// Hardware
		if ("hardwareConcurrency" in navigator) {
			info.push(`CPU CORES: ${navigator.hardwareConcurrency}`);
		}
		if ("deviceMemory" in navigator) {
			info.push(`RAM (EST): ${(navigator as any).deviceMemory} GB`);
		}

		info.push("BOOT COMPLETE.");

		return info;
	};

	useEffect(() => {
		setBootSequenceLines(getClientInfo());
	}, []);

	useEffect(() => {
		const startBoot = () => {
			if (!bootStarted) setBootStarted(true);
		};

		window.addEventListener("keydown", startBoot);
		window.addEventListener("click", startBoot);
		window.addEventListener("touchstart", startBoot);

		return () => {
			window.removeEventListener("keydown", startBoot);
			window.removeEventListener("click", startBoot);
			window.removeEventListener("touchstart", startBoot);
		};
	}, [bootStarted]);

	useEffect(() => {
		if (!bootStarted || bootFinished) return;

		if (bootIndex === 0) SoundManager.bootPlay();

		if (bootIndex < bootSequenceLines.length) {
			const timeout = setTimeout(
				() => setBootIndex((i) => i + 1),
				Math.random() * 500 + 200,
			);
			return () => clearTimeout(timeout);
		} else {
			SoundManager.bootStop();
			setBootFinished(true);
			setTimeout(() => onBootComplete(), 700);
		}
	}, [
		bootIndex,
		bootStarted,
		bootFinished,
		bootSequenceLines,
		onBootComplete,
	]);

	const progressPercent = (bootIndex / bootSequenceLines.length) * 100;

	return (
		<div className="crt-effect bg-bg-main fixed inset-0 z-50 flex cursor-none flex-col items-center justify-center px-4 text-white select-none">
			{!bootStarted ? (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="animate-pulse text-center text-2xl sm:text-3xl md:text-4xl"
				>
					Press any key or tap to boot...
				</motion.p>
			) : (
				<div className="flex w-full max-w-2xl flex-col items-center space-y-4">
					{/* Progress Bar */}
					<div className="border-border-shadow h-4 w-full max-w-lg overflow-hidden border-2 bg-gray-800">
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: `${progressPercent}%` }}
							transition={{ ease: "linear", duration: 0.2 }}
							className="bg-highlight h-full"
						/>
					</div>

					{/* Boot Line */}
					<motion.div
						key={bootIndex}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className="flex h-8 items-center justify-center text-center text-sm sm:text-base md:text-lg lg:text-xl"
					>
						{bootSequenceLines[bootIndex - 1] || "BOOTING..."}
					</motion.div>
				</div>
			)}
		</div>
	);
}
