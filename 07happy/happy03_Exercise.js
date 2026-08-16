// ===== happy03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. These activities help us relax, express ourselves, and forget _____ for a while.",
    "a": "stress"
  },
  {
    "q": "2. By balancing work, study, and hobbies, we can feel more energetic, creative, happy, peaceful, confident, and more satisfied in our everyday _____ each day.",
    "a": "lives"
  },
  {
    "q": "3. When our body feels strong and our mind feels calm, we can enjoy life more _____.",
    "a": "fully"
  },
  {
    "q": "4. We can protect our health by eating balanced meals, sleeping enough, and exercising _____.",
    "a": "regularly"
  },
  {
    "q": "5. By building healthy routines and asking for support when needed, we can live more comfortably and feel stronger, calmer, and _____ each day.",
    "a": "happier"
  },
  {
    "q": "6. Money can make life easier because it helps people pay for food, housing, education, and _____.",
    "a": "healthcare"
  },
  {
    "q": "7. At the same time, people with less money can feel happy through love, friendship, and meaningful _____.",
    "a": "experiences"
  },
  {
    "q": "8. When money supports our needs and goals, it can help happiness, but it should not control our _____ lives.",
    "a": "whole"
  },
  {
    "q": "9. We can start the day with a positive thought, eat a healthy breakfast, and speak kindly to _____.",
    "a": "others"
  },
  {
    "q": "10. It is also helpful to spend time with people we love and do activities we _____.",
    "a": "enjoy"
  },
  {
    "q": "11. Happiness grows when we accept ourselves, appreciate small moments, and _____ for others.",
    "a": "care"
  },
  {
    "q": "12. By living simply and thoughtfully, we can create a happier and more meaningful _____ for ourselves.",
    "a": "life"
  },
  {
    "q": "13. Doing things we love can make life more _____ in everyday life and simple moments of happiness.",
    "a": "enjoyable"
  },
  {
    "q": "14. Some people love reading, cooking, drawing, gardening, or playing _____ in everyday life and simple moments of happiness.",
    "a": "sports"
  },
  {
    "q": "15. Hobbies also give us a sense of _____ in everyday life and simple moments of happiness.",
    "a": "progress"
  },
  {
    "q": "16. When we practice often, we learn new skills and become more _____ in everyday life and simple moments of happiness.",
    "a": "confident"
  },
  {
    "q": "17. We do not need to be the _____ in everyday life and simple moments of happiness.",
    "a": "best"
  },
  {
    "q": "18. The important thing is enjoying the _____ in everyday life and simple moments of happiness.",
    "a": "experience"
  },
  {
    "q": "19. Everyone should make some time for activities they _____ in everyday life and simple moments of happiness.",
    "a": "love"
  },
  {
    "q": "20. Even twenty minutes a day can improve our _____ in everyday life and simple moments of happiness.",
    "a": "mood"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the meaning of “doing” in this lesson?",
    "opts": [
      "việc làm",
      "thú vị; dễ chịu",
      "bày tỏ",
      "học"
    ],
    "a": "việc làm"
  },
  {
    "q": "2. What is the meaning of “express” in this lesson?",
    "opts": [
      "cảm giác; ý thức",
      "bày tỏ",
      "cần",
      "ngày"
    ],
    "a": "bày tỏ"
  },
  {
    "q": "3. What is the meaning of “best” in this lesson?",
    "opts": [
      "thời gian",
      "sáng tạo",
      "tốt nhất",
      "cảm thấy"
    ],
    "a": "tốt nhất"
  },
  {
    "q": "4. What is the meaning of “good” in this lesson?",
    "opts": [
      "tinh thần",
      "việc ngủ",
      "quá",
      "tốt"
    ],
    "a": "tốt"
  },
  {
    "q": "5. What is the meaning of “worried” in this lesson?",
    "opts": [
      "lo lắng",
      "ốm; bị bệnh",
      "khỏe hơn",
      "gia đình"
    ],
    "a": "lo lắng"
  },
  {
    "q": "6. What is the meaning of “stronger” in this lesson?",
    "opts": [
      "thức ăn",
      "khỏe hơn",
      "tạo ra",
      "trải nghiệm"
    ],
    "a": "khỏe hơn"
  },
  {
    "q": "7. What is the meaning of “choices” in this lesson?",
    "opts": [
      "chân thật; thực sự",
      "hữu ích",
      "những lựa chọn",
      "việc so sánh"
    ],
    "a": "những lựa chọn"
  },
  {
    "q": "8. What is the meaning of “meaningful” in this lesson?",
    "opts": [
      "cách tiếp cận",
      "toàn phần; nguyên hạt",
      "hữu ích",
      "có ý nghĩa"
    ],
    "a": "có ý nghĩa"
  },
  {
    "q": "9. What is the meaning of “wisely” in this lesson?",
    "opts": [
      "một cách khôn ngoan",
      "hỗ trợ",
      "một cách tử tế",
      "di chuyển"
    ],
    "a": "một cách khôn ngoan"
  },
  {
    "q": "10. What is the meaning of “thoughtfully” in this lesson?",
    "opts": [
      "nhiều hơn",
      "một cách chu đáo",
      "thư giãn",
      "thường xuyên"
    ],
    "a": "một cách chu đáo"
  },
  {
    "q": "11. Which statement is supported by the reading?",
    "opts": [
      "The reading says happiness only comes from expensive things.",
      "Doing things we love can make life more enjoyable.",
      "The reading says people should avoid family and friends.",
      "The reading says simple daily choices never affect happiness."
    ],
    "a": "Doing things we love can make life more enjoyable."
  },
  {
    "q": "12. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should avoid family and friends.",
      "The reading says simple daily choices never affect happiness.",
      "These activities help us relax, express ourselves, and forget stress for a while.",
      "The reading says rest and healthy habits are unnecessary."
    ],
    "a": "These activities help us relax, express ourselves, and forget stress for a while."
  },
  {
    "q": "13. Which statement is supported by the reading?",
    "opts": [
      "The reading says simple daily choices never affect happiness.",
      "The reading says rest and healthy habits are unnecessary.",
      "The reading says good relationships have no value.",
      "When we practice often, we learn new skills and become more confident."
    ],
    "a": "When we practice often, we learn new skills and become more confident."
  },
  {
    "q": "14. Which statement is supported by the reading?",
    "opts": [
      "The important thing is enjoying the experience.",
      "The reading says rest and healthy habits are unnecessary.",
      "The reading says good relationships have no value.",
      "The reading says people should ignore positive experiences."
    ],
    "a": "The important thing is enjoying the experience."
  },
  {
    "q": "15. Which statement is supported by the reading?",
    "opts": [
      "The reading says good relationships have no value.",
      "Even twenty minutes a day can improve our mood.",
      "The reading says people should ignore positive experiences.",
      "The reading says helping others always requires money."
    ],
    "a": "Even twenty minutes a day can improve our mood."
  },
  {
    "q": "16. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should ignore positive experiences.",
      "The reading says helping others always requires money.",
      "Good health is closely connected to happiness.",
      "The reading says communication makes relationships weaker."
    ],
    "a": "Good health is closely connected to happiness."
  },
  {
    "q": "17. Which statement is supported by the reading?",
    "opts": [
      "The reading says helping others always requires money.",
      "The reading says communication makes relationships weaker.",
      "The reading says people should stop learning from challenges.",
      "Healthy habits give us energy for work, study, family, and hobbies."
    ],
    "a": "Healthy habits give us energy for work, study, family, and hobbies."
  },
  {
    "q": "18. Which statement is supported by the reading?",
    "opts": [
      "Mental health needs care too, especially when we feel worried or tired.",
      "The reading says communication makes relationships weaker.",
      "The reading says people should stop learning from challenges.",
      "The reading says a happy life depends on one perfect day."
    ],
    "a": "Mental health needs care too, especially when we feel worried or tired."
  },
  {
    "q": "19. Which statement is supported by the reading?",
    "opts": [
      "The reading says people should stop learning from challenges.",
      "By building healthy routines and asking for support when needed, we can live more comfortably and feel stronger, calmer, and happier each day.",
      "The reading says a happy life depends on one perfect day.",
      "The reading says happiness only comes from expensive things."
    ],
    "a": "By building healthy routines and asking for support when needed, we can live more comfortably and feel stronger, calmer, and happier each day."
  },
  {
    "q": "20. Which statement is supported by the reading?",
    "opts": [
      "The reading says a happy life depends on one perfect day.",
      "The reading says happiness only comes from expensive things.",
      "At the same time, people with less money can feel happy through love, friendship, and meaningful experiences.",
      "The reading says people should avoid family and friends."
    ],
    "a": "At the same time, people with less money can feel happy through love, friendship, and meaningful experiences."
  }
];

