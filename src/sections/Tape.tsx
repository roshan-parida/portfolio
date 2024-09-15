import { Icon } from "@iconify/react/dist/iconify.js";
import { Fragment } from "react";

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Reliable",
];

export const Tape = () => {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {words.map((word, idx) => (
                                    <div
                                        key={idx}
                                        className="inline-flex gap-4 items-center"
                                    >
                                        <span className="text-gray-900 uppercase font-extrabold text-sm ">
                                            {word}
                                        </span>
                                        <Icon
                                            icon="ph:star-four-fill"
                                            className="size-6 text-gray-900 -rotate-12"
                                        />
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
