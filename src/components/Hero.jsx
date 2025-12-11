import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";
import { Heart } from "lucide-react";

export default function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const [hearts, setHearts] = useState([]);

    // Hiệu ứng chuyển đổi Title
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % DATA.profile.titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Hàm thả tim
    const spawnHeart = () => {
        const newHeart = {
            id: Date.now(),
            x: Math.random() * 100 - 50, // Vị trí ngẫu nhiên
        };
        setHearts((prev) => [...prev, newHeart]);
        setTimeout(() => {
            setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
        }, 2000);
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-white opacity-70"></div>

            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative"
            >
                <img
                    src={DATA.profile.avatar}
                    alt="Avatar"
                    className="w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={spawnHeart}
                />
                <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-2 right-2 text-4xl cursor-pointer"
                    onClick={spawnHeart}
                >
                    🥰
                </motion.span>

                {/* Floating Hearts Animation */}
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 1, y: 0, x: 0 }}
                        animate={{ opacity: 0, y: -200, x: heart.x }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 text-pink-500 pointer-events-none"
                    >
                        <Heart fill="currentColor" size={24} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-6xl font-black text-slate-800 tracking-tight"
            >
                {DATA.profile.name}
            </motion.h1>

            <div className="h-10 mt-4 overflow-hidden">
                <motion.p
                    key={textIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
                >
                    {DATA.profile.titles[textIndex]}
                </motion.p>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 max-w-lg text-slate-500 text-lg leading-relaxed"
            >
                {DATA.profile.description}
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                    document
                        .getElementById("donate")
                        .scrollIntoView({ behavior: "smooth" })
                }
                className="mt-10 px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:shadow-indigo-500/30 transition-shadow"
            >
                Nuôi tôi đi 👇
            </motion.button>
        </section>
    );
}
