// ===== AI03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A prompt is the instruction we _____ to Chat AI during everyday learning, work, and communication activities for users.",
    "a": "give"
  },
  {
    "q": "2. A good prompt helps AI understand what we _____ during everyday learning, work, and communication activities for users.",
    "a": "want"
  },
  {
    "q": "3. If the prompt is clear, the answer will usually be _____ during everyday learning, work, and communication activities for users.",
    "a": "better"
  },
  {
    "q": "4. To write a good prompt, we should give enough _____ during everyday learning, work, and communication activities for users.",
    "a": "details"
  },
  {
    "q": "5. For example, we can say the topic, word limit, language level, style, and _____ during everyday learning, work, and communication activities for users.",
    "a": "purpose"
  },
  {
    "q": "6. Instead of writing “Write about English,” we can write “Write a 100-word passage about learning English, using simple _____.”",
    "a": "words"
  },
  {
    "q": "7. Good prompts save time and improve _____ during everyday learning, work, and communication activities for users.",
    "a": "results"
  },
  {
    "q": "8. When the first answer is not perfect, we can ask Chat AI to rewrite, shorten, explain, or make it _____.",
    "a": "easier"
  },
  {
    "q": "9. Chat AI has many _____ during everyday learning, work, and communication activities for users.",
    "a": "benefits"
  },
  {
    "q": "10. It can answer questions quickly, help students learn, support workers, create ideas, and improve _____.",
    "a": "writing"
  },
  {
    "q": "11. It is useful because people can use it anytime and _____ during everyday learning, work, and communication activities for users.",
    "a": "anywhere"
  },
  {
    "q": "12. However, Chat AI also has some _____ during everyday learning, work, and communication activities for users.",
    "a": "risks"
  },
  {
    "q": "13. Sometimes it may give wrong _____ during everyday learning, work, and communication activities for users.",
    "a": "information"
  },
  {
    "q": "14. Some users may depend on it too much or copy answers without _____ during everyday learning, work, and communication activities for users.",
    "a": "learning"
  },
  {
    "q": "15. There are also privacy risks if people share personal or _____ information during everyday learning, work, and communication activities for users.",
    "a": "company"
  },
  {
    "q": "16. For this reason, users should use Chat AI _____ during everyday learning, work, and communication activities for users.",
    "a": "carefully"
  },
  {
    "q": "17. They should check important facts, protect private information, and _____ for themselves during everyday learning, work, and communication activities for users.",
    "a": "think"
  },
  {
    "q": "18. Chat AI is powerful, but _____ use is very important during everyday learning, work, and communication activities for users.",
    "a": "responsible"
  },
  {
    "q": "19. Chat AI is used in many _____ today during everyday learning, work, and communication activities for users.",
    "a": "industries"
  },
  {
    "q": "20. In education, it helps students study and teachers prepare _____ during everyday learning, work, and communication activities for users.",
    "a": "lessons"
  }
];

