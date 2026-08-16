// ===== communication03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Customers and shop assistants talk about products, prices, sizes, colors, and payment _____ for clear communication every day.",
    "a": "methods"
  },
  {
    "q": "2. Friendly communication makes shopping easier and creates a pleasant experience for everyone _____ for clear communication every day.",
    "a": "involved"
  },
  {
    "q": "3. Customers communicate with waiters to choose food, order drinks, and ask about special _____.",
    "a": "dishes"
  },
  {
    "q": "4. Respectful communication helps waiters do their jobs well and makes dining more _____ for clear communication every day.",
    "a": "enjoyable"
  },
  {
    "q": "5. Respectful conversations help everyone understand responsibilities and complete their work more successfully _____ day.",
    "a": "every"
  },
  {
    "q": "6. Effective communication reduces misunderstandings and makes teamwork easier in many different situations every _____ day.",
    "a": "single"
  },
  {
    "q": "7. Strong communication skills bring better friendships, happier workplaces, and greater success in _____ for clear communication every day.",
    "a": "life"
  },
  {
    "q": "8. Shopping conversations happen every day in markets, supermarkets, and small _____ for clear communication every day.",
    "a": "stores"
  },
  {
    "q": "9. Customers often ask about discounts, product quality, or available _____ for clear communication every day.",
    "a": "colors"
  },
  {
    "q": "10. Shop assistants answer questions, recommend suitable items, and explain prices _____ for clear communication every day.",
    "a": "clearly"
  },
  {
    "q": "11. Speaking politely helps both sides understand each other _____ for clear communication every day.",
    "a": "better"
  },
  {
    "q": "12. Smiling also creates a comfortable shopping atmosphere for _____ for clear communication every day.",
    "a": "everyone"
  },
  {
    "q": "13. Good shopping conversations save time and avoid _____ for clear communication every day in everyday communication situations.",
    "a": "misunderstandings"
  },
  {
    "q": "14. Customers should thank the shop assistant after buying something or receiving _____ for clear communication every day.",
    "a": "help"
  },
  {
    "q": "15. Respect, patience, and clear communication make shopping _____ enjoyable for clear communication every day.",
    "a": "more"
  },
  {
    "q": "16. Positive conversations also encourage customers to visit the store _____ for clear communication every day.",
    "a": "again"
  },
  {
    "q": "17. Eating at a restaurant is a pleasant experience for many _____ for clear communication every day.",
    "a": "people"
  },
  {
    "q": "18. Good communication helps everyone enjoy the meal without confusion or unnecessary _____ for clear communication every day.",
    "a": "waiting"
  },
  {
    "q": "19. Customers usually read the menu before ordering their _____ for clear communication every day.",
    "a": "meals"
  },
  {
    "q": "20. They may ask about ingredients, portion sizes, or _____ dishes for clear communication every day.",
    "a": "recommended"
  }
];

