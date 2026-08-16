// ===== festival03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Kate Festival is an important celebration of the Cham _____ in Ninh Thuan and Binh Thuan.",
    "a": "people"
  },
  {
    "q": "2. It usually takes place in the seventh month of the Cham _____ during this important cultural celebration in Vietnam.",
    "a": "calendar"
  },
  {
    "q": "3. People visit ancient towers to honor gods, heroes, and _____ during this important cultural celebration in Vietnam.",
    "a": "ancestors"
  },
  {
    "q": "4. Religious leaders perform special ceremonies, open the tower doors, and dress sacred statues in traditional _____.",
    "a": "clothes"
  },
  {
    "q": "5. The festival includes music, dancing, drums, and colorful _____ during this important cultural celebration in Vietnam.",
    "a": "costumes"
  },
  {
    "q": "6. Families prepare food, visit relatives, and share happy moments _____ during this important cultural celebration in Vietnam.",
    "a": "together"
  },
  {
    "q": "7. Visitors can also learn about Cham crafts and _____ during this important cultural celebration in Vietnam.",
    "a": "customs"
  },
  {
    "q": "8. Kate Festival protects Cham culture and brings the community _____ during this important cultural celebration in Vietnam.",
    "a": "closer"
  },
  {
    "q": "9. It is a joyful time of respect, gratitude, family love, and cultural pride among both _____ and old.",
    "a": "young"
  },
  {
    "q": "10. The Bay Nui Cow Racing Festival is a famous event in An Giang _____.",
    "a": "province"
  },
  {
    "q": "11. It is organized by Khmer people during the Sene Dolta holiday, usually in the rainy _____.",
    "a": "season"
  },
  {
    "q": "12. Pairs of cows race across a wet and muddy _____ during this important cultural celebration in Vietnam.",
    "a": "field"
  },
  {
    "q": "13. Each driver stands on a small wooden board and controls the animals _____.",
    "a": "carefully"
  },
  {
    "q": "14. The race is fast, exciting, and sometimes _____ during this important cultural celebration in Vietnam.",
    "a": "surprising"
  },
  {
    "q": "15. Large crowds cheer loudly around the _____ during this important cultural celebration in Vietnam.",
    "a": "field"
  },
  {
    "q": "16. Visitors can also enjoy Khmer music, local food, and traditional _____ during this important cultural celebration in Vietnam.",
    "a": "activities"
  },
  {
    "q": "17. The festival celebrates farming life, strength, and _____ during this important cultural celebration in Vietnam.",
    "a": "teamwork"
  },
  {
    "q": "18. It brings joy to local villages and helps protect the special culture of the Khmer community in southern Vietnam for many years _____.",
    "a": "ahead"
  },
  {
    "q": "19. Nghinh Ong Festival is celebrated in many coastal towns in southern _____ during this important cultural celebration in Vietnam.",
    "a": "vietnam"
  },
  {
    "q": "20. It honors the whale, which fishermen believe protects people during dangerous _____ at sea.",
    "a": "journeys"
  }
];

