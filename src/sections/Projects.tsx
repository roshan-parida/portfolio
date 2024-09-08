import Image from "next/image";
import placeHolder from "@/assets/images/placeholder.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
    {
        source: "MakeIntern",
        year: "2024",
        title: "Flux: Music Streaming Web Application",
        result: [
            { title: "something" },
            { title: "something" },
            { title: "something" },
        ],
        link: "https://fluxwaves.vercel.app/",
        image: placeHolder,
    },

    {
        source: "Self-Project",
        year: "2024",
        title: "Portfolio: All there is to know about me",
        result: [
            { title: "something" },
            { title: "something" },
            { title: "something" },
        ],
        link: "https://roshansportfolio.vercel.app/",
        image: placeHolder,
    },

    {
        source: "IINTM (Minor Project)",
        year: "2024",
        title: "Web Scrapper: under development",
        result: [
            { title: "something" },
            { title: "something" },
            { title: "something" },
        ],
        link: "#",
        image: placeHolder,
    },
];

export const Projects = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    title="Featured Projects"
                    eyebrow="Real World Results"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi nesciunt sint quo atque nulla optio dignissimos vero
                    velit numquam quas"
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

                                    <a href={project.link}>
                                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                            <span>Vist Live Site</span>
                                            <Icon
                                                icon="ph:arrow-circle-up-right-bold"
                                                className="size-4"
                                            />
                                        </button>
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