const newEx2Data = [
  {
    "q": "1. What makes a good prompt more effective?",
    "opts": [
      "A good prompt is clear and gives enough details.",
      "They can include the topic, word limit, language level, style, and purpose.",
      "They can ask it to rewrite, shorten, explain, or make the answer easier.",
      "It may give wrong information, and users may face privacy risks."
    ],
    "a": "A good prompt is clear and gives enough details."
  },
  {
    "q": "2. Which details can users include in a prompt?",
    "opts": [
      "They can ask it to rewrite, shorten, explain, or make the answer easier.",
      "They can include the topic, word limit, language level, style, and purpose.",
      "It may give wrong information, and users may face privacy risks.",
      "They should check important facts carefully."
    ],
    "a": "They can include the topic, word limit, language level, style, and purpose."
  },
  {
    "q": "3. What can users ask Chat AI to do when an answer is not perfect?",
    "opts": [
      "It may give wrong information, and users may face privacy risks.",
      "They should check important facts carefully.",
      "They can ask it to rewrite, shorten, explain, or make the answer easier.",
      "It helps with study and lessons in education and supports customer service, marketing, and reports in business."
    ],
    "a": "They can ask it to rewrite, shorten, explain, or make the answer easier."
  },
  {
    "q": "4. What are two important risks of Chat AI?",
    "opts": [
      "They should check important facts carefully.",
      "It helps with study and lessons in education and supports customer service, marketing, and reports in business.",
      "It can explain general health information, but doctors must make final decisions.",
      "It may give wrong information, and users may face privacy risks."
    ],
    "a": "It may give wrong information, and users may face privacy risks."
  },
  {
    "q": "5. How should users handle important facts from Chat AI?",
    "opts": [
      "They should check important facts carefully.",
      "It helps with study and lessons in education and supports customer service, marketing, and reports in business.",
      "It can explain general health information, but doctors must make final decisions.",
      "It may understand voice, images, videos, and many languages better."
    ],
    "a": "They should check important facts carefully."
  },
  {
    "q": "6. How is Chat AI used in education and business?",
    "opts": [
      "It can explain general health information, but doctors must make final decisions.",
      "It helps with study and lessons in education and supports customer service, marketing, and reports in business.",
      "It may understand voice, images, videos, and many languages better.",
      "They may use it to serve customers and create better products."
    ],
    "a": "It helps with study and lessons in education and supports customer service, marketing, and reports in business."
  },
  {
    "q": "7. What role does Chat AI have in healthcare?",
    "opts": [
      "It may understand voice, images, videos, and many languages better.",
      "They may use it to serve customers and create better products.",
      "It can explain general health information, but doctors must make final decisions.",
      "Creativity, kindness, critical thinking, knowledge, experience, and responsibility will still be important."
    ],
    "a": "It can explain general health information, but doctors must make final decisions."
  },
  {
    "q": "8. What may Chat AI understand better in the future?",
    "opts": [
      "They may use it to serve customers and create better products.",
      "Creativity, kindness, critical thinking, knowledge, experience, and responsibility will still be important.",
      "A good prompt is clear and gives enough details.",
      "It may understand voice, images, videos, and many languages better."
    ],
    "a": "It may understand voice, images, videos, and many languages better."
  },
  {
    "q": "9. What may businesses use Chat AI for in the future?",
    "opts": [
      "They may use it to serve customers and create better products.",
      "Creativity, kindness, critical thinking, knowledge, experience, and responsibility will still be important.",
      "A good prompt is clear and gives enough details.",
      "They can include the topic, word limit, language level, style, and purpose."
    ],
    "a": "They may use it to serve customers and create better products."
  },
  {
    "q": "10. What human qualities will still be important as AI develops?",
    "opts": [
      "A good prompt is clear and gives enough details.",
      "Creativity, kindness, critical thinking, knowledge, experience, and responsibility will still be important.",
      "They can include the topic, word limit, language level, style, and purpose.",
      "They can ask it to rewrite, shorten, explain, or make the answer easier."
    ],
    "a": "Creativity, kindness, critical thinking, knowledge, experience, and responsibility will still be important."
  },
  {
    "q": "11. What is the Vietnamese meaning of “writing”?",
    "opts": [
      "viết",
      "việc viết",
      "dài 100 từ",
      "hoặc"
    ],
    "a": "việc viết"
  },
  {
    "q": "12. What is the Vietnamese meaning of “write”?",
    "opts": [
      "dài 100 từ",
      "hoặc",
      "viết",
      "mọi người"
    ],
    "a": "viết"
  },
  {
    "q": "13. What is the Vietnamese meaning of “100-word”?",
    "opts": [
      "hoặc",
      "mọi người",
      "ở đó",
      "dài 100 từ"
    ],
    "a": "dài 100 từ"
  },
  {
    "q": "14. What is the Vietnamese meaning of “or”?",
    "opts": [
      "hoặc",
      "mọi người",
      "ở đó",
      "khác nhau"
    ],
    "a": "hoặc"
  },
  {
    "q": "15. What is the Vietnamese meaning of “people”?",
    "opts": [
      "ở đó",
      "mọi người",
      "khác nhau",
      "bác sĩ"
    ],
    "a": "mọi người"
  },
  {
    "q": "16. What is the Vietnamese meaning of “there”?",
    "opts": [
      "khác nhau",
      "bác sĩ",
      "ở đó",
      "công việc"
    ],
    "a": "ở đó"
  },
  {
    "q": "17. What is the Vietnamese meaning of “different”?",
    "opts": [
      "bác sĩ",
      "công việc",
      "video",
      "khác nhau"
    ],
    "a": "khác nhau"
  },
  {
    "q": "18. What is the Vietnamese meaning of “doctors”?",
    "opts": [
      "bác sĩ",
      "công việc",
      "video",
      "việc viết"
    ],
    "a": "bác sĩ"
  },
  {
    "q": "19. What is the Vietnamese meaning of “work”?",
    "opts": [
      "video",
      "công việc",
      "việc viết",
      "viết"
    ],
    "a": "công việc"
  },
  {
    "q": "20. What is the Vietnamese meaning of “videos”?",
    "opts": [
      "việc viết",
      "viết",
      "video",
      "dài 100 từ"
    ],
    "a": "video"
  }
];

