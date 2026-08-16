// ===== communication02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Messages help friends, families, classmates, and coworkers stay connected wherever they are _____ day.",
    "a": "every"
  },
  {
    "q": "2. People send messages to make plans, ask questions, give reminders, or share good _____.",
    "a": "news"
  },
  {
    "q": "3. Using polite words and checking spelling before sending can prevent confusion and improve communication between _____.",
    "a": "people"
  },
  {
    "q": "4. Clear communication helps build stronger relationships, save time, and make daily life more _____.",
    "a": "convenient"
  },
  {
    "q": "5. Asking politely makes others feel respected and more willing to offer useful assistance when _____.",
    "a": "needed"
  },
  {
    "q": "6. Saying please and thank you shows good manners and appreciation for another person's _____.",
    "a": "time"
  },
  {
    "q": "7. Clear directions help people arrive safely and save time during their _____ every day.",
    "a": "journeys"
  },
  {
    "q": "8. People usually use simple words like left, right, straight, across, and _____ to for clear communication every day.",
    "a": "next"
  },
  {
    "q": "9. Sending messages is a fast and easy way to communicate _____ for clear communication every day.",
    "a": "today"
  },
  {
    "q": "10. People use mobile phones, emails, and social media to share _____ for clear communication every day.",
    "a": "information"
  },
  {
    "q": "11. Short and clear sentences make messages easy to _____ for clear communication every day.",
    "a": "understand"
  },
  {
    "q": "12. Good messages should be friendly, respectful, and easy to _____ for clear communication every day.",
    "a": "read"
  },
  {
    "q": "13. People should reply on time when possible and avoid sending unnecessary _____ for clear communication every day.",
    "a": "messages"
  },
  {
    "q": "14. Asking for help is a normal part of everyday _____ for clear communication every day.",
    "a": "life"
  },
  {
    "q": "15. Everyone sometimes needs support with school, work, shopping, or other _____ for clear communication every day.",
    "a": "activities"
  },
  {
    "q": "16. People can ask teachers, family members, friends, neighbors, or coworkers for _____ for clear communication every day.",
    "a": "help"
  },
  {
    "q": "17. They should explain the problem clearly and listen carefully to the _____ for clear communication every day.",
    "a": "advice"
  },
  {
    "q": "18. Helping each other creates stronger relationships and happier _____ for clear communication every day.",
    "a": "communities"
  },
  {
    "q": "19. People should never feel embarrassed about asking questions or requesting _____ for clear communication every day.",
    "a": "support"
  },
  {
    "q": "20. Kindness, respect, and gratitude make communication _____ for clear communication every day in everyday communication situations.",
    "a": "easier"
  }
];

