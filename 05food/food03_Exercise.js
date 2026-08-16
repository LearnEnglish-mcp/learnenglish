// ===== food03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A _____ street food festival is an exciting event with many colorful lights and busy food stalls.",
    "a": "night"
  },
  {
    "q": "2. They _____ the food quickly so customers receive hot and tasty meals without waiting too long.",
    "a": "cook"
  },
  {
    "q": "3. We _____ walking around food stalls, looking at different meals, and choosing our favorite dishes together.",
    "a": "enjoy"
  },
  {
    "q": "4. It _____ wonderful memories, strengthens friendships, and makes ordinary days much more exciting for everyone.",
    "a": "creates"
  },
  {
    "q": "5. _____ ingredients and clean equipment help make the food safe and delicious for everyone.",
    "a": "fresh"
  },
  {
    "q": "6. _____ customers always return when the food tastes good and the service is friendly.",
    "a": "happy"
  },
  {
    "q": "7. _____ people follow simple safety rules, they can enjoy delicious street food without worry.",
    "a": "when"
  },
  {
    "q": "8. _____ begin by washing fresh ingredients and preparing meat, vegetables, rice, or noodles during a typical street food visit in the city.",
    "a": "sellers"
  },
  {
    "q": "9. The _____ atmosphere makes every visit enjoyable and relaxing after school or work during a typical street food visit in the city.",
    "a": "friendly"
  },
  {
    "q": "10. Fresh _____ and safe cooking help prevent food poisoning and other health problems during a typical street food visit in the city.",
    "a": "ingredients"
  },
  {
    "q": "11. The _____ smells fill the air, and people walk around tasting different dishes during a typical street food visit in the city.",
    "a": "delicious"
  },
  {
    "q": "12. It _____ local culture, brings people together, and creates unforgettable memories for everyone during a typical street food visit in the city.",
    "a": "celebrates"
  },
  {
    "q": "13. _____ street food is hard work, but many people enjoy doing it during a typical street food visit in the city.",
    "a": "cooking"
  },
  {
    "q": "14. Everyone _____ trying something new and sharing small portions with each other during a typical street food visit in the city.",
    "a": "likes"
  },
  {
    "q": "15. We _____ buy drinks, snacks, and desserts after eating our main meals during a typical street food visit in the city.",
    "a": "usually"
  },
  {
    "q": "16. _____ drinks and fresh fruit should be stored properly to stay safe during a typical street food visit in the city.",
    "a": "cold"
  },
  {
    "q": "17. Sellers _____ clean equipment and fresh water while preparing meals every day during a typical street food visit in the city.",
    "a": "need"
  },
  {
    "q": "18. _____ enjoy delicious meals, sweet desserts, refreshing drinks, and live music during a typical street food visit in the city.",
    "a": "visitors"
  },
  {
    "q": "19. _____ and friends spend happy time together in the lively atmosphere during a typical street food visit in the city.",
    "a": "families"
  },
  {
    "q": "20. Many _____ sellers prepare traditional food while visitors watch them cook during a typical street food visit in the city.",
    "a": "local"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the Vietnamese meaning of “cooking”?",
    "opts": [
      "việc nấu ăn",
      "sự chuẩn bị",
      "thịt",
      "khách hàng"
    ],
    "a": "việc nấu ăn"
  },
  {
    "q": "2. What is the Vietnamese meaning of “skill”?",
    "opts": [
      "tươi; trong lành",
      "kỹ năng",
      "nấu ăn",
      "bữa ăn"
    ],
    "a": "kỹ năng"
  },
  {
    "q": "3. What is the Vietnamese meaning of “sellers”?",
    "opts": [
      "rau củ",
      "nhận",
      "những người bán hàng",
      "sử dụng"
    ],
    "a": "những người bán hàng"
  },
  {
    "q": "4. What is the Vietnamese meaning of “ingredients”?",
    "opts": [
      "nhanh chóng",
      "không có; mà không",
      "lớn",
      "nguyên liệu"
    ],
    "a": "nguyên liệu"
  },
  {
    "q": "5. What is the Vietnamese meaning of “so”?",
    "opts": [
      "vì vậy; nên",
      "việc chờ đợi",
      "nồi",
      "thiết bị; trang bị"
    ],
    "a": "vì vậy; nên"
  },
  {
    "q": "6. What is the Vietnamese meaning of “grills”?",
    "opts": [
      "quần áo",
      "vỉ nướng",
      "an toàn",
      "việc làm"
    ],
    "a": "vỉ nướng"
  },
  {
    "q": "7. What is the Vietnamese meaning of “delicious”?",
    "opts": [
      "vui vẻ",
      "thân thiện",
      "ngon",
      "việc nhìn; ngắm"
    ],
    "a": "ngon"
  },
  {
    "q": "8. What is the Vietnamese meaning of “friends”?",
    "opts": [
      "khác nhau",
      "mới",
      "đồ uống",
      "bạn bè"
    ],
    "a": "bạn bè"
  },
  {
    "q": "9. What is the Vietnamese meaning of “buy”?",
    "opts": [
      "mua",
      "kể; nói",
      "thăm",
      "những kỷ niệm"
    ],
    "a": "mua"
  },
  {
    "q": "10. What is the Vietnamese meaning of “wonderful”?",
    "opts": [
      "nhiều hơn",
      "tuyệt vời",
      "chọn",
      "rửa"
    ],
    "a": "tuyệt vời"
  },
  {
    "q": "11. What does cooking street food require?",
    "opts": [
      "Only expensive machines",
      "No preparation",
      "Skill and careful preparation",
      "A large office"
    ],
    "a": "Skill and careful preparation"
  },
  {
    "q": "12. How do sellers begin preparing food?",
    "opts": [
      "By ignoring ingredients",
      "By serving cold leftovers",
      "By closing the stall",
      "By washing fresh ingredients and preparing them"
    ],
    "a": "By washing fresh ingredients and preparing them"
  },
  {
    "q": "13. Why do sellers cook food quickly?",
    "opts": [
      "So customers receive hot meals without waiting too long",
      "So customers must wait longer",
      "So the food becomes cold",
      "So no one can eat"
    ],
    "a": "So customers receive hot meals without waiting too long"
  },
  {
    "q": "14. What helps make food safe and delicious?",
    "opts": [
      "Dirty water and old tools",
      "Fresh ingredients and clean equipment",
      "Long waiting times",
      "Loud music"
    ],
    "a": "Fresh ingredients and clean equipment"
  },
  {
    "q": "15. When do happy customers return?",
    "opts": [
      "When food is unsafe",
      "When the stall is always closed",
      "When the food tastes good and service is friendly",
      "When service is unfriendly"
    ],
    "a": "When the food tastes good and service is friendly"
  },
  {
    "q": "16. What do friends do while eating street food?",
    "opts": [
      "Study traffic laws",
      "Write office reports",
      "Drive buses",
      "Laugh, tell stories, and take photos"
    ],
    "a": "Laugh, tell stories, and take photos"
  },
  {
    "q": "17. Why is street food safety important?",
    "opts": [
      "It helps protect good health",
      "It makes food more expensive",
      "It creates traffic jams",
      "It closes markets"
    ],
    "a": "It helps protect good health"
  },
  {
    "q": "18. How should hot food be served?",
    "opts": [
      "Several days later",
      "Immediately after cooking",
      "Only when cold",
      "Without cooking"
    ],
    "a": "Immediately after cooking"
  },
  {
    "q": "19. What happens when people follow simple safety rules?",
    "opts": [
      "They cannot visit markets",
      "They must avoid all food",
      "They can enjoy street food without worry",
      "They always become sick"
    ],
    "a": "They can enjoy street food without worry"
  },
  {
    "q": "20. What does the night street food festival celebrate?",
    "opts": [
      "School uniforms",
      "Office technology",
      "Traffic rules",
      "Local culture"
    ],
    "a": "Local culture"
  }
];

