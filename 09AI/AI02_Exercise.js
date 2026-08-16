// ===== AI02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Chat AI is helpful for students because it can explain _____ in a simple way.",
    "a": "lessons"
  },
  {
    "q": "2. When students do not understand a topic, they can ask Chat AI for examples, summaries, or practice _____.",
    "a": "questions"
  },
  {
    "q": "3. This makes learning faster and more _____ during everyday learning, work, and communication activities for users.",
    "a": "interesting"
  },
  {
    "q": "4. Students can use Chat AI to prepare presentations, check grammar, improve writing, and review before _____.",
    "a": "exams"
  },
  {
    "q": "5. It can also help them manage study time and create learning _____ during everyday learning, work, and communication activities for users.",
    "a": "plans"
  },
  {
    "q": "6. However, students should not copy answers without _____ during everyday learning, work, and communication activities for users.",
    "a": "thinking"
  },
  {
    "q": "7. They should use Chat AI to learn, not to _____ during everyday learning, work, and communication activities for users.",
    "a": "cheat"
  },
  {
    "q": "8. Good students use technology responsibly and try to understand the _____ by themselves during everyday learning, work, and communication activities for users.",
    "a": "lesson"
  },
  {
    "q": "9. Chat AI is becoming popular in many _____ during everyday learning, work, and communication activities for users.",
    "a": "workplaces"
  },
  {
    "q": "10. It can help workers write emails, prepare reports, summarize documents, and create ideas for _____.",
    "a": "projects"
  },
  {
    "q": "11. This saves time and helps people work more _____ during everyday learning, work, and communication activities for users.",
    "a": "efficiently"
  },
  {
    "q": "12. In offices, Chat AI can support customer service, marketing, planning, and _____ during everyday learning, work, and communication activities for users.",
    "a": "communication"
  },
  {
    "q": "13. It can also help workers learn new skills or understand difficult information _____ during everyday learning, work, and communication activities for users.",
    "a": "quickly"
  },
  {
    "q": "14. However, workers should be careful when using private company _____ during everyday learning, work, and communication activities for users.",
    "a": "information"
  },
  {
    "q": "15. Important decisions should still be checked by _____ during everyday learning, work, and communication activities for users.",
    "a": "humans"
  },
  {
    "q": "16. Chat AI is a useful assistant, but it should be used with responsibility, good judgment, and _____ thinking.",
    "a": "clear"
  },
  {
    "q": "17. Chat AI can help people create many types of _____ during everyday learning, work, and communication activities for users.",
    "a": "content"
  },
  {
    "q": "18. It can write social media posts, short stories, advertisements, video scripts, study notes, and product _____.",
    "a": "descriptions"
  },
  {
    "q": "19. This is very useful for teachers, students, business owners, and content _____ during everyday learning, work, and communication activities for users.",
    "a": "creators"
  },
  {
    "q": "20. With Chat AI, users can save time and get many _____ quickly during everyday learning, work, and communication activities for users.",
    "a": "ideas"
  }
];

