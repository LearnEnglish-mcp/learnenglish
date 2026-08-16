// ===== happy01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. It can come from many simple things, such as a kind smile, a good meal, or a peaceful _____.",
    "a": "morning"
  },
  {
    "q": "2. Some people feel happy when they achieve a goal, while others enjoy spending time with family and _____.",
    "a": "friends"
  },
  {
    "q": "3. A happy life grows from positive thoughts, loving relationships, and simple daily choices _____.",
    "a": "today"
  },
  {
    "q": "4. Waking up to a sunny morning, drinking a favorite drink, or hearing a friendly voice can make us _____.",
    "a": "smile"
  },
  {
    "q": "5. A short walk, a funny story, or a quiet rest can improve our _____.",
    "a": "mood"
  },
  {
    "q": "6. Simple joy helps us feel calm, grateful, and more satisfied with _____ today.",
    "a": "life"
  },
  {
    "q": "7. Being together helps everyone feel safe, understood, and less lonely in difficult _____.",
    "a": "times"
  },
  {
    "q": "8. Families can enjoy simple activities such as eating dinner, watching a film, or taking a _____.",
    "a": "walk"
  },
  {
    "q": "9. When family members listen, forgive, and help one another, the home becomes a warmer, safer, and much happier place for everyone _____.",
    "a": "together"
  },
  {
    "q": "10. Happiness is a warm feeling that makes life brighter and more _____ in everyday life and simple moments of happiness.",
    "a": "meaningful"
  },
  {
    "q": "11. Different people may understand happiness in different _____ in everyday life and simple moments of happiness.",
    "a": "ways"
  },
  {
    "q": "12. Happiness does not always depend on money or _____ in everyday life and simple moments of happiness.",
    "a": "success"
  },
  {
    "q": "13. Often, small moments can bring the _____ joy in everyday life and simple moments of happiness.",
    "a": "greatest"
  },
  {
    "q": "14. To live happily, we should notice the good things _____ us in everyday life and simple moments of happiness.",
    "a": "around"
  },
  {
    "q": "15. We can be thankful, help others, and take _____ of ourselves in everyday life and simple moments of happiness.",
    "a": "care"
  },
  {
    "q": "16. Happiness can be found in ordinary moments _____ day in everyday life and simple moments of happiness.",
    "a": "every"
  },
  {
    "q": "17. We do not need a special event to feel _____ in everyday life and simple moments of happiness.",
    "a": "happy"
  },
  {
    "q": "18. Daily life becomes better when we slow down and enjoy small _____ in everyday life and simple moments of happiness.",
    "a": "experiences"
  },
  {
    "q": "19. These moments may seem simple, but they are _____ in everyday life and simple moments of happiness.",
    "a": "important"
  },
  {
    "q": "20. We can create more happiness by paying attention to what is _____ in everyday life and simple moments of happiness.",
    "a": "good"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the meaning of “what” in this lesson?",
    "opts": [
      "gì; điều gì",
      "và",
      "bữa ăn",
      "đạt được"
    ],
    "a": "gì; điều gì"
  },
  {
    "q": "2. What is the meaning of “kind” in this lesson?",
    "opts": [
      "mọi người",
      "tử tế",
      "dành (thời gian)",
      "những khoảnh khắc"
    ],
    "a": "tử tế"
  },
  {
    "q": "3. What is the meaning of “goal” in this lesson?",
    "opts": [
      "làm; trợ động từ does",
      "sống",
      "mục tiêu",
      "yêu thương"
    ],
    "a": "mục tiêu"
  },
  {
    "q": "4. What is the meaning of “should” in this lesson?",
    "opts": [
      "phát triển; lớn lên",
      "ngày",
      "cần",
      "nên"
    ],
    "a": "nên"
  },
  {
    "q": "5. What is the meaning of “friendly” in this lesson?",
    "opts": [
      "thân thiện",
      "trở nên",
      "tâm trạng",
      "giúp"
    ],
    "a": "thân thiện"
  },
  {
    "q": "6. What is the meaning of “quiet” in this lesson?",
    "opts": [
      "tạo ra",
      "yên tĩnh",
      "nguồn",
      "ít hơn"
    ],
    "a": "yên tĩnh"
  },
  {
    "q": "7. What is the meaning of “wanting” in this lesson?",
    "opts": [
      "hài lòng",
      "được thấu hiểu",
      "việc mong muốn",
      "những kỷ niệm"
    ],
    "a": "việc mong muốn"
  },
  {
    "q": "8. What is the meaning of “share” in this lesson?",
    "opts": [
      "ít hơn",
      "khỏe hơn",
      "lắng nghe",
      "chia sẻ"
    ],
    "a": "chia sẻ"
  },
  {
    "q": "9. What is the meaning of “lonely” in this lesson?",
    "opts": [
      "cô đơn",
      "ngắm; quan sát",
      "lòng tốt",
      "vui vẻ hơn"
    ],
    "a": "cô đơn"
  },
  {
    "q": "10. What is the meaning of “place” in this lesson?",
    "opts": [
      "sáng",
      "nơi; địa điểm",
      "tốt",
      "khi"
    ],
    "a": "nơi; địa điểm"
  },
  {
    "q": "11. Which statement is supported by the reading?",
    "opts": [
      "The reading says happiness only comes from expensive things.",
      "Happiness is a warm feeling that makes life brighter and more meaningful.",
      "The reading says people should avoid family and friends.",
      "The reading says simple daily choices never affect happiness."
    ],
    "a": "Happiness is a warm feeling that makes life brighter and more meaningful."
  },
  {
    "q": "12. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should avoid family and friends.",
      "The reading says simple daily choices never affect happiness.",
      "Different people may understand happiness in different ways.",
      "The reading says rest and healthy habits are unnecessary."
    ],
    "a": "Different people may understand happiness in different ways."
  },
  {
    "q": "13. Which statement is supported by the reading?",
    "opts": [
      "The reading says simple daily choices never affect happiness.",
      "The reading says rest and healthy habits are unnecessary.",
      "The reading says good relationships have no value.",
      "Happiness does not always depend on money or success."
    ],
    "a": "Happiness does not always depend on money or success."
  },
  {
    "q": "14. Which statement is supported by the reading?",
    "opts": [
      "To live happily, we should notice the good things around us.",
      "The reading says rest and healthy habits are unnecessary.",
      "The reading says good relationships have no value.",
      "The reading says people should ignore positive experiences."
    ],
    "a": "To live happily, we should notice the good things around us."
  },
  {
    "q": "15. Which statement is supported by the reading?",
    "opts": [
      "The reading says good relationships have no value.",
      "A happy life grows from positive thoughts, loving relationships, and simple daily choices today.",
      "The reading says people should ignore positive experiences.",
      "The reading says helping others always requires money."
    ],
    "a": "A happy life grows from positive thoughts, loving relationships, and simple daily choices today."
  },
  {
    "q": "16. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should ignore positive experiences.",
      "The reading says helping others always requires money.",
      "Waking up to a sunny morning, drinking a favorite drink, or hearing a friendly voice can make us smile.",
      "The reading says communication makes relationships weaker."
    ],
    "a": "Waking up to a sunny morning, drinking a favorite drink, or hearing a friendly voice can make us smile."
  },
  {
    "q": "17. Which statement is supported by the reading?",
    "opts": [
      "The reading says helping others always requires money.",
      "The reading says communication makes relationships weaker.",
      "The reading says people should stop learning from challenges.",
      "Daily life becomes better when we slow down and enjoy small experiences."
    ],
    "a": "Daily life becomes better when we slow down and enjoy small experiences."
  },
  {
    "q": "18. Which statement is supported by the reading?",
    "opts": [
      "We can create more happiness by paying attention to what is good.",
      "The reading says communication makes relationships weaker.",
      "The reading says people should stop learning from challenges.",
      "The reading says a happy life depends on one perfect day."
    ],
    "a": "We can create more happiness by paying attention to what is good."
  },
  {
    "q": "19. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should stop learning from challenges.",
      "Family is an important source of happiness for many people.",
      "The reading says a happy life depends on one perfect day.",
      "The reading says happiness only comes from expensive things."
    ],
    "a": "Family is an important source of happiness for many people."
  },
  {
    "q": "20. Which statement is supported by the reading?",
    "opts": [
      "The reading says a happy life depends on one perfect day.",
      "The reading says happiness only comes from expensive things.",
      "Talking openly also helps family members understand each other better.",
      "The reading says people should avoid family and friends."
    ],
    "a": "Talking openly also helps family members understand each other better."
  }
];

