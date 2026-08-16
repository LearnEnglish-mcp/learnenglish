// ===== festival01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. The Hung Kings Festival is held in Phu Tho Province _____ year during this important cultural celebration in Vietnam.",
    "a": "every"
  },
  {
    "q": "2. It takes place on the tenth day of the third lunar _____ during this important cultural celebration in Vietnam.",
    "a": "month"
  },
  {
    "q": "3. Many people visit the Hung Temple to remember the ancient kings of _____.",
    "a": "vietnam"
  },
  {
    "q": "4. During the festival, people offer flowers, fruit, rice cakes, and _____ during this important cultural celebration in Vietnam.",
    "a": "incense"
  },
  {
    "q": "5. Important ceremonies are held in a serious and _____ way during this important cultural celebration in Vietnam.",
    "a": "respectful"
  },
  {
    "q": "6. Traditional music and drum performances create a special _____ during this important cultural celebration in Vietnam.",
    "a": "atmosphere"
  },
  {
    "q": "7. Visitors can also watch folk games, wrestling, and cultural _____ during this important cultural celebration in Vietnam.",
    "a": "shows"
  },
  {
    "q": "8. Local people wear beautiful traditional clothes and welcome guests _____ during this important cultural celebration in Vietnam.",
    "a": "warmly"
  },
  {
    "q": "9. The festival teaches young people about Vietnamese _____ during this important cultural celebration in Vietnam.",
    "a": "history"
  },
  {
    "q": "10. It also shows respect for ancestors and reminds everyone to protect national traditions together _____.",
    "a": "today"
  },
  {
    "q": "11. The Perfume Pagoda Festival is one of the largest religious festivals in _____.",
    "a": "vietnam"
  },
  {
    "q": "12. It is held in Hanoi from the first to the third lunar _____.",
    "a": "month"
  },
  {
    "q": "13. Thousands of visitors come to pray for health, luck, and _____ during this important cultural celebration in Vietnam.",
    "a": "happiness"
  },
  {
    "q": "14. The journey begins with a boat ride along Yen _____ during this important cultural celebration in Vietnam.",
    "a": "stream"
  },
  {
    "q": "15. The water is calm, and the mountains create beautiful _____ during this important cultural celebration in Vietnam.",
    "a": "views"
  },
  {
    "q": "16. Visitors then walk or take a cable car to the _____ during this important cultural celebration in Vietnam.",
    "a": "pagodas"
  },
  {
    "q": "17. People visit Huong Tich Cave, Thien Tru Pagoda, and other sacred _____ during this important cultural celebration in Vietnam.",
    "a": "places"
  },
  {
    "q": "18. They light incense and enjoy the peaceful _____ during this important cultural celebration in Vietnam.",
    "a": "atmosphere"
  },
  {
    "q": "19. The festival is both a religious trip and a _____ tour during this important cultural celebration in Vietnam.",
    "a": "nature"
  },
  {
    "q": "20. It helps people relax, think positively, and appreciate Vietnamese culture _____ during this important cultural celebration in Vietnam.",
    "a": "today"
  }
];

