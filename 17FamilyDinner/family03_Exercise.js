// ===== family03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Children learn how to prepare food safely and _____ the value of healthy eating.",
    "a": "understand"
  },
  {
    "q": "2. My _____ family dish is more than food; it is also a happy family memory.",
    "a": "favorite"
  },
  {
    "q": "3. Helping parents cook is a useful and _____ activity in this family meal lesson.",
    "a": "enjoyable"
  },
  {
    "q": "4. Children can assist by washing vegetables, preparing _____, or setting the table in this family meal lesson.",
    "a": "ingredients"
  },
  {
    "q": "5. These simple tasks make cooking easier for _____ in this family meal lesson in this family meal lesson.",
    "a": "parents"
  },
  {
    "q": "6. Cooking together teaches _____ life skills in this family meal lesson in this family meal lesson.",
    "a": "important"
  },
  {
    "q": "7. They also become more _____ and independent in this family meal lesson in this family meal lesson.",
    "a": "responsible"
  },
  {
    "q": "8. Family cooking time can be fun and _____ in this family meal lesson in this family meal lesson.",
    "a": "educational"
  },
  {
    "q": "9. Everyone works together to create a _____ meal in this family meal lesson in this family meal lesson.",
    "a": "delicious"
  },
  {
    "q": "10. It is a great way to strengthen family _____ and learn practical skills in this family meal lesson.",
    "a": "relationships"
  },
  {
    "q": "11. _____ has a favorite family dish in this family meal lesson in this family meal lesson.",
    "a": "everyone"
  },
  {
    "q": "12. My favorite family dish is fried fish with _____ in this family meal lesson.",
    "a": "vegetables"
  },
  {
    "q": "13. It is tasty, _____, and often appears at family dinners in this family meal lesson.",
    "a": "healthy"
  },
  {
    "q": "14. The fish is _____ until it is golden and delicious in this family meal lesson.",
    "a": "cooked"
  },
  {
    "q": "15. Fresh vegetables add color and _____ to the meal in this family meal lesson.",
    "a": "nutrition"
  },
  {
    "q": "16. This dish _____ even better when eaten with rice and soup in this family meal lesson.",
    "a": "tastes"
  },
  {
    "q": "17. I enjoy this meal because it reminds me of family _____ in this family meal lesson.",
    "a": "gatherings"
  },
  {
    "q": "18. We often share stories and laugh _____ while eating in this family meal lesson.",
    "a": "together"
  },
  {
    "q": "19. Weekend family _____ are special because everyone has more free time in this family meal lesson.",
    "a": "dinners"
  },
  {
    "q": "20. Family _____ can sit together longer and enjoy a relaxed meal without rushing in this family meal lesson.",
    "a": "members"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the Vietnamese meaning of “parents”?",
    "opts": [
      "cha mẹ",
      "nấu ăn",
      "hữu ích",
      "thú vị"
    ],
    "a": "cha mẹ"
  },
  {
    "q": "2. What is the Vietnamese meaning of “cook”?",
    "opts": [
      "cha mẹ",
      "nấu ăn",
      "hữu ích",
      "thú vị"
    ],
    "a": "nấu ăn"
  },
  {
    "q": "3. What is the Vietnamese meaning of “useful”?",
    "opts": [
      "cha mẹ",
      "nấu ăn",
      "hữu ích",
      "thú vị"
    ],
    "a": "hữu ích"
  },
  {
    "q": "4. What is the Vietnamese meaning of “enjoyable”?",
    "opts": [
      "cha mẹ",
      "nấu ăn",
      "hữu ích",
      "thú vị"
    ],
    "a": "thú vị"
  },
  {
    "q": "5. What is the Vietnamese meaning of “activity”?",
    "opts": [
      "hoạt động",
      "cha mẹ",
      "nấu ăn",
      "hữu ích"
    ],
    "a": "hoạt động"
  },
  {
    "q": "6. Which English word means “trẻ em; con cái”?",
    "opts": [
      "parents",
      "children",
      "cook",
      "useful"
    ],
    "a": "children"
  },
  {
    "q": "7. Which English word means “hỗ trợ”?",
    "opts": [
      "parents",
      "cook",
      "assist",
      "useful"
    ],
    "a": "assist"
  },
  {
    "q": "8. Which English word means “rau”?",
    "opts": [
      "parents",
      "cook",
      "useful",
      "vegetables"
    ],
    "a": "vegetables"
  },
  {
    "q": "9. Which English word means “nguyên liệu”?",
    "opts": [
      "ingredients",
      "parents",
      "cook",
      "useful"
    ],
    "a": "ingredients"
  },
  {
    "q": "10. Which English word means “việc dọn/đặt”?",
    "opts": [
      "parents",
      "setting",
      "cook",
      "useful"
    ],
    "a": "setting"
  },
  {
    "q": "11. Which statement is correct according to the reading?",
    "opts": [
      "Healthy meals always require fast food and sugary drinks.",
      "These simple tasks make cooking easier for parents.",
      "Traditional family meals have no connection with culture.",
      "People should spend more time on phones during family meals."
    ],
    "a": "These simple tasks make cooking easier for parents."
  },
  {
    "q": "12. Which statement is correct according to the reading?",
    "opts": [
      "Traditional family meals have no connection with culture.",
      "People should spend more time on phones during family meals.",
      "Cooking together teaches important life skills.",
      "Weekend dinners give families less time to talk together."
    ],
    "a": "Cooking together teaches important life skills."
  },
  {
    "q": "13. Which statement is correct according to the reading?",
    "opts": [
      "People should spend more time on phones during family meals.",
      "Weekend dinners give families less time to talk together.",
      "Cooking together prevents children from learning useful skills.",
      "Children learn how to prepare food safely and understand the value of healthy eating."
    ],
    "a": "Children learn how to prepare food safely and understand the value of healthy eating."
  },
  {
    "q": "14. Which statement is correct according to the reading?",
    "opts": [
      "They also become more responsible and independent.",
      "Weekend dinners give families less time to talk together.",
      "Cooking together prevents children from learning useful skills.",
      "Family meals are useful only when the food is expensive."
    ],
    "a": "They also become more responsible and independent."
  },
  {
    "q": "15. Which statement is correct according to the reading?",
    "opts": [
      "Cooking together prevents children from learning useful skills.",
      "Family cooking time can be fun and educational.",
      "Family meals are useful only when the food is expensive.",
      "Children should never help with family meal preparation."
    ],
    "a": "Family cooking time can be fun and educational."
  },
  {
    "q": "16. Choose the best word to complete the sentence: Helping _____ cook is a useful and enjoyable activity.",
    "opts": [
      "parents",
      "activity",
      "children",
      "vegetables"
    ],
    "a": "parents"
  },
  {
    "q": "17. Choose the best word to complete the sentence: _____ can assist by washing vegetables, preparing ingredients, or setting the table.",
    "opts": [
      "parents",
      "children",
      "activity",
      "vegetables"
    ],
    "a": "children"
  },
  {
    "q": "18. Choose the best word to complete the sentence: These simple tasks make cooking easier for _____.",
    "opts": [
      "activity",
      "children",
      "parents",
      "vegetables"
    ],
    "a": "parents"
  },
  {
    "q": "19. Choose the best word to complete the sentence: Cooking together _____ important life skills.",
    "opts": [
      "cook",
      "assist",
      "setting",
      "teaches"
    ],
    "a": "teaches"
  },
  {
    "q": "20. Choose the best word to complete the sentence: _____ learn how to prepare food safely and understand the value of healthy eating.",
    "opts": [
      "children",
      "parents",
      "activity",
      "vegetables"
    ],
    "a": "children"
  }
];

