import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Import các component con
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyMe from "./components/WhyMe";
import Comparison from "./components/Comparison";
import Spending from "./components/Spending";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

export default function App() {
    // Thanh tiến trình (Scroll Progress Bar)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
            {/* Progress Bar chạy trên cùng */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            <Navbar />

            <main>
                <Hero />
                <WhyMe />
                <Comparison />
                <Spending />
                <Donate />
            </main>

            <Footer />
        </div>
    );
}
