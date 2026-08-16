// ===== environment01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. The environment is everything around us, including air, water, land, plants, animals, and _____.",
    "a": "people"
  },
  {
    "q": "2. It gives us the natural resources we need to live, such as food, clean water, and _____ air.",
    "a": "fresh"
  },
  {
    "q": "3. When rivers are polluted or forests are destroyed, animals lose their homes, and people may become _____.",
    "a": "sick"
  },
  {
    "q": "4. We can save water, reduce waste, plant trees, and keep our neighborhoods _____. for a safer and healthier environment every day",
    "a": "clean"
  },
  {
    "q": "5. By making responsible choices every day, we help create a safer, healthier, and more beautiful world for everyone today and _____.",
    "a": "tomorrow"
  },
  {
    "q": "6. Small habits, when practiced by many people, can create a strong positive _____. for a safer and healthier environment every day",
    "a": "effect"
  },
  {
    "q": "7. At home, we can turn off lights, use less water, and avoid single-use _____.",
    "a": "plastic"
  },
  {
    "q": "8. At school or work, we should keep places clean and recycle paper, cans, and plastic _____.",
    "a": "correctly"
  },
  {
    "q": "9. Every responsible action protects the planet and encourages others to do the same _____ new day.",
    "a": "each"
  },
  {
    "q": "10. Polluted air can be difficult to see, but it can still harm our _____.",
    "a": "health"
  },
  {
    "q": "11. People who breathe dirty air may cough, feel tired, or have breathing _____. for a safer and healthier environment every day",
    "a": "problems"
  },
  {
    "q": "12. We can help reduce air pollution by using public transport, riding bicycles, and saving _____.",
    "a": "electricity"
  },
  {
    "q": "13. Planting more trees is also helpful because trees clean the air and make cities cooler and healthier _____.",
    "a": "everywhere"
  },
  {
    "q": "14. A healthy environment is important for _____ living thing. This environmental idea is important for people and communities every day.",
    "a": "every"
  },
  {
    "q": "15. Small changes in nature can affect the whole planet. This environmental idea is important for people and communities _____ day.",
    "a": "every"
  },
  {
    "q": "16. We should learn to respect and protect the environment. This environmental idea is important for people and communities _____ day.",
    "a": "every"
  },
  {
    "q": "17. Protecting the environment can begin with simple actions in our daily lives. This environmental idea is important for people and communities _____ day.",
    "a": "every"
  },
  {
    "q": "18. We do not need to make big changes immediately. This environmental idea is important for people and communities _____ day.",
    "a": "every"
  },
  {
    "q": "19. We can carry reusable bags, bottles, and lunch boxes. This environmental idea is important for people and communities _____ day.",
    "a": "every"
  },
  {
    "q": "20. Walking, cycling, or using public transport also helps reduce pollution. This environmental idea is important for people and communities _____ day.",
    "a": "every"
  }
];

