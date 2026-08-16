// ===== happy02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A good friend listens to us, shares our feelings, and stays near during both happy and difficult _____.",
    "a": "times"
  },
  {
    "q": "2. Good friends do not need to agree about everything, but they care deeply and always try to understand each _____.",
    "a": "other"
  },
  {
    "q": "3. When we give time, attention, or support, we make someone’s day _____.",
    "a": "better"
  },
  {
    "q": "4. Even a small action, such as carrying a bag or sharing food, can be _____.",
    "a": "meaningful"
  },
  {
    "q": "5. We may not receive money or a gift, but the smile of another person can be a wonderful _____.",
    "a": "reward"
  },
  {
    "q": "6. We can support a classmate, visit an older person, or join a community _____.",
    "a": "activity"
  },
  {
    "q": "7. By helping others, we create more kindness around us and make our own lives much happier _____ day too.",
    "a": "every"
  },
  {
    "q": "8. People sometimes focus too much on problems or things they do not _____.",
    "a": "have"
  },
  {
    "q": "9. When we remember the positive parts of life, our thoughts become calmer and more _____.",
    "a": "hopeful"
  },
  {
    "q": "10. We can write three good things in a notebook or thank someone for their _____.",
    "a": "help"
  },
  {
    "q": "11. By practicing gratitude regularly, we become more positive, patient, and more satisfied with everything we already have in _____.",
    "a": "life"
  },
  {
    "q": "12. Friendship brings joy, comfort, and meaning to our _____ in everyday life and simple moments of happiness.",
    "a": "lives"
  },
  {
    "q": "13. True friendship makes people feel accepted and _____ in everyday life and simple moments of happiness.",
    "a": "understood"
  },
  {
    "q": "14. Friends often enjoy studying, playing sports, talking, or traveling _____ in everyday life and simple moments of happiness.",
    "a": "together"
  },
  {
    "q": "15. They can make ordinary days more interesting and help us forget _____ in everyday life and simple moments of happiness.",
    "a": "stress"
  },
  {
    "q": "16. A simple message from a friend can also improve our _____ in everyday life and simple moments of happiness.",
    "a": "mood"
  },
  {
    "q": "17. To keep a strong friendship, we should be honest, kind, and _____ in everyday life and simple moments of happiness.",
    "a": "respectful"
  },
  {
    "q": "18. We need to listen carefully and _____ each other in everyday life and simple moments of happiness.",
    "a": "support"
  },
  {
    "q": "19. Helping other people can bring deep _____ in everyday life and simple moments of happiness.",
    "a": "happiness"
  },
  {
    "q": "20. Helping others also helps us feel useful and _____ in everyday life and simple moments of happiness.",
    "a": "connected"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the meaning of “happiness” in this lesson?",
    "opts": [
      "niềm hạnh phúc",
      "sinh mạng",
      "mọi người",
      "cùng nhau"
    ],
    "a": "niềm hạnh phúc"
  },
  {
    "q": "2. What is the meaning of “difficult” in this lesson?",
    "opts": [
      "được thấu hiểu",
      "khó khăn",
      "bình thường",
      "giữ; duy trì"
    ],
    "a": "khó khăn"
  },
  {
    "q": "3. What is the meaning of “together” in this lesson?",
    "opts": [
      "giúp",
      "tử tế",
      "cùng nhau",
      "sự chăm sóc; chăm sóc"
    ],
    "a": "cùng nhau"
  },
  {
    "q": "4. What is the meaning of “need” in this lesson?",
    "opts": [
      "đồng ý",
      "mang lại",
      "việc chia sẻ; đi chung",
      "cần"
    ],
    "a": "cần"
  },
  {
    "q": "5. What is the meaning of “small” in this lesson?",
    "opts": [
      "nhỏ",
      "có ý nghĩa",
      "món quà",
      "thăm"
    ],
    "a": "nhỏ"
  },
  {
    "q": "6. What is the meaning of “understanding” in this lesson?",
    "opts": [
      "người",
      "sự thấu hiểu",
      "cộng đồng",
      "có nghĩa là"
    ],
    "a": "sự thấu hiểu"
  },
  {
    "q": "7. What is the meaning of “many” in this lesson?",
    "opts": [
      "tham gia",
      "có",
      "nhiều",
      "đã; rồi"
    ],
    "a": "nhiều"
  },
  {
    "q": "8. What is the meaning of “much” in this lesson?",
    "opts": [
      "có nghĩa là",
      "đôi khi",
      "viết",
      "nhiều; rất"
    ],
    "a": "nhiều; rất"
  },
  {
    "q": "9. What is the meaning of “means” in this lesson?",
    "opts": [
      "có nghĩa là",
      "nơi sinh sống; nhà",
      "những suy nghĩ",
      "hài lòng"
    ],
    "a": "có nghĩa là"
  },
  {
    "q": "10. What is the meaning of “satisfied” in this lesson?",
    "opts": [
      "nghĩa",
      "hài lòng",
      "làm; khiến",
      "đang di chuyển"
    ],
    "a": "hài lòng"
  },
  {
    "q": "11. Which statement is supported by the reading?",
    "opts": [
      "The reading says happiness only comes from expensive things.",
      "Friendship brings joy, comfort, and meaning to our lives.",
      "The reading says people should avoid family and friends.",
      "The reading says simple daily choices never affect happiness."
    ],
    "a": "Friendship brings joy, comfort, and meaning to our lives."
  },
  {
    "q": "12. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should avoid family and friends.",
      "The reading says simple daily choices never affect happiness.",
      "True friendship makes people feel accepted and understood.",
      "The reading says rest and healthy habits are unnecessary."
    ],
    "a": "True friendship makes people feel accepted and understood."
  },
  {
    "q": "13. Which statement is supported by the reading?",
    "opts": [
      "The reading says simple daily choices never affect happiness.",
      "The reading says rest and healthy habits are unnecessary.",
      "The reading says good relationships have no value.",
      "They can make ordinary days more interesting and help us forget stress."
    ],
    "a": "They can make ordinary days more interesting and help us forget stress."
  },
  {
    "q": "14. Which statement is supported by the reading?",
    "opts": [
      "To keep a strong friendship, we should be honest, kind, and respectful.",
      "The reading says rest and healthy habits are unnecessary.",
      "The reading says good relationships have no value.",
      "The reading says people should ignore positive experiences."
    ],
    "a": "To keep a strong friendship, we should be honest, kind, and respectful."
  },
  {
    "q": "15. Which statement is supported by the reading?",
    "opts": [
      "The reading says good relationships have no value.",
      "Good friends do not need to agree about everything, but they care deeply and always try to understand each other.",
      "The reading says people should ignore positive experiences.",
      "The reading says helping others always requires money."
    ],
    "a": "Good friends do not need to agree about everything, but they care deeply and always try to understand each other."
  },
  {
    "q": "16. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should ignore positive experiences.",
      "The reading says helping others always requires money.",
      "When we give time, attention, or support, we make someone’s day better.",
      "The reading says communication makes relationships weaker."
    ],
    "a": "When we give time, attention, or support, we make someone’s day better."
  },
  {
    "q": "17. Which statement is supported by the reading?",
    "opts": [
      "The reading says helping others always requires money.",
      "The reading says communication makes relationships weaker.",
      "The reading says people should stop learning from challenges.",
      "Helping others also helps us feel useful and connected."
    ],
    "a": "Helping others also helps us feel useful and connected."
  },
  {
    "q": "18. Which statement is supported by the reading?",
    "opts": [
      "There are many ways to help in daily life.",
      "The reading says communication makes relationships weaker.",
      "The reading says people should stop learning from challenges.",
      "The reading says a happy life depends on one perfect day."
    ],
    "a": "There are many ways to help in daily life."
  },
  {
    "q": "19. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should stop learning from challenges.",
      "Being thankful means noticing and appreciating the good things in life.",
      "The reading says a happy life depends on one perfect day.",
      "The reading says happiness only comes from expensive things."
    ],
    "a": "Being thankful means noticing and appreciating the good things in life."
  },
  {
    "q": "20. Which statement is supported by the reading?",
    "opts": [
      "The reading says a happy life depends on one perfect day.",
      "The reading says happiness only comes from expensive things.",
      "When we remember the positive parts of life, our thoughts become calmer and more hopeful.",
      "The reading says people should avoid family and friends."
    ],
    "a": "When we remember the positive parts of life, our thoughts become calmer and more hopeful."
  }
];

