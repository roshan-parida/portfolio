const Roshan = () => {
	return (
		<div className="relative">
			<h2 className="text-highlight glitch mb-4 text-2xl">
				ROSHAN PARIDA
			</h2>
			<div>
				<p className="mb-2">
					&gt; DESIGNATION: Full-Stack Web Developer
				</p>
				<p className="mb-2">&gt; AFFILIATION: BCA Graduated</p>
				<p className="mb-4">
					&gt; PROFILE: hands-on MERN stack training and a focus on
					full-stack development. Interested in building scalable web
					apps and exploring test automation.
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

				{/* Verified Stamp */}
				<div className="stamp stamp-approved top-10 right-10">
					VERIFIED
				</div>
			</div>
		</div>
	);
};

export default Roshan;
