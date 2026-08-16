// ===== office01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Many _____ work in a modern office every day during normal office work every single day.",
    "a": "people"
  },
  {
    "q": "2. Many people _____ in a modern office every day while employees complete their regular duties at work.",
    "a": "work"
  },
  {
    "q": "3. Many people work in a _____ office every day so the workplace can stay organized and productive.",
    "a": "modern"
  },
  {
    "q": "4. Many people work in a modern _____ every day when the office is busy during the working day.",
    "a": "office"
  },
  {
    "q": "5. The office has many _____, computers, and bright lights as part of responsible and careful office work.",
    "a": "desks"
  },
  {
    "q": "6. The office has many desks, _____, and bright lights during normal office work every single day.",
    "a": "computers"
  },
  {
    "q": "7. The office has many desks, computers, and _____ lights while employees complete their regular duties at work.",
    "a": "bright"
  },
  {
    "q": "8. The office has many desks, computers, and bright _____ so the workplace can stay organized and productive.",
    "a": "lights"
  },
  {
    "q": "9. _____ arrive early, greet each other, and start their tasks when the office is busy during the working day.",
    "a": "workers"
  },
  {
    "q": "10. Workers _____ early, greet each other, and start their tasks as part of responsible and careful office work.",
    "a": "arrive"
  },
  {
    "q": "11. Workers arrive _____, greet each other, and start their tasks during normal office work every single day.",
    "a": "early"
  },
  {
    "q": "12. Workers arrive early, _____ each other, and start their tasks while employees complete their regular duties at work.",
    "a": "greet"
  },
  {
    "q": "13. Workers arrive early, greet each other, and _____ their tasks so the workplace can stay organized and productive.",
    "a": "start"
  },
  {
    "q": "14. Workers arrive early, greet each other, and start their _____ when the office is busy during the working day.",
    "a": "tasks"
  },
  {
    "q": "15. Everyone _____ busy during the whole morning together as part of responsible and careful office work.",
    "a": "stays"
  },
  {
    "q": "16. Everyone stays _____ during the whole morning together during normal office work every single day.",
    "a": "busy"
  },
  {
    "q": "17. Everyone stays busy during the whole _____ together while employees complete their regular duties at work.",
    "a": "morning"
  },
  {
    "q": "18. Everyone stays busy during the whole morning _____ so the workplace can stay organized and productive.",
    "a": "together"
  },
  {
    "q": "19. _____ answer emails, make phone calls, write reports, and attend meetings when the office is busy during the working day.",
    "a": "employees"
  },
  {
    "q": "20. Employees _____ emails, make phone calls, write reports, and attend meetings as part of responsible and careful office work.",
    "a": "answer"
  }
];

