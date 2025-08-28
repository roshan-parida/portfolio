import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import roshanImage from "../assets/roshan.png";

const Roshan = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className="relative">
			<div className="flex flex-col gap-4 sm:gap-6 md:flex-row">
				{/* Photo Section */}
				<div className="w-full flex-shrink-0 md:w-1/3">
					<div className="border-border-shadow relative h-40 w-full border hover:border-none sm:h-48 md:h-60">
						<AnimatePresence>
							{!isLoaded && (
								<motion.div
									className="bg-border-shadow absolute inset-0 h-full w-full"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.8 }}
								/>
							)}
						</AnimatePresence>

						<motion.img
							src={roshanImage}
							alt="Roshan Parida"
							loading="lazy"
							onLoad={() => setIsLoaded(true)}
							initial={{ opacity: 0 }}
							animate={{ opacity: isLoaded ? 1 : 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="border-border-shadow hover:border-highlight h-full w-full border object-cover hover:border-2 hover:border-dashed"
						/>
					</div>

					<div className="text-highlight glitch mt-3 flex items-center justify-center text-center text-lg font-bold sm:text-xl md:text-2xl">
						ROSHAN PARIDA
					</div>
				</div>

				{/* Info Section */}
				<div className="w-full min-w-0 md:w-2/3">
					<div className="space-y-3 text-sm sm:text-base">
						<p className="break-words">
							&gt; DESIGNATION: Full-Stack Web Developer
						</p>
						<p className="break-words">
							&gt; AFFILIATION: Bachelors in Computer Applications
						</p>
						<p className="leading-relaxed break-words">
							&gt; PROFILE: Towards the later stages of my school
							life, I developed a strong desire to do something
							with computers. What began as a simple curiosity
							gradually evolved into a deep interest in learning
							how to build applications with beautiful
							UI/UX—crafted entirely from lines upon lines of code
							made up of nothing but letters.
						</p>

						<h3 className="text-highlight mt-4 mb-2 text-base sm:text-lg md:text-xl">
							SKILLS AUDIT
						</h3>
						<ul className="list-inside list-disc space-y-1 text-sm sm:text-base">
							<li className="break-words">
								JavaScript (React, Node.js, Vite.js, Next.js)
							</li>
							<li>C/C++, Python</li>
							<li>HTML5 & CSS3 (Tailwind)</li>
							<li>SQL & NoSQL Databases</li>
							<li>Linux System Administration</li>
							<li>Version Control (Git, Github)</li>
							<li>Deployment (Vercel, Render)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roshan;