const newEx2Data = [
  {
    "q": "1. Choose the best word to complete the sentence: Messages help friends, families, classmates, and coworkers stay connected wherever they are _____ day.",
    "opts": [
      "every",
      "more",
      "another",
      "each"
    ],
    "a": "every"
  },
  {
    "q": "2. Choose the best word to complete the sentence: People send messages to make plans, ask questions, give reminders, or share good _____.",
    "opts": [
      "information",
      "news",
      "friends",
      "families"
    ],
    "a": "news"
  },
  {
    "q": "3. Choose the best word to complete the sentence: Using polite words and checking spelling before sending can prevent confusion and improve communication between _____.",
    "opts": [
      "coworkers",
      "day",
      "people",
      "plans"
    ],
    "a": "people"
  },
  {
    "q": "4. Choose the best word to complete the sentence: Clear communication helps build stronger relationships, save time, and make daily life more _____.",
    "opts": [
      "stronger",
      "daily",
      "normal",
      "convenient"
    ],
    "a": "convenient"
  },
  {
    "q": "5. Choose the best word to complete the sentence: Asking politely makes others feel respected and more willing to offer useful assistance when _____.",
    "opts": [
      "needed",
      "normal",
      "everyday",
      "respected"
    ],
    "a": "needed"
  },
  {
    "q": "6. Choose the best word to complete the sentence: Saying please and thank you shows good manners and appreciation for another person's _____.",
    "opts": [
      "spelling",
      "time",
      "confusion",
      "communication"
    ],
    "a": "time"
  },
  {
    "q": "7. Choose the best word to complete the sentence: Clear directions help people arrive safely and save time during their _____ every day.",
    "opts": [
      "time",
      "relationships",
      "journeys",
      "life"
    ],
    "a": "journeys"
  },
  {
    "q": "8. Choose the best word to complete the sentence: People usually use simple words like left, right, straight, across, and _____ to for clear communication every day.",
    "opts": [
      "together",
      "often",
      "safely",
      "next"
    ],
    "a": "next"
  },
  {
    "q": "9. Choose the best word to complete the sentence: Sending messages is a fast and easy way to communicate _____ for clear communication every day.",
    "opts": [
      "today",
      "left",
      "right",
      "straight"
    ],
    "a": "today"
  },
  {
    "q": "10. Choose the best word to complete the sentence: People use mobile phones, emails, and social media to share _____ for clear communication every day.",
    "opts": [
      "family",
      "information",
      "members",
      "neighbors"
    ],
    "a": "information"
  },
  {
    "q": "11. Choose the best word to complete the sentence: Short and clear sentences make messages easy to _____ for clear communication every day.",
    "opts": [
      "creates",
      "requesting",
      "understand",
      "working"
    ],
    "a": "understand"
  },
  {
    "q": "12. Choose the best word to complete the sentence: Good messages should be friendly, respectful, and easy to _____ for clear communication every day.",
    "opts": [
      "solve",
      "learn",
      "giving",
      "read"
    ],
    "a": "read"
  },
  {
    "q": "13. Choose the best word to complete the sentence: People should reply on time when possible and avoid sending unnecessary _____ for clear communication every day.",
    "opts": [
      "messages",
      "kindness",
      "respect",
      "gratitude"
    ],
    "a": "messages"
  },
  {
    "q": "14. Choose the best word to complete the sentence: Asking for help is a normal part of everyday _____ for clear communication every day.",
    "opts": [
      "problems",
      "life",
      "skills",
      "directions"
    ],
    "a": "life"
  },
  {
    "q": "15. Choose the best word to complete the sentence: Everyone sometimes needs support with school, work, shopping, or other _____ for clear communication every day.",
    "opts": [
      "skill",
      "visitors",
      "activities",
      "schools"
    ],
    "a": "activities"
  },
  {
    "q": "16. Choose the best word to complete the sentence: People can ask teachers, family members, friends, neighbors, or coworkers for _____ for clear communication every day.",
    "opts": [
      "sending",
      "communicate",
      "use",
      "help"
    ],
    "a": "help"
  },
  {
    "q": "17. Choose the best word to complete the sentence: They should explain the problem clearly and listen carefully to the _____ for clear communication every day.",
    "opts": [
      "advice",
      "stations",
      "parks",
      "journeys"
    ],
    "a": "advice"
  },
  {
    "q": "18. Choose the best word to complete the sentence: Helping each other creates stronger relationships and happier _____ for clear communication every day.",
    "opts": [
      "like",
      "communities",
      "traffic",
      "lights"
    ],
    "a": "communities"
  },
  {
    "q": "19. Choose the best word to complete the sentence: People should never feel embarrassed about asking questions or requesting _____ for clear communication every day.",
    "opts": [
      "ask",
      "give",
      "support",
      "understand"
    ],
    "a": "support"
  },
  {
    "q": "20. Choose the best word to complete the sentence: Kindness, respect, and gratitude make communication _____ for clear communication every day in everyday communication situations.",
    "opts": [
      "mobile",
      "social",
      "good",
      "easier"
    ],
    "a": "easier"
  }
];