const newEx2Data = [
  {
    "q": "1. What does “kate” mean in this lesson?",
    "opts": [
      "Kate",
      "lễ hội",
      "quan trọng",
      "lễ kỷ niệm"
    ],
    "a": "Kate"
  },
  {
    "q": "2. What does “people” mean in this lesson?",
    "opts": [
      "Kate",
      "lễ hội",
      "quan trọng",
      "mọi người"
    ],
    "a": "mọi người"
  },
  {
    "q": "3. What does “usually” mean in this lesson?",
    "opts": [
      "lễ hội",
      "quan trọng",
      "thường",
      "Kate"
    ],
    "a": "thường"
  },
  {
    "q": "4. What does “gods” mean in this lesson?",
    "opts": [
      "quan trọng",
      "các vị thần",
      "Kate",
      "lễ hội"
    ],
    "a": "các vị thần"
  },
  {
    "q": "5. What does “doors” mean in this lesson?",
    "opts": [
      "cửa",
      "Kate",
      "lễ hội",
      "quan trọng"
    ],
    "a": "cửa"
  },
  {
    "q": "6. What does “colorful” mean in this lesson?",
    "opts": [
      "Kate",
      "lễ hội",
      "quan trọng",
      "đầy màu sắc"
    ],
    "a": "đầy màu sắc"
  },
  {
    "q": "7. What does “visitors” mean in this lesson?",
    "opts": [
      "lễ hội",
      "quan trọng",
      "du khách",
      "Kate"
    ],
    "a": "du khách"
  },
  {
    "q": "8. What does “closer” mean in this lesson?",
    "opts": [
      "quan trọng",
      "gần gũi hơn",
      "Kate",
      "lễ hội"
    ],
    "a": "gần gũi hơn"
  },
  {
    "q": "9. What does “young” mean in this lesson?",
    "opts": [
      "trẻ",
      "Kate",
      "lễ hội",
      "quan trọng"
    ],
    "a": "trẻ"
  },
  {
    "q": "10. What does “organized” mean in this lesson?",
    "opts": [
      "Kate",
      "lễ hội",
      "quan trọng",
      "được tổ chức"
    ],
    "a": "được tổ chức"
  },
  {
    "q": "11. Who celebrates Kate Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "The Cham people in Ninh Thuan and Binh Thuan celebrate it."
    ],
    "a": "The Cham people in Ninh Thuan and Binh Thuan celebrate it."
  },
  {
    "q": "12. What do people do at ancient towers during Kate Festival?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "They honor gods, heroes, and ancestors, while religious leaders perform special ceremonies.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "They honor gods, heroes, and ancestors, while religious leaders perform special ceremonies."
  },
  {
    "q": "13. What cultural activities are included in Kate Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "It includes music, dancing, drums, colorful costumes, crafts, and customs.",
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition."
    ],
    "a": "It includes music, dancing, drums, colorful costumes, crafts, and customs."
  },
  {
    "q": "14. When is the Bay Nui Cow Racing Festival usually organized?",
    "opts": [
      "It is usually organized during the rainy season as part of the Sene Dolta holiday.",
      "The event is described as a private sports competition.",
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It is usually organized during the rainy season as part of the Sene Dolta holiday."
  },
  {
    "q": "15. How does a driver control the cows in the race?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "Each driver stands on a small wooden board and controls the animals carefully."
    ],
    "a": "Each driver stands on a small wooden board and controls the animals carefully."
  },
  {
    "q": "16. What does the Bay Nui Cow Racing Festival celebrate?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "It celebrates farming life, strength, and teamwork.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It celebrates farming life, strength, and teamwork."
  },
  {
    "q": "17. Why is the whale honored at Nghinh Ong Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "Fishermen believe the whale protects people during dangerous journeys at sea.",
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition."
    ],
    "a": "Fishermen believe the whale protects people during dangerous journeys at sea."
  },
  {
    "q": "18. What happens at the beginning of Nghinh Ong Festival?",
    "opts": [
      "It often begins with a boat parade.",
      "The event is described as a private sports competition.",
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It often begins with a boat parade."
  },
  {
    "q": "19. What can visitors do at the Ban Flower Festival?",
    "opts": [
      "It is held only at night in a modern shopping center.",
      "The reading says people avoid all music and ceremonies.",
      "Visitors are asked to stay at home during the event.",
      "They can watch dances, listen to folk songs, try local dishes, buy handmade products, and learn about village life."
    ],
    "a": "They can watch dances, listen to folk songs, try local dishes, buy handmade products, and learn about village life."
  },
  {
    "q": "20. How does the Ban Flower Festival support Dien Bien?",
    "opts": [
      "Visitors are asked to stay at home during the event.",
      "The event is described as a private sports competition.",
      "It promotes tourism, protects local traditions, and shows the natural beauty and cultural diversity of Dien Bien.",
      "The reading says people avoid all music and ceremonies."
    ],
    "a": "It promotes tourism, protects local traditions, and shows the natural beauty and cultural diversity of Dien Bien."
  }
];

