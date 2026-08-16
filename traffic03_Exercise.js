// ===== traffic03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Driving carefully is important for every road user in the _____ during normal travel in the city every day.",
    "a": "city"
  },
  {
    "q": "2. Drivers should stay focused and always watch other vehicles, cyclists, and _____ so that people can travel safely in busy areas.",
    "a": "pedestrians"
  },
  {
    "q": "3. Safe driving helps prevent accidents and protects everyone traveling on busy _____ every day.",
    "a": "roads"
  },
  {
    "q": "4. Drivers must obey speed limits and stop completely at red _____ as part of safe and responsible daily travel.",
    "a": "lights"
  },
  {
    "q": "5. They should avoid using mobile phones while driving because distractions are _____ during normal travel in the city every day.",
    "a": "dangerous"
  },
  {
    "q": "6. Keeping enough distance from other vehicles makes driving much safer for _____ so that people can travel safely in busy areas.",
    "a": "everyone"
  },
  {
    "q": "7. Careful driving creates safer streets and happier _____ when many people are moving through city streets.",
    "a": "communities"
  },
  {
    "q": "8. Responsible drivers show respect for other people by following traffic _____ every day as part of safe and responsible daily travel.",
    "a": "rules"
  },
  {
    "q": "9. Good driving habits help everyone reach their _____ safely and comfortably during normal travel in the city every day.",
    "a": "destinations"
  },
  {
    "q": "10. Heavy traffic causes air pollution in many large _____ every day so that people can travel safely in busy areas.",
    "a": "cities"
  },
  {
    "q": "11. Cars, buses, trucks, and motorbikes produce smoke that makes the air _____ when many people are moving through city streets.",
    "a": "dirty"
  },
  {
    "q": "12. Poor air quality can affect people's health, especially children and older adults _____ nearby.",
    "a": "living"
  },
  {
    "q": "13. People can help reduce pollution by using public _____ more often during normal travel in the city every day.",
    "a": "transportation"
  },
  {
    "q": "14. Walking, cycling, or sharing cars also lowers the number of _____ on roads so that people can travel safely in busy areas.",
    "a": "vehicles"
  },
  {
    "q": "15. Planting more trees helps improve air quality in busy _____ too when many people are moving through city streets.",
    "a": "neighborhoods"
  },
  {
    "q": "16. Cleaner transportation _____ everyone in the city as part of safe and responsible daily travel.",
    "a": "benefits"
  },
  {
    "q": "17. Small daily actions can reduce pollution and protect _____ during normal travel in the city every day.",
    "a": "nature"
  },
  {
    "q": "18. Healthy air makes life better for families, workers, students, and future _____ everywhere so that people can travel safely in busy areas.",
    "a": "generations"
  },
  {
    "q": "19. Taking a bus is an easy way to _____ around the city when many people are moving through city streets.",
    "a": "travel"
  },
  {
    "q": "20. Many students, workers, and visitors use buses every day because they are affordable and _____.",
    "a": "convenient"
  }
];