const newEx2Data = [
  {
    "q": "1. Complete the sentence: The _____ is everything around us, including air, water, land, plants, animals, and people.",
    "opts": [
      "environment",
      "everything",
      "including",
      "water"
    ],
    "a": "environment"
  },
  {
    "q": "2. Complete the sentence: It _____ us the natural resources we need to live, such as food, clean water, and fresh air.",
    "opts": [
      "environment",
      "everything",
      "including",
      "gives"
    ],
    "a": "gives"
  },
  {
    "q": "3. Complete the sentence: A _____ environment is important for every living thing.",
    "opts": [
      "everything",
      "including",
      "healthy",
      "environment"
    ],
    "a": "healthy"
  },
  {
    "q": "4. Complete the sentence: When _____ are polluted or forests are destroyed, animals lose their homes, and people may become sick.",
    "opts": [
      "including",
      "rivers",
      "environment",
      "everything"
    ],
    "a": "rivers"
  },
  {
    "q": "5. Complete the sentence: _____ changes in nature can affect the whole planet.",
    "opts": [
      "small",
      "environment",
      "everything",
      "including"
    ],
    "a": "small"
  },
  {
    "q": "6. Complete the sentence: We _____ learn to respect and protect the environment.",
    "opts": [
      "environment",
      "everything",
      "including",
      "should"
    ],
    "a": "should"
  },
  {
    "q": "7. Complete the sentence: We can save _____, reduce waste, plant trees, and keep our neighborhoods clean.",
    "opts": [
      "everything",
      "including",
      "water",
      "environment"
    ],
    "a": "water"
  },
  {
    "q": "8. Complete the sentence: By _____ responsible choices every day, we help create a safer, healthier, and more beautiful world for everyone today and tomorrow.",
    "opts": [
      "including",
      "making",
      "environment",
      "everything"
    ],
    "a": "making"
  },
  {
    "q": "9. Complete the sentence: _____ the environment can begin with simple actions in our daily lives.",
    "opts": [
      "protecting",
      "environment",
      "everything",
      "including"
    ],
    "a": "protecting"
  },
  {
    "q": "10. Complete the sentence: We do not need to make big _____ immediately.",
    "opts": [
      "environment",
      "everything",
      "including",
      "changes"
    ],
    "a": "changes"
  },
  {
    "q": "11. Complete the sentence: _____ habits, when practiced by many people, can create a strong positive effect.",
    "opts": [
      "everything",
      "including",
      "small",
      "environment"
    ],
    "a": "small"
  },
  {
    "q": "12. Complete the sentence: At home, we can turn off _____, use less water, and avoid single-use plastic.",
    "opts": [
      "including",
      "lights",
      "environment",
      "everything"
    ],
    "a": "lights"
  },
  {
    "q": "13. Complete the sentence: We can _____ reusable bags, bottles, and lunch boxes.",
    "opts": [
      "carry",
      "environment",
      "everything",
      "including"
    ],
    "a": "carry"
  },
  {
    "q": "14. Complete the sentence: _____, cycling, or using public transport also helps reduce pollution.",
    "opts": [
      "environment",
      "everything",
      "including",
      "walking"
    ],
    "a": "walking"
  },
  {
    "q": "15. Complete the sentence: At _____ or work, we should keep places clean and recycle paper, cans, and plastic correctly.",
    "opts": [
      "everything",
      "including",
      "school",
      "environment"
    ],
    "a": "school"
  },
  {
    "q": "16. Complete the sentence: We can also _____ friends and family to care for nature.",
    "opts": [
      "including",
      "remind",
      "environment",
      "everything"
    ],
    "a": "remind"
  },
  {
    "q": "17. Complete the sentence: _____ responsible action protects the planet and encourages others to do the same each new day.",
    "opts": [
      "every",
      "environment",
      "everything",
      "including"
    ],
    "a": "every"
  },
  {
    "q": "18. Complete the sentence: Air _____ happens when harmful gases, smoke, and dust enter the air.",
    "opts": [
      "environment",
      "everything",
      "including",
      "pollution"
    ],
    "a": "pollution"
  },
  {
    "q": "19. Complete the sentence: Cars, _____, fires, and construction work are common causes.",
    "opts": [
      "everything",
      "including",
      "factories",
      "environment"
    ],
    "a": "factories"
  },
  {
    "q": "20. Complete the sentence: _____ air can be difficult to see, but it can still harm our health.",
    "opts": [
      "including",
      "polluted",
      "environment",
      "everything"
    ],
    "a": "polluted"
  }
];

