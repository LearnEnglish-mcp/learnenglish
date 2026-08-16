// ===== communication01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Friends can meet at school, in a park, at a café, or _____ for clear communication every day.",
    "a": "online"
  },
  {
    "q": "2. Friendly conversations create happy memories, increase trust, and make every friendship stronger over _____.",
    "a": "time"
  },
  {
    "q": "3. Phone calls save time and allow people to share important information quickly, even when they are far _____.",
    "a": "apart"
  },
  {
    "q": "4. They ask about health, make plans, give news, or discuss work and _____ for clear communication every day.",
    "a": "school"
  },
  {
    "q": "5. Good phone communication helps build strong relationships, solve problems quickly, and keep people connected _____ day.",
    "a": "every"
  },
  {
    "q": "6. Talking with friends is an important part of daily _____ for clear communication every day.",
    "a": "life"
  },
  {
    "q": "7. Friends share ideas, feelings, and experiences _____ for clear communication every day in everyday communication situations.",
    "a": "together"
  },
  {
    "q": "8. They often talk about school, work, sports, movies, music, and future _____ for clear communication every day.",
    "a": "plans"
  },
  {
    "q": "9. Good conversations help people understand each other better and build strong _____ for clear communication every day.",
    "a": "friendships"
  },
  {
    "q": "10. They ask questions, listen carefully, and give honest _____ for clear communication every day.",
    "a": "opinions"
  },
  {
    "q": "11. Sometimes they tell funny stories or help solve _____ for clear communication every day.",
    "a": "problems"
  },
  {
    "q": "12. Kind words make conversations more enjoyable and comfortable for _____ for clear communication every day.",
    "a": "everyone"
  },
  {
    "q": "13. Good communication with friends needs respect and _____ for clear communication every day in everyday communication situations.",
    "a": "patience"
  },
  {
    "q": "14. People should speak politely, listen without interrupting, and support each _____ for clear communication every day.",
    "a": "other"
  },
  {
    "q": "15. Meeting new people is an exciting experience in _____ life for clear communication every day.",
    "a": "everyday"
  },
  {
    "q": "16. People often meet classmates, neighbors, coworkers, or travelers in different _____ for clear communication every day.",
    "a": "places"
  },
  {
    "q": "17. A friendly smile and polite greeting help begin a comfortable _____ for clear communication every day.",
    "a": "conversation"
  },
  {
    "q": "18. Good first impressions can lead to new friendships and useful _____ for clear communication every day.",
    "a": "connections"
  },
  {
    "q": "19. When meeting someone new, people usually introduce themselves _____ for clear communication every day.",
    "a": "first"
  },
  {
    "q": "20. They say their names, hometowns, jobs, hobbies, or favorite _____ for clear communication every day.",
    "a": "activities"
  }
];

