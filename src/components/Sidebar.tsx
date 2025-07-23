import { motion } from "motion/react";

interface SidebarProps {
	activeTab: string;
	setActiveTab: (tab: "roshan" | "projects" | "contact") => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
	const tabs = [
		{ id: "roshan", label: "01_ROSHAN.txt" },
		{ id: "projects", label: "02_PROJECTS.log" },
		{ id: "contact", label: "03_CONTACT.inf" },
	] as const;

	return (
		<motion.aside
			initial={{ x: -30, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 180, damping: 22 }}
			className="mb-4 w-full md:mb-0 md:w-1/4"
		>
			<h2 className="border-border-shadow mb-2 border-b-2 pb-1 text-xl tracking-wide">
				DIRECTORY
			</h2>

			<nav className="flex flex-col space-y-2">
				{tabs.map((tab) => (
					<motion.button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`terminal-button p-2 text-left transition-all duration-200 ${
							activeTab === tab.id
								? "bg-hover text-highlight"
								: ""
						}`}
					>
						{tab.label}
					</motion.button>
				))}
			</nav>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="border-border-shadow mt-8 border p-2"
			>
				<h3 className="text-highlight mb-2 text-lg tracking-wide">
					NETWORK ACCESS
				</h3>
				<ul className="space-y-1 text-sm">
					<li>
						<a
							href="https://github.com/roshan-parida"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:underline"
						>
							&gt; [Gh] Github
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/roshan-parida/"
							target="_blank"
							rel="noopener noreferrer"
							className="block hover:underline"
						>
							&gt; [Ln] LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/roshan_ot23/"
							target="_blank"
							rel="noopener noreferrer"
							className="block hover:underline"
						>
							&gt; [In] Instagram
						</a>
					</li>
				</ul>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="border-border-shadow mt-8 border p-2"
			>
				<h3 className="text-highlight mb-2 text-lg tracking-wide">
					SYSTEM STATUS
				</h3>
				<ul className="space-y-1 text-sm">
					<li>
						&gt; CONNECTION:{" "}
						<span className="text-highlight animate-pulse">
							SECURE
						</span>
					</li>
					<li>&gt; ID VERIFIED: LUCIAN</li>
					<li>&gt; CLEARANCE: LEVEL 7</li>
				</ul>
			</motion.div>
		</motion.aside>
	);
}