const newEx3Data = [
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "street",
    "mean": "đường phố"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "requires",
    "mean": "đòi hỏi"
  },
  {
    "word": "skill",
    "mean": "kỹ năng"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "preparation",
    "mean": "sự chuẩn bị"
  },
  {
    "word": "sellers",
    "mean": "những người bán hàng"
  },
  {
    "word": "begin",
    "mean": "bắt đầu"
  },
  {
    "word": "washing",
    "mean": "việc rửa"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "so",
    "mean": "vì vậy; nên"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "receive",
    "mean": "nhận"
  },
  {
    "word": "hot",
    "mean": "nóng"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "waiting",
    "mean": "việc chờ đợi"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "grills",
    "mean": "vỉ nướng"
  },
  {
    "word": "frying",
    "mean": "việc chiên; rán"
  },
  {
    "word": "pans",
    "mean": "chảo"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "pots",
    "mean": "nồi"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "equipment",
    "mean": "thiết bị; trang bị"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "hard",
    "mean": "chăm chỉ"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "return",
    "mean": "trở về"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "tastes",
    "mean": "có vị; nếm"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "service",
    "mean": "dịch vụ"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "fun",
    "mean": "vui nhộn"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "around",
    "mean": "xung quanh; quanh"
  },
  {
    "word": "stalls",
    "mean": "quầy hàng"
  },
  {
    "word": "looking",
    "mean": "việc nhìn; ngắm"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "choosing",
    "mean": "việc lựa chọn"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "likes",
    "mean": "thích"
  },
  {
    "word": "trying",
    "mean": "việc thử"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "portions",
    "mean": "khẩu phần; phần ăn"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "snacks",
    "mean": "đồ ăn nhẹ"
  },
  {
    "word": "desserts",
    "mean": "món tráng miệng"
  },
  {
    "word": "main",
    "mean": "chính"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "tell",
    "mean": "kể; nói"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "photos",
    "mean": "ảnh"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "relaxing",
    "mean": "thư giãn"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
  },
  {
    "word": "strengthens",
    "mean": "làm khỏe"
  },
  {
    "word": "friendships",
    "mean": "tình bạn"
  },
  {
    "word": "ordinary",
    "mean": "bình thường"
  },
  {
    "word": "days",
    "mean": "ngày"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "exciting",
    "mean": "hào hứng"
  },
  {
    "word": "safety",
    "mean": "sự an toàn"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
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
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "organized",
    "mean": "được tổ chức"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "poisoning",
    "mean": "sự ngộ độc"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "hands",
    "mean": "bàn tay"
  },
  {
    "word": "served",
    "mean": "được phục vụ"
  },
  {
    "word": "immediately",
    "mean": "ngay lập tức"
  },
  {
    "word": "cold",
    "mean": "lạnh"
  },
  {
    "word": "fruit",
    "mean": "trái cây"
  },
  {
    "word": "stored",
    "mean": "được bảo quản"
  },
  {
    "word": "properly",
    "mean": "đúng cách"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "day",
    "mean": "ngày"
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
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "worry",
    "mean": "sự lo lắng"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "night",
    "mean": "đêm"
  },
  {
    "word": "festival",
    "mean": "lễ hội"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "sweet",
    "mean": "ngọt"
  },
  {
    "word": "refreshing",
    "mean": "mát lạnh; sảng khoái"
  },
  {
    "word": "live",
    "mean": "trực tiếp"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "lively",
    "mean": "sôi động"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "fill",
    "mean": "lấp đầy; lan tỏa"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "tasting",
    "mean": "việc nếm thử"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "adults",
    "mean": "người lớn"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "celebrates",
    "mean": "tôn vinh; kỷ niệm"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "unforgettable",
    "mean": "không thể quên"
  }
];