const newEx3Data = [
  {
    "word": "helping",
    "mean": "việc giúp đỡ"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "children",
    "mean": "trẻ em; con cái"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "assist",
    "mean": "hỗ trợ"
  },
  {
    "word": "washing",
    "mean": "việc rửa"
  },
  {
    "word": "vegetables",
    "mean": "rau"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "setting",
    "mean": "việc dọn/đặt"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "make",
    "mean": "làm"
  },
  {
    "word": "cooking",
    "mean": "nấu ăn"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "how",
    "mean": "cách; như thế nào"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "value",
    "mean": "giá trị"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "independent",
    "mean": "độc lập"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "fun",
    "mean": "vui"
  },
  {
    "word": "educational",
    "mean": "mang tính giáo dục"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "works",
    "mean": "làm việc"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "great",
    "mean": "tuyệt vời"
  },
  {
    "word": "way",
    "mean": "cách"
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
    "word": "practical",
    "mean": "thực tế"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "dish",
    "mean": "món ăn"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "fried",
    "mean": "chiên"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "appears",
    "mean": "xuất hiện"
  },
  {
    "word": "dinners",
    "mean": "các bữa tối"
  },
  {
    "word": "cooked",
    "mean": "được nấu"
  },
  {
    "word": "until",
    "mean": "cho đến khi"
  },
  {
    "word": "golden",
    "mean": "vàng"
  },
  {
    "word": "fresh",
    "mean": "tươi"
  },
  {
    "word": "add",
    "mean": "thêm"
  },
  {
    "word": "color",
    "mean": "màu sắc"
  },
  {
    "word": "nutrition",
    "mean": "dinh dưỡng"
  },
  {
    "word": "tastes",
    "mean": "có vị"
  },
  {
    "word": "even",
    "mean": "ngay cả"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "eaten",
    "mean": "được ăn"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "soup",
    "mean": "canh; súp"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "reminds",
    "mean": "nhắc nhớ"
  },
  {
    "word": "gatherings",
    "mean": "các buổi tụ họp"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "than",
    "mean": "hơn"
  },
  {
    "word": "happy",
    "mean": "vui; hạnh phúc"
  },
  {
    "word": "memory",
    "mean": "kỷ niệm"
  },
  {
    "word": "weekend",
    "mean": "cuối tuần"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "free",
    "mean": "rảnh"
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
    "word": "longer",
    "mean": "lâu hơn"
  },
  {
    "word": "relaxed",
    "mean": "thư giãn"
  },
  {
    "word": "without",
    "mean": "mà không"
  },
  {
    "word": "rushing",
    "mean": "vội vàng"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "others",
    "mean": "những người/gia đình khác"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "invite",
    "mean": "mời"
  },
  {
    "word": "relatives",
    "mean": "họ hàng"
  },
  {
    "word": "grandparents",
    "mean": "ông bà"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "opportunities",
    "mean": "cơ hội"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "shared",
    "mean": "được chia sẻ"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "spending",
    "mean": "việc dành"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "closer",
    "mean": "gần gũi hơn"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "happiest",
    "mean": "hạnh phúc nhất"
  },
  {
    "word": "moments",
    "mean": "khoảnh khắc"
  },
  {
    "word": "week",
    "mean": "tuần"
  },
  {
    "word": "importance",
    "mean": "tầm quan trọng"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "reasons",
    "mean": "lý do"
  },
  {
    "word": "bring",
    "mean": "mang lại"
  },
  {
    "word": "provide",
    "mean": "cung cấp"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ"
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
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "supported",
    "mean": "được hỗ trợ"
  },
  {
    "word": "benefit",
    "mean": "hưởng lợi"
  },
  {
    "word": "greatly",
    "mean": "rất nhiều"
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
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "guide",
    "mean": "hướng dẫn"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "today's",
    "mean": "ngày nay; của ngày hôm nay"
  },
  {
    "word": "busy",
    "mean": "bận rộn"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "remain",
    "mean": "vẫn giữ"
  },
  {
    "word": "valuable",
    "mean": "có giá trị"
  },
  {
    "word": "lasting",
    "mean": "lâu dài"
  },
  {
    "word": "memories",
    "mean": "kỷ niệm"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "caring",
    "mean": "biết quan tâm"
  },
  {
    "word": "home",
    "mean": "gia đình; nhà"
  }
];