const newEx3Data = [
  {
    "word": "writing",
    "mean": "việc viết"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "prompts",
    "mean": "các câu lệnh"
  },
  {
    "word": "prompt",
    "mean": "câu lệnh"
  },
  {
    "word": "instruction",
    "mean": "hướng dẫn"
  },
  {
    "word": "give",
    "mean": "mang lại"
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
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "answer",
    "mean": "câu trả lời"
  },
  {
    "word": "will",
    "mean": "sẽ"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "details",
    "mean": "chi tiết"
  },
  {
    "word": "example",
    "mean": "ví dụ"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "say",
    "mean": "nói"
  },
  {
    "word": "topic",
    "mean": "chủ đề"
  },
  {
    "word": "word",
    "mean": "từ"
  },
  {
    "word": "limit",
    "mean": "giới hạn"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "level",
    "mean": "trình độ; mức độ"
  },
  {
    "word": "style",
    "mean": "phong cách"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "purpose",
    "mean": "mục đích"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "about",
    "mean": "về"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "100-word",
    "mean": "dài 100 từ"
  },
  {
    "word": "passage",
    "mean": "đoạn văn"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
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
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "results",
    "mean": "kết quả"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "first",
    "mean": "thứ nhất; đầu tiên"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "perfect",
    "mean": "hoàn hảo"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "rewrite",
    "mean": "viết lại"
  },
  {
    "word": "shorten",
    "mean": "rút ngắn"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "benefits",
    "mean": "lợi ích"
  },
  {
    "word": "risks",
    "mean": "rủi ro"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "anytime",
    "mean": "bất cứ lúc nào"
  },
  {
    "word": "anywhere",
    "mean": "bất cứ đâu"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "wrong",
    "mean": "sai"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "users",
    "mean": "người dùng"
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
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "privacy",
    "mean": "quyền riêng tư"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "this",
    "mean": "này"
  },
  {
    "word": "reason",
    "mean": "lý do"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
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
    "word": "facts",
    "mean": "sự thật"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "private",
    "mean": "riêng tư"
  },
  {
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "powerful",
    "mean": "mạnh mẽ"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "industries",
    "mean": "các ngành"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "business",
    "mean": "kinh doanh; doanh nghiệp"
  },
  {
    "word": "supports",
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
    "word": "reports",
    "mean": "báo cáo"
  },
  {
    "word": "healthcare",
    "mean": "chăm sóc sức khỏe"
  },
  {
    "word": "general",
    "mean": "chung; tổng quát"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "doctors",
    "mean": "bác sĩ"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "final",
    "mean": "cuối cùng"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "tourism",
    "mean": "du lịch"
  },
  {
    "word": "suggest",
    "mean": "đề xuất"
  },
  {
    "word": "travel",
    "mean": "du lịch; việc đi lại"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
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
    "word": "agriculture",
    "mean": "nông nghiệp"
  },
  {
    "word": "farming",
    "mean": "nông nghiệp"
  },
  {
    "word": "methods",
    "mean": "phương thức"
  },
  {
    "word": "market",
    "mean": "thị trường"
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
    "word": "scripts",
    "mean": "kịch bản"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "fields",
    "mean": "lĩnh vực"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "industry",
    "mean": "ngành"
  },
  {
    "word": "human",
    "mean": "thuộc con người"
  },
  {
    "word": "knowledge",
    "mean": "kiến thức"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "coming",
    "mean": "sắp tới"
  },
  {
    "word": "years",
    "mean": "năm"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "smarter",
    "mean": "thông minh hơn"
  },
  {
    "word": "voice",
    "mean": "giọng nói"
  },
  {
    "word": "images",
    "mean": "hình ảnh"
  },
  {
    "word": "videos",
    "mean": "video"
  },
  {
    "word": "than",
    "mean": "hơn"
  },
  {
    "word": "as",
    "mean": "như; bằng"
  },
  {
    "word": "assistant",
    "mean": "trợ lý"
  },
  {
    "word": "finish",
    "mean": "hoàn thành"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "serve",
    "mean": "phục vụ"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "how",
    "mean": "như thế nào"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "change",
    "mean": "thay đổi"
  },
  {
    "word": "parts",
    "mean": "phần"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "humans",
    "mean": "con người"
  },
  {
    "word": "creativity",
    "mean": "sự sáng tạo"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "critical",
    "mean": "phản biện; quan trọng"
  },
  {
    "word": "thinking",
    "mean": "tư duy"
  },
  {
    "word": "replace",
    "mean": "thay thế"
  }
];

