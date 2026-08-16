// ===== routine02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Cleaning takes less time when I do a little each day, so I try not to be _____.",
    "a": "lazy"
  },
  {
    "q": "2. I drink a glass of water after waking up and carry a _____ with me.",
    "a": "bottle"
  },
  {
    "q": "3. To improve my speaking, I read sentences aloud and _____ to myself about my day.",
    "a": "talk"
  },
  {
    "q": "4. When the weather is hot, I drink more because I lose water through _____.",
    "a": "sweat"
  },
  {
    "q": "5. Drinking water regularly is simple, inexpensive, and good for my health every _____ day.",
    "a": "single"
  },
  {
    "q": "6. I sweep the floor, wipe the desk, and open the window for _____ air.",
    "a": "fresh"
  },
  {
    "q": "7. A short practice every day is better than a long lesson once a _____.",
    "a": "month"
  },
  {
    "q": "8. This useful habit makes me more confident and helps me communicate with _____ everywhere.",
    "a": "people"
  },
  {
    "q": "9. I clean my room regularly because I like a neat and comfortable _____ as part of a healthy and organized daily routine.",
    "a": "space"
  },
  {
    "q": "10. Every morning, I make my bed and put dirty clothes in a _____ while building useful habits for everyday life.",
    "a": "basket"
  },
  {
    "q": "11. I learn five new words each morning and review them in the _____ so the routine remains simple and helpful each day.",
    "a": "evening"
  },
  {
    "q": "12. We ask easy questions, correct small mistakes, and encourage each other to _____ and this supports a balanced schedule for the whole day.",
    "a": "continue"
  },
  {
    "q": "13. I choose clean water instead of sweet drinks most of the _____ as part of a healthy and organized daily routine.",
    "a": "time"
  },
  {
    "q": "14. I also listen to short English videos, songs, or simple _____ online while building useful habits for everyday life.",
    "a": "conversations"
  },
  {
    "q": "15. Drinking enough water is an important habit in my daily _____ so the routine remains simple and helpful each day.",
    "a": "life"
  },
  {
    "q": "16. To remember this habit, I put my bottle on my _____ and this supports a balanced schedule for the whole day.",
    "a": "desk"
  },
  {
    "q": "17. Sometimes I give away old items that I no longer _____ as part of a healthy and organized daily routine.",
    "a": "need"
  },
  {
    "q": "18. A tidy room helps me find things quickly and _____ better while building useful habits for everyday life.",
    "a": "study"
  },
  {
    "q": "19. Learning a language takes time, so I try to be _____ so the routine remains simple and helpful each day.",
    "a": "patient"
  },
  {
    "q": "20. Water helps my body work well and keeps me _____ and this supports a balanced schedule for the whole day.",
    "a": "active"
  }
];

