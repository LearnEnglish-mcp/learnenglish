// ===== AI01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Chat AI is a smart computer program that can talk with people through text or _____.",
    "a": "voice"
  },
  {
    "q": "2. It can answer questions, explain ideas, write sentences, translate languages, and help users learn new _____.",
    "a": "things"
  },
  {
    "q": "3. Many people use Chat AI because it is fast, friendly, and _____ to use during everyday learning, work, and communication activities for users.",
    "a": "easy"
  },
  {
    "q": "4. Chat AI does not think like a human, but it can understand many questions and give useful _____.",
    "a": "answers"
  },
  {
    "q": "5. It learns from a large amount of information and uses patterns to _____ during everyday learning, work, and communication activities for users.",
    "a": "respond"
  },
  {
    "q": "6. Today, Chat AI is used in education, work, business, and daily _____ during everyday learning, work, and communication activities for users.",
    "a": "life"
  },
  {
    "q": "7. It is a helpful tool, but users should still check important information _____ during everyday learning, work, and communication activities for users.",
    "a": "carefully"
  },
  {
    "q": "8. Chat AI can help people in many daily _____ during everyday learning, work, and communication activities for users.",
    "a": "activities"
  },
  {
    "q": "9. Students can use it to study English, write essays, or review _____ during everyday learning, work, and communication activities for users.",
    "a": "lessons"
  },
  {
    "q": "10. Workers can use it to write emails, make plans, and solve simple _____ during everyday learning, work, and communication activities for users.",
    "a": "problems"
  },
  {
    "q": "11. It can also help people translate words, create ideas, and learn new _____ during everyday learning, work, and communication activities for users.",
    "a": "skills"
  },
  {
    "q": "12. Using Chat AI every day can save time and make learning _____ during everyday learning, work, and communication activities for users.",
    "a": "easier"
  },
  {
    "q": "13. It is available anytime, so users can ask questions whenever they need _____ during everyday learning, work, and communication activities for users.",
    "a": "help"
  },
  {
    "q": "14. However, people should not depend on Chat AI too _____ during everyday learning, work, and communication activities for users.",
    "a": "much"
  },
  {
    "q": "15. It is a support tool, not a replacement for human _____ during everyday learning, work, and communication activities for users.",
    "a": "thinking"
  },
  {
    "q": "16. We should use it _____ and carefully during everyday learning, work, and communication activities for users.",
    "a": "wisely"
  },
  {
    "q": "17. Chat AI is a useful partner for learning _____ during everyday learning, work, and communication activities for users.",
    "a": "english"
  },
  {
    "q": "18. Students can practice vocabulary, grammar, reading, writing, and simple conversations at _____ during everyday learning, work, and communication activities for users.",
    "a": "home"
  },
  {
    "q": "19. It gives quick answers and explains many language rules in easy _____ during everyday learning, work, and communication activities for users.",
    "a": "words"
  },
  {
    "q": "20. Learners can ask Chat AI to correct sentences, translate words, create quizzes, or write short _____.",
    "a": "stories"
  }
];

