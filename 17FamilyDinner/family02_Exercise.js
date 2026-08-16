// ===== family02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A typical meal often includes rice, soup, _____, and a meat or fish dish.",
    "a": "vegetables"
  },
  {
    "q": "2. Family members usually sit _____ and share the dishes placed in the center of the table.",
    "a": "together"
  },
  {
    "q": "3. A healthy family meal provides the _____ that the body needs in this family meal lesson.",
    "a": "nutrients"
  },
  {
    "q": "4. It often _____ rice, vegetables, fruits, fish, meat, or eggs in this family meal lesson.",
    "a": "includes"
  },
  {
    "q": "5. Drinking enough water is also _____ for good health in this family meal lesson.",
    "a": "important"
  },
  {
    "q": "6. _____ should try to eat fresh foods instead of too much fast food in this family meal lesson.",
    "a": "families"
  },
  {
    "q": "7. Fresh _____ contain vitamins and minerals that help people stay strong and active in this family meal lesson.",
    "a": "ingredients"
  },
  {
    "q": "8. Healthy meals support growth and improve overall _____ in this family meal lesson in this family meal lesson.",
    "a": "well-being"
  },
  {
    "q": "9. Good _____ habits start at home in this family meal lesson in this family meal lesson.",
    "a": "eating"
  },
  {
    "q": "10. When parents choose healthy foods, _____ learn to make better food choices in this family meal lesson.",
    "a": "children"
  },
  {
    "q": "11. A healthy family meal _____ every member of the family in this family meal lesson.",
    "a": "benefits"
  },
  {
    "q": "12. The dinner table is a place where families can _____ in this family meal lesson.",
    "a": "communicate"
  },
  {
    "q": "13. While eating, family members often talk about their daily _____, plans, and ideas in this family meal lesson.",
    "a": "experiences"
  },
  {
    "q": "14. These _____ make family life more enjoyable in this family meal lesson in this family meal lesson.",
    "a": "conversations"
  },
  {
    "q": "15. _____ can ask children about school and their friends in this family meal lesson.",
    "a": "parents"
  },
  {
    "q": "16. Children can learn from their parents' _____ and experiences in this family meal lesson.",
    "a": "advice"
  },
  {
    "q": "17. Listening carefully shows respect and helps build stronger _____ in this family meal lesson.",
    "a": "relationships"
  },
  {
    "q": "18. Talking during meals creates a friendly _____ in this family meal lesson in this family meal lesson.",
    "a": "atmosphere"
  },
  {
    "q": "19. Family members feel _____ sharing their thoughts and feelings in this family meal lesson.",
    "a": "comfortable"
  },
  {
    "q": "20. Regular conversations help families stay _____ and support one another in this family meal lesson.",
    "a": "connected"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the Vietnamese meaning of “healthy”?",
    "opts": [
      "lành mạnh",
      "gia đình",
      "bữa ăn",
      "cung cấp"
    ],
    "a": "lành mạnh"
  },
  {
    "q": "2. What is the Vietnamese meaning of “family”?",
    "opts": [
      "lành mạnh",
      "gia đình",
      "bữa ăn",
      "cung cấp"
    ],
    "a": "gia đình"
  },
  {
    "q": "3. What is the Vietnamese meaning of “meal”?",
    "opts": [
      "lành mạnh",
      "gia đình",
      "bữa ăn",
      "cung cấp"
    ],
    "a": "bữa ăn"
  },
  {
    "q": "4. What is the Vietnamese meaning of “provides”?",
    "opts": [
      "lành mạnh",
      "gia đình",
      "bữa ăn",
      "cung cấp"
    ],
    "a": "cung cấp"
  },
  {
    "q": "5. What is the Vietnamese meaning of “nutrients”?",
    "opts": [
      "chất dinh dưỡng",
      "lành mạnh",
      "gia đình",
      "bữa ăn"
    ],
    "a": "chất dinh dưỡng"
  },
  {
    "q": "6. Which English word means “cơ thể”?",
    "opts": [
      "healthy",
      "body",
      "family",
      "meal"
    ],
    "a": "body"
  },
  {
    "q": "7. Which English word means “cần”?",
    "opts": [
      "healthy",
      "family",
      "needs",
      "meal"
    ],
    "a": "needs"
  },
  {
    "q": "8. Which English word means “thường”?",
    "opts": [
      "healthy",
      "family",
      "meal",
      "often"
    ],
    "a": "often"
  },
  {
    "q": "9. Which English word means “bao gồm”?",
    "opts": [
      "includes",
      "healthy",
      "family",
      "meal"
    ],
    "a": "includes"
  },
  {
    "q": "10. Which English word means “cơm; gạo”?",
    "opts": [
      "healthy",
      "rice",
      "family",
      "meal"
    ],
    "a": "rice"
  },
  {
    "q": "11. Which statement is correct according to the reading?",
    "opts": [
      "Healthy meals always require fast food and sugary drinks.",
      "Drinking enough water is also important for good health.",
      "Traditional family meals have no connection with culture.",
      "People should spend more time on phones during family meals."
    ],
    "a": "Drinking enough water is also important for good health."
  },
  {
    "q": "12. Which statement is correct according to the reading?",
    "opts": [
      "Traditional family meals have no connection with culture.",
      "People should spend more time on phones during family meals.",
      "Families should try to eat fresh foods instead of too much fast food.",
      "Weekend dinners give families less time to talk together."
    ],
    "a": "Families should try to eat fresh foods instead of too much fast food."
  },
  {
    "q": "13. Which statement is correct according to the reading?",
    "opts": [
      "People should spend more time on phones during family meals.",
      "Weekend dinners give families less time to talk together.",
      "Cooking together prevents children from learning useful skills.",
      "Fresh ingredients contain vitamins and minerals that help people stay strong and active."
    ],
    "a": "Fresh ingredients contain vitamins and minerals that help people stay strong and active."
  },
  {
    "q": "14. Which statement is correct according to the reading?",
    "opts": [
      "Healthy meals support growth and improve overall well-being.",
      "Weekend dinners give families less time to talk together.",
      "Cooking together prevents children from learning useful skills.",
      "Family meals are useful only when the food is expensive."
    ],
    "a": "Healthy meals support growth and improve overall well-being."
  },
  {
    "q": "15. Which statement is correct according to the reading?",
    "opts": [
      "Cooking together prevents children from learning useful skills.",
      "Good eating habits start at home.",
      "Family meals are useful only when the food is expensive.",
      "Children should never help with family meal preparation."
    ],
    "a": "Good eating habits start at home."
  },
  {
    "q": "16. Choose the best word to complete the sentence: A _____ family meal provides the nutrients that the body needs.",
    "opts": [
      "healthy",
      "important",
      "good",
      "fresh"
    ],
    "a": "healthy"
  },
  {
    "q": "17. Choose the best word to complete the sentence: It often _____ rice, vegetables, fruits, fish, meat, or eggs.",
    "opts": [
      "provides",
      "includes",
      "needs",
      "try"
    ],
    "a": "includes"
  },
  {
    "q": "18. Choose the best word to complete the sentence: _____ enough water is also important for good health.",
    "opts": [
      "family",
      "meal",
      "drinking",
      "nutrients"
    ],
    "a": "drinking"
  },
  {
    "q": "19. Choose the best word to complete the sentence: _____ should try to eat fresh foods instead of too much fast food.",
    "opts": [
      "family",
      "meal",
      "nutrients",
      "families"
    ],
    "a": "families"
  },
  {
    "q": "20. Choose the best word to complete the sentence: _____ ingredients contain vitamins and minerals that help people stay strong and active.",
    "opts": [
      "fresh",
      "healthy",
      "important",
      "good"
    ],
    "a": "fresh"
  }
];

