// ===== park03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. _____ parks have small animals that people enjoy watching every season during a peaceful visit with family and friends.",
    "a": "many"
  },
  {
    "q": "2. _____ often see ducks, birds, squirrels, butterflies, and friendly fish in ponds during a peaceful visit with family and friends.",
    "a": "visitors"
  },
  {
    "q": "3. These _____ make the park more interesting and beautiful for everyone during a peaceful visit with family and friends.",
    "a": "animals"
  },
  {
    "q": "4. _____ should watch animals quietly and never frighten them during a peaceful visit with family and friends.",
    "a": "people"
  },
  {
    "q": "5. _____ wild animals is sometimes not allowed because it may harm them during a peaceful visit with family and friends.",
    "a": "feeding"
  },
  {
    "q": "6. Visitors _____ also protect trees and flowers where animals live safely every day.",
    "a": "should"
  },
  {
    "q": "7. _____ animals remind us to care for nature during a peaceful visit with family and friends.",
    "a": "park"
  },
  {
    "q": "8. They _____ children learn about wildlife and the environment during a peaceful visit with family and friends.",
    "a": "help"
  },
  {
    "q": "9. _____ animals and their homes keeps parks healthy, peaceful, and enjoyable for future generations together.",
    "a": "protecting"
  },
  {
    "q": "10. _____ is a lovely park near my home in the city during a peaceful visit with family and friends.",
    "a": "there"
  },
  {
    "q": "11. It _____ many trees, flowers, benches, and a beautiful lake for visitors during a peaceful visit with family and friends.",
    "a": "has"
  },
  {
    "q": "12. People _____ every day to relax, exercise, and enjoy the peaceful surroundings together.",
    "a": "come"
  },
  {
    "q": "13. In the _____, many people walk or jog around the park paths during a peaceful visit with family and friends.",
    "a": "morning"
  },
  {
    "q": "14. _____ play happily while older people exercise with their friends during a peaceful visit with family and friends.",
    "a": "children"
  },
  {
    "q": "15. During _____, families have picnics and take many beautiful photos outside together during a peaceful visit with family and friends.",
    "a": "weekends"
  },
  {
    "q": "16. I _____ visiting this park because it is clean and quiet during a peaceful visit with family and friends.",
    "a": "enjoy"
  },
  {
    "q": "17. It _____ me relax after school and spend time with my family during a peaceful visit with family and friends.",
    "a": "helps"
  },
  {
    "q": "18. I _____ keep the park clean and respect nature during every visit there.",
    "a": "always"
  },
  {
    "q": "19. _____ is a wonderful season to visit the park with family and friends.",
    "a": "spring"
  },
  {
    "q": "20. The _____ is warm, flowers bloom beautifully, and green leaves grow everywhere during a peaceful visit with family and friends.",
    "a": "weather"
  }
];