const newEx4Data = [
  {
    "word": "helping",
    "mean": "việc giúp đỡ"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "children",
    "mean": "trẻ em; con cái"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "assist",
    "mean": "hỗ trợ"
  },
  {
    "word": "washing",
    "mean": "việc rửa"
  },
  {
    "word": "vegetables",
    "mean": "rau"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "setting",
    "mean": "việc dọn/đặt"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "make",
    "mean": "làm"
  },
  {
    "word": "cooking",
    "mean": "nấu ăn"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "skills",
    "mean": "kỹ năng"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "how",
    "mean": "cách; như thế nào"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "value",
    "mean": "giá trị"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "independent",
    "mean": "độc lập"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "fun",
    "mean": "vui"
  },
  {
    "word": "educational",
    "mean": "mang tính giáo dục"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "works",
    "mean": "làm việc"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "great",
    "mean": "tuyệt vời"
  },
  {
    "word": "way",
    "mean": "cách"
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
    "word": "practical",
    "mean": "thực tế"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "dish",
    "mean": "món ăn"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "fried",
    "mean": "chiên"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "appears",
    "mean": "xuất hiện"
  },
  {
    "word": "dinners",
    "mean": "các bữa tối"
  },
  {
    "word": "cooked",
    "mean": "được nấu"
  },
  {
    "word": "until",
    "mean": "cho đến khi"
  },
  {
    "word": "golden",
    "mean": "vàng"
  },
  {
    "word": "fresh",
    "mean": "tươi"
  },
  {
    "word": "add",
    "mean": "thêm"
  },
  {
    "word": "color",
    "mean": "màu sắc"
  },
  {
    "word": "nutrition",
    "mean": "dinh dưỡng"
  },
  {
    "word": "tastes",
    "mean": "có vị"
  },
  {
    "word": "even",
    "mean": "ngay cả"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "eaten",
    "mean": "được ăn"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "soup",
    "mean": "canh; súp"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "reminds",
    "mean": "nhắc nhớ"
  },
  {
    "word": "gatherings",
    "mean": "các buổi tụ họp"
  },
  {
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "than",
    "mean": "hơn"
  },
  {
    "word": "happy",
    "mean": "vui; hạnh phúc"
  },
  {
    "word": "memory",
    "mean": "kỷ niệm"
  },
  {
    "word": "weekend",
    "mean": "cuối tuần"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "free",
    "mean": "rảnh"
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
    "word": "longer",
    "mean": "lâu hơn"
  },
  {
    "word": "relaxed",
    "mean": "thư giãn"
  },
  {
    "word": "without",
    "mean": "mà không"
  },
  {
    "word": "rushing",
    "mean": "vội vàng"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "others",
    "mean": "những người/gia đình khác"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "invite",
    "mean": "mời"
  },
  {
    "word": "relatives",
    "mean": "họ hàng"
  },
  {
    "word": "grandparents",
    "mean": "ông bà"
  },
  {
    "word": "join",
    "mean": "tham gia"
  },
  {
    "word": "opportunities",
    "mean": "cơ hội"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "shared",
    "mean": "được chia sẻ"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "spending",
    "mean": "việc dành"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "closer",
    "mean": "gần gũi hơn"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "happiest",
    "mean": "hạnh phúc nhất"
  },
  {
    "word": "moments",
    "mean": "khoảnh khắc"
  },
  {
    "word": "week",
    "mean": "tuần"
  },
  {
    "word": "importance",
    "mean": "tầm quan trọng"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "reasons",
    "mean": "lý do"
  },
  {
    "word": "bring",
    "mean": "mang lại"
  },
  {
    "word": "provide",
    "mean": "cung cấp"
  },
  {
    "word": "communication",
    "mean": "giao tiếp"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ"
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
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "supported",
    "mean": "được hỗ trợ"
  },
  {
    "word": "benefit",
    "mean": "hưởng lợi"
  },
  {
    "word": "greatly",
    "mean": "rất nhiều"
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
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "guide",
    "mean": "hướng dẫn"
  },
  {
    "word": "encourage",
    "mean": "khuyến khích"
  },
  {
    "word": "today's",
    "mean": "ngày nay; của ngày hôm nay"
  },
  {
    "word": "busy",
    "mean": "bận rộn"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "remain",
    "mean": "vẫn giữ"
  },
  {
    "word": "valuable",
    "mean": "có giá trị"
  },
  {
    "word": "lasting",
    "mean": "lâu dài"
  },
  {
    "word": "memories",
    "mean": "kỷ niệm"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "caring",
    "mean": "biết quan tâm"
  },
  {
    "word": "home",
    "mean": "gia đình; nhà"
  }
];