const newEx4Data = [
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "street",
    "mean": "đường phố"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "requires",
    "mean": "đòi hỏi"
  },
  {
    "word": "skill",
    "mean": "kỹ năng"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "preparation",
    "mean": "sự chuẩn bị"
  },
  {
    "word": "sellers",
    "mean": "những người bán hàng"
  },
  {
    "word": "begin",
    "mean": "bắt đầu"
  },
  {
    "word": "washing",
    "mean": "việc rửa"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "so",
    "mean": "vì vậy; nên"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "receive",
    "mean": "nhận"
  },
  {
    "word": "hot",
    "mean": "nóng"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "waiting",
    "mean": "việc chờ đợi"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "grills",
    "mean": "vỉ nướng"
  },
  {
    "word": "frying",
    "mean": "việc chiên; rán"
  },
  {
    "word": "pans",
    "mean": "chảo"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "pots",
    "mean": "nồi"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "equipment",
    "mean": "thiết bị; trang bị"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "hard",
    "mean": "chăm chỉ"
  },
  {
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "return",
    "mean": "trở về"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "tastes",
    "mean": "có vị; nếm"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "service",
    "mean": "dịch vụ"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "fun",
    "mean": "vui nhộn"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "around",
    "mean": "xung quanh; quanh"
  },
  {
    "word": "stalls",
    "mean": "quầy hàng"
  },
  {
    "word": "looking",
    "mean": "việc nhìn; ngắm"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "choosing",
    "mean": "việc lựa chọn"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "likes",
    "mean": "thích"
  },
  {
    "word": "trying",
    "mean": "việc thử"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "portions",
    "mean": "khẩu phần; phần ăn"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "snacks",
    "mean": "đồ ăn nhẹ"
  },
  {
    "word": "desserts",
    "mean": "món tráng miệng"
  },
  {
    "word": "main",
    "mean": "chính"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "tell",
    "mean": "kể; nói"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "photos",
    "mean": "ảnh"
  },
  {
    "word": "atmosphere",
    "mean": "bầu không khí"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "relaxing",
    "mean": "thư giãn"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
  },
  {
    "word": "strengthens",
    "mean": "làm khỏe"
  },
  {
    "word": "friendships",
    "mean": "tình bạn"
  },
  {
    "word": "ordinary",
    "mean": "bình thường"
  },
  {
    "word": "days",
    "mean": "ngày"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "exciting",
    "mean": "hào hứng"
  },
  {
    "word": "safety",
    "mean": "sự an toàn"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
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
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "organized",
    "mean": "được tổ chức"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "poisoning",
    "mean": "sự ngộ độc"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "hands",
    "mean": "bàn tay"
  },
  {
    "word": "served",
    "mean": "được phục vụ"
  },
  {
    "word": "immediately",
    "mean": "ngay lập tức"
  },
  {
    "word": "cold",
    "mean": "lạnh"
  },
  {
    "word": "fruit",
    "mean": "trái cây"
  },
  {
    "word": "stored",
    "mean": "được bảo quản"
  },
  {
    "word": "properly",
    "mean": "đúng cách"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "day",
    "mean": "ngày"
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
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "worry",
    "mean": "sự lo lắng"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "night",
    "mean": "đêm"
  },
  {
    "word": "festival",
    "mean": "lễ hội"
  },
  {
    "word": "event",
    "mean": "sự kiện"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "sweet",
    "mean": "ngọt"
  },
  {
    "word": "refreshing",
    "mean": "mát lạnh; sảng khoái"
  },
  {
    "word": "live",
    "mean": "trực tiếp"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "lively",
    "mean": "sôi động"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "watch",
    "mean": "xem"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "fill",
    "mean": "lấp đầy; lan tỏa"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "tasting",
    "mean": "việc nếm thử"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "adults",
    "mean": "người lớn"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "experience",
    "mean": "trải nghiệm"
  },
  {
    "word": "celebrates",
    "mean": "tôn vinh; kỷ niệm"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "unforgettable",
    "mean": "không thể quên"
  }
];

