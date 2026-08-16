// ===== park02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. _____ park has rules to keep visitors safe and comfortable every day during a peaceful visit with family and friends.",
    "a": "every"
  },
  {
    "q": "2. _____ should follow these rules to protect nature and respect others during a peaceful visit with family and friends.",
    "a": "people"
  },
  {
    "q": "3. _____ behavior helps everyone enjoy a clean and peaceful environment together during a peaceful visit with family and friends.",
    "a": "good"
  },
  {
    "q": "4. _____ should throw trash into bins and never damage flowers or trees during a peaceful visit with family and friends.",
    "a": "visitors"
  },
  {
    "q": "5. _____ should stay on leashes, and loud music should be avoided during a peaceful visit with family and friends.",
    "a": "dogs"
  },
  {
    "q": "6. People _____ use playground equipment safely and watch young children carefully always during a peaceful visit with family and friends.",
    "a": "must"
  },
  {
    "q": "7. _____ rules make visits more enjoyable for everyone during a peaceful visit with family and friends.",
    "a": "park"
  },
  {
    "q": "8. _____ people follow simple rules, parks stay beautiful and clean for many years.",
    "a": "when"
  },
  {
    "q": "9. _____ nature and other visitors creates a friendly place for families and friends.",
    "a": "respecting"
  },
  {
    "q": "10. A _____ playground is a fun place inside many public parks today during a peaceful visit with family and friends.",
    "a": "children's"
  },
  {
    "q": "11. It _____ swings, slides, climbing frames, and other exciting play equipment during a peaceful visit with family and friends.",
    "a": "has"
  },
  {
    "q": "12. _____ laugh, play, and make new friends during every visit happily during a peaceful visit with family and friends.",
    "a": "children"
  },
  {
    "q": "13. _____ watch their children while they enjoy different games together during a peaceful visit with family and friends.",
    "a": "parents"
  },
  {
    "q": "14. _____ children climb, run, jump, or play hide-and-seek with friends during a peaceful visit with family and friends.",
    "a": "some"
  },
  {
    "q": "15. _____ shares the playground kindly and waits for their turn on the swings patiently.",
    "a": "everyone"
  },
  {
    "q": "16. A _____ helps children become active and confident during a peaceful visit with family and friends.",
    "a": "playground"
  },
  {
    "q": "17. They _____ teamwork, improve their balance, and enjoy healthy outdoor exercise during a peaceful visit with family and friends.",
    "a": "learn"
  },
  {
    "q": "18. _____ playground equipment clean and safe allows children to have fun every single day.",
    "a": "keeping"
  },
  {
    "q": "19. _____ in the park is a healthy activity for people of all ages.",
    "a": "walking"
  },
  {
    "q": "20. The _____ air, green trees, and quiet paths make everyone feel relaxed during a peaceful visit with family and friends.",
    "a": "fresh"
  }
];

