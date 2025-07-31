import roshanImage from "../assets/roshan.png";

const Roshan = () => {
	return (
		<div className="relative">
			<div className="flex flex-col gap-6 md:flex-row">
				{/* Photo Section */}
				<div className="w-full md:w-1/3">
					<div className="border-border-shadow hover:border-highlight border hover:border-dashed">
						<img
							src={roshanImage}
							alt="Roshan Parida"
							className="w-full object-cover hover:animate-pulse"
						/>
					</div>
					<div className="text-highlight glitch mt-3 flex items-center justify-center text-2xl">
						ROSHAN PARIDA
					</div>
				</div>

				{/* Info Section */}
				<div className="w-full md:w-2/3">
					<p className="mb-2">
						&gt; DESIGNATION: Full-Stack Web Developer
					</p>
					<p className="mb-2">
						&gt; AFFILIATION: Bachelors in Computer Applications
					</p>
					<p className="mb-4">
						&gt; PROFILE: Towards the later stages of my school
						life, I developed a strong desire to do something with
						computers. What began as a simple curiosity gradually
						evolved into a deep interest in learning how to build
						applications with beautiful UI/UX—crafted entirely from
						lines upon lines of code made up of nothing but letters.
					</p>

					<h3 className="text-highlight mt-4 mb-2 text-xl">
						SKILLS AUDIT
					</h3>
					<ul className="list-inside list-disc space-y-1">
						<li>JavaScript (React, Node.js, Vite.js, Next.js)</li>
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
	);
};

export default Roshan;