const newEx3Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "happiness",
    "mean": "niềm hạnh phúc"
  },
  {
    "word": "warm",
    "mean": "ấm áp"
  },
  {
    "word": "feeling",
    "mean": "cảm xúc"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "brighter",
    "mean": "sáng"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "kind",
    "mean": "tử tế"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "peaceful",
    "mean": "yên bình"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "ways",
    "mean": "cách thức"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "achieve",
    "mean": "đạt được"
  },
  {
    "word": "goal",
    "mean": "mục tiêu"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "spending",
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
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "does",
    "mean": "làm; trợ động từ does"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "depend",
    "mean": "phụ thuộc"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "success",
    "mean": "thành công"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "moments",
    "mean": "những khoảnh khắc"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "greatest",
    "mean": "lớn nhất"
  },
  {
    "word": "joy",
    "mean": "niềm vui"
  },
  {
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "notice",
    "mean": "chú ý; nhận thấy"
  },
  {
    "word": "around",
    "mean": "xung quanh"
  },
  {
    "word": "thankful",
    "mean": "biết ơn"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "grows",
    "mean": "phát triển; lớn lên"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "thoughts",
    "mean": "những suy nghĩ"
  },
  {
    "word": "loving",
    "mean": "yêu thương"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "found",
    "mean": "được tìm thấy; tìm thấy"
  },
  {
    "word": "ordinary",
    "mean": "bình thường"
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
    "word": "waking",
    "mean": "việc thức dậy"
  },
  {
    "word": "up",
    "mean": "bỏ cuộc (trong cụm give up)"
  },
  {
    "word": "sunny",
    "mean": "có nắng"
  },
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "hearing",
    "mean": "thính giác; khả năng nghe"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "voice",
    "mean": "giọng nói"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "becomes",
    "mean": "trở nên"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "slow",
    "mean": "chậm"
  },
  {
    "word": "down",
    "mean": "xuống"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "funny",
    "mean": "hài hước"
  },
  {
    "word": "story",
    "mean": "câu chuyện"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
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
    "word": "seem",
    "mean": "có vẻ"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "paying",
    "mean": "việc chú ý; đang trả"
  },
  {
    "word": "attention",
    "mean": "sự chú ý"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "wanting",
    "mean": "việc mong muốn"
  },
  {
    "word": "value",
    "mean": "trân trọng; coi trọng"
  },
  {
    "word": "already",
    "mean": "đã; rồi"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "calm",
    "mean": "bình tĩnh"
  },
  {
    "word": "grateful",
    "mean": "biết ơn"
  },
  {
    "word": "satisfied",
    "mean": "hài lòng"
  },
  {
    "word": "source",
    "mean": "nguồn"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "brothers",
    "mean": "anh/em trai"
  },
  {
    "word": "sisters",
    "mean": "chị/em gái"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "understood",
    "mean": "được thấu hiểu"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "lonely",
    "mean": "cô đơn"
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
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "watching",
    "mean": "ngắm; quan sát"
  },
  {
    "word": "film",
    "mean": "bộ phim"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "openly",
    "mean": "một cách cởi mở"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "members",
    "mean": "thành viên"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "perfect",
    "mean": "hoàn hảo"
  },
  {
    "word": "disagree",
    "mean": "không đồng ý; bất đồng"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
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
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "forgive",
    "mean": "tha thứ"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "another",
    "mean": "một cơ hội khác"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "warmer",
    "mean": "ấm hơn"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
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
    "word": "place",
    "mean": "nơi; địa điểm"
  }
];