const newEx3Data = [
  {
    "word": "happiness",
    "mean": "niềm hạnh phúc"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "joy",
    "mean": "niềm vui"
  },
  {
    "word": "comfort",
    "mean": "sự thoải mái"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "meaning",
    "mean": "nghĩa"
  },
  {
    "word": "lives",
    "mean": "sinh mạng"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "friend",
    "mean": "người bạn"
  },
  {
    "word": "listens",
    "mean": "lắng nghe"
  },
  {
    "word": "shares",
    "mean": "chia sẻ"
  },
  {
    "word": "feelings",
    "mean": "cảm xúc"
  },
  {
    "word": "stays",
    "mean": "duy trì; vẫn ở trạng thái"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "times",
    "mean": "những lúc; thời điểm"
  },
  {
    "word": "true",
    "mean": "chân thật; thực sự"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "accepted",
    "mean": "được chấp nhận"
  },
  {
    "word": "understood",
    "mean": "được thấu hiểu"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "studying",
    "mean": "việc học; đang học"
  },
  {
    "word": "playing",
    "mean": "việc chơi"
  },
  {
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "traveling",
    "mean": "đang di chuyển"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "ordinary",
    "mean": "bình thường"
  },
  {
    "word": "days",
    "mean": "ngày"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "forget",
    "mean": "quên"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "message",
    "mean": "tin nhắn; thông điệp"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "mood",
    "mean": "tâm trạng"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "kind",
    "mean": "tử tế"
  },
  {
    "word": "respectful",
    "mean": "kính cẩn"
  },
  {
    "word": "need",
    "mean": "cần"
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
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "agree",
    "mean": "đồng ý"
  },
  {
    "word": "everything",
    "mean": "mọi thứ"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "deeply",
    "mean": "sâu sắc"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "helping",
    "mean": "giúp đỡ"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "deep",
    "mean": "trầm; sâu"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "attention",
    "mean": "sự chú ý"
  },
  {
    "word": "someone",
    "mean": "ai đó"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "action",
    "mean": "hành động"
  },
  {
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "carrying",
    "mean": "việc mang; đang mang"
  },
  {
    "word": "bag",
    "mean": "cặp; túi"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ; đi chung"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "patience",
    "mean": "sự kiên nhẫn"
  },
  {
    "word": "understanding",
    "mean": "sự thấu hiểu"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "receive",
    "mean": "nhận"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "gift",
    "mean": "món quà"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "another",
    "mean": "một cơ hội khác"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "reward",
    "mean": "phần thưởng"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "ways",
    "mean": "cách thức"
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
    "word": "classmate",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "around",
    "mean": "xung quanh"
  },
  {
    "word": "own",
    "mean": "của riêng mình"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "thankful",
    "mean": "biết ơn"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "noticing",
    "mean": "việc nhận ra; chú ý"
  },
  {
    "word": "appreciating",
    "mean": "việc trân trọng"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "grateful",
    "mean": "biết ơn"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "opportunities",
    "mean": "cơ hội"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "already",
    "mean": "đã; rồi"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "focus",
    "mean": "tập trung"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "unhappy",
    "mean": "không vui"
  },
  {
    "word": "remember",
    "mean": "tưởng nhớ"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "parts",
    "mean": "phần"
  },
  {
    "word": "thoughts",
    "mean": "những suy nghĩ"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "calmer",
    "mean": "bình tĩnh hơn"
  },
  {
    "word": "hopeful",
    "mean": "đầy hy vọng"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "three",
    "mean": "ba"
  },
  {
    "word": "notebook",
    "mean": "sổ tay"
  },
  {
    "word": "thank",
    "mean": "cảm tạ"
  },
  {
    "word": "practicing",
    "mean": "việc luyện tập"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "satisfied",
    "mean": "hài lòng"
  }
];