const newEx3Data = [
  {
    "word": "sending",
    "mean": "gửi"
  },
  {
    "word": "messages",
    "mean": "tin nhắn"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "easy",
    "mean": "dễ dàng"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "mobile",
    "mean": "di động"
  },
  {
    "word": "phones",
    "mean": "điện thoại"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "social",
    "mean": "xã hội"
  },
  {
    "word": "media",
    "mean": "truyền thông"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "help",
    "mean": "giúp đỡ"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "classmates",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở lại"
  },
  {
    "word": "connected",
    "mean": "kết nối"
  },
  {
    "word": "wherever",
    "mean": "bất cứ nơi đâu"
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
    "word": "send",
    "mean": "gửi"
  },
  {
    "word": "make",
    "mean": "làm; khiến"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "give",
    "mean": "đưa; cho"
  },
  {
    "word": "reminders",
    "mean": "lời nhắc"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "news",
    "mean": "tin tức"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "using",
    "mean": "sử dụng"
  },
  {
    "word": "polite",
    "mean": "lịch sự"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "checking",
    "mean": "kiểm tra"
  },
  {
    "word": "spelling",
    "mean": "chính tả"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "confusion",
    "mean": "sự nhầm lẫn"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "between",
    "mean": "giữa"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "respectful",
    "mean": "tôn trọng; lịch sự"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "reply",
    "mean": "trả lời"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "possible",
    "mean": "có thể"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "stronger",
    "mean": "bền chặt hơn"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "normal",
    "mean": "bình thường"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "công việc; làm việc"
  },
  {
    "word": "shopping",
    "mean": "mua sắm"
  },
  {
    "word": "other",
    "mean": "khác; nhau"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "respected",
    "mean": "được tôn trọng"
  },
  {
    "word": "willing",
    "mean": "sẵn lòng"
  },
  {
    "word": "offer",
    "mean": "đề nghị; cung cấp"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "assistance",
    "mean": "sự giúp đỡ"
  },
  {
    "word": "needed",
    "mean": "cần thiết"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "members",
    "mean": "thành viên"
  },
  {
    "word": "neighbors",
    "mean": "hàng xóm"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "problem",
    "mean": "vấn đề"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "advice",
    "mean": "lời khuyên"
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
    "word": "thank",
    "mean": "cảm ơn"
  },
  {
    "word": "shows",
    "mean": "cho thấy"
  },
  {
    "word": "manners",
    "mean": "phép lịch sự"
  },
  {
    "word": "appreciation",
    "mean": "sự cảm kích"
  },
  {
    "word": "another",
    "mean": "một người khác"
  },
  {
    "word": "person's",
    "mean": "của một người"
  },
  {
    "word": "helping",
    "mean": "giúp đỡ"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
  },
  {
    "word": "communities",
    "mean": "cộng đồng"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "embarrassed",
    "mean": "ngại ngùng"
  },
  {
    "word": "requesting",
    "mean": "yêu cầu"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "respect",
    "mean": "sự tôn trọng; tôn trọng"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
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
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "giving",
    "mean": "chỉ dẫn; đưa"
  },
  {
    "word": "directions",
    "mean": "chỉ đường"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "skill",
    "mean": "kỹ năng"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "finding",
    "mean": "tìm"
  },
  {
    "word": "schools",
    "mean": "trường học"
  },
  {
    "word": "hospitals",
    "mean": "bệnh viện"
  },
  {
    "word": "restaurants",
    "mean": "nhà hàng"
  },
  {
    "word": "bus",
    "mean": "xe buýt"
  },
  {
    "word": "stations",
    "mean": "trạm; nhà ga"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "during",
    "mean": "trong suốt; trong khi"
  },
  {
    "word": "journeys",
    "mean": "hành trình"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "like",
    "mean": "như"
  },
  {
    "word": "left",
    "mean": "trái"
  },
  {
    "word": "right",
    "mean": "phải"
  },
  {
    "word": "straight",
    "mean": "thẳng"
  },
  {
    "word": "across",
    "mean": "băng qua; đối diện"
  },
  {
    "word": "next",
    "mean": "kế tiếp"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "mention",
    "mean": "đề cập"
  },
  {
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "bridges",
    "mean": "cầu"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "buildings",
    "mean": "tòa nhà"
  },
  {
    "word": "landmarks",
    "mean": "địa danh; mốc"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "correctly",
    "mean": "chính xác"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "repeat",
    "mean": "lặp lại"
  },
  {
    "word": "draw",
    "mean": "vẽ"
  },
  {
    "word": "map",
    "mean": "bản đồ"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "welcome",
    "mean": "được chào đón; chào mừng"
  },
  {
    "word": "strangers",
    "mean": "người lạ"
  },
  {
    "word": "caring",
    "mean": "quan tâm"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  }
];

