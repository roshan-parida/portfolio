import { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { SoundManager } from "../utils/SoundManager";

const tabs = [
	{ id: "roshan", label: "01_ROSHAN.txt" },
	{ id: "projects", label: "02_PROJECTS.log" },
	{ id: "contact", label: "03_CONTACT.inf" },
] as const;

type TabId = (typeof tabs)[number]["id"];

interface SidebarProps {
	activeTab: TabId;
	setActiveTab: (tab: TabId) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
	const [isMobile, setIsMobile] = useState(false);
	const [networkOpen, setNetworkOpen] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768;
			setIsMobile(mobile);
			setNetworkOpen(!mobile);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (isMobile) setNetworkOpen(false);
	}, [activeTab, isMobile]);

	const toggleNetwork = () => isMobile && setNetworkOpen((prev) => !prev);

	const socialLinks = useMemo(
		() => [
			{
				href: "https://github.com/roshan-parida",
				icon: "uil:github-alt",
				label: "Github",
			},
			{
				href: "https://www.linkedin.com/in/roshan-parida/",
				icon: "uil:linkedin-alt",
				label: "LinkedIn",
			},
			{
				href: "https://www.instagram.com/lucianevenin/",
				icon: "uil:instagram",
				label: "Instagram",
			},
		],
		[],
	);

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

			<nav className="hidden flex-col space-y-2 md:flex">
				{tabs.map(({ id, label }) => (
					<motion.button
						key={id}
						onClick={() => {
							SoundManager.buttonPlay();
							setActiveTab(id);
						}}
						className={`terminal-button p-2 text-left transition-all duration-200 ${
							activeTab === id ? "bg-hover text-highlight" : ""
						}`}
					>
						{label}
					</motion.button>
				))}
			</nav>

			<nav className="no-scrollbar flex gap-3 overflow-x-auto py-2 md:hidden">
				{tabs.map(({ id, label }) => (
					<motion.button
						key={id}
						onClick={() => {
							SoundManager.buttonPlay();
							setActiveTab(id);
						}}
						className={`terminal-button px-4 py-2 text-base whitespace-nowrap transition-all duration-200 ${
							activeTab === id
								? "bg-hover text-highlight border-highlight"
								: "border-border-shadow"
						}`}
					>
						{label}
					</motion.button>
				))}
			</nav>

			{/* Social Access */}
			<div
				onClick={toggleNetwork}
				className={`border-border-shadow mt-8 border p-2 ${
					isMobile ? "cursor-pointer select-none" : ""
				}`}
			>
				<div className="flex items-center justify-between p-2 md:justify-center">
					<h3 className="text-highlight text-lg tracking-wide">
						SOCIAL ACCESS
					</h3>
					{isMobile && (
						<Icon
							icon="uil:angle-double-down"
							className={`size-6 transition-transform duration-200 ${
								networkOpen ? "rotate-180" : "rotate-0"
							}`}
						/>
					)}
				</div>

				<motion.div
					initial={false}
					animate={{
						height: !isMobile || networkOpen ? "auto" : 0,
						opacity: !isMobile || networkOpen ? 1 : 0,
					}}
					transition={{ duration: 0.25 }}
					className="overflow-hidden"
				>
					<div className="flex justify-around space-y-1 py-3 text-sm">
						{socialLinks.map(({ href, icon, label }) => (
							<a
								key={label}
								href={href}
								onClick={() => SoundManager.clickPlay()}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-highlight flex flex-col items-center gap-1 transition-all duration-300 ease-in-out hover:underline"
							>
								<Icon icon={icon} className="size-5" />
								<span>{label}</span>
							</a>
						))}
					</div>
				</motion.div>
			</div>

			{/* volume control or audio visualizer */}
			{!isMobile && (
				<div className="border-border-shadow mt-4 border p-6 text-center font-mono text-sm leading-none whitespace-pre md:block"></div>
			)}
		</motion.aside>
	);
}
