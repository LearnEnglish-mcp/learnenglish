// ===== money01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Every day, people use money to pay for food, clothes, _____, education, and other important things.",
    "a": "transport"
  },
  {
    "q": "2. This method could be _____ because both people might not want what the other person has.",
    "a": "difficult"
  },
  {
    "q": "3. Money cannot buy love or true friendship, but it can make daily life easier and more _____.",
    "a": "comfortable"
  },
  {
    "q": "4. Families also need money to pay for _____, transport, education, and a safe place to live.",
    "a": "electricity"
  },
  {
    "q": "5. It can also help them prepare for important events, such as studying at _____, buying a house, or starting a small business.",
    "a": "university"
  },
  {
    "q": "6. We should see money as a useful tool and learn to manage it _____.",
    "a": "responsibly"
  },
  {
    "q": "7. Even putting a small amount into a box or bank account every day can make a _____.",
    "a": "difference"
  },
  {
    "q": "8. People can save money by bringing lunch from home, turning off unused lights, and avoiding _____ shopping.",
    "a": "unnecessary"
  },
  {
    "q": "9. Before buying _____, they should ask whether they truly need it or only want it.",
    "a": "something"
  },
  {
    "q": "10. It can _____ stress when we need to repair something or pay an urgent bill.",
    "a": "reduce"
  },
  {
    "q": "11. _____ is something people use to buy goods and services in everyday financial life.",
    "a": "money"
  },
  {
    "q": "12. It _____ be coins, banknotes, or digital money in a bank account in everyday financial life.",
    "a": "can"
  },
  {
    "q": "13. Every day, _____ use money to pay for food, clothes, transport, education, and other important things.",
    "a": "people"
  },
  {
    "q": "14. Money _____ helps us compare the prices of different products in everyday financial life.",
    "a": "also"
  },
  {
    "q": "15. Without money, people would need to exchange _____ directly in everyday financial life in everyday financial life.",
    "a": "goods"
  },
  {
    "q": "16. This method could be difficult because both people might not want _____ the other person has.",
    "a": "what"
  },
  {
    "q": "17. Money is important, but we should _____ it carefully in everyday financial life in everyday financial life.",
    "a": "use"
  },
  {
    "q": "18. We need to earn, save, _____ spend it wisely in everyday financial life in everyday financial life.",
    "a": "and"
  },
  {
    "q": "19. Money cannot _____ love or true friendship, but it can make daily life easier and more comfortable.",
    "a": "buy"
  },
  {
    "q": "20. People need money to _____ for their basic needs in everyday financial life in everyday financial life.",
    "a": "pay"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the best Vietnamese meaning of \"what\"?",
    "opts": [
      "gì; điều gì",
      "thanh toán",
      "giá cả",
      "bởi vì"
    ],
    "a": "gì; điều gì"
  },
  {
    "q": "2. What is the best Vietnamese meaning of \"use\"?",
    "opts": [
      "đồ vật; việc",
      "trực tiếp",
      "nhưng",
      "sử dụng"
    ],
    "a": "sử dụng"
  },
  {
    "q": "3. What is the best Vietnamese meaning of \"services\"?",
    "opts": [
      "không",
      "không thể",
      "dịch vụ",
      "không có; không bị"
    ],
    "a": "dịch vụ"
  },
  {
    "q": "4. What is the best Vietnamese meaning of \"or\"?",
    "opts": [
      "dễ hơn",
      "hoặc",
      "khó khăn",
      "kiếm tiền; kiếm được"
    ],
    "a": "hoặc"
  },
  {
    "q": "5. What is the best Vietnamese meaning of \"every\"?",
    "opts": [
      "mỗi",
      "có",
      "tình bạn",
      "nước"
    ],
    "a": "mỗi"
  },
  {
    "q": "6. What is the best Vietnamese meaning of \"clothes\"?",
    "opts": [
      "một cách khôn ngoan",
      "tại sao",
      "cho phép",
      "quần áo"
    ],
    "a": "quần áo"
  },
  {
    "q": "7. What is the best Vietnamese meaning of \"important\"?",
    "opts": [
      "điện",
      "trường đại học",
      "quan trọng",
      "cuộc sống"
    ],
    "a": "quan trọng"
  },
  {
    "q": "8. What is the best Vietnamese meaning of \"compare\"?",
    "opts": [
      "việc có; đang có",
      "so sánh",
      "nhu cầu; cần",
      "chuẩn bị"
    ],
    "a": "so sánh"
  },
  {
    "q": "9. What is the best Vietnamese meaning of \"without\"?",
    "opts": [
      "không có; không bị",
      "sống",
      "việc bắt đầu",
      "gia đình"
    ],
    "a": "không có; không bị"
  },
  {
    "q": "10. What is the best Vietnamese meaning of \"directly\"?",
    "opts": [
      "việc học; đang học",
      "có nghĩa là",
      "việc tiết kiệm",
      "trực tiếp"
    ],
    "a": "trực tiếp"
  },
  {
    "q": "11. Which sentence uses \"coins\" in the lesson context?",
    "opts": [
      "People should ignore coins in every financial decision.",
      "The reading says coins has no connection with the lesson.",
      "For a family budget, it can be coins, banknotes, or digital money in a bank account.",
      "The word coins is never used in daily money situations."
    ],
    "a": "For a family budget, it can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "12. Which sentence uses \"banknotes\" in the lesson context?",
    "opts": [
      "The reading says banknotes has no connection with the lesson.",
      "When making daily choices, it can be coins, banknotes, or digital money in a bank account.",
      "The word banknotes is never used in daily money situations.",
      "People should ignore banknotes in every financial decision."
    ],
    "a": "When making daily choices, it can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "13. Which sentence uses \"or\" in the lesson context?",
    "opts": [
      "In practical life, it can be coins, banknotes, or digital money in a bank account.",
      "The word or is never used in daily money situations.",
      "People should ignore or in every financial decision.",
      "The reading says or has no connection with the lesson."
    ],
    "a": "In practical life, it can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "14. Which sentence uses \"digital\" in the lesson context?",
    "opts": [
      "The word digital is never used in daily money situations.",
      "People should ignore digital in every financial decision.",
      "The reading says digital has no connection with the lesson.",
      "For smart spending, it can be coins, banknotes, or digital money in a bank account."
    ],
    "a": "For smart spending, it can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "15. Which sentence uses \"bank\" in the lesson context?",
    "opts": [
      "People should ignore bank in every financial decision.",
      "The reading says bank has no connection with the lesson.",
      "When saving money, it can be coins, banknotes, or digital money in a bank account.",
      "The word bank is never used in daily money situations."
    ],
    "a": "When saving money, it can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "16. Which sentence uses \"account\" in the lesson context?",
    "opts": [
      "The reading says account has no connection with the lesson.",
      "In ordinary shopping, it can be coins, banknotes, or digital money in a bank account.",
      "The word account is never used in daily money situations.",
      "People should ignore account in every financial decision."
    ],
    "a": "In ordinary shopping, it can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "17. Which sentence uses \"every\" in the lesson context?",
    "opts": [
      "For good financial habits, every day, people use money to pay for food, clothes, transport, education, and other important things.",
      "The word every is never used in daily money situations.",
      "People should ignore every in every financial decision.",
      "The reading says every has no connection with the lesson."
    ],
    "a": "For good financial habits, every day, people use money to pay for food, clothes, transport, education, and other important things."
  },
  {
    "q": "18. Which sentence uses \"day\" in the lesson context?",
    "opts": [
      "The word day is never used in daily money situations.",
      "People should ignore day in every financial decision.",
      "The reading says day has no connection with the lesson.",
      "When people plan expenses, every day, people use money to pay for food, clothes, transport, education, and other important things."
    ],
    "a": "When people plan expenses, every day, people use money to pay for food, clothes, transport, education, and other important things."
  },
  {
    "q": "19. Which sentence uses \"pay\" in the lesson context?",
    "opts": [
      "People should ignore pay in every financial decision.",
      "The reading says pay has no connection with the lesson.",
      "In a careful household plan, every day, people use money to pay for food, clothes, transport, education, and other important things.",
      "The word pay is never used in daily money situations."
    ],
    "a": "In a careful household plan, every day, people use money to pay for food, clothes, transport, education, and other important things."
  },
  {
    "q": "20. Which sentence uses \"food\" in the lesson context?",
    "opts": [
      "The reading says food has no connection with the lesson.",
      "For everyday financial decisions, every day, people use money to pay for food, clothes, transport, education, and other important things.",
      "The word food is never used in daily money situations.",
      "People should ignore food in every financial decision."
    ],
    "a": "For everyday financial decisions, every day, people use money to pay for food, clothes, transport, education, and other important things."
  }
];

