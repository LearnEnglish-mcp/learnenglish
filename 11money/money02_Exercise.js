// ===== money02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. After that, decide how much money can be saved and how much can be used for _____.",
    "a": "entertainment"
  },
  {
    "q": "2. People should check their budget _____ and change it when their income or expenses are different.",
    "a": "regularly"
  },
  {
    "q": "3. They include food, clean water, basic clothes, medicine, _____, and a place to live.",
    "a": "education"
  },
  {
    "q": "4. A _____ item is not always better if it breaks quickly or cannot be used for long.",
    "a": "cheaper"
  },
  {
    "q": "5. A _____ is a plan for using money in everyday financial life in everyday financial life.",
    "a": "budget"
  },
  {
    "q": "6. It shows _____ much money a person earns, spends, and saves in everyday financial life.",
    "a": "how"
  },
  {
    "q": "7. Making a budget can help people understand where their _____ goes every month in everyday financial life.",
    "a": "money"
  },
  {
    "q": "8. _____, write down all sources of income in everyday financial life in everyday financial life.",
    "a": "first"
  },
  {
    "q": "9. Next, list important expenses, such as food, transport, school fees, _____ electricity in everyday financial life.",
    "a": "and"
  },
  {
    "q": "10. After that, decide how _____ money can be saved and how much can be used for entertainment.",
    "a": "much"
  },
  {
    "q": "11. A _____ budget helps people avoid spending too much in everyday financial life in everyday financial life.",
    "a": "simple"
  },
  {
    "q": "12. It _____ makes it easier to reach financial goals in everyday financial life in everyday financial life.",
    "a": "also"
  },
  {
    "q": "13. _____ should check their budget regularly and change it when their income or expenses are different.",
    "a": "people"
  },
  {
    "q": "14. _____ are things that are necessary for a healthy and safe life in everyday financial life.",
    "a": "needs"
  },
  {
    "q": "15. They include _____, clean water, basic clothes, medicine, education, and a place to live.",
    "a": "food"
  },
  {
    "q": "16. People _____ pay for their needs before buying other things in everyday financial life.",
    "a": "should"
  },
  {
    "q": "17. Wants are things that we would like to have but _____ live without in everyday financial life.",
    "a": "can"
  },
  {
    "q": "18. A _____ phone, expensive shoes, games, and luxury food are common examples in everyday financial life.",
    "a": "new"
  },
  {
    "q": "19. Wants can _____ life enjoyable, but they are not always necessary in everyday financial life.",
    "a": "make"
  },
  {
    "q": "20. Understanding the difference between needs and wants _____ people control their spending in everyday financial life.",
    "a": "helps"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the best Vietnamese meaning of \"how\"?",
    "opts": [
      "như thế nào",
      "hiểu",
      "tiếp theo",
      "quyết định"
    ],
    "a": "như thế nào"
  },
  {
    "q": "2. What is the best Vietnamese meaning of \"plan\"?",
    "opts": [
      "xuống",
      "trường học",
      "cũng; quá",
      "kế hoạch"
    ],
    "a": "kế hoạch"
  },
  {
    "q": "3. What is the best Vietnamese meaning of \"much\"?",
    "opts": [
      "giải trí",
      "nên",
      "nhiều",
      "chi phí"
    ],
    "a": "nhiều"
  },
  {
    "q": "4. What is the best Vietnamese meaning of \"and\"?",
    "opts": [
      "nhu cầu; cần",
      "và",
      "sau",
      "dễ hơn"
    ],
    "a": "và"
  },
  {
    "q": "5. What is the best Vietnamese meaning of \"help\"?",
    "opts": [
      "giúp",
      "việc chi tiêu",
      "thay đổi",
      "bao gồm"
    ],
    "a": "giúp"
  },
  {
    "q": "6. What is the best Vietnamese meaning of \"goes\"?",
    "opts": [
      "các mục tiêu",
      "cần thiết",
      "nơi; địa điểm",
      "đi; được dùng vào"
    ],
    "a": "đi; được dùng vào"
  },
  {
    "q": "7. What is the best Vietnamese meaning of \"write\"?",
    "opts": [
      "cơ bản",
      "thích",
      "viết",
      "khác nhau"
    ],
    "a": "viết"
  },
  {
    "q": "8. What is the best Vietnamese meaning of \"income\"?",
    "opts": [
      "giày",
      "thu nhập",
      "cuộc sống",
      "trước"
    ],
    "a": "thu nhập"
  },
  {
    "q": "9. What is the best Vietnamese meaning of \"expenses\"?",
    "opts": [
      "chi phí",
      "giáo dục",
      "không có; không bị",
      "luôn luôn"
    ],
    "a": "chi phí"
  },
  {
    "q": "10. What is the best Vietnamese meaning of \"school\"?",
    "opts": [
      "sẽ; sẽ phải",
      "phổ biến; thông thường",
      "suy nghĩ",
      "trường học"
    ],
    "a": "trường học"
  },
  {
    "q": "11. Which sentence uses \"earns\" in the lesson context?",
    "opts": [
      "People should ignore earns in every financial decision.",
      "The reading says earns has no connection with the lesson.",
      "For a family budget, it shows how much money a person earns, spends, and saves.",
      "The word earns is never used in daily money situations."
    ],
    "a": "For a family budget, it shows how much money a person earns, spends, and saves."
  },
  {
    "q": "12. Which sentence uses \"spends\" in the lesson context?",
    "opts": [
      "The reading says spends has no connection with the lesson.",
      "When making daily choices, it shows how much money a person earns, spends, and saves.",
      "The word spends is never used in daily money situations.",
      "People should ignore spends in every financial decision."
    ],
    "a": "When making daily choices, it shows how much money a person earns, spends, and saves."
  },
  {
    "q": "13. Which sentence uses \"and\" in the lesson context?",
    "opts": [
      "In practical life, it shows how much money a person earns, spends, and saves.",
      "The word and is never used in daily money situations.",
      "People should ignore and in every financial decision.",
      "The reading says and has no connection with the lesson."
    ],
    "a": "In practical life, it shows how much money a person earns, spends, and saves."
  },
  {
    "q": "14. Which sentence uses \"saves\" in the lesson context?",
    "opts": [
      "The word saves is never used in daily money situations.",
      "People should ignore saves in every financial decision.",
      "The reading says saves has no connection with the lesson.",
      "For smart spending, it shows how much money a person earns, spends, and saves."
    ],
    "a": "For smart spending, it shows how much money a person earns, spends, and saves."
  },
  {
    "q": "15. Which sentence uses \"making\" in the lesson context?",
    "opts": [
      "People should ignore making in every financial decision.",
      "The reading says making has no connection with the lesson.",
      "When saving money, making a budget can help people understand where their money goes every month.",
      "The word making is never used in daily money situations."
    ],
    "a": "When saving money, making a budget can help people understand where their money goes every month."
  },
  {
    "q": "16. Which sentence uses \"can\" in the lesson context?",
    "opts": [
      "The reading says can has no connection with the lesson.",
      "In ordinary shopping, making a budget can help people understand where their money goes every month.",
      "The word can is never used in daily money situations.",
      "People should ignore can in every financial decision."
    ],
    "a": "In ordinary shopping, making a budget can help people understand where their money goes every month."
  },
  {
    "q": "17. Which sentence uses \"help\" in the lesson context?",
    "opts": [
      "For good financial habits, making a budget can help people understand where their money goes every month.",
      "The word help is never used in daily money situations.",
      "People should ignore help in every financial decision.",
      "The reading says help has no connection with the lesson."
    ],
    "a": "For good financial habits, making a budget can help people understand where their money goes every month."
  },
  {
    "q": "18. Which sentence uses \"people\" in the lesson context?",
    "opts": [
      "The word people is never used in daily money situations.",
      "People should ignore people in every financial decision.",
      "The reading says people has no connection with the lesson.",
      "When people plan expenses, making a budget can help people understand where their money goes every month."
    ],
    "a": "When people plan expenses, making a budget can help people understand where their money goes every month."
  },
  {
    "q": "19. Which sentence uses \"understand\" in the lesson context?",
    "opts": [
      "People should ignore understand in every financial decision.",
      "The reading says understand has no connection with the lesson.",
      "In a careful household plan, making a budget can help people understand where their money goes every month.",
      "The word understand is never used in daily money situations."
    ],
    "a": "In a careful household plan, making a budget can help people understand where their money goes every month."
  },
  {
    "q": "20. Which sentence uses \"where\" in the lesson context?",
    "opts": [
      "The reading says where has no connection with the lesson.",
      "For everyday financial decisions, making a budget can help people understand where their money goes every month.",
      "The word where is never used in daily money situations.",
      "People should ignore where in every financial decision."
    ],
    "a": "For everyday financial decisions, making a budget can help people understand where their money goes every month."
  }
];