const newEx5Data = [
  "Cooking street food requires skill and careful preparation.",
  "Sellers begin by washing fresh ingredients and preparing meat, vegetables, rice, or noodles.",
  "They cook the food quickly so customers receive hot and tasty meals without waiting too long.",
  "Many sellers use grills, frying pans, or large cooking pots.",
  "They wear clean clothes and keep their cooking area tidy.",
  "Fresh ingredients and clean equipment help make the food safe and delicious for everyone.",
  "Cooking street food is hard work, but many people enjoy doing it.",
  "Happy customers always return when the food tastes good and the service is friendly.",
  "Eating street food with friends is always fun.",
  "We enjoy walking around food stalls, looking at different meals, and choosing our favorite dishes together."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Street food brings friends together."
  },
  {
    "id": 2,
    "correct": "Clean food keeps everyone healthy and happy."
  },
  {
    "id": 3,
    "correct": "Cooking street food requires skill and careful preparation."
  },
  {
    "id": 4,
    "correct": "Eating street food with friends is always fun."
  },
  {
    "id": 5,
    "correct": "Customers should also wash their hands before eating."
  },
  {
    "id": 6,
    "correct": "Hot food should be served immediately after cooking."
  },
  {
    "id": 7,
    "correct": "While eating, we laugh, tell stories, and take photos."
  },
  {
    "id": 8,
    "correct": "Street food safety is very important for good health."
  },
  {
    "id": 9,
    "correct": "A night street food festival is a wonderful experience."
  },
  {
    "id": 10,
    "correct": "Many sellers use grills, frying pans, or large cooking pots."
  },
  {
    "id": 11,
    "correct": "They wear clean clothes and keep their cooking area tidy."
  },
  {
    "id": 12,
    "correct": "People should choose food stalls that look clean and organized."
  },
  {
    "id": 13,
    "correct": "Visitors enjoy delicious meals, sweet desserts, refreshing drinks, and live music."
  },
  {
    "id": 14,
    "correct": "Families and friends spend happy time together in the lively atmosphere."
  },
  {
    "id": 15,
    "correct": "Many local sellers prepare traditional food while visitors watch them cook."
  }
];