const newEx2Data = [
  {
    "q": "1. Choose the best word to complete the sentence: Friends can meet at school, in a park, at a café, or _____ for clear communication every day.",
    "opts": [
      "online",
      "carefully",
      "sometimes",
      "politely"
    ],
    "a": "online"
  },
  {
    "q": "2. Choose the best word to complete the sentence: Friendly conversations create happy memories, increase trust, and make every friendship stronger over _____.",
    "opts": [
      "school",
      "time",
      "work",
      "sports"
    ],
    "a": "time"
  },
  {
    "q": "3. Choose the best word to complete the sentence: Phone calls save time and allow people to share important information quickly, even when they are far _____.",
    "opts": [
      "clearly",
      "quickly",
      "apart",
      "even"
    ],
    "a": "apart"
  },
  {
    "q": "4. Choose the best word to complete the sentence: They ask about health, make plans, give news, or discuss work and _____ for clear communication every day.",
    "opts": [
      "people",
      "friendships",
      "park",
      "school"
    ],
    "a": "school"
  },
  {
    "q": "5. Choose the best word to complete the sentence: Good phone communication helps build strong relationships, solve problems quickly, and keep people connected _____ day.",
    "opts": [
      "every",
      "work",
      "sports",
      "movies"
    ],
    "a": "every"
  },
  {
    "q": "6. Choose the best word to complete the sentence: Talking with friends is an important part of daily _____ for clear communication every day.",
    "opts": [
      "stories",
      "life",
      "problems",
      "words"
    ],
    "a": "life"
  },
  {
    "q": "7. Choose the best word to complete the sentence: Friends share ideas, feelings, and experiences _____ for clear communication every day in everyday communication situations.",
    "opts": [
      "also",
      "clearly",
      "together",
      "quickly"
    ],
    "a": "together"
  },
  {
    "q": "8. Choose the best word to complete the sentence: They often talk about school, work, sports, movies, music, and future _____ for clear communication every day.",
    "opts": [
      "memories",
      "trust",
      "friendship",
      "plans"
    ],
    "a": "plans"
  },
  {
    "q": "9. Choose the best word to complete the sentence: Good conversations help people understand each other better and build strong _____ for clear communication every day.",
    "opts": [
      "friendships",
      "time",
      "experience",
      "classmates"
    ],
    "a": "friendships"
  },
  {
    "q": "10. Choose the best word to complete the sentence: They ask questions, listen carefully, and give honest _____ for clear communication every day.",
    "opts": [
      "neighbors",
      "opinions",
      "coworkers",
      "travelers"
    ],
    "a": "opinions"
  },
  {
    "q": "11. Choose the best word to complete the sentence: Sometimes they tell funny stories or help solve _____ for clear communication every day.",
    "opts": [
      "places",
      "smile",
      "problems",
      "greeting"
    ],
    "a": "problems"
  },
  {
    "q": "12. Choose the best word to complete the sentence: Kind words make conversations more enjoyable and comfortable for _____ for clear communication every day.",
    "opts": [
      "other",
      "someone",
      "others",
      "everyone"
    ],
    "a": "everyone"
  },
  {
    "q": "13. Choose the best word to complete the sentence: Good communication with friends needs respect and _____ for clear communication every day in everyday communication situations.",
    "opts": [
      "patience",
      "names",
      "hometowns",
      "jobs"
    ],
    "a": "patience"
  },
  {
    "q": "14. Choose the best word to complete the sentence: People should speak politely, listen without interrupting, and support each _____ for clear communication every day.",
    "opts": [
      "everyone",
      "other",
      "someone",
      "others"
    ],
    "a": "other"
  },
  {
    "q": "15. Choose the best word to complete the sentence: Meeting new people is an exciting experience in _____ life for clear communication every day.",
    "opts": [
      "first",
      "useful",
      "everyday",
      "favorite"
    ],
    "a": "everyday"
  },
  {
    "q": "16. Choose the best word to complete the sentence: People often meet classmates, neighbors, coworkers, or travelers in different _____ for clear communication every day.",
    "opts": [
      "calls",
      "way",
      "day",
      "places"
    ],
    "a": "places"
  },
  {
    "q": "17. Choose the best word to complete the sentence: A friendly smile and polite greeting help begin a comfortable _____ for clear communication every day.",
    "opts": [
      "conversation",
      "family",
      "members",
      "businesses"
    ],
    "a": "conversation"
  },
  {
    "q": "18. Choose the best word to complete the sentence: Good first impressions can lead to new friendships and useful _____ for clear communication every day.",
    "opts": [
      "reasons",
      "connections",
      "information",
      "health"
    ],
    "a": "connections"
  },
  {
    "q": "19. Choose the best word to complete the sentence: When meeting someone new, people usually introduce themselves _____ for clear communication every day.",
    "opts": [
      "daily",
      "future",
      "first",
      "good"
    ],
    "a": "first"
  },
  {
    "q": "20. Choose the best word to complete the sentence: They say their names, hometowns, jobs, hobbies, or favorite _____ for clear communication every day.",
    "opts": [
      "details",
      "goodbye",
      "relationships",
      "activities"
    ],
    "a": "activities"
  }
];

