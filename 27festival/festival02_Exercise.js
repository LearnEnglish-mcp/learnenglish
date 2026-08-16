// ===== festival02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Giong Festival is held in Hanoi to honor Saint Giong, a legendary _____ hero.",
    "a": "vietnamese"
  },
  {
    "q": "2. The festival usually takes place in the fourth lunar _____ during this important cultural celebration in Vietnam.",
    "a": "month"
  },
  {
    "q": "3. It remembers his fight to protect the country from foreign _____ during this important cultural celebration in Vietnam.",
    "a": "enemies"
  },
  {
    "q": "4. During the main ceremony, villagers act out important parts of the old _____.",
    "a": "story"
  },
  {
    "q": "5. People carry flags, drums, and special objects through the _____ during this important cultural celebration in Vietnam.",
    "a": "village"
  },
  {
    "q": "6. The event is lively and _____ during this important cultural celebration in Vietnam.",
    "a": "meaningful"
  },
  {
    "q": "7. Many visitors watch traditional performances and join local _____ during this important cultural celebration in Vietnam.",
    "a": "activities"
  },
  {
    "q": "8. They also visit temples, offer incense, and pray for _____ during this important cultural celebration in Vietnam.",
    "a": "peace"
  },
  {
    "q": "9. Giong Festival teaches courage, unity, and love for the _____ during this important cultural celebration in Vietnam.",
    "a": "country"
  },
  {
    "q": "10. It is an important part of Vietnamese history and spiritual life for young and old people _____.",
    "a": "today"
  },
  {
    "q": "11. Yen Tu Festival is held in Quang Ninh Province after the _____ New Year.",
    "a": "lunar"
  },
  {
    "q": "12. It attracts many visitors who want to explore nature and learn about Vietnamese _____.",
    "a": "buddhism"
  },
  {
    "q": "13. People climb Yen Tu Mountain or use a cable car to reach temples and _____.",
    "a": "pagodas"
  },
  {
    "q": "14. Along the way, they see forests, clouds, old trees, and beautiful mountain _____.",
    "a": "views"
  },
  {
    "q": "15. The most famous place is Dong Pagoda, _____ near the top during this important cultural celebration in Vietnam.",
    "a": "located"
  },
  {
    "q": "16. Visitors light incense, pray for peace, and enjoy the _____ air during this important cultural celebration in Vietnam.",
    "a": "quiet"
  },
  {
    "q": "17. Some people also visit Hoa Yen _____ during this important cultural celebration in Vietnam.",
    "a": "pagoda"
  },
  {
    "q": "18. The festival is a spiritual journey and a healthy outdoor _____ during this important cultural celebration in Vietnam.",
    "a": "activity"
  },
  {
    "q": "19. It helps people feel calm, patient, and connected with nature during the festival _____.",
    "a": "season"
  },
  {
    "q": "20. The Whale Worship Festival is held in many coastal areas of central _____.",
    "a": "vietnam"
  }
];

