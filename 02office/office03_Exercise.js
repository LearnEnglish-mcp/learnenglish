// ===== office03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A _____ workplace protects employees and helps everyone feel comfortable every day during normal office work every single day.",
    "a": "safe"
  },
  {
    "q": "2. A safe _____ protects employees and helps everyone feel comfortable every day while employees complete their regular duties at work.",
    "a": "workplace"
  },
  {
    "q": "3. A safe workplace _____ employees and helps everyone feel comfortable every day so the workplace can stay organized and productive.",
    "a": "protects"
  },
  {
    "q": "4. A safe workplace protects _____ and helps everyone feel comfortable every day when the office is busy during the working day.",
    "a": "employees"
  },
  {
    "q": "5. A safe workplace protects employees and _____ everyone feel comfortable every day as part of responsible and careful office work.",
    "a": "helps"
  },
  {
    "q": "6. A safe workplace protects employees and helps everyone _____ comfortable every day during normal office work every single day.",
    "a": "feel"
  },
  {
    "q": "7. A safe workplace protects employees and helps everyone feel _____ every day while employees complete their regular duties at work.",
    "a": "comfortable"
  },
  {
    "q": "8. _____ should have clean spaces, clear walkways, and safe equipment so the workplace can stay organized and productive.",
    "a": "offices"
  },
  {
    "q": "9. Offices should _____ clean spaces, clear walkways, and safe equipment when the office is busy during the working day.",
    "a": "have"
  },
  {
    "q": "10. Offices should have _____ spaces, clear walkways, and safe equipment as part of responsible and careful office work.",
    "a": "clean"
  },
  {
    "q": "11. Offices should have clean _____, clear walkways, and safe equipment during normal office work every single day.",
    "a": "spaces"
  },
  {
    "q": "12. Offices should have clean spaces, _____ walkways, and safe equipment while employees complete their regular duties at work.",
    "a": "clear"
  },
  {
    "q": "13. Offices should have clean spaces, clear _____, and safe equipment so the workplace can stay organized and productive.",
    "a": "walkways"
  },
  {
    "q": "14. Offices should have clean spaces, clear walkways, and safe _____ when the office is busy during the working day.",
    "a": "equipment"
  },
  {
    "q": "15. _____ safety rules reduces accidents and keeps workers healthy during their daily tasks.",
    "a": "following"
  },
  {
    "q": "16. Following _____ rules reduces accidents and keeps workers healthy during their daily tasks.",
    "a": "safety"
  },
  {
    "q": "17. Following safety _____ reduces accidents and keeps workers healthy during their daily tasks.",
    "a": "rules"
  },
  {
    "q": "18. Following safety rules _____ accidents and keeps workers healthy during their daily tasks.",
    "a": "reduces"
  },
  {
    "q": "19. Following safety rules reduces _____ and keeps workers healthy during their daily tasks.",
    "a": "accidents"
  },
  {
    "q": "20. Following safety rules reduces accidents and _____ workers healthy during their daily tasks.",
    "a": "keeps"
  }
];