const newEx2Data = [
  {
    "q": "1. Choose the best word to complete the sentence: Customers and shop assistants talk about products, prices, sizes, colors, and payment _____ for clear communication every day.",
    "opts": [
      "methods",
      "markets",
      "supermarkets",
      "stores"
    ],
    "a": "methods"
  },
  {
    "q": "2. Choose the best word to complete the sentence: Friendly communication makes shopping easier and creates a pleasant experience for everyone _____ for clear communication every day.",
    "opts": [
      "comfortable",
      "involved",
      "good",
      "clear"
    ],
    "a": "involved"
  },
  {
    "q": "3. Choose the best word to complete the sentence: Customers communicate with waiters to choose food, order drinks, and ask about special _____.",
    "opts": [
      "products",
      "prices",
      "dishes",
      "sizes"
    ],
    "a": "dishes"
  },
  {
    "q": "4. Choose the best word to complete the sentence: Respectful communication helps waiters do their jobs well and makes dining more _____ for clear communication every day.",
    "opts": [
      "unnecessary",
      "recommended",
      "important",
      "enjoyable"
    ],
    "a": "enjoyable"
  },
  {
    "q": "5. Choose the best word to complete the sentence: Respectful conversations help everyone understand responsibilities and complete their work more successfully _____ day.",
    "opts": [
      "every",
      "both",
      "each",
      "more"
    ],
    "a": "every"
  },
  {
    "q": "6. Choose the best word to complete the sentence: Effective communication reduces misunderstandings and makes teamwork easier in many different situations every _____ day.",
    "opts": [
      "daily",
      "single",
      "future",
      "different"
    ],
    "a": "single"
  },
  {
    "q": "7. Choose the best word to complete the sentence: Strong communication skills bring better friendships, happier workplaces, and greater success in _____ for clear communication every day.",
    "opts": [
      "items",
      "sides",
      "life",
      "atmosphere"
    ],
    "a": "life"
  },
  {
    "q": "8. Choose the best word to complete the sentence: Shopping conversations happen every day in markets, supermarkets, and small _____ for clear communication every day.",
    "opts": [
      "misunderstandings",
      "assistant",
      "respect",
      "stores"
    ],
    "a": "stores"
  },
  {
    "q": "9. Choose the best word to complete the sentence: Customers often ask about discounts, product quality, or available _____ for clear communication every day.",
    "opts": [
      "colors",
      "patience",
      "store",
      "restaurant"
    ],
    "a": "colors"
  },
  {
    "q": "10. Choose the best word to complete the sentence: Shop assistants answer questions, recommend suitable items, and explain prices _____ for clear communication every day.",
    "opts": [
      "quickly",
      "clearly",
      "effectively",
      "respectfully"
    ],
    "a": "clearly"
  },
  {
    "q": "11. Choose the best word to complete the sentence: Speaking politely helps both sides understand each other _____ for clear communication every day.",
    "opts": [
      "responsibly",
      "often",
      "better",
      "clearly"
    ],
    "a": "better"
  },
  {
    "q": "12. Choose the best word to complete the sentence: Smiling also creates a comfortable shopping atmosphere for _____ for clear communication every day.",
    "opts": [
      "other",
      "something",
      "others",
      "everyone"
    ],
    "a": "everyone"
  },
  {
    "q": "13. Choose the best word to complete the sentence: Good shopping conversations save time and avoid _____ for clear communication every day in everyday communication situations.",
    "opts": [
      "misunderstandings",
      "ingredients",
      "portion",
      "manners"
    ],
    "a": "misunderstandings"
  },
  {
    "q": "14. Choose the best word to complete the sentence: Customers should thank the shop assistant after buying something or receiving _____ for clear communication every day.",
    "opts": [
      "share",
      "help",
      "listen",
      "using"
    ],
    "a": "help"
  },
  {
    "q": "15. Choose the best word to complete the sentence: Respect, patience, and clear communication make shopping _____ enjoyable for clear communication every day.",
    "opts": [
      "every",
      "both",
      "more",
      "each"
    ],
    "a": "more"
  },
  {
    "q": "16. Choose the best word to complete the sentence: Positive conversations also encourage customers to visit the store _____ for clear communication every day.",
    "opts": [
      "effectively",
      "respectfully",
      "responsibly",
      "again"
    ],
    "a": "again"
  },
  {
    "q": "17. Choose the best word to complete the sentence: Eating at a restaurant is a pleasant experience for many _____ for clear communication every day.",
    "opts": [
      "people",
      "schedules",
      "projects",
      "plans"
    ],
    "a": "people"
  },
  {
    "q": "18. Choose the best word to complete the sentence: Good communication helps everyone enjoy the meal without confusion or unnecessary _____ for clear communication every day.",
    "opts": [
      "build",
      "waiting",
      "reduces",
      "use"
    ],
    "a": "waiting"
  },
  {
    "q": "19. Choose the best word to complete the sentence: Customers usually read the menu before ordering their _____ for clear communication every day.",
    "opts": [
      "opinions",
      "language",
      "meals",
      "problems"
    ],
    "a": "meals"
  },
  {
    "q": "20. Choose the best word to complete the sentence: They may ask about ingredients, portion sizes, or _____ dishes for clear communication every day.",
    "opts": [
      "happier",
      "greater",
      "small",
      "recommended"
    ],
    "a": "recommended"
  }
];

