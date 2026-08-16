// ===== office02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A _____ meeting helps workers discuss projects and share useful ideas during normal office work every single day.",
    "a": "team"
  },
  {
    "q": "2. A team _____ helps workers discuss projects and share useful ideas while employees complete their regular duties at work.",
    "a": "meeting"
  },
  {
    "q": "3. A team meeting _____ workers discuss projects and share useful ideas so the workplace can stay organized and productive.",
    "a": "helps"
  },
  {
    "q": "4. A team meeting helps _____ discuss projects and share useful ideas when the office is busy during the working day.",
    "a": "workers"
  },
  {
    "q": "5. A team meeting helps workers _____ projects and share useful ideas as part of responsible and careful office work.",
    "a": "discuss"
  },
  {
    "q": "6. A team meeting helps workers discuss _____ and share useful ideas during normal office work every single day.",
    "a": "projects"
  },
  {
    "q": "7. A team meeting helps workers discuss projects and _____ useful ideas while employees complete their regular duties at work.",
    "a": "share"
  },
  {
    "q": "8. A team meeting helps workers discuss projects and share _____ ideas so the workplace can stay organized and productive.",
    "a": "useful"
  },
  {
    "q": "9. A team meeting helps workers discuss projects and share useful _____ when the office is busy during the working day.",
    "a": "ideas"
  },
  {
    "q": "10. Everyone _____ in one room or joins online as part of responsible and careful office work.",
    "a": "gathers"
  },
  {
    "q": "11. Everyone gathers in one _____ or joins online during normal office work every single day.",
    "a": "room"
  },
  {
    "q": "12. Everyone gathers in one room or _____ online while employees complete their regular duties at work.",
    "a": "joins"
  },
  {
    "q": "13. Everyone gathers in one room or joins _____ so the workplace can stay organized and productive.",
    "a": "online"
  },
  {
    "q": "14. _____ help people understand goals, solve problems, and work together better every single day successfully.",
    "a": "meetings"
  },
  {
    "q": "15. Meetings _____ people understand goals, solve problems, and work together better every single day successfully.",
    "a": "help"
  },
  {
    "q": "16. Meetings help _____ understand goals, solve problems, and work together better every single day successfully.",
    "a": "people"
  },
  {
    "q": "17. Meetings help people _____ goals, solve problems, and work together better every single day successfully.",
    "a": "understand"
  },
  {
    "q": "18. Meetings help people understand _____, solve problems, and work together better every single day successfully.",
    "a": "goals"
  },
  {
    "q": "19. Meetings help people understand goals, _____ problems, and work together better every single day successfully.",
    "a": "solve"
  },
  {
    "q": "20. Meetings help people understand goals, solve _____, and work together better every single day successfully.",
    "a": "problems"
  }
];