const newEx2Data = [
  {
    "q": "1. How can Chat AI help students understand a difficult topic?",
    "opts": [
      "It can give examples, summaries, or practice questions.",
      "They can prepare presentations, check grammar, improve writing, and review.",
      "They should use Chat AI to learn, not to cheat.",
      "It can help them write emails, prepare reports, summarize documents, and create project ideas."
    ],
    "a": "It can give examples, summaries, or practice questions."
  },
  {
    "q": "2. What can students use Chat AI to prepare before exams?",
    "opts": [
      "They should use Chat AI to learn, not to cheat.",
      "They can prepare presentations, check grammar, improve writing, and review.",
      "It can help them write emails, prepare reports, summarize documents, and create project ideas.",
      "It can support customer service, marketing, planning, and communication."
    ],
    "a": "They can prepare presentations, check grammar, improve writing, and review."
  },
  {
    "q": "3. Why should students avoid copying AI answers without thinking?",
    "opts": [
      "It can help them write emails, prepare reports, summarize documents, and create project ideas.",
      "It can support customer service, marketing, planning, and communication.",
      "They should use Chat AI to learn, not to cheat.",
      "They should be careful when using private company information."
    ],
    "a": "They should use Chat AI to learn, not to cheat."
  },
  {
    "q": "4. What kinds of work can Chat AI help workers do?",
    "opts": [
      "It can support customer service, marketing, planning, and communication.",
      "They should be careful when using private company information.",
      "Important decisions should still be checked by humans.",
      "It can help them write emails, prepare reports, summarize documents, and create project ideas."
    ],
    "a": "It can help them write emails, prepare reports, summarize documents, and create project ideas."
  },
  {
    "q": "5. Which office areas can Chat AI support?",
    "opts": [
      "It can support customer service, marketing, planning, and communication.",
      "They should be careful when using private company information.",
      "Important decisions should still be checked by humans.",
      "It can create posts, stories, advertisements, video scripts, notes, and product descriptions."
    ],
    "a": "It can support customer service, marketing, planning, and communication."
  },
  {
    "q": "6. What should workers do with private company information?",
    "opts": [
      "Important decisions should still be checked by humans.",
      "They should be careful when using private company information.",
      "It can create posts, stories, advertisements, video scripts, notes, and product descriptions.",
      "They should edit the content before posting."
    ],
    "a": "They should be careful when using private company information."
  },
  {
    "q": "7. Who should check important decisions?",
    "opts": [
      "It can create posts, stories, advertisements, video scripts, notes, and product descriptions.",
      "They should edit the content before posting.",
      "Important decisions should still be checked by humans.",
      "The best content comes from combining AI support with personal ideas."
    ],
    "a": "Important decisions should still be checked by humans."
  },
  {
    "q": "8. What kinds of content can Chat AI create?",
    "opts": [
      "They should edit the content before posting.",
      "The best content comes from combining AI support with personal ideas.",
      "It can give examples, summaries, or practice questions.",
      "It can create posts, stories, advertisements, video scripts, notes, and product descriptions."
    ],
    "a": "It can create posts, stories, advertisements, video scripts, notes, and product descriptions."
  },
  {
    "q": "9. What should users do before posting AI content?",
    "opts": [
      "They should edit the content before posting.",
      "The best content comes from combining AI support with personal ideas.",
      "It can give examples, summaries, or practice questions.",
      "They can prepare presentations, check grammar, improve writing, and review."
    ],
    "a": "They should edit the content before posting."
  },
  {
    "q": "10. What produces the best content according to the lesson?",
    "opts": [
      "It can give examples, summaries, or practice questions.",
      "The best content comes from combining AI support with personal ideas.",
      "They can prepare presentations, check grammar, improve writing, and review.",
      "They should use Chat AI to learn, not to cheat."
    ],
    "a": "The best content comes from combining AI support with personal ideas."
  },
  {
    "q": "11. What is the Vietnamese meaning of “chat”?",
    "opts": [
      "chủ đề",
      "trò chuyện; cuộc trò chuyện",
      "sử dụng",
      "thời gian"
    ],
    "a": "trò chuyện; cuộc trò chuyện"
  },
  {
    "q": "12. What is the Vietnamese meaning of “topic”?",
    "opts": [
      "sử dụng",
      "thời gian",
      "chủ đề",
      "thử"
    ],
    "a": "chủ đề"
  },
  {
    "q": "13. What is the Vietnamese meaning of “use”?",
    "opts": [
      "thời gian",
      "thử",
      "dự án",
      "sử dụng"
    ],
    "a": "sử dụng"
  },
  {
    "q": "14. What is the Vietnamese meaning of “time”?",
    "opts": [
      "thời gian",
      "thử",
      "dự án",
      "khó khăn"
    ],
    "a": "thời gian"
  },
  {
    "q": "15. What is the Vietnamese meaning of “try”?",
    "opts": [
      "dự án",
      "thử",
      "khó khăn",
      "nhưng"
    ],
    "a": "thử"
  },
  {
    "q": "16. What is the Vietnamese meaning of “projects”?",
    "opts": [
      "khó khăn",
      "nhưng",
      "dự án",
      "video"
    ],
    "a": "dự án"
  },
  {
    "q": "17. What is the Vietnamese meaning of “difficult”?",
    "opts": [
      "nhưng",
      "video",
      "ngắn hơn",
      "khó khăn"
    ],
    "a": "khó khăn"
  },
  {
    "q": "18. What is the Vietnamese meaning of “but”?",
    "opts": [
      "nhưng",
      "video",
      "ngắn hơn",
      "trò chuyện; cuộc trò chuyện"
    ],
    "a": "nhưng"
  },
  {
    "q": "19. What is the Vietnamese meaning of “video”?",
    "opts": [
      "ngắn hơn",
      "video",
      "trò chuyện; cuộc trò chuyện",
      "chủ đề"
    ],
    "a": "video"
  },
  {
    "q": "20. What is the Vietnamese meaning of “shorter”?",
    "opts": [
      "trò chuyện; cuộc trò chuyện",
      "chủ đề",
      "ngắn hơn",
      "sử dụng"
    ],
    "a": "ngắn hơn"
  }
];

