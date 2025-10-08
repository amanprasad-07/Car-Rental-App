import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <section className="min-h-screen bg-neutral-900 text-white py-16 px-6 pt-30">
            <h2 className="text-4xl font-bold mb-3 text-amber-400">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
                Have questions, feedback, or need help with your booking?
                Our team at <span className="text-amber-400 font-semibold">DriveEase Rentals</span> is always ready to assist.
            </p>
            <div className="  flex flex-col w-full md:flex-row gap-10 items-start">
                {/* Left: Intro + Form */}
                <div className=" w-full">
                    <form className="space-y-5 bg-neutral-800 p-6 rounded-2xl shadow-lg border border-neutral-700">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-amber-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-amber-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-amber-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right: Contact Info */}
                <div className="bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-700 w-full ">
                    <h3 className="text-2xl font-semibold mb-6 text-amber-400">Contact Information</h3>

                    <div className="space-y-4 text-gray-300">
                        <p className="flex items-center gap-3">
                            <Phone className="text-amber-400" /> +91 98765 43210
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="text-amber-400" /> support@driveease.com
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin className="text-amber-400" /> MG Road, Kochi, Kerala, India
                        </p>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-lg font-semibold text-gray-400 mb-3">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-amber-400 transition"><Facebook /></a>
                            <a href="#" className="hover:text-amber-400 transition"><Instagram /></a>
                            <a href="#" className="hover:text-amber-400 transition"><Twitter /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
