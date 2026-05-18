"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stories = [
    {
        name: "Olubunmi Helen",
        role: "Bride",
        content:
            "Temidayo has always been my safe place. From the very first conversation, I knew he was different — intentional, kind, and deeply devoted to God. He challenges me to grow, loves me unconditionally, and makes every day feel like a gift. I can't wait to be his wife.",
        image: "/bride.jpg",
        delay: 0.2,
    },
    {
        name: "Temidayo Victor",
        role: "Groom",
        content:
            "I first saw Bunmi at a church event, and something about her grace stood out. We became friends, then prayer partners, and somewhere along the line, I knew she was the one God had prepared for me. Her faith, her strength, and her beautiful smile captured my heart completely.",
        image: "/groom.jpg",
        delay: 0,
    },
];

const timeline = [
    { year: "2021", title: "First Meeting", desc: "Our paths crossed at a mutual friend's gathering in Akure." },
    { year: "2022", title: "Becoming Friends", desc: "What started as casual conversations grew into a deep friendship." },
    { year: "2023", title: "Falling in Love", desc: "We realized our friendship had blossomed into something beautiful." },
    { year: "2024", title: "The Proposal", desc: "On a quiet evening, surrounded by family, Temidayo asked the most important question." },
];

export default function OurStory() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="bg-white py-24 overflow-hidden">
            <section
                id="our-story"
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
                ref={ref}
            >

                {/* ================= HEADER SECTION ================= */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-3"
                    >
            <span className="text-gold tracking-[0.3em] text-xs uppercase font-semibold block">
              Chapter One
            </span>
                        <h2 className="font-serif text-5xl md:text-6xl text-chocolate font-light tracking-wide">
                            The Story of Us
                        </h2>
                        <div className="w-12 h-[1px] bg-gold/40 mx-auto my-6" />
                        <p className="text-chocolate/60 text-sm md:text-base italic max-w-md mx-auto font-light leading-relaxed">
                            From strangers to soulmates — our journey of love, faith, and forever.
                        </p>
                    </motion.div>
                </div>


                {/* ================= INDIVIDUAL PROFILES ================= */}
                <div className="space-y-24 md:space-y-40 mb-32">
                    {stories.map((story, idx) => {
                        const isGroom = idx === 0;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.7 }}
                                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                                    isGroom ? "" : "md:flex-row-reverse"
                                }`}
                            >

                                {/* 1. Image Canvas Wrapper */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-[360px] aspect-[4/5] group">

                                        {/* Background Decorative Frame Line */}
                                        <div className={`absolute inset-4 border border-gold/30 rounded-2xl -z-10 translate-y-4 transition-transform duration-500 group-hover:translate-y-2 ${
                                            isGroom ? "-translate-x-4 group-hover:-translate-x-2" : "translate-x-4 group-hover:translate-x-2"
                                        }`} />

                                        {/* Main Image Base Layer */}
                                        <div className="w-full h-full rounded-2xl overflow-hidden bg-cream/40 border border-gold/10 shadow-xl relative">
                                            {/* Replace this <img> template wrapper with your real image source path later */}
                                            <img
                                                src={story.image || "/placeholder-profile.jpg"}
                                                alt={story.name}
                                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-750 ease-out scale-100 group-hover:scale-102"
                                                onError={(e) => {
                                                    // Keeps it clean until you drop your file pathways in
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />

                                            {/* Fallback Display State Container (Until your pictures are uploaded) */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-chocolate/10 to-gold/5">
                                                <span className="text-4xl mb-3 opacity-80">{isGroom ? "🤵‍♂️" : "👰‍♀️"}</span>
                                                <p className="text-chocolate font-serif font-medium text-sm">Photo Slot</p>
                                                <p className="text-chocolate/50 text-xs mt-1">Add {story.name.split(' ')[0]}'s image here</p>
                                            </div>
                                        </div>

                                        {/* Floating Monogram Initial Pin */}
                                        <div className={`absolute top-6 bg-white border border-gold/20 text-gold font-serif shadow-md w-10 h-10 rounded-full flex items-center justify-center tracking-tighter text-sm font-semibold ${
                                            isGroom ? "-left-4" : "-right-4"
                                        }`}>
                                            {isGroom ? "G" : "B"}
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Text Content Block */}
                                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                  <span className="text-gold tracking-widest text-xs uppercase font-semibold block">
                    {story.role}
                  </span>
                                    <h3 className="text-3xl md:text-4xl font-serif text-chocolate tracking-wide">
                                        {story.name}
                                    </h3>
                                    <div className="w-8 h-[2px] bg-gold/40 mx-auto md:mx-0 my-3" />

                                    {/* Styled blockquote with huge stylistic quote marks */}
                                    <div className="relative pt-4">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 font-serif text-6xl text-gold/10 leading-none select-none">
                      “
                    </span>
                                        <p className="text-chocolate/85 font-light leading-relaxed text-base md:text-lg pl-0 md:pl-6 text-justify md:text-left">
                                            {story.content}
                                        </p>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>


                {/* ================= BIBLE VERSE SECTION ================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center bg-cream/20 border border-gold/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto backdrop-blur-xs relative"
                >
                    {/* Subtle stylized botanical icon style detail */}
                    <div className="text-gold/30 text-2xl font-serif mb-4 font-light">✧</div>
                    <p className="text-lg md:text-xl font-serif italic text-chocolate/80 tracking-wide leading-relaxed">
                        "And the two shall become one."
                    </p>
                    <p className="text-gold/90 text-xs tracking-widest uppercase font-semibold mt-3">
                        Mark 10:8
                    </p>
                </motion.div>

            </section>
        </div>
    );
}