const newEx3Data = [
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "love",
    "mean": "yêu"
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
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "reading",
    "mean": "đọc"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "drawing",
    "mean": "vẽ; việc vẽ"
  },
  {
    "word": "gardening",
    "mean": "làm vườn"
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
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "express",
    "mean": "bày tỏ"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "hobbies",
    "mean": "sở thích"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "sense",
    "mean": "cảm giác; ý thức"
  },
  {
    "word": "progress",
    "mean": "sự tiến bộ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
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
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "confident",
    "mean": "tự tin"
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
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "thing",
    "mean": "điều; thứ"
  },
  {
    "word": "enjoying",
    "mean": "việc tận hưởng"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
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
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "twenty",
    "mean": "hai mươi"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "day",
    "mean": "ngày"
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
    "word": "balancing",
    "mean": "việc cân bằng"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "energetic",
    "mean": "tràn đầy năng lượng"
  },
  {
    "word": "creative",
    "mean": "sáng tạo"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "peaceful",
    "mean": "yên bình"
  },
  {
    "word": "satisfied",
    "mean": "hài lòng"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "lives",
    "mean": "sinh mạng"
  },
  {
    "word": "happiness",
    "mean": "niềm hạnh phúc"
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
    "word": "closely",
    "mean": "chặt chẽ"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "mind",
    "mean": "tinh thần"
  },
  {
    "word": "calm",
    "mean": "bình tĩnh"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "fully",
    "mean": "hoàn toàn; trọn vẹn"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "habits",
    "mean": "tập tính; thói quen"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "sleeping",
    "mean": "việc ngủ"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "exercising",
    "mean": "việc tập thể dục"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "breaks",
    "mean": "nghỉ giải lao; làm vỡ"
  },
  {
    "word": "mental",
    "mean": "thuộc tinh thần"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "especially",
    "mean": "đặc biệt"
  },
  {
    "word": "worried",
    "mean": "lo lắng"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "does",
    "mean": "làm; trợ động từ does"
  },
  {
    "word": "mean",
    "mean": "có nghĩa là"
  },
  {
    "word": "perfect",
    "mean": "hoàn hảo"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "getting",
    "mean": "việc có được"
  },
  {
    "word": "sick",
    "mean": "ốm; bị bệnh"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "caring",
    "mean": "quan tâm"
  },
  {
    "word": "sensible",
    "mean": "hợp lý; khôn ngoan"
  },
  {
    "word": "ways",
    "mean": "cách thức"
  },
  {
    "word": "building",
    "mean": "đang xây"
  },
  {
    "word": "routines",
    "mean": "những thói quen"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "needed",
    "mean": "cần thiết"
  },
  {
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "comfortably",
    "mean": "một cách thoải mái"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "calmer",
    "mean": "bình tĩnh hơn"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "housing",
    "mean": "nhà ở"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "healthcare",
    "mean": "chăm sóc sức khỏe"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "security",
    "mean": "bảo mật; an ninh"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "having",
    "mean": "việc có; đang có"
  },
  {
    "word": "lot",
    "mean": "nhiều; một lượng lớn"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "true",
    "mean": "chân thật; thực sự"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "lonely",
    "mean": "cô đơn"
  },
  {
    "word": "dissatisfied",
    "mean": "không hài lòng"
  },
  {
    "word": "same",
    "mean": "cùng một"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "through",
    "mean": "qua; xuyên qua"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "replace",
    "mean": "thay thế"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "approach",
    "mean": "cách tiếp cận"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "comparing",
    "mean": "việc so sánh"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "goals",
    "mean": "các mục tiêu"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "whole",
    "mean": "toàn phần; nguyên hạt"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "begins",
    "mean": "bắt đầu"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "thought",
    "mean": "suy nghĩ"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "breakfast",
    "mean": "bữa sáng"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "kindly",
    "mean": "một cách tử tế"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "expect",
    "mean": "mong đợi"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "happen",
    "mean": "xảy ra"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "moving",
    "mean": "di chuyển"
  },
  {
    "word": "forward",
    "mean": "về phía trước"
  },
  {
    "word": "grows",
    "mean": "phát triển; lớn lên"
  },
  {
    "word": "accept",
    "mean": "chấp nhận"
  },
  {
    "word": "appreciate",
    "mean": "trân trọng"
  },
  {
    "word": "moments",
    "mean": "những khoảnh khắc"
  },
  {
    "word": "living",
    "mean": "sống; việc sống"
  },
  {
    "word": "simply",
    "mean": "đơn giản là"
  },
  {
    "word": "thoughtfully",
    "mean": "một cách chu đáo"
  }
];