const newEx4Data = [
  {
    "word": "happiness",
    "mean": "niềm hạnh phúc"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "joy",
    "mean": "niềm vui"
  },
  {
    "word": "comfort",
    "mean": "sự thoải mái"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "meaning",
    "mean": "nghĩa"
  },
  {
    "word": "lives",
    "mean": "sinh mạng"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "friend",
    "mean": "người bạn"
  },
  {
    "word": "listens",
    "mean": "lắng nghe"
  },
  {
    "word": "shares",
    "mean": "chia sẻ"
  },
  {
    "word": "feelings",
    "mean": "cảm xúc"
  },
  {
    "word": "stays",
    "mean": "duy trì; vẫn ở trạng thái"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "times",
    "mean": "những lúc; thời điểm"
  },
  {
    "word": "true",
    "mean": "chân thật; thực sự"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "accepted",
    "mean": "được chấp nhận"
  },
  {
    "word": "understood",
    "mean": "được thấu hiểu"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "studying",
    "mean": "việc học; đang học"
  },
  {
    "word": "playing",
    "mean": "việc chơi"
  },
  {
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "traveling",
    "mean": "đang di chuyển"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "ordinary",
    "mean": "bình thường"
  },
  {
    "word": "days",
    "mean": "ngày"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "forget",
    "mean": "quên"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "message",
    "mean": "tin nhắn; thông điệp"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "mood",
    "mean": "tâm trạng"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "kind",
    "mean": "tử tế"
  },
  {
    "word": "respectful",
    "mean": "kính cẩn"
  },
  {
    "word": "need",
    "mean": "cần"
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
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "agree",
    "mean": "đồng ý"
  },
  {
    "word": "everything",
    "mean": "mọi thứ"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "deeply",
    "mean": "sâu sắc"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "helping",
    "mean": "giúp đỡ"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "deep",
    "mean": "trầm; sâu"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "attention",
    "mean": "sự chú ý"
  },
  {
    "word": "someone",
    "mean": "ai đó"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "action",
    "mean": "hành động"
  },
  {
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "carrying",
    "mean": "việc mang; đang mang"
  },
  {
    "word": "bag",
    "mean": "cặp; túi"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ; đi chung"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "patience",
    "mean": "sự kiên nhẫn"
  },
  {
    "word": "understanding",
    "mean": "sự thấu hiểu"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "receive",
    "mean": "nhận"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "gift",
    "mean": "món quà"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "another",
    "mean": "một cơ hội khác"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "reward",
    "mean": "phần thưởng"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "ways",
    "mean": "cách thức"
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
    "word": "classmate",
    "mean": "bạn cùng lớp"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "around",
    "mean": "xung quanh"
  },
  {
    "word": "own",
    "mean": "của riêng mình"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "thankful",
    "mean": "biết ơn"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "noticing",
    "mean": "việc nhận ra; chú ý"
  },
  {
    "word": "appreciating",
    "mean": "việc trân trọng"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "grateful",
    "mean": "biết ơn"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "opportunities",
    "mean": "cơ hội"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "already",
    "mean": "đã; rồi"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "focus",
    "mean": "tập trung"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "unhappy",
    "mean": "không vui"
  },
  {
    "word": "remember",
    "mean": "tưởng nhớ"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "parts",
    "mean": "phần"
  },
  {
    "word": "thoughts",
    "mean": "những suy nghĩ"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "calmer",
    "mean": "bình tĩnh hơn"
  },
  {
    "word": "hopeful",
    "mean": "đầy hy vọng"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "three",
    "mean": "ba"
  },
  {
    "word": "notebook",
    "mean": "sổ tay"
  },
  {
    "word": "thank",
    "mean": "cảm tạ"
  },
  {
    "word": "practicing",
    "mean": "việc luyện tập"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "satisfied",
    "mean": "hài lòng"
  }
];

