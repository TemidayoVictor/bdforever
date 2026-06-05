"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Rsvp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        attendance: "",
        guests: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real implementation, you'd send this to a Google Form or email service
        console.log("RSVP Submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="rsvp" className="bg-white py-20 px-4" ref={ref}>
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="section-subtitle text-gold tracking-widest uppercase text-sm font-semibold">
                        Guest Access
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-chocolate mt-2">
                        Exclusive Entry
                    </h2>
                    <div className="w-20 h-[2px] bg-gold mx-auto mt-4" />
                    <p className="text-chocolate/70 mt-6 max-w-md mx-auto leading-relaxed">
                        Please secure your access confirmation by{" "}
                        <span className="font-semibold text-chocolate">June 1st, 2026</span>
                    </p>
                </div>

                {/* Core Container Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-cream/40 border border-gold/20 rounded-3xl p-6 md:p-12 shadow-xl backdrop-blur-xs"
                >
                    <div className="grid md:grid-cols-12 gap-8 items-center">

                        {/* Left Column: Visual Pass Preview */}
                        <div className="md:col-span-5 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.03, rotate: -1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="w-full max-w-[280px] aspect-[3/4] bg-gradient-to-br from-[#063321] via-[#0b4630] to-[#042417] rounded-2xl p-6 text-white shadow-2xl border border-gold/40 flex flex-col justify-between relative overflow-hidden group"
                            >
                                {/* ================= EXTRA LUXURY INTERNAL PASS LINES ================= */}
                                {/* A subtle vintage inner ticket frame border */}
                                <div className="absolute inset-2.5 border border-gold/15 rounded-xl pointer-events-none" />

                                {/* ================= DECORATIVE BACKGROUND GRADIENTS ================= */}
                                {/* Rich emerald translucent glowing flare */}
                                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-400/20 transition-colors duration-500" />
                                <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-gold/5 blur-xl" />

                                {/* ================= PASS HEADER ================= */}
                                <div className="border-b border-gold/25 pb-4 text-center relative z-10">
                                      <span className="text-[9px] tracking-[0.25em] font-semibold uppercase text-gold/90 block">
                                        Official Guest Pass
                                      </span>
                                      <h4 className="font-serif text-base tracking-wide mt-1.5 text-white/95">
                                            Olubunmi & Temidayo
                                      </h4>
                                </div>

                                {/* ================= PASS CENTERPIECE ================= */}
                                <div className="text-center my-auto py-4 relative z-10">
                                    <div className="text-gold/80 text-[10px] tracking-[0.2em] uppercase mb-1">
                                        Admit One
                                    </div>

                                    {/* Main Tier Accent */}
                                    <div className="font-serif text-4xl text-gold font-light tracking-wide my-1">
                                        VIP
                                    </div>

                                    <div className="w-10 h-[1px] bg-gold/30 mx-auto my-3" />

                                    <p className="text-[10px] text-white/70 tracking-[0.15em] font-medium uppercase">
                                        Strictly By Invitation
                                    </p>
                                </div>

                                {/* ================= PASS FOOTER / SECURITY CODE ================= */}
                                <div className="pt-4 border-t border-gold/20 flex flex-col items-center gap-2 relative z-10">
                                    {/* Minimalist modern ticket barcode asset representation */}
                                    <div className="w-full h-8 bg-white/5 group-hover:bg-white/10 transition-colors rounded border border-white/5 flex items-center justify-center tracking-[0.4em] text-sm text-gold/70 font-mono select-none">
                                        ||| | |||| | ||| ||
                                    </div>

                                    <span className="text-[9px] text-white/40 tracking-[0.12em] font-mono uppercase">
                                        REF: BDFOREVER-2026
                                    </span>
                                </div>

                                {/* Vintage Ticket Side-Notch Accents (Simulates physical perforated ticket cut-outs) */}
                                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-background border-r border-gold/20 rounded-full -translate-y-1/2 z-20" />
                                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-background border-l border-gold/20 rounded-full -translate-y-1/2 z-20" />
                            </motion.div>
                        </div>

                        {/* Right Column: Information & Actions */}
                        <div className="md:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-semibold tracking-wider uppercase">
                                <span>⚠️</span> Strict Entry Protocol
                            </div>

                            <h3 className="text-2xl font-serif text-chocolate leading-tight">
                                Attendance Verification & Pass Cards
                            </h3>

                            <p className="text-chocolate/80 text-sm md:text-base leading-relaxed">
                                To guarantee an intimate and beautifully organized celebration, entry to the venue will require a physical <strong>Pass Card</strong>. No entry will be permitted without verification.
                            </p>

                            {/* Step-by-Step Instructions */}
                            <div className="space-y-4 pt-2">
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <p className="text-chocolate/70 text-sm">
                                        Reach out directly to the Bride or Groom via the channels below to confirm your attendance.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <p className="text-chocolate/70 text-sm">
                                        Provide your full name and the names of any approved companions.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        3
                                    </div>
                                    <p className="text-chocolate/70 text-sm">
                                        Your customized Pass Card will be issued to you upon verification.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Direct Links Section */}
                    <div className="mt-10 pt-8 border-t border-gold/20 text-center">
                        <p className="text-chocolate/60 text-xs tracking-wider uppercase font-semibold mb-4">
                            Tap below to RSVP instantly via WhatsApp or Call
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">

                            {/* Host 1 */}
                            <a
                                href="https://wa.me/08139943639"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-white hover:bg-cream rounded-xl border border-gold/20 group transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="text-left">
                                    <span className="text-xs text-gold font-medium block">Contact Groom</span>
                                    <span className="font-serif text-chocolate font-medium">Temidayo</span>
                                </div>
                                <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors text-sm">
                                  →
                                </span>
                            </a>

                            {/* Host 2 */}
                            <a
                                href="https://wa.me/08161244256"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-white hover:bg-cream rounded-xl border border-gold/20 group transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="text-left">
                                    <span className="text-xs text-gold font-medium block">Contact Bride</span>
                                    <span className="font-serif text-chocolate font-medium">Olubunmi</span>
                                </div>
                                <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors text-sm">
                                  →
                                </span>
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}