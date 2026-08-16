// ===== traffic01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. City traffic is busy every day, especially in the morning and _____ during normal travel in the city every day.",
    "a": "evening"
  },
  {
    "q": "2. Many people travel to work, school, or the _____ so that people can travel safely in busy areas.",
    "a": "market"
  },
  {
    "q": "3. Cars, buses, motorbikes, bicycles, and trucks share the same _____ when many people are moving through city streets.",
    "a": "roads"
  },
  {
    "q": "4. Busy streets often become crowded during rush hours with many waiting _____ together as part of safe and responsible daily travel.",
    "a": "vehicles"
  },
  {
    "q": "5. Traffic lights, road signs, and police officers help keep traffic safe and _____ during normal travel in the city every day.",
    "a": "organized"
  },
  {
    "q": "6. Drivers should stop at red lights and follow speed _____ carefully so that people can travel safely in busy areas.",
    "a": "limits"
  },
  {
    "q": "7. Pedestrians need to use crosswalks before crossing _____ roads every day when many people are moving through city streets.",
    "a": "busy"
  },
  {
    "q": "8. Heavy traffic can cause delays and air _____ as part of safe and responsible daily travel.",
    "a": "pollution"
  },
  {
    "q": "9. People should use public transport, ride bicycles, or walk short _____ during normal travel in the city every day.",
    "a": "distances"
  },
  {
    "q": "10. Careful driving helps everyone _____ safely and comfortably so that people can travel safely in busy areas.",
    "a": "travel"
  },
  {
    "q": "11. Public transportation is an important part of city _____ when many people are moving through city streets.",
    "a": "life"
  },
  {
    "q": "12. Many people take buses, trains, or _____ every day as part of safe and responsible daily travel.",
    "a": "subways"
  },
  {
    "q": "13. These vehicles carry many passengers and help reduce _____ on busy roads during normal travel in the city every day.",
    "a": "traffic"
  },
  {
    "q": "14. They are usually cheaper than driving private _____ every day so that people can travel safely in busy areas.",
    "a": "cars"
  },
  {
    "q": "15. Passengers should wait patiently at bus stops or train _____ when many people are moving through city streets.",
    "a": "stations"
  },
  {
    "q": "16. They need to buy tickets, stand in line, and respect other _____ as part of safe and responsible daily travel.",
    "a": "travelers"
  },
  {
    "q": "17. Giving seats to older people or pregnant women shows kindness and good _____ during normal travel in the city every day.",
    "a": "manners"
  },
  {
    "q": "18. Public transportation saves time, fuel, and money for many _____ so that people can travel safely in busy areas.",
    "a": "families"
  },
  {
    "q": "19. More people should use it often because cleaner transportation helps protect the environment and improve _____ life.",
    "a": "city"
  },
  {
    "q": "20. Traffic rules help keep everyone _____ on the roads as part of safe and responsible daily travel.",
    "a": "safe"
  }
];