const newEx3Data = [
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "provides",
    "mean": "cung cấp"
  },
  {
    "word": "nutrients",
    "mean": "chất dinh dưỡng"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "includes",
    "mean": "bao gồm"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "vegetables",
    "mean": "rau"
  },
  {
    "word": "fruits",
    "mean": "trái cây"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "eggs",
    "mean": "trứng"
  },
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "important",
    "mean": "quan trọng"
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
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "try",
    "mean": "cố gắng"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "fresh",
    "mean": "tươi"
  },
  {
    "word": "foods",
    "mean": "thực phẩm"
  },
  {
    "word": "instead",
    "mean": "thay vào đó"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "much",
    "mean": "nhiều"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "contain",
    "mean": "chứa"
  },
  {
    "word": "vitamins",
    "mean": "vitamin"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "minerals",
    "mean": "khoáng chất"
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
    "word": "stay",
    "mean": "duy trì; ở lại"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "growth",
    "mean": "sự phát triển"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "overall",
    "mean": "tổng thể"
  },
  {
    "word": "well-being",
    "mean": "sức khỏe và trạng thái tốt"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "home",
    "mean": "gia đình; nhà"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "choose",
    "mean": "chọn"
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
    "word": "make",
    "mean": "làm"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "choices",
    "mean": "lựa chọn"
  },
  {
    "word": "benefits",
    "mean": "mang lại lợi ích"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "member",
    "mean": "thành viên"
  },
  {
    "word": "talking",
    "mean": "việc trò chuyện"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "place",
    "mean": "nơi"
  },
  {
    "word": "where",
    "mean": "nơi mà"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "members",
    "mean": "các thành viên"
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
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
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
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "advice",
    "mean": "lời khuyên"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "shows",
    "mean": "thể hiện"
  },
  {
    "word": "respect",
    "mean": "sự tôn trọng"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "stronger",
    "mean": "bền chặt hơn"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
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
    "word": "atmosphere",
    "mean": "bầu không khí"
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
    "word": "sharing",
    "mean": "việc chia sẻ"
  },
  {
    "word": "thoughts",
    "mean": "suy nghĩ"
  },
  {
    "word": "feelings",
    "mean": "cảm xúc"
  },
  {
    "word": "regular",
    "mean": "thường xuyên"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "another",
    "mean": "người/cái khác"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt Nam"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "typical",
    "mean": "điển hình"
  },
  {
    "word": "soup",
    "mean": "canh; súp"
  },
  {
    "word": "dish",
    "mean": "món ăn"
  },
  {
    "word": "provide",
    "mean": "cung cấp"
  },
  {
    "word": "nutrition",
    "mean": "dinh dưỡng"
  },
  {
    "word": "reflect",
    "mean": "phản ánh"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "usually",
    "mean": "thường"
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
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "placed",
    "mean": "được đặt"
  },
  {
    "word": "center",
    "mean": "giữa; trung tâm"
  },
  {
    "word": "style",
    "mean": "kiểu"
  },
  {
    "word": "encourages",
    "mean": "khuyến khích"
  },
  {
    "word": "togetherness",
    "mean": "sự gắn bó"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "flavors",
    "mean": "hương vị"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "bring",
    "mean": "mang lại"
  },
  {
    "word": "preserve",
    "mean": "gìn giữ"
  },
  {
    "word": "cultural",
    "mean": "thuộc văn hóa"
  },
  {
    "word": "values",
    "mean": "giá trị"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "continue",
    "mean": "tiếp tục"
  },
  {
    "word": "tradition",
    "mean": "truyền thống"
  },
  {
    "word": "day",
    "mean": "ngày"
  }
];

