import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../constants";

export default function Spending() {
    return (
        <section id="spending" className="py-20 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">
                    Sao kê minh bạch
                </h2>
                <p className="text-center text-slate-500 mb-12">
                    Cam kết không dùng tiền sai mục đích (trừ khi quên).
                </p>

                <div className="space-y-6">
                    {DATA.spending.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-2 font-semibold text-slate-700">
                                <span>{item.category}</span>
                                <span>{item.percent}%</span>
                            </div>
                            <div className="h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner relative">
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percent}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeOut",
                                        delay: index * 0.1,
                                    }}
                                    className={`h-full ${item.color} relative`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        delay={1}
                                        className="absolute right-2 top-0 bottom-0 flex items-center text-[10px] text-white/80 font-bold"
                                    ></motion.div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