const newEx3Data = [
  {
    "word": "kate",
    "mean": "Kate"
  },
  {
    "word": "festival",
    "mean": "lễ hội"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "celebration",
    "mean": "lễ kỷ niệm"
  },
  {
    "word": "cham",
    "mean": "Chăm"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "ninh",
    "mean": "Ninh"
  },
  {
    "word": "thuan",
    "mean": "Thuận"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "binh",
    "mean": "Bình"
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
    "word": "seventh",
    "mean": "thứ bảy"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "calendar",
    "mean": "lịch"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "ancient",
    "mean": "cổ xưa"
  },
  {
    "word": "towers",
    "mean": "các tháp"
  },
  {
    "word": "honor",
    "mean": "tôn vinh"
  },
  {
    "word": "gods",
    "mean": "các vị thần"
  },
  {
    "word": "heroes",
    "mean": "các anh hùng"
  },
  {
    "word": "ancestors",
    "mean": "tổ tiên"
  },
  {
    "word": "religious",
    "mean": "thuộc tôn giáo"
  },
  {
    "word": "leaders",
    "mean": "chức sắc; người lãnh đạo"
  },
  {
    "word": "perform",
    "mean": "biểu diễn"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "ceremonies",
    "mean": "nghi lễ"
  },
  {
    "word": "open",
    "mean": "mở"
  },
  {
    "word": "tower",
    "mean": "tháp"
  },
  {
    "word": "doors",
    "mean": "cửa"
  },
  {
    "word": "dress",
    "mean": "mặc trang phục cho"
  },
  {
    "word": "sacred",
    "mean": "linh thiêng"
  },
  {
    "word": "statues",
    "mean": "tượng"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "includes",
    "mean": "bao gồm"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "dancing",
    "mean": "múa"
  },
  {
    "word": "drums",
    "mean": "trống"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "costumes",
    "mean": "trang phục"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "relatives",
    "mean": "họ hàng"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "moments",
    "mean": "khoảnh khắc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
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
    "word": "learn",
    "mean": "học; tìm hiểu"
  },
  {
    "word": "crafts",
    "mean": "nghề thủ công"
  },
  {
    "word": "customs",
    "mean": "phong tục"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "closer",
    "mean": "gần gũi hơn"
  },
  {
    "word": "joyful",
    "mean": "vui tươi"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "respect",
    "mean": "sự kính trọng; tôn trọng"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "cultural",
    "mean": "thuộc văn hóa"
  },
  {
    "word": "pride",
    "mean": "niềm tự hào"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "bay",
    "mean": "Bảy"
  },
  {
    "word": "nui",
    "mean": "Núi"
  },
  {
    "word": "cow",
    "mean": "bò"
  },
  {
    "word": "racing",
    "mean": "đua"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "giang",
    "mean": "Giang"
  },
  {
    "word": "province",
    "mean": "tỉnh"
  },
  {
    "word": "organized",
    "mean": "được tổ chức"
  },
  {
    "word": "khmer",
    "mean": "Khmer"
  },
  {
    "word": "sene",
    "mean": "Sene"
  },
  {
    "word": "dolta",
    "mean": "Dolta"
  },
  {
    "word": "holiday",
    "mean": "ngày lễ"
  },
  {
    "word": "rainy",
    "mean": "có mưa; mùa mưa"
  },
  {
    "word": "season",
    "mean": "mùa"
  },
  {
    "word": "pairs",
    "mean": "các cặp"
  },
  {
    "word": "cows",
    "mean": "bò"
  },
  {
    "word": "race",
    "mean": "cuộc đua; đua"
  },
  {
    "word": "wet",
    "mean": "ướt"
  },
  {
    "word": "muddy",
    "mean": "lầy lội"
  },
  {
    "word": "field",
    "mean": "cánh đồng"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "driver",
    "mean": "người điều khiển"
  },
  {
    "word": "stands",
    "mean": "đứng"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "wooden",
    "mean": "bằng gỗ"
  },
  {
    "word": "board",
    "mean": "tấm ván"
  },
  {
    "word": "controls",
    "mean": "điều khiển"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "surprising",
    "mean": "đáng ngạc nhiên"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "crowds",
    "mean": "đám đông"
  },
  {
    "word": "cheer",
    "mean": "reo hò"
  },
  {
    "word": "loudly",
    "mean": "vang dội"
  },
  {
    "word": "enjoy",
    "mean": "tận hưởng"
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
    "word": "celebrates",
    "mean": "tôn vinh; kỷ niệm"
  },
  {
    "word": "farming",
    "mean": "nông nghiệp"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "strength",
    "mean": "sức mạnh"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "joy",
    "mean": "niềm vui"
  },
  {
    "word": "villages",
    "mean": "các làng"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "southern",
    "mean": "thuộc miền Nam"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "years",
    "mean": "năm"
  },
  {
    "word": "ahead",
    "mean": "sắp tới"
  },
  {
    "word": "nghinh",
    "mean": "Nghinh"
  },
  {
    "word": "ong",
    "mean": "Ông"
  },
  {
    "word": "celebrated",
    "mean": "được tổ chức"
  },
  {
    "word": "coastal",
    "mean": "ven biển"
  },
  {
    "word": "towns",
    "mean": "thị trấn"
  },
  {
    "word": "honors",
    "mean": "tôn vinh"
  },
  {
    "word": "whale",
    "mean": "cá voi"
  },
  {
    "word": "fishermen",
    "mean": "ngư dân"
  },
  {
    "word": "believe",
    "mean": "tin rằng"
  },
  {
    "word": "dangerous",
    "mean": "nguy hiểm"
  },
  {
    "word": "journeys",
    "mean": "các hành trình"
  },
  {
    "word": "sea",
    "mean": "biển"
  },
  {
    "word": "often",
    "mean": "thường"
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
    "word": "parade",
    "mean": "cuộc diễu hành"
  },
  {
    "word": "fishing",
    "mean": "đánh cá"
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
    "word": "flags",
    "mean": "cờ"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "bright",
    "mean": "rực rỡ"
  },
  {
    "word": "colors",
    "mean": "màu sắc"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "offerings",
    "mean": "lễ vật"
  },
  {
    "word": "invite",
    "mean": "mời; rước"
  },
  {
    "word": "spirit",
    "mean": "tinh thần; thần linh"
  },
  {
    "word": "temple",
    "mean": "đền"
  },
  {
    "word": "lion",
    "mean": "sư tử; lân"
  },
  {
    "word": "dances",
    "mean": "các điệu múa"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "attract",
    "mean": "thu hút"
  },
  {
    "word": "pray",
    "mean": "cầu nguyện"
  },
  {
    "word": "calm",
    "mean": "yên ả; bình tĩnh"
  },
  {
    "word": "seas",
    "mean": "biển"
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
    "word": "year",
    "mean": "năm"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "strengthens",
    "mean": "củng cố"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "keeps",
    "mean": "giữ"
  },
  {
    "word": "beliefs",
    "mean": "tín ngưỡng"
  },
  {
    "word": "alive",
    "mean": "còn tồn tại; sống"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "younger",
    "mean": "trẻ hơn"
  },
  {
    "word": "generations",
    "mean": "các thế hệ"
  },
  {
    "word": "now",
    "mean": "hiện nay"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "ban",
    "mean": "ban"
  },
  {
    "word": "flower",
    "mean": "hoa"
  },
  {
    "word": "held",
    "mean": "được tổ chức"
  },
  {
    "word": "dien",
    "mean": "Điện"
  },
  {
    "word": "bien",
    "mean": "Biên"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "march",
    "mean": "tháng ba"
  },
  {
    "word": "white",
    "mean": "trắng"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "ethnic",
    "mean": "thuộc dân tộc"
  },
  {
    "word": "groups",
    "mean": "các nhóm"
  },
  {
    "word": "northwestern",
    "mean": "thuộc vùng Tây Bắc"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "folk",
    "mean": "dân gian"
  },
  {
    "word": "songs",
    "mean": "bài hát"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "flutes",
    "mean": "sáo"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "instruments",
    "mean": "nhạc cụ"
  },
  {
    "word": "offers",
    "mean": "có; cung cấp"
  },
  {
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "fairs",
    "mean": "hội chợ"
  },
  {
    "word": "beauty",
    "mean": "vẻ đẹp"
  },
  {
    "word": "contests",
    "mean": "cuộc thi"
  },
  {
    "word": "exhibitions",
    "mean": "triển lãm"
  },
  {
    "word": "tourists",
    "mean": "khách du lịch"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "handmade",
    "mean": "làm thủ công"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "village",
    "mean": "làng"
  },
  {
    "word": "promotes",
    "mean": "thúc đẩy"
  },
  {
    "word": "tourism",
    "mean": "du lịch"
  },
  {
    "word": "traditions",
    "mean": "truyền thống"
  },
  {
    "word": "natural",
    "mean": "thuộc thiên nhiên"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "diversity",
    "mean": "sự đa dạng"
  },
  {
    "word": "places",
    "mean": "nơi chốn"
  }
];