const newEx4Data = [
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "provides",
    "mean": "cung cấp"
  },
  {
    "word": "nutrients",
    "mean": "chất dinh dưỡng"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "needs",
    "mean": "cần"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "includes",
    "mean": "bao gồm"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "vegetables",
    "mean": "rau"
  },
  {
    "word": "fruits",
    "mean": "trái cây"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "eggs",
    "mean": "trứng"
  },
  {
    "word": "drinking",
    "mean": "việc uống"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "important",
    "mean": "quan trọng"
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
    "word": "families",
    "mean": "các gia đình"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "try",
    "mean": "cố gắng"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "fresh",
    "mean": "tươi"
  },
  {
    "word": "foods",
    "mean": "thực phẩm"
  },
  {
    "word": "instead",
    "mean": "thay vào đó"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "much",
    "mean": "nhiều"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "contain",
    "mean": "chứa"
  },
  {
    "word": "vitamins",
    "mean": "vitamin"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "minerals",
    "mean": "khoáng chất"
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
    "word": "stay",
    "mean": "duy trì; ở lại"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "meals",
    "mean": "các bữa ăn"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "growth",
    "mean": "sự phát triển"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "overall",
    "mean": "tổng thể"
  },
  {
    "word": "well-being",
    "mean": "sức khỏe và trạng thái tốt"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "home",
    "mean": "gia đình; nhà"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "choose",
    "mean": "chọn"
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
    "word": "make",
    "mean": "làm"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "choices",
    "mean": "lựa chọn"
  },
  {
    "word": "benefits",
    "mean": "mang lại lợi ích"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "member",
    "mean": "thành viên"
  },
  {
    "word": "talking",
    "mean": "việc trò chuyện"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "place",
    "mean": "nơi"
  },
  {
    "word": "where",
    "mean": "nơi mà"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "members",
    "mean": "các thành viên"
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
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "experiences",
    "mean": "trải nghiệm"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "conversations",
    "mean": "các cuộc trò chuyện"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
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
    "word": "ask",
    "mean": "hỏi"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "advice",
    "mean": "lời khuyên"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "shows",
    "mean": "thể hiện"
  },
  {
    "word": "respect",
    "mean": "sự tôn trọng"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "build",
    "mean": "xây dựng"
  },
  {
    "word": "stronger",
    "mean": "bền chặt hơn"
  },
  {
    "word": "relationships",
    "mean": "các mối quan hệ"
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
    "word": "atmosphere",
    "mean": "bầu không khí"
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
    "word": "sharing",
    "mean": "việc chia sẻ"
  },
  {
    "word": "thoughts",
    "mean": "suy nghĩ"
  },
  {
    "word": "feelings",
    "mean": "cảm xúc"
  },
  {
    "word": "regular",
    "mean": "thường xuyên"
  },
  {
    "word": "connected",
    "mean": "gắn kết"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "another",
    "mean": "người/cái khác"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "vietnamese",
    "mean": "thuộc Việt Nam; người Việt Nam"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "typical",
    "mean": "điển hình"
  },
  {
    "word": "soup",
    "mean": "canh; súp"
  },
  {
    "word": "dish",
    "mean": "món ăn"
  },
  {
    "word": "provide",
    "mean": "cung cấp"
  },
  {
    "word": "nutrition",
    "mean": "dinh dưỡng"
  },
  {
    "word": "reflect",
    "mean": "phản ánh"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "usually",
    "mean": "thường"
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
    "word": "share",
    "mean": "chia sẻ"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "placed",
    "mean": "được đặt"
  },
  {
    "word": "center",
    "mean": "giữa; trung tâm"
  },
  {
    "word": "style",
    "mean": "kiểu"
  },
  {
    "word": "encourages",
    "mean": "khuyến khích"
  },
  {
    "word": "togetherness",
    "mean": "sự gắn bó"
  },
  {
    "word": "enjoy",
    "mean": "thưởng thức"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "flavors",
    "mean": "hương vị"
  },
  {
    "word": "part",
    "mean": "phần"
  },
  {
    "word": "vietnam",
    "mean": "Việt Nam"
  },
  {
    "word": "bring",
    "mean": "mang lại"
  },
  {
    "word": "preserve",
    "mean": "gìn giữ"
  },
  {
    "word": "cultural",
    "mean": "thuộc văn hóa"
  },
  {
    "word": "values",
    "mean": "giá trị"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "continue",
    "mean": "tiếp tục"
  },
  {
    "word": "tradition",
    "mean": "truyền thống"
  },
  {
    "word": "day",
    "mean": "ngày"
  }
];

