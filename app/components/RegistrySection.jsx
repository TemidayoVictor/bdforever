"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrySection() {
    const [copied, setCopied] = useState(false);

    // Replace these values with your actual banking specifications
    const bankDetails = {
        accountNumber: "8161244256",
        bankName: "OPAY",
        accountName: "Bunmi Folorunsho-Davies."
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(bankDetails.accountNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <section id="registry" className="bg-cream/10 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Structural Background Artistry */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-gold/30 to-transparent" />

            <div className="max-w-3xl mx-auto text-center relative z-10">

                {/* ================= SECTION HEADER ================= */}
                <div className="mb-12">
                    <p className="text-gold tracking-[0.3em] text-xs uppercase font-semibold block mb-3">
                        Love & Blessings
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-chocolate font-light tracking-wide">
                        Registry & Wishing Well
                    </h2>
                    <div className="w-12 h-[1px] bg-gold/30 mx-auto my-4" />
                </div>

                {/* ================= THE GRACEFUL NOTE ================= */}
                <p className="font-serif italic text-chocolate/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
                    "Your presence at our celebration is the greatest gift of all. However, should you wish to honor our new beginning with a contribution, a monetary gift to our wishing well would be warmly appreciated."
                </p>

                {/* ================= EDITORIAL BANK CARD CONTAINER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-gold/20 rounded-3xl p-8 md:p-10 shadow-sm max-w-lg mx-auto relative overflow-hidden group"
                >
                    {/* Decorative Corner Filigree Overlays */}
                    <div className="absolute inset-2 border border-gold/5 rounded-2xl pointer-events-none" />

                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold block mb-6">
                        Direct Bank Transfer
                    </span>

                    {/* Structured Detail Grid */}
                    <div className="space-y-5 text-left text-sm max-w-xs mx-auto mb-8">
                        <div className="flex flex-col gap-1 pb-3 border-b border-gold/10">
                            <span className="text-[10px] uppercase tracking-wider text-chocolate/40 font-medium">Bank</span>
                            <span className="font-serif text-base text-chocolate font-medium">{bankDetails.bankName}</span>
                        </div>

                        <div className="flex flex-col gap-1 pb-3 border-b border-gold/10">
                            <span className="text-[10px] uppercase tracking-wider text-chocolate/40 font-medium">Account Name</span>
                            <span className="text-chocolate/90 font-medium tracking-wide">{bankDetails.accountName}</span>
                        </div>

                        <div className="flex flex-col gap-1 relative">
                            <span className="text-[10px] uppercase tracking-wider text-chocolate/40 font-medium">Account Number</span>
                            <span className="font-mono text-xl sm:text-2xl text-gold tracking-wider font-semibold mt-0.5 block">
                                {bankDetails.accountNumber}
                            </span>
                        </div>
                    </div>

                    {/* ================= INTERACTIVE COPY BUTTON ================= */}
                    <button
                        onClick={handleCopy}
                        className={`w-full max-w-xs inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 relative overflow-hidden ${
                            copied
                                ? "bg-emerald-800 text-white border border-emerald-800 shadow-inner"
                                : "bg-chocolate text-white hover:bg-gold border border-chocolate hover:border-gold shadow-md hover:shadow-lg"
                        }`}
                    >
                        {copied ? (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2"
                            >
                                ✓ Copied Successfully
                            </motion.span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Copy Account Number
                            </span>
                        )}
                    </button>

                </motion.div>

                {/* Bottom Decorative Touch */}
                <p className="text-[10px] uppercase tracking-[0.2em] text-chocolate/40 mt-8 font-medium">
                    Thank you for celebrating our love story
                </p>

            </div>
        </section>
    );
}