const newEx4Data = [
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "love",
    "mean": "yêu"
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
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "reading",
    "mean": "đọc"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "drawing",
    "mean": "vẽ; việc vẽ"
  },
  {
    "word": "gardening",
    "mean": "làm vườn"
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
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "express",
    "mean": "bày tỏ"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "hobbies",
    "mean": "sở thích"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "sense",
    "mean": "cảm giác; ý thức"
  },
  {
    "word": "progress",
    "mean": "sự tiến bộ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
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
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "confident",
    "mean": "tự tin"
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
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "thing",
    "mean": "điều; thứ"
  },
  {
    "word": "enjoying",
    "mean": "việc tận hưởng"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
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
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "twenty",
    "mean": "hai mươi"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "day",
    "mean": "ngày"
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
    "word": "balancing",
    "mean": "việc cân bằng"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "energetic",
    "mean": "tràn đầy năng lượng"
  },
  {
    "word": "creative",
    "mean": "sáng tạo"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "peaceful",
    "mean": "yên bình"
  },
  {
    "word": "satisfied",
    "mean": "hài lòng"
  },
  {
    "word": "everyday",
    "mean": "hằng ngày"
  },
  {
    "word": "lives",
    "mean": "sinh mạng"
  },
  {
    "word": "happiness",
    "mean": "niềm hạnh phúc"
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
    "word": "closely",
    "mean": "chặt chẽ"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "mind",
    "mean": "tinh thần"
  },
  {
    "word": "calm",
    "mean": "bình tĩnh"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "fully",
    "mean": "hoàn toàn; trọn vẹn"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "habits",
    "mean": "tập tính; thói quen"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "sleeping",
    "mean": "việc ngủ"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "exercising",
    "mean": "việc tập thể dục"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "breaks",
    "mean": "nghỉ giải lao; làm vỡ"
  },
  {
    "word": "mental",
    "mean": "thuộc tinh thần"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "especially",
    "mean": "đặc biệt"
  },
  {
    "word": "worried",
    "mean": "lo lắng"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "does",
    "mean": "làm; trợ động từ does"
  },
  {
    "word": "mean",
    "mean": "có nghĩa là"
  },
  {
    "word": "perfect",
    "mean": "hoàn hảo"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "getting",
    "mean": "việc có được"
  },
  {
    "word": "sick",
    "mean": "ốm; bị bệnh"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "caring",
    "mean": "quan tâm"
  },
  {
    "word": "sensible",
    "mean": "hợp lý; khôn ngoan"
  },
  {
    "word": "ways",
    "mean": "cách thức"
  },
  {
    "word": "building",
    "mean": "đang xây"
  },
  {
    "word": "routines",
    "mean": "những thói quen"
  },
  {
    "word": "asking",
    "mean": "việc hỏi"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "needed",
    "mean": "cần thiết"
  },
  {
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "comfortably",
    "mean": "một cách thoải mái"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "calmer",
    "mean": "bình tĩnh hơn"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "housing",
    "mean": "nhà ở"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "healthcare",
    "mean": "chăm sóc sức khỏe"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "security",
    "mean": "bảo mật; an ninh"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "having",
    "mean": "việc có; đang có"
  },
  {
    "word": "lot",
    "mean": "nhiều; một lượng lớn"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "true",
    "mean": "chân thật; thực sự"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "lonely",
    "mean": "cô đơn"
  },
  {
    "word": "dissatisfied",
    "mean": "không hài lòng"
  },
  {
    "word": "same",
    "mean": "cùng một"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "through",
    "mean": "qua; xuyên qua"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "replace",
    "mean": "thay thế"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "approach",
    "mean": "cách tiếp cận"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "comparing",
    "mean": "việc so sánh"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "goals",
    "mean": "các mục tiêu"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "whole",
    "mean": "toàn phần; nguyên hạt"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "begins",
    "mean": "bắt đầu"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "thought",
    "mean": "suy nghĩ"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "breakfast",
    "mean": "bữa sáng"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "kindly",
    "mean": "một cách tử tế"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "expect",
    "mean": "mong đợi"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "happen",
    "mean": "xảy ra"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "moving",
    "mean": "di chuyển"
  },
  {
    "word": "forward",
    "mean": "về phía trước"
  },
  {
    "word": "grows",
    "mean": "phát triển; lớn lên"
  },
  {
    "word": "accept",
    "mean": "chấp nhận"
  },
  {
    "word": "appreciate",
    "mean": "trân trọng"
  },
  {
    "word": "moments",
    "mean": "những khoảnh khắc"
  },
  {
    "word": "living",
    "mean": "sống; việc sống"
  },
  {
    "word": "simply",
    "mean": "đơn giản là"
  },
  {
    "word": "thoughtfully",
    "mean": "một cách chu đáo"
  }
];