const newEx2Data = [
  {
    "q": "1. What should drivers watch while driving?",
    "opts": [
      "They should watch other vehicles, cyclists, and pedestrians.",
      "Because distractions are dangerous.",
      "It makes driving much safer.",
      "Heavy traffic and smoke from vehicles cause air pollution."
    ],
    "a": "They should watch other vehicles, cyclists, and pedestrians."
  },
  {
    "q": "2. Why should drivers avoid mobile phones?",
    "opts": [
      "It makes driving much safer.",
      "Heavy traffic and smoke from vehicles cause air pollution.",
      "They can use public transportation, walk, cycle, share cars, and plant more trees.",
      "Because distractions are dangerous."
    ],
    "a": "Because distractions are dangerous."
  },
  {
    "q": "3. What does keeping enough distance from other vehicles do?",
    "opts": [
      "They can use public transportation, walk, cycle, share cars, and plant more trees.",
      "Because buses are affordable and convenient.",
      "It makes driving much safer.",
      "Heavy traffic and smoke from vehicles cause air pollution."
    ],
    "a": "It makes driving much safer."
  },
  {
    "q": "4. What causes air pollution in many large cities?",
    "opts": [
      "They should keep the bus clean, respect others, and speak quietly.",
      "Heavy traffic and smoke from vehicles cause air pollution.",
      "They can use public transportation, walk, cycle, share cars, and plant more trees.",
      "Because buses are affordable and convenient."
    ],
    "a": "Heavy traffic and smoke from vehicles cause air pollution."
  },
  {
    "q": "5. How can people help reduce traffic pollution?",
    "opts": [
      "They can use public transportation, walk, cycle, share cars, and plant more trees.",
      "Because buses are affordable and convenient.",
      "They should keep the bus clean, respect others, and speak quietly.",
      "It provides regular exercise and helps improve fitness."
    ],
    "a": "They can use public transportation, walk, cycle, share cars, and plant more trees."
  },
  {
    "q": "6. Why do many people use buses?",
    "opts": [
      "They should keep the bus clean, respect others, and speak quietly.",
      "It provides regular exercise and helps improve fitness.",
      "They should use sidewalks.",
      "Because buses are affordable and convenient."
    ],
    "a": "Because buses are affordable and convenient."
  },
  {
    "q": "7. How should passengers behave on a bus?",
    "opts": [
      "They should use sidewalks.",
      "They reduce traffic and pollution and help create safer, cleaner, and friendlier cities.",
      "They should keep the bus clean, respect others, and speak quietly.",
      "It provides regular exercise and helps improve fitness."
    ],
    "a": "They should keep the bus clean, respect others, and speak quietly."
  },
  {
    "q": "8. Why is walking healthy?",
    "opts": [
      "They should watch other vehicles, cyclists, and pedestrians.",
      "It provides regular exercise and helps improve fitness.",
      "They should use sidewalks.",
      "They reduce traffic and pollution and help create safer, cleaner, and friendlier cities."
    ],
    "a": "It provides regular exercise and helps improve fitness."
  },
  {
    "q": "9. What should pedestrians use whenever possible?",
    "opts": [
      "They should use sidewalks.",
      "They reduce traffic and pollution and help create safer, cleaner, and friendlier cities.",
      "They should watch other vehicles, cyclists, and pedestrians.",
      "Because distractions are dangerous."
    ],
    "a": "They should use sidewalks."
  },
  {
    "q": "10. How do walking and cleaner transportation help cities?",
    "opts": [
      "They should watch other vehicles, cyclists, and pedestrians.",
      "Because distractions are dangerous.",
      "It makes driving much safer.",
      "They reduce traffic and pollution and help create safer, cleaner, and friendlier cities."
    ],
    "a": "They reduce traffic and pollution and help create safer, cleaner, and friendlier cities."
  },
  {
    "q": "11. What is the Vietnamese meaning of \"driving\"?",
    "opts": [
      "quan trọng",
      "đường",
      "việc lái xe",
      "một cách cẩn thận"
    ],
    "a": "việc lái xe"
  },
  {
    "q": "12. What is the Vietnamese meaning of \"carefully\"?",
    "opts": [
      "người sử dụng",
      "một cách cẩn thận",
      "quan trọng",
      "đường"
    ],
    "a": "một cách cẩn thận"
  },
  {
    "q": "13. What is the Vietnamese meaning of \"important\"?",
    "opts": [
      "quan trọng",
      "đường",
      "người sử dụng",
      "thành phố"
    ],
    "a": "quan trọng"
  },
  {
    "q": "14. What is the Vietnamese meaning of \"road\"?",
    "opts": [
      "người sử dụng",
      "thành phố",
      "người lái xe",
      "đường"
    ],
    "a": "đường"
  },
  {
    "q": "15. What is the Vietnamese meaning of \"user\"?",
    "opts": [
      "người lái xe",
      "giữ; ở lại",
      "người sử dụng",
      "thành phố"
    ],
    "a": "người sử dụng"
  },
  {
    "q": "16. What is the Vietnamese meaning of \"city\"?",
    "opts": [
      "tập trung",
      "thành phố",
      "người lái xe",
      "giữ; ở lại"
    ],
    "a": "thành phố"
  },
  {
    "q": "17. What is the Vietnamese meaning of \"drivers\"?",
    "opts": [
      "người lái xe",
      "giữ; ở lại",
      "tập trung",
      "luôn luôn"
    ],
    "a": "người lái xe"
  },
  {
    "q": "18. What is the Vietnamese meaning of \"stay\"?",
    "opts": [
      "tập trung",
      "luôn luôn",
      "việc lái xe",
      "giữ; ở lại"
    ],
    "a": "giữ; ở lại"
  },
  {
    "q": "19. What is the Vietnamese meaning of \"focused\"?",
    "opts": [
      "việc lái xe",
      "một cách cẩn thận",
      "tập trung",
      "luôn luôn"
    ],
    "a": "tập trung"
  },
  {
    "q": "20. What is the Vietnamese meaning of \"always\"?",
    "opts": [
      "quan trọng",
      "luôn luôn",
      "việc lái xe",
      "một cách cẩn thận"
    ],
    "a": "luôn luôn"
  }
];

