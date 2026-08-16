// ===== food02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Some _____ are famous for noodles, while others are known for tacos, kebabs, dumplings, or grilled seafood.",
    "a": "countries"
  },
  {
    "q": "2. A _____ food market is a lively place full of delicious smells and happy people.",
    "a": "street"
  },
  {
    "q": "3. _____ are many colorful food stalls selling different kinds of meals, snacks, drinks, and desserts.",
    "a": "there"
  },
  {
    "q": "4. It is a fun way to _____ new tastes and enjoy delicious meals during travel.",
    "a": "discover"
  },
  {
    "q": "5. Fresh _____, vegetable salad, grilled fish, and fresh juice are popular healthy choices during a typical street food visit in the city.",
    "a": "fruit"
  },
  {
    "q": "6. _____ food choices improve health while allowing everyone to enjoy delicious meals outside during a typical street food visit in the city.",
    "a": "good"
  },
  {
    "q": "7. A street food _____ is a wonderful place to enjoy local food during a typical street food visit in the city.",
    "a": "market"
  },
  {
    "q": "8. _____ should choose stalls that look tidy and follow good hygiene practices during a typical street food visit in the city.",
    "a": "customers"
  },
  {
    "q": "9. _____ enjoy local ingredients and traditional recipes that make every meal interesting during a typical street food visit in the city.",
    "a": "people"
  },
  {
    "q": "10. _____, tourists, and friends enjoy eating together while listening to music during a typical street food visit in the city.",
    "a": "families"
  },
  {
    "q": "11. Some people _____ photos because the food looks beautiful and interesting during a typical street food visit in the city.",
    "a": "take"
  },
  {
    "q": "12. Each _____ has special dishes with unique flavors and cooking styles during a typical street food visit in the city.",
    "a": "place"
  },
  {
    "q": "13. _____ snacks and fresh drinks are also popular in many cities during a typical street food visit in the city.",
    "a": "sweet"
  },
  {
    "q": "14. _____ walk around and choose the food they like best during a typical street food visit in the city.",
    "a": "visitors"
  },
  {
    "q": "15. It _____ tasty meals and creates happy memories for everyone during a typical street food visit in the city.",
    "a": "offers"
  },
  {
    "q": "16. Some street _____ is healthy and good for our bodies during a typical street food visit in the city.",
    "a": "food"
  },
  {
    "q": "17. These _____ provide vitamins, minerals, and energy for daily activities during a typical street food visit in the city.",
    "a": "foods"
  },
  {
    "q": "18. _____ wash vegetables, prepare food carefully, and keep everything clean during a typical street food visit in the city.",
    "a": "sellers"
  },
  {
    "q": "19. _____ healthy street food helps people stay strong and active during a typical street food visit in the city.",
    "a": "eating"
  },
  {
    "q": "20. Visitors _____ try street food to learn about local culture during a typical street food visit in the city.",
    "a": "often"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the Vietnamese meaning of “street”?",
    "opts": [
      "đường phố",
      "có mùi; ngửi",
      "việc bán; đang bán",
      "du khách"
    ],
    "a": "đường phố"
  },
  {
    "q": "2. What is the Vietnamese meaning of “place”?",
    "opts": [
      "có; ở đó",
      "nơi; địa điểm",
      "đồ ăn nhẹ",
      "nhất"
    ],
    "a": "nơi; địa điểm"
  },
  {
    "q": "3. What is the Vietnamese meaning of “and”?",
    "opts": [
      "khác nhau",
      "đi bộ",
      "và",
      "buổi tối"
    ],
    "a": "và"
  },
  {
    "q": "4. What is the Vietnamese meaning of “colorful”?",
    "opts": [
      "đồ uống",
      "trở nên",
      "thích; tận hưởng",
      "đầy màu sắc"
    ],
    "a": "đầy màu sắc"
  },
  {
    "q": "5. What is the Vietnamese meaning of “desserts”?",
    "opts": [
      "món tráng miệng",
      "rất",
      "việc ăn",
      "bởi vì"
    ],
    "a": "món tráng miệng"
  },
  {
    "q": "6. What is the Vietnamese meaning of “families”?",
    "opts": [
      "việc lắng nghe",
      "gia đình",
      "thú vị",
      "nồng nhiệt"
    ],
    "a": "gia đình"
  },
  {
    "q": "7. What is the Vietnamese meaning of “friendly”?",
    "opts": [
      "tuyệt vời",
      "tốt",
      "thân thiện",
      "cá"
    ],
    "a": "thân thiện"
  },
  {
    "q": "8. What is the Vietnamese meaning of “bodies”?",
    "opts": [
      "nước ép",
      "năng lượng",
      "rau củ",
      "cơ thể"
    ],
    "a": "cơ thể"
  },
  {
    "q": "9. What is the Vietnamese meaning of “wash”?",
    "opts": [
      "rửa",
      "nên",
      "đủ",
      "năng động"
    ],
    "a": "rửa"
  },
  {
    "q": "10. What is the Vietnamese meaning of “strong”?",
    "opts": [
      "đất nước",
      "khỏe; mạnh",
      "phong cách",
      "học"
    ],
    "a": "khỏe; mạnh"
  },
  {
    "q": "11. When does the street food market become very busy?",
    "opts": [
      "At midnight only",
      "Only at sunrise",
      "In the evening",
      "During school lessons"
    ],
    "a": "In the evening"
  },
  {
    "q": "12. What do families and friends enjoy while eating together?",
    "opts": [
      "Cleaning classrooms",
      "Watching office meetings",
      "Reading traffic reports",
      "Listening to music"
    ],
    "a": "Listening to music"
  },
  {
    "q": "13. Why do some people take photos?",
    "opts": [
      "Because the food looks beautiful and interesting",
      "Because the market is closed",
      "Because they dislike the food",
      "Because no sellers are present"
    ],
    "a": "Because the food looks beautiful and interesting"
  },
  {
    "q": "14. What does a street food market create for people?",
    "opts": [
      "Heavy traffic fines",
      "Happy memories",
      "Long office reports",
      "School homework"
    ],
    "a": "Happy memories"
  },
  {
    "q": "15. Which foods are named as healthy choices?",
    "opts": [
      "Only processed meat",
      "Only fried sweets",
      "Fresh fruit, vegetable salad, grilled fish, and fresh juice",
      "Only salty snacks"
    ],
    "a": "Fresh fruit, vegetable salad, grilled fish, and fresh juice"
  },
  {
    "q": "16. What should customers look for when choosing stalls?",
    "opts": [
      "The darkest cooking area",
      "The loudest music",
      "The largest signs only",
      "Tidiness and good hygiene practices"
    ],
    "a": "Tidiness and good hygiene practices"
  },
  {
    "q": "17. What do healthy foods provide?",
    "opts": [
      "Vitamins, minerals, and energy",
      "Traffic tickets",
      "Office equipment",
      "Only sugar"
    ],
    "a": "Vitamins, minerals, and energy"
  },
  {
    "q": "18. Why do visitors often try street food in another country?",
    "opts": [
      "To avoid local culture",
      "To learn about local culture",
      "To study road signs",
      "To buy office furniture"
    ],
    "a": "To learn about local culture"
  },
  {
    "q": "19. Which foods are mentioned from different countries?",
    "opts": [
      "Only sandwiches",
      "Only rice cakes",
      "Tacos, kebabs, dumplings, and grilled seafood",
      "Only salads"
    ],
    "a": "Tacos, kebabs, dumplings, and grilled seafood"
  },
  {
    "q": "20. What does street food connect?",
    "opts": [
      "Only school teachers",
      "Only professional cooks",
      "Only local drivers",
      "People from different cultures"
    ],
    "a": "People from different cultures"
  }
];

