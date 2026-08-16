// ===== money03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Paying with cash can also help people see clearly how much money they are _____.",
    "a": "spending"
  },
  {
    "q": "2. Bank cards and digital payments are _____ because people do not need to carry much cash.",
    "a": "convenient"
  },
  {
    "q": "3. They should also check their bank accounts _____ to find mistakes or unusual payments.",
    "a": "regularly"
  },
  {
    "q": "4. The amount of money a person earns often depends on their skills, education, experience, and _____.",
    "a": "responsibilities"
  },
  {
    "q": "5. They need to pay for _____ expenses, save for the future, and avoid wasting money.",
    "a": "important"
  },
  {
    "q": "6. A person may suddenly become sick, lose a job, or need to repair a _____ or household item.",
    "a": "motorbike"
  },
  {
    "q": "7. It also gives families a feeling of safety and reduces _____ stress during difficult times.",
    "a": "financial"
  },
  {
    "q": "8. People can build an _____ fund by saving a small amount from their income each month.",
    "a": "emergency"
  },
  {
    "q": "9. The money should be kept in a safe place and used only for real _____.",
    "a": "emergencies"
  },
  {
    "q": "10. It allows families to buy food, receive medical care, study, travel, and enjoy different _____.",
    "a": "activities"
  },
  {
    "q": "11. Money is valuable, but _____ also comes from kindness, gratitude, and time with loved ones.",
    "a": "happiness"
  },
  {
    "q": "12. _____ includes coins and banknotes that people can hold and use directly in everyday financial life.",
    "a": "cash"
  },
  {
    "q": "13. It is simple _____ useful for small purchases in everyday financial life in everyday financial life.",
    "a": "and"
  },
  {
    "q": "14. Paying with cash can also help _____ see clearly how much money they are spending.",
    "a": "people"
  },
  {
    "q": "15. _____ cards and digital payments are convenient because people do not need to carry much cash.",
    "a": "bank"
  },
  {
    "q": "16. They _____ pay for products in shops or online in everyday financial life in everyday financial life.",
    "a": "can"
  },
  {
    "q": "17. _____, users must protect their passwords and personal banking information in everyday financial life.",
    "a": "however"
  },
  {
    "q": "18. _____ payment methods have advantages and disadvantages in everyday financial life in everyday financial life.",
    "a": "both"
  },
  {
    "q": "19. People _____ choose the safest and most suitable method for each situation in everyday financial life.",
    "a": "should"
  },
  {
    "q": "20. They should _____ check their bank accounts regularly to find mistakes or unusual payments.",
    "a": "also"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the best Vietnamese meaning of \"using\"?",
    "opts": [
      "việc sử dụng",
      "cũng",
      "bởi vì",
      "người dùng"
    ],
    "a": "việc sử dụng"
  },
  {
    "q": "2. What is the best Vietnamese meaning of \"cards\"?",
    "opts": [
      "việc chi tiêu",
      "cửa hàng",
      "cả hai",
      "thẻ ngân hàng"
    ],
    "a": "thẻ ngân hàng"
  },
  {
    "q": "3. What is the best Vietnamese meaning of \"people\"?",
    "opts": [
      "mật khẩu",
      "chọn",
      "mọi người",
      "cần; nhu cầu"
    ],
    "a": "mọi người"
  },
  {
    "q": "4. What is the best Vietnamese meaning of \"directly\"?",
    "opts": [
      "kiểm tra",
      "trực tiếp",
      "tuy nhiên",
      "có; dùng"
    ],
    "a": "trực tiếp"
  },
  {
    "q": "5. What is the best Vietnamese meaning of \"purchases\"?",
    "opts": [
      "các khoản mua; hàng mua",
      "thông tin",
      "phù hợp",
      "hoạt động; làm việc"
    ],
    "a": "các khoản mua; hàng mua"
  },
  {
    "q": "6. What is the best Vietnamese meaning of \"see\"?",
    "opts": [
      "nên",
      "phát hiện; tìm thấy",
      "trường học",
      "nhìn thấy"
    ],
    "a": "nhìn thấy"
  },
  {
    "q": "7. What is the best Vietnamese meaning of \"money\"?",
    "opts": [
      "làm việc",
      "số tiền; lượng",
      "tiền",
      "tình huống"
    ],
    "a": "tiền"
  },
  {
    "q": "8. What is the best Vietnamese meaning of \"convenient\"?",
    "opts": [
      "trải nghiệm",
      "thuận tiện",
      "việc kiếm tiền",
      "một ít; một số"
    ],
    "a": "thuận tiện"
  },
  {
    "q": "9. What is the best Vietnamese meaning of \"need\"?",
    "opts": [
      "cần; nhu cầu",
      "nhà máy",
      "thường",
      "tốt"
    ],
    "a": "cần; nhu cầu"
  },
  {
    "q": "10. What is the best Vietnamese meaning of \"shops\"?",
    "opts": [
      "nơi sinh sống; nhà",
      "mới",
      "thời gian",
      "cửa hàng"
    ],
    "a": "cửa hàng"
  },
  {
    "q": "11. Which sentence uses \"hold\" in the lesson context?",
    "opts": [
      "People should ignore hold in every financial decision.",
      "The reading says hold has no connection with the lesson.",
      "For a family budget, cash includes coins and banknotes that people can hold and use directly.",
      "The word hold is never used in daily money situations."
    ],
    "a": "For a family budget, cash includes coins and banknotes that people can hold and use directly."
  },
  {
    "q": "12. Which sentence uses \"use\" in the lesson context?",
    "opts": [
      "The reading says use has no connection with the lesson.",
      "When making daily choices, cash includes coins and banknotes that people can hold and use directly.",
      "The word use is never used in daily money situations.",
      "People should ignore use in every financial decision."
    ],
    "a": "When making daily choices, cash includes coins and banknotes that people can hold and use directly."
  },
  {
    "q": "13. Which sentence uses \"directly\" in the lesson context?",
    "opts": [
      "In practical life, cash includes coins and banknotes that people can hold and use directly.",
      "The word directly is never used in daily money situations.",
      "People should ignore directly in every financial decision.",
      "The reading says directly has no connection with the lesson."
    ],
    "a": "In practical life, cash includes coins and banknotes that people can hold and use directly."
  },
  {
    "q": "14. Which sentence uses \"simple\" in the lesson context?",
    "opts": [
      "The word simple is never used in daily money situations.",
      "People should ignore simple in every financial decision.",
      "The reading says simple has no connection with the lesson.",
      "For smart spending, it is simple and useful for small purchases."
    ],
    "a": "For smart spending, it is simple and useful for small purchases."
  },
  {
    "q": "15. Which sentence uses \"useful\" in the lesson context?",
    "opts": [
      "People should ignore useful in every financial decision.",
      "The reading says useful has no connection with the lesson.",
      "When saving money, it is simple and useful for small purchases.",
      "The word useful is never used in daily money situations."
    ],
    "a": "When saving money, it is simple and useful for small purchases."
  },
  {
    "q": "16. Which sentence uses \"small\" in the lesson context?",
    "opts": [
      "The reading says small has no connection with the lesson.",
      "In ordinary shopping, it is simple and useful for small purchases.",
      "The word small is never used in daily money situations.",
      "People should ignore small in every financial decision."
    ],
    "a": "In ordinary shopping, it is simple and useful for small purchases."
  },
  {
    "q": "17. Which sentence uses \"purchases\" in the lesson context?",
    "opts": [
      "For good financial habits, it is simple and useful for small purchases.",
      "The word purchases is never used in daily money situations.",
      "People should ignore purchases in every financial decision.",
      "The reading says purchases has no connection with the lesson."
    ],
    "a": "For good financial habits, it is simple and useful for small purchases."
  },
  {
    "q": "18. Which sentence uses \"paying\" in the lesson context?",
    "opts": [
      "The word paying is never used in daily money situations.",
      "People should ignore paying in every financial decision.",
      "The reading says paying has no connection with the lesson.",
      "When people plan expenses, paying with cash can also help people see clearly how much money they are spending."
    ],
    "a": "When people plan expenses, paying with cash can also help people see clearly how much money they are spending."
  },
  {
    "q": "19. Which sentence uses \"also\" in the lesson context?",
    "opts": [
      "People should ignore also in every financial decision.",
      "The reading says also has no connection with the lesson.",
      "In a careful household plan, paying with cash can also help people see clearly how much money they are spending.",
      "The word also is never used in daily money situations."
    ],
    "a": "In a careful household plan, paying with cash can also help people see clearly how much money they are spending."
  },
  {
    "q": "20. Which sentence uses \"help\" in the lesson context?",
    "opts": [
      "The reading says help has no connection with the lesson.",
      "For everyday financial decisions, paying with cash can also help people see clearly how much money they are spending.",
      "The word help is never used in daily money situations.",
      "People should ignore help in every financial decision."
    ],
    "a": "For everyday financial decisions, paying with cash can also help people see clearly how much money they are spending."
  }
];