const newEx2Data = [
  {
    "q": "1. What animals may visitors see in park ponds?",
    "opts": [
      "Friendly fish",
      "Farm cows",
      "Desert camels",
      "Ocean whales"
    ],
    "a": "Friendly fish"
  },
  {
    "q": "2. Why should people avoid frightening park animals?",
    "opts": [
      "Animals need loud music",
      "Visitors should chase them",
      "Parks need more traffic",
      "Animals should be treated safely and quietly"
    ],
    "a": "Animals should be treated safely and quietly"
  },
  {
    "q": "3. Why may feeding wild animals be harmful?",
    "opts": [
      "It cleans the paths",
      "It builds new benches",
      "The food may harm them",
      "It makes trees taller"
    ],
    "a": "The food may harm them"
  },
  {
    "q": "4. What is near the speaker's home in the city?",
    "opts": [
      "A mountain farm",
      "A lovely park",
      "A large factory",
      "A busy airport"
    ],
    "a": "A lovely park"
  },
  {
    "q": "5. What do families often do during weekends?",
    "opts": [
      "Have picnics and take photos",
      "Repair buses",
      "Attend office meetings",
      "Drive trucks"
    ],
    "a": "Have picnics and take photos"
  },
  {
    "q": "6. What happens to flowers in spring?",
    "opts": [
      "They disappear completely",
      "They become machines",
      "They stop growing forever",
      "They bloom beautifully"
    ],
    "a": "They bloom beautifully"
  },
  {
    "q": "7. Why does the speaker like visiting the park?",
    "opts": [
      "It has heavy traffic",
      "It has no trees",
      "It is clean and quiet",
      "It is noisy and crowded"
    ],
    "a": "It is clean and quiet"
  },
  {
    "q": "8. How does the favorite park make the speaker feel?",
    "opts": [
      "Cold and frightened",
      "Happy, calm, and healthy",
      "Angry and tired",
      "Nervous and lost"
    ],
    "a": "Happy, calm, and healthy"
  },
  {
    "q": "9. What does “park” mean in this lesson?",
    "opts": [
      "động vật",
      "nhiều",
      "có",
      "công viên"
    ],
    "a": "công viên"
  },
  {
    "q": "10. What does “often” mean in this lesson?",
    "opts": [
      "động vật",
      "nhiều",
      "thường xuyên",
      "công viên"
    ],
    "a": "thường xuyên"
  },
  {
    "q": "11. What does “interesting” mean in this lesson?",
    "opts": [
      "nhiều",
      "thú vị",
      "công viên",
      "động vật"
    ],
    "a": "thú vị"
  },
  {
    "q": "12. What does “allowed” mean in this lesson?",
    "opts": [
      "được phép",
      "công viên",
      "động vật",
      "nhiều"
    ],
    "a": "được phép"
  },
  {
    "q": "13. What does “remind” mean in this lesson?",
    "opts": [
      "công viên",
      "động vật",
      "nhiều",
      "nhắc nhở"
    ],
    "a": "nhắc nhở"
  },
  {
    "q": "14. What does “peaceful” mean in this lesson?",
    "opts": [
      "động vật",
      "nhiều",
      "thanh bình",
      "công viên"
    ],
    "a": "thanh bình"
  },
  {
    "q": "15. What does “come” mean in this lesson?",
    "opts": [
      "nhiều",
      "đến",
      "công viên",
      "động vật"
    ],
    "a": "đến"
  },
  {
    "q": "16. What does “while” mean in this lesson?",
    "opts": [
      "trong khi",
      "công viên",
      "động vật",
      "nhiều"
    ],
    "a": "trong khi"
  },
  {
    "q": "17. What does “helps” mean in this lesson?",
    "opts": [
      "công viên",
      "động vật",
      "nhiều",
      "giúp"
    ],
    "a": "giúp"
  },
  {
    "q": "18. What does “warm” mean in this lesson?",
    "opts": [
      "động vật",
      "nhiều",
      "ấm áp",
      "công viên"
    ],
    "a": "ấm áp"
  },
  {
    "q": "19. What does “sing” mean in this lesson?",
    "opts": [
      "nhiều",
      "hát",
      "công viên",
      "động vật"
    ],
    "a": "hát"
  },
  {
    "q": "20. What does “looks” mean in this lesson?",
    "opts": [
      "trông có vẻ",
      "công viên",
      "động vật",
      "nhiều"
    ],
    "a": "trông có vẻ"
  }
];