const newEx2Data = [
  {
    "q": "1. What does “giong” mean in this lesson?",
    "opts": [
      "Gióng",
      "lễ hội",
      "được tổ chức",
      "Hà Nội"
    ],
    "a": "Gióng"
  },
  {
    "q": "2. What does “saint” mean in this lesson?",
    "opts": [
      "Gióng",
      "lễ hội",
      "được tổ chức",
      "thánh"
    ],
    "a": "thánh"
  },
  {
    "q": "3. What does “takes” mean in this lesson?",
    "opts": [
      "lễ hội",
      "được tổ chức",
      "diễn ra",
      "Gióng"
    ],
    "a": "diễn ra"
  },
  {
    "q": "4. What does “enemies” mean in this lesson?",
    "opts": [
      "được tổ chức",
      "kẻ thù",
      "Gióng",
      "lễ hội"
    ],
    "a": "kẻ thù"
  },
  {
    "q": "5. What does “people” mean in this lesson?",
    "opts": [
      "mọi người",
      "Gióng",
      "lễ hội",
      "được tổ chức"
    ],
    "a": "mọi người"
  },
  {
    "q": "6. What does “meaningful” mean in this lesson?",
    "opts": [
      "Gióng",
      "lễ hội",
      "được tổ chức",
      "có ý nghĩa"
    ],
    "a": "có ý nghĩa"
  },
  {
    "q": "7. What does “visit” mean in this lesson?",
    "opts": [
      "lễ hội",
      "được tổ chức",
      "thăm",
      "Gióng"
    ],
    "a": "thăm"
  },
  {
    "q": "8. What does “part” mean in this lesson?",
    "opts": [
      "được tổ chức",
      "phần",
      "Gióng",
      "lễ hội"
    ],
    "a": "phần"
  },
  {
    "q": "9. What does “province” mean in this lesson?",
    "opts": [
      "tỉnh",
      "Gióng",
      "lễ hội",
      "được tổ chức"
    ],
    "a": "tỉnh"
  },
  {
    "q": "10. What does “mountain” mean in this lesson?",
    "opts": [
      "Gióng",
      "lễ hội",
      "được tổ chức",
      "núi"
    ],
    "a": "núi"
  },
  {
    "q": "11. Who does Giong Festival honor?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "It honors Saint Giong, a legendary Vietnamese hero."
    ],
    "a": "It honors Saint Giong, a legendary Vietnamese hero."
  },
  {
    "q": "12. What does Giong Festival remember?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "It remembers Saint Giong's fight to protect the country from foreign enemies.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It remembers Saint Giong's fight to protect the country from foreign enemies."
  },
  {
    "q": "13. What do villagers do during the main Giong Festival ceremony?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "They act out important parts of the old story.",
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition."
    ],
    "a": "They act out important parts of the old story."
  },
  {
    "q": "14. What values does Giong Festival teach?",
    "opts": [
      "It teaches courage, unity, and love for the country.",
      "The event is described as a private sports competition.",
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It teaches courage, unity, and love for the country."
  },
  {
    "q": "15. Why do many visitors go to Yen Tu Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "They want to explore nature and learn about Vietnamese Buddhism."
    ],
    "a": "They want to explore nature and learn about Vietnamese Buddhism."
  },
  {
    "q": "16. How can people reach the temples and pagodas at Yen Tu?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "They can climb Yen Tu Mountain or use a cable car.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "They can climb Yen Tu Mountain or use a cable car."
  },
  {
    "q": "17. What is the most famous place mentioned at Yen Tu?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "Dong Pagoda is the most famous place mentioned.",
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition."
    ],
    "a": "Dong Pagoda is the most famous place mentioned."
  },
  {
    "q": "18. Why do fishermen organize the Whale Worship Festival?",
    "opts": [
      "They thank the whale and pray for safe trips, good weather, and a successful fishing season.",
      "The event is described as a private sports competition.",
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "They thank the whale and pray for safe trips, good weather, and a successful fishing season."
  },
  {
    "q": "19. What activities can visitors watch after the Whale Worship ceremony?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "They can watch boat races, folk singing, and traditional dances."
    ],
    "a": "They can watch boat races, folk singing, and traditional dances."
  },
  {
    "q": "20. What does the Whale Worship Festival show about coastal communities?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "It shows the strong relationship between coastal people and the sea and protects local beliefs and traditions.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It shows the strong relationship between coastal people and the sea and protects local beliefs and traditions."
  }
];