const newEx3Data = [
  {
    "word": "street",
    "mean": "đường phố"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "market",
    "mean": "chợ"
  },
  {
    "word": "lively",
    "mean": "sôi động"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "full",
    "mean": "trọn vẹn"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "there",
    "mean": "có; ở đó"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "stalls",
    "mean": "quầy hàng"
  },
  {
    "word": "selling",
    "mean": "việc bán; đang bán"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "kinds",
    "mean": "các loại"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "snacks",
    "mean": "đồ ăn nhẹ"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "desserts",
    "mean": "món tráng miệng"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "around",
    "mean": "xung quanh"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "best",
    "mean": "nhất"
  },
  {
    "word": "becomes",
    "mean": "trở nên"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "tourists",
    "mean": "khách du lịch"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
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
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "looks",
    "mean": "trông có vẻ"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "sellers",
    "mean": "những người bán hàng"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "customer",
    "mean": "khách hàng"
  },
  {
    "word": "warmly",
    "mean": "nồng nhiệt"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "offers",
    "mean": "mang đến"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "bodies",
    "mean": "cơ thể"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "fruit",
    "mean": "trái cây"
  },
  {
    "word": "vegetable",
    "mean": "rau; rau củ"
  },
  {
    "word": "salad",
    "mean": "salad; món rau trộn"
  },
  {
    "word": "grilled",
    "mean": "nướng"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "juice",
    "mean": "nước ép"
  },
  {
    "word": "popular",
    "mean": "phổ biến"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "foods",
    "mean": "thức ăn"
  },
  {
    "word": "provide",
    "mean": "cung cấp"
  },
  {
    "word": "vitamins",
    "mean": "vitamin"
  },
  {
    "word": "minerals",
    "mean": "khoáng chất"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "made",
    "mean": "được làm; làm"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "hygiene",
    "mean": "vệ sinh"
  },
  {
    "word": "practices",
    "mean": "thực hành; thói quen"
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
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
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
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "allowing",
    "mean": "việc cho phép"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "country",
    "mean": "đất nước"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "unique",
    "mean": "độc đáo"
  },
  {
    "word": "flavors",
    "mean": "các hương vị"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "styles",
    "mean": "phong cách"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "recipes",
    "mean": "công thức nấu ăn"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "countries",
    "mean": "quốc gia"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "known",
    "mean": "được biết đến"
  },
  {
    "word": "tacos",
    "mean": "bánh taco"
  },
  {
    "word": "kebabs",
    "mean": "thịt xiên nướng kebab"
  },
  {
    "word": "dumplings",
    "mean": "bánh há cảo; bánh bột có nhân"
  },
  {
    "word": "seafood",
    "mean": "hải sản"
  },
  {
    "word": "sweet",
    "mean": "ngọt"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "offer",
    "mean": "dâng; cúng"
  },
  {
    "word": "connects",
    "mean": "kết nối"
  },
  {
    "word": "cultures",
    "mean": "các nền văn hóa"
  },
  {
    "word": "fun",
    "mean": "vui nhộn"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "discover",
    "mean": "khám phá"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "tastes",
    "mean": "có vị; nếm"
  },
  {
    "word": "travel",
    "mean": "việc du lịch"
  }
];

