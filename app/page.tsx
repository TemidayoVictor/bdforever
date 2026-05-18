"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Rsvp from "./components/RSVP";
import Footer from "./components/Footer";
import RegistrySection from "./components/RegistrySection";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
            </div>
            <div>
                <OurStory />
            </div>
            <Events />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Gallery />
            </div>
            <RegistrySection />
            <Rsvp />
            <Footer />
        </main>
    );
}