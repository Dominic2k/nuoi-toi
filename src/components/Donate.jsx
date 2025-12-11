import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle } from "lucide-react";
import { DATA } from "../constants";

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={handleCopy}
            className="ml-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition backdrop-blur-md"
            title="Copy số tài khoản"
        >
            {copied ? (
                <CheckCircle size={20} className="text-green-300" />
            ) : (
                <Copy size={20} className="text-white" />
            )}
        </button>
    );
};

export default function Donate() {
    return (
        <section id="donate" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
                >
                    {/* Background blobs */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                        Donate ngay kẻo lỡ
                    </h2>
                    <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        "Người hạnh phúc là người biết cho đi." - Còn người nhận
                        (là tôi) thì còn hạnh phúc hơn.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
                        {/* QR Code */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="bg-white p-4 rounded-3xl shadow-xl"
                        >
                            <img
                                src={DATA.bank.qrCode}
                                alt="QR Code"
                                className="w-56 h-56 object-contain rounded-xl"
                            />
                        </motion.div>

                        {/* Bank Info */}
                        <div className="text-left space-y-4">
                            <div>
                                <p className="text-indigo-200 text-sm font-medium uppercase tracking-wider">
                                    Ngân hàng
                                </p>
                                <p className="text-2xl font-bold">
                                    {DATA.bank.bankName}
                                </p>
                            </div>
                            <div>
                                <p className="text-indigo-200 text-sm font-medium uppercase tracking-wider">
                                    Số tài khoản
                                </p>
                                <div className="flex items-center">
                                    <p className="text-3xl md:text-4xl font-mono font-bold tracking-tight">
                                        {DATA.bank.accountNumber}
                                    </p>
                                    <CopyButton
                                        text={DATA.bank.accountNumber}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-indigo-200 text-sm font-medium uppercase tracking-wider">
                                    Chủ tài khoản
                                </p>
                                <p className="text-xl font-bold">
                                    {DATA.bank.accountName}
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-12 text-xs text-white/40 italic relative z-10">
                        *Không hoàn trả dưới mọi hình thức. Chuyển nhầm coi như
                        lì xì.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
