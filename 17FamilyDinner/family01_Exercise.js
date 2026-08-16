// ===== family01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. It is a time when family members sit together, enjoy food, and share their _____.",
    "a": "experiences"
  },
  {
    "q": "2. Eating as a family creates warm memories, teaches good manners, and helps everyone feel loved and _____.",
    "a": "connected"
  },
  {
    "q": "3. They may wash _____, set the table, or carry dishes to the dining room.",
    "a": "vegetables"
  },
  {
    "q": "4. Everyone feels happy when the meal is ready and the family can enjoy the food _____.",
    "a": "together"
  },
  {
    "q": "5. People often eat more balanced meals and spend less time using phones or watching _____.",
    "a": "television"
  },
  {
    "q": "6. Family dinner is an _____ part of daily life in many homes in this family meal lesson.",
    "a": "important"
  },
  {
    "q": "7. A simple meal can bring happiness and strengthen family _____ in this family meal lesson.",
    "a": "relationships"
  },
  {
    "q": "8. During dinner, people often talk about school, work, and daily _____ in this family meal lesson.",
    "a": "activities"
  },
  {
    "q": "9. Parents listen to their _____, and children learn from their parents in this family meal lesson.",
    "a": "children"
  },
  {
    "q": "10. These _____ help family members understand and support each other better in this family meal lesson.",
    "a": "conversations"
  },
  {
    "q": "11. A family dinner does not need _____ food in this family meal lesson in this family meal lesson.",
    "a": "expensive"
  },
  {
    "q": "12. What matters most is _____ time together in this family meal lesson in this family meal lesson.",
    "a": "spending"
  },
  {
    "q": "13. That is why family dinners are _____ in every family in this family meal lesson.",
    "a": "valuable"
  },
  {
    "q": "14. _____ a family meal is an important activity in many homes in this family meal lesson.",
    "a": "preparing"
  },
  {
    "q": "15. Before cooking, family members choose _____ and decide what dishes to make in this family meal lesson.",
    "a": "ingredients"
  },
  {
    "q": "16. Fresh vegetables, meat, fish, and rice are common foods in _____ meals in this family meal lesson.",
    "a": "vietnamese"
  },
  {
    "q": "17. _____ often prepare most of the food, but children can also help in this family meal lesson.",
    "a": "parents"
  },
  {
    "q": "18. Working together makes meal _____ easier and more enjoyable in this family meal lesson.",
    "a": "preparation"
  },
  {
    "q": "19. _____ together is a good way to spend time with family in this family meal lesson.",
    "a": "cooking"
  },
  {
    "q": "20. It teaches useful skills and _____ in this family meal lesson in this family meal lesson.",
    "a": "responsibility"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the Vietnamese meaning of “family”?",
    "opts": [
      "gia đình",
      "bữa tối",
      "quan trọng",
      "phần"
    ],
    "a": "gia đình"
  },
  {
    "q": "2. What is the Vietnamese meaning of “dinner”?",
    "opts": [
      "gia đình",
      "bữa tối",
      "quan trọng",
      "phần"
    ],
    "a": "bữa tối"
  },
  {
    "q": "3. What is the Vietnamese meaning of “important”?",
    "opts": [
      "gia đình",
      "bữa tối",
      "quan trọng",
      "phần"
    ],
    "a": "quan trọng"
  },
  {
    "q": "4. What is the Vietnamese meaning of “part”?",
    "opts": [
      "gia đình",
      "bữa tối",
      "quan trọng",
      "phần"
    ],
    "a": "phần"
  },
  {
    "q": "5. What is the Vietnamese meaning of “daily”?",
    "opts": [
      "hằng ngày",
      "gia đình",
      "bữa tối",
      "quan trọng"
    ],
    "a": "hằng ngày"
  },
  {
    "q": "6. Which English word means “cuộc sống”?",
    "opts": [
      "family",
      "life",
      "dinner",
      "important"
    ],
    "a": "life"
  },
  {
    "q": "7. Which English word means “các gia đình; ngôi nhà”?",
    "opts": [
      "family",
      "dinner",
      "homes",
      "important"
    ],
    "a": "homes"
  },
  {
    "q": "8. Which English word means “thời gian”?",
    "opts": [
      "family",
      "dinner",
      "important",
      "time"
    ],
    "a": "time"
  },
  {
    "q": "9. Which English word means “các thành viên”?",
    "opts": [
      "members",
      "family",
      "dinner",
      "important"
    ],
    "a": "members"
  },
  {
    "q": "10. Which English word means “ngồi”?",
    "opts": [
      "family",
      "sit",
      "dinner",
      "important"
    ],
    "a": "sit"
  },
  {
    "q": "11. Which statement is correct according to the reading?",
    "opts": [
      "Healthy meals always require fast food and sugary drinks.",
      "A simple meal can bring happiness and strengthen family relationships.",
      "Traditional family meals have no connection with culture.",
      "People should spend more time on phones during family meals."
    ],
    "a": "A simple meal can bring happiness and strengthen family relationships."
  },
  {
    "q": "12. Which statement is correct according to the reading?",
    "opts": [
      "Traditional family meals have no connection with culture.",
      "People should spend more time on phones during family meals.",
      "During dinner, people often talk about school, work, and daily activities.",
      "Weekend dinners give families less time to talk together."
    ],
    "a": "During dinner, people often talk about school, work, and daily activities."
  },
  {
    "q": "13. Which statement is correct according to the reading?",
    "opts": [
      "People should spend more time on phones during family meals.",
      "Weekend dinners give families less time to talk together.",
      "Cooking together prevents children from learning useful skills.",
      "Parents listen to their children, and children learn from their parents."
    ],
    "a": "Parents listen to their children, and children learn from their parents."
  },
  {
    "q": "14. Which statement is correct according to the reading?",
    "opts": [
      "These conversations help family members understand and support each other better.",
      "Weekend dinners give families less time to talk together.",
      "Cooking together prevents children from learning useful skills.",
      "Family meals are useful only when the food is expensive."
    ],
    "a": "These conversations help family members understand and support each other better."
  },
  {
    "q": "15. Which statement is correct according to the reading?",
    "opts": [
      "Cooking together prevents children from learning useful skills.",
      "A family dinner does not need expensive food.",
      "Family meals are useful only when the food is expensive.",
      "Children should never help with family meal preparation."
    ],
    "a": "A family dinner does not need expensive food."
  },
  {
    "q": "16. Choose the best word to complete the sentence: _____ dinner is an important part of daily life in many homes.",
    "opts": [
      "family",
      "dinner",
      "part",
      "life"
    ],
    "a": "family"
  },
  {
    "q": "17. Choose the best word to complete the sentence: It is a time when _____ members sit together, enjoy food, and share their experiences.",
    "opts": [
      "dinner",
      "family",
      "part",
      "life"
    ],
    "a": "family"
  },
  {
    "q": "18. Choose the best word to complete the sentence: A simple meal can bring happiness and strengthen _____ relationships.",
    "opts": [
      "dinner",
      "part",
      "family",
      "life"
    ],
    "a": "family"
  },
  {
    "q": "19. Choose the best word to complete the sentence: During _____, people often talk about school, work, and daily activities.",
    "opts": [
      "family",
      "part",
      "life",
      "dinner"
    ],
    "a": "dinner"
  },
  {
    "q": "20. Choose the best word to complete the sentence: _____ listen to their children, and children learn from their parents.",
    "opts": [
      "parents",
      "family",
      "dinner",
      "part"
    ],
    "a": "parents"
  }
];