const newEx3Data = [
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "cash",
    "mean": "tiền mặt"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "bank",
    "mean": "ngân hàng"
  },
  {
    "word": "cards",
    "mean": "thẻ ngân hàng"
  },
  {
    "word": "includes",
    "mean": "bao gồm"
  },
  {
    "word": "coins",
    "mean": "tiền xu"
  },
  {
    "word": "banknotes",
    "mean": "tiền giấy"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "hold",
    "mean": "cầm; giữ"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "directly",
    "mean": "trực tiếp"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "purchases",
    "mean": "các khoản mua; hàng mua"
  },
  {
    "word": "paying",
    "mean": "việc chú ý; đang trả"
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
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "how",
    "mean": "như thế nào"
  },
  {
    "word": "much",
    "mean": "nhiều"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "spending",
    "mean": "việc chi tiêu"
  },
  {
    "word": "digital",
    "mean": "kỹ thuật số"
  },
  {
    "word": "payments",
    "mean": "các khoản thanh toán"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "because",
    "mean": "bởi vì"
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
    "mean": "cần; nhu cầu"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "users",
    "mean": "người dùng"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "passwords",
    "mean": "mật khẩu"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "banking",
    "mean": "thuộc ngân hàng"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "payment",
    "mean": "thanh toán"
  },
  {
    "word": "methods",
    "mean": "phương thức"
  },
  {
    "word": "have",
    "mean": "có; dùng"
  },
  {
    "word": "advantages",
    "mean": "ưu điểm"
  },
  {
    "word": "disadvantages",
    "mean": "nhược điểm"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "safest",
    "mean": "an toàn nhất"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "method",
    "mean": "phương pháp; cách thức"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "situation",
    "mean": "tình huống"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "accounts",
    "mean": "tài khoản"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "unusual",
    "mean": "bất thường"
  },
  {
    "word": "earning",
    "mean": "việc kiếm tiền"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "adults",
    "mean": "người lớn"
  },
  {
    "word": "earn",
    "mean": "kiếm tiền; kiếm được"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "offices",
    "mean": "các văn phòng"
  },
  {
    "word": "factories",
    "mean": "nhà máy"
  },
  {
    "word": "schools",
    "mean": "trường học"
  },
  {
    "word": "hospitals",
    "mean": "bệnh viện"
  },
  {
    "word": "farms",
    "mean": "các nông trại"
  },
  {
    "word": "some",
    "mean": "một ít; một số"
  },
  {
    "word": "run",
    "mean": "điều hành; chạy"
  },
  {
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "amount",
    "mean": "số tiền; lượng"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "earns",
    "mean": "kiếm được"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "depends",
    "mean": "phụ thuộc"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "responsibilities",
    "mean": "trách nhiệm"
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
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "opportunities",
    "mean": "cơ hội"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "willing",
    "mean": "sẵn sàng"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "requires",
    "mean": "đòi hỏi"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "effort",
    "mean": "nỗ lực"
  },
  {
    "word": "so",
    "mean": "vì vậy"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "expenses",
    "mean": "chi phí"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "wasting",
    "mean": "việc lãng phí"
  },
  {
    "word": "respecting",
    "mean": "việc tôn trọng"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "value",
    "mean": "trân trọng; coi trọng"
  },
  {
    "word": "importance",
    "mean": "tầm quan trọng"
  },
  {
    "word": "emergency",
    "mean": "khẩn cấp"
  },
  {
    "word": "savings",
    "mean": "khoản tiết kiệm"
  },
  {
    "word": "kept",
    "mean": "được giữ"
  },
  {
    "word": "unexpected",
    "mean": "bất ngờ; không dự kiến"
  },
  {
    "word": "situations",
    "mean": "tình huống"
  },
  {
    "word": "suddenly",
    "mean": "đột nhiên"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "sick",
    "mean": "ốm; bị bệnh"
  },
  {
    "word": "lose",
    "mean": "mất"
  },
  {
    "word": "job",
    "mean": "công việc"
  },
  {
    "word": "repair",
    "mean": "sửa chữa"
  },
  {
    "word": "motorbike",
    "mean": "xe máy"
  },
  {
    "word": "household",
    "mean": "thuộc gia đình; đồ dùng gia đình"
  },
  {
    "word": "item",
    "mean": "món hàng; vật"
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
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "warning",
    "mean": "cảnh báo"
  },
  {
    "word": "having",
    "mean": "việc có; đang có"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "urgent",
    "mean": "khẩn cấp"
  },
  {
    "word": "borrowing",
    "mean": "việc vay"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
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
    "word": "feeling",
    "mean": "cảm xúc"
  },
  {
    "word": "safety",
    "mean": "sự an toàn"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "financial",
    "mean": "thuộc tài chính"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
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
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "fund",
    "mean": "quỹ"
  },
  {
    "word": "saving",
    "mean": "việc tiết kiệm"
  },
  {
    "word": "income",
    "mean": "thu nhập"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "real",
    "mean": "thực tế; thật"
  },
  {
    "word": "emergencies",
    "mean": "trường hợp khẩn cấp"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "protection",
    "mean": "sự bảo vệ"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "meet",
    "mean": "gặp gỡ"
  },
  {
    "word": "needs",
    "mean": "nhu cầu; cần"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "receive",
    "mean": "nhận"
  },
  {
    "word": "medical",
    "mean": "thuộc y tế"
  },
  {
    "word": "care",
    "mean": "quan tâm"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "travel",
    "mean": "du lịch; việc đi lại"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "stability",
    "mean": "sự ổn định"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "worry",
    "mean": "sự lo lắng"
  },
  {
    "word": "alone",
    "mean": "một mình; chỉ riêng"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "truly",
    "mean": "thật sự"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
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
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "lonely",
    "mean": "cô đơn"
  },
  {
    "word": "unhappy",
    "mean": "không vui"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "spend",
    "mean": "chi tiêu"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "possible",
    "mean": "có thể; khả thi"
  },
  {
    "word": "valuable",
    "mean": "quý giá"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "comes",
    "mean": "đến"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "loved",
    "mean": "được yêu thương"
  },
  {
    "word": "ones",
    "mean": "những người; những thứ"
  }
];