const newEx2Data = [
  {
    "q": "1. What does a team meeting help workers do?",
    "opts": [
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks.",
      "They ask questions, suggest improvements, and agree on solutions.",
      "It helps workers discuss projects and share useful ideas."
    ],
    "a": "It helps workers discuss projects and share useful ideas."
  },
  {
    "q": "2. How can people join a team meeting?",
    "opts": [
      "They can gather in one room or join online.",
      "It helps workers discuss projects and share useful ideas.",
      "The manager explains plans and assigns tasks.",
      "They ask questions, suggest improvements, and agree on solutions."
    ],
    "a": "They can gather in one room or join online."
  },
  {
    "q": "3. What does the manager do during a meeting?",
    "opts": [
      "They ask questions, suggest improvements, and agree on solutions.",
      "The manager explains plans and assigns tasks.",
      "It helps workers discuss projects and share useful ideas.",
      "They can gather in one room or join online."
    ],
    "a": "The manager explains plans and assigns tasks."
  },
  {
    "q": "4. What do team members do during a meeting?",
    "opts": [
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks.",
      "They ask questions, suggest improvements, and agree on solutions.",
      "It helps workers discuss projects and share useful ideas."
    ],
    "a": "They ask questions, suggest improvements, and agree on solutions."
  },
  {
    "q": "5. What happens after a good meeting?",
    "opts": [
      "It helps workers discuss projects and share useful ideas.",
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks.",
      "Everyone knows what to do next."
    ],
    "a": "Everyone knows what to do next."
  },
  {
    "q": "6. Why are office rules important?",
    "opts": [
      "They keep work organized and comfortable.",
      "It helps workers discuss projects and share useful ideas.",
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks."
    ],
    "a": "They keep work organized and comfortable."
  },
  {
    "q": "7. What should workers do before deadlines?",
    "opts": [
      "The manager explains plans and assigns tasks.",
      "They should finish their tasks before deadlines.",
      "It helps workers discuss projects and share useful ideas.",
      "They can gather in one room or join online."
    ],
    "a": "They should finish their tasks before deadlines."
  },
  {
    "q": "8. How should workers treat coworkers?",
    "opts": [
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks.",
      "They should respect their coworkers.",
      "It helps workers discuss projects and share useful ideas."
    ],
    "a": "They should respect their coworkers."
  },
  {
    "q": "9. What happens when people follow the same standards?",
    "opts": [
      "It helps workers discuss projects and share useful ideas.",
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks.",
      "Everyone feels respected and comfortable."
    ],
    "a": "Everyone feels respected and comfortable."
  },
  {
    "q": "10. Why is working together important?",
    "opts": [
      "Teamwork brings better results.",
      "It helps workers discuss projects and share useful ideas.",
      "They can gather in one room or join online.",
      "The manager explains plans and assigns tasks."
    ],
    "a": "Teamwork brings better results."
  },
  {
    "q": "11. What is the Vietnamese meaning of “meeting”?",
    "opts": [
      "ý tưởng",
      "cuộc họp",
      "chia sẻ",
      "hữu ích"
    ],
    "a": "cuộc họp"
  },
  {
    "q": "12. What is the Vietnamese meaning of “helps”?",
    "opts": [
      "ý tưởng",
      "mọi người",
      "giúp",
      "hữu ích"
    ],
    "a": "giúp"
  },
  {
    "q": "13. What is the Vietnamese meaning of “workers”?",
    "opts": [
      "ý tưởng",
      "mọi người",
      "tập trung",
      "nhân viên"
    ],
    "a": "nhân viên"
  },
  {
    "q": "14. What is the Vietnamese meaning of “discuss”?",
    "opts": [
      "thảo luận",
      "mọi người",
      "tập trung",
      "một người; một"
    ],
    "a": "thảo luận"
  },
  {
    "q": "15. What is the Vietnamese meaning of “projects”?",
    "opts": [
      "phòng",
      "dự án",
      "tập trung",
      "một người; một"
    ],
    "a": "dự án"
  },
  {
    "q": "16. Choose the best word: Meetings help people understand goals, solve problems, and _____ together better every single day successfully.",
    "opts": [
      "discuss",
      "share",
      "work",
      "helps"
    ],
    "a": "work"
  },
  {
    "q": "17. Choose the best word: Meetings help people understand goals, solve problems, and work _____ better every single day successfully.",
    "opts": [
      "online",
      "successfully",
      "carefully",
      "together"
    ],
    "a": "together"
  },
  {
    "q": "18. Choose the best word: Meetings help people understand goals, solve problems, and work together _____ every single day successfully.",
    "opts": [
      "better",
      "stronger",
      "easier",
      "happier"
    ],
    "a": "better"
  },
  {
    "q": "19. Choose the best word: Meetings help people understand goals, solve problems, and work together better every _____ day successfully.",
    "opts": [
      "important",
      "single",
      "useful",
      "good"
    ],
    "a": "single"
  },
  {
    "q": "20. Choose the best word: Meetings help people understand goals, solve problems, and work together better every single day _____.",
    "opts": [
      "together",
      "carefully",
      "successfully",
      "online"
    ],
    "a": "successfully"
  }
];