const newEx3Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "everything",
    "mean": "mọi thứ"
  },
  {
    "word": "including",
    "mean": "bao gồm"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "land",
    "mean": "đất; đất đai"
  },
  {
    "word": "plants",
    "mean": "cây"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "natural",
    "mean": "tự nhiên"
  },
  {
    "word": "resources",
    "mean": "tài nguyên"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "live",
    "mean": "sống"
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
    "word": "clean",
    "mean": "sạch; làm sạch"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "living",
    "mean": "sống; thuộc sinh vật"
  },
  {
    "word": "thing",
    "mean": "điều; thứ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "rivers",
    "mean": "sông"
  },
  {
    "word": "polluted",
    "mean": "bị ô nhiễm"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "forests",
    "mean": "rừng"
  },
  {
    "word": "destroyed",
    "mean": "bị phá hủy"
  },
  {
    "word": "lose",
    "mean": "mất"
  },
  {
    "word": "homes",
    "mean": "nơi ở; môi trường sống"
  },
  {
    "word": "may",
    "mean": "có thể"
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
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "changes",
    "mean": "những thay đổi"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "affect",
    "mean": "ảnh hưởng"
  },
  {
    "word": "whole",
    "mean": "toàn phần; nguyên hạt"
  },
  {
    "word": "planet",
    "mean": "hành tinh"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "plant",
    "mean": "trồng"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "neighborhoods",
    "mean": "khu dân cư"
  },
  {
    "word": "making",
    "mean": "việc thực hiện"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "healthier",
    "mean": "khỏe mạnh hơn"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "tomorrow",
    "mean": "ngày mai"
  },
  {
    "word": "protecting",
    "mean": "đang bảo vệ"
  },
  {
    "word": "begin",
    "mean": "bắt đầu"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "actions",
    "mean": "hành động"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "lives",
    "mean": "sinh mạng"
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
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "big",
    "mean": "lớn"
  },
  {
    "word": "immediately",
    "mean": "ngay lập tức"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "practiced",
    "mean": "được thực hiện"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "effect",
    "mean": "tác động"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "turn",
    "mean": "lượt"
  },
  {
    "word": "off",
    "mean": "tắt"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "single",
    "mean": "đơn lẻ"
  },
  {
    "word": "plastic",
    "mean": "nhựa"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "reusable",
    "mean": "có thể tái sử dụng"
  },
  {
    "word": "bags",
    "mean": "túi"
  },
  {
    "word": "bottles",
    "mean": "chai"
  },
  {
    "word": "lunch",
    "mean": "bữa trưa"
  },
  {
    "word": "boxes",
    "mean": "hộp"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "cycling",
    "mean": "việc đạp xe"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "transport",
    "mean": "giao thông; phương tiện"
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
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "places",
    "mean": "nơi; đặt"
  },
  {
    "word": "recycle",
    "mean": "tái chế"
  },
  {
    "word": "paper",
    "mean": "giấy"
  },
  {
    "word": "cans",
    "mean": "lon"
  },
  {
    "word": "correctly",
    "mean": "chính xác"
  },
  {
    "word": "remind",
    "mean": "nhắc nhở"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "action",
    "mean": "hành động"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "encourages",
    "mean": "khuyến khích"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "same",
    "mean": "cùng một"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "problem",
    "mean": "vấn đề"
  },
  {
    "word": "happens",
    "mean": "xảy ra"
  },
  {
    "word": "harmful",
    "mean": "có hại"
  },
  {
    "word": "gases",
    "mean": "các loại khí"
  },
  {
    "word": "smoke",
    "mean": "khói"
  },
  {
    "word": "dust",
    "mean": "bụi"
  },
  {
    "word": "enter",
    "mean": "đi vào; xâm nhập"
  },
  {
    "word": "cars",
    "mean": "ô tô"
  },
  {
    "word": "factories",
    "mean": "nhà máy"
  },
  {
    "word": "fires",
    "mean": "đám cháy"
  },
  {
    "word": "construction",
    "mean": "xây dựng; công trình xây dựng"
  },
  {
    "word": "common",
    "mean": "phổ biến; thông thường"
  },
  {
    "word": "causes",
    "mean": "gây ra"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "harm",
    "mean": "gây hại"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "who",
    "mean": "người mà; ai"
  },
  {
    "word": "breathe",
    "mean": "hít thở"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "cough",
    "mean": "ho"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "breathing",
    "mean": "việc hô hấp"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "damages",
    "mean": "gây hại"
  },
  {
    "word": "buildings",
    "mean": "các tòa nhà"
  },
  {
    "word": "climate",
    "mean": "khí hậu"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "affected",
    "mean": "bị ảnh hưởng"
  },
  {
    "word": "riding",
    "mean": "việc đi xe"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "saving",
    "mean": "tiết kiệm"
  },
  {
    "word": "electricity",
    "mean": "điện"
  },
  {
    "word": "governments",
    "mean": "chính phủ"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "factory",
    "mean": "nhà máy"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "planting",
    "mean": "việc trồng"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "cooler",
    "mean": "mát hơn"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  }
];