const newEx2Data = [
  {
    "q": "1. Why do parks have rules?",
    "opts": [
      "To keep visitors safe and comfortable",
      "To make visitors leave early",
      "To stop all outdoor exercise",
      "To remove every tree"
    ],
    "a": "To keep visitors safe and comfortable"
  },
  {
    "q": "2. What should visitors do with trash?",
    "opts": [
      "Leave it on paths",
      "Put it in the lake",
      "Hide it under benches",
      "Throw it into bins"
    ],
    "a": "Throw it into bins"
  },
  {
    "q": "3. What should happen to loud music in the park?",
    "opts": [
      "It should play all night",
      "It should replace all games",
      "It should be avoided",
      "It should become louder"
    ],
    "a": "It should be avoided"
  },
  {
    "q": "4. What must people do with playground equipment?",
    "opts": [
      "Paint it every day",
      "Use it safely",
      "Break it quickly",
      "Move it into the road"
    ],
    "a": "Use it safely"
  },
  {
    "q": "5. What game can children play with friends?",
    "opts": [
      "Hide-and-seek",
      "Car racing",
      "Office filing",
      "Train driving"
    ],
    "a": "Hide-and-seek"
  },
  {
    "q": "6. What do children learn from playground activities?",
    "opts": [
      "How to repair cars",
      "How to sell products",
      "How to build offices",
      "Teamwork and balance"
    ],
    "a": "Teamwork and balance"
  },
  {
    "q": "7. What can walkers hear in the park?",
    "opts": [
      "Airport engines",
      "Heavy machines",
      "Gentle sounds",
      "Factory alarms"
    ],
    "a": "Gentle sounds"
  },
  {
    "q": "8. How does walking in the park help people?",
    "opts": [
      "It makes exercise impossible",
      "It improves health and happiness",
      "It increases traffic",
      "It damages nature"
    ],
    "a": "It improves health and happiness"
  },
  {
    "q": "9. What does “park” mean in this lesson?",
    "opts": [
      "quy tắc",
      "mỗi",
      "có",
      "công viên"
    ],
    "a": "công viên"
  },
  {
    "q": "10. What does “follow” mean in this lesson?",
    "opts": [
      "quy tắc",
      "mỗi",
      "theo",
      "công viên"
    ],
    "a": "theo"
  },
  {
    "q": "11. What does “environment” mean in this lesson?",
    "opts": [
      "mỗi",
      "môi trường",
      "công viên",
      "quy tắc"
    ],
    "a": "môi trường"
  },
  {
    "q": "12. What does “leashes” mean in this lesson?",
    "opts": [
      "dây dắt",
      "công viên",
      "quy tắc",
      "mỗi"
    ],
    "a": "dây dắt"
  },
  {
    "q": "13. What does “carefully” mean in this lesson?",
    "opts": [
      "công viên",
      "quy tắc",
      "mỗi",
      "cẩn thận"
    ],
    "a": "cẩn thận"
  },
  {
    "q": "14. What does “respecting” mean in this lesson?",
    "opts": [
      "quy tắc",
      "mỗi",
      "việc tôn trọng",
      "công viên"
    ],
    "a": "việc tôn trọng"
  },
  {
    "q": "15. What does “swings” mean in this lesson?",
    "opts": [
      "mỗi",
      "xích đu",
      "công viên",
      "quy tắc"
    ],
    "a": "xích đu"
  },
  {
    "q": "16. What does “different” mean in this lesson?",
    "opts": [
      "khác nhau",
      "công viên",
      "quy tắc",
      "mỗi"
    ],
    "a": "khác nhau"
  },
  {
    "q": "17. What does “become” mean in this lesson?",
    "opts": [
      "công viên",
      "quy tắc",
      "mỗi",
      "trở nên"
    ],
    "a": "trở nên"
  },
  {
    "q": "18. What does “have” mean in this lesson?",
    "opts": [
      "quy tắc",
      "mỗi",
      "có",
      "công viên"
    ],
    "a": "có"
  },
  {
    "q": "19. What does “relaxed” mean in this lesson?",
    "opts": [
      "mỗi",
      "thư giãn",
      "công viên",
      "quy tắc"
    ],
    "a": "thư giãn"
  },
  {
    "q": "20. What does “rest” mean in this lesson?",
    "opts": [
      "nghỉ ngơi",
      "công viên",
      "quy tắc",
      "mỗi"
    ],
    "a": "nghỉ ngơi"
  }
];

