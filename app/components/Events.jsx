"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const events = [
    {
        type: "Traditional Wedding",
        icon: "👘",
        time: "7:00 AM - 9:00 AM",
        venue: "Apostle Obadare Hall, Kosheunti",
        address: "Opposite Oyemekun Grammar School, Akure, Ondo State",
        color: "from-amber-700 to-amber-800",
    },
    {
        type: "Church Wedding",
        icon: "⛪",
        time: "10:00 AM - 12:00 PM",
        venue: "House of Prayer Ministers For All Nations",
        address: "Opposite CAC Grammar School, Ondo Road, Akure",
        color: "from-sage to-forest",
    },
    {
        type: "Reception",
        icon: "🎉",
        time: "12:00 PM onwards",
        venue: "Apostle Obadare Hall, Kosheunti",
        address: "Opposite Oyemekun Grammar School, Akure, Ondo State",
        color: "from-gold to-darkgold",
    },
];

const timeline = [
    { time: "7:00 AM", event: "Traditional Ceremony Begins" },
    { time: "9:00 AM", event: "Traditional Ceremony Ends" },
    { time: "10:00 AM", event: "Church Service" },
    { time: "12:00 PM", event: "Reception Starts" },
    { time: "1:00 PM", event: "Couple's Entrance" },
    { time: "2:00 PM", event: "Cutting of Cake" },
    { time: "4:00 PM", event: "After Party" },
];

export default function Events() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const openGoogleMaps = (address) => {
        window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
    };

    return (
        <section id="events" className="bg-white py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
            <div className="max-w-7xl mx-auto">

                {/* ================= SECTION HEADER ================= */}
                <div className="text-center mb-20">
                    <p className="text-gold tracking-[0.3em] text-xs uppercase font-semibold block mb-3">
                        Save The Dates
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-chocolate font-light tracking-wide">
                        When & Where
                    </h2>
                    <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
                </div>

                {/* ================= EVENTS CARDS GRID ================= */}
                <div className="grid md:grid-cols-3 gap-8 mb-28">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                            onClick={() => openGoogleMaps(event.address)}
                        >
                            {/* Luxury Frame Card */}
                            <div className="h-full bg-cream/20 hover:bg-cream/50 border border-gold/20 p-8 rounded-2xl shadow-sm transition-all duration-300 backdrop-blur-xs flex flex-col justify-between relative overflow-hidden group">

                                {/* Thin internal border line overlay for card aesthetics */}
                                <div className="absolute inset-2 border border-gold/10 rounded-xl pointer-events-none" />

                                <div>
                                    {/* Event Custom Subtitle / Header */}
                                    <div className="text-xs tracking-widest text-gold uppercase font-medium mb-4 block">
                                        {event.type.includes("Reception") ? "The Celebration" : "The Ceremony"}
                                    </div>

                                    {/* Main Event Title */}
                                    <h3 className="font-serif text-2xl text-chocolate mb-6 group-hover:text-gold transition-colors duration-300">
                                        {event.type}
                                    </h3>

                                    {/* Clean Structured Info Grid instead of Emojis */}
                                    <div className="space-y-4 text-sm text-chocolate/80 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold font-light tracking-wider w-10 text-xs uppercase">Date</span>
                                            <span className="font-medium">June 13, 2026</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold font-light tracking-wider w-10 text-xs uppercase">Time</span>
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-start gap-3 pt-2 border-t border-gold/15">
                                            <span className="text-gold font-light tracking-wider w-10 text-xs uppercase mt-0.5">Venue</span>
                                            <span className="flex-1 leading-relaxed text-xs">{event.venue}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Button Trigger */}
                                <div className="mt-8 pt-4 border-t border-gold/10 flex items-center justify-between">
                  <span className="text-xs text-chocolate/60 font-medium group-hover:text-gold transition-colors">
                    Get Directions
                  </span>
                                    <div className="w-7 h-7 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300 text-xs">
                                        →
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ================= TIMELINE CONTAINER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-32"
                >
                    <h3 className="text-3xl font-serif text-center mb-16 tracking-wide text-chocolate">
                        Event Timeline
                    </h3>

                    <div className="relative border-l-2 border-gold/30 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-0.5 md:before:bg-gold/30 md:before:-translate-x-1/2 ml-4 md:ml-0">
                        {timeline.map((item, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                    className={`relative mb-12 last:mb-0 md:w-1/2 pl-8 md:pl-0 ${
                                        isEven ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16 md:text-right"
                                    }`}
                                >
                                    {/* Timeline Point Marker */}
                                    <div className={`absolute top-1.5 left-0 w-4 h-4 rounded-full border-2 border-gold bg-white -translate-x-1/2 z-10 md:left-auto ${
                                        isEven ? "md:-left-2" : "md:-right-2"
                                    }`}>
                                        <div className="w-1.5 h-1.5 bg-gold rounded-full m-auto mt-[3px]"></div>
                                    </div>

                                    {/* Elegant Text Card */}
                                    <div className="p-6 rounded-2xl bg-cream/20 hover:bg-cream/50 transition-all duration-300 shadow-xs border border-gold/10 backdrop-blur-xs group">
                    <span className="block text-xs font-semibold tracking-widest text-gold uppercase mb-1">
                      {item.time}
                    </span>
                                        <h4 className="text-lg font-serif text-chocolate font-medium">
                                            {item.event}
                                        </h4>
                                        {item.description && (
                                            <p className="mt-2 text-xs text-chocolate/70 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ================= EDITORIAL DRESS CODE ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="border border-gold/20 bg-cream/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center relative overflow-hidden"
                >
                    <div className="absolute inset-1 border border-gold/5 rounded-2xl pointer-events-none" />

                    <span className="text-gold tracking-[0.25em] text-xs uppercase font-semibold block mb-2">
            Attire Inspiration
          </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-chocolate mb-4">
                        Dress Code
                    </h3>
                    <p className="text-chocolate/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                        We kindly invite our guests to celebrate with us in harmony by following our wedding color story:
                    </p>

                    {/* Color Swatch Palette Displays */}
                    <div className="flex justify-center items-center gap-4 md:gap-6">
                        {[
                            { label: "Green", colorBg: "bg-emerald-800 text-white" },
                            { label: "White", colorBg: "bg-white border border-gold/20 text-chocolate" },
                            { label: "Gold", colorBg: "bg-amber-500 text-white" },
                            { label: "Chocolate", colorBg: "bg-amber-950 text-white" }
                        ].map((swatch, sIdx) => (
                            <div key={sIdx} className="flex flex-col items-center gap-2">
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md ${swatch.colorBg} flex items-center justify-center transition-transform hover:scale-110 duration-300`} />
                                <span className="text-[11px] uppercase tracking-wider font-medium text-chocolate/70">
                  {swatch.label}
                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}