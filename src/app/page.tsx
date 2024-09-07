import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Tape } from "@/app/sections/Tape";
import { About } from "@/app/sections/About";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
    return (
        <div className="">
            <Header />
            <Hero />
            <Projects />
            <Tape />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}