const newEx3Data = [
  {
    "word": "giong",
    "mean": "Gióng"
  },
  {
    "word": "festival",
    "mean": "lễ hội"
  },
  {
    "word": "held",
    "mean": "được tổ chức"
  },
  {
    "word": "hanoi",
    "mean": "Hà Nội"
  },
  {
    "word": "honor",
    "mean": "tôn vinh"
  },
  {
    "word": "saint",
    "mean": "thánh"
  },
  {
    "word": "legendary",
    "mean": "huyền thoại"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt"
  },
  {
    "word": "hero",
    "mean": "anh hùng"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "takes",
    "mean": "diễn ra"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "fourth",
    "mean": "thứ tư"
  },
  {
    "word": "lunar",
    "mean": "âm lịch"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "remembers",
    "mean": "tưởng nhớ"
  },
  {
    "word": "fight",
    "mean": "cuộc chiến"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "country",
    "mean": "đất nước"
  },
  {
    "word": "foreign",
    "mean": "ngoại xâm; nước ngoài"
  },
  {
    "word": "enemies",
    "mean": "kẻ thù"
  },
  {
    "word": "main",
    "mean": "chính"
  },
  {
    "word": "ceremony",
    "mean": "nghi lễ"
  },
  {
    "word": "villagers",
    "mean": "dân làng"
  },
  {
    "word": "act",
    "mean": "diễn; hành động"
  },
  {
    "word": "out",
    "mean": "ra ngoài"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "parts",
    "mean": "các phần"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "story",
    "mean": "câu chuyện"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "flags",
    "mean": "cờ"
  },
  {
    "word": "drums",
    "mean": "trống"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "objects",
    "mean": "vật phẩm"
  },
  {
    "word": "village",
    "mean": "làng"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "lively",
    "mean": "sôi động"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "performances",
    "mean": "các màn biểu diễn"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "temples",
    "mean": "các ngôi đền"
  },
  {
    "word": "offer",
    "mean": "dâng; cúng"
  },
  {
    "word": "incense",
    "mean": "hương"
  },
  {
    "word": "pray",
    "mean": "cầu nguyện"
  },
  {
    "word": "peace",
    "mean": "bình an; hòa bình"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "courage",
    "mean": "lòng dũng cảm"
  },
  {
    "word": "unity",
    "mean": "sự đoàn kết"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "history",
    "mean": "lịch sử"
  },
  {
    "word": "spiritual",
    "mean": "thuộc tâm linh"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "today",
    "mean": "ngày nay"
  },
  {
    "word": "yen",
    "mean": "Yên"
  },
  {
    "word": "tu",
    "mean": "Tử"
  },
  {
    "word": "quang",
    "mean": "Quảng"
  },
  {
    "word": "ninh",
    "mean": "Ninh"
  },
  {
    "word": "province",
    "mean": "tỉnh"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "year",
    "mean": "năm"
  },
  {
    "word": "attracts",
    "mean": "thu hút"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "explore",
    "mean": "khám phá"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "learn",
    "mean": "học; tìm hiểu"
  },
  {
    "word": "buddhism",
    "mean": "Phật giáo"
  },
  {
    "word": "climb",
    "mean": "leo"
  },
  {
    "word": "mountain",
    "mean": "núi"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "cable",
    "mean": "cáp"
  },
  {
    "word": "car",
    "mean": "xe"
  },
  {
    "word": "reach",
    "mean": "đến"
  },
  {
    "word": "pagodas",
    "mean": "các ngôi chùa"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "forests",
    "mean": "rừng"
  },
  {
    "word": "clouds",
    "mean": "mây"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "views",
    "mean": "cảnh quan"
  },
  {
    "word": "most",
    "mean": "nhất"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "dong",
    "mean": "Đồng"
  },
  {
    "word": "pagoda",
    "mean": "chùa"
  },
  {
    "word": "located",
    "mean": "nằm; tọa lạc"
  },
  {
    "word": "top",
    "mean": "đỉnh"
  },
  {
    "word": "light",
    "mean": "thắp; ánh sáng"
  },
  {
    "word": "enjoy",
    "mean": "tận hưởng"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "hoa",
    "mean": "Hoa"
  },
  {
    "word": "journey",
    "mean": "hành trình"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "outdoor",
    "mean": "ngoài trời"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "calm",
    "mean": "yên ả; bình tĩnh"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "season",
    "mean": "mùa"
  },
  {
    "word": "whale",
    "mean": "cá voi"
  },
  {
    "word": "worship",
    "mean": "thờ cúng"
  },
  {
    "word": "coastal",
    "mean": "ven biển"
  },
  {
    "word": "areas",
    "mean": "khu vực"
  },
  {
    "word": "central",
    "mean": "thuộc miền Trung"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "fishermen",
    "mean": "ngư dân"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "thank",
    "mean": "cảm tạ"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "trips",
    "mean": "các chuyến đi"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "weather",
    "mean": "thời tiết"
  },
  {
    "word": "successful",
    "mean": "thành công"
  },
  {
    "word": "fishing",
    "mean": "đánh cá"
  },
  {
    "word": "begins",
    "mean": "bắt đầu"
  },
  {
    "word": "respectful",
    "mean": "kính cẩn"
  },
  {
    "word": "ceremonies",
    "mean": "nghi lễ"
  },
  {
    "word": "temple",
    "mean": "đền"
  },
  {
    "word": "sea",
    "mean": "biển"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "elders",
    "mean": "các bậc cao niên"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "prayers",
    "mean": "lời cầu nguyện"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "boats",
    "mean": "thuyền"
  },
  {
    "word": "decorated",
    "mean": "được trang trí"
  },
  {
    "word": "bright",
    "mean": "rực rỡ"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "boat",
    "mean": "thuyền"
  },
  {
    "word": "races",
    "mean": "các cuộc đua"
  },
  {
    "word": "folk",
    "mean": "dân gian"
  },
  {
    "word": "singing",
    "mean": "ca hát"
  },
  {
    "word": "dances",
    "mean": "các điệu múa"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "strong",
    "mean": "mạnh mẽ"
  },
  {
    "word": "relationship",
    "mean": "mối quan hệ"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "beliefs",
    "mean": "tín ngưỡng"
  },
  {
    "word": "traditions",
    "mean": "truyền thống"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "spirit",
    "mean": "tinh thần; thần linh"
  },
  {
    "word": "towns",
    "mean": "thị trấn"
  },
  {
    "word": "coast",
    "mean": "bờ biển"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "generations",
    "mean": "các thế hệ"
  }
];