const newEx3Data = [
  {
    "word": "how",
    "mean": "như thế nào"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "budget",
    "mean": "ngân sách"
  },
  {
    "word": "plan",
    "mean": "kế hoạch"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "much",
    "mean": "nhiều"
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
    "word": "spends",
    "mean": "dành (thời gian)"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "making",
    "mean": "việc thực hiện"
  },
  {
    "word": "can",
    "mean": "có thể"
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
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "goes",
    "mean": "đi; được dùng vào"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "down",
    "mean": "xuống"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "sources",
    "mean": "nguồn"
  },
  {
    "word": "income",
    "mean": "thu nhập"
  },
  {
    "word": "next",
    "mean": "tiếp theo"
  },
  {
    "word": "list",
    "mean": "danh sách"
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
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "transport",
    "mean": "giao thông; phương tiện"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "fees",
    "mean": "phí; học phí"
  },
  {
    "word": "electricity",
    "mean": "điện"
  },
  {
    "word": "after",
    "mean": "sau"
  },
  {
    "word": "decide",
    "mean": "quyết định"
  },
  {
    "word": "saved",
    "mean": "được tiết kiệm"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "entertainment",
    "mean": "giải trí"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "spending",
    "mean": "việc chi tiêu"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "reach",
    "mean": "đến"
  },
  {
    "word": "financial",
    "mean": "thuộc tài chính"
  },
  {
    "word": "goals",
    "mean": "các mục tiêu"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "change",
    "mean": "thay đổi"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "needs",
    "mean": "nhu cầu; cần"
  },
  {
    "word": "wants",
    "mean": "mong muốn"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "necessary",
    "mean": "cần thiết"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "basic",
    "mean": "cơ bản"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "medicine",
    "mean": "thuốc; dược phẩm"
  },
  {
    "word": "education",
    "mean": "giáo dục"
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
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "other",
    "mean": "người khác; nhau"
  },
  {
    "word": "would",
    "mean": "sẽ; sẽ phải"
  },
  {
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "have",
    "mean": "có; dùng"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "expensive",
    "mean": "đắt tiền"
  },
  {
    "word": "shoes",
    "mean": "giày"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "luxury",
    "mean": "xa xỉ"
  },
  {
    "word": "common",
    "mean": "phổ biến; thông thường"
  },
  {
    "word": "examples",
    "mean": "ví dụ"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
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
    "word": "understanding",
    "mean": "sự thấu hiểu"
  },
  {
    "word": "difference",
    "mean": "sự khác biệt"
  },
  {
    "word": "between",
    "mean": "giữa"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "shopping",
    "mean": "việc mua sắm"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "reasonable",
    "mean": "hợp lý"
  },
  {
    "word": "prices",
    "mean": "giá cả"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "need",
    "mean": "cần; nhu cầu"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
  },
  {
    "word": "focused",
    "mean": "tập trung"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "items",
    "mean": "mặt hàng"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "compare",
    "mean": "so sánh"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "size",
    "mean": "kích thước"
  },
  {
    "word": "expiry",
    "mean": "sự hết hạn"
  },
  {
    "word": "date",
    "mean": "ngày; ngày tháng"
  },
  {
    "word": "product",
    "mean": "sản phẩm"
  },
  {
    "word": "cheaper",
    "mean": "rẻ hơn"
  },
  {
    "word": "item",
    "mean": "món hàng; vật"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "breaks",
    "mean": "nghỉ giải lao; làm vỡ"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "offers",
    "mean": "có; cung cấp"
  },
  {
    "word": "buyers",
    "mean": "người mua"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "discount",
    "mean": "giảm giá"
  },
  {
    "word": "smart",
    "mean": "thông minh; hợp lý"
  },
  {
    "word": "shoppers",
    "mean": "người mua sắm"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "truly",
    "mean": "thật sự"
  },
  {
    "word": "afford",
    "mean": "có khả năng chi trả"
  }
];