const newEx2Data = [
  {
    "q": "1. What can Chat AI do through text or voice?",
    "opts": [
      "It can talk with people through text or voice.",
      "They use it because it is fast, friendly, and easy to use.",
      "It uses patterns learned from a large amount of information to respond.",
      "It is used in education, work, business, and daily life."
    ],
    "a": "It can talk with people through text or voice."
  },
  {
    "q": "2. Why do many people use Chat AI?",
    "opts": [
      "It uses patterns learned from a large amount of information to respond.",
      "They use it because it is fast, friendly, and easy to use.",
      "It is used in education, work, business, and daily life.",
      "They can study English, write essays, and review lessons with it."
    ],
    "a": "They use it because it is fast, friendly, and easy to use."
  },
  {
    "q": "3. How does Chat AI respond to users?",
    "opts": [
      "It is used in education, work, business, and daily life.",
      "They can study English, write essays, and review lessons with it.",
      "It uses patterns learned from a large amount of information to respond.",
      "It is available anytime and can help users quickly with questions and tasks."
    ],
    "a": "It uses patterns learned from a large amount of information to respond."
  },
  {
    "q": "4. Where is Chat AI used today?",
    "opts": [
      "They can study English, write essays, and review lessons with it.",
      "It is available anytime and can help users quickly with questions and tasks.",
      "It is a support tool, not a replacement for human thinking.",
      "It is used in education, work, business, and daily life."
    ],
    "a": "It is used in education, work, business, and daily life."
  },
  {
    "q": "5. How can students use Chat AI in daily study?",
    "opts": [
      "They can study English, write essays, and review lessons with it.",
      "It is available anytime and can help users quickly with questions and tasks.",
      "It is a support tool, not a replacement for human thinking.",
      "They can practice vocabulary, grammar, reading, writing, and simple conversations."
    ],
    "a": "They can study English, write essays, and review lessons with it."
  },
  {
    "q": "6. Why can using Chat AI save time?",
    "opts": [
      "It is a support tool, not a replacement for human thinking.",
      "It is available anytime and can help users quickly with questions and tasks.",
      "They can practice vocabulary, grammar, reading, writing, and simple conversations.",
      "They can read the answers aloud."
    ],
    "a": "It is available anytime and can help users quickly with questions and tasks."
  },
  {
    "q": "7. Why should people not depend too much on Chat AI?",
    "opts": [
      "They can practice vocabulary, grammar, reading, writing, and simple conversations.",
      "They can read the answers aloud.",
      "It is a support tool, not a replacement for human thinking.",
      "They should practice with other people, listen to English often, and keep studying every day."
    ],
    "a": "It is a support tool, not a replacement for human thinking."
  },
  {
    "q": "8. What English skills can students practice with Chat AI?",
    "opts": [
      "They can read the answers aloud.",
      "They should practice with other people, listen to English often, and keep studying every day.",
      "It can talk with people through text or voice.",
      "They can practice vocabulary, grammar, reading, writing, and simple conversations."
    ],
    "a": "They can practice vocabulary, grammar, reading, writing, and simple conversations."
  },
  {
    "q": "9. How can learners practice speaking with Chat AI answers?",
    "opts": [
      "They can read the answers aloud.",
      "They should practice with other people, listen to English often, and keep studying every day.",
      "It can talk with people through text or voice.",
      "They use it because it is fast, friendly, and easy to use."
    ],
    "a": "They can read the answers aloud."
  },
  {
    "q": "10. What should students do besides using Chat AI?",
    "opts": [
      "It can talk with people through text or voice.",
      "They should practice with other people, listen to English often, and keep studying every day.",
      "They use it because it is fast, friendly, and easy to use.",
      "It uses patterns learned from a large amount of information to respond."
    ],
    "a": "They should practice with other people, listen to English often, and keep studying every day."
  },
  {
    "q": "11. What is the Vietnamese meaning of “what”?",
    "opts": [
      "trả lời",
      "gì; điều gì",
      "nhiều",
      "hữu ích"
    ],
    "a": "gì; điều gì"
  },
  {
    "q": "12. What is the Vietnamese meaning of “answer”?",
    "opts": [
      "nhiều",
      "hữu ích",
      "trả lời",
      "hằng ngày"
    ],
    "a": "trả lời"
  },
  {
    "q": "13. What is the Vietnamese meaning of “many”?",
    "opts": [
      "hữu ích",
      "hằng ngày",
      "học",
      "nhiều"
    ],
    "a": "nhiều"
  },
  {
    "q": "14. What is the Vietnamese meaning of “useful”?",
    "opts": [
      "hữu ích",
      "hằng ngày",
      "học",
      "tạo ra"
    ],
    "a": "hữu ích"
  },
  {
    "q": "15. What is the Vietnamese meaning of “daily”?",
    "opts": [
      "học",
      "hằng ngày",
      "tạo ra",
      "quá"
    ],
    "a": "hằng ngày"
  },
  {
    "q": "16. What is the Vietnamese meaning of “study”?",
    "opts": [
      "tạo ra",
      "quá",
      "học",
      "cho; mang lại"
    ],
    "a": "học"
  },
  {
    "q": "17. What is the Vietnamese meaning of “create”?",
    "opts": [
      "quá",
      "cho; mang lại",
      "cải thiện",
      "tạo ra"
    ],
    "a": "tạo ra"
  },
  {
    "q": "18. What is the Vietnamese meaning of “too”?",
    "opts": [
      "quá",
      "cho; mang lại",
      "cải thiện",
      "gì; điều gì"
    ],
    "a": "quá"
  },
  {
    "q": "19. What is the Vietnamese meaning of “gives”?",
    "opts": [
      "cải thiện",
      "cho; mang lại",
      "gì; điều gì",
      "trả lời"
    ],
    "a": "cho; mang lại"
  },
  {
    "q": "20. What is the Vietnamese meaning of “improve”?",
    "opts": [
      "gì; điều gì",
      "trả lời",
      "cải thiện",
      "nhiều"
    ],
    "a": "cải thiện"
  }
];