const newEx2Data = [
  {
    "q": "1. What does “hung” mean in this lesson?",
    "opts": [
      "Hùng",
      "các vị vua",
      "lễ hội",
      "được tổ chức"
    ],
    "a": "Hùng"
  },
  {
    "q": "2. What does “tho” mean in this lesson?",
    "opts": [
      "Hùng",
      "các vị vua",
      "lễ hội",
      "Thọ"
    ],
    "a": "Thọ"
  },
  {
    "q": "3. What does “place” mean in this lesson?",
    "opts": [
      "các vị vua",
      "lễ hội",
      "nơi; địa điểm",
      "Hùng"
    ],
    "a": "nơi; địa điểm"
  },
  {
    "q": "4. What does “remember” mean in this lesson?",
    "opts": [
      "lễ hội",
      "tưởng nhớ",
      "Hùng",
      "các vị vua"
    ],
    "a": "tưởng nhớ"
  },
  {
    "q": "5. What does “important” mean in this lesson?",
    "opts": [
      "quan trọng",
      "Hùng",
      "các vị vua",
      "lễ hội"
    ],
    "a": "quan trọng"
  },
  {
    "q": "6. What does “special” mean in this lesson?",
    "opts": [
      "Hùng",
      "các vị vua",
      "lễ hội",
      "đặc biệt"
    ],
    "a": "đặc biệt"
  },
  {
    "q": "7. What does “shows” mean in this lesson?",
    "opts": [
      "các vị vua",
      "lễ hội",
      "các chương trình; thể hiện",
      "Hùng"
    ],
    "a": "các chương trình; thể hiện"
  },
  {
    "q": "8. What does “vietnamese” mean in this lesson?",
    "opts": [
      "lễ hội",
      "thuộc Việt Nam; người Việt",
      "Hùng",
      "các vị vua"
    ],
    "a": "thuộc Việt Nam; người Việt"
  },
  {
    "q": "9. What does “today” mean in this lesson?",
    "opts": [
      "ngày nay",
      "Hùng",
      "các vị vua",
      "lễ hội"
    ],
    "a": "ngày nay"
  },
  {
    "q": "10. What does “come” mean in this lesson?",
    "opts": [
      "Hùng",
      "các vị vua",
      "lễ hội",
      "đến"
    ],
    "a": "đến"
  },
  {
    "q": "11. Where is the Hung Kings Festival held every year?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "It is held in Phu Tho Province."
    ],
    "a": "It is held in Phu Tho Province."
  },
  {
    "q": "12. When does the Hung Kings Festival take place?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "It takes place on the tenth day of the third lunar month.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It takes place on the tenth day of the third lunar month."
  },
  {
    "q": "13. Why do many people visit the Hung Temple?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "They visit it to remember the ancient kings of Vietnam.",
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition."
    ],
    "a": "They visit it to remember the ancient kings of Vietnam."
  },
  {
    "q": "14. What do people offer during the Hung Kings Festival?",
    "opts": [
      "They offer flowers, fruit, rice cakes, and incense.",
      "The event is described as a private sports competition.",
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "They offer flowers, fruit, rice cakes, and incense."
  },
  {
    "q": "15. What is the first part of the journey to the Perfume Pagoda Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "The journey begins with a boat ride along Yen Stream."
    ],
    "a": "The journey begins with a boat ride along Yen Stream."
  },
  {
    "q": "16. Why do thousands of visitors come to the Perfume Pagoda Festival?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "They come to pray for health, luck, and happiness.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "They come to pray for health, luck, and happiness."
  },
  {
    "q": "17. What places do people visit at the Perfume Pagoda Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "They visit Huong Tich Cave, Thien Tru Pagoda, and other sacred places.",
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition."
    ],
    "a": "They visit Huong Tich Cave, Thien Tru Pagoda, and other sacred places."
  },
  {
    "q": "18. What is Lim Festival well known for?",
    "opts": [
      "It is well known for Quan Ho folk songs.",
      "The event is described as a private sports competition.",
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It is well known for Quan Ho folk songs."
  },
  {
    "q": "19. What folk activities can visitors enjoy at Lim Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "They can enjoy wrestling, bamboo swinging, human chess, and other folk games."
    ],
    "a": "They can enjoy wrestling, bamboo swinging, human chess, and other folk games."
  },
  {
    "q": "20. How does Lim Festival support cultural heritage?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "It protects traditional music and helps young people understand and love their cultural heritage.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It protects traditional music and helps young people understand and love their cultural heritage."
  }
];