const newEx3Data = [
  {
    "word": "shopping",
    "mean": "mua sắm"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "happen",
    "mean": "xảy ra"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "markets",
    "mean": "chợ"
  },
  {
    "word": "supermarkets",
    "mean": "siêu thị"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "stores",
    "mean": "cửa hàng"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "shop",
    "mean": "cửa hàng"
  },
  {
    "word": "assistants",
    "mean": "nhân viên bán hàng"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "prices",
    "mean": "giá cả"
  },
  {
    "word": "sizes",
    "mean": "kích cỡ"
  },
  {
    "word": "colors",
    "mean": "màu sắc"
  },
  {
    "word": "payment",
    "mean": "thanh toán"
  },
  {
    "word": "methods",
    "mean": "phương thức"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "pleasant",
    "mean": "dễ chịu"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "involved",
    "mean": "liên quan"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "discounts",
    "mean": "giảm giá"
  },
  {
    "word": "product",
    "mean": "sản phẩm"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "available",
    "mean": "có sẵn"
  },
  {
    "word": "answer",
    "mean": "trả lời"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "recommend",
    "mean": "giới thiệu; đề xuất"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "items",
    "mean": "mặt hàng"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "sides",
    "mean": "phía; bên"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "other",
    "mean": "khác; nhau"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "smiling",
    "mean": "mỉm cười"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "misunderstandings",
    "mean": "những hiểu lầm"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "thank",
    "mean": "cảm ơn"
  },
  {
    "word": "assistant",
    "mean": "nhân viên bán hàng"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
  },
  {
    "word": "receiving",
    "mean": "nhận"
  },
  {
    "word": "help",
    "mean": "giúp đỡ"
  },
  {
    "word": "respect",
    "mean": "sự tôn trọng; tôn trọng"
  },
  {
    "word": "patience",
    "mean": "sự kiên nhẫn"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "make",
    "mean": "làm; khiến"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "visit",
    "mean": "ghé thăm"
  },
  {
    "word": "store",
    "mean": "cửa hàng"
  },
  {
    "word": "again",
    "mean": "lại"
  },
  {
    "word": "restaurant",
    "mean": "nhà hàng"
  },
  {
    "word": "eating",
    "mean": "ăn uống"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "waiters",
    "mean": "nhân viên phục vụ"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "order",
    "mean": "gọi; đặt"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "confusion",
    "mean": "sự nhầm lẫn"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "waiting",
    "mean": "chờ đợi"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "menu",
    "mean": "thực đơn"
  },
  {
    "word": "ordering",
    "mean": "gọi món"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "portion",
    "mean": "khẩu phần"
  },
  {
    "word": "recommended",
    "mean": "được giới thiệu"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "saying",
    "mean": "việc nói"
  },
  {
    "word": "please",
    "mean": "làm ơn"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "manners",
    "mean": "phép lịch sự"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "patiently",
    "mean": "kiên nhẫn"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "bill",
    "mean": "hóa đơn"
  },
  {
    "word": "leaving",
    "mean": "rời đi"
  },
  {
    "word": "respectful",
    "mean": "tôn trọng; lịch sự"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "dining",
    "mean": "dùng bữa"
  },
  {
    "word": "leaves",
    "mean": "rời đi"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "feeling",
    "mean": "cảm xúc"
  },
  {
    "word": "afterward",
    "mean": "sau đó"
  },
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "colleagues",
    "mean": "đồng nghiệp"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "lessons",
    "mean": "bài học"
  },
  {
    "word": "work",
    "mean": "công việc; làm việc"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "schedules",
    "mean": "lịch trình"
  },
  {
    "word": "projects",
    "mean": "dự án"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "responsibilities",
    "mean": "trách nhiệm"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "successfully",
    "mean": "thành công"
  },
  {
    "word": "greet",
    "mean": "chào hỏi"
  },
  {
    "word": "starting",
    "mean": "bắt đầu"
  },
  {
    "word": "conversation",
    "mean": "cuộc trò chuyện"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "using",
    "mean": "sử dụng"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "solve",
    "mean": "giải quyết"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "effectively",
    "mean": "hiệu quả"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "depend",
    "mean": "phụ thuộc"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "cooperation",
    "mean": "sự hợp tác"
  },
  {
    "word": "appreciate",
    "mean": "trân trọng"
  },
  {
    "word": "respectfully",
    "mean": "một cách tôn trọng"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "learning",
    "mean": "học tập"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "strong",
    "mean": "bền chặt; mạnh mẽ"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "express",
    "mean": "bày tỏ"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "effective",
    "mean": "hiệu quả"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "teamwork",
    "mean": "làm việc nhóm"
  },
  {
    "word": "situations",
    "mean": "tình huống"
  },
  {
    "word": "single",
    "mean": "đơn lẻ; mỗi"
  },
  {
    "word": "communicators",
    "mean": "người giao tiếp"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "maintain",
    "mean": "duy trì"
  },
  {
    "word": "attitude",
    "mean": "thái độ"
  },
  {
    "word": "eye",
    "mean": "mắt"
  },
  {
    "word": "contact",
    "mean": "sự tiếp xúc"
  },
  {
    "word": "polite",
    "mean": "lịch sự"
  },
  {
    "word": "behavior",
    "mean": "hành vi"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "giving",
    "mean": "chỉ dẫn; đưa"
  },
  {
    "word": "answers",
    "mean": "câu trả lời"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "through",
    "mean": "qua; thông qua"
  },
  {
    "word": "regular",
    "mean": "thường xuyên"
  },
  {
    "word": "practice",
    "mean": "luyện tập"
  },
  {
    "word": "reading",
    "mean": "đọc"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "writing",
    "mean": "viết"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "develop",
    "mean": "phát triển"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "over",
    "mean": "qua; trong suốt"
  },
  {
    "word": "successful",
    "mean": "thành công"
  },
  {
    "word": "friendships",
    "mean": "tình bạn"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
  },
  {
    "word": "workplaces",
    "mean": "nơi làm việc"
  },
  {
    "word": "greater",
    "mean": "lớn hơn"
  },
  {
    "word": "success",
    "mean": "thành công"
  }
];