const newEx4Data = [
  {
    "word": "how",
    "mean": "như thế nào"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "budget",
    "mean": "ngân sách"
  },
  {
    "word": "plan",
    "mean": "kế hoạch"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "much",
    "mean": "nhiều"
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
    "word": "spends",
    "mean": "dành (thời gian)"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "making",
    "mean": "việc thực hiện"
  },
  {
    "word": "can",
    "mean": "có thể"
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
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "goes",
    "mean": "đi; được dùng vào"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "month",
    "mean": "tháng"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "down",
    "mean": "xuống"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "sources",
    "mean": "nguồn"
  },
  {
    "word": "income",
    "mean": "thu nhập"
  },
  {
    "word": "next",
    "mean": "tiếp theo"
  },
  {
    "word": "list",
    "mean": "danh sách"
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
    "word": "such",
    "mean": "như vậy; như thế"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "transport",
    "mean": "giao thông; phương tiện"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "fees",
    "mean": "phí; học phí"
  },
  {
    "word": "electricity",
    "mean": "điện"
  },
  {
    "word": "after",
    "mean": "sau"
  },
  {
    "word": "decide",
    "mean": "quyết định"
  },
  {
    "word": "saved",
    "mean": "được tiết kiệm"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "entertainment",
    "mean": "giải trí"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "spending",
    "mean": "việc chi tiêu"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "reach",
    "mean": "đến"
  },
  {
    "word": "financial",
    "mean": "thuộc tài chính"
  },
  {
    "word": "goals",
    "mean": "các mục tiêu"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "change",
    "mean": "thay đổi"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "needs",
    "mean": "nhu cầu; cần"
  },
  {
    "word": "wants",
    "mean": "mong muốn"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "necessary",
    "mean": "cần thiết"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "basic",
    "mean": "cơ bản"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "medicine",
    "mean": "thuốc; dược phẩm"
  },
  {
    "word": "education",
    "mean": "giáo dục"
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
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "before",
    "mean": "trước"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "other",
    "mean": "người khác; nhau"
  },
  {
    "word": "would",
    "mean": "sẽ; sẽ phải"
  },
  {
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "have",
    "mean": "có; dùng"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "expensive",
    "mean": "đắt tiền"
  },
  {
    "word": "shoes",
    "mean": "giày"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "luxury",
    "mean": "xa xỉ"
  },
  {
    "word": "common",
    "mean": "phổ biến; thông thường"
  },
  {
    "word": "examples",
    "mean": "ví dụ"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
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
    "word": "understanding",
    "mean": "sự thấu hiểu"
  },
  {
    "word": "difference",
    "mean": "sự khác biệt"
  },
  {
    "word": "between",
    "mean": "giữa"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "think",
    "mean": "suy nghĩ"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "shopping",
    "mean": "việc mua sắm"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "reasonable",
    "mean": "hợp lý"
  },
  {
    "word": "prices",
    "mean": "giá cả"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "need",
    "mean": "cần; nhu cầu"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
  },
  {
    "word": "focused",
    "mean": "tập trung"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "items",
    "mean": "mặt hàng"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "compare",
    "mean": "so sánh"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "size",
    "mean": "kích thước"
  },
  {
    "word": "expiry",
    "mean": "sự hết hạn"
  },
  {
    "word": "date",
    "mean": "ngày; ngày tháng"
  },
  {
    "word": "product",
    "mean": "sản phẩm"
  },
  {
    "word": "cheaper",
    "mean": "rẻ hơn"
  },
  {
    "word": "item",
    "mean": "món hàng; vật"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "breaks",
    "mean": "nghỉ giải lao; làm vỡ"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "offers",
    "mean": "có; cung cấp"
  },
  {
    "word": "buyers",
    "mean": "người mua"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "discount",
    "mean": "giảm giá"
  },
  {
    "word": "smart",
    "mean": "thông minh; hợp lý"
  },
  {
    "word": "shoppers",
    "mean": "người mua sắm"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "truly",
    "mean": "thật sự"
  },
  {
    "word": "afford",
    "mean": "có khả năng chi trả"
  }
];