const newEx2Data = [
  {
    "q": "1. What does a safe workplace do for employees?",
    "opts": [
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits.",
      "They must report broken machines immediately.",
      "It protects employees and helps them feel comfortable."
    ],
    "a": "It protects employees and helps them feel comfortable."
  },
  {
    "q": "2. What should offices have for safety?",
    "opts": [
      "They should have clean spaces, clear walkways, and safe equipment.",
      "It protects employees and helps them feel comfortable.",
      "They should know fire safety procedures and emergency exits.",
      "They must report broken machines immediately."
    ],
    "a": "They should have clean spaces, clear walkways, and safe equipment."
  },
  {
    "q": "3. What safety information should employees know?",
    "opts": [
      "They must report broken machines immediately.",
      "They should know fire safety procedures and emergency exits.",
      "It protects employees and helps them feel comfortable.",
      "They should have clean spaces, clear walkways, and safe equipment."
    ],
    "a": "They should know fire safety procedures and emergency exits."
  },
  {
    "q": "4. What must workers do with broken machines?",
    "opts": [
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits.",
      "They must report broken machines immediately.",
      "It protects employees and helps them feel comfortable."
    ],
    "a": "They must report broken machines immediately."
  },
  {
    "q": "5. How does keeping desks clean help?",
    "opts": [
      "It protects employees and helps them feel comfortable.",
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits.",
      "It helps prevent injuries and workplace problems."
    ],
    "a": "It helps prevent injuries and workplace problems."
  },
  {
    "q": "6. How does technology help modern offices?",
    "opts": [
      "It helps employees complete work faster and better.",
      "It protects employees and helps them feel comfortable.",
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits."
    ],
    "a": "It helps employees complete work faster and better."
  },
  {
    "q": "7. What do workers use the internet for?",
    "opts": [
      "They should know fire safety procedures and emergency exits.",
      "They use it to share files and work with coworkers in different places.",
      "It protects employees and helps them feel comfortable.",
      "They should have clean spaces, clear walkways, and safe equipment."
    ],
    "a": "They use it to share files and work with coworkers in different places."
  },
  {
    "q": "8. Why should employees learn new technology?",
    "opts": [
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits.",
      "Good technology skills improve productivity and support teamwork.",
      "It protects employees and helps them feel comfortable."
    ],
    "a": "Good technology skills improve productivity and support teamwork."
  },
  {
    "q": "9. How can employees solve workplace problems?",
    "opts": [
      "It protects employees and helps them feel comfortable.",
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits.",
      "They discuss the situation, listen carefully, and find useful solutions."
    ],
    "a": "They discuss the situation, listen carefully, and find useful solutions."
  },
  {
    "q": "10. What should managers do before making decisions?",
    "opts": [
      "They should listen to different opinions.",
      "It protects employees and helps them feel comfortable.",
      "They should have clean spaces, clear walkways, and safe equipment.",
      "They should know fire safety procedures and emergency exits."
    ],
    "a": "They should listen to different opinions."
  },
  {
    "q": "11. What is the Vietnamese meaning of “workplace”?",
    "opts": [
      "mỗi",
      "nơi làm việc",
      "cảm thấy",
      "thoải mái"
    ],
    "a": "nơi làm việc"
  },
  {
    "q": "12. What is the Vietnamese meaning of “protects”?",
    "opts": [
      "mỗi",
      "ngày",
      "bảo vệ",
      "thoải mái"
    ],
    "a": "bảo vệ"
  },
  {
    "q": "13. What is the Vietnamese meaning of “employees”?",
    "opts": [
      "mỗi",
      "ngày",
      "các văn phòng",
      "nhân viên"
    ],
    "a": "nhân viên"
  },
  {
    "q": "14. What is the Vietnamese meaning of “helps”?",
    "opts": [
      "giúp",
      "ngày",
      "các văn phòng",
      "nên"
    ],
    "a": "giúp"
  },
  {
    "q": "15. What is the Vietnamese meaning of “comfortable”?",
    "opts": [
      "có",
      "thoải mái",
      "các văn phòng",
      "nên"
    ],
    "a": "thoải mái"
  },
  {
    "q": "16. Choose the best word: Following safety rules reduces accidents and _____ workers healthy during their daily tasks.",
    "opts": [
      "helps",
      "feel",
      "keeps",
      "protects"
    ],
    "a": "keeps"
  },
  {
    "q": "17. Choose the best word: Following safety rules reduces accidents and keeps _____ healthy during their daily tasks.",
    "opts": [
      "workplace",
      "employees",
      "day",
      "workers"
    ],
    "a": "workers"
  },
  {
    "q": "18. Choose the best word: Following safety rules reduces accidents and keeps workers _____ during their daily tasks.",
    "opts": [
      "healthy",
      "safe",
      "comfortable",
      "clean"
    ],
    "a": "healthy"
  },
  {
    "q": "19. Choose the best word: Following safety rules reduces accidents and keeps workers healthy during their _____ tasks.",
    "opts": [
      "clean",
      "daily",
      "safe",
      "comfortable"
    ],
    "a": "daily"
  },
  {
    "q": "20. Choose the best word: Following safety rules reduces accidents and keeps workers healthy during their daily _____.",
    "opts": [
      "employees",
      "day",
      "tasks",
      "workplace"
    ],
    "a": "tasks"
  }
];