const newEx3Data = [
  {
    "word": "team",
    "mean": "nhóm"
  },
  {
    "word": "meeting",
    "mean": "cuộc họp"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "projects",
    "mean": "dự án"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "gathers",
    "mean": "tập trung"
  },
  {
    "word": "one",
    "mean": "một người; một"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "joins",
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
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "goals",
    "mean": "các mục tiêu"
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
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "successfully",
    "mean": "một cách thành công"
  },
  {
    "word": "during",
    "mean": "trong suốt"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "gives",
    "mean": "đưa ra"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "listens",
    "mean": "lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "manager",
    "mean": "quản lý"
  },
  {
    "word": "explains",
    "mean": "giải thích"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "assigns",
    "mean": "phân công"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "members",
    "mean": "thành viên"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "suggest",
    "mean": "đề xuất"
  },
  {
    "word": "improvements",
    "mean": "sự cải tiến"
  },
  {
    "word": "agree",
    "mean": "đồng ý"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "solutions",
    "mean": "các giải pháp"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "after",
    "mean": "sau"
  },
  {
    "word": "knows",
    "mean": "biết"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "next",
    "mean": "tiếp theo"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "achieve",
    "mean": "đạt được"
  },
  {
    "word": "results",
    "mean": "kết quả"
  },
  {
    "word": "week",
    "mean": "tuần"
  },
  {
    "word": "office",
    "mean": "văn phòng"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "organized",
    "mean": "có tổ chức; ngăn nắp"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "employees",
    "mean": "nhân viên"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "starting",
    "mean": "việc bắt đầu"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
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
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "peacefully",
    "mean": "một cách yên bình"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "finish",
    "mean": "đích"
  },
  {
    "word": "deadlines",
    "mean": "thời hạn"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "quietly",
    "mean": "một cách nhỏ nhẹ"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
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
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "policies",
    "mean": "chính sách"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "shows",
    "mean": "thể hiện"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "professional",
    "mean": "chuyên nghiệp"
  },
  {
    "word": "behavior",
    "mean": "hành vi; tác phong"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "respected",
    "mean": "được tôn trọng"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "standards",
    "mean": "tiêu chuẩn"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "workplace",
    "mean": "nơi làm việc"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "increases",
    "mean": "tăng"
  },
  {
    "word": "productivity",
    "mean": "năng suất"
  },
  {
    "word": "success",
    "mean": "thành công"
  },
  {
    "word": "whole",
    "mean": "toàn bộ"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "another",
    "mean": "người khác; lẫn nhau"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "someone",
    "mean": "ai đó"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "offer",
    "mean": "đưa ra; cung cấp"
  },
  {
    "word": "advice",
    "mean": "lời khuyên"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "trust",
    "mean": "tin tưởng"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
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
    "word": "successful",
    "mean": "thành công"
  },
  {
    "word": "teams",
    "mean": "các nhóm"
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
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "group",
    "mean": "nhóm"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "strong",
    "mean": "mạnh mẽ"
  },
  {
    "word": "builds",
    "mean": "xây dựng"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  }
];

const newEx4Data = [
  {
    "word": "team",
    "mean": "nhóm"
  },
  {
    "word": "meeting",
    "mean": "cuộc họp"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "projects",
    "mean": "dự án"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "gathers",
    "mean": "tập trung"
  },
  {
    "word": "one",
    "mean": "một người; một"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "joins",
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
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "goals",
    "mean": "các mục tiêu"
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
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "successfully",
    "mean": "một cách thành công"
  },
  {
    "word": "during",
    "mean": "trong suốt"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "gives",
    "mean": "đưa ra"
  },
  {
    "word": "opinions",
    "mean": "ý kiến"
  },
  {
    "word": "listens",
    "mean": "lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "manager",
    "mean": "quản lý"
  },
  {
    "word": "explains",
    "mean": "giải thích"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "assigns",
    "mean": "phân công"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "members",
    "mean": "thành viên"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "questions",
    "mean": "câu hỏi"
  },
  {
    "word": "suggest",
    "mean": "đề xuất"
  },
  {
    "word": "improvements",
    "mean": "sự cải tiến"
  },
  {
    "word": "agree",
    "mean": "đồng ý"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "solutions",
    "mean": "các giải pháp"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "after",
    "mean": "sau"
  },
  {
    "word": "knows",
    "mean": "biết"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "next",
    "mean": "tiếp theo"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "stronger",
    "mean": "khỏe hơn"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "achieve",
    "mean": "đạt được"
  },
  {
    "word": "results",
    "mean": "kết quả"
  },
  {
    "word": "week",
    "mean": "tuần"
  },
  {
    "word": "office",
    "mean": "văn phòng"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "organized",
    "mean": "có tổ chức; ngăn nắp"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "employees",
    "mean": "nhân viên"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "starting",
    "mean": "việc bắt đầu"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
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
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "peacefully",
    "mean": "một cách yên bình"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "finish",
    "mean": "đích"
  },
  {
    "word": "deadlines",
    "mean": "thời hạn"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "quietly",
    "mean": "một cách nhỏ nhẹ"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "coworkers",
    "mean": "đồng nghiệp"
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
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "policies",
    "mean": "chính sách"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "shows",
    "mean": "thể hiện"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "professional",
    "mean": "chuyên nghiệp"
  },
  {
    "word": "behavior",
    "mean": "hành vi; tác phong"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "respected",
    "mean": "được tôn trọng"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "standards",
    "mean": "tiêu chuẩn"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "workplace",
    "mean": "nơi làm việc"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "increases",
    "mean": "tăng"
  },
  {
    "word": "productivity",
    "mean": "năng suất"
  },
  {
    "word": "success",
    "mean": "thành công"
  },
  {
    "word": "whole",
    "mean": "toàn bộ"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "another",
    "mean": "người khác; lẫn nhau"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "someone",
    "mean": "ai đó"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "offer",
    "mean": "đưa ra; cung cấp"
  },
  {
    "word": "advice",
    "mean": "lời khuyên"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "trust",
    "mean": "tin tưởng"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
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
    "word": "successful",
    "mean": "thành công"
  },
  {
    "word": "teams",
    "mean": "các nhóm"
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
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "group",
    "mean": "nhóm"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "strong",
    "mean": "mạnh mẽ"
  },
  {
    "word": "builds",
    "mean": "xây dựng"
  },
  {
    "word": "confidence",
    "mean": "sự tự tin"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  }
];