const newEx4Data = [
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "everything",
    "mean": "mọi thứ"
  },
  {
    "word": "including",
    "mean": "bao gồm"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "land",
    "mean": "đất; đất đai"
  },
  {
    "word": "plants",
    "mean": "cây"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "natural",
    "mean": "tự nhiên"
  },
  {
    "word": "resources",
    "mean": "tài nguyên"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "live",
    "mean": "sống"
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
    "word": "clean",
    "mean": "sạch; làm sạch"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "living",
    "mean": "sống; thuộc sinh vật"
  },
  {
    "word": "thing",
    "mean": "điều; thứ"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "rivers",
    "mean": "sông"
  },
  {
    "word": "polluted",
    "mean": "bị ô nhiễm"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "forests",
    "mean": "rừng"
  },
  {
    "word": "destroyed",
    "mean": "bị phá hủy"
  },
  {
    "word": "lose",
    "mean": "mất"
  },
  {
    "word": "homes",
    "mean": "nơi ở; môi trường sống"
  },
  {
    "word": "may",
    "mean": "có thể"
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
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "changes",
    "mean": "những thay đổi"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "affect",
    "mean": "ảnh hưởng"
  },
  {
    "word": "whole",
    "mean": "toàn phần; nguyên hạt"
  },
  {
    "word": "planet",
    "mean": "hành tinh"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "plant",
    "mean": "trồng"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "neighborhoods",
    "mean": "khu dân cư"
  },
  {
    "word": "making",
    "mean": "việc thực hiện"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "healthier",
    "mean": "khỏe mạnh hơn"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "today",
    "mean": "hôm nay"
  },
  {
    "word": "tomorrow",
    "mean": "ngày mai"
  },
  {
    "word": "protecting",
    "mean": "đang bảo vệ"
  },
  {
    "word": "begin",
    "mean": "bắt đầu"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "actions",
    "mean": "hành động"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "lives",
    "mean": "sinh mạng"
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
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "big",
    "mean": "lớn"
  },
  {
    "word": "immediately",
    "mean": "ngay lập tức"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "practiced",
    "mean": "được thực hiện"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
  },
  {
    "word": "positive",
    "mean": "tích cực"
  },
  {
    "word": "effect",
    "mean": "tác động"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "turn",
    "mean": "lượt"
  },
  {
    "word": "off",
    "mean": "tắt"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "single",
    "mean": "đơn lẻ"
  },
  {
    "word": "plastic",
    "mean": "nhựa"
  },
  {
    "word": "carry",
    "mean": "mang"
  },
  {
    "word": "reusable",
    "mean": "có thể tái sử dụng"
  },
  {
    "word": "bags",
    "mean": "túi"
  },
  {
    "word": "bottles",
    "mean": "chai"
  },
  {
    "word": "lunch",
    "mean": "bữa trưa"
  },
  {
    "word": "boxes",
    "mean": "hộp"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "cycling",
    "mean": "việc đạp xe"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "transport",
    "mean": "giao thông; phương tiện"
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
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "places",
    "mean": "nơi; đặt"
  },
  {
    "word": "recycle",
    "mean": "tái chế"
  },
  {
    "word": "paper",
    "mean": "giấy"
  },
  {
    "word": "cans",
    "mean": "lon"
  },
  {
    "word": "correctly",
    "mean": "chính xác"
  },
  {
    "word": "remind",
    "mean": "nhắc nhở"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "care",
    "mean": "sự chăm sóc; chăm sóc"
  },
  {
    "word": "action",
    "mean": "hành động"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "encourages",
    "mean": "khuyến khích"
  },
  {
    "word": "others",
    "mean": "những loài khác"
  },
  {
    "word": "same",
    "mean": "cùng một"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "problem",
    "mean": "vấn đề"
  },
  {
    "word": "happens",
    "mean": "xảy ra"
  },
  {
    "word": "harmful",
    "mean": "có hại"
  },
  {
    "word": "gases",
    "mean": "các loại khí"
  },
  {
    "word": "smoke",
    "mean": "khói"
  },
  {
    "word": "dust",
    "mean": "bụi"
  },
  {
    "word": "enter",
    "mean": "đi vào; xâm nhập"
  },
  {
    "word": "cars",
    "mean": "ô tô"
  },
  {
    "word": "factories",
    "mean": "nhà máy"
  },
  {
    "word": "fires",
    "mean": "đám cháy"
  },
  {
    "word": "construction",
    "mean": "xây dựng; công trình xây dựng"
  },
  {
    "word": "common",
    "mean": "phổ biến; thông thường"
  },
  {
    "word": "causes",
    "mean": "gây ra"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "still",
    "mean": "vẫn"
  },
  {
    "word": "harm",
    "mean": "gây hại"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "who",
    "mean": "người mà; ai"
  },
  {
    "word": "breathe",
    "mean": "hít thở"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "cough",
    "mean": "ho"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "breathing",
    "mean": "việc hô hấp"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
  },
  {
    "word": "damages",
    "mean": "gây hại"
  },
  {
    "word": "buildings",
    "mean": "các tòa nhà"
  },
  {
    "word": "climate",
    "mean": "khí hậu"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "affected",
    "mean": "bị ảnh hưởng"
  },
  {
    "word": "riding",
    "mean": "việc đi xe"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "saving",
    "mean": "tiết kiệm"
  },
  {
    "word": "electricity",
    "mean": "điện"
  },
  {
    "word": "governments",
    "mean": "chính phủ"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "factory",
    "mean": "nhà máy"
  },
  {
    "word": "support",
    "mean": "hỗ trợ"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "planting",
    "mean": "việc trồng"
  },
  {
    "word": "helpful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "cooler",
    "mean": "mát hơn"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  }
];