const newEx3Data = [
  {
    "word": "hung",
    "mean": "Hùng"
  },
  {
    "word": "kings",
    "mean": "các vị vua"
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
    "word": "phu",
    "mean": "Phú"
  },
  {
    "word": "tho",
    "mean": "Thọ"
  },
  {
    "word": "province",
    "mean": "tỉnh"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "year",
    "mean": "năm"
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
    "word": "tenth",
    "mean": "thứ mười"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "third",
    "mean": "thứ ba"
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
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "temple",
    "mean": "đền"
  },
  {
    "word": "remember",
    "mean": "tưởng nhớ"
  },
  {
    "word": "ancient",
    "mean": "cổ xưa"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "offer",
    "mean": "dâng; cúng"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "fruit",
    "mean": "trái cây"
  },
  {
    "word": "rice",
    "mean": "gạo"
  },
  {
    "word": "cakes",
    "mean": "bánh"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "incense",
    "mean": "hương"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "ceremonies",
    "mean": "nghi lễ"
  },
  {
    "word": "serious",
    "mean": "trang nghiêm"
  },
  {
    "word": "respectful",
    "mean": "kính cẩn"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "drum",
    "mean": "trống"
  },
  {
    "word": "performances",
    "mean": "các màn biểu diễn"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "folk",
    "mean": "dân gian"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "wrestling",
    "mean": "đấu vật"
  },
  {
    "word": "cultural",
    "mean": "thuộc văn hóa"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "guests",
    "mean": "khách"
  },
  {
    "word": "warmly",
    "mean": "nồng nhiệt"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt"
  },
  {
    "word": "history",
    "mean": "lịch sử"
  },
  {
    "word": "respect",
    "mean": "sự kính trọng; tôn trọng"
  },
  {
    "word": "ancestors",
    "mean": "tổ tiên"
  },
  {
    "word": "reminds",
    "mean": "nhắc nhở"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "national",
    "mean": "quốc gia"
  },
  {
    "word": "traditions",
    "mean": "truyền thống"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "today",
    "mean": "ngày nay"
  },
  {
    "word": "perfume",
    "mean": "Hương; hương thơm"
  },
  {
    "word": "pagoda",
    "mean": "chùa"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "largest",
    "mean": "lớn nhất"
  },
  {
    "word": "religious",
    "mean": "thuộc tôn giáo"
  },
  {
    "word": "festivals",
    "mean": "các lễ hội"
  },
  {
    "word": "hanoi",
    "mean": "Hà Nội"
  },
  {
    "word": "first",
    "mean": "thứ nhất; đầu tiên"
  },
  {
    "word": "thousands",
    "mean": "hàng nghìn"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "pray",
    "mean": "cầu nguyện"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "luck",
    "mean": "may mắn"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "journey",
    "mean": "hành trình"
  },
  {
    "word": "begins",
    "mean": "bắt đầu"
  },
  {
    "word": "boat",
    "mean": "thuyền"
  },
  {
    "word": "ride",
    "mean": "chuyến đi"
  },
  {
    "word": "yen",
    "mean": "Yên"
  },
  {
    "word": "stream",
    "mean": "suối"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "calm",
    "mean": "yên ả; bình tĩnh"
  },
  {
    "word": "mountains",
    "mean": "núi"
  },
  {
    "word": "views",
    "mean": "cảnh quan"
  },
  {
    "word": "then",
    "mean": "sau đó"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
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
    "word": "pagodas",
    "mean": "các ngôi chùa"
  },
  {
    "word": "huong",
    "mean": "Hương"
  },
  {
    "word": "tich",
    "mean": "Tích"
  },
  {
    "word": "cave",
    "mean": "động; hang"
  },
  {
    "word": "thien",
    "mean": "Thiên"
  },
  {
    "word": "tru",
    "mean": "Trù"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "sacred",
    "mean": "linh thiêng"
  },
  {
    "word": "places",
    "mean": "nơi chốn"
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
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "trip",
    "mean": "chuyến đi"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "tour",
    "mean": "chuyến tham quan"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "positively",
    "mean": "một cách tích cực"
  },
  {
    "word": "appreciate",
    "mean": "trân trọng"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "lim",
    "mean": "Lim"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "bac",
    "mean": "Bắc"
  },
  {
    "word": "ninh",
    "mean": "Ninh"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "thirteenth",
    "mean": "thứ mười ba"
  },
  {
    "word": "well",
    "mean": "tốt; rõ"
  },
  {
    "word": "known",
    "mean": "được biết đến"
  },
  {
    "word": "quan",
    "mean": "Quan"
  },
  {
    "word": "ho",
    "mean": "Họ"
  },
  {
    "word": "songs",
    "mean": "bài hát"
  },
  {
    "word": "male",
    "mean": "nam"
  },
  {
    "word": "female",
    "mean": "nữ"
  },
  {
    "word": "singers",
    "mean": "người hát"
  },
  {
    "word": "sing",
    "mean": "hát"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "perform",
    "mean": "biểu diễn"
  },
  {
    "word": "boats",
    "mean": "thuyền"
  },
  {
    "word": "hills",
    "mean": "đồi"
  },
  {
    "word": "village",
    "mean": "làng"
  },
  {
    "word": "stages",
    "mean": "sân khấu"
  },
  {
    "word": "gentle",
    "mean": "nhẹ nhàng"
  },
  {
    "word": "emotional",
    "mean": "giàu cảm xúc"
  },
  {
    "word": "full",
    "mean": "đầy"
  },
  {
    "word": "bamboo",
    "mean": "tre"
  },
  {
    "word": "swinging",
    "mean": "đánh đu"
  },
  {
    "word": "human",
    "mean": "con người"
  },
  {
    "word": "chess",
    "mean": "cờ"
  },
  {
    "word": "taste",
    "mean": "nếm; thưởng thức"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "meet",
    "mean": "gặp gỡ"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "northern",
    "mean": "thuộc miền Bắc"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "communities",
    "mean": "các cộng đồng"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "heritage",
    "mean": "di sản"
  }
];

