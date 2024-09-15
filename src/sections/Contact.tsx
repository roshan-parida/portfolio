import Image from "next/image";
import placeImg from "@/assets/images/roshan.jpg";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";

export const Contact = () => {
    return (
        <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <SectionHeader
                    eyebrow="Contact Me"
                    title="Let's collaborate"
                    description="Whether you have a project in mind, want to discuss an idea, or just say hello, feel free to reach out."
                />

                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    <Card>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center justify-center">
                            <ContactForm />

                            <div className="hidden lg:block">
                                <Image
                                    src={placeImg}
                                    alt="placeImg"
                                    className="size-[400px] object-cover border-2 border-white/20 shadow-lg rounded-3xl"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
