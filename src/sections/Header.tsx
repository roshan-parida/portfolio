"use client";
import { useEffect, useState } from "react";

export const Header = () => {
    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            threshold: [0.3, 0.6, 0.9],
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a
                    href="#home"
                    className={`nav-item ${
                        activeSection === "#home"
                            ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                            : ""
                    }`}
                >
                    Home
                </a>
                <a
                    href="#projects"
                    className={`nav-item ${
                        activeSection === "#projects"
                            ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                            : ""
                    }`}
                >
                    Projects
                </a>
                <a
                    href="#about"
                    className={`nav-item ${
                        activeSection === "#about"
                            ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                            : ""
                    }`}
                >
                    About
                </a>
                <a
                    href="#contact"
                    className={`nav-item ${
                        activeSection === "#contact"
                            ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                            : ""
                    }`}
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};
