"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "Our Story", "Events", "Gallery", "RSVP"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase().replace(" ", "-"));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div
                        onClick={() => scrollToSection("Home")}
                        className="text-2xl font-serif cursor-pointer"
                    >
                        <span className="text-gold">T</span>
                        <span className="text-chocolate">&</span>
                        <span className="text-gold">O</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-10">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-chocolate hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-2xl"
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 md:hidden"
                >
                    <div className="flex flex-col items-center py-8 gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-chocolate hover:text-gold text-lg"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}