const newEx3Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
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
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "goods",
    "mean": "hàng hóa"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "services",
    "mean": "dịch vụ"
  },
  {
    "word": "can",
    "mean": "có thể"
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
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "digital",
    "mean": "kỹ thuật số"
  },
  {
    "word": "bank",
    "mean": "ngân hàng"
  },
  {
    "word": "account",
    "mean": "tài khoản ngân hàng"
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
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "transport",
    "mean": "giao thông; phương tiện"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "other",
    "mean": "người khác; nhau"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "compare",
    "mean": "so sánh"
  },
  {
    "word": "prices",
    "mean": "giá cả"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "would",
    "mean": "sẽ; sẽ phải"
  },
  {
    "word": "need",
    "mean": "cần; nhu cầu"
  },
  {
    "word": "exchange",
    "mean": "trao đổi"
  },
  {
    "word": "directly",
    "mean": "trực tiếp"
  },
  {
    "word": "method",
    "mean": "phương pháp; cách thức"
  },
  {
    "word": "could",
    "mean": "có thể"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "might",
    "mean": "có thể"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "earn",
    "mean": "kiếm tiền; kiếm được"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "spend",
    "mean": "chi tiêu"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "true",
    "mean": "chân thật; thực sự"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
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
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "why",
    "mean": "tại sao"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "basic",
    "mean": "cơ bản"
  },
  {
    "word": "needs",
    "mean": "nhu cầu; cần"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "medicine",
    "mean": "thuốc; dược phẩm"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "electricity",
    "mean": "điện"
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
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "events",
    "mean": "sự kiện"
  },
  {
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "studying",
    "mean": "việc học; đang học"
  },
  {
    "word": "university",
    "mean": "trường đại học"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "starting",
    "mean": "việc bắt đầu"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "business",
    "mean": "kinh doanh; doanh nghiệp"
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
    "word": "does",
    "mean": "làm; trợ động từ does"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "mean",
    "mean": "có nghĩa là"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
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
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "tool",
    "mean": "công cụ"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "manage",
    "mean": "quản lý"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "saving",
    "mean": "việc tiết kiệm"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "amount",
    "mean": "số tiền; lượng"
  },
  {
    "word": "one",
    "mean": "một"
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
    "word": "putting",
    "mean": "việc đặt; bỏ vào"
  },
  {
    "word": "box",
    "mean": "hộp"
  },
  {
    "word": "difference",
    "mean": "sự khác biệt"
  },
  {
    "word": "bringing",
    "mean": "việc mang theo"
  },
  {
    "word": "lunch",
    "mean": "bữa trưa"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "turning",
    "mean": "biến; chuyển"
  },
  {
    "word": "off",
    "mean": "tắt; rời khỏi"
  },
  {
    "word": "unused",
    "mean": "không được sử dụng"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "avoiding",
    "mean": "việc tránh"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "shopping",
    "mean": "việc mua sắm"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "whether",
    "mean": "liệu rằng"
  },
  {
    "word": "truly",
    "mean": "thật sự"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "unexpected",
    "mean": "bất ngờ; không dự kiến"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
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
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "repair",
    "mean": "sửa chữa"
  },
  {
    "word": "urgent",
    "mean": "khẩn cấp"
  },
  {
    "word": "bill",
    "mean": "hóa đơn"
  },
  {
    "word": "savings",
    "mean": "khoản tiết kiệm"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "become",
    "mean": "trở nên"
  }
];