const newEx2Data = [
  {
    "q": "1. When is city traffic especially busy?",
    "opts": [
      "It is especially busy in the morning and evening.",
      "Cars, buses, motorbikes, bicycles, and trucks share the roads.",
      "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
      "They should stop at red lights and follow speed limits."
    ],
    "a": "It is especially busy in the morning and evening."
  },
  {
    "q": "2. What kinds of vehicles share city roads?",
    "opts": [
      "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
      "They should stop at red lights and follow speed limits.",
      "They should use crosswalks.",
      "Cars, buses, motorbikes, bicycles, and trucks share the roads."
    ],
    "a": "Cars, buses, motorbikes, bicycles, and trucks share the roads."
  },
  {
    "q": "3. What helps keep traffic safe and organized?",
    "opts": [
      "They should use crosswalks.",
      "It can cause delays and air pollution.",
      "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
      "They should stop at red lights and follow speed limits."
    ],
    "a": "Traffic lights, road signs, and police officers help keep traffic safe and organized."
  },
  {
    "q": "4. What should drivers do at red lights?",
    "opts": [
      "It carries many passengers and helps reduce traffic on busy roads.",
      "They should stop at red lights and follow speed limits.",
      "They should use crosswalks.",
      "It can cause delays and air pollution."
    ],
    "a": "They should stop at red lights and follow speed limits."
  },
  {
    "q": "5. What should pedestrians use before crossing busy roads?",
    "opts": [
      "They should use crosswalks.",
      "It can cause delays and air pollution.",
      "It carries many passengers and helps reduce traffic on busy roads.",
      "They should wait patiently, stand in line, and respect other travelers."
    ],
    "a": "They should use crosswalks."
  },
  {
    "q": "6. What can heavy traffic cause?",
    "opts": [
      "It carries many passengers and helps reduce traffic on busy roads.",
      "They should wait patiently, stand in line, and respect other travelers.",
      "They must avoid using mobile phones while driving.",
      "It can cause delays and air pollution."
    ],
    "a": "It can cause delays and air pollution."
  },
  {
    "q": "7. Why is public transportation important in city life?",
    "opts": [
      "They must avoid using mobile phones while driving.",
      "They reduce accidents and protect lives.",
      "It carries many passengers and helps reduce traffic on busy roads.",
      "They should wait patiently, stand in line, and respect other travelers."
    ],
    "a": "It carries many passengers and helps reduce traffic on busy roads."
  },
  {
    "q": "8. How should passengers behave at stops and stations?",
    "opts": [
      "It is especially busy in the morning and evening.",
      "They should wait patiently, stand in line, and respect other travelers.",
      "They must avoid using mobile phones while driving.",
      "They reduce accidents and protect lives."
    ],
    "a": "They should wait patiently, stand in line, and respect other travelers."
  },
  {
    "q": "9. What must drivers avoid while driving?",
    "opts": [
      "They must avoid using mobile phones while driving.",
      "They reduce accidents and protect lives.",
      "It is especially busy in the morning and evening.",
      "Cars, buses, motorbikes, bicycles, and trucks share the roads."
    ],
    "a": "They must avoid using mobile phones while driving."
  },
  {
    "q": "10. Why are traffic rules important?",
    "opts": [
      "It is especially busy in the morning and evening.",
      "Cars, buses, motorbikes, bicycles, and trucks share the roads.",
      "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
      "They reduce accidents and protect lives."
    ],
    "a": "They reduce accidents and protect lives."
  },
  {
    "q": "11. What is the Vietnamese meaning of \"city\"?",
    "opts": [
      "bận rộn; đông đúc",
      "ngày",
      "thành phố",
      "giao thông"
    ],
    "a": "thành phố"
  },
  {
    "q": "12. What is the Vietnamese meaning of \"traffic\"?",
    "opts": [
      "đặc biệt",
      "giao thông",
      "bận rộn; đông đúc",
      "ngày"
    ],
    "a": "giao thông"
  },
  {
    "q": "13. What is the Vietnamese meaning of \"busy\"?",
    "opts": [
      "bận rộn; đông đúc",
      "ngày",
      "đặc biệt",
      "buổi sáng"
    ],
    "a": "bận rộn; đông đúc"
  },
  {
    "q": "14. What is the Vietnamese meaning of \"day\"?",
    "opts": [
      "đặc biệt",
      "buổi sáng",
      "buổi tối",
      "ngày"
    ],
    "a": "ngày"
  },
  {
    "q": "15. What is the Vietnamese meaning of \"especially\"?",
    "opts": [
      "buổi tối",
      "mọi người",
      "đặc biệt",
      "buổi sáng"
    ],
    "a": "đặc biệt"
  },
  {
    "q": "16. What is the Vietnamese meaning of \"morning\"?",
    "opts": [
      "di chuyển; đi lại",
      "buổi sáng",
      "buổi tối",
      "mọi người"
    ],
    "a": "buổi sáng"
  },
  {
    "q": "17. What is the Vietnamese meaning of \"evening\"?",
    "opts": [
      "buổi tối",
      "mọi người",
      "di chuyển; đi lại",
      "nơi làm việc; công việc"
    ],
    "a": "buổi tối"
  },
  {
    "q": "18. What is the Vietnamese meaning of \"people\"?",
    "opts": [
      "di chuyển; đi lại",
      "nơi làm việc; công việc",
      "thành phố",
      "mọi người"
    ],
    "a": "mọi người"
  },
  {
    "q": "19. What is the Vietnamese meaning of \"travel\"?",
    "opts": [
      "thành phố",
      "giao thông",
      "di chuyển; đi lại",
      "nơi làm việc; công việc"
    ],
    "a": "di chuyển; đi lại"
  },
  {
    "q": "20. What is the Vietnamese meaning of \"work\"?",
    "opts": [
      "bận rộn; đông đúc",
      "nơi làm việc; công việc",
      "thành phố",
      "giao thông"
    ],
    "a": "nơi làm việc; công việc"
  }
];

