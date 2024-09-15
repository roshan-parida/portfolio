import { Icon } from "@iconify/react/dist/iconify.js";

const footerLinks = [
    {
        title: "Twiter",
        href: "youtube.com",
    },
    {
        title: "Instagram",
        href: "#",
    },
    {
        title: "LinkedIn",
        href: "#",
    },
    {
        title: "GitHub",
        href: "#",
    },
];

export const Footer = () => {
    return (
        <footer className="relative -z-10 overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
            <div className="container z-10">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 z-10">
                    <div className="text-white/40">
                        &copy; 2024. All rights reserved.
                    </div>

                    <nav className="flex flex-col md:flex-row  items-center gap-8 z-10">
                        {footerLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="inline-flex items-center gap-1.5 z-10"
                            >
                                <span className="font-semibold z-10">
                                    {link.title}
                                </span>
                                <Icon
                                    icon="ph:arrow-circle-up-right-bold"
                                    className="size-4"
                                />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