const newEx3Data = [
  {
    "word": "driving",
    "mean": "việc lái xe"
  },
  {
    "word": "carefully",
    "mean": "một cách cẩn thận"
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
    "word": "road",
    "mean": "đường"
  },
  {
    "word": "user",
    "mean": "người sử dụng"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "drivers",
    "mean": "người lái xe"
  },
  {
    "word": "should",
    "mean": "nên"
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
    "word": "and",
    "mean": "và"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "cyclists",
    "mean": "người đi xe đạp"
  },
  {
    "word": "pedestrians",
    "mean": "người đi bộ"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "accidents",
    "mean": "tai nạn"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "traveling",
    "mean": "đang di chuyển"
  },
  {
    "word": "busy",
    "mean": "bận rộn; đông đúc"
  },
  {
    "word": "roads",
    "mean": "đường"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "obey",
    "mean": "tuân thủ"
  },
  {
    "word": "speed",
    "mean": "tốc độ"
  },
  {
    "word": "limits",
    "mean": "giới hạn"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "completely",
    "mean": "hoàn toàn"
  },
  {
    "word": "red",
    "mean": "đỏ"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "mobile",
    "mean": "di động"
  },
  {
    "word": "phones",
    "mean": "điện thoại"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "distractions",
    "mean": "sự xao nhãng"
  },
  {
    "word": "dangerous",
    "mean": "nguy hiểm"
  },
  {
    "word": "keeping",
    "mean": "việc giữ; duy trì"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "distance",
    "mean": "khoảng cách; cự ly"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "communities",
    "mean": "cộng đồng"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "show",
    "mean": "cho thấy"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
  },
  {
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "reach",
    "mean": "đến; đạt tới"
  },
  {
    "word": "destinations",
    "mean": "điểm đến"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "comfortably",
    "mean": "một cách thoải mái"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "heavy",
    "mean": "đông đúc; nặng"
  },
  {
    "word": "causes",
    "mean": "gây ra"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "cars",
    "mean": "ô tô"
  },
  {
    "word": "buses",
    "mean": "xe buýt"
  },
  {
    "word": "trucks",
    "mean": "xe tải"
  },
  {
    "word": "motorbikes",
    "mean": "xe máy"
  },
  {
    "word": "produce",
    "mean": "sản xuất"
  },
  {
    "word": "smoke",
    "mean": "khói"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "poor",
    "mean": "kém"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
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
    "word": "people's",
    "mean": "của mọi người"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "especially",
    "mean": "đặc biệt"
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
    "word": "adults",
    "mean": "người lớn"
  },
  {
    "word": "living",
    "mean": "sống; việc sống"
  },
  {
    "word": "nearby",
    "mean": "gần đó"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "transportation",
    "mean": "giao thông; phương tiện đi lại"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
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
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ; đi chung"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "lowers",
    "mean": "làm giảm"
  },
  {
    "word": "number",
    "mean": "số"
  },
  {
    "word": "planting",
    "mean": "việc trồng"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "neighborhoods",
    "mean": "các khu phố"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "benefits",
    "mean": "mang lại lợi ích"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "actions",
    "mean": "hành động"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "generations",
    "mean": "thế hệ"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "bus",
    "mean": "xe buýt"
  },
  {
    "word": "ride",
    "mean": "chuyến đi"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "easy",
    "mean": "dễ"
  },
  {
    "word": "way",
    "mean": "cách; đường"
  },
  {
    "word": "travel",
    "mean": "di chuyển; đi lại"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "affordable",
    "mean": "có giá phải chăng"
  },
  {
    "word": "convenient",
    "mean": "tiện lợi"
  },
  {
    "word": "places",
    "mean": "nơi"
  },
  {
    "word": "making",
    "mean": "việc làm cho"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "passengers",
    "mean": "hành khách"
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
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "tickets",
    "mean": "vé"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "clean",
    "mean": "sạch; làm sạch"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "quietly",
    "mean": "một cách nhỏ nhẹ"
  },
  {
    "word": "giving",
    "mean": "việc nhường; việc cho"
  },
  {
    "word": "seats",
    "mean": "ghế"
  },
  {
    "word": "manners",
    "mean": "cách cư xử"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "private",
    "mean": "riêng; cá nhân"
  },
  {
    "word": "journeys",
    "mean": "hành trình"
  },
  {
    "word": "cheaper",
    "mean": "rẻ hơn"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "healthiest",
    "mean": "lành mạnh nhất"
  },
  {
    "word": "ways",
    "mean": "cách thức"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "nơi làm việc; công việc"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "costs",
    "mean": "chi phí"
  },
  {
    "word": "nothing",
    "mean": "không gì"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "regular",
    "mean": "đều đặn; định kỳ"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "sidewalks",
    "mean": "vỉa hè"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "possible",
    "mean": "có thể"
  },
  {
    "word": "cross",
    "mean": "băng qua"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "alert",
    "mean": "cảnh giác"
  },
  {
    "word": "intersections",
    "mean": "giao lộ"
  },
  {
    "word": "looking",
    "mean": "nhìn"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "crossing",
    "mean": "việc băng qua"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "reduces",
    "mean": "làm giảm"
  },
  {
    "word": "fitness",
    "mean": "thể lực"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "quieter",
    "mean": "yên tĩnh hơn"
  },
  {
    "word": "friendlier",
    "mean": "thân thiện hơn"
  },
  {
    "word": "age",
    "mean": "tuổi"
  }
];