const newEx2Data = [
  {
    "q": "1. Where do many people work every day?",
    "opts": [
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks.",
      "They answer emails and make phone calls.",
      "They work in a modern office every day."
    ],
    "a": "They work in a modern office every day."
  },
  {
    "q": "2. What equipment and furniture does the office have?",
    "opts": [
      "It has many desks, computers, and bright lights.",
      "They work in a modern office every day.",
      "They greet each other and start their tasks.",
      "They answer emails and make phone calls."
    ],
    "a": "It has many desks, computers, and bright lights."
  },
  {
    "q": "3. What do workers do when they arrive early?",
    "opts": [
      "They answer emails and make phone calls.",
      "They greet each other and start their tasks.",
      "They work in a modern office every day.",
      "It has many desks, computers, and bright lights."
    ],
    "a": "They greet each other and start their tasks."
  },
  {
    "q": "4. What communication tasks do employees do?",
    "opts": [
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks.",
      "They answer emails and make phone calls.",
      "They work in a modern office every day."
    ],
    "a": "They answer emails and make phone calls."
  },
  {
    "q": "5. What do some employees do with customers?",
    "opts": [
      "They work in a modern office every day.",
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks.",
      "Some employees talk with customers."
    ],
    "a": "Some employees talk with customers."
  },
  {
    "q": "6. What helps make daily work easier and faster?",
    "opts": [
      "Good teamwork makes daily work easier and faster.",
      "They work in a modern office every day.",
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks."
    ],
    "a": "Good teamwork makes daily work easier and faster."
  },
  {
    "q": "7. What do workers do in the afternoon?",
    "opts": [
      "They greet each other and start their tasks.",
      "They finish important tasks and organize their desks.",
      "They work in a modern office every day.",
      "It has many desks, computers, and bright lights."
    ],
    "a": "They finish important tasks and organize their desks."
  },
  {
    "q": "8. What does a manager do?",
    "opts": [
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks.",
      "A manager leads the team and makes important decisions.",
      "They work in a modern office every day."
    ],
    "a": "A manager leads the team and makes important decisions."
  },
  {
    "q": "9. What does an accountant check?",
    "opts": [
      "They work in a modern office every day.",
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks.",
      "An accountant checks money and financial records."
    ],
    "a": "An accountant checks money and financial records."
  },
  {
    "q": "10. What does a secretary do?",
    "opts": [
      "A secretary answers calls and arranges meetings.",
      "They work in a modern office every day.",
      "It has many desks, computers, and bright lights.",
      "They greet each other and start their tasks."
    ],
    "a": "A secretary answers calls and arranges meetings."
  },
  {
    "q": "11. What is the Vietnamese meaning of “office”?",
    "opts": [
      "bàn làm việc",
      "văn phòng",
      "ngày",
      "có"
    ],
    "a": "văn phòng"
  },
  {
    "q": "12. What is the Vietnamese meaning of “people”?",
    "opts": [
      "bàn làm việc",
      "máy tính",
      "mọi người",
      "có"
    ],
    "a": "mọi người"
  },
  {
    "q": "13. What is the Vietnamese meaning of “modern”?",
    "opts": [
      "bàn làm việc",
      "máy tính",
      "và",
      "hiện đại"
    ],
    "a": "hiện đại"
  },
  {
    "q": "14. What is the Vietnamese meaning of “desks”?",
    "opts": [
      "bàn làm việc",
      "máy tính",
      "và",
      "sáng"
    ],
    "a": "bàn làm việc"
  },
  {
    "q": "15. What is the Vietnamese meaning of “computers”?",
    "opts": [
      "đèn",
      "máy tính",
      "và",
      "sáng"
    ],
    "a": "máy tính"
  },
  {
    "q": "16. Choose the best word: Employees _____ emails, make phone calls, write reports, and attend meetings.",
    "opts": [
      "has",
      "arrive",
      "answer",
      "work"
    ],
    "a": "answer"
  },
  {
    "q": "17. Choose the best word: Employees answer _____, make phone calls, write reports, and attend meetings.",
    "opts": [
      "office",
      "people",
      "day",
      "emails"
    ],
    "a": "emails"
  },
  {
    "q": "18. Choose the best word: Employees answer emails, _____ phone calls, write reports, and attend meetings.",
    "opts": [
      "make",
      "work",
      "has",
      "arrive"
    ],
    "a": "make"
  },
  {
    "q": "19. Choose the best word: Employees answer emails, make _____ calls, write reports, and attend meetings.",
    "opts": [
      "day",
      "phone",
      "office",
      "people"
    ],
    "a": "phone"
  },
  {
    "q": "20. Choose the best word: Employees answer emails, make phone _____, write reports, and attend meetings.",
    "opts": [
      "people",
      "day",
      "calls",
      "office"
    ],
    "a": "calls"
  }
];