const newEx3Data = [
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "workplace",
    "mean": "nơi làm việc"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "employees",
    "mean": "nhân viên"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
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
    "word": "offices",
    "mean": "các văn phòng"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "spaces",
    "mean": "không gian"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "walkways",
    "mean": "lối đi"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
  },
  {
    "word": "safety",
    "mean": "an toàn"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "accidents",
    "mean": "tai nạn"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "during",
    "mean": "trong suốt"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "know",
    "mean": "biết"
  },
  {
    "word": "fire",
    "mean": "hỏa hoạn; lửa"
  },
  {
    "word": "procedures",
    "mean": "quy trình"
  },
  {
    "word": "emergency",
    "mean": "khẩn cấp"
  },
  {
    "word": "exits",
    "mean": "lối thoát"
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
    "word": "office",
    "mean": "văn phòng"
  },
  {
    "word": "correctly",
    "mean": "đúng cách"
  },
  {
    "word": "report",
    "mean": "báo cáo"
  },
  {
    "word": "broken",
    "mean": "bị hỏng"
  },
  {
    "word": "machines",
    "mean": "máy móc"
  },
  {
    "word": "immediately",
    "mean": "ngay lập tức"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "desks",
    "mean": "bàn làm việc"
  },
  {
    "word": "removing",
    "mean": "loại bỏ"
  },
  {
    "word": "dangerous",
    "mean": "nguy hiểm"
  },
  {
    "word": "objects",
    "mean": "vật phẩm"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "injuries",
    "mean": "chấn thương"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "everyone's",
    "mean": "của mọi người"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "instructions",
    "mean": "hướng dẫn"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở trạng thái"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "needed",
    "mean": "cần thiết"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "performance",
    "mean": "hiệu suất"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "technology",
    "mean": "công nghệ"
  },
  {
    "word": "modern",
    "mean": "hiện đại"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "computers",
    "mean": "máy tính"
  },
  {
    "word": "smartphones",
    "mean": "điện thoại thông minh"
  },
  {
    "word": "software",
    "mean": "phần mềm"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "easily",
    "mean": "một cách dễ dàng"
  },
  {
    "word": "finish",
    "mean": "đích"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "greater",
    "mean": "lớn hơn"
  },
  {
    "word": "accuracy",
    "mean": "độ chính xác"
  },
  {
    "word": "efficiency",
    "mean": "hiệu quả"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "send",
    "mean": "gửi"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
  },
  {
    "word": "meetings",
    "mean": "các cuộc họp"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "files",
    "mean": "tệp; hồ sơ"
  },
  {
    "word": "internet",
    "mean": "mạng Internet"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "places",
    "mean": "nơi"
  },
  {
    "word": "digital",
    "mean": "kỹ thuật số"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "convenient",
    "mean": "tiện lợi"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "employee",
    "mean": "nhân viên"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "programs",
    "mean": "chương trình"
  },
  {
    "word": "security",
    "mean": "bảo mật; an ninh"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "productivity",
    "mean": "năng suất"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "today's",
    "mean": "của ngày nay"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "solving",
    "mean": "việc giải quyết"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "happen",
    "mean": "xảy ra"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "solve",
    "mean": "giải quyết"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "situation",
    "mean": "tình huống"
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
    "word": "find",
    "mean": "tìm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "solutions",
    "mean": "các giải pháp"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "attitudes",
    "mean": "thái độ"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "suggest",
    "mean": "đề xuất"
  },
  {
    "word": "practical",
    "mean": "thực tế"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "managers",
    "mean": "các quản lý"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "making",
    "mean": "việc làm cho"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "works",
    "mean": "làm việc"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "solution",
    "mean": "giải pháp"
  },
  {
    "word": "similar",
    "mean": "tương tự"
  },
  {
    "word": "happening",
    "mean": "xảy ra"
  },
  {
    "word": "future",
    "mean": "tương lai"
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
    "word": "experienced",
    "mean": "có kinh nghiệm"
  },
  {
    "word": "patience",
    "mean": "sự kiên nhẫn"
  },
  {
    "word": "cooperation",
    "mean": "sự hợp tác"
  },
  {
    "word": "successfully",
    "mean": "một cách thành công"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "results",
    "mean": "kết quả"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "happy",
    "mean": "vui vẻ; hạnh phúc"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "respected",
    "mean": "được tôn trọng"
  },
  {
    "word": "motivated",
    "mean": "có động lực"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "pleasant",
    "mean": "dễ chịu"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "balance",
    "mean": "cân bằng"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "relaxed",
    "mean": "thư giãn"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "celebrate",
    "mean": "ăn mừng"
  },
  {
    "word": "achievements",
    "mean": "thành tích"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "trust",
    "mean": "tin tưởng"
  },
  {
    "word": "among",
    "mean": "giữa; trong số"
  },
  {
    "word": "benefits",
    "mean": "lợi ích"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "productive",
    "mean": "năng suất; hiệu quả"
  },
  {
    "word": "creative",
    "mean": "sáng tạo"
  },
  {
    "word": "strong",
    "mean": "mạnh mẽ"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "achieve",
    "mean": "đạt được"
  },
  {
    "word": "success",
    "mean": "thành công"
  }
];

