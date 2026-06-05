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
    { time: "12:00 PM", event: "Arrival of Guests" },
    { time: "1:10 PM", event: "Invitation to the high table & Introduction of the Chairman" },
    { time: "1:15 PM", event: "Grand Entry of Brides Parent" },
    { time: "1:20 PM", event: "Grand Entry of Grooms Parent" },
    { time: "1:25 PM", event: "Triumphant Entry of the Couple (games)" },
    { time: "1:50 PM", event: "Opening Prayer (Grand Entry Of our Maker)" },
    { time: "2:00 PM", event: "Chairman's remark" },
    { time: "2:10 PM", event: "Cutting of the Cake" },
    { time: "2:20 PM", event: "1st kiss and 1st Dance" },
    { time: "2:35 PM", event: "Bride Dance with the father" },
    { time: "2:40 PM", event: "Groom dance with the mother" },
    { time: "2:45 PM", event: "Couples with family and friends" },
    { time: "3:00 PM", event: " 'On behalf of my wife and I' " },
    { time: "3:05 PM", event: "Closing Prayer" },
    { time: "", event: "Dance  Dance  Dance!!!" },
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
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto mb-32 px-4 sm:px-6"
                >
                    {/* ================= TIMELINE HEADER ================= */}
                    <div className="text-center mb-20">
                        <h3 className="text-2xl md:text-3xl font-serif tracking-wide text-chocolate font-light">
                            The Day's Itinerary
                        </h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto mt-3" />
                    </div>

                    {/* ================= THE TIMELINE CONTAINER ================= */}
                    <div className="relative border-l border-gold/20 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[1px] md:before:bg-gradient-to-b md:before:from-gold/10 md:before:via-gold/30 md:before:to-gold/10 md:before:-translate-x-1/2 ml-4 md:ml-0">

                        {timeline.map((item, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative mb-16 last:mb-0 md:w-1/2 pl-8 md:pl-0 flex ${
                                        isEven ? "md:ml-auto md:pl-16 justify-start" : "md:mr-auto md:pr-16 justify-start md:justify-end"
                                    }`}
                                >
                                    {/*
                                        TIMELINE ELEGANT NODE
                                        Replaced the double div with a crisp ring + pulse core setup
                                     */}
                                    <div
                                        className={`absolute top-2 left-0 w-3 h-3 rounded-full border border-gold bg-white -translate-x-1/2 z-10 md:left-auto transition-transform duration-300 group-hover:scale-125 ${
                                            isEven ? "md:-left-[6px]" : "md:-right-[6px]"
                                        }`}
                                    >
                                        <span className="absolute inset-0.5 rounded-full bg-gold/80 animate-pulse" />
                                    </div>

                                    {/*
                                        EVENT INTERIOR CONTAINER
                                        Changed to editorial text-left alignment on both sides for premium readability
                                     */}
                                    <div className="w-full max-w-md text-left group">
                                        <div className="p-6 rounded-2xl bg-transparent hover:bg-cream/30 border border-transparent hover:border-gold/10 shadow-none hover:shadow-2xs transition-all duration-400 group">

                                            {/* Event Time Stamp */}
                                            <span className="block text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-2 transition-transform duration-300 group-hover:translate-x-0.5">
                                                {item.time}
                                            </span>

                                            {/* Event Title */}
                                            <h4 className="text-lg font-serif text-chocolate font-light tracking-wide group-hover:text-gold transition-colors duration-300">
                                                {item.event}
                                            </h4>

                                            {/* Optional Description */}
                                            {item.description && (
                                                <p className="mt-2.5 text-xs text-chocolate/60 font-light leading-relaxed tracking-wide">
                                                    {item.description}
                                                </p>
                                            )}

                                        </div>
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