const newEx4Data = [
  {
    "word": "street",
    "mean": "đường phố"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "market",
    "mean": "chợ"
  },
  {
    "word": "lively",
    "mean": "sôi động"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "full",
    "mean": "trọn vẹn"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "there",
    "mean": "có; ở đó"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "stalls",
    "mean": "quầy hàng"
  },
  {
    "word": "selling",
    "mean": "việc bán; đang bán"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "kinds",
    "mean": "các loại"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "snacks",
    "mean": "đồ ăn nhẹ"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "desserts",
    "mean": "món tráng miệng"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "around",
    "mean": "xung quanh"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "best",
    "mean": "nhất"
  },
  {
    "word": "becomes",
    "mean": "trở nên"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "tourists",
    "mean": "khách du lịch"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
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
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "looks",
    "mean": "trông có vẻ"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "sellers",
    "mean": "những người bán hàng"
  },
  {
    "word": "smile",
    "mean": "nụ cười; mỉm cười"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "customer",
    "mean": "khách hàng"
  },
  {
    "word": "warmly",
    "mean": "nồng nhiệt"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "offers",
    "mean": "mang đến"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "bodies",
    "mean": "cơ thể"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "fruit",
    "mean": "trái cây"
  },
  {
    "word": "vegetable",
    "mean": "rau; rau củ"
  },
  {
    "word": "salad",
    "mean": "salad; món rau trộn"
  },
  {
    "word": "grilled",
    "mean": "nướng"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "juice",
    "mean": "nước ép"
  },
  {
    "word": "popular",
    "mean": "phổ biến"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "foods",
    "mean": "thức ăn"
  },
  {
    "word": "provide",
    "mean": "cung cấp"
  },
  {
    "word": "vitamins",
    "mean": "vitamin"
  },
  {
    "word": "minerals",
    "mean": "khoáng chất"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "made",
    "mean": "được làm; làm"
  },
  {
    "word": "ingredients",
    "mean": "nguyên liệu"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "hygiene",
    "mean": "vệ sinh"
  },
  {
    "word": "practices",
    "mean": "thực hành; thói quen"
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
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
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
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "allowing",
    "mean": "việc cho phép"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "country",
    "mean": "đất nước"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "special",
    "mean": "đặc biệt"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "unique",
    "mean": "độc đáo"
  },
  {
    "word": "flavors",
    "mean": "các hương vị"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "styles",
    "mean": "phong cách"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "recipes",
    "mean": "công thức nấu ăn"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "countries",
    "mean": "quốc gia"
  },
  {
    "word": "famous",
    "mean": "nổi tiếng"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "known",
    "mean": "được biết đến"
  },
  {
    "word": "tacos",
    "mean": "bánh taco"
  },
  {
    "word": "kebabs",
    "mean": "thịt xiên nướng kebab"
  },
  {
    "word": "dumplings",
    "mean": "bánh há cảo; bánh bột có nhân"
  },
  {
    "word": "seafood",
    "mean": "hải sản"
  },
  {
    "word": "sweet",
    "mean": "ngọt"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "offer",
    "mean": "dâng; cúng"
  },
  {
    "word": "connects",
    "mean": "kết nối"
  },
  {
    "word": "cultures",
    "mean": "các nền văn hóa"
  },
  {
    "word": "fun",
    "mean": "vui nhộn"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "discover",
    "mean": "khám phá"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "tastes",
    "mean": "có vị; nếm"
  },
  {
    "word": "travel",
    "mean": "việc du lịch"
  }
];