const newEx4Data = [
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "workplace",
    "mean": "nơi làm việc"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "employees",
    "mean": "nhân viên"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
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
    "word": "offices",
    "mean": "các văn phòng"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "spaces",
    "mean": "không gian"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "walkways",
    "mean": "lối đi"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
  },
  {
    "word": "safety",
    "mean": "an toàn"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "accidents",
    "mean": "tai nạn"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "during",
    "mean": "trong suốt"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "know",
    "mean": "biết"
  },
  {
    "word": "fire",
    "mean": "hỏa hoạn; lửa"
  },
  {
    "word": "procedures",
    "mean": "quy trình"
  },
  {
    "word": "emergency",
    "mean": "khẩn cấp"
  },
  {
    "word": "exits",
    "mean": "lối thoát"
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
    "word": "office",
    "mean": "văn phòng"
  },
  {
    "word": "correctly",
    "mean": "đúng cách"
  },
  {
    "word": "report",
    "mean": "báo cáo"
  },
  {
    "word": "broken",
    "mean": "bị hỏng"
  },
  {
    "word": "machines",
    "mean": "máy móc"
  },
  {
    "word": "immediately",
    "mean": "ngay lập tức"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "desks",
    "mean": "bàn làm việc"
  },
  {
    "word": "removing",
    "mean": "loại bỏ"
  },
  {
    "word": "dangerous",
    "mean": "nguy hiểm"
  },
  {
    "word": "objects",
    "mean": "vật phẩm"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "injuries",
    "mean": "chấn thương"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "everyone's",
    "mean": "của mọi người"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "instructions",
    "mean": "hướng dẫn"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở trạng thái"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "needed",
    "mean": "cần thiết"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "performance",
    "mean": "hiệu suất"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "technology",
    "mean": "công nghệ"
  },
  {
    "word": "modern",
    "mean": "hiện đại"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "computers",
    "mean": "máy tính"
  },
  {
    "word": "smartphones",
    "mean": "điện thoại thông minh"
  },
  {
    "word": "software",
    "mean": "phần mềm"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "easily",
    "mean": "một cách dễ dàng"
  },
  {
    "word": "finish",
    "mean": "đích"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "greater",
    "mean": "lớn hơn"
  },
  {
    "word": "accuracy",
    "mean": "độ chính xác"
  },
  {
    "word": "efficiency",
    "mean": "hiệu quả"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "send",
    "mean": "gửi"
  },
  {
    "word": "emails",
    "mean": "email"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
  },
  {
    "word": "meetings",
    "mean": "các cuộc họp"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "files",
    "mean": "tệp; hồ sơ"
  },
  {
    "word": "internet",
    "mean": "mạng Internet"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "places",
    "mean": "nơi"
  },
  {
    "word": "digital",
    "mean": "kỹ thuật số"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "convenient",
    "mean": "tiện lợi"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "employee",
    "mean": "nhân viên"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "programs",
    "mean": "chương trình"
  },
  {
    "word": "security",
    "mean": "bảo mật; an ninh"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "productivity",
    "mean": "năng suất"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "today's",
    "mean": "của ngày nay"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "solving",
    "mean": "việc giải quyết"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "happen",
    "mean": "xảy ra"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "solve",
    "mean": "giải quyết"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "situation",
    "mean": "tình huống"
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
    "word": "find",
    "mean": "tìm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "solutions",
    "mean": "các giải pháp"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "attitudes",
    "mean": "thái độ"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "explain",
    "mean": "giải thích"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "suggest",
    "mean": "đề xuất"
  },
  {
    "word": "practical",
    "mean": "thực tế"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "managers",
    "mean": "các quản lý"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "making",
    "mean": "việc làm cho"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "works",
    "mean": "làm việc"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "solution",
    "mean": "giải pháp"
  },
  {
    "word": "similar",
    "mean": "tương tự"
  },
  {
    "word": "happening",
    "mean": "xảy ra"
  },
  {
    "word": "future",
    "mean": "tương lai"
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
    "word": "experienced",
    "mean": "có kinh nghiệm"
  },
  {
    "word": "patience",
    "mean": "sự kiên nhẫn"
  },
  {
    "word": "cooperation",
    "mean": "sự hợp tác"
  },
  {
    "word": "successfully",
    "mean": "một cách thành công"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "results",
    "mean": "kết quả"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "happy",
    "mean": "vui vẻ; hạnh phúc"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "respected",
    "mean": "được tôn trọng"
  },
  {
    "word": "motivated",
    "mean": "có động lực"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "pleasant",
    "mean": "dễ chịu"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "balance",
    "mean": "cân bằng"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "relaxed",
    "mean": "thư giãn"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "celebrate",
    "mean": "ăn mừng"
  },
  {
    "word": "achievements",
    "mean": "thành tích"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "trust",
    "mean": "tin tưởng"
  },
  {
    "word": "among",
    "mean": "giữa; trong số"
  },
  {
    "word": "benefits",
    "mean": "lợi ích"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "productive",
    "mean": "năng suất; hiệu quả"
  },
  {
    "word": "creative",
    "mean": "sáng tạo"
  },
  {
    "word": "strong",
    "mean": "mạnh mẽ"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "achieve",
    "mean": "đạt được"
  },
  {
    "word": "success",
    "mean": "thành công"
  }
];