const newEx4Data = [
  {
    "word": "giong",
    "mean": "Gióng"
  },
  {
    "word": "festival",
    "mean": "lễ hội"
  },
  {
    "word": "held",
    "mean": "được tổ chức"
  },
  {
    "word": "hanoi",
    "mean": "Hà Nội"
  },
  {
    "word": "honor",
    "mean": "tôn vinh"
  },
  {
    "word": "saint",
    "mean": "thánh"
  },
  {
    "word": "legendary",
    "mean": "huyền thoại"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt"
  },
  {
    "word": "hero",
    "mean": "anh hùng"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "takes",
    "mean": "diễn ra"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "fourth",
    "mean": "thứ tư"
  },
  {
    "word": "lunar",
    "mean": "âm lịch"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "remembers",
    "mean": "tưởng nhớ"
  },
  {
    "word": "fight",
    "mean": "cuộc chiến"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "country",
    "mean": "đất nước"
  },
  {
    "word": "foreign",
    "mean": "ngoại xâm; nước ngoài"
  },
  {
    "word": "enemies",
    "mean": "kẻ thù"
  },
  {
    "word": "main",
    "mean": "chính"
  },
  {
    "word": "ceremony",
    "mean": "nghi lễ"
  },
  {
    "word": "villagers",
    "mean": "dân làng"
  },
  {
    "word": "act",
    "mean": "diễn; hành động"
  },
  {
    "word": "out",
    "mean": "ra ngoài"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "parts",
    "mean": "các phần"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "story",
    "mean": "câu chuyện"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "flags",
    "mean": "cờ"
  },
  {
    "word": "drums",
    "mean": "trống"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "objects",
    "mean": "vật phẩm"
  },
  {
    "word": "village",
    "mean": "làng"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "lively",
    "mean": "sôi động"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "performances",
    "mean": "các màn biểu diễn"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "temples",
    "mean": "các ngôi đền"
  },
  {
    "word": "offer",
    "mean": "dâng; cúng"
  },
  {
    "word": "incense",
    "mean": "hương"
  },
  {
    "word": "pray",
    "mean": "cầu nguyện"
  },
  {
    "word": "peace",
    "mean": "bình an; hòa bình"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "courage",
    "mean": "lòng dũng cảm"
  },
  {
    "word": "unity",
    "mean": "sự đoàn kết"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "history",
    "mean": "lịch sử"
  },
  {
    "word": "spiritual",
    "mean": "thuộc tâm linh"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "today",
    "mean": "ngày nay"
  },
  {
    "word": "yen",
    "mean": "Yên"
  },
  {
    "word": "tu",
    "mean": "Tử"
  },
  {
    "word": "quang",
    "mean": "Quảng"
  },
  {
    "word": "ninh",
    "mean": "Ninh"
  },
  {
    "word": "province",
    "mean": "tỉnh"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "year",
    "mean": "năm"
  },
  {
    "word": "attracts",
    "mean": "thu hút"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "explore",
    "mean": "khám phá"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "learn",
    "mean": "học; tìm hiểu"
  },
  {
    "word": "buddhism",
    "mean": "Phật giáo"
  },
  {
    "word": "climb",
    "mean": "leo"
  },
  {
    "word": "mountain",
    "mean": "núi"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "cable",
    "mean": "cáp"
  },
  {
    "word": "car",
    "mean": "xe"
  },
  {
    "word": "reach",
    "mean": "đến"
  },
  {
    "word": "pagodas",
    "mean": "các ngôi chùa"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "forests",
    "mean": "rừng"
  },
  {
    "word": "clouds",
    "mean": "mây"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "views",
    "mean": "cảnh quan"
  },
  {
    "word": "most",
    "mean": "nhất"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "dong",
    "mean": "Đồng"
  },
  {
    "word": "pagoda",
    "mean": "chùa"
  },
  {
    "word": "located",
    "mean": "nằm; tọa lạc"
  },
  {
    "word": "top",
    "mean": "đỉnh"
  },
  {
    "word": "light",
    "mean": "thắp; ánh sáng"
  },
  {
    "word": "enjoy",
    "mean": "tận hưởng"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "hoa",
    "mean": "Hoa"
  },
  {
    "word": "journey",
    "mean": "hành trình"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "outdoor",
    "mean": "ngoài trời"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "calm",
    "mean": "yên ả; bình tĩnh"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "season",
    "mean": "mùa"
  },
  {
    "word": "whale",
    "mean": "cá voi"
  },
  {
    "word": "worship",
    "mean": "thờ cúng"
  },
  {
    "word": "coastal",
    "mean": "ven biển"
  },
  {
    "word": "areas",
    "mean": "khu vực"
  },
  {
    "word": "central",
    "mean": "thuộc miền Trung"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "fishermen",
    "mean": "ngư dân"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "thank",
    "mean": "cảm tạ"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "trips",
    "mean": "các chuyến đi"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "weather",
    "mean": "thời tiết"
  },
  {
    "word": "successful",
    "mean": "thành công"
  },
  {
    "word": "fishing",
    "mean": "đánh cá"
  },
  {
    "word": "begins",
    "mean": "bắt đầu"
  },
  {
    "word": "respectful",
    "mean": "kính cẩn"
  },
  {
    "word": "ceremonies",
    "mean": "nghi lễ"
  },
  {
    "word": "temple",
    "mean": "đền"
  },
  {
    "word": "sea",
    "mean": "biển"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "elders",
    "mean": "các bậc cao niên"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "prayers",
    "mean": "lời cầu nguyện"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "boats",
    "mean": "thuyền"
  },
  {
    "word": "decorated",
    "mean": "được trang trí"
  },
  {
    "word": "bright",
    "mean": "rực rỡ"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "boat",
    "mean": "thuyền"
  },
  {
    "word": "races",
    "mean": "các cuộc đua"
  },
  {
    "word": "folk",
    "mean": "dân gian"
  },
  {
    "word": "singing",
    "mean": "ca hát"
  },
  {
    "word": "dances",
    "mean": "các điệu múa"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "strong",
    "mean": "mạnh mẽ"
  },
  {
    "word": "relationship",
    "mean": "mối quan hệ"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "beliefs",
    "mean": "tín ngưỡng"
  },
  {
    "word": "traditions",
    "mean": "truyền thống"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "spirit",
    "mean": "tinh thần; thần linh"
  },
  {
    "word": "towns",
    "mean": "thị trấn"
  },
  {
    "word": "coast",
    "mean": "bờ biển"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "generations",
    "mean": "các thế hệ"
  }
];

