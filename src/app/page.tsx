import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Tape } from "./sections/Tape";

export default function Home() {
    return (
        <div className="">
            <Header />
            <Hero />
            <Projects />
            <Tape />
        </div>
    );
}
