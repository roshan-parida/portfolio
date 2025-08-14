import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import fluxPreview from "../assets/previews/flux-preview.png";
import pricewatchPreview from "../assets/previews/pricewatch-preview.png";
import sentinelPreview from "../assets/previews/sentinel-preview.png";
import { SoundManager } from "../utils/SoundManager";

type ProjectProps = {
	projectName: string;
	projectDate: string;
	projectShort: string;
	projectDesc: string[];
	projectRepo: string;
	projectLink: string;
	projectImage: string;
	isFirst?: boolean;
	isLast?: boolean;
};

const projectData: ProjectProps[] = [
	{
		projectName: "Sentinel",
		projectDate: "February 2025",
		projectShort: "Arduino Security System",
		projectDesc: [
			"Arduino-based project",
			"Integrated motion, RFID, and temperature sensors.",
			"Managed via web dashboard.",
		],
		projectRepo: "https://github.com/roshan-parida/sentinel",
		projectLink: "",
		projectImage: sentinelPreview,
	},
	{
		projectName: "PriceWatch",
		projectDate: "September 2024",
		projectShort: "Amazon Web Scrapper",
		projectDesc: [
			"Built in Next.js that monitors product prices on Amazon.",
			"Integrated Framer Motion for UI animations.",
			"Hosted on Vercel.",
		],
		projectRepo: "https://github.com/roshan-parida/pricewatch",
		projectLink: "https://pricewatch-delta.vercel.app/",
		projectImage: pricewatchPreview,
	},
	{
		projectName: "Flux",
		projectDate: "July 2024",
		projectShort: "Music Streaming Website",
		projectDesc: [
			"Built application using MongoDB, Express, Node.js, and Vite.js",
			"Includes music upload, playback, and user authentication.",
			"Hosted on Vercel (frontend) & Render (backend).",
		],
		projectRepo: "https://github.com/roshan-parida/flux",
		projectLink: "https://fluxwaves.vercel.app/",
		projectImage: fluxPreview,
	},
];

function Project({
	projectName,
	projectDate,
	projectShort,
	projectDesc,
	projectRepo,
	projectLink,
	projectImage,
	isFirst,
	isLast,
}: ProjectProps) {
	const borderTop = isFirst ? "" : "border-t";
	const borderBottom = isLast ? "" : "border-b";
	const borderClass = `border-border-shadow ${borderTop} ${borderBottom}`;

	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div
			className={`${borderClass} grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[1fr_320px] md:px-2 md:py-4`}
		>
			<div>
				<div className="mb-2 flex items-center justify-between">
					<h3 className="glitch text-highlight text-2xl font-bold tracking-wide">
						{projectName}
					</h3>
					<span className="text-sm">{projectDate}</span>
				</div>
				<span className="text-text-primary text-lg">
					{projectShort}
				</span>
				<ul className="mt-2 mb-3 list-disc pl-5 text-base leading-relaxed">
					{projectDesc.map((point, idx) => (
						<li key={idx}>{point}</li>
					))}
				</ul>
				<div className="flex items-center justify-between px-1">
					<a
						href={projectRepo}
						onClick={() => SoundManager.clickPlay()}
						target="_blank"
						rel="noopener noreferrer"
						className="text-highlight hover:underline"
					>
						&gt; code...
					</a>
					{projectLink !== "" && (
						<a
							href={projectLink}
							onClick={() => SoundManager.clickPlay()}
							target="_blank"
							rel="noopener noreferrer"
							className="text-highlight hover:underline"
						>
							&gt; visit...
						</a>
					)}
				</div>
			</div>

			<div className="relative h-48 w-full md:h-60">
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
					src={projectImage}
					alt={`Preview of ${projectName} - ${projectShort}`}
					loading="lazy"
					onLoad={() => setIsLoaded(true)}
					initial={{ opacity: 0 }}
					animate={{ opacity: isLoaded ? 1 : 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="border-border-shadow hover:border-highlight h-full w-full max-w-full border-2 object-top-left hover:border-dashed"
				/>
			</div>
		</div>
	);
}

const Projects = () => (
	<div className="relative">
		<>
			{projectData.map((proj, index) => (
				<Project
					key={index}
					{...proj}
					isFirst={index === 0}
					isLast={index === projectData.length - 1}
				/>
			))}
		</>
	</div>
);

export default Projects;
