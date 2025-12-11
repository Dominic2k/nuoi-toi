import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariant = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export default function WhyMe() {
    return (
        <section id="whyme" className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-slate-800"
                >
                    Tại sao nên đầu tư vào tôi?
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {DATA.whyMe.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariant}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-center">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-center leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