const newEx4Data = [
  {
    "word": "driving",
    "mean": "việc lái xe"
  },
  {
    "word": "carefully",
    "mean": "một cách cẩn thận"
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
    "word": "road",
    "mean": "đường"
  },
  {
    "word": "user",
    "mean": "người sử dụng"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "drivers",
    "mean": "người lái xe"
  },
  {
    "word": "should",
    "mean": "nên"
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
    "word": "and",
    "mean": "và"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "cyclists",
    "mean": "người đi xe đạp"
  },
  {
    "word": "pedestrians",
    "mean": "người đi bộ"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "prevent",
    "mean": "ngăn ngừa"
  },
  {
    "word": "accidents",
    "mean": "tai nạn"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "traveling",
    "mean": "đang di chuyển"
  },
  {
    "word": "busy",
    "mean": "bận rộn; đông đúc"
  },
  {
    "word": "roads",
    "mean": "đường"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "obey",
    "mean": "tuân thủ"
  },
  {
    "word": "speed",
    "mean": "tốc độ"
  },
  {
    "word": "limits",
    "mean": "giới hạn"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "completely",
    "mean": "hoàn toàn"
  },
  {
    "word": "red",
    "mean": "đỏ"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "mobile",
    "mean": "di động"
  },
  {
    "word": "phones",
    "mean": "điện thoại"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "distractions",
    "mean": "sự xao nhãng"
  },
  {
    "word": "dangerous",
    "mean": "nguy hiểm"
  },
  {
    "word": "keeping",
    "mean": "việc giữ; duy trì"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "distance",
    "mean": "khoảng cách; cự ly"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "happier",
    "mean": "vui vẻ hơn"
  },
  {
    "word": "communities",
    "mean": "cộng đồng"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "show",
    "mean": "cho thấy"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
  },
  {
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "reach",
    "mean": "đến; đạt tới"
  },
  {
    "word": "destinations",
    "mean": "điểm đến"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "comfortably",
    "mean": "một cách thoải mái"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "heavy",
    "mean": "đông đúc; nặng"
  },
  {
    "word": "causes",
    "mean": "gây ra"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "cars",
    "mean": "ô tô"
  },
  {
    "word": "buses",
    "mean": "xe buýt"
  },
  {
    "word": "trucks",
    "mean": "xe tải"
  },
  {
    "word": "motorbikes",
    "mean": "xe máy"
  },
  {
    "word": "produce",
    "mean": "sản xuất"
  },
  {
    "word": "smoke",
    "mean": "khói"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "poor",
    "mean": "kém"
  },
  {
    "word": "quality",
    "mean": "chất lượng"
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
    "word": "people's",
    "mean": "của mọi người"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "especially",
    "mean": "đặc biệt"
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
    "word": "adults",
    "mean": "người lớn"
  },
  {
    "word": "living",
    "mean": "sống; việc sống"
  },
  {
    "word": "nearby",
    "mean": "gần đó"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "transportation",
    "mean": "giao thông; phương tiện đi lại"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
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
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "sharing",
    "mean": "việc chia sẻ; đi chung"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "lowers",
    "mean": "làm giảm"
  },
  {
    "word": "number",
    "mean": "số"
  },
  {
    "word": "planting",
    "mean": "việc trồng"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "neighborhoods",
    "mean": "các khu phố"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "benefits",
    "mean": "mang lại lợi ích"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "actions",
    "mean": "hành động"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "generations",
    "mean": "thế hệ"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "bus",
    "mean": "xe buýt"
  },
  {
    "word": "ride",
    "mean": "chuyến đi"
  },
  {
    "word": "taking",
    "mean": "việc đi; việc lấy"
  },
  {
    "word": "easy",
    "mean": "dễ"
  },
  {
    "word": "way",
    "mean": "cách; đường"
  },
  {
    "word": "travel",
    "mean": "di chuyển; đi lại"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "affordable",
    "mean": "có giá phải chăng"
  },
  {
    "word": "convenient",
    "mean": "tiện lợi"
  },
  {
    "word": "places",
    "mean": "nơi"
  },
  {
    "word": "making",
    "mean": "việc làm cho"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "passengers",
    "mean": "hành khách"
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
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "politely",
    "mean": "một cách lịch sự"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "tickets",
    "mean": "vé"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "clean",
    "mean": "sạch; làm sạch"
  },
  {
    "word": "speaking",
    "mean": "việc nói"
  },
  {
    "word": "quietly",
    "mean": "một cách nhỏ nhẹ"
  },
  {
    "word": "giving",
    "mean": "việc nhường; việc cho"
  },
  {
    "word": "seats",
    "mean": "ghế"
  },
  {
    "word": "manners",
    "mean": "cách cư xử"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "private",
    "mean": "riêng; cá nhân"
  },
  {
    "word": "journeys",
    "mean": "hành trình"
  },
  {
    "word": "cheaper",
    "mean": "rẻ hơn"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "healthiest",
    "mean": "lành mạnh nhất"
  },
  {
    "word": "ways",
    "mean": "cách thức"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "work",
    "mean": "nơi làm việc; công việc"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "costs",
    "mean": "chi phí"
  },
  {
    "word": "nothing",
    "mean": "không gì"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "regular",
    "mean": "đều đặn; định kỳ"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "sidewalks",
    "mean": "vỉa hè"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "possible",
    "mean": "có thể"
  },
  {
    "word": "cross",
    "mean": "băng qua"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "alert",
    "mean": "cảnh giác"
  },
  {
    "word": "intersections",
    "mean": "giao lộ"
  },
  {
    "word": "looking",
    "mean": "nhìn"
  },
  {
    "word": "both",
    "mean": "cả hai"
  },
  {
    "word": "crossing",
    "mean": "việc băng qua"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "reduces",
    "mean": "làm giảm"
  },
  {
    "word": "fitness",
    "mean": "thể lực"
  },
  {
    "word": "save",
    "mean": "tiết kiệm"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "quieter",
    "mean": "yên tĩnh hơn"
  },
  {
    "word": "friendlier",
    "mean": "thân thiện hơn"
  },
  {
    "word": "age",
    "mean": "tuổi"
  }
];