const newEx4Data = [
  {
    "word": "sending",
    "mean": "gửi"
  },
  {
    "word": "messages",
    "mean": "tin nhắn"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "easy",
    "mean": "dễ dàng"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "mobile",
    "mean": "di động"
  },
  {
    "word": "phones",
    "mean": "điện thoại"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "social",
    "mean": "xã hội"
  },
  {
    "word": "media",
    "mean": "truyền thông"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "help",
    "mean": "giúp đỡ"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "classmates",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở lại"
  },
  {
    "word": "connected",
    "mean": "kết nối"
  },
  {
    "word": "wherever",
    "mean": "bất cứ nơi đâu"
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
    "word": "send",
    "mean": "gửi"
  },
  {
    "word": "make",
    "mean": "làm; khiến"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "give",
    "mean": "đưa; cho"
  },
  {
    "word": "reminders",
    "mean": "lời nhắc"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "news",
    "mean": "tin tức"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "using",
    "mean": "sử dụng"
  },
  {
    "word": "polite",
    "mean": "lịch sự"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "checking",
    "mean": "kiểm tra"
  },
  {
    "word": "spelling",
    "mean": "chính tả"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "confusion",
    "mean": "sự nhầm lẫn"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "between",
    "mean": "giữa"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "respectful",
    "mean": "tôn trọng; lịch sự"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "reply",
    "mean": "trả lời"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "possible",
    "mean": "có thể"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "stronger",
    "mean": "bền chặt hơn"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "normal",
    "mean": "bình thường"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "công việc; làm việc"
  },
  {
    "word": "shopping",
    "mean": "mua sắm"
  },
  {
    "word": "other",
    "mean": "khác; nhau"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "respected",
    "mean": "được tôn trọng"
  },
  {
    "word": "willing",
    "mean": "sẵn lòng"
  },
  {
    "word": "offer",
    "mean": "đề nghị; cung cấp"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "assistance",
    "mean": "sự giúp đỡ"
  },
  {
    "word": "needed",
    "mean": "cần thiết"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "members",
    "mean": "thành viên"
  },
  {
    "word": "neighbors",
    "mean": "hàng xóm"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "problem",
    "mean": "vấn đề"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "advice",
    "mean": "lời khuyên"
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
    "word": "thank",
    "mean": "cảm ơn"
  },
  {
    "word": "shows",
    "mean": "cho thấy"
  },
  {
    "word": "manners",
    "mean": "phép lịch sự"
  },
  {
    "word": "appreciation",
    "mean": "sự cảm kích"
  },
  {
    "word": "another",
    "mean": "một người khác"
  },
  {
    "word": "person's",
    "mean": "của một người"
  },
  {
    "word": "helping",
    "mean": "giúp đỡ"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
  },
  {
    "word": "communities",
    "mean": "cộng đồng"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "embarrassed",
    "mean": "ngại ngùng"
  },
  {
    "word": "requesting",
    "mean": "yêu cầu"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "respect",
    "mean": "sự tôn trọng; tôn trọng"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
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
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "giving",
    "mean": "chỉ dẫn; đưa"
  },
  {
    "word": "directions",
    "mean": "chỉ đường"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "skill",
    "mean": "kỹ năng"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "finding",
    "mean": "tìm"
  },
  {
    "word": "schools",
    "mean": "trường học"
  },
  {
    "word": "hospitals",
    "mean": "bệnh viện"
  },
  {
    "word": "restaurants",
    "mean": "nhà hàng"
  },
  {
    "word": "bus",
    "mean": "xe buýt"
  },
  {
    "word": "stations",
    "mean": "trạm; nhà ga"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "during",
    "mean": "trong suốt; trong khi"
  },
  {
    "word": "journeys",
    "mean": "hành trình"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "like",
    "mean": "như"
  },
  {
    "word": "left",
    "mean": "trái"
  },
  {
    "word": "right",
    "mean": "phải"
  },
  {
    "word": "straight",
    "mean": "thẳng"
  },
  {
    "word": "across",
    "mean": "băng qua; đối diện"
  },
  {
    "word": "next",
    "mean": "kế tiếp"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "mention",
    "mean": "đề cập"
  },
  {
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "bridges",
    "mean": "cầu"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "buildings",
    "mean": "tòa nhà"
  },
  {
    "word": "landmarks",
    "mean": "địa danh; mốc"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "correctly",
    "mean": "chính xác"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "repeat",
    "mean": "lặp lại"
  },
  {
    "word": "draw",
    "mean": "vẽ"
  },
  {
    "word": "map",
    "mean": "bản đồ"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "welcome",
    "mean": "được chào đón; chào mừng"
  },
  {
    "word": "strangers",
    "mean": "người lạ"
  },
  {
    "word": "caring",
    "mean": "quan tâm"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  }
];