const newEx2Data = [
  {
    "q": "1. When does the writer drink a glass of water?",
    "opts": [
      "The writer drinks a glass of water after waking up.",
      "Because the writer loses water through sweat.",
      "The writer usually chooses clean water instead of sweet drinks.",
      "The writer makes the bed and puts dirty clothes in a basket."
    ],
    "a": "The writer drinks a glass of water after waking up."
  },
  {
    "q": "2. Why does the writer drink more water in hot weather?",
    "opts": [
      "The writer usually chooses clean water instead of sweet drinks.",
      "Because the writer loses water through sweat.",
      "The writer makes the bed and puts dirty clothes in a basket.",
      "The writer sweeps the floor, wipes the desk, and opens the window."
    ],
    "a": "Because the writer loses water through sweat."
  },
  {
    "q": "3. What kind of drinks does the writer usually choose?",
    "opts": [
      "The writer makes the bed and puts dirty clothes in a basket.",
      "The writer sweeps the floor, wipes the desk, and opens the window.",
      "The writer usually chooses clean water instead of sweet drinks.",
      "It helps the writer find things quickly, study better, and feel calm."
    ],
    "a": "The writer usually chooses clean water instead of sweet drinks."
  },
  {
    "q": "4. How does the writer keep the room tidy every morning?",
    "opts": [
      "The writer sweeps the floor, wipes the desk, and opens the window.",
      "It helps the writer find things quickly, study better, and feel calm.",
      "The writer learns five new words each morning.",
      "The writer makes the bed and puts dirty clothes in a basket."
    ],
    "a": "The writer makes the bed and puts dirty clothes in a basket."
  },
  {
    "q": "5. What cleaning tasks does the writer do at weekends?",
    "opts": [
      "The writer sweeps the floor, wipes the desk, and opens the window.",
      "It helps the writer find things quickly, study better, and feel calm.",
      "The writer learns five new words each morning.",
      "The writer reads sentences aloud, talks to themselves, and sometimes practices with classmates."
    ],
    "a": "The writer sweeps the floor, wipes the desk, and opens the window."
  },
  {
    "q": "6. Why is a tidy room helpful?",
    "opts": [
      "The writer learns five new words each morning.",
      "It helps the writer find things quickly, study better, and feel calm.",
      "The writer reads sentences aloud, talks to themselves, and sometimes practices with classmates.",
      "Because learning a language takes time."
    ],
    "a": "It helps the writer find things quickly, study better, and feel calm."
  },
  {
    "q": "7. How many new English words does the writer learn each morning?",
    "opts": [
      "The writer reads sentences aloud, talks to themselves, and sometimes practices with classmates.",
      "Because learning a language takes time.",
      "The writer learns five new words each morning.",
      "It builds confidence, improves communication, and shows steady progress."
    ],
    "a": "The writer learns five new words each morning."
  },
  {
    "q": "8. How does the writer practice speaking English?",
    "opts": [
      "Because learning a language takes time.",
      "It builds confidence, improves communication, and shows steady progress.",
      "The writer drinks a glass of water after waking up.",
      "The writer reads sentences aloud, talks to themselves, and sometimes practices with classmates."
    ],
    "a": "The writer reads sentences aloud, talks to themselves, and sometimes practices with classmates."
  },
  {
    "q": "9. Why does the writer try to be patient when learning English?",
    "opts": [
      "Because learning a language takes time.",
      "It builds confidence, improves communication, and shows steady progress.",
      "The writer drinks a glass of water after waking up.",
      "Because the writer loses water through sweat."
    ],
    "a": "Because learning a language takes time."
  },
  {
    "q": "10. What does daily English practice help the writer do?",
    "opts": [
      "The writer drinks a glass of water after waking up.",
      "It builds confidence, improves communication, and shows steady progress.",
      "Because the writer loses water through sweat.",
      "The writer usually chooses clean water instead of sweet drinks."
    ],
    "a": "It builds confidence, improves communication, and shows steady progress."
  },
  {
    "q": "11. What is the Vietnamese meaning of “drinking”?",
    "opts": [
      "mang",
      "thời tiết",
      "việc uống",
      "phần lớn"
    ],
    "a": "việc uống"
  },
  {
    "q": "12. What is the Vietnamese meaning of “habit”?",
    "opts": [
      "tập thể dục",
      "mất",
      "bàn học; bàn làm việc",
      "thói quen"
    ],
    "a": "thói quen"
  },
  {
    "q": "13. What is the Vietnamese meaning of “glass”?",
    "opts": [
      "cốc; ly",
      "tốt",
      "thay vào đó",
      "trống; hết"
    ],
    "a": "cốc; ly"
  },
  {
    "q": "14. What is the Vietnamese meaning of “meals”?",
    "opts": [
      "bởi vì",
      "bữa ăn",
      "đặt; để",
      "mỗi"
    ],
    "a": "bữa ăn"
  },
  {
    "q": "15. What is the Vietnamese meaning of “weather”?",
    "opts": [
      "phần lớn",
      "không đắt; ít tốn kém",
      "thời tiết",
      "gọn gàng"
    ],
    "a": "thời tiết"
  },
  {
    "q": "16. What is the Vietnamese meaning of “remember”?",
    "opts": [
      "sức khỏe",
      "ngăn nắp",
      "trường học",
      "tưởng nhớ"
    ],
    "a": "tưởng nhớ"
  },
  {
    "q": "17. What is the Vietnamese meaning of “family”?",
    "opts": [
      "gia đình",
      "làm; tạo",
      "dành (thời gian)",
      "ra xa"
    ],
    "a": "gia đình"
  },
  {
    "q": "18. What is the Vietnamese meaning of “places”?",
    "opts": [
      "đôi khi",
      "nơi; đặt",
      "tốt hơn",
      "thử"
    ],
    "a": "nơi; đặt"
  },
  {
    "q": "19. What is the Vietnamese meaning of “little”?",
    "opts": [
      "phần",
      "bài hát; tiếng hót",
      "một chút; ít",
      "sự luyện tập"
    ],
    "a": "một chút; ít"
  },
  {
    "q": "20. What is the Vietnamese meaning of “aloud”?",
    "opts": [
      "khuyến khích",
      "tự tin",
      "quan trọng",
      "thành tiếng"
    ],
    "a": "thành tiếng"
  }
];