const newEx4Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
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
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "goods",
    "mean": "hàng hóa"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "services",
    "mean": "dịch vụ"
  },
  {
    "word": "can",
    "mean": "có thể"
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
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "digital",
    "mean": "kỹ thuật số"
  },
  {
    "word": "bank",
    "mean": "ngân hàng"
  },
  {
    "word": "account",
    "mean": "tài khoản ngân hàng"
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
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "transport",
    "mean": "giao thông; phương tiện"
  },
  {
    "word": "education",
    "mean": "giáo dục"
  },
  {
    "word": "other",
    "mean": "người khác; nhau"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "compare",
    "mean": "so sánh"
  },
  {
    "word": "prices",
    "mean": "giá cả"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "would",
    "mean": "sẽ; sẽ phải"
  },
  {
    "word": "need",
    "mean": "cần; nhu cầu"
  },
  {
    "word": "exchange",
    "mean": "trao đổi"
  },
  {
    "word": "directly",
    "mean": "trực tiếp"
  },
  {
    "word": "method",
    "mean": "phương pháp; cách thức"
  },
  {
    "word": "could",
    "mean": "có thể"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "might",
    "mean": "có thể"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "person",
    "mean": "người"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "earn",
    "mean": "kiếm tiền; kiếm được"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "spend",
    "mean": "chi tiêu"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "love",
    "mean": "yêu"
  },
  {
    "word": "true",
    "mean": "chân thật; thực sự"
  },
  {
    "word": "friendship",
    "mean": "tình bạn"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
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
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "why",
    "mean": "tại sao"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "basic",
    "mean": "cơ bản"
  },
  {
    "word": "needs",
    "mean": "nhu cầu; cần"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "medicine",
    "mean": "thuốc; dược phẩm"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "electricity",
    "mean": "điện"
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
    "word": "live",
    "mean": "sống"
  },
  {
    "word": "allows",
    "mean": "cho phép"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "events",
    "mean": "sự kiện"
  },
  {
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "studying",
    "mean": "việc học; đang học"
  },
  {
    "word": "university",
    "mean": "trường đại học"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "starting",
    "mean": "việc bắt đầu"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "business",
    "mean": "kinh doanh; doanh nghiệp"
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
    "word": "does",
    "mean": "làm; trợ động từ does"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "mean",
    "mean": "có nghĩa là"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
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
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "tool",
    "mean": "công cụ"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "manage",
    "mean": "quản lý"
  },
  {
    "word": "responsibly",
    "mean": "có trách nhiệm"
  },
  {
    "word": "saving",
    "mean": "việc tiết kiệm"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "amount",
    "mean": "số tiền; lượng"
  },
  {
    "word": "one",
    "mean": "một"
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
    "word": "putting",
    "mean": "việc đặt; bỏ vào"
  },
  {
    "word": "box",
    "mean": "hộp"
  },
  {
    "word": "difference",
    "mean": "sự khác biệt"
  },
  {
    "word": "bringing",
    "mean": "việc mang theo"
  },
  {
    "word": "lunch",
    "mean": "bữa trưa"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "turning",
    "mean": "biến; chuyển"
  },
  {
    "word": "off",
    "mean": "tắt; rời khỏi"
  },
  {
    "word": "unused",
    "mean": "không được sử dụng"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "avoiding",
    "mean": "việc tránh"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "shopping",
    "mean": "việc mua sắm"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "whether",
    "mean": "liệu rằng"
  },
  {
    "word": "truly",
    "mean": "thật sự"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "unexpected",
    "mean": "bất ngờ; không dự kiến"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
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
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "repair",
    "mean": "sửa chữa"
  },
  {
    "word": "urgent",
    "mean": "khẩn cấp"
  },
  {
    "word": "bill",
    "mean": "hóa đơn"
  },
  {
    "word": "savings",
    "mean": "khoản tiết kiệm"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "become",
    "mean": "trở nên"
  }
];

