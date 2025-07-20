import { useEffect, useState } from "react";
import { SoundManager } from "./utils/SoundManager";

import Roshan from "./pages/Roshan";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const bootSequenceLines = [
	"MOE BIOS v2.3 INITIALIZING...",
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

const TABS = {
	roshan: <Roshan />,
	projects: <Projects />,
	contact: <Contact />,
};

function App() {
	const [bootIndex, setBootIndex] = useState(0);
	const [bootComplete, setBootComplete] = useState(false);
	const [activeTab, setActiveTab] = useState<keyof typeof TABS>("roshan");
	const [systemTime, setSystemTime] = useState("");

	useEffect(() => {
		if (bootIndex < bootSequenceLines.length) {
			const timeout = setTimeout(
				() => setBootIndex(bootIndex + 1),
				Math.random() * 200 + 50,
			);
			return () => clearTimeout(timeout);
		} else {
			setTimeout(() => setBootComplete(true), 1000);
		}

		if (bootIndex === 0) {
			SoundManager.boot();
		}
	}, [bootIndex]);

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

	if (!bootComplete) {
		return (
			<div className="bg-bg-main fixed inset-0 z-50 flex flex-col items-center justify-center text-lg">
				{bootSequenceLines.slice(0, bootIndex).map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>
		);
	}

	return (
		<div className="crt-effect p-4 md:p-8">
			<div className="border-border-shadow drop-shadow-highlight mx-auto max-w-5xl border-2">
				<Header systemTime={systemTime} />
				<div className="p-4 md:flex md:space-x-4">
					<Sidebar
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<Content activeTab={activeTab} TABS={TABS} />
				</div>
			</div>
		</div>
	);
}

export default App;