const newEx3Data = [
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "office",
    "mean": "văn phòng"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "modern",
    "mean": "hiện đại"
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
    "word": "has",
    "mean": "có"
  },
  {
    "word": "desks",
    "mean": "bàn làm việc"
  },
  {
    "word": "computers",
    "mean": "máy tính"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "bright",
    "mean": "sáng"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "early",
    "mean": "sớm"
  },
  {
    "word": "greet",
    "mean": "chào hỏi"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "stays",
    "mean": "duy trì; vẫn ở trạng thái"
  },
  {
    "word": "during",
    "mean": "trong suốt"
  },
  {
    "word": "whole",
    "mean": "toàn bộ"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "employees",
    "mean": "nhân viên"
  },
  {
    "word": "answer",
    "mean": "trả lời"
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
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "calls",
    "mean": "cuộc gọi"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "reports",
    "mean": "báo cáo"
  },
  {
    "word": "attend",
    "mean": "tham dự"
  },
  {
    "word": "meetings",
    "mean": "các cuộc họp"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "documents",
    "mean": "tài liệu"
  },
  {
    "word": "help",
    "mean": "giúp"
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
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "afternoon",
    "mean": "buổi chiều"
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
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "leaving",
    "mean": "việc rời đi"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "tomorrow's",
    "mean": "của ngày mai"
  },
  {
    "word": "schedule",
    "mean": "lịch trình"
  },
  {
    "word": "say",
    "mean": "nói"
  },
  {
    "word": "goodbye",
    "mean": "lời chào tạm biệt"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "planning",
    "mean": "việc lập kế hoạch"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "worker",
    "mean": "nhân viên"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "duties",
    "mean": "nhiệm vụ"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "one",
    "mean": "một người; một"
  },
  {
    "word": "another",
    "mean": "người khác; lẫn nhau"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "business",
    "mean": "kinh doanh"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "manager",
    "mean": "quản lý"
  },
  {
    "word": "leads",
    "mean": "dẫn dắt"
  },
  {
    "word": "team",
    "mean": "nhóm"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "accountant",
    "mean": "kế toán"
  },
  {
    "word": "checks",
    "mean": "kiểm tra"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "financial",
    "mean": "tài chính"
  },
  {
    "word": "records",
    "mean": "hồ sơ"
  },
  {
    "word": "secretary",
    "mean": "thư ký"
  },
  {
    "word": "answers",
    "mean": "trả lời"
  },
  {
    "word": "arranges",
    "mean": "sắp xếp"
  },
  {
    "word": "salesperson",
    "mean": "nhân viên bán hàng"
  },
  {
    "word": "talks",
    "mean": "nói chuyện"
  },
  {
    "word": "sells",
    "mean": "bán"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "services",
    "mean": "dịch vụ"
  },
  {
    "word": "job",
    "mean": "công việc"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "responsibilities",
    "mean": "trách nhiệm"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "organized",
    "mean": "có tổ chức; ngăn nắp"
  },
  {
    "word": "successfully",
    "mean": "một cách thành công"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "workplace",
    "mean": "nơi làm việc"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "machines",
    "mean": "máy móc"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "correctly",
    "mean": "đúng cách"
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
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "send",
    "mean": "gửi"
  },
  {
    "word": "store",
    "mean": "lưu trữ"
  },
  {
    "word": "printers",
    "mean": "máy in"
  },
  {
    "word": "paper",
    "mean": "giấy"
  },
  {
    "word": "copies",
    "mean": "bản sao"
  },
  {
    "word": "telephones",
    "mean": "điện thoại"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "photocopiers",
    "mean": "máy photocopy"
  },
  {
    "word": "produce",
    "mean": "sản xuất"
  },
  {
    "word": "extra",
    "mean": "thêm"
  },
  {
    "word": "files",
    "mean": "tệp; hồ sơ"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "instructions",
    "mean": "hướng dẫn"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "reporting",
    "mean": "việc báo cáo"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "damage",
    "mean": "hư hỏng"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "productive",
    "mean": "năng suất; hiệu quả"
  }
];

