import { Heart, Coffee, Star } from "lucide-react";

export const DATA = {
    profile: {
        name: "Phạm Đức Đạt",
        titles: [
            "Chuyên gia tiêu tiền 💸",
            "Lập trình viên tập sự 💻",
            "Kẻ hủy diệt Deadline 🚀",
        ],
        description:
            "Chào mừng đến với dự án đầu tư mạo hiểm nhất cuộc đời bạn: Nuôi tôi. Lợi nhuận không đảm bảo, nhưng nụ cười thì miễn phí (đôi khi).",
        avatar: "/my_avt.jpg",
    },
    whyMe: [
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Đáng yêu vô đối",
            desc: "Luôn biết ơn và gửi lời chúc ngủ ngon mỗi tối (nếu không quên).",
        },
        {
            icon: <Coffee className="w-8 h-8 text-amber-700" />,
            title: "Cỗ máy năng suất",
            desc: "Chuyển hóa cà phê, trà sữa và bim bim thành những dòng code sạch.",
        },
        {
            icon: <Star className="w-8 h-8 text-yellow-400" />,
            title: "Bluechip Tiềm năng",
            desc: "Đang định giá thấp. Hãy mua cổ phiếu (donate) ngay hôm nay!",
        },
    ],
    comparison: {
        me: [
            "Biết kể chuyện cười (nhạt)",
            "Rep tin nhắn tốc độ ánh sáng",
            "Biết ơn nhà tài trợ trọn đời",
            "Ăn uống không kén chọn",
        ],
        others: [
            "Nhạt nhẽo vô vị",
            "Seen không rep (chảnh)",
            "Coi đó là điều hiển nhiên",
            "Đòi đi ăn nhà hàng sang trọng",
        ],
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
        { category: "Quỹ đen lấy vợ", percent: 20, color: "bg-green-400" },
        { category: "Vé số Vietlott", percent: 10, color: "bg-purple-400" },
    ],
    bank: {
        bankName: "Vietinbank",
        accountNumber: "102879835294",
        accountName: "PHAM DUC DAT",
        qrCode: "/my_qr.jpg",
    },
};