const newEx4Data = [
  {
    "word": "writing",
    "mean": "việc viết"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "prompts",
    "mean": "các câu lệnh"
  },
  {
    "word": "prompt",
    "mean": "câu lệnh"
  },
  {
    "word": "instruction",
    "mean": "hướng dẫn"
  },
  {
    "word": "give",
    "mean": "mang lại"
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
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "answer",
    "mean": "câu trả lời"
  },
  {
    "word": "will",
    "mean": "sẽ"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "details",
    "mean": "chi tiết"
  },
  {
    "word": "example",
    "mean": "ví dụ"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "say",
    "mean": "nói"
  },
  {
    "word": "topic",
    "mean": "chủ đề"
  },
  {
    "word": "word",
    "mean": "từ"
  },
  {
    "word": "limit",
    "mean": "giới hạn"
  },
  {
    "word": "language",
    "mean": "ngôn ngữ"
  },
  {
    "word": "level",
    "mean": "trình độ; mức độ"
  },
  {
    "word": "style",
    "mean": "phong cách"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "purpose",
    "mean": "mục đích"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "about",
    "mean": "về"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "100-word",
    "mean": "dài 100 từ"
  },
  {
    "word": "passage",
    "mean": "đoạn văn"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
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
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "results",
    "mean": "kết quả"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "first",
    "mean": "thứ nhất; đầu tiên"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "perfect",
    "mean": "hoàn hảo"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "rewrite",
    "mean": "viết lại"
  },
  {
    "word": "shorten",
    "mean": "rút ngắn"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "benefits",
    "mean": "lợi ích"
  },
  {
    "word": "risks",
    "mean": "rủi ro"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "anytime",
    "mean": "bất cứ lúc nào"
  },
  {
    "word": "anywhere",
    "mean": "bất cứ đâu"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "wrong",
    "mean": "sai"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "users",
    "mean": "người dùng"
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
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "privacy",
    "mean": "quyền riêng tư"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "this",
    "mean": "này"
  },
  {
    "word": "reason",
    "mean": "lý do"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
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
    "word": "facts",
    "mean": "sự thật"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "private",
    "mean": "riêng tư"
  },
  {
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "powerful",
    "mean": "mạnh mẽ"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "industries",
    "mean": "các ngành"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "business",
    "mean": "kinh doanh; doanh nghiệp"
  },
  {
    "word": "supports",
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
    "word": "reports",
    "mean": "báo cáo"
  },
  {
    "word": "healthcare",
    "mean": "chăm sóc sức khỏe"
  },
  {
    "word": "general",
    "mean": "chung; tổng quát"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "doctors",
    "mean": "bác sĩ"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "final",
    "mean": "cuối cùng"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "tourism",
    "mean": "du lịch"
  },
  {
    "word": "suggest",
    "mean": "đề xuất"
  },
  {
    "word": "travel",
    "mean": "du lịch; việc đi lại"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
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
    "word": "agriculture",
    "mean": "nông nghiệp"
  },
  {
    "word": "farming",
    "mean": "nông nghiệp"
  },
  {
    "word": "methods",
    "mean": "phương thức"
  },
  {
    "word": "market",
    "mean": "thị trường"
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
    "word": "scripts",
    "mean": "kịch bản"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "fields",
    "mean": "lĩnh vực"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "industry",
    "mean": "ngành"
  },
  {
    "word": "human",
    "mean": "thuộc con người"
  },
  {
    "word": "knowledge",
    "mean": "kiến thức"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "exciting",
    "mean": "hấp dẫn; sôi động"
  },
  {
    "word": "coming",
    "mean": "sắp tới"
  },
  {
    "word": "years",
    "mean": "năm"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "smarter",
    "mean": "thông minh hơn"
  },
  {
    "word": "voice",
    "mean": "giọng nói"
  },
  {
    "word": "images",
    "mean": "hình ảnh"
  },
  {
    "word": "videos",
    "mean": "video"
  },
  {
    "word": "than",
    "mean": "hơn"
  },
  {
    "word": "as",
    "mean": "như; bằng"
  },
  {
    "word": "assistant",
    "mean": "trợ lý"
  },
  {
    "word": "finish",
    "mean": "hoàn thành"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "serve",
    "mean": "phục vụ"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "how",
    "mean": "như thế nào"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "change",
    "mean": "thay đổi"
  },
  {
    "word": "parts",
    "mean": "phần"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "humans",
    "mean": "con người"
  },
  {
    "word": "creativity",
    "mean": "sự sáng tạo"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "critical",
    "mean": "phản biện; quan trọng"
  },
  {
    "word": "thinking",
    "mean": "tư duy"
  },
  {
    "word": "replace",
    "mean": "thay thế"
  }
];