const newEx4Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "happiness",
    "mean": "niềm hạnh phúc"
  },
  {
    "word": "warm",
    "mean": "ấm áp"
  },
  {
    "word": "feeling",
    "mean": "cảm xúc"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "brighter",
    "mean": "sáng"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "kind",
    "mean": "tử tế"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "peaceful",
    "mean": "yên bình"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "ways",
    "mean": "cách thức"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "achieve",
    "mean": "đạt được"
  },
  {
    "word": "goal",
    "mean": "mục tiêu"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "spending",
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
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "does",
    "mean": "làm; trợ động từ does"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "depend",
    "mean": "phụ thuộc"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "success",
    "mean": "thành công"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "moments",
    "mean": "những khoảnh khắc"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "greatest",
    "mean": "lớn nhất"
  },
  {
    "word": "joy",
    "mean": "niềm vui"
  },
  {
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "notice",
    "mean": "chú ý; nhận thấy"
  },
  {
    "word": "around",
    "mean": "xung quanh"
  },
  {
    "word": "thankful",
    "mean": "biết ơn"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "grows",
    "mean": "phát triển; lớn lên"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "thoughts",
    "mean": "những suy nghĩ"
  },
  {
    "word": "loving",
    "mean": "yêu thương"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "found",
    "mean": "được tìm thấy; tìm thấy"
  },
  {
    "word": "ordinary",
    "mean": "bình thường"
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
    "word": "waking",
    "mean": "việc thức dậy"
  },
  {
    "word": "up",
    "mean": "bỏ cuộc (trong cụm give up)"
  },
  {
    "word": "sunny",
    "mean": "có nắng"
  },
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "hearing",
    "mean": "thính giác; khả năng nghe"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "voice",
    "mean": "giọng nói"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "becomes",
    "mean": "trở nên"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "slow",
    "mean": "chậm"
  },
  {
    "word": "down",
    "mean": "xuống"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "funny",
    "mean": "hài hước"
  },
  {
    "word": "story",
    "mean": "câu chuyện"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
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
    "word": "seem",
    "mean": "có vẻ"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "paying",
    "mean": "việc chú ý; đang trả"
  },
  {
    "word": "attention",
    "mean": "sự chú ý"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "wanting",
    "mean": "việc mong muốn"
  },
  {
    "word": "value",
    "mean": "trân trọng; coi trọng"
  },
  {
    "word": "already",
    "mean": "đã; rồi"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "calm",
    "mean": "bình tĩnh"
  },
  {
    "word": "grateful",
    "mean": "biết ơn"
  },
  {
    "word": "satisfied",
    "mean": "hài lòng"
  },
  {
    "word": "source",
    "mean": "nguồn"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "brothers",
    "mean": "anh/em trai"
  },
  {
    "word": "sisters",
    "mean": "chị/em gái"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "understood",
    "mean": "được thấu hiểu"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "lonely",
    "mean": "cô đơn"
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
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "watching",
    "mean": "ngắm; quan sát"
  },
  {
    "word": "film",
    "mean": "bộ phim"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "talking",
    "mean": "nói chuyện"
  },
  {
    "word": "openly",
    "mean": "một cách cởi mở"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "members",
    "mean": "thành viên"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "perfect",
    "mean": "hoàn hảo"
  },
  {
    "word": "disagree",
    "mean": "không đồng ý; bất đồng"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
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
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "forgive",
    "mean": "tha thứ"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "another",
    "mean": "một cơ hội khác"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "warmer",
    "mean": "ấm hơn"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
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
    "word": "place",
    "mean": "nơi; địa điểm"
  }
];