const newEx3Data = [
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "habit",
    "mean": "thói quen"
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
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "glass",
    "mean": "cốc; ly"
  },
  {
    "word": "waking",
    "mean": "việc thức dậy"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "bottle",
    "mean": "chai"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "weather",
    "mean": "thời tiết"
  },
  {
    "word": "hot",
    "mean": "nóng"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "lose",
    "mean": "mất"
  },
  {
    "word": "sweat",
    "mean": "mồ hôi"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "instead",
    "mean": "thay vào đó"
  },
  {
    "word": "sweet",
    "mean": "ngọt"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "remember",
    "mean": "tưởng nhớ"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "desk",
    "mean": "bàn học; bàn làm việc"
  },
  {
    "word": "fill",
    "mean": "lấp đầy; lan tỏa"
  },
  {
    "word": "again",
    "mean": "lại; một lần nữa"
  },
  {
    "word": "becomes",
    "mean": "trở nên"
  },
  {
    "word": "empty",
    "mean": "trống; hết"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "inexpensive",
    "mean": "không đắt; ít tốn kém"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "follows",
    "mean": "làm theo; duy trì"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "neat",
    "mean": "ngăn nắp"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "space",
    "mean": "không gian"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "basket",
    "mean": "giỏ"
  },
  {
    "word": "return",
    "mean": "trở về"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "places",
    "mean": "nơi; đặt"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "cleaning",
    "mean": "việc dọn dẹp"
  },
  {
    "word": "sweep",
    "mean": "quét"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "wipe",
    "mean": "lau"
  },
  {
    "word": "open",
    "mean": "mở"
  },
  {
    "word": "window",
    "mean": "cửa sổ"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "away",
    "mean": "ra xa"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "items",
    "mean": "mặt hàng"
  },
  {
    "word": "no",
    "mean": "không; không còn"
  },
  {
    "word": "longer",
    "mean": "lâu hơn; nữa"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "calm",
    "mean": "bình tĩnh"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "takes",
    "mean": "diễn ra"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "little",
    "mean": "một chút; ít"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "so",
    "mean": "vì vậy"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "lazy",
    "mean": "lười biếng"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "enjoys",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "practicing",
    "mean": "việc luyện tập"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "routine",
    "mean": "thói quen"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "five",
    "mean": "năm"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "review",
    "mean": "ôn lại"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "videos",
    "mean": "video"
  },
  {
    "word": "songs",
    "mean": "bài hát; tiếng hót"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "aloud",
    "mean": "thành tiếng"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "myself",
    "mean": "bản thân tôi"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "classmates",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "easy",
    "mean": "dễ"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "correct",
    "mean": "sửa; chỉnh"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "other",
    "mean": "người khác; nhau"
  },
  {
    "word": "continue",
    "mean": "tiếp tục"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "lesson",
    "mean": "bài học"
  },
  {
    "word": "once",
    "mean": "một lần"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "confident",
    "mean": "tự tin"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "steady",
    "mean": "ổn định"
  },
  {
    "word": "progress",
    "mean": "sự tiến bộ"
  }
];

const newEx4Data = [
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "habit",
    "mean": "thói quen"
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
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "glass",
    "mean": "cốc; ly"
  },
  {
    "word": "waking",
    "mean": "việc thức dậy"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "bottle",
    "mean": "chai"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "weather",
    "mean": "thời tiết"
  },
  {
    "word": "hot",
    "mean": "nóng"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "lose",
    "mean": "mất"
  },
  {
    "word": "sweat",
    "mean": "mồ hôi"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "instead",
    "mean": "thay vào đó"
  },
  {
    "word": "sweet",
    "mean": "ngọt"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "remember",
    "mean": "tưởng nhớ"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "desk",
    "mean": "bàn học; bàn làm việc"
  },
  {
    "word": "fill",
    "mean": "lấp đầy; lan tỏa"
  },
  {
    "word": "again",
    "mean": "lại; một lần nữa"
  },
  {
    "word": "becomes",
    "mean": "trở nên"
  },
  {
    "word": "empty",
    "mean": "trống; hết"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "inexpensive",
    "mean": "không đắt; ít tốn kém"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "follows",
    "mean": "làm theo; duy trì"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "neat",
    "mean": "ngăn nắp"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "space",
    "mean": "không gian"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "basket",
    "mean": "giỏ"
  },
  {
    "word": "return",
    "mean": "trở về"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "places",
    "mean": "nơi; đặt"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "cleaning",
    "mean": "việc dọn dẹp"
  },
  {
    "word": "sweep",
    "mean": "quét"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "wipe",
    "mean": "lau"
  },
  {
    "word": "open",
    "mean": "mở"
  },
  {
    "word": "window",
    "mean": "cửa sổ"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "away",
    "mean": "ra xa"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "items",
    "mean": "mặt hàng"
  },
  {
    "word": "no",
    "mean": "không; không còn"
  },
  {
    "word": "longer",
    "mean": "lâu hơn; nữa"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "calm",
    "mean": "bình tĩnh"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "takes",
    "mean": "diễn ra"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "little",
    "mean": "một chút; ít"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "so",
    "mean": "vì vậy"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "lazy",
    "mean": "lười biếng"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "enjoys",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "practicing",
    "mean": "việc luyện tập"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "routine",
    "mean": "thói quen"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "five",
    "mean": "năm"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "review",
    "mean": "ôn lại"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "videos",
    "mean": "video"
  },
  {
    "word": "songs",
    "mean": "bài hát; tiếng hót"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "aloud",
    "mean": "thành tiếng"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "myself",
    "mean": "bản thân tôi"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "classmates",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "easy",
    "mean": "dễ"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "correct",
    "mean": "sửa; chỉnh"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "other",
    "mean": "người khác; nhau"
  },
  {
    "word": "continue",
    "mean": "tiếp tục"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "lesson",
    "mean": "bài học"
  },
  {
    "word": "once",
    "mean": "một lần"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "confident",
    "mean": "tự tin"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "steady",
    "mean": "ổn định"
  },
  {
    "word": "progress",
    "mean": "sự tiến bộ"
  }
];