const newEx3Data = [
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "part",
    "mean": "phần"
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
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "homes",
    "mean": "các gia đình; ngôi nhà"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "members",
    "mean": "các thành viên"
  },
  {
    "word": "sit",
    "mean": "ngồi"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "food",
    "mean": "thức ăn"
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
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "bring",
    "mean": "mang lại"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "strengthen",
    "mean": "củng cố"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "about",
    "mean": "về"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "children",
    "mean": "trẻ em; con cái"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "other",
    "mean": "khác; nhau"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "does",
    "mean": "trợ động từ do"
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
    "word": "expensive",
    "mean": "đắt tiền"
  },
  {
    "word": "what",
    "mean": "điều gì; cái gì"
  },
  {
    "word": "matters",
    "mean": "quan trọng; có ý nghĩa"
  },
  {
    "word": "most",
    "mean": "nhất; phần lớn"
  },
  {
    "word": "spending",
    "mean": "việc dành"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "warm",
    "mean": "ấm áp"
  },
  {
    "word": "memories",
    "mean": "kỷ niệm"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "manners",
    "mean": "cách cư xử"
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
    "word": "loved",
    "mean": "được yêu thương"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "why",
    "mean": "tại sao"
  },
  {
    "word": "dinners",
    "mean": "các bữa tối"
  },
  {
    "word": "valuable",
    "mean": "có giá trị"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "before",
    "mean": "trước khi"
  },
  {
    "word": "cooking",
    "mean": "nấu ăn"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "decide",
    "mean": "quyết định"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "make",
    "mean": "làm"
  },
  {
    "word": "fresh",
    "mean": "tươi"
  },
  {
    "word": "vegetables",
    "mean": "rau"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "common",
    "mean": "phổ biến"
  },
  {
    "word": "foods",
    "mean": "thực phẩm"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt Nam"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "set",
    "mean": "dọn; đặt"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "dining",
    "mean": "ăn uống"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "working",
    "mean": "việc làm việc"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "preparation",
    "mean": "sự chuẩn bị"
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
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "spend",
    "mean": "dành"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "happy",
    "mean": "vui; hạnh phúc"
  },
  {
    "word": "ready",
    "mean": "sẵn sàng"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "try",
    "mean": "cố gắng"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "after",
    "mean": "sau"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "chance",
    "mean": "cơ hội"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở lại"
  },
  {
    "word": "close",
    "mean": "gần gũi"
  },
  {
    "word": "encourages",
    "mean": "khuyến khích"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "phones",
    "mean": "điện thoại"
  },
  {
    "word": "watching",
    "mean": "việc xem"
  },
  {
    "word": "television",
    "mean": "tivi"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "home",
    "mean": "gia đình; nhà"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  }
];