const newEx4Data = [
  {
    "word": "shopping",
    "mean": "mua sắm"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "happen",
    "mean": "xảy ra"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "markets",
    "mean": "chợ"
  },
  {
    "word": "supermarkets",
    "mean": "siêu thị"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "stores",
    "mean": "cửa hàng"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "shop",
    "mean": "cửa hàng"
  },
  {
    "word": "assistants",
    "mean": "nhân viên bán hàng"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "prices",
    "mean": "giá cả"
  },
  {
    "word": "sizes",
    "mean": "kích cỡ"
  },
  {
    "word": "colors",
    "mean": "màu sắc"
  },
  {
    "word": "payment",
    "mean": "thanh toán"
  },
  {
    "word": "methods",
    "mean": "phương thức"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "pleasant",
    "mean": "dễ chịu"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "involved",
    "mean": "liên quan"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "discounts",
    "mean": "giảm giá"
  },
  {
    "word": "product",
    "mean": "sản phẩm"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "available",
    "mean": "có sẵn"
  },
  {
    "word": "answer",
    "mean": "trả lời"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "recommend",
    "mean": "giới thiệu; đề xuất"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "items",
    "mean": "mặt hàng"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "sides",
    "mean": "phía; bên"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "other",
    "mean": "khác; nhau"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "smiling",
    "mean": "mỉm cười"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "misunderstandings",
    "mean": "những hiểu lầm"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "thank",
    "mean": "cảm ơn"
  },
  {
    "word": "assistant",
    "mean": "nhân viên bán hàng"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
  },
  {
    "word": "receiving",
    "mean": "nhận"
  },
  {
    "word": "help",
    "mean": "giúp đỡ"
  },
  {
    "word": "respect",
    "mean": "sự tôn trọng; tôn trọng"
  },
  {
    "word": "patience",
    "mean": "sự kiên nhẫn"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "make",
    "mean": "làm; khiến"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "visit",
    "mean": "ghé thăm"
  },
  {
    "word": "store",
    "mean": "cửa hàng"
  },
  {
    "word": "again",
    "mean": "lại"
  },
  {
    "word": "restaurant",
    "mean": "nhà hàng"
  },
  {
    "word": "eating",
    "mean": "ăn uống"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "waiters",
    "mean": "nhân viên phục vụ"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "order",
    "mean": "gọi; đặt"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "confusion",
    "mean": "sự nhầm lẫn"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "waiting",
    "mean": "chờ đợi"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "menu",
    "mean": "thực đơn"
  },
  {
    "word": "ordering",
    "mean": "gọi món"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "portion",
    "mean": "khẩu phần"
  },
  {
    "word": "recommended",
    "mean": "được giới thiệu"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "saying",
    "mean": "việc nói"
  },
  {
    "word": "please",
    "mean": "làm ơn"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "manners",
    "mean": "phép lịch sự"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "patiently",
    "mean": "kiên nhẫn"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "bill",
    "mean": "hóa đơn"
  },
  {
    "word": "leaving",
    "mean": "rời đi"
  },
  {
    "word": "respectful",
    "mean": "tôn trọng; lịch sự"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "dining",
    "mean": "dùng bữa"
  },
  {
    "word": "leaves",
    "mean": "rời đi"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "feeling",
    "mean": "cảm xúc"
  },
  {
    "word": "afterward",
    "mean": "sau đó"
  },
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "colleagues",
    "mean": "đồng nghiệp"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "lessons",
    "mean": "bài học"
  },
  {
    "word": "work",
    "mean": "công việc; làm việc"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "schedules",
    "mean": "lịch trình"
  },
  {
    "word": "projects",
    "mean": "dự án"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "responsibilities",
    "mean": "trách nhiệm"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "successfully",
    "mean": "thành công"
  },
  {
    "word": "greet",
    "mean": "chào hỏi"
  },
  {
    "word": "starting",
    "mean": "bắt đầu"
  },
  {
    "word": "conversation",
    "mean": "cuộc trò chuyện"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "using",
    "mean": "sử dụng"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "solve",
    "mean": "giải quyết"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "effectively",
    "mean": "hiệu quả"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "depend",
    "mean": "phụ thuộc"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "cooperation",
    "mean": "sự hợp tác"
  },
  {
    "word": "appreciate",
    "mean": "trân trọng"
  },
  {
    "word": "respectfully",
    "mean": "một cách tôn trọng"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "learning",
    "mean": "học tập"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "strong",
    "mean": "bền chặt; mạnh mẽ"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "express",
    "mean": "bày tỏ"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "effective",
    "mean": "hiệu quả"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "teamwork",
    "mean": "làm việc nhóm"
  },
  {
    "word": "situations",
    "mean": "tình huống"
  },
  {
    "word": "single",
    "mean": "đơn lẻ; mỗi"
  },
  {
    "word": "communicators",
    "mean": "người giao tiếp"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "maintain",
    "mean": "duy trì"
  },
  {
    "word": "attitude",
    "mean": "thái độ"
  },
  {
    "word": "eye",
    "mean": "mắt"
  },
  {
    "word": "contact",
    "mean": "sự tiếp xúc"
  },
  {
    "word": "polite",
    "mean": "lịch sự"
  },
  {
    "word": "behavior",
    "mean": "hành vi"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "giving",
    "mean": "chỉ dẫn; đưa"
  },
  {
    "word": "answers",
    "mean": "câu trả lời"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "through",
    "mean": "qua; thông qua"
  },
  {
    "word": "regular",
    "mean": "thường xuyên"
  },
  {
    "word": "practice",
    "mean": "luyện tập"
  },
  {
    "word": "reading",
    "mean": "đọc"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "writing",
    "mean": "viết"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "develop",
    "mean": "phát triển"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "over",
    "mean": "qua; trong suốt"
  },
  {
    "word": "successful",
    "mean": "thành công"
  },
  {
    "word": "friendships",
    "mean": "tình bạn"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
  },
  {
    "word": "workplaces",
    "mean": "nơi làm việc"
  },
  {
    "word": "greater",
    "mean": "lớn hơn"
  },
  {
    "word": "success",
    "mean": "thành công"
  }
];