const newEx5Data = [
  "Healthy habits give us energy for work, study, family, and hobbies.",
  "We should save, spend carefully, and avoid comparing ourselves with others.",
  "Health does not mean being perfect or never getting sick.",
  "Some rich people may still feel lonely, worried, or dissatisfied.",
  "However, having a lot of money does not always create true happiness.",
  "When problems happen, we can learn from them and keep moving forward.",
  "When we practice often, we learn new skills and become more confident.",
  "Mental health needs care too, especially when we feel worried or tired.",
  "Some people love reading, cooking, drawing, gardening, or playing sports.",
  "We should not expect every day to be perfect."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Doing things we love can make life more enjoyable."
  },
  {
    "id": 2,
    "correct": "These activities help us relax, express ourselves, and forget stress for a while."
  },
  {
    "id": 3,
    "correct": "When we practice often, we learn new skills and become more confident."
  },
  {
    "id": 4,
    "correct": "The important thing is enjoying the experience."
  },
  {
    "id": 5,
    "correct": "Even twenty minutes a day can improve our mood."
  },
  {
    "id": 6,
    "correct": "Good health is closely connected to happiness."
  },
  {
    "id": 7,
    "correct": "Healthy habits give us energy for work, study, family, and hobbies."
  },
  {
    "id": 8,
    "correct": "Drinking water and taking short breaks are also important."
  },
  {
    "id": 9,
    "correct": "Health does not mean being perfect or never getting sick."
  },
  {
    "id": 10,
    "correct": "By building healthy routines and asking for support when needed, we can live more comfortably and feel stronger, calmer, and happier each day."
  },
  {
    "id": 11,
    "correct": "It also gives families more choices and security."
  },
  {
    "id": 12,
    "correct": "Some rich people may still feel lonely, worried, or dissatisfied."
  },
  {
    "id": 13,
    "correct": "Money is useful, but it cannot replace strong relationships."
  },
  {
    "id": 14,
    "correct": "We should save, spend carefully, and avoid comparing ourselves with others."
  },
  {
    "id": 15,
    "correct": "A happy life often begins with simple choices."
  }
];

