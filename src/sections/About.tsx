"use client";
import Image from "next/image";
import dotImage from "@/assets/images/dotted.png";
import roshanImg from "@/assets/images/roshan.jpg";
import bookImage from "@/assets/images/lookback.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
	{
		title: "Javascipt",
		iconType: "fluent:javascript-24-filled",
	},
	{
		title: "HTML5",
		iconType: "flowbite:html-solid",
	},
	{
		title: "CSS3",
		iconType: "flowbite:css-solid",
	},
	{
		title: "Github",
		iconType: "flowbite:github-solid",
	},
	{
		title: "React",
		iconType: "flowbite:react-solid",
	},
	{
		title: "C/C++",
		iconType: "cib:cplusplus",
	},
	{
		title: "Python",
		iconType: "cib:python",
	},
];

const hobbies = [
	{
		title: "Reading",
		icon: "fluent:reading-list-24-filled",
		left: "5%",
		top: "10%",
	},
	{
		title: "Sketching",
		icon: "ri:sketching",
		left: "65%",
		top: "10%",
	},
	{
		title: "Web-Series",
		icon: "jam:screen",
		left: "10%",
		top: "40%",
	},
	{
		title: "Movies",
		icon: "jam:screen",
		left: "35%",
		top: "10%",
	},
	{
		title: "Anime",
		icon: "jam:screen",
		left: "45%",
		top: "40%",
	},
	{
		title: "Journaling",
		icon: "fluent:pen-24-filled",
		left: "20%",
		top: "65%",
	},
	{
		title: "Games",
		icon: "fluent:games-24-filled",
		left: "75%",
		top: "35%",
	},
];

export const About = () => {
	const constraintRef = useRef(null);

	return (
		<section id="about" className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="Glimpse Into My World"
					description="Learn mroe about who I am, what I do and what inspire me"
				/>

				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="My Reads"
								description="Explore the books shaping my perspectives."
							/>

							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image src={bookImage} alt="Book Cover" />
							</div>
						</Card>

						<Card className="h-[320px] md:col-span-3 lg:col-span-2">
							<CardHeader
								title="My Toolbox"
								description="Explore the technologies and tools used to craft expectional digital experiences."
								className=""
							/>

							<ToolboxItem
								toolboxItems={toolboxItems}
								className=""
								itemsWrapperClassName="animate-move-left [animation-duration:30s]"
							/>

							<ToolboxItem
								toolboxItems={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:15s]"
							/>
						</Card>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Beyond the Code"
								description="Explore my interests and hobbies beyond the code."
								className="px-6 py-6"
							/>

							<div
								className="relative flex-1 bg-opacity-5"
								style={{
									backgroundImage: `url(${dotImage.src})`,
									backgroundSize: "15rem 15rem",
								}}
								ref={constraintRef}
							>
								{hobbies.map((hobby, idx) => (
									<motion.div
										key={idx}
										className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
										drag
										dragConstraints={constraintRef}
									>
										<span className="font-medium text-gray-950">
											{hobby.title}
										</span>
										<span>
											<Icon
												icon={hobby.icon}
												className="size-6 text-gray-950"
											/>
										</span>
									</motion.div>
								))}
							</div>
						</Card>

						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448184.1134652341!2d77.12336456635295!3d28.64549338718438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1725697377184!5m2!1sen!2sin"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-full border-none object-cover rounded-3xl outline outline-2 -outline-offset-2 outline-gray-950/50 antialiased"
							></iframe>

							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full">
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>

								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

								<Image
									src={roshanImg}
									alt="Image of roshan"
									className="size-24 object-cover mb-2 rounded-full border-4 border-gray-700 shadow-lg antialiased"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