const newEx5Data = [
  "Money is something people use to buy goods and services.",
  "It can be coins, banknotes, or digital money in a bank account.",
  "Money also helps us compare the prices of different products.",
  "Without money, people would need to exchange goods directly.",
  "Money is important, but we should use it carefully.",
  "We need to earn, save, and spend it wisely.",
  "People need money to pay for their basic needs.",
  "We use it to buy food, water, clothes, and medicine.",
  "Money allows people to choose the products and services they need.",
  "However, having more money does not always mean having a happier life."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Money is something people use to buy goods and services."
  },
  {
    "id": 2,
    "correct": "It can be coins, banknotes, or digital money in a bank account."
  },
  {
    "id": 3,
    "correct": "Money also helps us compare the prices of different products."
  },
  {
    "id": 4,
    "correct": "Without money, people would need to exchange goods directly."
  },
  {
    "id": 5,
    "correct": "Money is important, but we should use it carefully."
  },
  {
    "id": 6,
    "correct": "We need to earn, save, and spend it wisely."
  },
  {
    "id": 7,
    "correct": "People need money to pay for their basic needs."
  },
  {
    "id": 8,
    "correct": "We use it to buy food, water, clothes, and medicine."
  },
  {
    "id": 9,
    "correct": "Money allows people to choose the products and services they need."
  },
  {
    "id": 10,
    "correct": "However, having more money does not always mean having a happier life."
  },
  {
    "id": 11,
    "correct": "Good health, family, and friendship are also important."
  },
  {
    "id": 12,
    "correct": "We should see money as a useful tool and learn to manage it responsibly."
  },
  {
    "id": 13,
    "correct": "Saving money is a good habit that everyone can practice."
  },
  {
    "id": 14,
    "correct": "We do not need to save a large amount at one time."
  },
  {
    "id": 15,
    "correct": "Saving money helps us prepare for future plans and unexpected problems."
  }
];