const newEx4Data = [
  {
    "word": "hung",
    "mean": "Hùng"
  },
  {
    "word": "kings",
    "mean": "các vị vua"
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
    "word": "phu",
    "mean": "Phú"
  },
  {
    "word": "tho",
    "mean": "Thọ"
  },
  {
    "word": "province",
    "mean": "tỉnh"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "year",
    "mean": "năm"
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
    "word": "tenth",
    "mean": "thứ mười"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "third",
    "mean": "thứ ba"
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
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "temple",
    "mean": "đền"
  },
  {
    "word": "remember",
    "mean": "tưởng nhớ"
  },
  {
    "word": "ancient",
    "mean": "cổ xưa"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "offer",
    "mean": "dâng; cúng"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "fruit",
    "mean": "trái cây"
  },
  {
    "word": "rice",
    "mean": "gạo"
  },
  {
    "word": "cakes",
    "mean": "bánh"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "incense",
    "mean": "hương"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "ceremonies",
    "mean": "nghi lễ"
  },
  {
    "word": "serious",
    "mean": "trang nghiêm"
  },
  {
    "word": "respectful",
    "mean": "kính cẩn"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "drum",
    "mean": "trống"
  },
  {
    "word": "performances",
    "mean": "các màn biểu diễn"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "folk",
    "mean": "dân gian"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "wrestling",
    "mean": "đấu vật"
  },
  {
    "word": "cultural",
    "mean": "thuộc văn hóa"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "guests",
    "mean": "khách"
  },
  {
    "word": "warmly",
    "mean": "nồng nhiệt"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt"
  },
  {
    "word": "history",
    "mean": "lịch sử"
  },
  {
    "word": "respect",
    "mean": "sự kính trọng; tôn trọng"
  },
  {
    "word": "ancestors",
    "mean": "tổ tiên"
  },
  {
    "word": "reminds",
    "mean": "nhắc nhở"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "national",
    "mean": "quốc gia"
  },
  {
    "word": "traditions",
    "mean": "truyền thống"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "today",
    "mean": "ngày nay"
  },
  {
    "word": "perfume",
    "mean": "Hương; hương thơm"
  },
  {
    "word": "pagoda",
    "mean": "chùa"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "largest",
    "mean": "lớn nhất"
  },
  {
    "word": "religious",
    "mean": "thuộc tôn giáo"
  },
  {
    "word": "festivals",
    "mean": "các lễ hội"
  },
  {
    "word": "hanoi",
    "mean": "Hà Nội"
  },
  {
    "word": "first",
    "mean": "thứ nhất; đầu tiên"
  },
  {
    "word": "thousands",
    "mean": "hàng nghìn"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "pray",
    "mean": "cầu nguyện"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "luck",
    "mean": "may mắn"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "journey",
    "mean": "hành trình"
  },
  {
    "word": "begins",
    "mean": "bắt đầu"
  },
  {
    "word": "boat",
    "mean": "thuyền"
  },
  {
    "word": "ride",
    "mean": "chuyến đi"
  },
  {
    "word": "yen",
    "mean": "Yên"
  },
  {
    "word": "stream",
    "mean": "suối"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "calm",
    "mean": "yên ả; bình tĩnh"
  },
  {
    "word": "mountains",
    "mean": "núi"
  },
  {
    "word": "views",
    "mean": "cảnh quan"
  },
  {
    "word": "then",
    "mean": "sau đó"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
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
    "word": "pagodas",
    "mean": "các ngôi chùa"
  },
  {
    "word": "huong",
    "mean": "Hương"
  },
  {
    "word": "tich",
    "mean": "Tích"
  },
  {
    "word": "cave",
    "mean": "động; hang"
  },
  {
    "word": "thien",
    "mean": "Thiên"
  },
  {
    "word": "tru",
    "mean": "Trù"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "sacred",
    "mean": "linh thiêng"
  },
  {
    "word": "places",
    "mean": "nơi chốn"
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
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "trip",
    "mean": "chuyến đi"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "tour",
    "mean": "chuyến tham quan"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "positively",
    "mean": "một cách tích cực"
  },
  {
    "word": "appreciate",
    "mean": "trân trọng"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "lim",
    "mean": "Lim"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "bac",
    "mean": "Bắc"
  },
  {
    "word": "ninh",
    "mean": "Ninh"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "thirteenth",
    "mean": "thứ mười ba"
  },
  {
    "word": "well",
    "mean": "tốt; rõ"
  },
  {
    "word": "known",
    "mean": "được biết đến"
  },
  {
    "word": "quan",
    "mean": "Quan"
  },
  {
    "word": "ho",
    "mean": "Họ"
  },
  {
    "word": "songs",
    "mean": "bài hát"
  },
  {
    "word": "male",
    "mean": "nam"
  },
  {
    "word": "female",
    "mean": "nữ"
  },
  {
    "word": "singers",
    "mean": "người hát"
  },
  {
    "word": "sing",
    "mean": "hát"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "perform",
    "mean": "biểu diễn"
  },
  {
    "word": "boats",
    "mean": "thuyền"
  },
  {
    "word": "hills",
    "mean": "đồi"
  },
  {
    "word": "village",
    "mean": "làng"
  },
  {
    "word": "stages",
    "mean": "sân khấu"
  },
  {
    "word": "gentle",
    "mean": "nhẹ nhàng"
  },
  {
    "word": "emotional",
    "mean": "giàu cảm xúc"
  },
  {
    "word": "full",
    "mean": "đầy"
  },
  {
    "word": "bamboo",
    "mean": "tre"
  },
  {
    "word": "swinging",
    "mean": "đánh đu"
  },
  {
    "word": "human",
    "mean": "con người"
  },
  {
    "word": "chess",
    "mean": "cờ"
  },
  {
    "word": "taste",
    "mean": "nếm; thưởng thức"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "meet",
    "mean": "gặp gỡ"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "northern",
    "mean": "thuộc miền Bắc"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "communities",
    "mean": "các cộng đồng"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "heritage",
    "mean": "di sản"
  }
];

