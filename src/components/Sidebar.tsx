import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SoundManager } from "../utils/SoundManager";
import { ChevronDown } from "lucide-react";

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

	const [isMobile, setIsMobile] = useState(false);
	const [networkOpen, setNetworkOpen] = useState(true);

	useEffect(() => {
		const checkMobile = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			setNetworkOpen(!mobile);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		if (isMobile) setNetworkOpen(false);
	}, [activeTab, isMobile]);

	const toggleNetwork = () => {
		if (isMobile) setNetworkOpen((prev) => !prev);
	};

	return (
		<motion.aside
			initial={{ x: -30, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 180, damping: 22 }}
			className="mb-4 w-full md:mb-0 md:w-1/4"
		>
			<h2 className="border-border-shadow mb-2 border-b-2 pb-1 text-lg tracking-wide">
				DIRECTORY
			</h2>

			<nav className="flex flex-col space-y-2">
				{tabs.map((tab) => (
					<motion.button
						key={tab.id}
						onClick={() => {
							SoundManager.clickPlay();
							setActiveTab(tab.id);
						}}
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

			<div
				onClick={toggleNetwork}
				className={`border-border-shadow mt-8 border p-2 ${
					isMobile ? "cursor-pointer select-none" : ""
				}`}
			>
				<div className="flex items-center justify-between">
					<h3 className="text-highlight mb-2 text-lg tracking-wide">
						NETWORK ACCESS
					</h3>

					{isMobile && (
						<ChevronDown
							size={18}
							className={`transition-transform duration-200 ${
								networkOpen ? "rotate-180" : "rotate-0"
							}`}
						/>
					)}
				</div>

				<motion.div
					initial={false}
					animate={
						!isMobile || networkOpen
							? { height: "auto", opacity: 1 }
							: { height: 0, opacity: 0 }
					}
					transition={{ duration: 0.25 }}
					className="overflow-hidden"
				>
					<div className="inline-flex flex-col space-y-1 text-sm">
						<a
							href="https://github.com/roshan-parida"
							target="_blank"
							rel="noopener noreferrer"
							className="items-center gap-2 hover:underline"
						>
							&gt; [Gh] Github
						</a>
						<a
							href="https://www.linkedin.com/in/roshan-parida/"
							target="_blank"
							rel="noopener noreferrer"
							className="items-center gap-2 hover:underline"
						>
							&gt; [Ln] LinkedIn
						</a>
						<a
							href="https://www.instagram.com/roshan_ot23/"
							target="_blank"
							rel="noopener noreferrer"
							className="items-center gap-2 hover:underline"
						>
							&gt; [In] Instagram
						</a>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="border-border-shadow mt-8 hidden border p-2 md:block"
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