const newEx5Data = [
  "The environment is everything around us, including air, water, land, plants, animals, and people.",
  "It gives us the natural resources we need to live, such as food, clean water, and fresh air.",
  "A healthy environment is important for every living thing.",
  "When rivers are polluted or forests are destroyed, animals lose their homes, and people may become sick.",
  "Small changes in nature can affect the whole planet.",
  "We should learn to respect and protect the environment.",
  "We can save water, reduce waste, plant trees, and keep our neighborhoods clean.",
  "Protecting the environment can begin with simple actions in our daily lives.",
  "We do not need to make big changes immediately.",
  "Small habits, when practiced by many people, can create a strong positive effect."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "The environment is everything around us, including air, water, land, plants, animals, and people."
  },
  {
    "id": 2,
    "correct": "It gives us the natural resources we need to live, such as food, clean water, and fresh air."
  },
  {
    "id": 3,
    "correct": "A healthy environment is important for every living thing."
  },
  {
    "id": 4,
    "correct": "When rivers are polluted or forests are destroyed, animals lose their homes, and people may become sick."
  },
  {
    "id": 5,
    "correct": "Small changes in nature can affect the whole planet."
  },
  {
    "id": 6,
    "correct": "We should learn to respect and protect the environment."
  },
  {
    "id": 7,
    "correct": "We can save water, reduce waste, plant trees, and keep our neighborhoods clean."
  },
  {
    "id": 8,
    "correct": "By making responsible choices every day, we help create a safer, healthier, and more beautiful world for everyone today and tomorrow."
  },
  {
    "id": 9,
    "correct": "Protecting the environment can begin with simple actions in our daily lives."
  },
  {
    "id": 10,
    "correct": "We do not need to make big changes immediately."
  },
  {
    "id": 11,
    "correct": "Small habits, when practiced by many people, can create a strong positive effect."
  },
  {
    "id": 12,
    "correct": "At home, we can turn off lights, use less water, and avoid single-use plastic."
  },
  {
    "id": 13,
    "correct": "We can carry reusable bags, bottles, and lunch boxes."
  },
  {
    "id": 14,
    "correct": "Walking, cycling, or using public transport also helps reduce pollution."
  },
  {
    "id": 15,
    "correct": "At school or work, we should keep places clean and recycle paper, cans, and plastic correctly."
  }
];

const newEx7Data = [
  {
    "q": "What is one important idea explained in the reading?",
    "a": "The environment is everything around us, including air, water, land, plants, animals, and people."
  },
  {
    "q": "What environmental problem is mentioned in the text?",
    "a": "It gives us the natural resources we need to live, such as food, clean water, and fresh air."
  },
  {
    "q": "What can people do to help according to the reading?",
    "a": "A healthy environment is important for every living thing."
  },
  {
    "q": "Why is this environmental topic important?",
    "a": "When rivers are polluted or forests are destroyed, animals lose their homes, and people may become sick."
  },
  {
    "q": "What example does the reading give?",
    "a": "Small changes in nature can affect the whole planet."
  },
  {
    "q": "What can happen if the environment is not protected?",
    "a": "We should learn to respect and protect the environment."
  },
  {
    "q": "How can daily habits make a difference?",
    "a": "We can save water, reduce waste, plant trees, and keep our neighborhoods clean."
  },
  {
    "q": "What does the reading say about natural resources?",
    "a": "By making responsible choices every day, we help create a safer, healthier, and more beautiful world for everyone today and tomorrow."
  },
  {
    "q": "What action is suggested for communities or governments?",
    "a": "Protecting the environment can begin with simple actions in our daily lives."
  },
  {
    "q": "What is one key message from these chapters?",
    "a": "We do not need to make big changes immediately."
  }
];