const newEx7Data = [
  {
    "q": "What kinds of activities can people love doing?",
    "a": "People may love reading, cooking, drawing, gardening, or playing sports."
  },
  {
    "q": "How can hobbies help people?",
    "a": "Hobbies can help people relax, express themselves, learn new skills, and become more confident."
  },
  {
    "q": "How can good health support happiness?",
    "a": "A strong body and calm mind help people enjoy life more fully and have energy for daily activities."
  },
  {
    "q": "What habits can protect health?",
    "a": "Balanced meals, enough sleep, regular exercise, water, and short breaks can protect health."
  },
  {
    "q": "What does the reading say health means?",
    "a": "Health means caring for ourselves in sensible ways, not being perfect or never getting sick."
  },
  {
    "q": "Why can money make life easier?",
    "a": "Money helps people pay for food, housing, education, and healthcare and gives families more choices and security."
  },
  {
    "q": "Can money replace strong relationships?",
    "a": "No. The reading says money is useful, but it cannot replace strong relationships."
  },
  {
    "q": "How should people use money wisely?",
    "a": "They should save, spend carefully, and avoid comparing themselves with others."
  },
  {
    "q": "What simple choices can begin a happy life?",
    "a": "Positive thoughts, a healthy breakfast, kind speech, rest, exercise, and time with loved ones can support a happy life."
  },
  {
    "q": "What can people do when problems happen?",
    "a": "They can learn from problems, keep moving forward, accept themselves, and appreciate small moments."
  }
];
