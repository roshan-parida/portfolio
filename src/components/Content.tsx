import React from "react";

interface ContentProps {
	activeTab: "roshan" | "projects" | "contact";
	TABS: Record<string, React.ReactNode>;
}

export default function MainContentPanel({ activeTab, TABS }: ContentProps) {
	return (
		<div className="relative md:w-3/4">
			<div className="content-window border-border-shadow h-[500px] overflow-y-auto border bg-[#1e1e1e] p-4">
				{TABS[activeTab]}
			</div>
		</div>
	);
}