const newEx5Data = [
  "Cooking together teaches important life skills.",
  "Everyone has a favorite family dish.",
  "Children benefit greatly from family meals.",
  "They also become more responsible and independent.",
  "Weekend dinners help families strengthen their relationships.",
  "Family meals are important for many reasons.",
  "These simple tasks make cooking easier for parents.",
  "Family cooking time can be fun and educational.",
  "Everyone works together to create a delicious meal.",
  "Some families prepare special dishes for the weekend."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Cooking together teaches important life skills."
  },
  {
    "id": 2,
    "correct": "Everyone has a favorite family dish."
  },
  {
    "id": 3,
    "correct": "Children benefit greatly from family meals."
  },
  {
    "id": 4,
    "correct": "They also become more responsible and independent."
  },
  {
    "id": 5,
    "correct": "Weekend dinners help families strengthen their relationships."
  },
  {
    "id": 6,
    "correct": "Family meals are important for many reasons."
  },
  {
    "id": 7,
    "correct": "These simple tasks make cooking easier for parents."
  },
  {
    "id": 8,
    "correct": "Family cooking time can be fun and educational."
  },
  {
    "id": 9,
    "correct": "Everyone works together to create a delicious meal."
  },
  {
    "id": 10,
    "correct": "Some families prepare special dishes for the weekend."
  },
  {
    "id": 11,
    "correct": "Spending quality time together makes everyone feel closer."
  },
  {
    "id": 12,
    "correct": "Sharing meals helps people feel connected and supported."
  },
  {
    "id": 13,
    "correct": "In today's busy world, family meals remain valuable."
  },
  {
    "id": 14,
    "correct": "Helping parents cook is a useful and enjoyable activity."
  },
  {
    "id": 15,
    "correct": "My favorite family dish is fried fish with vegetables."
  }
];