const newEx5Data = [
  "Good eating habits start at home.",
  "These conversations make family life more enjoyable.",
  "Talking during meals creates a friendly atmosphere.",
  "Many families continue this tradition every day.",
  "Healthy meals support growth and improve overall well-being.",
  "These foods provide nutrition and reflect Vietnamese culture.",
  "This style of eating encourages sharing and togetherness.",
  "Drinking enough water is also important for good health.",
  "Parents can ask children about school and their friends.",
  "Children can learn from their parents' advice and experiences."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Good eating habits start at home."
  },
  {
    "id": 2,
    "correct": "These conversations make family life more enjoyable."
  },
  {
    "id": 3,
    "correct": "Talking during meals creates a friendly atmosphere."
  },
  {
    "id": 4,
    "correct": "Many families continue this tradition every day."
  },
  {
    "id": 5,
    "correct": "Healthy meals support growth and improve overall well-being."
  },
  {
    "id": 6,
    "correct": "These foods provide nutrition and reflect Vietnamese culture."
  },
  {
    "id": 7,
    "correct": "This style of eating encourages sharing and togetherness."
  },
  {
    "id": 8,
    "correct": "Drinking enough water is also important for good health."
  },
  {
    "id": 9,
    "correct": "Parents can ask children about school and their friends."
  },
  {
    "id": 10,
    "correct": "Children can learn from their parents' advice and experiences."
  },
  {
    "id": 11,
    "correct": "Listening carefully shows respect and helps build stronger relationships."
  },
  {
    "id": 12,
    "correct": "Family members feel comfortable sharing their thoughts and feelings."
  },
  {
    "id": 13,
    "correct": "Traditional Vietnamese family meals are simple, balanced, and delicious."
  },
  {
    "id": 14,
    "correct": "They bring people together and help preserve cultural values."
  },
  {
    "id": 15,
    "correct": "It often includes rice, vegetables, fruits, fish, meat, or eggs."
  }
];

