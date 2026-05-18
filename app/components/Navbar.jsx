"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "Our Story", "Events", "Gallery", "RSVP"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase().replace(" ", "-"));
        if (element) {
            // Offset scroll to account for fixed navbar height
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* ================= MAIN NAVIGATION BAR ================= */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "py-4 px-4 md:px-8"
                        : "py-8 px-6 md:px-12"
                }`}
            >
                {/* Dynamic Wrapper: Transmutes smoothly from flat layout to a solid high-contrast light frame */}
                <div
                    className={`max-w-7xl mx-auto px-6 py-3.5 rounded-full flex justify-between items-center transition-all duration-500 ${
                        scrolled
                            ? "bg-[#fdfbf7] shadow-md border border-gold/20"
                            : "bg-transparent border-transparent"
                    }`}
                >
                    {/* LUXURY INTERLOCKING LOGO MARK */}
                    <div
                        onClick={() => scrollToSection("Home")}
                        className="flex items-center gap-1.5 cursor-pointer group select-none"
                    >
                        {/* Removed mobileMenuOpen color switch -> Stays text-chocolate */}
                        <span className="font-serif text-2xl font-light tracking-tighter text-chocolate group-hover:text-gold transition-colors duration-300">
                          T
                        </span>
                        <span className="font-sans text-[11px] uppercase tracking-widest text-gold/60 font-light mt-1">
                          ×
                        </span>
                        {/* Removed mobileMenuOpen color switch -> Stays text-chocolate */}
                        <span className="font-serif text-2xl font-light tracking-tighter text-chocolate group-hover:text-gold transition-colors duration-300">
                          O
                        </span>
                    </div>

                    {/* DESKTOP NAV ITEMS */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="relative text-chocolate/80 hover:text-gold text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-300 group py-1"
                            >
                                {item}
                                {/* Micro Animated Underline */}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </button>
                        ))}
                    </div>

                    {/* MINIMALIST HAMBURGER TRIGGER BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative w-6 h-5 flex flex-col justify-between items-end group focus:outline-none z-50"
                        aria-label="Toggle Navigation Menu"
                    >
                        {/* Removed !bg-white override configurations -> Lines retain original chocolate values */}
                        <span
                            className={`h-[1.5px] bg-chocolate transition-all duration-300 ease-out ${
                                mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                            }`}
                        />
                        <span
                            className={`h-[1.5px] bg-chocolate transition-all duration-200 ease-out ${
                                mobileMenuOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"
                            }`}
                        />
                        <span
                            className={`h-[1.5px] bg-chocolate transition-all duration-300 ease-out ${
                                mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5 group-hover:w-6"
                            }`}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* ================= HIGH-CONTRAST FULLSCREEN MOBILE OVERLAY ================= */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 bg-[#052316] z-40 md:hidden flex flex-col justify-center items-center"
                    >
                        {/* Soft decorative background monogram in background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                            <span className="font-serif text-[50vw] text-gold font-light">T</span>
                        </div>

                        <div className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
                            {navItems.map((item, idx) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ delay: idx * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => scrollToSection(item)}
                                    className="text-white/90 hover:text-gold active:text-gold font-serif text-3xl font-light tracking-wide transition-colors py-2 block w-full text-center group relative focus:outline-none"
                                >
                                    <span className="inline-block relative">
                                        {item}
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    </span>
                                </motion.button>
                            ))}

                            <div className="w-12 h-[1px] bg-gold/20 my-4" />

                            {/* Micro Footer Inside Mobile Drawer */}
                            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80 font-medium">
                                Temidayo & Olubunmi
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}