const newEx5Data = [
  "Kindness, respect, and gratitude make communication easier.",
  "Short and clear sentences make messages easy to understand.",
  "Helping each other creates stronger relationships and happier communities.",
  "Being patient and polite is important when helping others.",
  "Good communication reduces confusion and makes visitors feel welcome.",
  "Helping strangers also creates a friendly and caring community.",
  "Good messages should be friendly, respectful, and easy to read.",
  "Asking for help is a normal part of everyday life.",
  "Working together helps everyone solve problems and learn new skills.",
  "Giving directions is an important communication skill in daily life."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Sending messages is a fast and easy way to communicate today."
  },
  {
    "id": 2,
    "correct": "People use mobile phones, emails, and social media to share information."
  },
  {
    "id": 3,
    "correct": "Messages help friends, families, classmates, and coworkers stay connected wherever they are every day."
  },
  {
    "id": 4,
    "correct": "People send messages to make plans, ask questions, give reminders, or share good news."
  },
  {
    "id": 5,
    "correct": "Short and clear sentences make messages easy to understand."
  },
  {
    "id": 6,
    "correct": "Using polite words and checking spelling before sending can prevent confusion and improve communication between people."
  },
  {
    "id": 7,
    "correct": "Good messages should be friendly, respectful, and easy to read."
  },
  {
    "id": 8,
    "correct": "People should reply on time when possible and avoid sending unnecessary messages."
  },
  {
    "id": 9,
    "correct": "Clear communication helps build stronger relationships, save time, and make daily life more convenient."
  },
  {
    "id": 10,
    "correct": "Asking for help is a normal part of everyday life."
  },
  {
    "id": 11,
    "correct": "Everyone sometimes needs support with school, work, shopping, or other activities."
  },
  {
    "id": 12,
    "correct": "Asking politely makes others feel respected and more willing to offer useful assistance when needed."
  },
  {
    "id": 13,
    "correct": "People can ask teachers, family members, friends, neighbors, or coworkers for help."
  },
  {
    "id": 14,
    "correct": "They should explain the problem clearly and listen carefully to the advice."
  },
  {
    "id": 15,
    "correct": "Saying please and thank you shows good manners and appreciation for another person's time."
  }
];

const newEx7Data = [
  {
    "q": "Why do people send messages?",
    "a": "They send messages to make plans, ask questions, give reminders, or share good news."
  },
  {
    "q": "How can people make messages easy to understand?",
    "a": "They can use short, clear sentences and polite words."
  },
  {
    "q": "Why should people check spelling before sending a message?",
    "a": "It can prevent confusion and improve communication."
  },
  {
    "q": "Why is asking for help normal?",
    "a": "Everyone sometimes needs support with school, work, shopping, or other activities."
  },
  {
    "q": "How should people ask others for help?",
    "a": "They should ask politely, explain the problem clearly, and listen to advice."
  },
  {
    "q": "What do please and thank you show?",
    "a": "They show good manners and appreciation for another person's time."
  },
  {
    "q": "Why are clear directions useful?",
    "a": "They help people arrive safely and save time during journeys."
  },
  {
    "q": "What landmarks can people mention when giving directions?",
    "a": "They may mention traffic lights, bridges, or large buildings."
  },
  {
    "q": "What can someone do if directions are difficult to understand?",
    "a": "The helper can repeat the directions or draw a simple map."
  },
  {
    "q": "How does helping strangers affect a community?",
    "a": "It helps create a friendly and caring community."
  }
];