const newEx3Data = [
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "watching",
    "mean": "việc quan sát"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "season",
    "mean": "mùa"
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
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "ducks",
    "mean": "vịt"
  },
  {
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "squirrels",
    "mean": "sóc"
  },
  {
    "word": "butterflies",
    "mean": "bướm"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "ponds",
    "mean": "ao"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "more",
    "mean": "hơn"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "quietly",
    "mean": "một cách nhỏ nhẹ"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "frighten",
    "mean": "làm hoảng sợ"
  },
  {
    "word": "feeding",
    "mean": "việc cho ăn"
  },
  {
    "word": "wild",
    "mean": "hoang dã"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "allowed",
    "mean": "được phép"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "harm",
    "mean": "gây hại"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "where",
    "mean": "nơi mà"
  },
  {
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "remind",
    "mean": "nhắc nhở"
  },
  {
    "word": "care",
    "mean": "sự quan tâm"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "wildlife",
    "mean": "động vật hoang dã"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "protecting",
    "mean": "việc bảo vệ"
  },
  {
    "word": "homes",
    "mean": "nơi ở"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "generations",
    "mean": "thế hệ"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "lovely",
    "mean": "đáng yêu"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "benches",
    "mean": "ghế băng"
  },
  {
    "word": "lake",
    "mean": "hồ"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "surroundings",
    "mean": "khung cảnh xung quanh"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
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
    "word": "jog",
    "mean": "chạy bộ chậm"
  },
  {
    "word": "around",
    "mean": "quanh"
  },
  {
    "word": "paths",
    "mean": "lối đi"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "picnics",
    "mean": "các buổi dã ngoại"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "photos",
    "mean": "ảnh"
  },
  {
    "word": "outside",
    "mean": "ở ngoài trời"
  },
  {
    "word": "visiting",
    "mean": "việc ghé thăm"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "spring",
    "mean": "mùa xuân"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "weather",
    "mean": "thời tiết"
  },
  {
    "word": "warm",
    "mean": "ấm áp"
  },
  {
    "word": "bloom",
    "mean": "nở hoa"
  },
  {
    "word": "beautifully",
    "mean": "một cách đẹp đẽ"
  },
  {
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "leaves",
    "mean": "lá cây"
  },
  {
    "word": "grow",
    "mean": "mọc; phát triển"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "playground",
    "mean": "sân chơi"
  },
  {
    "word": "sing",
    "mean": "hát"
  },
  {
    "word": "tall",
    "mean": "cao"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "afternoon",
    "mean": "buổi chiều"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "looks",
    "mean": "trông có vẻ"
  },
  {
    "word": "attractive",
    "mean": "hấp dẫn"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "talking",
    "mean": "việc trò chuyện"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "sit",
    "mean": "ngồi"
  },
  {
    "word": "bench",
    "mean": "ghế băng"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "happy",
    "mean": "vui vẻ; hạnh phúc"
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
    "word": "whenever",
    "mean": "bất cứ khi nào"
  }
];

const newEx4Data = [
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "watching",
    "mean": "việc quan sát"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "season",
    "mean": "mùa"
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
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "ducks",
    "mean": "vịt"
  },
  {
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "squirrels",
    "mean": "sóc"
  },
  {
    "word": "butterflies",
    "mean": "bướm"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "ponds",
    "mean": "ao"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "more",
    "mean": "hơn"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "quietly",
    "mean": "một cách nhỏ nhẹ"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "frighten",
    "mean": "làm hoảng sợ"
  },
  {
    "word": "feeding",
    "mean": "việc cho ăn"
  },
  {
    "word": "wild",
    "mean": "hoang dã"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "allowed",
    "mean": "được phép"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "harm",
    "mean": "gây hại"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "where",
    "mean": "nơi mà"
  },
  {
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "remind",
    "mean": "nhắc nhở"
  },
  {
    "word": "care",
    "mean": "sự quan tâm"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "wildlife",
    "mean": "động vật hoang dã"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "protecting",
    "mean": "việc bảo vệ"
  },
  {
    "word": "homes",
    "mean": "nơi ở"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "generations",
    "mean": "thế hệ"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "lovely",
    "mean": "đáng yêu"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "benches",
    "mean": "ghế băng"
  },
  {
    "word": "lake",
    "mean": "hồ"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "surroundings",
    "mean": "khung cảnh xung quanh"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
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
    "word": "jog",
    "mean": "chạy bộ chậm"
  },
  {
    "word": "around",
    "mean": "quanh"
  },
  {
    "word": "paths",
    "mean": "lối đi"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "picnics",
    "mean": "các buổi dã ngoại"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "photos",
    "mean": "ảnh"
  },
  {
    "word": "outside",
    "mean": "ở ngoài trời"
  },
  {
    "word": "visiting",
    "mean": "việc ghé thăm"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "spring",
    "mean": "mùa xuân"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "weather",
    "mean": "thời tiết"
  },
  {
    "word": "warm",
    "mean": "ấm áp"
  },
  {
    "word": "bloom",
    "mean": "nở hoa"
  },
  {
    "word": "beautifully",
    "mean": "một cách đẹp đẽ"
  },
  {
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "leaves",
    "mean": "lá cây"
  },
  {
    "word": "grow",
    "mean": "mọc; phát triển"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "playground",
    "mean": "sân chơi"
  },
  {
    "word": "sing",
    "mean": "hát"
  },
  {
    "word": "tall",
    "mean": "cao"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "afternoon",
    "mean": "buổi chiều"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "looks",
    "mean": "trông có vẻ"
  },
  {
    "word": "attractive",
    "mean": "hấp dẫn"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "talking",
    "mean": "việc trò chuyện"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "sit",
    "mean": "ngồi"
  },
  {
    "word": "bench",
    "mean": "ghế băng"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "happy",
    "mean": "vui vẻ; hạnh phúc"
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
    "word": "whenever",
    "mean": "bất cứ khi nào"
  }
];

