import { motion } from "motion/react";

interface HeaderProps {
	systemTime: string;
}

export default function Header({ systemTime }: HeaderProps) {
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
			<span className="whitespace-nowrap">{systemTime}</span>
		</motion.header>
	);
}
