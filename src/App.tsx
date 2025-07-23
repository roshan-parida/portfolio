import { useEffect, useState } from "react";

import Roshan from "./pages/Roshan";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BootScreen from "./components/BootScreen";

import { motion } from "motion/react";

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
		<div className="crt-effect flex min-h-screen w-full items-center justify-center p-4 md:p-8">
			<motion.main
				initial={{ scale: 0.95, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: "spring", stiffness: 160, damping: 24 }}
				className="border-border-shadow drop-shadow-highlight bg-bg-main w-full max-w-6xl overflow-hidden border-2"
			>
				<Header systemTime={systemTime} />
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					className="flex flex-col space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-4"
				>
					<Sidebar
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<Content activeTab={activeTab} TABS={TABS} />
				</motion.div>
			</motion.main>
		</div>
	);
}

export default App;