const newEx4Data = [
  {
    "word": "kate",
    "mean": "Kate"
  },
  {
    "word": "festival",
    "mean": "lễ hội"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "celebration",
    "mean": "lễ kỷ niệm"
  },
  {
    "word": "cham",
    "mean": "Chăm"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "ninh",
    "mean": "Ninh"
  },
  {
    "word": "thuan",
    "mean": "Thuận"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "binh",
    "mean": "Bình"
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
    "word": "seventh",
    "mean": "thứ bảy"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "calendar",
    "mean": "lịch"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "ancient",
    "mean": "cổ xưa"
  },
  {
    "word": "towers",
    "mean": "các tháp"
  },
  {
    "word": "honor",
    "mean": "tôn vinh"
  },
  {
    "word": "gods",
    "mean": "các vị thần"
  },
  {
    "word": "heroes",
    "mean": "các anh hùng"
  },
  {
    "word": "ancestors",
    "mean": "tổ tiên"
  },
  {
    "word": "religious",
    "mean": "thuộc tôn giáo"
  },
  {
    "word": "leaders",
    "mean": "chức sắc; người lãnh đạo"
  },
  {
    "word": "perform",
    "mean": "biểu diễn"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "ceremonies",
    "mean": "nghi lễ"
  },
  {
    "word": "open",
    "mean": "mở"
  },
  {
    "word": "tower",
    "mean": "tháp"
  },
  {
    "word": "doors",
    "mean": "cửa"
  },
  {
    "word": "dress",
    "mean": "mặc trang phục cho"
  },
  {
    "word": "sacred",
    "mean": "linh thiêng"
  },
  {
    "word": "statues",
    "mean": "tượng"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "includes",
    "mean": "bao gồm"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "dancing",
    "mean": "múa"
  },
  {
    "word": "drums",
    "mean": "trống"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "costumes",
    "mean": "trang phục"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "relatives",
    "mean": "họ hàng"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "moments",
    "mean": "khoảnh khắc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
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
    "word": "learn",
    "mean": "học; tìm hiểu"
  },
  {
    "word": "crafts",
    "mean": "nghề thủ công"
  },
  {
    "word": "customs",
    "mean": "phong tục"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "closer",
    "mean": "gần gũi hơn"
  },
  {
    "word": "joyful",
    "mean": "vui tươi"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "respect",
    "mean": "sự kính trọng; tôn trọng"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "cultural",
    "mean": "thuộc văn hóa"
  },
  {
    "word": "pride",
    "mean": "niềm tự hào"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "bay",
    "mean": "Bảy"
  },
  {
    "word": "nui",
    "mean": "Núi"
  },
  {
    "word": "cow",
    "mean": "bò"
  },
  {
    "word": "racing",
    "mean": "đua"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "giang",
    "mean": "Giang"
  },
  {
    "word": "province",
    "mean": "tỉnh"
  },
  {
    "word": "organized",
    "mean": "được tổ chức"
  },
  {
    "word": "khmer",
    "mean": "Khmer"
  },
  {
    "word": "sene",
    "mean": "Sene"
  },
  {
    "word": "dolta",
    "mean": "Dolta"
  },
  {
    "word": "holiday",
    "mean": "ngày lễ"
  },
  {
    "word": "rainy",
    "mean": "có mưa; mùa mưa"
  },
  {
    "word": "season",
    "mean": "mùa"
  },
  {
    "word": "pairs",
    "mean": "các cặp"
  },
  {
    "word": "cows",
    "mean": "bò"
  },
  {
    "word": "race",
    "mean": "cuộc đua; đua"
  },
  {
    "word": "wet",
    "mean": "ướt"
  },
  {
    "word": "muddy",
    "mean": "lầy lội"
  },
  {
    "word": "field",
    "mean": "cánh đồng"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "driver",
    "mean": "người điều khiển"
  },
  {
    "word": "stands",
    "mean": "đứng"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "wooden",
    "mean": "bằng gỗ"
  },
  {
    "word": "board",
    "mean": "tấm ván"
  },
  {
    "word": "controls",
    "mean": "điều khiển"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "surprising",
    "mean": "đáng ngạc nhiên"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "crowds",
    "mean": "đám đông"
  },
  {
    "word": "cheer",
    "mean": "reo hò"
  },
  {
    "word": "loudly",
    "mean": "vang dội"
  },
  {
    "word": "enjoy",
    "mean": "tận hưởng"
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
    "word": "celebrates",
    "mean": "tôn vinh; kỷ niệm"
  },
  {
    "word": "farming",
    "mean": "nông nghiệp"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "strength",
    "mean": "sức mạnh"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "joy",
    "mean": "niềm vui"
  },
  {
    "word": "villages",
    "mean": "các làng"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "southern",
    "mean": "thuộc miền Nam"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "years",
    "mean": "năm"
  },
  {
    "word": "ahead",
    "mean": "sắp tới"
  },
  {
    "word": "nghinh",
    "mean": "Nghinh"
  },
  {
    "word": "ong",
    "mean": "Ông"
  },
  {
    "word": "celebrated",
    "mean": "được tổ chức"
  },
  {
    "word": "coastal",
    "mean": "ven biển"
  },
  {
    "word": "towns",
    "mean": "thị trấn"
  },
  {
    "word": "honors",
    "mean": "tôn vinh"
  },
  {
    "word": "whale",
    "mean": "cá voi"
  },
  {
    "word": "fishermen",
    "mean": "ngư dân"
  },
  {
    "word": "believe",
    "mean": "tin rằng"
  },
  {
    "word": "dangerous",
    "mean": "nguy hiểm"
  },
  {
    "word": "journeys",
    "mean": "các hành trình"
  },
  {
    "word": "sea",
    "mean": "biển"
  },
  {
    "word": "often",
    "mean": "thường"
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
    "word": "parade",
    "mean": "cuộc diễu hành"
  },
  {
    "word": "fishing",
    "mean": "đánh cá"
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
    "word": "flags",
    "mean": "cờ"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "bright",
    "mean": "rực rỡ"
  },
  {
    "word": "colors",
    "mean": "màu sắc"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "offerings",
    "mean": "lễ vật"
  },
  {
    "word": "invite",
    "mean": "mời; rước"
  },
  {
    "word": "spirit",
    "mean": "tinh thần; thần linh"
  },
  {
    "word": "temple",
    "mean": "đền"
  },
  {
    "word": "lion",
    "mean": "sư tử; lân"
  },
  {
    "word": "dances",
    "mean": "các điệu múa"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "attract",
    "mean": "thu hút"
  },
  {
    "word": "pray",
    "mean": "cầu nguyện"
  },
  {
    "word": "calm",
    "mean": "yên ả; bình tĩnh"
  },
  {
    "word": "seas",
    "mean": "biển"
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
    "word": "year",
    "mean": "năm"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "strengthens",
    "mean": "củng cố"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "keeps",
    "mean": "giữ"
  },
  {
    "word": "beliefs",
    "mean": "tín ngưỡng"
  },
  {
    "word": "alive",
    "mean": "còn tồn tại; sống"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "younger",
    "mean": "trẻ hơn"
  },
  {
    "word": "generations",
    "mean": "các thế hệ"
  },
  {
    "word": "now",
    "mean": "hiện nay"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "ban",
    "mean": "ban"
  },
  {
    "word": "flower",
    "mean": "hoa"
  },
  {
    "word": "held",
    "mean": "được tổ chức"
  },
  {
    "word": "dien",
    "mean": "Điện"
  },
  {
    "word": "bien",
    "mean": "Biên"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "march",
    "mean": "tháng ba"
  },
  {
    "word": "white",
    "mean": "trắng"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "ethnic",
    "mean": "thuộc dân tộc"
  },
  {
    "word": "groups",
    "mean": "các nhóm"
  },
  {
    "word": "northwestern",
    "mean": "thuộc vùng Tây Bắc"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "folk",
    "mean": "dân gian"
  },
  {
    "word": "songs",
    "mean": "bài hát"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "flutes",
    "mean": "sáo"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "instruments",
    "mean": "nhạc cụ"
  },
  {
    "word": "offers",
    "mean": "có; cung cấp"
  },
  {
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "fairs",
    "mean": "hội chợ"
  },
  {
    "word": "beauty",
    "mean": "vẻ đẹp"
  },
  {
    "word": "contests",
    "mean": "cuộc thi"
  },
  {
    "word": "exhibitions",
    "mean": "triển lãm"
  },
  {
    "word": "tourists",
    "mean": "khách du lịch"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "handmade",
    "mean": "làm thủ công"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "village",
    "mean": "làng"
  },
  {
    "word": "promotes",
    "mean": "thúc đẩy"
  },
  {
    "word": "tourism",
    "mean": "du lịch"
  },
  {
    "word": "traditions",
    "mean": "truyền thống"
  },
  {
    "word": "natural",
    "mean": "thuộc thiên nhiên"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "diversity",
    "mean": "sự đa dạng"
  },
  {
    "word": "places",
    "mean": "nơi chốn"
  }
];