const newEx5Data = [
  "Many parks have small animals that people enjoy watching every season.",
  "Visitors often see ducks, birds, squirrels, butterflies, and friendly fish in ponds.",
  "These animals make the park more interesting and beautiful for everyone.",
  "People should watch animals quietly and never frighten them.",
  "Feeding wild animals is sometimes not allowed because it may harm them.",
  "Visitors should also protect trees and flowers where animals live safely every day.",
  "Park animals remind us to care for nature.",
  "They help children learn about wildlife and the environment.",
  "Protecting animals and their homes keeps parks healthy, peaceful, and enjoyable for future generations together.",
  "There is a lovely park near my home in the city."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Many parks have small animals that people enjoy watching every season."
  },
  {
    "id": 2,
    "correct": "Visitors often see ducks, birds, squirrels, butterflies, and friendly fish in ponds."
  },
  {
    "id": 3,
    "correct": "These animals make the park more interesting and beautiful for everyone."
  },
  {
    "id": 4,
    "correct": "People should watch animals quietly and never frighten them."
  },
  {
    "id": 5,
    "correct": "Feeding wild animals is sometimes not allowed because it may harm them."
  },
  {
    "id": 6,
    "correct": "Visitors should also protect trees and flowers where animals live safely every day."
  },
  {
    "id": 7,
    "correct": "Park animals remind us to care for nature."
  },
  {
    "id": 8,
    "correct": "They help children learn about wildlife and the environment."
  },
  {
    "id": 9,
    "correct": "Protecting animals and their homes keeps parks healthy, peaceful, and enjoyable for future generations together."
  },
  {
    "id": 10,
    "correct": "There is a lovely park near my home in the city."
  },
  {
    "id": 11,
    "correct": "It has many trees, flowers, benches, and a beautiful lake for visitors."
  },
  {
    "id": 12,
    "correct": "People come every day to relax, exercise, and enjoy the peaceful surroundings together."
  },
  {
    "id": 13,
    "correct": "In the morning, many people walk or jog around the park paths."
  },
  {
    "id": 14,
    "correct": "Children play happily while older people exercise with their friends."
  },
  {
    "id": 15,
    "correct": "During weekends, families have picnics and take many beautiful photos outside together."
  }
];

const newEx7Data = [
  {
    "q": "Which animals can visitors see in the park?",
    "a": "They can see ducks, birds, squirrels, butterflies, and friendly fish in ponds."
  },
  {
    "q": "How should people behave around park animals?",
    "a": "They should watch animals quietly, avoid frightening them, and protect their habitats."
  },
  {
    "q": "Why might feeding wild animals be a problem?",
    "a": "Feeding them may be harmful, so it is sometimes not allowed."
  },
  {
    "q": "How do park animals help children learn?",
    "a": "They help children learn about wildlife and the environment."
  },
  {
    "q": "What features does the city park near the speaker's home have?",
    "a": "It has trees, flowers, benches, and a beautiful lake."
  },
  {
    "q": "What do people do in the park during weekends?",
    "a": "Families have picnics, people exercise, and visitors take beautiful photos."
  },
  {
    "q": "What changes can people see in the park during spring?",
    "a": "Flowers bloom, green leaves grow, and the weather becomes warm and pleasant."
  },
  {
    "q": "Why should visitors protect flowers, trees, and animals?",
    "a": "Protecting them keeps the park clean, attractive, healthy, and enjoyable."
  },
  {
    "q": "Why is the park the speaker's favorite place?",
    "a": "It helps the speaker relax and feel happy, calm, and healthy."
  },
  {
    "q": "What does the speaker do to care for the favorite park?",
    "a": "The speaker respects nature and helps keep the park clean every day."
  }
];

