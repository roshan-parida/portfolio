import { motion, AnimatePresence } from "motion/react";

interface ContentProps {
	activeTab: "roshan" | "projects" | "contact";
	TABS: Record<string, React.ReactNode>;
}

export default function Content({ activeTab, TABS }: ContentProps) {
	return (
		<div className="relative w-full max-w-4xl md:w-3/4">
			<div className="content-window border-border-shadow h-[calc(100vh-200px)] max-h-[70vh] overflow-y-auto border bg-[#1e1e1e] p-4 md:h-[500px]">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="space-y-4"
					>
						{TABS[activeTab]}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