const newEx3Data = [
  {
    "word": "chat",
    "mean": "trò chuyện; cuộc trò chuyện"
  },
  {
    "word": "ai",
    "mean": "trí tuệ nhân tạo"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "when",
    "mean": "khi"
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
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "topic",
    "mean": "chủ đề"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "examples",
    "mean": "ví dụ"
  },
  {
    "word": "summaries",
    "mean": "bản tóm tắt"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "this",
    "mean": "này"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "presentations",
    "mean": "bài thuyết trình"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "grammar",
    "mean": "ngữ pháp"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "writing",
    "mean": "việc viết"
  },
  {
    "word": "review",
    "mean": "ôn lại"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "exams",
    "mean": "kỳ thi"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "manage",
    "mean": "quản lý"
  },
  {
    "word": "study",
    "mean": "việc học; học tập"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "copy",
    "mean": "sao chép"
  },
  {
    "word": "answers",
    "mean": "câu trả lời"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "thinking",
    "mean": "tư duy"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "cheat",
    "mean": "gian lận"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "technology",
    "mean": "công nghệ"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "lesson",
    "mean": "bài học"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "becoming",
    "mean": "đang trở nên"
  },
  {
    "word": "popular",
    "mean": "phổ biến"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "workplaces",
    "mean": "nơi làm việc"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "reports",
    "mean": "báo cáo"
  },
  {
    "word": "summarize",
    "mean": "tóm tắt"
  },
  {
    "word": "documents",
    "mean": "tài liệu"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "projects",
    "mean": "dự án"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "efficiently",
    "mean": "hiệu quả"
  },
  {
    "word": "offices",
    "mean": "các văn phòng"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "customer",
    "mean": "khách hàng"
  },
  {
    "word": "service",
    "mean": "dịch vụ"
  },
  {
    "word": "marketing",
    "mean": "tiếp thị"
  },
  {
    "word": "planning",
    "mean": "lập kế hoạch"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
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
    "word": "difficult",
    "mean": "khó khăn"
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
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "private",
    "mean": "riêng tư"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "checked",
    "mean": "được kiểm tra"
  },
  {
    "word": "humans",
    "mean": "con người"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "assistant",
    "mean": "trợ lý"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "judgment",
    "mean": "sự phán đoán"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "creating",
    "mean": "việc tạo nội dung"
  },
  {
    "word": "content",
    "mean": "nội dung"
  },
  {
    "word": "types",
    "mean": "các loại"
  },
  {
    "word": "social",
    "mean": "xã hội"
  },
  {
    "word": "media",
    "mean": "truyền thông"
  },
  {
    "word": "posts",
    "mean": "bài đăng"
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
    "word": "advertisements",
    "mean": "quảng cáo"
  },
  {
    "word": "video",
    "mean": "video"
  },
  {
    "word": "scripts",
    "mean": "kịch bản"
  },
  {
    "word": "notes",
    "mean": "ghi chú"
  },
  {
    "word": "product",
    "mean": "sản phẩm"
  },
  {
    "word": "descriptions",
    "mean": "mô tả"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "business",
    "mean": "kinh doanh; doanh nghiệp"
  },
  {
    "word": "owners",
    "mean": "chủ sở hữu"
  },
  {
    "word": "creators",
    "mean": "người sáng tạo"
  },
  {
    "word": "users",
    "mean": "người dùng"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "get",
    "mean": "có được; nhận"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "shorter",
    "mean": "ngắn hơn"
  },
  {
    "word": "longer",
    "mean": "dài hơn"
  },
  {
    "word": "simpler",
    "mean": "đơn giản hơn"
  },
  {
    "word": "professional",
    "mean": "chuyên nghiệp"
  },
  {
    "word": "edit",
    "mean": "chỉnh sửa"
  },
  {
    "word": "posting",
    "mean": "việc đăng nội dung"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "boring",
    "mean": "nhàm chán"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "human",
    "mean": "thuộc con người"
  },
  {
    "word": "creativity",
    "mean": "sự sáng tạo"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "comes",
    "mean": "đến"
  },
  {
    "word": "combining",
    "mean": "việc kết hợp"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  }
];