const newEx5Data = [
  "A simple message from a friend can also improve our mood.",
  "Gratitude helps us see that happiness is often already around us.",
  "Being thankful means noticing and appreciating the good things in life.",
  "They can make ordinary days more interesting and help us forget stress.",
  "To keep a strong friendship, we should be honest, kind, and respectful.",
  "When we give time, attention, or support, we make someone’s day better.",
  "We can be grateful for our family, health, home, food, and opportunities.",
  "Friends often enjoy studying, playing sports, talking, or traveling together.",
  "There are many ways to help in daily life.",
  "We need to listen carefully and support each other."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Friendship brings joy, comfort, and meaning to our lives."
  },
  {
    "id": 2,
    "correct": "A good friend listens to us, shares our feelings, and stays near during both happy and difficult times."
  },
  {
    "id": 3,
    "correct": "True friendship makes people feel accepted and understood."
  },
  {
    "id": 4,
    "correct": "Friends often enjoy studying, playing sports, talking, or traveling together."
  },
  {
    "id": 5,
    "correct": "They can make ordinary days more interesting and help us forget stress."
  },
  {
    "id": 6,
    "correct": "A simple message from a friend can also improve our mood."
  },
  {
    "id": 7,
    "correct": "To keep a strong friendship, we should be honest, kind, and respectful."
  },
  {
    "id": 8,
    "correct": "We need to listen carefully and support each other."
  },
  {
    "id": 9,
    "correct": "Good friends do not need to agree about everything, but they care deeply and always try to understand each other."
  },
  {
    "id": 10,
    "correct": "Helping other people can bring deep happiness."
  },
  {
    "id": 11,
    "correct": "When we give time, attention, or support, we make someone’s day better."
  },
  {
    "id": 12,
    "correct": "Even a small action, such as carrying a bag or sharing food, can be meaningful."
  },
  {
    "id": 13,
    "correct": "Helping others also helps us feel useful and connected."
  },
  {
    "id": 14,
    "correct": "It teaches kindness, patience, and understanding."
  },
  {
    "id": 15,
    "correct": "We may not receive money or a gift, but the smile of another person can be a wonderful reward."
  }
];

