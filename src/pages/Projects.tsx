const Projects = () => {
	return (
		<div className="relative">
			<h2 className="text-highlight glitch mb-4 text-2xl">
				PROJECT EVIDENCES
			</h2>

			{/* Project 001 */}
			<div className="border-border-shadow mb-4 border-t-2 pt-2">
				<h3 className="text-xl">Flux [Case #001]</h3>
				<p className="mb-2 text-sm">Music Streaming App</p>
				<a href="#" className="text-highlight hover:underline">
					&gt; Examine Evidence...
				</a>
			</div>

			{/* Project 002 */}
			<div className="border-border-shadow mb-4 border-t-2 pt-2">
				<h3 className="text-xl">PriceWatch [Case #002]</h3>
				<p className="mb-2 text-sm">Amazon Price Tracker</p>
				<a href="#" className="text-highlight hover:underline">
					&gt; Examine Evidence...
				</a>
			</div>

			{/* Project 003 */}
			<div className="border-border-shadow mb-4 border-t-2 pt-2">
				<h3 className="text-xl">Sentinel [Case #003]</h3>
				<p className="mb-2 text-sm">
					Arduino Security System with Motion Detection
				</p>
				<a href="#" className="text-highlight hover:underline">
					&gt; Examine Evidence...
				</a>
			</div>

			{/* Classified Stamp */}
			<div className="relative mt-8">
				<div className="stamp stamp-denied right-8 bottom-2">
					CLASSIFIED
				</div>
			</div>
		</div>
	);
};

export default Projects;