const newEx4Data = [
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "part",
    "mean": "phần"
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
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "homes",
    "mean": "các gia đình; ngôi nhà"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "members",
    "mean": "các thành viên"
  },
  {
    "word": "sit",
    "mean": "ngồi"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "food",
    "mean": "thức ăn"
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
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "bring",
    "mean": "mang lại"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  },
  {
    "word": "strengthen",
    "mean": "củng cố"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "about",
    "mean": "về"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "children",
    "mean": "trẻ em; con cái"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "other",
    "mean": "khác; nhau"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "does",
    "mean": "trợ động từ do"
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
    "word": "expensive",
    "mean": "đắt tiền"
  },
  {
    "word": "what",
    "mean": "điều gì; cái gì"
  },
  {
    "word": "matters",
    "mean": "quan trọng; có ý nghĩa"
  },
  {
    "word": "most",
    "mean": "nhất; phần lớn"
  },
  {
    "word": "spending",
    "mean": "việc dành"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "warm",
    "mean": "ấm áp"
  },
  {
    "word": "memories",
    "mean": "kỷ niệm"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "manners",
    "mean": "cách cư xử"
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
    "word": "loved",
    "mean": "được yêu thương"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "why",
    "mean": "tại sao"
  },
  {
    "word": "dinners",
    "mean": "các bữa tối"
  },
  {
    "word": "valuable",
    "mean": "có giá trị"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "before",
    "mean": "trước khi"
  },
  {
    "word": "cooking",
    "mean": "nấu ăn"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "decide",
    "mean": "quyết định"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "make",
    "mean": "làm"
  },
  {
    "word": "fresh",
    "mean": "tươi"
  },
  {
    "word": "vegetables",
    "mean": "rau"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "common",
    "mean": "phổ biến"
  },
  {
    "word": "foods",
    "mean": "thực phẩm"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt Nam"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "set",
    "mean": "dọn; đặt"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "dining",
    "mean": "ăn uống"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "working",
    "mean": "việc làm việc"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "preparation",
    "mean": "sự chuẩn bị"
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
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "spend",
    "mean": "dành"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "happy",
    "mean": "vui; hạnh phúc"
  },
  {
    "word": "ready",
    "mean": "sẵn sàng"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "try",
    "mean": "cố gắng"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "after",
    "mean": "sau"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "chance",
    "mean": "cơ hội"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "discuss",
    "mean": "thảo luận"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở lại"
  },
  {
    "word": "close",
    "mean": "gần gũi"
  },
  {
    "word": "encourages",
    "mean": "khuyến khích"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "phones",
    "mean": "điện thoại"
  },
  {
    "word": "watching",
    "mean": "việc xem"
  },
  {
    "word": "television",
    "mean": "tivi"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "home",
    "mean": "gia đình; nhà"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  }
];