const newEx7Data = [
  {
    "q": "What is the main idea introduced in “A Healthy Family Meal”?",
    "a": "A healthy family meal provides the nutrients that the body needs."
  },
  {
    "q": "What detail about family life or meals is given in “A Healthy Family Meal”?",
    "a": "Families should try to eat fresh foods instead of too much fast food."
  },
  {
    "q": "What is the main idea introduced in “Talking at the Dinner Table”?",
    "a": "The dinner table is a place where families can communicate."
  },
  {
    "q": "What detail about family life or meals is given in “Talking at the Dinner Table”?",
    "a": "Parents can ask children about school and their friends."
  },
  {
    "q": "What is the main idea introduced in “Traditional Vietnamese Family Meals”?",
    "a": "Traditional Vietnamese family meals are simple, balanced, and delicious."
  },
  {
    "q": "What detail about family life or meals is given in “Traditional Vietnamese Family Meals”?",
    "a": "Family members usually sit together and share the dishes placed in the center of the table."
  },
  {
    "q": "What advice does the reading give?",
    "a": "Families should try to eat fresh foods instead of too much fast food."
  },
  {
    "q": "What benefit or purpose is described here?",
    "a": "Fresh ingredients contain vitamins and minerals that help people stay strong and active."
  },
  {
    "q": "What situation or condition is described here?",
    "a": "When parents choose healthy foods, children learn to make better food choices."
  },
  {
    "q": "What benefit or purpose is described here?",
    "a": "Listening carefully shows respect and helps build stronger relationships."
  }
];
