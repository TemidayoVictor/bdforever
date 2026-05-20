"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Replace these with your actual image paths
const images = [
    { id: 1, src: "/img1.jpg", category: "Pre-wedding" },
    { id: 2, src: "/img2.jpg", category: "Pre-wedding" },
    { id: 3, src: "/img3.jpg", category: "Pre-wedding" },
    { id: 4, src: "/img4.jpg", category: "Pre-wedding" },
    { id: 5, src: "/img5.jpg", category: "Pre-wedding" },
    { id: 6, src: "/img6.jpg", category: "Pre-wedding" },
    { id: 7, src: "/img7.jpg", category: "Pre-wedding" },
    { id: 8, src: "/img8.jpg", category: "Pre-wedding" },
    { id: 9, src: "/img9.jpg", category: "Pre-wedding" },
    { id: 10, src: "/img10.jpg", category: "Pre-wedding" },
    { id: 11, src: "/img11.jpg", category: "Pre-wedding" },
    { id: 12, src: "/img12.jpg", category: "Pre-wedding" },
    { id: 13, src: "/img13.jpg", category: "Pre-wedding" },
    { id: 14, src: "/img14.jpg", category: "Pre-wedding" },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <>
            <section id="gallery" className="bg-cream/30 py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="max-w-7xl mx-auto">

                    {/* ================= SECTION HEADER ================= */}
                    <div className="text-center mb-20">
                        <p className="text-gold tracking-[0.3em] text-xs uppercase font-semibold block mb-3">
                            Memories
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-chocolate font-light tracking-wide">
                            Our Gallery
                        </h2>
                        <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
                    </div>

                    {/* ================= ASYMMETRIC MASONRY STYLE GRID ================= */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
                        {images.map((image, idx) => (
                            <motion.div
                                key={image.id || idx}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: idx * 0.05,
                                    duration: 0.7,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="break-inside-avoid relative overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-xs group cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                {/*
                                  Dynamic height allocation using index variations
                                  This creates an editorial fashion lookbook effect without extra CSS plugins
                                */}
                                <div className={`relative w-full ${
                                    idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                                } bg-cream/40 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-102`}>

                                    {/* Luxury Mock Image State (Graceful fallback if src is omitted) */}
                                    {image.src ? (
                                        <img
                                            src={image.src}
                                            alt={image.alt || "Our Memory"}
                                            className="w-full h-full object-cover object-center"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="text-center p-6 space-y-2 select-none">
                                            <div className="text-gold/30 font-serif text-3xl font-light">
                                                {String(idx + 1).padStart(2, "0")}
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-chocolate/40 block font-medium">
                                                Captured Moment
                                            </span>
                                        </div>
                                    )}

                                    {/* Elegant Internal Border Lines (Appears on Hover) */}
                                    <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                                    {/* Luxury Minimalist Tint Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10">
                                        <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                          {image.category || "Memory"}
                                        </span>
                                        <h4 className="font-serif text-white text-lg mt-1 tracking-wide transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {image.title || "View Moment"}
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Fine Print Note */}
                    <p className="text-center text-chocolate/40 text-xs italic mt-12 tracking-wide">
                        Moments collected along our path together.
                    </p>
                </div>
            </section>

            {/* ================= LUXURY LIGHTBOX MODAL ================= */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-chocolate/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Top Bar Utilities */}
                        <div className="w-full max-w-5xl flex justify-between items-center text-white mb-4 px-2">
                            <div className="space-y-0.5">
                                <span className="text-gold text-[10px] tracking-widest uppercase font-semibold">
                                  {selectedImage.category || "Gallery"}
                                </span>
                                <h3 className="font-serif text-lg tracking-wide text-white/90">
                                    {selectedImage.title || "Our Love Story"}
                                </h3>
                            </div>
                            <button
                                className="text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center text-xl font-light"
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close Lightbox"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Display Canvas Frame */}
                        <motion.div
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            transition={{ type: "spring", damping: 25, stiffness: 180 }}
                            className="relative max-w-5xl max-h-[75vh] w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedImage.src ? (
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt || "Expanded Memory"}
                                    className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-2xl"
                                />
                            ) : (
                                <div className="aspect-video w-full flex flex-col items-center justify-center text-white/20 p-12">
                                    <span className="font-serif text-4xl font-light italic mb-2 text-gold/40">Beautiful Memory</span>
                                    <span className="text-xs uppercase tracking-widest">Image Content Area</span>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}