const newEx4Data = [
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "cash",
    "mean": "tiền mặt"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "bank",
    "mean": "ngân hàng"
  },
  {
    "word": "cards",
    "mean": "thẻ ngân hàng"
  },
  {
    "word": "includes",
    "mean": "bao gồm"
  },
  {
    "word": "coins",
    "mean": "tiền xu"
  },
  {
    "word": "banknotes",
    "mean": "tiền giấy"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "hold",
    "mean": "cầm; giữ"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "directly",
    "mean": "trực tiếp"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "purchases",
    "mean": "các khoản mua; hàng mua"
  },
  {
    "word": "paying",
    "mean": "việc chú ý; đang trả"
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
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "clearly",
    "mean": "rõ ràng"
  },
  {
    "word": "how",
    "mean": "như thế nào"
  },
  {
    "word": "much",
    "mean": "nhiều"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "spending",
    "mean": "việc chi tiêu"
  },
  {
    "word": "digital",
    "mean": "kỹ thuật số"
  },
  {
    "word": "payments",
    "mean": "các khoản thanh toán"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "because",
    "mean": "bởi vì"
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
    "mean": "cần; nhu cầu"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "online",
    "mean": "trực tuyến"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "users",
    "mean": "người dùng"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "passwords",
    "mean": "mật khẩu"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "banking",
    "mean": "thuộc ngân hàng"
  },
  {
    "word": "information",
    "mean": "thông tin"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "payment",
    "mean": "thanh toán"
  },
  {
    "word": "methods",
    "mean": "phương thức"
  },
  {
    "word": "have",
    "mean": "có; dùng"
  },
  {
    "word": "advantages",
    "mean": "ưu điểm"
  },
  {
    "word": "disadvantages",
    "mean": "nhược điểm"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "safest",
    "mean": "an toàn nhất"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "method",
    "mean": "phương pháp; cách thức"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "situation",
    "mean": "tình huống"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "accounts",
    "mean": "tài khoản"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "mistakes",
    "mean": "sai lầm"
  },
  {
    "word": "unusual",
    "mean": "bất thường"
  },
  {
    "word": "earning",
    "mean": "việc kiếm tiền"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "adults",
    "mean": "người lớn"
  },
  {
    "word": "earn",
    "mean": "kiếm tiền; kiếm được"
  },
  {
    "word": "working",
    "mean": "làm việc"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "offices",
    "mean": "các văn phòng"
  },
  {
    "word": "factories",
    "mean": "nhà máy"
  },
  {
    "word": "schools",
    "mean": "trường học"
  },
  {
    "word": "hospitals",
    "mean": "bệnh viện"
  },
  {
    "word": "farms",
    "mean": "các nông trại"
  },
  {
    "word": "some",
    "mean": "một ít; một số"
  },
  {
    "word": "run",
    "mean": "điều hành; chạy"
  },
  {
    "word": "businesses",
    "mean": "doanh nghiệp"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "amount",
    "mean": "số tiền; lượng"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "earns",
    "mean": "kiếm được"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "depends",
    "mean": "phụ thuộc"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "responsibilities",
    "mean": "trách nhiệm"
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
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "opportunities",
    "mean": "cơ hội"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "honest",
    "mean": "trung thực"
  },
  {
    "word": "willing",
    "mean": "sẵn sàng"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "requires",
    "mean": "đòi hỏi"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "effort",
    "mean": "nỗ lực"
  },
  {
    "word": "so",
    "mean": "vì vậy"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "expenses",
    "mean": "chi phí"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "wasting",
    "mean": "việc lãng phí"
  },
  {
    "word": "respecting",
    "mean": "việc tôn trọng"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "value",
    "mean": "trân trọng; coi trọng"
  },
  {
    "word": "importance",
    "mean": "tầm quan trọng"
  },
  {
    "word": "emergency",
    "mean": "khẩn cấp"
  },
  {
    "word": "savings",
    "mean": "khoản tiết kiệm"
  },
  {
    "word": "kept",
    "mean": "được giữ"
  },
  {
    "word": "unexpected",
    "mean": "bất ngờ; không dự kiến"
  },
  {
    "word": "situations",
    "mean": "tình huống"
  },
  {
    "word": "suddenly",
    "mean": "đột nhiên"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "sick",
    "mean": "ốm; bị bệnh"
  },
  {
    "word": "lose",
    "mean": "mất"
  },
  {
    "word": "job",
    "mean": "công việc"
  },
  {
    "word": "repair",
    "mean": "sửa chữa"
  },
  {
    "word": "motorbike",
    "mean": "xe máy"
  },
  {
    "word": "household",
    "mean": "thuộc gia đình; đồ dùng gia đình"
  },
  {
    "word": "item",
    "mean": "món hàng; vật"
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
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "warning",
    "mean": "cảnh báo"
  },
  {
    "word": "having",
    "mean": "việc có; đang có"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "urgent",
    "mean": "khẩn cấp"
  },
  {
    "word": "borrowing",
    "mean": "việc vay"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
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
    "word": "feeling",
    "mean": "cảm xúc"
  },
  {
    "word": "safety",
    "mean": "sự an toàn"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "financial",
    "mean": "thuộc tài chính"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
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
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "fund",
    "mean": "quỹ"
  },
  {
    "word": "saving",
    "mean": "việc tiết kiệm"
  },
  {
    "word": "income",
    "mean": "thu nhập"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "real",
    "mean": "thực tế; thật"
  },
  {
    "word": "emergencies",
    "mean": "trường hợp khẩn cấp"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "protection",
    "mean": "sự bảo vệ"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "meet",
    "mean": "gặp gỡ"
  },
  {
    "word": "needs",
    "mean": "nhu cầu; cần"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "receive",
    "mean": "nhận"
  },
  {
    "word": "medical",
    "mean": "thuộc y tế"
  },
  {
    "word": "care",
    "mean": "quan tâm"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "travel",
    "mean": "du lịch; việc đi lại"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "stability",
    "mean": "sự ổn định"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "worry",
    "mean": "sự lo lắng"
  },
  {
    "word": "alone",
    "mean": "một mình; chỉ riêng"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "truly",
    "mean": "thật sự"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
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
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "lonely",
    "mean": "cô đơn"
  },
  {
    "word": "unhappy",
    "mean": "không vui"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "spend",
    "mean": "chi tiêu"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "possible",
    "mean": "có thể; khả thi"
  },
  {
    "word": "valuable",
    "mean": "quý giá"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "comes",
    "mean": "đến"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "gratitude",
    "mean": "lòng biết ơn"
  },
  {
    "word": "loved",
    "mean": "được yêu thương"
  },
  {
    "word": "ones",
    "mean": "những người; những thứ"
  }
];

