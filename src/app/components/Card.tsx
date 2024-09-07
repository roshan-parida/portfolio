import grainImage from "@/app/assets/images/grain.jpeg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
    className,
    children,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <div
            className={twMerge(
                "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:rounded-3xl after:pointer-events-none",
                className
            )}
        >
            <div
                className="absolute inset-0 -z-10 opacity-[0.01]"
                style={{
                    backgroundImage: `url(${grainImage.src})`,
                }}
            ></div>

            {children}
        </div>
    );
};
