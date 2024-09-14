import Image from "next/image";
import placeHolder from "@/assets/mockups/placeholder-mockup.png";
import fluxMock from "@/assets/mockups/flux-mockup.png";
import portfolioMock from "@/assets/mockups/protfolio-mockup.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        source: "MakeIntern",
        year: "2024",
        title: "Flux: Music Streaming Web Application",
        result: [
            { title: "Hands-on experience with the MERN stack." },
            { title: "Developed the frontend using React+Vite," },
            { title: "Deployed using Vercel and Render." },
        ],
        link: "https://fluxwaves.vercel.app/",
        image: fluxMock,
        ping: true,
    },

    {
        source: "Personal Project",
        year: "2024",
        title: "Portfolio: Showcasing My Journey",
        result: [
            { title: "Developed using Next.js" },
            { title: "Implemented animations with Framer Motion " },
            { title: "Deployed using Vercel for seamless hosting" },
        ],
        link: "https://roshansportfolio.vercel.app/",
        image: portfolioMock,
        ping: true,
    },

    {
        source: "IINTM (Minor Project)",
        year: "2024",
        title: "Web Scrapper: under development",
        result: [{ title: "..." }, { title: "..." }, { title: "..." }],
        link: "",
        image: placeHolder,
        ping: false,
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    title="Featured Projects"
                    eyebrow="Showcasing Innovation"
                    description="Explore a curated selection of standout projects that showcase my technical proficiency and innovative thinking"
                />

                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card
                            key={project.title}
                            className="pt-8 pb-0 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                            style={{
                                top: `calc(64px + ${projectIndex * 40}px) `,
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>{project.source}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                                        {project.title}
                                    </h3>

                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.result.map((result) => (
                                            <li
                                                key={result.title}
                                                className="flex gap-2 text-sm md:text-base text-white/50"
                                            >
                                                <Icon
                                                    icon="lets-icons:check-ring-round"
                                                    className="size-5 md:size-6"
                                                />
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={
                                            project.ping
                                                ? project.link
                                                : undefined
                                        }
                                        target={
                                            project.ping ? "_blank" : undefined
                                        }
                                        rel={
                                            project.ping
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                    >
                                        <div className="bg-white  text-gray-950 border border-white/50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-3 mt-8 shadow-lg">
                                            <span>Visit Live Site</span>

                                            <div
                                                className={`size-2.5 rounded-full relative ${
                                                    project.ping
                                                        ? "bg-green-500"
                                                        : "bg-yellow-500"
                                                }`}
                                            >
                                                <div
                                                    className={`absolute inset-0 rounded-full animate-ping-large ${
                                                        project.ping
                                                            ? "bg-green-500"
                                                            : "bg-yellow-500"
                                                    }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-3xl"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