const newEx3Data = [
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "behavior",
    "mean": "hành vi; tác phong"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "trash",
    "mean": "rác"
  },
  {
    "word": "bins",
    "mean": "thùng rác"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "damage",
    "mean": "hư hỏng"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "dogs",
    "mean": "chó"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở trạng thái"
  },
  {
    "word": "leashes",
    "mean": "dây dắt"
  },
  {
    "word": "loud",
    "mean": "ồn; lớn tiếng"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "avoided",
    "mean": "được tránh"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "playground",
    "mean": "sân chơi"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "visits",
    "mean": "những lần ghé thăm"
  },
  {
    "word": "more",
    "mean": "hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
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
    "word": "respecting",
    "mean": "việc tôn trọng"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "children's",
    "mean": "dành cho trẻ em"
  },
  {
    "word": "fun",
    "mean": "vui nhộn"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "today",
    "mean": "ngày nay"
  },
  {
    "word": "swings",
    "mean": "xích đu"
  },
  {
    "word": "slides",
    "mean": "cầu trượt"
  },
  {
    "word": "climbing",
    "mean": "dùng để leo trèo"
  },
  {
    "word": "frames",
    "mean": "khung"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "climb",
    "mean": "leo"
  },
  {
    "word": "run",
    "mean": "chạy"
  },
  {
    "word": "jump",
    "mean": "nhảy"
  },
  {
    "word": "hide-and-seek",
    "mean": "trò trốn tìm"
  },
  {
    "word": "shares",
    "mean": "chia sẻ"
  },
  {
    "word": "kindly",
    "mean": "một cách tử tế"
  },
  {
    "word": "waits",
    "mean": "chờ"
  },
  {
    "word": "turn",
    "mean": "lượt"
  },
  {
    "word": "patiently",
    "mean": "một cách kiên nhẫn"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "confident",
    "mean": "tự tin"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "balance",
    "mean": "cân bằng"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "outdoor",
    "mean": "ngoài trời"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "ages",
    "mean": "độ tuổi"
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
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "paths",
    "mean": "lối đi"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "relaxed",
    "mean": "thư giãn"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "walks",
    "mean": "những lần đi bộ"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "smell",
    "mean": "ngửi"
  },
  {
    "word": "hear",
    "mean": "nghe"
  },
  {
    "word": "gentle",
    "mean": "nhẹ nhàng"
  },
  {
    "word": "sounds",
    "mean": "âm thanh"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "benches",
    "mean": "ghế băng"
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
    "word": "talking",
    "mean": "việc trò chuyện"
  },
  {
    "word": "slowly",
    "mean": "một cách chậm rãi"
  },
  {
    "word": "around",
    "mean": "quanh"
  },
  {
    "word": "lake",
    "mean": "hồ"
  },
  {
    "word": "afternoon",
    "mean": "buổi chiều"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "days",
    "mean": "ngày"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "future",
    "mean": "tương lai"
  }
];

const newEx4Data = [
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "behavior",
    "mean": "hành vi; tác phong"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "trash",
    "mean": "rác"
  },
  {
    "word": "bins",
    "mean": "thùng rác"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "damage",
    "mean": "hư hỏng"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "dogs",
    "mean": "chó"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở trạng thái"
  },
  {
    "word": "leashes",
    "mean": "dây dắt"
  },
  {
    "word": "loud",
    "mean": "ồn; lớn tiếng"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "avoided",
    "mean": "được tránh"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "playground",
    "mean": "sân chơi"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "young",
    "mean": "trẻ"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "visits",
    "mean": "những lần ghé thăm"
  },
  {
    "word": "more",
    "mean": "hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
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
    "word": "respecting",
    "mean": "việc tôn trọng"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "children's",
    "mean": "dành cho trẻ em"
  },
  {
    "word": "fun",
    "mean": "vui nhộn"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "today",
    "mean": "ngày nay"
  },
  {
    "word": "swings",
    "mean": "xích đu"
  },
  {
    "word": "slides",
    "mean": "cầu trượt"
  },
  {
    "word": "climbing",
    "mean": "dùng để leo trèo"
  },
  {
    "word": "frames",
    "mean": "khung"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "climb",
    "mean": "leo"
  },
  {
    "word": "run",
    "mean": "chạy"
  },
  {
    "word": "jump",
    "mean": "nhảy"
  },
  {
    "word": "hide-and-seek",
    "mean": "trò trốn tìm"
  },
  {
    "word": "shares",
    "mean": "chia sẻ"
  },
  {
    "word": "kindly",
    "mean": "một cách tử tế"
  },
  {
    "word": "waits",
    "mean": "chờ"
  },
  {
    "word": "turn",
    "mean": "lượt"
  },
  {
    "word": "patiently",
    "mean": "một cách kiên nhẫn"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "confident",
    "mean": "tự tin"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "balance",
    "mean": "cân bằng"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "outdoor",
    "mean": "ngoài trời"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "ages",
    "mean": "độ tuổi"
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
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "paths",
    "mean": "lối đi"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "relaxed",
    "mean": "thư giãn"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "walks",
    "mean": "những lần đi bộ"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "smell",
    "mean": "ngửi"
  },
  {
    "word": "hear",
    "mean": "nghe"
  },
  {
    "word": "gentle",
    "mean": "nhẹ nhàng"
  },
  {
    "word": "sounds",
    "mean": "âm thanh"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "benches",
    "mean": "ghế băng"
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
    "word": "talking",
    "mean": "việc trò chuyện"
  },
  {
    "word": "slowly",
    "mean": "một cách chậm rãi"
  },
  {
    "word": "around",
    "mean": "quanh"
  },
  {
    "word": "lake",
    "mean": "hồ"
  },
  {
    "word": "afternoon",
    "mean": "buổi chiều"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "days",
    "mean": "ngày"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "future",
    "mean": "tương lai"
  }
];