const newEx5Data = [
  "They must use office equipment correctly and report broken machines immediately.",
  "Workers should follow instructions, stay careful, and help others when needed.",
  "Employees discuss the situation, listen carefully, and find useful solutions together.",
  "Friendly coworkers, good communication, and positive attitudes create a pleasant environment.",
  "A safe workplace protects employees and helps everyone feel comfortable every day.",
  "Offices should have clean spaces, clear walkways, and safe equipment.",
  "Modern offices use technology every day to complete work faster and better.",
  "Workers send emails, join online meetings, and share files through the internet.",
  "Digital tools make communication faster and more convenient for everyone.",
  "People should practice using office programs and follow security rules."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "A safe workplace protects employees and helps everyone feel comfortable every day."
  },
  {
    "id": 2,
    "correct": "Offices should have clean spaces, clear walkways, and safe equipment."
  },
  {
    "id": 3,
    "correct": "Following safety rules reduces accidents and keeps workers healthy during their daily tasks."
  },
  {
    "id": 4,
    "correct": "Employees should know fire safety procedures and emergency exits."
  },
  {
    "id": 5,
    "correct": "They must use office equipment correctly and report broken machines immediately."
  },
  {
    "id": 6,
    "correct": "Keeping desks clean and removing dangerous objects helps prevent injuries and unnecessary workplace problems always."
  },
  {
    "id": 7,
    "correct": "Safety is everyone's responsibility in the office."
  },
  {
    "id": 8,
    "correct": "Workers should follow instructions, stay careful, and help others when needed."
  },
  {
    "id": 9,
    "correct": "A safe workplace improves confidence, supports better performance, and creates a healthy environment for all employees."
  },
  {
    "id": 10,
    "correct": "Modern offices use technology every day to complete work faster and better."
  },
  {
    "id": 11,
    "correct": "Computers, smartphones, and software help employees organize information, communicate easily, and finish important tasks with greater accuracy and efficiency every single day."
  },
  {
    "id": 12,
    "correct": "Workers send emails, join online meetings, and share files through the internet."
  },
  {
    "id": 13,
    "correct": "Technology saves time and allows people to work with coworkers in different places."
  },
  {
    "id": 14,
    "correct": "Digital tools make communication faster and more convenient for everyone."
  },
  {
    "id": 15,
    "correct": "Learning new technology is important for every employee."
  }
];

const newEx7Data = [
  {
    "q": "What does a safe workplace do for employees?",
    "a": "It protects employees and helps them feel comfortable."
  },
  {
    "q": "What should offices have for safety?",
    "a": "They should have clean spaces, clear walkways, and safe equipment."
  },
  {
    "q": "What safety information should employees know?",
    "a": "They should know fire safety procedures and emergency exits."
  },
  {
    "q": "What must workers do with broken machines?",
    "a": "They must report broken machines immediately."
  },
  {
    "q": "How does keeping desks clean help?",
    "a": "It helps prevent injuries and workplace problems."
  },
  {
    "q": "How does technology help modern offices?",
    "a": "It helps employees complete work faster and better."
  },
  {
    "q": "What do workers use the internet for?",
    "a": "They use it to share files and work with coworkers in different places."
  },
  {
    "q": "Why should employees learn new technology?",
    "a": "Good technology skills improve productivity and support teamwork."
  },
  {
    "q": "How can employees solve workplace problems?",
    "a": "They discuss the situation, listen carefully, and find useful solutions."
  },
  {
    "q": "What should managers do before making decisions?",
    "a": "They should listen to different opinions."
  }
];