const newEx5Data = [
  "The Hung Kings Festival is held in Phu Tho Province every year.",
  "It takes place on the tenth day of the third lunar month.",
  "Many people visit the Hung Temple to remember the ancient kings of Vietnam.",
  "During the festival, people offer flowers, fruit, rice cakes, and incense.",
  "Important ceremonies are held in a serious and respectful way.",
  "Traditional music and drum performances create a special atmosphere.",
  "Visitors can also watch folk games, wrestling, and cultural shows.",
  "Local people wear beautiful traditional clothes and welcome guests warmly.",
  "The festival teaches young people about Vietnamese history.",
  "It also shows respect for ancestors and reminds everyone to protect national traditions together today."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "The Hung Kings Festival is held in Phu Tho Province every year."
  },
  {
    "id": 2,
    "correct": "It takes place on the tenth day of the third lunar month."
  },
  {
    "id": 3,
    "correct": "Many people visit the Hung Temple to remember the ancient kings of Vietnam."
  },
  {
    "id": 4,
    "correct": "During the festival, people offer flowers, fruit, rice cakes, and incense."
  },
  {
    "id": 5,
    "correct": "Important ceremonies are held in a serious and respectful way."
  },
  {
    "id": 6,
    "correct": "Traditional music and drum performances create a special atmosphere."
  },
  {
    "id": 7,
    "correct": "Visitors can also watch folk games, wrestling, and cultural shows."
  },
  {
    "id": 8,
    "correct": "Local people wear beautiful traditional clothes and welcome guests warmly."
  },
  {
    "id": 9,
    "correct": "The festival teaches young people about Vietnamese history."
  },
  {
    "id": 10,
    "correct": "It also shows respect for ancestors and reminds everyone to protect national traditions together today."
  },
  {
    "id": 11,
    "correct": "The Perfume Pagoda Festival is one of the largest religious festivals in Vietnam."
  },
  {
    "id": 12,
    "correct": "It is held in Hanoi from the first to the third lunar month."
  },
  {
    "id": 13,
    "correct": "Thousands of visitors come to pray for health, luck, and happiness."
  },
  {
    "id": 14,
    "correct": "The journey begins with a boat ride along Yen Stream."
  },
  {
    "id": 15,
    "correct": "The water is calm, and the mountains create beautiful views."
  }
];