const newEx4Data = [
  {
    "word": "chat",
    "mean": "trò chuyện; cuộc trò chuyện"
  },
  {
    "word": "ai",
    "mean": "trí tuệ nhân tạo"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "when",
    "mean": "khi"
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
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "topic",
    "mean": "chủ đề"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "examples",
    "mean": "ví dụ"
  },
  {
    "word": "summaries",
    "mean": "bản tóm tắt"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "this",
    "mean": "này"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "presentations",
    "mean": "bài thuyết trình"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "grammar",
    "mean": "ngữ pháp"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "writing",
    "mean": "việc viết"
  },
  {
    "word": "review",
    "mean": "ôn lại"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "exams",
    "mean": "kỳ thi"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "manage",
    "mean": "quản lý"
  },
  {
    "word": "study",
    "mean": "việc học; học tập"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "copy",
    "mean": "sao chép"
  },
  {
    "word": "answers",
    "mean": "câu trả lời"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "thinking",
    "mean": "tư duy"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "cheat",
    "mean": "gian lận"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "technology",
    "mean": "công nghệ"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "lesson",
    "mean": "bài học"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "becoming",
    "mean": "đang trở nên"
  },
  {
    "word": "popular",
    "mean": "phổ biến"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "workplaces",
    "mean": "nơi làm việc"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "reports",
    "mean": "báo cáo"
  },
  {
    "word": "summarize",
    "mean": "tóm tắt"
  },
  {
    "word": "documents",
    "mean": "tài liệu"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "projects",
    "mean": "dự án"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "efficiently",
    "mean": "hiệu quả"
  },
  {
    "word": "offices",
    "mean": "các văn phòng"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "customer",
    "mean": "khách hàng"
  },
  {
    "word": "service",
    "mean": "dịch vụ"
  },
  {
    "word": "marketing",
    "mean": "tiếp thị"
  },
  {
    "word": "planning",
    "mean": "lập kế hoạch"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
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
    "word": "difficult",
    "mean": "khó khăn"
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
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "private",
    "mean": "riêng tư"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "checked",
    "mean": "được kiểm tra"
  },
  {
    "word": "humans",
    "mean": "con người"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "assistant",
    "mean": "trợ lý"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "judgment",
    "mean": "sự phán đoán"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "creating",
    "mean": "việc tạo nội dung"
  },
  {
    "word": "content",
    "mean": "nội dung"
  },
  {
    "word": "types",
    "mean": "các loại"
  },
  {
    "word": "social",
    "mean": "xã hội"
  },
  {
    "word": "media",
    "mean": "truyền thông"
  },
  {
    "word": "posts",
    "mean": "bài đăng"
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
    "word": "advertisements",
    "mean": "quảng cáo"
  },
  {
    "word": "video",
    "mean": "video"
  },
  {
    "word": "scripts",
    "mean": "kịch bản"
  },
  {
    "word": "notes",
    "mean": "ghi chú"
  },
  {
    "word": "product",
    "mean": "sản phẩm"
  },
  {
    "word": "descriptions",
    "mean": "mô tả"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "business",
    "mean": "kinh doanh; doanh nghiệp"
  },
  {
    "word": "owners",
    "mean": "chủ sở hữu"
  },
  {
    "word": "creators",
    "mean": "người sáng tạo"
  },
  {
    "word": "users",
    "mean": "người dùng"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "get",
    "mean": "có được; nhận"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "shorter",
    "mean": "ngắn hơn"
  },
  {
    "word": "longer",
    "mean": "dài hơn"
  },
  {
    "word": "simpler",
    "mean": "đơn giản hơn"
  },
  {
    "word": "professional",
    "mean": "chuyên nghiệp"
  },
  {
    "word": "edit",
    "mean": "chỉnh sửa"
  },
  {
    "word": "posting",
    "mean": "việc đăng nội dung"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "boring",
    "mean": "nhàm chán"
  },
  {
    "word": "sentences",
    "mean": "câu"
  },
  {
    "word": "human",
    "mean": "thuộc con người"
  },
  {
    "word": "creativity",
    "mean": "sự sáng tạo"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "comes",
    "mean": "đến"
  },
  {
    "word": "combining",
    "mean": "việc kết hợp"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  }
];