const newEx5Data = [
  "Kate Festival is an important celebration of the Cham people in Ninh Thuan and Binh Thuan.",
  "It usually takes place in the seventh month of the Cham calendar.",
  "People visit ancient towers to honor gods, heroes, and ancestors.",
  "Religious leaders perform special ceremonies, open the tower doors, and dress sacred statues in traditional clothes.",
  "The festival includes music, dancing, drums, and colorful costumes.",
  "Families prepare food, visit relatives, and share happy moments together.",
  "Visitors can also learn about Cham crafts and customs.",
  "Kate Festival protects Cham culture and brings the community closer.",
  "The Bay Nui Cow Racing Festival is a famous event in An Giang Province.",
  "It is organized by Khmer people during the Sene Dolta holiday, usually in the rainy season."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Kate Festival is an important celebration of the Cham people in Ninh Thuan and Binh Thuan."
  },
  {
    "id": 2,
    "correct": "It usually takes place in the seventh month of the Cham calendar."
  },
  {
    "id": 3,
    "correct": "People visit ancient towers to honor gods, heroes, and ancestors."
  },
  {
    "id": 4,
    "correct": "Religious leaders perform special ceremonies, open the tower doors, and dress sacred statues in traditional clothes."
  },
  {
    "id": 5,
    "correct": "The festival includes music, dancing, drums, and colorful costumes."
  },
  {
    "id": 6,
    "correct": "Families prepare food, visit relatives, and share happy moments together."
  },
  {
    "id": 7,
    "correct": "Visitors can also learn about Cham crafts and customs."
  },
  {
    "id": 8,
    "correct": "Kate Festival protects Cham culture and brings the community closer."
  },
  {
    "id": 9,
    "correct": "It is a joyful time of respect, gratitude, family love, and cultural pride among both young and old."
  },
  {
    "id": 10,
    "correct": "The Bay Nui Cow Racing Festival is a famous event in An Giang Province."
  },
  {
    "id": 11,
    "correct": "It is organized by Khmer people during the Sene Dolta holiday, usually in the rainy season."
  },
  {
    "id": 12,
    "correct": "Pairs of cows race across a wet and muddy field."
  },
  {
    "id": 13,
    "correct": "Each driver stands on a small wooden board and controls the animals carefully."
  },
  {
    "id": 14,
    "correct": "The race is fast, exciting, and sometimes surprising."
  },
  {
    "id": 15,
    "correct": "Large crowds cheer loudly around the field."
  }
];