const newEx5Data = [
  "To live happily, we should notice the good things around us.",
  "We can be thankful, help others, and take care of ourselves.",
  "People may disagree, but kindness and respect can solve many problems.",
  "We do not need a special event to feel happy.",
  "Family is an important source of happiness for many people.",
  "We can create more happiness by paying attention to what is good.",
  "Instead of always wanting more, we should value what we already have.",
  "Talking openly also helps family members understand each other better.",
  "Parents, children, brothers, and sisters share love, care, and support.",
  "Daily life becomes better when we slow down and enjoy small experiences."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Happiness is a warm feeling that makes life brighter and more meaningful."
  },
  {
    "id": 2,
    "correct": "It can come from many simple things, such as a kind smile, a good meal, or a peaceful morning."
  },
  {
    "id": 3,
    "correct": "Different people may understand happiness in different ways."
  },
  {
    "id": 4,
    "correct": "Some people feel happy when they achieve a goal, while others enjoy spending time with family and friends."
  },
  {
    "id": 5,
    "correct": "Happiness does not always depend on money or success."
  },
  {
    "id": 6,
    "correct": "Often, small moments can bring the greatest joy."
  },
  {
    "id": 7,
    "correct": "To live happily, we should notice the good things around us."
  },
  {
    "id": 8,
    "correct": "We can be thankful, help others, and take care of ourselves."
  },
  {
    "id": 9,
    "correct": "A happy life grows from positive thoughts, loving relationships, and simple daily choices today."
  },
  {
    "id": 10,
    "correct": "Happiness can be found in ordinary moments every day."
  },
  {
    "id": 11,
    "correct": "Waking up to a sunny morning, drinking a favorite drink, or hearing a friendly voice can make us smile."
  },
  {
    "id": 12,
    "correct": "We do not need a special event to feel happy."
  },
  {
    "id": 13,
    "correct": "Daily life becomes better when we slow down and enjoy small experiences."
  },
  {
    "id": 14,
    "correct": "A short walk, a funny story, or a quiet rest can improve our mood."
  },
  {
    "id": 15,
    "correct": "These moments may seem simple, but they are important."
  }
];

const newEx7Data = [
  {
    "q": "What can bring happiness in simple daily life?",
    "a": "A kind smile, a good meal, a peaceful morning, and other small moments can bring happiness."
  },
  {
    "q": "Why do different people understand happiness in different ways?",
    "a": "People can find happiness in different goals, relationships, experiences, and simple moments."
  },
  {
    "q": "Does happiness always depend on money or success?",
    "a": "No. The reading says happiness does not always depend on money or success."
  },
  {
    "q": "What should people notice to live happily?",
    "a": "They should notice the good things around them."
  },
  {
    "q": "How can people create more happiness in everyday life?",
    "a": "They can pay attention to what is good and value what they already have."
  },
  {
    "q": "What can improve a person's mood during an ordinary day?",
    "a": "A short walk, a funny story, or a quiet rest can improve the mood."
  },
  {
    "q": "Why is family an important source of happiness?",
    "a": "Family members share love, care, support, and help one another feel safe and understood."
  },
  {
    "q": "What simple activities can families enjoy together?",
    "a": "They can eat dinner, watch a film, or take a walk together."
  },
  {
    "q": "How can family relationships become stronger?",
    "a": "Good memories, open conversations, kindness, respect, listening, and helping can strengthen family relationships."
  },
  {
    "q": "What makes a home happier when family members disagree?",
    "a": "Listening, forgiving, helping one another, kindness, and respect can make the home happier."
  }
];