const newEx5Data = [
  "A street food market is a lively place full of delicious smells and happy people.",
  "There are many colorful food stalls selling different kinds of meals, snacks, drinks, and desserts.",
  "Visitors walk around and choose the food they like best.",
  "The market becomes very busy in the evening.",
  "Families, tourists, and friends enjoy eating together while listening to music.",
  "Some people take photos because the food looks beautiful and interesting.",
  "The friendly sellers smile and welcome every customer warmly.",
  "A street food market is a wonderful place to enjoy local food.",
  "It offers tasty meals and creates happy memories for everyone.",
  "Some street food is healthy and good for our bodies."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Street food is different in every country."
  },
  {
    "id": 2,
    "correct": "Every country has something special to offer."
  },
  {
    "id": 3,
    "correct": "Street food connects people from different cultures."
  },
  {
    "id": 4,
    "correct": "The market becomes very busy in the evening."
  },
  {
    "id": 5,
    "correct": "Drinking enough water is also important during meals."
  },
  {
    "id": 6,
    "correct": "The friendly sellers smile and welcome every customer warmly."
  },
  {
    "id": 7,
    "correct": "Healthy street food is usually made with fresh ingredients."
  },
  {
    "id": 8,
    "correct": "Visitors walk around and choose the food they like best."
  },
  {
    "id": 9,
    "correct": "It offers tasty meals and creates happy memories for everyone."
  },
  {
    "id": 10,
    "correct": "Some street food is healthy and good for our bodies."
  },
  {
    "id": 11,
    "correct": "These foods provide vitamins, minerals, and energy for daily activities."
  },
  {
    "id": 12,
    "correct": "Sellers wash vegetables, prepare food carefully, and keep everything clean."
  },
  {
    "id": 13,
    "correct": "Eating healthy street food helps people stay strong and active."
  },
  {
    "id": 14,
    "correct": "Visitors often try street food to learn about local culture."
  },
  {
    "id": 15,
    "correct": "Families, tourists, and friends enjoy eating together while listening to music."
  }
];

const newEx7Data = [
  {
    "q": "What makes a street food market lively?",
    "a": "Colorful stalls, delicious smells, happy people, music, and friendly sellers make it lively."
  },
  {
    "q": "What can visitors do at a street food market?",
    "a": "They can walk around, choose food, eat together, listen to music, and take photos."
  },
  {
    "q": "Why do sellers welcome customers warmly?",
    "a": "Friendly service helps create an enjoyable market atmosphere."
  },
  {
    "q": "Which street foods are presented as healthy choices?",
    "a": "Fresh fruit, vegetable salad, grilled fish, and fresh juice are healthy choices."
  },
  {
    "q": "What nutrients do healthy street foods provide?",
    "a": "They provide vitamins, minerals, and energy for daily activities."
  },
  {
    "q": "What hygiene habits should customers look for?",
    "a": "They should choose tidy stalls that follow good hygiene practices."
  },
  {
    "q": "How does healthy street food help people?",
    "a": "It helps people stay strong and active and can improve health."
  },
  {
    "q": "Why is street food different in every country?",
    "a": "Each place has special dishes, local ingredients, unique flavors, and cooking styles."
  },
  {
    "q": "What international street foods are mentioned?",
    "a": "The lesson mentions noodles, tacos, kebabs, dumplings, grilled seafood, sweet snacks, and fresh drinks."
  },
  {
    "q": "How does street food help people learn about culture?",
    "a": "Trying local street food lets visitors discover local ingredients, recipes, and flavors."
  }
];