const newEx5Data = [
  "Driving carefully is important for every road user in the city.",
  "Drivers should stay focused and always watch other vehicles, cyclists, and pedestrians.",
  "Safe driving helps prevent accidents and protects everyone traveling on busy roads every day.",
  "Drivers must obey speed limits and stop completely at red lights.",
  "They should avoid using mobile phones while driving because distractions are dangerous.",
  "Keeping enough distance from other vehicles makes driving much safer for everyone.",
  "Careful driving creates safer streets and happier communities.",
  "Responsible drivers show respect for other people by following traffic rules every day.",
  "Good driving habits help everyone reach their destinations safely and comfortably.",
  "Heavy traffic causes air pollution in many large cities every day."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Driving carefully is important for every road user in the city."
  },
  {
    "id": 2,
    "correct": "Drivers should stay focused and always watch other vehicles, cyclists, and pedestrians."
  },
  {
    "id": 3,
    "correct": "Safe driving helps prevent accidents and protects everyone traveling on busy roads every day."
  },
  {
    "id": 4,
    "correct": "Drivers must obey speed limits and stop completely at red lights."
  },
  {
    "id": 5,
    "correct": "They should avoid using mobile phones while driving because distractions are dangerous."
  },
  {
    "id": 6,
    "correct": "Keeping enough distance from other vehicles makes driving much safer for everyone."
  },
  {
    "id": 7,
    "correct": "Careful driving creates safer streets and happier communities."
  },
  {
    "id": 8,
    "correct": "Responsible drivers show respect for other people by following traffic rules every day."
  },
  {
    "id": 9,
    "correct": "Good driving habits help everyone reach their destinations safely and comfortably."
  },
  {
    "id": 10,
    "correct": "Heavy traffic causes air pollution in many large cities every day."
  },
  {
    "id": 11,
    "correct": "Cars, buses, trucks, and motorbikes produce smoke that makes the air dirty."
  },
  {
    "id": 12,
    "correct": "Poor air quality can affect people's health, especially children and older adults living nearby."
  },
  {
    "id": 13,
    "correct": "People can help reduce pollution by using public transportation more often."
  },
  {
    "id": 14,
    "correct": "Walking, cycling, or sharing cars also lowers the number of vehicles on roads."
  },
  {
    "id": 15,
    "correct": "Planting more trees helps improve air quality in busy neighborhoods too."
  }
];

