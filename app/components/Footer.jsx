"use client";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-chocolate text-white/70 py-16 border-t border-gold/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center">

                    {/* Logo / Monogram Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 group"
                    >
                        <div className="text-4xl font-serif mb-3 tracking-wide">
                            <span className="text-gold font-light">T</span>
                            <span className="text-gold/40 mx-2 text-2xl font-sans">&</span>
                            <span className="text-gold font-light">O</span>
                        </div>

                        {/* Wedding Hashtag */}
                        <p className="text-gold/80 text-xs tracking-[0.25em] uppercase font-medium bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-xs inline-block">
                            #BDForever2026
                        </p>
                    </motion.div>

                    {/* Elegant Navigation Links (Optional but looks highly professional) */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm tracking-wider font-light text-white/60">
                        <a href="#story" className="hover:text-gold transition-colors duration-300">Our Story</a>
                        <a href="#timeline" className="hover:text-gold transition-colors duration-300">Schedule</a>
                        <a href="#rsvp" className="hover:text-gold transition-colors duration-300">Pass Card</a>
                    </div>

                    {/* Social Icons / Interactions Line */}
                    <div className="flex gap-6 mb-10">
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        {/* Email */}
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 transform hover:-translate-y-1" aria-label="Email">
                            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>

                    <div className="w-12 h-px bg-gold/20 mb-8" />

                    {/* Copyright Information */}
                    <p className="text-xs tracking-wider opacity-50 uppercase font-medium">
                        © {currentYear} Temidayo & Olubunmi — June 13, 2026
                    </p>

                    <p className="text-[10px] tracking-widest opacity-30 uppercase font-mono mt-3">
                        Designed for the beginning of forever
                    </p>
                </div>
            </div>
        </footer>
    );
}