const newEx5Data = [
  "Cash includes coins and banknotes that people can hold and use directly.",
  "It is simple and useful for small purchases.",
  "They can pay for products in shops or online.",
  "However, users must protect their passwords and personal banking information.",
  "Both payment methods have advantages and disadvantages.",
  "People should choose the safest and most suitable method for each situation.",
  "They should also check their bank accounts regularly to find mistakes or unusual payments.",
  "Most adults earn money by working.",
  "They may work in offices, factories, schools, hospitals, shops, or farms.",
  "Some people also run businesses or work online from home."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Cash includes coins and banknotes that people can hold and use directly."
  },
  {
    "id": 2,
    "correct": "It is simple and useful for small purchases."
  },
  {
    "id": 3,
    "correct": "They can pay for products in shops or online."
  },
  {
    "id": 4,
    "correct": "However, users must protect their passwords and personal banking information."
  },
  {
    "id": 5,
    "correct": "Both payment methods have advantages and disadvantages."
  },
  {
    "id": 6,
    "correct": "People should choose the safest and most suitable method for each situation."
  },
  {
    "id": 7,
    "correct": "They should also check their bank accounts regularly to find mistakes or unusual payments."
  },
  {
    "id": 8,
    "correct": "Most adults earn money by working."
  },
  {
    "id": 9,
    "correct": "They may work in offices, factories, schools, hospitals, shops, or farms."
  },
  {
    "id": 10,
    "correct": "Some people also run businesses or work online from home."
  },
  {
    "id": 11,
    "correct": "Learning new skills can help workers find better opportunities."
  },
  {
    "id": 12,
    "correct": "Good workers are usually responsible, honest, and willing to improve."
  },
  {
    "id": 13,
    "correct": "Earning money requires time and effort, so people should use it carefully."
  },
  {
    "id": 14,
    "correct": "Respecting our work also teaches us to respect the value of money."
  },
  {
    "id": 15,
    "correct": "Emergency savings are money kept for unexpected situations."
  }
];