const newEx3Data = [
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "important",
    "mean": "quan trọng"
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
    "word": "life",
    "mean": "cuộc sống"
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
    "word": "feelings",
    "mean": "cảm xúc"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
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
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "movies",
    "mean": "phim"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
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
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "help",
    "mean": "giúp đỡ"
  },
  {
    "word": "people",
    "mean": "mọi người"
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
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "strong",
    "mean": "bền chặt; mạnh mẽ"
  },
  {
    "word": "friendships",
    "mean": "tình bạn"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "meet",
    "mean": "gặp gỡ"
  },
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "café",
    "mean": "quán cà phê"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
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
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "give",
    "mean": "đưa; cho"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "tell",
    "mean": "kể; nói"
  },
  {
    "word": "funny",
    "mean": "hài hước"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
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
    "word": "kind",
    "mean": "tử tế"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
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
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "needs",
    "mean": "cần"
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
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "interrupting",
    "mean": "ngắt lời"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "memories",
    "mean": "kỷ niệm"
  },
  {
    "word": "increase",
    "mean": "tăng"
  },
  {
    "word": "trust",
    "mean": "niềm tin; tin tưởng"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "stronger",
    "mean": "bền chặt hơn"
  },
  {
    "word": "over",
    "mean": "qua; trong suốt"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "meeting",
    "mean": "gặp gỡ"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "exciting",
    "mean": "thú vị"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "classmates",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "neighbors",
    "mean": "hàng xóm"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
  },
  {
    "word": "travelers",
    "mean": "du khách; người đi đường"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "places",
    "mean": "nơi chốn"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "polite",
    "mean": "lịch sự"
  },
  {
    "word": "greeting",
    "mean": "lời chào"
  },
  {
    "word": "begin",
    "mean": "bắt đầu"
  },
  {
    "word": "conversation",
    "mean": "cuộc trò chuyện"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "impressions",
    "mean": "ấn tượng"
  },
  {
    "word": "lead",
    "mean": "dẫn đến"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "connections",
    "mean": "mối liên hệ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "someone",
    "mean": "ai đó"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "introduce",
    "mean": "giới thiệu"
  },
  {
    "word": "say",
    "mean": "nói"
  },
  {
    "word": "names",
    "mean": "tên"
  },
  {
    "word": "hometowns",
    "mean": "quê quán"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "hobbies",
    "mean": "sở thích"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "keeps",
    "mean": "giữ; làm cho tiếp tục"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "shows",
    "mean": "cho thấy"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "confident",
    "mean": "tự tin"
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
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "show",
    "mean": "thể hiện"
  },
  {
    "word": "interest",
    "mean": "sự quan tâm"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "honesty",
    "mean": "sự trung thực"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "valuable",
    "mean": "quý giá"
  },
  {
    "word": "making",
    "mean": "việc thực hiện"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "calls",
    "mean": "cuộc gọi"
  },
  {
    "word": "common",
    "mean": "phổ biến"
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
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "call",
    "mean": "gọi"
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
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "reasons",
    "mean": "lý do"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "allow",
    "mean": "cho phép"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "far",
    "mean": "xa"
  },
  {
    "word": "apart",
    "mean": "cách xa nhau"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "greet",
    "mean": "chào hỏi"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "news",
    "mean": "tin tức"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
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
    "word": "manners",
    "mean": "phép lịch sự"
  },
  {
    "word": "pleasant",
    "mean": "dễ chịu"
  },
  {
    "word": "effective",
    "mean": "hiệu quả"
  },
  {
    "word": "ending",
    "mean": "kết thúc"
  },
  {
    "word": "thank",
    "mean": "cảm ơn"
  },
  {
    "word": "confirm",
    "mean": "xác nhận"
  },
  {
    "word": "details",
    "mean": "chi tiết"
  },
  {
    "word": "goodbye",
    "mean": "lời tạm biệt"
  },
  {
    "word": "kindly",
    "mean": "một cách tử tế"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "keep",
    "mean": "giữ"
  },
  {
    "word": "connected",
    "mean": "kết nối"
  }
];