const newEx7Data = [
  {
    "q": "What preparation is needed for cooking street food?",
    "a": "Sellers need skill, careful preparation, fresh ingredients, and clean equipment."
  },
  {
    "q": "Why do sellers cook food quickly?",
    "a": "They cook quickly so customers receive hot, tasty meals without waiting too long."
  },
  {
    "q": "What cooking tools are mentioned?",
    "a": "The lesson mentions grills, frying pans, and large cooking pots."
  },
  {
    "q": "Why do customers return to a street food seller?",
    "a": "They return when the food tastes good and the service is friendly."
  },
  {
    "q": "How does eating street food with friends build relationships?",
    "a": "Friends share food, laugh, tell stories, take photos, and create memories together."
  },
  {
    "q": "Why is street food safety important?",
    "a": "Safe cooking and fresh ingredients help prevent food poisoning and health problems."
  },
  {
    "q": "How should sellers handle hot and cold food?",
    "a": "Hot food should be served immediately, while cold drinks and fruit should be stored properly."
  },
  {
    "q": "What should customers do before eating?",
    "a": "They should wash their hands and choose clean, organized food stalls."
  },
  {
    "q": "What can visitors enjoy at a night street food festival?",
    "a": "They can enjoy meals, desserts, refreshing drinks, live music, games, and traditional food."
  },
  {
    "q": "How does a night street food festival support local culture?",
    "a": "It celebrates local food and culture, brings people together, and creates unforgettable memories."
  }
];