const newEx3Data = [
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "busy",
    "mean": "bận rộn; đông đúc"
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
    "word": "especially",
    "mean": "đặc biệt"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "travel",
    "mean": "di chuyển; đi lại"
  },
  {
    "word": "work",
    "mean": "nơi làm việc; công việc"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "market",
    "mean": "chợ"
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
    "word": "motorbikes",
    "mean": "xe máy"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "trucks",
    "mean": "xe tải"
  },
  {
    "word": "share",
    "mean": "cùng sử dụng; chia sẻ"
  },
  {
    "word": "same",
    "mean": "cùng một"
  },
  {
    "word": "roads",
    "mean": "đường"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "crowded",
    "mean": "đông đúc"
  },
  {
    "word": "rush",
    "mean": "cao điểm; vội vã"
  },
  {
    "word": "hours",
    "mean": "giờ"
  },
  {
    "word": "waiting",
    "mean": "đang chờ"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "road",
    "mean": "đường"
  },
  {
    "word": "signs",
    "mean": "biển báo"
  },
  {
    "word": "police",
    "mean": "cảnh sát"
  },
  {
    "word": "officers",
    "mean": "nhân viên; cảnh sát"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "organized",
    "mean": "có trật tự"
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
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "red",
    "mean": "đỏ"
  },
  {
    "word": "follow",
    "mean": "theo"
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
    "word": "carefully",
    "mean": "một cách cẩn thận"
  },
  {
    "word": "pedestrians",
    "mean": "người đi bộ"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "crosswalks",
    "mean": "vạch qua đường"
  },
  {
    "word": "crossing",
    "mean": "băng qua"
  },
  {
    "word": "heavy",
    "mean": "đông đúc; nặng"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "cause",
    "mean": "gây ra"
  },
  {
    "word": "delays",
    "mean": "sự chậm trễ"
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
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "transport",
    "mean": "phương tiện giao thông"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "distances",
    "mean": "khoảng cách"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "driving",
    "mean": "việc lái xe"
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
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "comfortably",
    "mean": "một cách thoải mái"
  },
  {
    "word": "transportation",
    "mean": "giao thông; phương tiện đi lại"
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
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "trains",
    "mean": "tàu hỏa"
  },
  {
    "word": "subways",
    "mean": "tàu điện ngầm"
  },
  {
    "word": "carry",
    "mean": "chở; mang"
  },
  {
    "word": "passengers",
    "mean": "hành khách"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "cheaper",
    "mean": "rẻ hơn"
  },
  {
    "word": "than",
    "mean": "hơn"
  },
  {
    "word": "private",
    "mean": "riêng; cá nhân"
  },
  {
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "patiently",
    "mean": "một cách kiên nhẫn"
  },
  {
    "word": "bus",
    "mean": "xe buýt"
  },
  {
    "word": "stops",
    "mean": "trạm; điểm dừng"
  },
  {
    "word": "train",
    "mean": "tàu hỏa"
  },
  {
    "word": "stations",
    "mean": "trạm"
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
    "word": "stand",
    "mean": "đứng"
  },
  {
    "word": "line",
    "mean": "hàng"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "travelers",
    "mean": "người đi lại"
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
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "pregnant",
    "mean": "mang thai"
  },
  {
    "word": "women",
    "mean": "phụ nữ"
  },
  {
    "word": "shows",
    "mean": "thể hiện"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
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
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "fuel",
    "mean": "nhiên liệu"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "cyclists",
    "mean": "người đi xe đạp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "lane",
    "mean": "làn đường"
  },
  {
    "word": "markings",
    "mean": "vạch kẻ"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "directions",
    "mean": "chỉ dẫn"
  },
  {
    "word": "neighborhood",
    "mean": "khu phố"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "wear",
    "mean": "mặc; đội; thắt"
  },
  {
    "word": "seat",
    "mean": "ghế"
  },
  {
    "word": "belts",
    "mean": "dây đai"
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
    "word": "motorbike",
    "mean": "xe máy"
  },
  {
    "word": "riders",
    "mean": "người đi xe"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "helmets",
    "mean": "mũ bảo hiểm"
  },
  {
    "word": "cross",
    "mean": "băng qua"
  },
  {
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
  },
  {
    "word": "reduces",
    "mean": "làm giảm"
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
    "word": "lives",
    "mean": "sinh mạng"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "trip",
    "mean": "chuyến đi"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "friendlier",
    "mean": "thân thiện hơn"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  }
];