const newEx5Data = [
  "Human creativity is still important.",
  "This makes learning faster and more interesting.",
  "However, students should not copy answers without thinking.",
  "Chat AI is becoming popular in many workplaces.",
  "Important decisions should still be checked by humans.",
  "However, users should edit the content before posting.",
  "AI may make mistakes or create boring sentences.",
  "This saves time and helps people work more efficiently.",
  "They should use Chat AI to learn, not to cheat.",
  "However, workers should be careful when using private company information."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "They should use Chat AI to learn, not to cheat."
  },
  {
    "id": 2,
    "correct": "However, workers should be careful when using private company information."
  },
  {
    "id": 3,
    "correct": "Chat AI can help people create many types of content."
  },
  {
    "id": 4,
    "correct": "This saves time and helps people work more efficiently."
  },
  {
    "id": 5,
    "correct": "The best content comes from combining AI support with personal ideas."
  },
  {
    "id": 6,
    "correct": "It can also help them manage study time and create learning plans."
  },
  {
    "id": 7,
    "correct": "However, students should not copy answers without thinking."
  },
  {
    "id": 8,
    "correct": "Chat AI is becoming popular in many workplaces."
  },
  {
    "id": 9,
    "correct": "In offices, Chat AI can support customer service, marketing, planning, and communication."
  },
  {
    "id": 10,
    "correct": "Important decisions should still be checked by humans."
  },
  {
    "id": 11,
    "correct": "This is very useful for teachers, students, business owners, and content creators."
  },
  {
    "id": 12,
    "correct": "With Chat AI, users can save time and get many ideas quickly."
  },
  {
    "id": 13,
    "correct": "However, users should edit the content before posting."
  },
  {
    "id": 14,
    "correct": "AI may make mistakes or create boring sentences."
  },
  {
    "id": 15,
    "correct": "This makes learning faster and more interesting."
  }
];

const newEx7Data = [
  {
    "q": "How can Chat AI help students understand a difficult topic?",
    "a": "It can give examples, summaries, or practice questions."
  },
  {
    "q": "What can students use Chat AI to prepare before exams?",
    "a": "They can prepare presentations, check grammar, improve writing, and review."
  },
  {
    "q": "Why should students avoid copying AI answers without thinking?",
    "a": "They should use Chat AI to learn, not to cheat."
  },
  {
    "q": "What kinds of work can Chat AI help workers do?",
    "a": "It can help them write emails, prepare reports, summarize documents, and create project ideas."
  },
  {
    "q": "Which office areas can Chat AI support?",
    "a": "It can support customer service, marketing, planning, and communication."
  },
  {
    "q": "What should workers do with private company information?",
    "a": "They should be careful when using private company information."
  },
  {
    "q": "Who should check important decisions?",
    "a": "Important decisions should still be checked by humans."
  },
  {
    "q": "What kinds of content can Chat AI create?",
    "a": "It can create posts, stories, advertisements, video scripts, notes, and product descriptions."
  },
  {
    "q": "What should users do before posting AI content?",
    "a": "They should edit the content before posting."
  },
  {
    "q": "What produces the best content according to the lesson?",
    "a": "The best content comes from combining AI support with personal ideas."
  }
];

