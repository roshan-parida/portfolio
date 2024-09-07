import Image from "next/image";
import roshanImg from "@/app/assets/images/roshan.jpg";
import bookImage from "@/app/assets/images/chainsawman.png";
import { SectionHeader } from "@/app/components/SectionHeader";
import { Card } from "@/app/components/Card";
import { CardHeader } from "@/app/components/CardHeader";
import { ToolboxItem } from "@/app/components/ToolboxItem";
import { Icon } from "@iconify/react/dist/iconify.js";

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
        title: "CCS3",
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
        top: "5%",
    },
    {
        title: "Sketching",
        icon: "ri:sketching",
        left: "50%",
        top: "5%",
    },
    {
        title: "Web-Series/Movies/Anime",
        icon: "jam:screen",
        left: "10%",
        top: "35%",
    },
    {
        title: "Video Games",
        icon: "fluent:games-24-filled",
        left: "35%",
        top: "40%",
    },
];

export const About = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="Glimpse Into My World"
                    description="Learn mroe about who I am, what I do and what inspire me"
                />

                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                        <Card className="h-[320px] col-span-2 lg:col-span-1">
                            <CardHeader
                                title="My Reads"
                                description="Explore the books shaping my perspectives."
                            />

                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={bookImage} alt="Book Cover" />
                            </div>
                        </Card>

                        <Card className="h-[320px] col-span-3 lg:col-span-2">
                            <CardHeader
                                title="My Toolbox"
                                description="Explore the technologies and tools used to craft expectional digital experiences."
                                className=""
                            />

                            <ToolboxItem
                                toolboxItems={toolboxItems}
                                className=""
                            />

                            <ToolboxItem
                                toolboxItems={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="-translate-x-1/2"
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

                            <div className="relative flex-1">
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
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
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448184.1134652341!2d77.12336456635295!3d28.64549338718438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1725697377184!5m2!1sen!2sin"
                                allowFullScreen
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover p-[2px] rounded-3xl"
                            ></iframe>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full antialiased">
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
        </div>
    );
};