const newEx3Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "chat",
    "mean": "trò chuyện; cuộc trò chuyện"
  },
  {
    "word": "ai",
    "mean": "trí tuệ nhân tạo"
  },
  {
    "word": "smart",
    "mean": "thông minh; hợp lý"
  },
  {
    "word": "computer",
    "mean": "máy tính"
  },
  {
    "word": "program",
    "mean": "chương trình"
  },
  {
    "word": "that",
    "mean": "mà; điều mà"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "through",
    "mean": "qua; xuyên qua"
  },
  {
    "word": "text",
    "mean": "văn bản"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "voice",
    "mean": "giọng nói"
  },
  {
    "word": "answer",
    "mean": "trả lời"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "translate",
    "mean": "dịch"
  },
  {
    "word": "languages",
    "mean": "các ngôn ngữ"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "users",
    "mean": "người dùng"
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
    "word": "things",
    "mean": "điều; sự việc"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "easy",
    "mean": "dễ"
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
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "like",
    "mean": "giống như"
  },
  {
    "word": "human",
    "mean": "con người"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "answers",
    "mean": "câu trả lời"
  },
  {
    "word": "learns",
    "mean": "học"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "amount",
    "mean": "lượng"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "uses",
    "mean": "sử dụng"
  },
  {
    "word": "patterns",
    "mean": "kiểu; mô hình"
  },
  {
    "word": "respond",
    "mean": "phản hồi"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "business",
    "mean": "kinh doanh"
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
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "tool",
    "mean": "công cụ"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
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
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "essays",
    "mean": "bài luận"
  },
  {
    "word": "review",
    "mean": "ôn lại"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "solve",
    "mean": "giải quyết"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "available",
    "mean": "sẵn có"
  },
  {
    "word": "anytime",
    "mean": "bất cứ lúc nào"
  },
  {
    "word": "so",
    "mean": "vì vậy"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "depend",
    "mean": "phụ thuộc"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "support",
    "mean": "sự hỗ trợ"
  },
  {
    "word": "replacement",
    "mean": "sự thay thế"
  },
  {
    "word": "thinking",
    "mean": "tư duy"
  },
  {
    "word": "wisely",
    "mean": "khôn ngoan"
  },
  {
    "word": "partner",
    "mean": "người bạn đồng hành"
  },
  {
    "word": "practice",
    "mean": "luyện tập"
  },
  {
    "word": "vocabulary",
    "mean": "từ vựng"
  },
  {
    "word": "grammar",
    "mean": "ngữ pháp"
  },
  {
    "word": "reading",
    "mean": "việc đọc"
  },
  {
    "word": "writing",
    "mean": "việc viết"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "home",
    "mean": "nhà"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "quick",
    "mean": "nhanh"
  },
  {
    "word": "explains",
    "mean": "giải thích"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "learners",
    "mean": "người học"
  },
  {
    "word": "correct",
    "mean": "sửa; chỉnh"
  },
  {
    "word": "quizzes",
    "mean": "câu đố; bài kiểm tra ngắn"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "aloud",
    "mean": "thành tiếng"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
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
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "real",
    "mean": "thực tế; thật"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "studying",
    "mean": "việc học; đang học"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "results",
    "mean": "kết quả"
  }
];

const newEx4Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "chat",
    "mean": "trò chuyện; cuộc trò chuyện"
  },
  {
    "word": "ai",
    "mean": "trí tuệ nhân tạo"
  },
  {
    "word": "smart",
    "mean": "thông minh; hợp lý"
  },
  {
    "word": "computer",
    "mean": "máy tính"
  },
  {
    "word": "program",
    "mean": "chương trình"
  },
  {
    "word": "that",
    "mean": "mà; điều mà"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "through",
    "mean": "qua; xuyên qua"
  },
  {
    "word": "text",
    "mean": "văn bản"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "voice",
    "mean": "giọng nói"
  },
  {
    "word": "answer",
    "mean": "trả lời"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "translate",
    "mean": "dịch"
  },
  {
    "word": "languages",
    "mean": "các ngôn ngữ"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "users",
    "mean": "người dùng"
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
    "word": "things",
    "mean": "điều; sự việc"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "easy",
    "mean": "dễ"
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
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "like",
    "mean": "giống như"
  },
  {
    "word": "human",
    "mean": "con người"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "answers",
    "mean": "câu trả lời"
  },
  {
    "word": "learns",
    "mean": "học"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "amount",
    "mean": "lượng"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "uses",
    "mean": "sử dụng"
  },
  {
    "word": "patterns",
    "mean": "kiểu; mô hình"
  },
  {
    "word": "respond",
    "mean": "phản hồi"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "business",
    "mean": "kinh doanh"
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
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "tool",
    "mean": "công cụ"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
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
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "essays",
    "mean": "bài luận"
  },
  {
    "word": "review",
    "mean": "ôn lại"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "solve",
    "mean": "giải quyết"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "available",
    "mean": "sẵn có"
  },
  {
    "word": "anytime",
    "mean": "bất cứ lúc nào"
  },
  {
    "word": "so",
    "mean": "vì vậy"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "depend",
    "mean": "phụ thuộc"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "support",
    "mean": "sự hỗ trợ"
  },
  {
    "word": "replacement",
    "mean": "sự thay thế"
  },
  {
    "word": "thinking",
    "mean": "tư duy"
  },
  {
    "word": "wisely",
    "mean": "khôn ngoan"
  },
  {
    "word": "partner",
    "mean": "người bạn đồng hành"
  },
  {
    "word": "practice",
    "mean": "luyện tập"
  },
  {
    "word": "vocabulary",
    "mean": "từ vựng"
  },
  {
    "word": "grammar",
    "mean": "ngữ pháp"
  },
  {
    "word": "reading",
    "mean": "việc đọc"
  },
  {
    "word": "writing",
    "mean": "việc viết"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "home",
    "mean": "nhà"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "quick",
    "mean": "nhanh"
  },
  {
    "word": "explains",
    "mean": "giải thích"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "learners",
    "mean": "người học"
  },
  {
    "word": "correct",
    "mean": "sửa; chỉnh"
  },
  {
    "word": "quizzes",
    "mean": "câu đố; bài kiểm tra ngắn"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "aloud",
    "mean": "thành tiếng"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
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
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "real",
    "mean": "thực tế; thật"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "studying",
    "mean": "việc học; đang học"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "results",
    "mean": "kết quả"
  }
];

