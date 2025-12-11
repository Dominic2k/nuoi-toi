import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "whyme", label: "Tại sao?" },
        { id: "comparison", label: "So sánh" },
        { id: "spending", label: "Chi tiêu" },
        { id: "donate", label: "Donate" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
        >
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 pointer-events-auto flex gap-6 overflow-x-auto max-w-full">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </motion.nav>
    );
}