const newEx7Data = [
  {
    "q": "What does cash include?",
    "a": "Cash includes coins and banknotes that people can hold and use directly."
  },
  {
    "q": "Why are bank cards and digital payments convenient?",
    "a": "People do not need to carry much cash and can pay in shops or online."
  },
  {
    "q": "What information must users protect?",
    "a": "They must protect passwords and personal banking information."
  },
  {
    "q": "What should people do with their bank accounts?",
    "a": "They should check them regularly for mistakes or unusual payments."
  },
  {
    "q": "What can affect how much money a person earns?",
    "a": "Skills, education, experience, and responsibilities can affect earnings."
  },
  {
    "q": "Why should earned money be used carefully?",
    "a": "Earning money requires time and effort, and people need it for expenses and future savings."
  },
  {
    "q": "What are emergency savings for?",
    "a": "They are for unexpected situations such as illness, job loss, repairs, or other urgent costs."
  },
  {
    "q": "How can people build an emergency fund?",
    "a": "They can save a small amount from their income each month."
  },
  {
    "q": "Why does money alone not create a happy life?",
    "a": "People also need health, loving relationships, meaningful work, and time to relax."
  },
  {
    "q": "What is the balanced way to use money described in the reading?",
    "a": "People should spend responsibly, save for the future, and help others when possible."
  }
];