const newEx5Data = [
  "We should use it wisely and carefully.",
  "Regular practice helps improve confidence and communication skills.",
  "Chat AI can help people in many daily activities.",
  "Chat AI is a useful partner for learning English.",
  "However, people should not depend on Chat AI too much.",
  "They can also practice speaking by reading the answers aloud.",
  "It is a support tool, not a replacement for human thinking.",
  "Today, Chat AI is used in education, work, business, and daily life.",
  "Students can use it to study English, write essays, or review lessons.",
  "Using Chat AI every day can save time and make learning easier."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "However, people should not depend on Chat AI too much."
  },
  {
    "id": 2,
    "correct": "They can also practice speaking by reading the answers aloud."
  },
  {
    "id": 3,
    "correct": "Chat AI can help people in many daily activities."
  },
  {
    "id": 4,
    "correct": "It is a support tool, not a replacement for human thinking."
  },
  {
    "id": 5,
    "correct": "Chat AI is a useful partner for learning English."
  },
  {
    "id": 6,
    "correct": "Today, Chat AI is used in education, work, business, and daily life."
  },
  {
    "id": 7,
    "correct": "Students can use it to study English, write essays, or review lessons."
  },
  {
    "id": 8,
    "correct": "Using Chat AI every day can save time and make learning easier."
  },
  {
    "id": 9,
    "correct": "Students can practice vocabulary, grammar, reading, writing, and simple conversations at home."
  },
  {
    "id": 10,
    "correct": "It gives quick answers and explains many language rules in easy words."
  },
  {
    "id": 11,
    "correct": "Regular practice helps improve confidence and communication skills."
  },
  {
    "id": 12,
    "correct": "Chat AI supports learning, but it cannot replace teachers or real conversations."
  },
  {
    "id": 13,
    "correct": "It learns from a large amount of information and uses patterns to respond."
  },
  {
    "id": 14,
    "correct": "It is a helpful tool, but users should still check important information carefully."
  },
  {
    "id": 15,
    "correct": "Workers can use it to write emails, make plans, and solve simple problems."
  }
];

const newEx7Data = [
  {
    "q": "What can Chat AI do through text or voice?",
    "a": "It can talk with people through text or voice."
  },
  {
    "q": "Why do many people use Chat AI?",
    "a": "They use it because it is fast, friendly, and easy to use."
  },
  {
    "q": "How does Chat AI respond to users?",
    "a": "It uses patterns learned from a large amount of information to respond."
  },
  {
    "q": "Where is Chat AI used today?",
    "a": "It is used in education, work, business, and daily life."
  },
  {
    "q": "How can students use Chat AI in daily study?",
    "a": "They can study English, write essays, and review lessons with it."
  },
  {
    "q": "Why can using Chat AI save time?",
    "a": "It is available anytime and can help users quickly with questions and tasks."
  },
  {
    "q": "Why should people not depend too much on Chat AI?",
    "a": "It is a support tool, not a replacement for human thinking."
  },
  {
    "q": "What English skills can students practice with Chat AI?",
    "a": "They can practice vocabulary, grammar, reading, writing, and simple conversations."
  },
  {
    "q": "How can learners practice speaking with Chat AI answers?",
    "a": "They can read the answers aloud."
  },
  {
    "q": "What should students do besides using Chat AI?",
    "a": "They should practice with other people, listen to English often, and keep studying every day."
  }
];

