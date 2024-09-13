import Image from "next/image";
import roshanImg from "@/assets/images/roshan.jpg";
import grainImage from "@/assets/images/grain.jpeg";
import { Icon } from "@iconify/react";
import { HeroOrbit } from "@/components/HeroOrbit";

export const Hero = () => {
    return (
        <section
            id="home"
            className="py-32 md:py-48 lg:py-64 relative z-0 overflow-x-clip"
        >
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
                <div
                    className="absolute inset-0 opacity-[0.01] pointer-events-none"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                ></div>

                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>

                <HeroOrbit
                    size={430}
                    rotation={-14}
                    shouldOrbit
                    orbitDuration="90s"
                    shouldSpin
                    spinDuration="12s"
                >
                    <Icon
                        icon="lucide:sparkle"
                        className="size-8 text-emerald-300/20"
                    />
                </HeroOrbit>

                <HeroOrbit
                    size={440}
                    rotation={79}
                    shouldOrbit
                    orbitDuration="92s"
                    shouldSpin
                    spinDuration="12s"
                >
                    <Icon
                        icon="lucide:sparkle"
                        className="size-5 text-emerald-300/20"
                    />
                </HeroOrbit>

                <HeroOrbit
                    size={520}
                    rotation={-41}
                    shouldOrbit
                    orbitDuration="94s"
                    shouldSpin
                    spinDuration="4s"
                >
                    <div className="size-2 bg-emerald-300/20 rounded-full"></div>
                </HeroOrbit>

                <HeroOrbit
                    size={530}
                    rotation={178}
                    shouldOrbit
                    orbitDuration="96s"
                    shouldSpin
                    spinDuration="12s"
                >
                    <Icon
                        icon="lucide:sparkle"
                        className="size-10 text-emerald-300/20"
                    />
                </HeroOrbit>

                <HeroOrbit
                    size={550}
                    rotation={20}
                    shouldOrbit
                    orbitDuration="98s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <Icon
                        icon="ph:star-four-fill"
                        className="size-12 text-emerald-300"
                    />
                </HeroOrbit>

                <HeroOrbit
                    size={590}
                    rotation={98}
                    shouldOrbit
                    orbitDuration="100s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <Icon
                        icon="ph:star-four-fill"
                        className="size-8 text-emerald-300"
                    />
                </HeroOrbit>

                <HeroOrbit
                    size={650}
                    rotation={-5}
                    shouldOrbit
                    orbitDuration="102s"
                    shouldSpin
                    spinDuration="4s"
                >
                    <div className="size-2 bg-emerald-300/20 rounded-full"></div>
                </HeroOrbit>

                <HeroOrbit
                    size={710}
                    rotation={144}
                    shouldOrbit
                    orbitDuration="104s"
                    shouldSpin
                    spinDuration="12s"
                >
                    <Icon
                        icon="lucide:sparkle"
                        className="size-14 text-emerald-300/20"
                    />
                </HeroOrbit>

                <HeroOrbit
                    size={720}
                    rotation={85}
                    shouldOrbit
                    orbitDuration="106s"
                    shouldSpin
                    spinDuration="10s"
                >
                    <div className="size-3 bg-emerald-300/20 rounded-full"></div>
                </HeroOrbit>

                <HeroOrbit
                    size={800}
                    rotation={-72}
                    shouldOrbit
                    orbitDuration="108s"
                    shouldSpin
                    spinDuration="10s"
                >
                    <Icon
                        icon="ph:star-four-fill"
                        className="size-28 text-emerald-300"
                    />
                </HeroOrbit>
            </div>

            <div className="container">
                <div className="flex flex-col items-center">
                    <Image
                        src={roshanImg}
                        alt="Image of roshan"
                        className="w-[125px] h-[125px] object-cover mb-2 rounded-full border-4 border-gray-700 shadow-lg"
                    />

                    <div className="inline-flex items-center gap-2 bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-full shadow-md">
                        <div className="size-2.5 bg-green-500 rounded-full relative">
                            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                        </div>

                        <div className="text-sm font-semibold text-gray-300">
                            available for new project
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto">
                    <h1 className="font-serif md:text-5xl text-3xl text-center mt-8 tracking-wide">
                        Hi, I&apos;m Roshan
                    </h1>

                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        a passionate{" "}
                        <span className="font-bold text-emerald-300">
                            BCA Student
                        </span>{" "}
                        exploring the worlds of web, AI, and software
                        development. Driven by curiosity and a relentless quest
                        to learn something new every day.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 mt-8 rounded-xl"
                    >
                        <span className="font-semibold">Download Resume</span>
                        <Icon icon="tabler:circle-arrow-down" className="" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 border boder-white bg-white text-gray-900 h-12 px-6 mt-8 rounded-xl"
                    >
                        <Icon icon="tabler:circle-arrow-down" />
                        <span className="font-semibold">
                            Let&apos;s Connect
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};
