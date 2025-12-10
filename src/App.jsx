import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Coffee,
    Star,
    CreditCard,
    Check,
    X,
    Copy,
    CheckCircle,
} from "lucide-react";

// --- PHẦN DỮ LIỆU CỦA BẠN (SỬA Ở ĐÂY) ---
const DATA = {
    profile: {
        name: "Phạm Đức Đạt", // Thay tên bạn
        title: "Chuyên gia tiêu tiền & Lập trình viên tập sự",
        description:
            "Chào mừng đến với dự án đầu tư mạo hiểm nhất cuộc đời bạn: Nuôi tôi. Lợi nhuận không đảm bảo, nhưng nụ cười thì có.",
        avatar: "/my_avt.jpg",
    },
    whyMe: [
        {
            icon: <Heart className="w-6 h-6 text-red-500" />,
            title: "Đáng yêu",
            desc: "Luôn biết ơn và gửi lời chúc ngủ ngon mỗi tối.",
        },
        {
            icon: <Coffee className="w-6 h-6 text-amber-700" />,
            title: "Năng suất",
            desc: "Chuyển hóa cà phê và trà sữa thành code (và bug).",
        },
        {
            icon: <Star className="w-6 h-6 text-yellow-400" />,
            title: "Tiềm năng",
            desc: "Đang trên đà phát triển, hãy mua cổ phiếu khi giá còn thấp.",
        },
    ],
    comparison: {
        me: [
            "Biết kể chuyện cười",
            "Rep tin nhắn nhanh",
            "Biết ơn nhà tài trợ",
        ],
        others: ["Nhạt nhẽo", "Seen không rep", "Coi đó là điều hiển nhiên"],
    },
    spending: [
        {
            category: "Cà phê & Đồ ăn ngon",
            percent: 40,
            color: "bg-orange-400",
        },
        {
            category: "Mua khóa học (để ngâm)",
            percent: 30,
            color: "bg-blue-400",
        },
        { category: "Tiết kiệm lấy vợ", percent: 20, color: "bg-green-400" },
        { category: "Chơi lô tô cầu may", percent: 10, color: "bg-purple-400" },
    ],
    bank: {
        bankName: "Vietinbank Bank",
        accountNumber: "102879835294", // Thay số tài khoản
        accountName: "PHAM DUC DAT",
        qrCode: "/my_qr.jpg",
        // Mẹo: Bạn có thể dùng vietqr.io để tạo link QR tự động hoặc thay bằng ảnh QR của bạn
    },
};

// --- CÁC COMPONENT CON ---

const Section = ({ title, children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`max-w-3xl mx-auto py-12 px-4 ${className}`}
    >
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
            {title}
        </h2>
        {children}
    </motion.div>
);

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
            className="ml-2 p-1 rounded hover:bg-slate-200 transition"
        >
            {copied ? (
                <CheckCircle size={18} className="text-green-600" />
            ) : (
                <Copy size={18} className="text-slate-500" />
            )}
        </button>
    );
};

export default function App() {
    return (
        <div className="min-h-screen font-sans bg-slate-50 text-slate-800 pb-20">
            {/* 1. Header / Profile Section */}
            <header className="flex flex-col items-center justify-center min-h-[80vh] bg-white shadow-sm p-4 text-center">
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    src={DATA.profile.avatar}
                    alt="Avatar"
                    className="w-40 h-40 rounded-full mb-6 border-4 border-indigo-500 shadow-xl object-cover"
                />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4"
                >
                    {DATA.profile.name}
                </motion.h1>
                <p className="text-xl text-slate-600 font-medium mb-4">
                    {DATA.profile.title}
                </p>
                <p className="max-w-md text-slate-500">
                    {DATA.profile.description}
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 animate-bounce"
                >
                    👇 Tìm hiểu lý do
                </motion.div>
            </header>

            {/* 2. Tại sao nên nuôi tôi */}
            <Section title="Tại sao nên nuôi tôi?">
                <div className="grid md:grid-cols-3 gap-6">
                    {DATA.whyMe.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 bg-slate-50 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 3. So sánh với người khác */}
            <Section title="Tôi vs Người Khác">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                    <div className="grid grid-cols-2 bg-slate-100 p-4 font-bold text-lg">
                        <div className="text-center text-indigo-600">
                            Tôi (Đáng yêu)
                        </div>
                        <div className="text-center text-slate-500">
                            Người khác (Nhàm chán)
                        </div>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {DATA.comparison.me.map((trait, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-2 p-4 hover:bg-slate-50 transition"
                            >
                                <div className="flex items-center gap-2 text-indigo-700 font-medium">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />{" "}
                                    {trait}
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 opacity-70">
                                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />{" "}
                                    {DATA.comparison.others[i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. Sử dụng ngân sách */}
            <Section title="Minh bạch tài chính (Dự kiến)">
                <div className="space-y-4 bg-white p-6 rounded-2xl shadow-md">
                    {DATA.spending.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-1 text-sm font-medium">
                                <span>{item.category}</span>
                                <span>{item.percent}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percent}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className={`h-full ${item.color}`}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. Donate / QR Code */}
            <Section title="Hành động ngay">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl text-white text-center shadow-2xl">
                    <p className="mb-6 text-lg opacity-90">
                        Mọi sự đóng góp đều được quy đổi thành nụ cười :)
                    </p>

                    <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-inner">
                        {/* Thay ảnh QR thật của bạn vào đây */}
                        <img
                            src={DATA.bank.qrCode}
                            alt="QR Code"
                            className="w-48 h-48 object-contain"
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-xl">
                            {DATA.bank.bankName}
                        </p>
                        <div className="flex items-center justify-center gap-2 bg-white/20 py-2 px-4 rounded-lg backdrop-blur-sm w-fit mx-auto">
                            <span className="font-mono text-lg tracking-wider">
                                {DATA.bank.accountNumber}
                            </span>
                            <CopyButton text={DATA.bank.accountNumber} />
                        </div>
                        <p className="uppercase text-sm opacity-75 mt-2">
                            {DATA.bank.accountName}
                        </p>
                    </div>

                    <div className="mt-8 text-xs opacity-60">
                        *Lưu ý: Không hoàn trả dưới mọi hình thức trừ khi tôi
                        trở thành tỷ phú.
                    </div>
                </div>
            </Section>

            <footer className="text-center text-slate-400 text-sm py-8">
                © {new Date().getFullYear()} {DATA.profile.name}. Designed with
                💸
            </footer>
        </div>
    );
}
