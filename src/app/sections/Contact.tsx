import { Icon } from "@iconify/react/dist/iconify.js";
import { Card } from "@/app/components/Card";

export const Contact = () => {
    return (
        <div className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <Card>
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                            <div className="">
                                <h2 className="font-serif text-2xl md:text-3xl">
                                    Let&apos;s create something great together
                                </h2>

                                <p className="text-sm md:text-base mt-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quibusdam voluptates dolor
                                    voluptate cupiditate voluptatem laboriosam
                                    voluptatum.
                                </p>
                            </div>

                            <div className="">
                                <button className="h-12 text-white bg-gray-900 inline-flex items-center px-6 rounded-xl gap-2 w-max border border-gray-900">
                                    <span className="font-semibold">
                                        Contact Me
                                    </span>

                                    <Icon
                                        icon="ph:arrow-circle-up-right-bold"
                                        className="size-4"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