const newEx7Data = [
  {
    "q": "What should drivers watch while driving?",
    "a": "They should watch other vehicles, cyclists, and pedestrians."
  },
  {
    "q": "Why should drivers avoid mobile phones?",
    "a": "Because distractions are dangerous."
  },
  {
    "q": "What does keeping enough distance from other vehicles do?",
    "a": "It makes driving much safer."
  },
  {
    "q": "What causes air pollution in many large cities?",
    "a": "Heavy traffic and smoke from vehicles cause air pollution."
  },
  {
    "q": "How can people help reduce traffic pollution?",
    "a": "They can use public transportation, walk, cycle, share cars, and plant more trees."
  },
  {
    "q": "Why do many people use buses?",
    "a": "Because buses are affordable and convenient."
  },
  {
    "q": "How should passengers behave on a bus?",
    "a": "They should keep the bus clean, respect others, and speak quietly."
  },
  {
    "q": "Why is walking healthy?",
    "a": "It provides regular exercise and helps improve fitness."
  },
  {
    "q": "What should pedestrians use whenever possible?",
    "a": "They should use sidewalks."
  },
  {
    "q": "How do walking and cleaner transportation help cities?",
    "a": "They reduce traffic and pollution and help create safer, cleaner, and friendlier cities."
  }
];
