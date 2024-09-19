import { Icon } from "@iconify/react/dist/iconify.js";

const scoialLinks = [
	{
		title: "roshan_ot23",
		href: "https://instagram.com/roshan_ot23/",
		icon: "bi:instagram",
	},
	{
		title: "roshan_ot23",
		href: "https://x.com/roshan_ot23",
		icon: "bi:twitter-x",
	},
];

const profLinks = [
	{
		title: "roshan-parida",
		href: "https://linkedin.com/in/roshan-parida/",
		icon: "bi:linkedin",
	},
	{
		title: "roshan-parida",
		href: "https://github.com/roshan-parida",
		icon: "bi:github",
	},
];

export const Footer = () => {
	return (
		<footer className="relative z-0 overflow-x-clip">
			<div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
			<div className="container">
				<div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
					<div className="text-white/40 font-mono cursor-default">
						&copy; 2024. All rights reserved.
					</div>

					<nav className="flex flex-col md:flex-row items-center gap-8">
						<div className="flex items-center justify-center gap-3">
							{scoialLinks.map((link, idx) => (
								<a
									key={idx}
									href={link.href}
									target="_blank"
									className="inline-flex items-center gap-1"
								>
									<Icon
										icon={link.icon}
										className="size-5 hover:text-sky-400 hover:scale-110 transition-all ease-in-out"
									/>
								</a>
							))}
							<span className="font-semibold cursor-default bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-mono items-center justify-center">
								roshan_ot23
							</span>
						</div>

						<div className="flex items-center justify-center gap-3">
							{profLinks.map((link, idx) => (
								<a
									key={idx}
									href={link.href}
									target="_blank"
									className="inline-flex items-center gap-1"
								>
									<Icon
										icon={link.icon}
										className="size-5 hover:text-sky-400 hover:scale-110 transition-all ease-in-out"
									/>
								</a>
							))}
							<span className="font-semibold cursor-default bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-mono items-center justify-center">
								roshan_parida
							</span>
						</div>
					</nav>
				</div>
			</div>
		</footer>
	);
};