const newEx5Data = [
  "Drinking enough water is an important habit in my daily life.",
  "I drink a glass of water after waking up and carry a bottle with me.",
  "I also drink water during meals and after exercise.",
  "Water helps my body work well and keeps me active.",
  "When the weather is hot, I drink more because I lose water through sweat.",
  "I choose clean water instead of sweet drinks most of the time.",
  "To remember this habit, I put my bottle on my desk.",
  "I fill it again when it becomes empty.",
  "Drinking water regularly is simple, inexpensive, and good for my health every single day.",
  "My family follows this habit too."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Drinking enough water is an important habit in my daily life."
  },
  {
    "id": 2,
    "correct": "I drink a glass of water after waking up and carry a bottle with me."
  },
  {
    "id": 3,
    "correct": "I also drink water during meals and after exercise."
  },
  {
    "id": 4,
    "correct": "Water helps my body work well and keeps me active."
  },
  {
    "id": 5,
    "correct": "When the weather is hot, I drink more because I lose water through sweat."
  },
  {
    "id": 6,
    "correct": "I choose clean water instead of sweet drinks most of the time."
  },
  {
    "id": 7,
    "correct": "To remember this habit, I put my bottle on my desk."
  },
  {
    "id": 8,
    "correct": "I fill it again when it becomes empty."
  },
  {
    "id": 9,
    "correct": "Drinking water regularly is simple, inexpensive, and good for my health every single day."
  },
  {
    "id": 10,
    "correct": "My family follows this habit too."
  },
  {
    "id": 11,
    "correct": "I clean my room regularly because I like a neat and comfortable space."
  },
  {
    "id": 12,
    "correct": "Every morning, I make my bed and put dirty clothes in a basket."
  },
  {
    "id": 13,
    "correct": "I also return books and school things to their places."
  },
  {
    "id": 14,
    "correct": "At weekends, I spend more time cleaning."
  },
  {
    "id": 15,
    "correct": "I sweep the floor, wipe the desk, and open the window for fresh air."
  }
];

const newEx7Data = [
  {
    "q": "When does the writer drink a glass of water?",
    "a": "The writer drinks a glass of water after waking up."
  },
  {
    "q": "Why does the writer drink more water in hot weather?",
    "a": "Because the writer loses water through sweat."
  },
  {
    "q": "What kind of drinks does the writer usually choose?",
    "a": "The writer usually chooses clean water instead of sweet drinks."
  },
  {
    "q": "How does the writer keep the room tidy every morning?",
    "a": "The writer makes the bed and puts dirty clothes in a basket."
  },
  {
    "q": "What cleaning tasks does the writer do at weekends?",
    "a": "The writer sweeps the floor, wipes the desk, and opens the window."
  },
  {
    "q": "Why is a tidy room helpful?",
    "a": "It helps the writer find things quickly, study better, and feel calm."
  },
  {
    "q": "How many new English words does the writer learn each morning?",
    "a": "The writer learns five new words each morning."
  },
  {
    "q": "How does the writer practice speaking English?",
    "a": "The writer reads sentences aloud, talks to themselves, and sometimes practices with classmates."
  },
  {
    "q": "Why does the writer try to be patient when learning English?",
    "a": "Because learning a language takes time."
  },
  {
    "q": "What does daily English practice help the writer do?",
    "a": "It builds confidence, improves communication, and shows steady progress."
  }
];