const newEx7Data = [
  {
    "q": "What is the main idea introduced in “Helping Parents Cook”?",
    "a": "Helping parents cook is a useful and enjoyable activity."
  },
  {
    "q": "What detail about family life or meals is given in “Helping Parents Cook”?",
    "a": "Cooking together teaches important life skills."
  },
  {
    "q": "What is the main idea introduced in “My Favorite Family Dish”?",
    "a": "Everyone has a favorite family dish."
  },
  {
    "q": "What detail about family life or meals is given in “My Favorite Family Dish”?",
    "a": "The fish is cooked until it is golden and delicious."
  },
  {
    "q": "What is the main idea introduced in “Weekend Family Dinner”?",
    "a": "Weekend family dinners are special because everyone has more free time."
  },
  {
    "q": "What detail about family life or meals is given in “Weekend Family Dinner”?",
    "a": "Others may invite relatives or grandparents to join the meal."
  },
  {
    "q": "What is the main idea introduced in “The Importance of Family Meals”?",
    "a": "Family meals are important for many reasons."
  },
  {
    "q": "What detail about family life or meals is given in “The Importance of Family Meals”?",
    "a": "Children benefit greatly from family meals."
  },
  {
    "q": "What benefit or purpose is described here?",
    "a": "Helping parents cook is a useful and enjoyable activity."
  },
  {
    "q": "What situation or condition is described here?",
    "a": "This dish tastes even better when eaten with rice and soup."
  }
];