const newEx7Data = [
  {
    "q": "What does a good friend do during happy and difficult times?",
    "a": "A good friend listens, shares feelings, and stays near during both happy and difficult times."
  },
  {
    "q": "How can friends make ordinary days more interesting?",
    "a": "They can study, play sports, talk, travel, and share simple messages together."
  },
  {
    "q": "What qualities help keep a strong friendship?",
    "a": "Honesty, kindness, respect, careful listening, and support help keep a friendship strong."
  },
  {
    "q": "How can helping another person bring happiness?",
    "a": "Giving time, attention, or support can make another person's day better and make the helper feel useful and connected."
  },
  {
    "q": "What small actions can be meaningful when helping others?",
    "a": "Carrying a bag or sharing food can be meaningful small actions."
  },
  {
    "q": "What can people learn from helping others?",
    "a": "They can learn kindness, patience, and understanding."
  },
  {
    "q": "What are some ways to help in daily life?",
    "a": "People can support a classmate, visit an older person, or join a community activity."
  },
  {
    "q": "What does being thankful mean?",
    "a": "It means noticing and appreciating the good things in life."
  },
  {
    "q": "How can gratitude change our thoughts?",
    "a": "Remembering positive parts of life can make our thoughts calmer and more hopeful."
  },
  {
    "q": "What simple gratitude habit does the reading suggest?",
    "a": "It suggests writing three good things in a notebook or thanking someone for their help."
  }
];