const newEx4Data = [
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "important",
    "mean": "quan trọng"
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
    "word": "life",
    "mean": "cuộc sống"
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
    "word": "feelings",
    "mean": "cảm xúc"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
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
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "movies",
    "mean": "phim"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
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
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "help",
    "mean": "giúp đỡ"
  },
  {
    "word": "people",
    "mean": "mọi người"
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
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "strong",
    "mean": "bền chặt; mạnh mẽ"
  },
  {
    "word": "friendships",
    "mean": "tình bạn"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "meet",
    "mean": "gặp gỡ"
  },
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "café",
    "mean": "quán cà phê"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
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
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "give",
    "mean": "đưa; cho"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "tell",
    "mean": "kể; nói"
  },
  {
    "word": "funny",
    "mean": "hài hước"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
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
    "word": "kind",
    "mean": "tử tế"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
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
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "needs",
    "mean": "cần"
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
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "interrupting",
    "mean": "ngắt lời"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "memories",
    "mean": "kỷ niệm"
  },
  {
    "word": "increase",
    "mean": "tăng"
  },
  {
    "word": "trust",
    "mean": "niềm tin; tin tưởng"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "stronger",
    "mean": "bền chặt hơn"
  },
  {
    "word": "over",
    "mean": "qua; trong suốt"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "meeting",
    "mean": "gặp gỡ"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "exciting",
    "mean": "thú vị"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "classmates",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "neighbors",
    "mean": "hàng xóm"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
  },
  {
    "word": "travelers",
    "mean": "du khách; người đi đường"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "places",
    "mean": "nơi chốn"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "polite",
    "mean": "lịch sự"
  },
  {
    "word": "greeting",
    "mean": "lời chào"
  },
  {
    "word": "begin",
    "mean": "bắt đầu"
  },
  {
    "word": "conversation",
    "mean": "cuộc trò chuyện"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "impressions",
    "mean": "ấn tượng"
  },
  {
    "word": "lead",
    "mean": "dẫn đến"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "connections",
    "mean": "mối liên hệ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "someone",
    "mean": "ai đó"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "introduce",
    "mean": "giới thiệu"
  },
  {
    "word": "say",
    "mean": "nói"
  },
  {
    "word": "names",
    "mean": "tên"
  },
  {
    "word": "hometowns",
    "mean": "quê quán"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "hobbies",
    "mean": "sở thích"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "keeps",
    "mean": "giữ; làm cho tiếp tục"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "shows",
    "mean": "cho thấy"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "confident",
    "mean": "tự tin"
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
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "show",
    "mean": "thể hiện"
  },
  {
    "word": "interest",
    "mean": "sự quan tâm"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "honesty",
    "mean": "sự trung thực"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "valuable",
    "mean": "quý giá"
  },
  {
    "word": "making",
    "mean": "việc thực hiện"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "calls",
    "mean": "cuộc gọi"
  },
  {
    "word": "common",
    "mean": "phổ biến"
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
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "call",
    "mean": "gọi"
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
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "reasons",
    "mean": "lý do"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "allow",
    "mean": "cho phép"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "far",
    "mean": "xa"
  },
  {
    "word": "apart",
    "mean": "cách xa nhau"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "greet",
    "mean": "chào hỏi"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "news",
    "mean": "tin tức"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
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
    "word": "manners",
    "mean": "phép lịch sự"
  },
  {
    "word": "pleasant",
    "mean": "dễ chịu"
  },
  {
    "word": "effective",
    "mean": "hiệu quả"
  },
  {
    "word": "ending",
    "mean": "kết thúc"
  },
  {
    "word": "thank",
    "mean": "cảm ơn"
  },
  {
    "word": "confirm",
    "mean": "xác nhận"
  },
  {
    "word": "details",
    "mean": "chi tiết"
  },
  {
    "word": "goodbye",
    "mean": "lời tạm biệt"
  },
  {
    "word": "kindly",
    "mean": "một cách tử tế"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "keep",
    "mean": "giữ"
  },
  {
    "word": "connected",
    "mean": "kết nối"
  }
];