const newEx7Data = [
  {
    "q": "Where is the Hung Kings Festival held every year?",
    "a": "It is held in Phu Tho Province."
  },
  {
    "q": "When does the Hung Kings Festival take place?",
    "a": "It takes place on the tenth day of the third lunar month."
  },
  {
    "q": "Why do many people visit the Hung Temple?",
    "a": "They visit it to remember the ancient kings of Vietnam."
  },
  {
    "q": "What do people offer during the Hung Kings Festival?",
    "a": "They offer flowers, fruit, rice cakes, and incense."
  },
  {
    "q": "What is the first part of the journey to the Perfume Pagoda Festival?",
    "a": "The journey begins with a boat ride along Yen Stream."
  },
  {
    "q": "Why do thousands of visitors come to the Perfume Pagoda Festival?",
    "a": "They come to pray for health, luck, and happiness."
  },
  {
    "q": "What places do people visit at the Perfume Pagoda Festival?",
    "a": "They visit Huong Tich Cave, Thien Tru Pagoda, and other sacred places."
  },
  {
    "q": "What is Lim Festival well known for?",
    "a": "It is well known for Quan Ho folk songs."
  },
  {
    "q": "What folk activities can visitors enjoy at Lim Festival?",
    "a": "They can enjoy wrestling, bamboo swinging, human chess, and other folk games."
  },
  {
    "q": "How does Lim Festival support cultural heritage?",
    "a": "It protects traditional music and helps young people understand and love their cultural heritage."
  }
];