const newEx5Data = [
  "A budget is a plan for using money.",
  "It shows how much money a person earns, spends, and saves.",
  "Making a budget can help people understand where their money goes every month.",
  "First, write down all sources of income.",
  "Next, list important expenses, such as food, transport, school fees, and electricity.",
  "A simple budget helps people avoid spending too much.",
  "It also makes it easier to reach financial goals.",
  "Needs are things that are necessary for a healthy and safe life.",
  "They include food, clean water, basic clothes, medicine, education, and a place to live.",
  "People should pay for their needs before buying other things."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "A budget is a plan for using money."
  },
  {
    "id": 2,
    "correct": "It shows how much money a person earns, spends, and saves."
  },
  {
    "id": 3,
    "correct": "Making a budget can help people understand where their money goes every month."
  },
  {
    "id": 4,
    "correct": "First, write down all sources of income."
  },
  {
    "id": 5,
    "correct": "Next, list important expenses, such as food, transport, school fees, and electricity."
  },
  {
    "id": 6,
    "correct": "A simple budget helps people avoid spending too much."
  },
  {
    "id": 7,
    "correct": "It also makes it easier to reach financial goals."
  },
  {
    "id": 8,
    "correct": "Needs are things that are necessary for a healthy and safe life."
  },
  {
    "id": 9,
    "correct": "They include food, clean water, basic clothes, medicine, education, and a place to live."
  },
  {
    "id": 10,
    "correct": "People should pay for their needs before buying other things."
  },
  {
    "id": 11,
    "correct": "Wants are things that we would like to have but can live without."
  },
  {
    "id": 12,
    "correct": "A new phone, expensive shoes, games, and luxury food are common examples."
  },
  {
    "id": 13,
    "correct": "Wants can make life enjoyable, but they are not always necessary."
  },
  {
    "id": 14,
    "correct": "Understanding the difference between needs and wants helps people control their spending."
  },
  {
    "id": 15,
    "correct": "Before buying something, we should stop and think carefully."
  }
];

const newEx7Data = [
  {
    "q": "What is a budget?",
    "a": "A budget is a plan for using money."
  },
  {
    "q": "What does a budget show?",
    "a": "It shows how much money a person earns, spends, and saves."
  },
  {
    "q": "What should people list after their income?",
    "a": "They should list important expenses such as food, transport, school fees, and electricity."
  },
  {
    "q": "Why should people check a budget regularly?",
    "a": "They may need to change it when income or expenses are different."
  },
  {
    "q": "What are needs?",
    "a": "Needs are things necessary for a healthy and safe life."
  },
  {
    "q": "What are wants?",
    "a": "Wants are things people would like to have but can live without."
  },
  {
    "q": "How does understanding needs and wants help?",
    "a": "It helps people control spending, save money, and avoid waste."
  },
  {
    "q": "Why is a shopping list useful?",
    "a": "It helps people stay focused and avoid buying unnecessary items."
  },
  {
    "q": "What product details should shoppers check?",
    "a": "They should check quality, size, and expiry date."
  },
  {
    "q": "Why should shoppers be careful with discounts?",
    "a": "A discount can make people buy more even when they do not truly need the product."
  }
];

