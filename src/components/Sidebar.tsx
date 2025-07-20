interface SidebarProps {
	activeTab: string;
	setActiveTab: (tab: "roshan" | "projects" | "contact") => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
	return (
		<div className="mb-4 md:mb-0 md:w-1/4">
			<h2 className="border-border-shadow mb-2 border-b-2 pb-1 text-xl">
				DIRECTORY
			</h2>
			<nav className="flex flex-col space-y-2">
				<button
					onClick={() => setActiveTab("roshan")}
					className={`terminal-button p-2 text-left ${activeTab === "roshan" ? "bg-hover text-highlight" : ""}`}
				>
					01_ROSHAN.txt
				</button>
				<button
					onClick={() => setActiveTab("projects")}
					className={`terminal-button p-2 text-left ${activeTab === "projects" ? "bg-hover text-highlight" : ""}`}
				>
					02_PROJECTS.log
				</button>
				<button
					onClick={() => setActiveTab("contact")}
					className={`terminal-button p-2 text-left ${activeTab === "contact" ? "bg-hover text-highlight" : ""}`}
				>
					03_CONTACT.inf
				</button>
			</nav>

			<div className="border-border-shadow mt-8 border p-2">
				<h3 className="text-highlight mb-2 text-lg">NETWORK ACCESS</h3>
				<a
					href="https://github.com/roshan-parida"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-sm hover:underline"
				>
					&gt; [Gh] Github
				</a>
				<a
					href="https://www.linkedin.com/in/roshan-parida/"
					target="_blank"
					rel="noopener noreferrer"
					className="block text-sm hover:underline"
				>
					&gt; [Ln] LinkedIn
				</a>
				<a
					href="https://www.instagram.com/roshan_ot23/"
					target="_blank"
					rel="noopener noreferrer"
					className="block text-sm hover:underline"
				>
					&gt; [In] Instagram
				</a>
			</div>

			<div className="border-border-shadow mt-8 border p-2">
				<h3 className="text-highlight mb-2 text-lg">SYSTEM STATUS</h3>
				<p className="text-sm">
					&gt; CONNECTION:{" "}
					<span className="text-highlight animate-pulse">SECURE</span>
				</p>
				<p className="text-sm">&gt; ID VERIFIED: LUCIAN</p>
				<p className="text-sm">&gt; CLEARANCE: LEVEL 7</p>
			</div>
		</div>
	);
}