const newEx5Data = [
  "Good communicators listen carefully before speaking.",
  "Good manners are important in every restaurant.",
  "Everyone leaves with a happy feeling afterward.",
  "Good shopping conversations save time and avoid misunderstandings.",
  "Waiters answer questions politely and bring food carefully.",
  "Speaking clearly and using respectful language reduce misunderstandings.",
  "Good relationships depend on kindness, patience, and cooperation.",
  "Everyone can improve communication skills through regular practice.",
  "Speaking politely helps both sides understand each other better.",
  "Smiling also creates a comfortable shopping atmosphere for everyone."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Shopping conversations happen every day in markets, supermarkets, and small stores."
  },
  {
    "id": 2,
    "correct": "Customers and shop assistants talk about products, prices, sizes, colors, and payment methods."
  },
  {
    "id": 3,
    "correct": "Friendly communication makes shopping easier and creates a pleasant experience for everyone involved."
  },
  {
    "id": 4,
    "correct": "Customers often ask about discounts, product quality, or available colors."
  },
  {
    "id": 5,
    "correct": "Shop assistants answer questions, recommend suitable items, and explain prices clearly."
  },
  {
    "id": 6,
    "correct": "Speaking politely helps both sides understand each other better."
  },
  {
    "id": 7,
    "correct": "Smiling also creates a comfortable shopping atmosphere for everyone."
  },
  {
    "id": 8,
    "correct": "Good shopping conversations save time and avoid misunderstandings."
  },
  {
    "id": 9,
    "correct": "Customers should thank the shop assistant after buying something or receiving help."
  },
  {
    "id": 10,
    "correct": "Respect, patience, and clear communication make shopping more enjoyable."
  },
  {
    "id": 11,
    "correct": "Positive conversations also encourage customers to visit the store again."
  },
  {
    "id": 12,
    "correct": "Eating at a restaurant is a pleasant experience for many people."
  },
  {
    "id": 13,
    "correct": "Customers communicate with waiters to choose food, order drinks, and ask about special dishes."
  },
  {
    "id": 14,
    "correct": "Good communication helps everyone enjoy the meal without confusion or unnecessary waiting."
  },
  {
    "id": 15,
    "correct": "Customers usually read the menu before ordering their meals."
  }
];