const newEx5Data = [
  "Giong Festival is held in Hanoi to honor Saint Giong, a legendary Vietnamese hero.",
  "The festival usually takes place in the fourth lunar month.",
  "It remembers his fight to protect the country from foreign enemies.",
  "During the main ceremony, villagers act out important parts of the old story.",
  "People carry flags, drums, and special objects through the village.",
  "The event is lively and meaningful.",
  "Many visitors watch traditional performances and join local activities.",
  "They also visit temples, offer incense, and pray for peace.",
  "Giong Festival teaches courage, unity, and love for the country.",
  "Yen Tu Festival is held in Quang Ninh Province after the Lunar New Year."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Giong Festival is held in Hanoi to honor Saint Giong, a legendary Vietnamese hero."
  },
  {
    "id": 2,
    "correct": "The festival usually takes place in the fourth lunar month."
  },
  {
    "id": 3,
    "correct": "It remembers his fight to protect the country from foreign enemies."
  },
  {
    "id": 4,
    "correct": "During the main ceremony, villagers act out important parts of the old story."
  },
  {
    "id": 5,
    "correct": "People carry flags, drums, and special objects through the village."
  },
  {
    "id": 6,
    "correct": "The event is lively and meaningful."
  },
  {
    "id": 7,
    "correct": "Many visitors watch traditional performances and join local activities."
  },
  {
    "id": 8,
    "correct": "They also visit temples, offer incense, and pray for peace."
  },
  {
    "id": 9,
    "correct": "Giong Festival teaches courage, unity, and love for the country."
  },
  {
    "id": 10,
    "correct": "It is an important part of Vietnamese history and spiritual life for young and old people today."
  },
  {
    "id": 11,
    "correct": "Yen Tu Festival is held in Quang Ninh Province after the Lunar New Year."
  },
  {
    "id": 12,
    "correct": "It attracts many visitors who want to explore nature and learn about Vietnamese Buddhism."
  },
  {
    "id": 13,
    "correct": "People climb Yen Tu Mountain or use a cable car to reach temples and pagodas."
  },
  {
    "id": 14,
    "correct": "Along the way, they see forests, clouds, old trees, and beautiful mountain views."
  },
  {
    "id": 15,
    "correct": "The most famous place is Dong Pagoda, located near the top."
  }
];