const newEx5Data = [
  "Chat AI has many benefits.",
  "Sometimes it may give wrong information.",
  "Good prompts save time and improve results.",
  "However, Chat AI also has some risks.",
  "However, every industry should use it carefully.",
  "Chat AI is used in many industries today.",
  "Chat AI makes work faster in many fields.",
  "Chat AI should help people, not replace them.",
  "A good prompt helps AI understand what we want.",
  "For this reason, users should use Chat AI carefully."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "A prompt is the instruction we give to Chat AI."
  },
  {
    "id": 2,
    "correct": "To write a good prompt, we should give enough details."
  },
  {
    "id": 3,
    "correct": "Chat AI is powerful, but responsible use is very important."
  },
  {
    "id": 4,
    "correct": "In education, it helps students study and teachers prepare lessons."
  },
  {
    "id": 5,
    "correct": "In agriculture, it can explain farming methods and market information."
  },
  {
    "id": 6,
    "correct": "A good prompt helps AI understand what we want."
  },
  {
    "id": 7,
    "correct": "If the prompt is clear, the answer will usually be better."
  },
  {
    "id": 8,
    "correct": "It is useful because people can use it anytime and anywhere."
  },
  {
    "id": 9,
    "correct": "For this reason, users should use Chat AI carefully."
  },
  {
    "id": 10,
    "correct": "In business, it supports customer service, marketing, and reports."
  },
  {
    "id": 11,
    "correct": "In tourism, Chat AI can suggest travel plans and translate languages."
  },
  {
    "id": 12,
    "correct": "In media, it helps create posts, scripts, and ideas."
  },
  {
    "id": 13,
    "correct": "Human knowledge, experience, and responsibility are still very important."
  },
  {
    "id": 14,
    "correct": "The future of Chat AI will be very exciting."
  },
  {
    "id": 15,
    "correct": "Students may use Chat AI as a study assistant."
  }
];

const newEx7Data = [
  {
    "q": "What makes a good prompt more effective?",
    "a": "A good prompt is clear and gives enough details."
  },
  {
    "q": "Which details can users include in a prompt?",
    "a": "They can include the topic, word limit, language level, style, and purpose."
  },
  {
    "q": "What can users ask Chat AI to do when an answer is not perfect?",
    "a": "They can ask it to rewrite, shorten, explain, or make the answer easier."
  },
  {
    "q": "What are two important risks of Chat AI?",
    "a": "It may give wrong information, and users may face privacy risks."
  },
  {
    "q": "How should users handle important facts from Chat AI?",
    "a": "They should check important facts carefully."
  },
  {
    "q": "How is Chat AI used in education and business?",
    "a": "It helps with study and lessons in education and supports customer service, marketing, and reports in business."
  },
  {
    "q": "What role does Chat AI have in healthcare?",
    "a": "It can explain general health information, but doctors must make final decisions."
  },
  {
    "q": "What may Chat AI understand better in the future?",
    "a": "It may understand voice, images, videos, and many languages better."
  },
  {
    "q": "What may businesses use Chat AI for in the future?",
    "a": "They may use it to serve customers and create better products."
  },
  {
    "q": "What human qualities will still be important as AI develops?",
    "a": "Creativity, kindness, critical thinking, knowledge, experience, and responsibility will still be important."
  }
];