const newEx5Data = [
  "Every park has rules to keep visitors safe and comfortable every day.",
  "People should follow these rules to protect nature and respect others.",
  "Good behavior helps everyone enjoy a clean and peaceful environment together.",
  "Visitors should throw trash into bins and never damage flowers or trees.",
  "Dogs should stay on leashes, and loud music should be avoided.",
  "People must use playground equipment safely and watch young children carefully always.",
  "Park rules make visits more enjoyable for everyone.",
  "When people follow simple rules, parks stay beautiful and clean for many years.",
  "Respecting nature and other visitors creates a friendly place for families and friends.",
  "A children's playground is a fun place inside many public parks today."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Every park has rules to keep visitors safe and comfortable every day."
  },
  {
    "id": 2,
    "correct": "People should follow these rules to protect nature and respect others."
  },
  {
    "id": 3,
    "correct": "Good behavior helps everyone enjoy a clean and peaceful environment together."
  },
  {
    "id": 4,
    "correct": "Visitors should throw trash into bins and never damage flowers or trees."
  },
  {
    "id": 5,
    "correct": "Dogs should stay on leashes, and loud music should be avoided."
  },
  {
    "id": 6,
    "correct": "People must use playground equipment safely and watch young children carefully always."
  },
  {
    "id": 7,
    "correct": "Park rules make visits more enjoyable for everyone."
  },
  {
    "id": 8,
    "correct": "When people follow simple rules, parks stay beautiful and clean for many years."
  },
  {
    "id": 9,
    "correct": "Respecting nature and other visitors creates a friendly place for families and friends."
  },
  {
    "id": 10,
    "correct": "A children's playground is a fun place inside many public parks today."
  },
  {
    "id": 11,
    "correct": "It has swings, slides, climbing frames, and other exciting play equipment."
  },
  {
    "id": 12,
    "correct": "Children laugh, play, and make new friends during every visit happily."
  },
  {
    "id": 13,
    "correct": "Parents watch their children while they enjoy different games together."
  },
  {
    "id": 14,
    "correct": "Some children climb, run, jump, or play hide-and-seek with friends."
  },
  {
    "id": 15,
    "correct": "Everyone shares the playground kindly and waits for their turn on the swings patiently."
  }
];

const newEx7Data = [
  {
    "q": "Why should visitors follow park rules?",
    "a": "They should follow the rules to protect nature, respect others, and keep everyone safe and comfortable."
  },
  {
    "q": "How should visitors handle trash in the park?",
    "a": "They should throw trash into bins and never damage flowers or trees."
  },
  {
    "q": "What should happen to dogs and loud music in the park?",
    "a": "Dogs should stay on leashes, and loud music should be avoided."
  },
  {
    "q": "Why are simple park rules useful?",
    "a": "They help parks stay beautiful and clean for many years."
  },
  {
    "q": "What equipment can children find on a playground?",
    "a": "They can find swings, slides, climbing frames, and other play equipment."
  },
  {
    "q": "How should children behave when sharing the playground?",
    "a": "They should share kindly and wait patiently for their turn."
  },
  {
    "q": "What skills can playground activities improve?",
    "a": "They can improve teamwork, balance, confidence, and physical activity."
  },
  {
    "q": "What can people notice while walking in the park?",
    "a": "They can watch birds, smell flowers, and hear gentle sounds."
  },
  {
    "q": "Why is walking in the park healthy?",
    "a": "It keeps the body active, reduces stress, and improves health and happiness."
  },
  {
    "q": "How can visitors help future park users?",
    "a": "They can enjoy nature responsibly and help keep parks clean."
  }
];