const newEx7Data = [
  {
    "q": "What forms can money take?",
    "a": "Money can be coins, banknotes, or digital money in a bank account."
  },
  {
    "q": "What do people use money to pay for every day?",
    "a": "They use it for food, clothes, transport, education, and other important things."
  },
  {
    "q": "Why would direct exchange of goods be difficult?",
    "a": "Both people might not want what the other person has."
  },
  {
    "q": "How should people use money?",
    "a": "They should earn, save, and spend it wisely."
  },
  {
    "q": "What basic needs are mentioned in the reading?",
    "a": "Food, water, clothes, medicine, electricity, transport, education, and a safe place to live are mentioned."
  },
  {
    "q": "What important events can money help people prepare for?",
    "a": "It can help with university study, buying a house, or starting a small business."
  },
  {
    "q": "Why is money described as a useful tool?",
    "a": "It helps people meet needs and prepare for important plans, but it does not replace health, family, or friendship."
  },
  {
    "q": "How can people save money in daily life?",
    "a": "They can bring lunch from home, turn off unused lights, and avoid unnecessary shopping."
  },
  {
    "q": "What should people ask before buying something?",
    "a": "They should ask whether they truly need it or only want it."
  },
  {
    "q": "How can small daily savings help?",
    "a": "They can prepare people for future plans, repairs, urgent bills, and unexpected problems."
  }
];

