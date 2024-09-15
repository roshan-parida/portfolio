"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            .then(
                (result) => {
                    console.log("Email successfully sent:", result.text);
                    toast.success(
                        "Thank you for your message! We will get back to you shortly."
                    );
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log("Failed to send email:", error.text);
                    toast.error(
                        "Oops! Something went wrong. Please try sending your message again."
                    );
                }
            );
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-4 p-8 md:p-10"
            >
                <div className="flex flex-col">
                    <label
                        htmlFor="name"
                        className="p-1 text-sm md:text-base font-medium"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 px-4 py-2 rounded-lg bg-gray-900 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="email"
                        className="p-1 text-sm md:text-base font-medium"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 px-4 py-2 rounded-lg bg-gray-900 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="message"
                        className="p-1 text-sm md:text-base font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1 px-4 py-2 rounded-lg bg-gray-900 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-white  text-gray-950 border border-white/50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-3 mt-8 shadow-lg"
                >
                    Send Message
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};