const newEx4Data = [
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "office",
    "mean": "văn phòng"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "modern",
    "mean": "hiện đại"
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
    "word": "has",
    "mean": "có"
  },
  {
    "word": "desks",
    "mean": "bàn làm việc"
  },
  {
    "word": "computers",
    "mean": "máy tính"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "bright",
    "mean": "sáng"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "early",
    "mean": "sớm"
  },
  {
    "word": "greet",
    "mean": "chào hỏi"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "stays",
    "mean": "duy trì; vẫn ở trạng thái"
  },
  {
    "word": "during",
    "mean": "trong suốt"
  },
  {
    "word": "whole",
    "mean": "toàn bộ"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "employees",
    "mean": "nhân viên"
  },
  {
    "word": "answer",
    "mean": "trả lời"
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
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "calls",
    "mean": "cuộc gọi"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "reports",
    "mean": "báo cáo"
  },
  {
    "word": "attend",
    "mean": "tham dự"
  },
  {
    "word": "meetings",
    "mean": "các cuộc họp"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "documents",
    "mean": "tài liệu"
  },
  {
    "word": "help",
    "mean": "giúp"
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
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "teamwork",
    "mean": "tinh thần đồng đội"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "afternoon",
    "mean": "buổi chiều"
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
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "leaving",
    "mean": "việc rời đi"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "tomorrow's",
    "mean": "của ngày mai"
  },
  {
    "word": "schedule",
    "mean": "lịch trình"
  },
  {
    "word": "say",
    "mean": "nói"
  },
  {
    "word": "goodbye",
    "mean": "lời chào tạm biệt"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "communication",
    "mean": "sự giao tiếp"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "planning",
    "mean": "việc lập kế hoạch"
  },
  {
    "word": "single",
    "mean": "duy nhất"
  },
  {
    "word": "jobs",
    "mean": "công việc"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "worker",
    "mean": "nhân viên"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "duties",
    "mean": "nhiệm vụ"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "company",
    "mean": "công ty"
  },
  {
    "word": "succeed",
    "mean": "thành công"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "one",
    "mean": "một người; một"
  },
  {
    "word": "another",
    "mean": "người khác; lẫn nhau"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "business",
    "mean": "kinh doanh"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "manager",
    "mean": "quản lý"
  },
  {
    "word": "leads",
    "mean": "dẫn dắt"
  },
  {
    "word": "team",
    "mean": "nhóm"
  },
  {
    "word": "decisions",
    "mean": "quyết định"
  },
  {
    "word": "accountant",
    "mean": "kế toán"
  },
  {
    "word": "checks",
    "mean": "kiểm tra"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "financial",
    "mean": "tài chính"
  },
  {
    "word": "records",
    "mean": "hồ sơ"
  },
  {
    "word": "secretary",
    "mean": "thư ký"
  },
  {
    "word": "answers",
    "mean": "trả lời"
  },
  {
    "word": "arranges",
    "mean": "sắp xếp"
  },
  {
    "word": "salesperson",
    "mean": "nhân viên bán hàng"
  },
  {
    "word": "talks",
    "mean": "nói chuyện"
  },
  {
    "word": "sells",
    "mean": "bán"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "services",
    "mean": "dịch vụ"
  },
  {
    "word": "job",
    "mean": "công việc"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "responsibilities",
    "mean": "trách nhiệm"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "organized",
    "mean": "có tổ chức; ngăn nắp"
  },
  {
    "word": "successfully",
    "mean": "một cách thành công"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "workplace",
    "mean": "nơi làm việc"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "machines",
    "mean": "máy móc"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "correctly",
    "mean": "đúng cách"
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
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "send",
    "mean": "gửi"
  },
  {
    "word": "store",
    "mean": "lưu trữ"
  },
  {
    "word": "printers",
    "mean": "máy in"
  },
  {
    "word": "paper",
    "mean": "giấy"
  },
  {
    "word": "copies",
    "mean": "bản sao"
  },
  {
    "word": "telephones",
    "mean": "điện thoại"
  },
  {
    "word": "speak",
    "mean": "nói"
  },
  {
    "word": "photocopiers",
    "mean": "máy photocopy"
  },
  {
    "word": "produce",
    "mean": "sản xuất"
  },
  {
    "word": "extra",
    "mean": "thêm"
  },
  {
    "word": "files",
    "mean": "tệp; hồ sơ"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "instructions",
    "mean": "hướng dẫn"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "reporting",
    "mean": "việc báo cáo"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "damage",
    "mean": "hư hỏng"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "productive",
    "mean": "năng suất; hiệu quả"
  }
];