const newEx4Data = [
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "busy",
    "mean": "bận rộn; đông đúc"
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
    "word": "especially",
    "mean": "đặc biệt"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "travel",
    "mean": "di chuyển; đi lại"
  },
  {
    "word": "work",
    "mean": "nơi làm việc; công việc"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "market",
    "mean": "chợ"
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
    "word": "motorbikes",
    "mean": "xe máy"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "trucks",
    "mean": "xe tải"
  },
  {
    "word": "share",
    "mean": "cùng sử dụng; chia sẻ"
  },
  {
    "word": "same",
    "mean": "cùng một"
  },
  {
    "word": "roads",
    "mean": "đường"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "crowded",
    "mean": "đông đúc"
  },
  {
    "word": "rush",
    "mean": "cao điểm; vội vã"
  },
  {
    "word": "hours",
    "mean": "giờ"
  },
  {
    "word": "waiting",
    "mean": "đang chờ"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "road",
    "mean": "đường"
  },
  {
    "word": "signs",
    "mean": "biển báo"
  },
  {
    "word": "police",
    "mean": "cảnh sát"
  },
  {
    "word": "officers",
    "mean": "nhân viên; cảnh sát"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "organized",
    "mean": "có trật tự"
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
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "red",
    "mean": "đỏ"
  },
  {
    "word": "follow",
    "mean": "theo"
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
    "word": "carefully",
    "mean": "một cách cẩn thận"
  },
  {
    "word": "pedestrians",
    "mean": "người đi bộ"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "crosswalks",
    "mean": "vạch qua đường"
  },
  {
    "word": "crossing",
    "mean": "băng qua"
  },
  {
    "word": "heavy",
    "mean": "đông đúc; nặng"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "cause",
    "mean": "gây ra"
  },
  {
    "word": "delays",
    "mean": "sự chậm trễ"
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
    "word": "public",
    "mean": "công cộng"
  },
  {
    "word": "transport",
    "mean": "phương tiện giao thông"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "distances",
    "mean": "khoảng cách"
  },
  {
    "word": "careful",
    "mean": "cẩn thận"
  },
  {
    "word": "driving",
    "mean": "việc lái xe"
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
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "comfortably",
    "mean": "một cách thoải mái"
  },
  {
    "word": "transportation",
    "mean": "giao thông; phương tiện đi lại"
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
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "trains",
    "mean": "tàu hỏa"
  },
  {
    "word": "subways",
    "mean": "tàu điện ngầm"
  },
  {
    "word": "carry",
    "mean": "chở; mang"
  },
  {
    "word": "passengers",
    "mean": "hành khách"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "cheaper",
    "mean": "rẻ hơn"
  },
  {
    "word": "than",
    "mean": "hơn"
  },
  {
    "word": "private",
    "mean": "riêng; cá nhân"
  },
  {
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "patiently",
    "mean": "một cách kiên nhẫn"
  },
  {
    "word": "bus",
    "mean": "xe buýt"
  },
  {
    "word": "stops",
    "mean": "trạm; điểm dừng"
  },
  {
    "word": "train",
    "mean": "tàu hỏa"
  },
  {
    "word": "stations",
    "mean": "trạm"
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
    "word": "stand",
    "mean": "đứng"
  },
  {
    "word": "line",
    "mean": "hàng"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "travelers",
    "mean": "người đi lại"
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
    "word": "older",
    "mean": "lớn tuổi hơn"
  },
  {
    "word": "pregnant",
    "mean": "mang thai"
  },
  {
    "word": "women",
    "mean": "phụ nữ"
  },
  {
    "word": "shows",
    "mean": "thể hiện"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
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
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "fuel",
    "mean": "nhiên liệu"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "rules",
    "mean": "quy tắc"
  },
  {
    "word": "cyclists",
    "mean": "người đi xe đạp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "lane",
    "mean": "làn đường"
  },
  {
    "word": "markings",
    "mean": "vạch kẻ"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "directions",
    "mean": "chỉ dẫn"
  },
  {
    "word": "neighborhood",
    "mean": "khu phố"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "wear",
    "mean": "mặc; đội; thắt"
  },
  {
    "word": "seat",
    "mean": "ghế"
  },
  {
    "word": "belts",
    "mean": "dây đai"
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
    "word": "motorbike",
    "mean": "xe máy"
  },
  {
    "word": "riders",
    "mean": "người đi xe"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "helmets",
    "mean": "mũ bảo hiểm"
  },
  {
    "word": "cross",
    "mean": "băng qua"
  },
  {
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "following",
    "mean": "việc tuân theo"
  },
  {
    "word": "reduces",
    "mean": "làm giảm"
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
    "word": "lives",
    "mean": "sinh mạng"
  },
  {
    "word": "patient",
    "mean": "kiên nhẫn"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "trip",
    "mean": "chuyến đi"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "habits",
    "mean": "thói quen"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "friendlier",
    "mean": "thân thiện hơn"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  }
];

