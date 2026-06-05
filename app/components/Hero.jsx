"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({});

    const weddingDate = new Date("June 13, 2026 07:00:00");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = weddingDate - now;

            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (86400000)) / 3600000),
                    minutes: Math.floor((diff % 3600000) / 60000),
                    seconds: Math.floor((diff % 60000) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6"
        >
            {/*<div*/}
            {/*    className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-20"*/}
            {/*    style={{ backgroundImage: "url('/img1.jpg')" }}*/}
            {/*/>*/}

            {/*/!* Subtle gradient overlay to ensure text stays readable *!/*/}
            {/*<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 z-0" />*/}
            {/* 1. Fine-Line Outer Frame — Mimics Luxury Cardstock Invitations */}
            <div className="absolute inset-4 md:inset-6 border border-gold/20 rounded-2xl pointer-events-none z-20">
                {/* Subtle Ornamental Corners */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gold/40" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gold/40" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gold/40" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gold/40" />
            </div>

            {/* 2. Soft Textural Background Elements */}
            <div className="absolute inset-0 z-0 bg-radial from-cream/40 via-transparent to-transparent opacity-70" />
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cream/60 rounded-full blur-3xl mix-blend-multiply" />

            {/* 3. Main Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto py-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    {/* Subtle Tagline */}
                    <span className="text-gold text-xs md:text-sm uppercase tracking-[0.35em] font-semibold block">
                        We Are Getting Married
                    </span>

                    {/* Master Monogram Display */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-chocolate font-light leading-[1.1] tracking-wide">
                        Olubunmi
                        <span className="text-gold/40 block md:inline font-sans text-4xl sm:text-5xl md:text-6xl mx-4 my-2 md:my-0 font-light">
                          &
                        </span>
                        Temidayo
                    </h1>

                    {/* Elegant Subtitle */}
                    <p className="text-base md:text-lg text-chocolate/70 max-w-xl mx-auto font-serif italic tracking-wide leading-relaxed">
                        Two hearts, one love story, united by grace.
                    </p>

                    <div className="w-12 h-[1px] bg-gold/30 mx-auto my-6" />

                    {/* 4. Minimalist Luxury Countdown Timer */}
                    {timeLeft && Object.keys(timeLeft).length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex justify-center items-center gap-2.5 sm:gap-8 max-w-xl mx-auto py-4"
                        >
                            {Object.entries(timeLeft).map(([unit, value], idx) => (
                                <div key={unit} className="flex items-center">
                                    <div className="text-center group">
                                        <div className="text-2xl sm:text-4xl font-serif text-gold font-light tracking-sm">
                                            {String(value).padStart(2, "0")}
                                        </div>
                                        <div className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-chocolate/50 uppercase font-medium mt-1">
                                            {unit}
                                        </div>
                                    </div>

                                    {/* Subtle vertical separator dot between time elements */}
                                    {idx < Object.keys(timeLeft).length - 1 && (
                                        <span className="text-gold/20 text-xs font-light ml-2.5 sm:ml-8 self-center -translate-y-1 sm:-translate-y-2 select-none">
                                            •
                                        </span>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* 5. Luxury Call To Action Button */}
                    <div className="pt-4">
                        <button
                            onClick={() =>
                                document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group relative inline-flex items-center justify-center bg-chocolate text-white px-8 py-3.5 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            {/* Animated Inner Shine Layer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                            <span className="relative z-10 text-xs tracking-[0.2em] uppercase font-semibold text-gold group-hover:text-white transition-colors duration-300">
                                Request Guest Pass
                          </span>
                            <span className="relative z-10 text-gold group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-xs">
                                →
                            </span>

                            {/* Hover Solid Reveal Background */}
                            <div className="absolute inset-0 bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300 -z-0" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* 6. Pure Minimalist Scroll-Down Cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-chocolate/40 font-medium">
                  Scroll
                </span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-chocolate/30 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
                </div>
            </div>
        </section>
    );
}