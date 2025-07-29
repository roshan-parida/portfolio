import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Header() {
	const [systemTime, setSystemTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const timeStr = `TIME: ${now.getHours().toString().padStart(2, "0")}:${now
				.getMinutes()
				.toString()
				.padStart(
					2,
					"0",
				)}:${now.getSeconds().toString().padStart(2, "0")}`;
			setSystemTime(timeStr);
		};
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<motion.header
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 200, damping: 20 }}
			className="bg-border-shadow text-bg-main flex flex-col items-center justify-between gap-2 p-3 text-sm tracking-wide sm:flex-row sm:p-2 sm:text-base"
		>
			<span className="whitespace-nowrap">
				L.U.C.I.A.N. TERMINAL &infin; [AUTHORIZED USER]
			</span>
			<span className="hidden whitespace-nowrap md:block">
				{systemTime}
			</span>
		</motion.header>
	);
}