const newEx5Data = [
  "Employees answer emails, make phone calls, write reports, and attend meetings.",
  "In the afternoon, workers finish important tasks and organize their desks.",
  "A salesperson talks with customers and sells products or useful services.",
  "Every office job is important because each person has different responsibilities.",
  "An office has many useful machines and tools for daily work.",
  "Photocopiers produce extra copies for meetings and office files every day.",
  "Workers arrive early, greet each other, and start their tasks.",
  "Good teamwork makes daily work easier and faster for everyone.",
  "Each worker has special duties and helps the company succeed.",
  "Employees use different equipment to finish tasks quickly and correctly."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Many people work in a modern office every day."
  },
  {
    "id": 2,
    "correct": "The office has many desks, computers, and bright lights."
  },
  {
    "id": 3,
    "correct": "Workers arrive early, greet each other, and start their tasks."
  },
  {
    "id": 4,
    "correct": "Everyone stays busy during the whole morning together."
  },
  {
    "id": 5,
    "correct": "Employees answer emails, make phone calls, write reports, and attend meetings."
  },
  {
    "id": 6,
    "correct": "Some talk with customers, while others prepare documents."
  },
  {
    "id": 7,
    "correct": "They help each other when needed."
  },
  {
    "id": 8,
    "correct": "Good teamwork makes daily work easier and faster for everyone."
  },
  {
    "id": 9,
    "correct": "In the afternoon, workers finish important tasks and organize their desks."
  },
  {
    "id": 10,
    "correct": "Before leaving, they check tomorrow's schedule and say goodbye."
  },
  {
    "id": 11,
    "correct": "A busy office needs responsible people, clear communication, and careful planning every single day."
  },
  {
    "id": 12,
    "correct": "Many people have different jobs in an office."
  },
  {
    "id": 13,
    "correct": "Each worker has special duties and helps the company succeed."
  },
  {
    "id": 14,
    "correct": "They work together every day, share information, and support one another to complete important business tasks well."
  },
  {
    "id": 15,
    "correct": "A manager leads the team and makes important decisions."
  }
];

const newEx7Data = [
  {
    "q": "Where do many people work every day?",
    "a": "They work in a modern office every day."
  },
  {
    "q": "What equipment and furniture does the office have?",
    "a": "It has many desks, computers, and bright lights."
  },
  {
    "q": "What do workers do when they arrive early?",
    "a": "They greet each other and start their tasks."
  },
  {
    "q": "What communication tasks do employees do?",
    "a": "They answer emails and make phone calls."
  },
  {
    "q": "What do some employees do with customers?",
    "a": "Some employees talk with customers."
  },
  {
    "q": "What helps make daily work easier and faster?",
    "a": "Good teamwork makes daily work easier and faster."
  },
  {
    "q": "What do workers do in the afternoon?",
    "a": "They finish important tasks and organize their desks."
  },
  {
    "q": "What does a manager do?",
    "a": "A manager leads the team and makes important decisions."
  },
  {
    "q": "What does an accountant check?",
    "a": "An accountant checks money and financial records."
  },
  {
    "q": "What does a secretary do?",
    "a": "A secretary answers calls and arranges meetings."
  }
];