const newEx5Data = [
  "It teaches useful skills and responsibility.",
  "Eating together also encourages healthy habits.",
  "What matters most is spending time together.",
  "A family dinner does not need expensive food.",
  "Working together makes meal preparation easier and more enjoyable.",
  "Eating together is a simple but meaningful family activity.",
  "During the meal, family members talk about their day.",
  "A simple meal can bring happiness and strengthen family relationships.",
  "That is why family dinners are valuable in every family.",
  "Children share stories from school, and parents discuss their work."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "It teaches useful skills and responsibility."
  },
  {
    "id": 2,
    "correct": "Eating together also encourages healthy habits."
  },
  {
    "id": 3,
    "correct": "What matters most is spending time together."
  },
  {
    "id": 4,
    "correct": "A family dinner does not need expensive food."
  },
  {
    "id": 5,
    "correct": "Working together makes meal preparation easier and more enjoyable."
  },
  {
    "id": 6,
    "correct": "Eating together is a simple but meaningful family activity."
  },
  {
    "id": 7,
    "correct": "During the meal, family members talk about their day."
  },
  {
    "id": 8,
    "correct": "A simple meal can bring happiness and strengthen family relationships."
  },
  {
    "id": 9,
    "correct": "That is why family dinners are valuable in every family."
  },
  {
    "id": 10,
    "correct": "Children share stories from school, and parents discuss their work."
  },
  {
    "id": 11,
    "correct": "Family meals help create a warm and happy home environment."
  },
  {
    "id": 12,
    "correct": "During dinner, people often talk about school, work, and daily activities."
  },
  {
    "id": 13,
    "correct": "Parents listen to their children, and children learn from their parents."
  },
  {
    "id": 14,
    "correct": "These conversations help family members understand and support each other better."
  },
  {
    "id": 15,
    "correct": "Preparing a family meal is an important activity in many homes."
  }
];

const newEx7Data = [
  {
    "q": "What is the main idea introduced in “Family Dinner”?",
    "a": "Family dinner is an important part of daily life in many homes."
  },
  {
    "q": "What detail about family life or meals is given in “Family Dinner”?",
    "a": "During dinner, people often talk about school, work, and daily activities."
  },
  {
    "q": "What is the main idea introduced in “Preparing the Meal”?",
    "a": "Preparing a family meal is an important activity in many homes."
  },
  {
    "q": "What detail about family life or meals is given in “Preparing the Meal”?",
    "a": "Parents often prepare most of the food, but children can also help."
  },
  {
    "q": "What is the main idea introduced in “Eating Together”?",
    "a": "Eating together is a simple but meaningful family activity."
  },
  {
    "q": "What detail about family life or meals is given in “Eating Together”?",
    "a": "During the meal, family members talk about their day."
  },
  {
    "q": "What situation or condition is described here?",
    "a": "It is a time when family members sit together, enjoy food, and share their experiences."
  },
  {
    "q": "What benefit or purpose is described here?",
    "a": "These conversations help family members understand and support each other better."
  },
  {
    "q": "What benefit or purpose is described here?",
    "a": "Eating as a family creates warm memories, teaches good manners, and helps everyone feel loved and connected."
  },
  {
    "q": "What reason does the reading give in this part?",
    "a": "That is why family dinners are valuable in every family."
  }
];