const newEx7Data = [
  {
    "q": "Who celebrates Kate Festival?",
    "a": "The Cham people in Ninh Thuan and Binh Thuan celebrate it."
  },
  {
    "q": "What do people do at ancient towers during Kate Festival?",
    "a": "They honor gods, heroes, and ancestors, while religious leaders perform special ceremonies."
  },
  {
    "q": "What cultural activities are included in Kate Festival?",
    "a": "It includes music, dancing, drums, colorful costumes, crafts, and customs."
  },
  {
    "q": "When is the Bay Nui Cow Racing Festival usually organized?",
    "a": "It is usually organized during the rainy season as part of the Sene Dolta holiday."
  },
  {
    "q": "How does a driver control the cows in the race?",
    "a": "Each driver stands on a small wooden board and controls the animals carefully."
  },
  {
    "q": "What does the Bay Nui Cow Racing Festival celebrate?",
    "a": "It celebrates farming life, strength, and teamwork."
  },
  {
    "q": "Why is the whale honored at Nghinh Ong Festival?",
    "a": "Fishermen believe the whale protects people during dangerous journeys at sea."
  },
  {
    "q": "What happens at the beginning of Nghinh Ong Festival?",
    "a": "It often begins with a boat parade."
  },
  {
    "q": "What can visitors do at the Ban Flower Festival?",
    "a": "They can watch dances, listen to folk songs, try local dishes, buy handmade products, and learn about village life."
  },
  {
    "q": "How does the Ban Flower Festival support Dien Bien?",
    "a": "It promotes tourism, protects local traditions, and shows the natural beauty and cultural diversity of Dien Bien."
  }
];
