import { useEffect, useState } from "react";

import Roshan from "./pages/Roshan";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BootScreen from "./components/BootScreen";

const TABS = {
	roshan: <Roshan />,
	projects: <Projects />,
	contact: <Contact />,
};

function App() {
	const [bootComplete, setBootComplete] = useState(false);
	const [activeTab, setActiveTab] = useState<keyof typeof TABS>("roshan");
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

	if (!bootComplete) {
		return <BootScreen onBootComplete={() => setBootComplete(true)} />;
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
