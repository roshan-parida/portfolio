import { Icon } from "@iconify/react";

export const TechIcon = ({ component }: { component: string }) => {
    return (
        <div>
            <Icon icon={component} className="size-10 text-sky-400" />
        </div>
    );
};
