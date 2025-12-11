import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { DATA } from "../constants";

export default function Comparison() {
    return (
        <section id="comparison" className="py-20 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
                    Thẩm định giá trị
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Cột Tôi */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-lg border-2 border-indigo-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            BEST CHOICE
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
                            <img
                                src={DATA.profile.avatar}
                                className="w-8 h-8 rounded-full"
                            />
                            Tôi (Bản Limited)
                        </h3>
                        <ul className="space-y-4">
                            {DATA.comparison.me.map((text, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="p-1 bg-green-100 rounded-full">
                                        <Check
                                            size={16}
                                            className="text-green-600"
                                        />
                                    </div>
                                    <span className="font-medium text-slate-700">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Cột Người khác */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-200/50 p-8 rounded-3xl border border-slate-200 opacity-80"
                    >
                        <h3 className="text-2xl font-bold text-slate-500 mb-6">
                            Người khác
                        </h3>
                        <ul className="space-y-4">
                            {DATA.comparison.others.map((text, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="p-1 bg-red-100 rounded-full">
                                        <X size={16} className="text-red-500" />
                                    </div>
                                    <span className="text-slate-500 line-through decoration-slate-400">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