const newEx5Data = [
  "A team meeting helps workers discuss projects and share useful ideas.",
  "Every office has important rules to keep work organized and comfortable.",
  "Everyone feels respected and comfortable when people follow the same standards.",
  "During the meeting, each person gives opinions and listens carefully.",
  "Workers should arrive on time and finish tasks before deadlines.",
  "They should speak quietly, wear suitable clothes, and respect coworkers.",
  "Working together is important in every office because teamwork brings better results.",
  "When someone needs help, coworkers offer support and useful advice.",
  "They communicate clearly, respect different opinions, and trust each other.",
  "After the meeting, everyone knows what to do next."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "A team meeting helps workers discuss projects and share useful ideas."
  },
  {
    "id": 2,
    "correct": "Everyone gathers in one room or joins online."
  },
  {
    "id": 3,
    "correct": "Meetings help people understand goals, solve problems, and work together better every single day successfully."
  },
  {
    "id": 4,
    "correct": "During the meeting, each person gives opinions and listens carefully."
  },
  {
    "id": 5,
    "correct": "The manager explains plans and assigns tasks."
  },
  {
    "id": 6,
    "correct": "Team members ask questions, suggest improvements, and agree on the best solutions for future work together."
  },
  {
    "id": 7,
    "correct": "After the meeting, everyone knows what to do next."
  },
  {
    "id": 8,
    "correct": "Workers complete their tasks and support each other."
  },
  {
    "id": 9,
    "correct": "Good meetings improve communication, build stronger teamwork, and help the company achieve better results every single week."
  },
  {
    "id": 10,
    "correct": "Every office has important rules to keep work organized and comfortable."
  },
  {
    "id": 11,
    "correct": "Employees should understand these rules before starting their jobs."
  },
  {
    "id": 12,
    "correct": "Following office rules creates a friendly environment where everyone can work peacefully together every day."
  },
  {
    "id": 13,
    "correct": "Workers should arrive on time and finish tasks before deadlines."
  },
  {
    "id": 14,
    "correct": "They should speak quietly, wear suitable clothes, and respect coworkers."
  },
  {
    "id": 15,
    "correct": "Keeping desks clean and following company policies also shows responsibility and professional behavior always."
  }
];

const newEx7Data = [
  {
    "q": "What does a team meeting help workers do?",
    "a": "It helps workers discuss projects and share useful ideas."
  },
  {
    "q": "How can people join a team meeting?",
    "a": "They can gather in one room or join online."
  },
  {
    "q": "What does the manager do during a meeting?",
    "a": "The manager explains plans and assigns tasks."
  },
  {
    "q": "What do team members do during a meeting?",
    "a": "They ask questions, suggest improvements, and agree on solutions."
  },
  {
    "q": "What happens after a good meeting?",
    "a": "Everyone knows what to do next."
  },
  {
    "q": "Why are office rules important?",
    "a": "They keep work organized and comfortable."
  },
  {
    "q": "What should workers do before deadlines?",
    "a": "They should finish their tasks before deadlines."
  },
  {
    "q": "How should workers treat coworkers?",
    "a": "They should respect their coworkers."
  },
  {
    "q": "What happens when people follow the same standards?",
    "a": "Everyone feels respected and comfortable."
  },
  {
    "q": "Why is working together important?",
    "a": "Teamwork brings better results."
  }
];