const newEx5Data = [
  "City traffic is busy every day, especially in the morning and evening.",
  "Many people travel to work, school, or the market.",
  "Cars, buses, motorbikes, bicycles, and trucks share the same roads.",
  "Busy streets often become crowded during rush hours with many waiting vehicles together.",
  "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
  "Drivers should stop at red lights and follow speed limits carefully.",
  "Pedestrians need to use crosswalks before crossing busy roads every day.",
  "Heavy traffic can cause delays and air pollution.",
  "People should use public transport, ride bicycles, or walk short distances.",
  "Careful driving helps everyone travel safely and comfortably."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "City traffic is busy every day, especially in the morning and evening."
  },
  {
    "id": 2,
    "correct": "Many people travel to work, school, or the market."
  },
  {
    "id": 3,
    "correct": "Cars, buses, motorbikes, bicycles, and trucks share the same roads."
  },
  {
    "id": 4,
    "correct": "Busy streets often become crowded during rush hours with many waiting vehicles together."
  },
  {
    "id": 5,
    "correct": "Traffic lights, road signs, and police officers help keep traffic safe and organized."
  },
  {
    "id": 6,
    "correct": "Drivers should stop at red lights and follow speed limits carefully."
  },
  {
    "id": 7,
    "correct": "Pedestrians need to use crosswalks before crossing busy roads every day."
  },
  {
    "id": 8,
    "correct": "Heavy traffic can cause delays and air pollution."
  },
  {
    "id": 9,
    "correct": "People should use public transport, ride bicycles, or walk short distances."
  },
  {
    "id": 10,
    "correct": "Careful driving helps everyone travel safely and comfortably."
  },
  {
    "id": 11,
    "correct": "Public transportation is an important part of city life."
  },
  {
    "id": 12,
    "correct": "Many people take buses, trains, or subways every day."
  },
  {
    "id": 13,
    "correct": "These vehicles carry many passengers and help reduce traffic on busy roads."
  },
  {
    "id": 14,
    "correct": "They are usually cheaper than driving private cars every day."
  },
  {
    "id": 15,
    "correct": "Passengers should wait patiently at bus stops or train stations."
  }
];

const newEx7Data = [
  {
    "q": "When is city traffic especially busy?",
    "a": "It is especially busy in the morning and evening."
  },
  {
    "q": "What kinds of vehicles share city roads?",
    "a": "Cars, buses, motorbikes, bicycles, and trucks share the roads."
  },
  {
    "q": "What helps keep traffic safe and organized?",
    "a": "Traffic lights, road signs, and police officers help keep traffic safe and organized."
  },
  {
    "q": "What should drivers do at red lights?",
    "a": "They should stop at red lights and follow speed limits."
  },
  {
    "q": "What should pedestrians use before crossing busy roads?",
    "a": "They should use crosswalks."
  },
  {
    "q": "What can heavy traffic cause?",
    "a": "It can cause delays and air pollution."
  },
  {
    "q": "Why is public transportation important in city life?",
    "a": "It carries many passengers and helps reduce traffic on busy roads."
  },
  {
    "q": "How should passengers behave at stops and stations?",
    "a": "They should wait patiently, stand in line, and respect other travelers."
  },
  {
    "q": "What must drivers avoid while driving?",
    "a": "They must avoid using mobile phones while driving."
  },
  {
    "q": "Why are traffic rules important?",
    "a": "They reduce accidents and protect lives."
  }
];