const newEx7Data = [
  {
    "q": "What do customers and shop assistants talk about?",
    "a": "They talk about products, prices, sizes, colors, and payment methods."
  },
  {
    "q": "Why is polite communication useful when shopping?",
    "a": "It helps both sides understand each other and makes shopping more enjoyable."
  },
  {
    "q": "What can customers ask about in a restaurant?",
    "a": "They may ask about ingredients, portion sizes, or recommended dishes."
  },
  {
    "q": "What should customers do before leaving a restaurant?",
    "a": "They should pay the bill before leaving."
  },
  {
    "q": "What topics do teachers or colleagues discuss?",
    "a": "They discuss lessons, work tasks, schedules, projects, and future plans."
  },
  {
    "q": "How can respectful language help at school or work?",
    "a": "It reduces misunderstandings and supports successful communication."
  },
  {
    "q": "What do good communication skills help people do?",
    "a": "They help people express ideas clearly, understand others, and build strong relationships."
  },
  {
    "q": "What behaviors improve conversations?",
    "a": "Eye contact, polite language, respectful behavior, careful listening, and clear speaking improve conversations."
  },
  {
    "q": "How can everyone improve communication skills?",
    "a": "Everyone can improve them through regular practice in reading, listening, speaking, and writing."
  },
  {
    "q": "What can strong communication skills bring?",
    "a": "They can bring better friendships, happier workplaces, and greater success in life."
  }
];