const newEx7Data = [
  {
    "q": "Who does Giong Festival honor?",
    "a": "It honors Saint Giong, a legendary Vietnamese hero."
  },
  {
    "q": "What does Giong Festival remember?",
    "a": "It remembers Saint Giong's fight to protect the country from foreign enemies."
  },
  {
    "q": "What do villagers do during the main Giong Festival ceremony?",
    "a": "They act out important parts of the old story."
  },
  {
    "q": "What values does Giong Festival teach?",
    "a": "It teaches courage, unity, and love for the country."
  },
  {
    "q": "Why do many visitors go to Yen Tu Festival?",
    "a": "They want to explore nature and learn about Vietnamese Buddhism."
  },
  {
    "q": "How can people reach the temples and pagodas at Yen Tu?",
    "a": "They can climb Yen Tu Mountain or use a cable car."
  },
  {
    "q": "What is the most famous place mentioned at Yen Tu?",
    "a": "Dong Pagoda is the most famous place mentioned."
  },
  {
    "q": "Why do fishermen organize the Whale Worship Festival?",
    "a": "They thank the whale and pray for safe trips, good weather, and a successful fishing season."
  },
  {
    "q": "What activities can visitors watch after the Whale Worship ceremony?",
    "a": "They can watch boat races, folk singing, and traditional dances."
  },
  {
    "q": "What does the Whale Worship Festival show about coastal communities?",
    "a": "It shows the strong relationship between coastal people and the sea and protects local beliefs and traditions."
  }
];