const newEx5Data = [
  "Friends share ideas, feelings, and experiences together.",
  "Asking simple questions keeps the conversation interesting.",
  "Being polite and confident makes communication easier.",
  "Respect, kindness, and honesty help build trust.",
  "Good communication with friends needs respect and patience.",
  "Before speaking, people usually greet each other politely.",
  "Speaking clearly and listening carefully help avoid misunderstandings.",
  "Ending a phone call politely is also important.",
  "They ask questions, listen carefully, and give honest opinions.",
  "Sometimes they tell funny stories or help solve problems."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Talking with friends is an important part of daily life."
  },
  {
    "id": 2,
    "correct": "Friends share ideas, feelings, and experiences together."
  },
  {
    "id": 3,
    "correct": "They often talk about school, work, sports, movies, music, and future plans."
  },
  {
    "id": 4,
    "correct": "Good conversations help people understand each other better and build strong friendships."
  },
  {
    "id": 5,
    "correct": "Friends can meet at school, in a park, at a café, or online."
  },
  {
    "id": 6,
    "correct": "They ask questions, listen carefully, and give honest opinions."
  },
  {
    "id": 7,
    "correct": "Sometimes they tell funny stories or help solve problems."
  },
  {
    "id": 8,
    "correct": "Kind words make conversations more enjoyable and comfortable for everyone."
  },
  {
    "id": 9,
    "correct": "Good communication with friends needs respect and patience."
  },
  {
    "id": 10,
    "correct": "People should speak politely, listen without interrupting, and support each other."
  },
  {
    "id": 11,
    "correct": "Friendly conversations create happy memories, increase trust, and make every friendship stronger over time."
  },
  {
    "id": 12,
    "correct": "Meeting new people is an exciting experience in everyday life."
  },
  {
    "id": 13,
    "correct": "People often meet classmates, neighbors, coworkers, or travelers in different places."
  },
  {
    "id": 14,
    "correct": "A friendly smile and polite greeting help begin a comfortable conversation."
  },
  {
    "id": 15,
    "correct": "Good first impressions can lead to new friendships and useful connections."
  }
];

const newEx7Data = [
  {
    "q": "Why are conversations with friends important?",
    "a": "They help people understand each other better and build strong friendships."
  },
  {
    "q": "Where can friends meet?",
    "a": "Friends can meet at school, in a park, at a café, or online."
  },
  {
    "q": "How should people listen during friendly conversations?",
    "a": "They should listen carefully and without interrupting."
  },
  {
    "q": "What can a friendly smile and polite greeting do?",
    "a": "They can help begin a comfortable conversation."
  },
  {
    "q": "What do people usually do when meeting someone new?",
    "a": "They usually introduce themselves first."
  },
  {
    "q": "Why is listening carefully important when meeting new people?",
    "a": "It shows respect and helps people understand each other better."
  },
  {
    "q": "Why do people make phone calls?",
    "a": "They call for different reasons and to share important information quickly."
  },
  {
    "q": "How can people avoid misunderstandings on the phone?",
    "a": "They can speak clearly and listen carefully."
  },
  {
    "q": "What should people do when ending a phone call?",
    "a": "They should thank each other, confirm important details, and say goodbye kindly."
  },
  {
    "q": "What qualities help build trust in new relationships?",
    "a": "Respect, kindness, and honesty help build trust."
  }
];

