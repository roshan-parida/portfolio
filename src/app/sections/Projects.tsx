import Image from "next/image";
import placeHolder from "@/app/assets/images/placeholder.jpg";
import grainImage from "@/app/assets/images/grain.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";

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
];

export const Projects = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
                        Real World Results
                    </p>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
                    Featured Projects
                </h2>
                <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi nesciunt sint quo atque nulla optio dignissimos vero
                    velit numquam quas
                </p>

                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:rounded-3xl after:pointer-events-none pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                        >
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                                style={{
                                    backgroundImage: `url(${grainImage.src})`,
                                }}
                            ></div>

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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
