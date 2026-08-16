// ===== traffic02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Rush hour is the busiest time of the day in many _____ during normal travel in the city every day.",
    "a": "cities"
  },
  {
    "q": "2. People leave home early for work and _____ so that people can travel safely in busy areas.",
    "a": "school"
  },
  {
    "q": "3. Roads become crowded with cars, buses, motorbikes, and _____ when many people are moving through city streets.",
    "a": "bicycles"
  },
  {
    "q": "4. Traffic moves slowly because many vehicles _____ together at once as part of safe and responsible daily travel.",
    "a": "travel"
  },
  {
    "q": "5. Many drivers become impatient during heavy traffic and long _____ during normal travel in the city every day.",
    "a": "waits"
  },
  {
    "q": "6. They should stay calm, keep safe distances, and obey traffic _____ carefully so that people can travel safely in busy areas.",
    "a": "lights"
  },
  {
    "q": "7. Listening to traffic reports helps people choose better routes before leaving _____ when many people are moving through city streets.",
    "a": "home"
  },
  {
    "q": "8. Rush hour can waste time and increase _____ as part of safe and responsible daily travel.",
    "a": "pollution"
  },
  {
    "q": "9. People should leave earlier, use public transportation, or work from home when _____ during normal travel in the city every day.",
    "a": "possible"
  },
  {
    "q": "10. Smart travel plans make daily journeys easier and _____ so that people can travel safely in busy areas.",
    "a": "safer"
  },
  {
    "q": "11. Crossing the road safely is an important skill for _____ when many people are moving through city streets.",
    "a": "everyone"
  },
  {
    "q": "12. Busy streets have many cars, buses, motorbikes, and bicycles _____ quickly as part of safe and responsible daily travel.",
    "a": "moving"
  },
  {
    "q": "13. Children should learn road safety from parents and teachers before walking alone in the _____ every day.",
    "a": "city"
  },
  {
    "q": "14. People should use crosswalks and _____ lights whenever possible so that people can travel safely in busy areas.",
    "a": "traffic"
  },
  {
    "q": "15. Before crossing, _____ left, right, and left again carefully when many people are moving through city streets.",
    "a": "look"
  },
  {
    "q": "16. Never run across busy roads or use mobile phones while walking through traffic _____.",
    "a": "areas"
  },
  {
    "q": "17. Safe crossing helps prevent accidents and _____ every day during normal travel in the city every day.",
    "a": "injuries"
  },
  {
    "q": "18. Everyone should stay alert and follow traffic _____ carefully so that people can travel safely in busy areas.",
    "a": "rules"
  },
  {
    "q": "19. Good road safety habits protect families, friends, and all people in the _____ when many people are moving through city streets.",
    "a": "community"
  },
  {
    "q": "20. Riding a bicycle is a healthy and _____ way to travel as part of safe and responsible daily travel.",
    "a": "enjoyable"
  }
];

const newEx2Data = [
  {
    "q": "1. Why does traffic move slowly during rush hour?",
    "opts": [
      "Because many vehicles travel together at once.",
      "They should stay calm, keep safe distances, and obey traffic lights.",
      "They help people choose better routes before leaving home.",
      "They can leave earlier, use public transportation, or work from home when possible."
    ],
    "a": "Because many vehicles travel together at once."
  },
  {
    "q": "2. How should drivers behave during heavy traffic?",
    "opts": [
      "They help people choose better routes before leaving home.",
      "They can leave earlier, use public transportation, or work from home when possible.",
      "They should learn road safety from parents and teachers.",
      "They should stay calm, keep safe distances, and obey traffic lights."
    ],
    "a": "They should stay calm, keep safe distances, and obey traffic lights."
  },
  {
    "q": "3. What can traffic reports help people do?",
    "opts": [
      "They should learn road safety from parents and teachers.",
      "They should look left, right, and left again carefully.",
      "They help people choose better routes before leaving home.",
      "They can leave earlier, use public transportation, or work from home when possible."
    ],
    "a": "They help people choose better routes before leaving home."
  },
  {
    "q": "4. What can people do to make rush-hour journeys easier?",
    "opts": [
      "They should wear helmets.",
      "They can leave earlier, use public transportation, or work from home when possible.",
      "They should learn road safety from parents and teachers.",
      "They should look left, right, and left again carefully."
    ],
    "a": "They can leave earlier, use public transportation, or work from home when possible."
  },
  {
    "q": "5. What should children learn before walking alone in the city?",
    "opts": [
      "They should learn road safety from parents and teachers.",
      "They should look left, right, and left again carefully.",
      "They should wear helmets.",
      "They should check their bicycles."
    ],
    "a": "They should learn road safety from parents and teachers."
  },
  {
    "q": "6. What should people do before crossing a road?",
    "opts": [
      "They should wear helmets.",
      "They should check their bicycles.",
      "They help drivers see cyclists more easily.",
      "They should look left, right, and left again carefully."
    ],
    "a": "They should look left, right, and left again carefully."
  },
  {
    "q": "7. What should cyclists wear?",
    "opts": [
      "They help drivers see cyclists more easily.",
      "Cycling is healthy, saves transportation costs, reduces traffic, and does not cause air pollution.",
      "They should wear helmets.",
      "They should check their bicycles."
    ],
    "a": "They should wear helmets."
  },
  {
    "q": "8. What should cyclists check before every trip?",
    "opts": [
      "Because many vehicles travel together at once.",
      "They should check their bicycles.",
      "They help drivers see cyclists more easily.",
      "Cycling is healthy, saves transportation costs, reduces traffic, and does not cause air pollution."
    ],
    "a": "They should check their bicycles."
  },
  {
    "q": "9. Why are bright clothes useful for cyclists?",
    "opts": [
      "They help drivers see cyclists more easily.",
      "Cycling is healthy, saves transportation costs, reduces traffic, and does not cause air pollution.",
      "Because many vehicles travel together at once.",
      "They should stay calm, keep safe distances, and obey traffic lights."
    ],
    "a": "They help drivers see cyclists more easily."
  },
  {
    "q": "10. Why should more people ride bicycles for short trips?",
    "opts": [
      "Because many vehicles travel together at once.",
      "They should stay calm, keep safe distances, and obey traffic lights.",
      "They help people choose better routes before leaving home.",
      "Cycling is healthy, saves transportation costs, reduces traffic, and does not cause air pollution."
    ],
    "a": "Cycling is healthy, saves transportation costs, reduces traffic, and does not cause air pollution."
  },
  {
    "q": "11. What is the Vietnamese meaning of \"rush\"?",
    "opts": [
      "thời gian",
      "ngày",
      "cao điểm; vội vã",
      "giờ"
    ],
    "a": "cao điểm; vội vã"
  },
  {
    "q": "12. What is the Vietnamese meaning of \"hour\"?",
    "opts": [
      "các thành phố",
      "giờ",
      "thời gian",
      "ngày"
    ],
    "a": "giờ"
  },
  {
    "q": "13. What is the Vietnamese meaning of \"time\"?",
    "opts": [
      "thời gian",
      "ngày",
      "các thành phố",
      "mọi người"
    ],
    "a": "thời gian"
  },
  {
    "q": "14. What is the Vietnamese meaning of \"day\"?",
    "opts": [
      "các thành phố",
      "mọi người",
      "rời đi",
      "ngày"
    ],
    "a": "ngày"
  },
  {
    "q": "15. What is the Vietnamese meaning of \"cities\"?",
    "opts": [
      "rời đi",
      "nơi sinh sống; nhà",
      "các thành phố",
      "mọi người"
    ],
    "a": "các thành phố"
  },
  {
    "q": "16. What is the Vietnamese meaning of \"people\"?",
    "opts": [
      "sớm",
      "mọi người",
      "rời đi",
      "nơi sinh sống; nhà"
    ],
    "a": "mọi người"
  },
  {
    "q": "17. What is the Vietnamese meaning of \"leave\"?",
    "opts": [
      "rời đi",
      "nơi sinh sống; nhà",
      "sớm",
      "công việc; nơi làm việc"
    ],
    "a": "rời đi"
  },
  {
    "q": "18. What is the Vietnamese meaning of \"home\"?",
    "opts": [
      "sớm",
      "công việc; nơi làm việc",
      "cao điểm; vội vã",
      "nơi sinh sống; nhà"
    ],
    "a": "nơi sinh sống; nhà"
  },
  {
    "q": "19. What is the Vietnamese meaning of \"early\"?",
    "opts": [
      "cao điểm; vội vã",
      "giờ",
      "sớm",
      "công việc; nơi làm việc"
    ],
    "a": "sớm"
  },
  {
    "q": "20. What is the Vietnamese meaning of \"work\"?",
    "opts": [
      "thời gian",
      "công việc; nơi làm việc",
      "cao điểm; vội vã",
      "giờ"
    ],
    "a": "công việc; nơi làm việc"
  }
];

const newEx3Data = [
  {
    "word": "rush",
    "mean": "cao điểm; vội vã"
  },
  {
    "word": "hour",
    "mean": "giờ"
  },
  {
    "word": "busiest",
    "mean": "bận rộn nhất"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "leave",
    "mean": "rời đi"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "early",
    "mean": "sớm"
  },
  {
    "word": "work",
    "mean": "công việc; nơi làm việc"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "roads",
    "mean": "đường"
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
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "moves",
    "mean": "di chuyển"
  },
  {
    "word": "slowly",
    "mean": "một cách chậm rãi"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "travel",
    "mean": "di chuyển; đi lại"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "once",
    "mean": "một lần; cùng lúc"
  },
  {
    "word": "drivers",
    "mean": "người lái xe"
  },
  {
    "word": "impatient",
    "mean": "mất kiên nhẫn"
  },
  {
    "word": "heavy",
    "mean": "đông đúc; nặng"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "waits",
    "mean": "những lúc chờ đợi"
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
    "word": "calm",
    "mean": "bình tĩnh"
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
    "word": "distances",
    "mean": "khoảng cách"
  },
  {
    "word": "obey",
    "mean": "tuân thủ"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "carefully",
    "mean": "một cách cẩn thận"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "reports",
    "mean": "bản tin; báo cáo"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "routes",
    "mean": "tuyến đường"
  },
  {
    "word": "leaving",
    "mean": "việc rời đi"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "increase",
    "mean": "tăng"
  },
  {
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "earlier",
    "mean": "sớm hơn"
  },
  {
    "word": "use",
    "mean": "sử dụng"
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
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "possible",
    "mean": "có thể"
  },
  {
    "word": "smart",
    "mean": "thông minh; hợp lý"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "journeys",
    "mean": "hành trình"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "crossing",
    "mean": "việc băng qua đường"
  },
  {
    "word": "road",
    "mean": "đường"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "skill",
    "mean": "kỹ năng"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "busy",
    "mean": "bận rộn; đông đúc"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "moving",
    "mean": "di chuyển"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "safety",
    "mean": "sự an toàn"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "alone",
    "mean": "một mình"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "crosswalks",
    "mean": "vạch qua đường"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "left",
    "mean": "bên trái"
  },
  {
    "word": "right",
    "mean": "bên phải"
  },
  {
    "word": "again",
    "mean": "lại; một lần nữa"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "run",
    "mean": "chạy"
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
    "word": "areas",
    "mean": "khu vực"
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
    "word": "injuries",
    "mean": "chấn thương"
  },
  {
    "word": "alert",
    "mean": "cảnh giác"
  },
  {
    "word": "follow",
    "mean": "theo"
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
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "riding",
    "mean": "việc đi xe"
  },
  {
    "word": "bicycle",
    "mean": "xe đạp"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "way",
    "mean": "cách; đường"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
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
    "word": "cause",
    "mean": "gây ra"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "cyclists",
    "mean": "người đi xe đạp"
  },
  {
    "word": "wear",
    "mean": "mặc; đội; thắt"
  },
  {
    "word": "helmets",
    "mean": "mũ bảo hiểm"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "trip",
    "mean": "chuyến đi"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "signs",
    "mean": "biển báo"
  },
  {
    "word": "hand",
    "mean": "tay"
  },
  {
    "word": "signals",
    "mean": "tín hiệu"
  },
  {
    "word": "lanes",
    "mean": "làn đường"
  },
  {
    "word": "bright",
    "mean": "sáng màu"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "easily",
    "mean": "dễ dàng"
  },
  {
    "word": "cycling",
    "mean": "việc đạp xe"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "costs",
    "mean": "chi phí"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "trips",
    "mean": "các chuyến đi"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "driving",
    "mean": "việc lái xe"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  }
];

const newEx4Data = [
  {
    "word": "rush",
    "mean": "cao điểm; vội vã"
  },
  {
    "word": "hour",
    "mean": "giờ"
  },
  {
    "word": "busiest",
    "mean": "bận rộn nhất"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "cities",
    "mean": "các thành phố"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "leave",
    "mean": "rời đi"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "early",
    "mean": "sớm"
  },
  {
    "word": "work",
    "mean": "công việc; nơi làm việc"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "roads",
    "mean": "đường"
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
    "word": "traffic",
    "mean": "giao thông"
  },
  {
    "word": "moves",
    "mean": "di chuyển"
  },
  {
    "word": "slowly",
    "mean": "một cách chậm rãi"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "travel",
    "mean": "di chuyển; đi lại"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "once",
    "mean": "một lần; cùng lúc"
  },
  {
    "word": "drivers",
    "mean": "người lái xe"
  },
  {
    "word": "impatient",
    "mean": "mất kiên nhẫn"
  },
  {
    "word": "heavy",
    "mean": "đông đúc; nặng"
  },
  {
    "word": "long",
    "mean": "dài"
  },
  {
    "word": "waits",
    "mean": "những lúc chờ đợi"
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
    "word": "calm",
    "mean": "bình tĩnh"
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
    "word": "distances",
    "mean": "khoảng cách"
  },
  {
    "word": "obey",
    "mean": "tuân thủ"
  },
  {
    "word": "lights",
    "mean": "đèn"
  },
  {
    "word": "carefully",
    "mean": "một cách cẩn thận"
  },
  {
    "word": "listening",
    "mean": "việc lắng nghe"
  },
  {
    "word": "reports",
    "mean": "bản tin; báo cáo"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "routes",
    "mean": "tuyến đường"
  },
  {
    "word": "leaving",
    "mean": "việc rời đi"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "increase",
    "mean": "tăng"
  },
  {
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "earlier",
    "mean": "sớm hơn"
  },
  {
    "word": "use",
    "mean": "sử dụng"
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
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "possible",
    "mean": "có thể"
  },
  {
    "word": "smart",
    "mean": "thông minh; hợp lý"
  },
  {
    "word": "plans",
    "mean": "kế hoạch"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "journeys",
    "mean": "hành trình"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "crossing",
    "mean": "việc băng qua đường"
  },
  {
    "word": "road",
    "mean": "đường"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "skill",
    "mean": "kỹ năng"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "busy",
    "mean": "bận rộn; đông đúc"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "moving",
    "mean": "di chuyển"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "safety",
    "mean": "sự an toàn"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "teachers",
    "mean": "giáo viên"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "alone",
    "mean": "một mình"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "crosswalks",
    "mean": "vạch qua đường"
  },
  {
    "word": "whenever",
    "mean": "bất cứ khi nào"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "left",
    "mean": "bên trái"
  },
  {
    "word": "right",
    "mean": "bên phải"
  },
  {
    "word": "again",
    "mean": "lại; một lần nữa"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "run",
    "mean": "chạy"
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
    "word": "areas",
    "mean": "khu vực"
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
    "word": "injuries",
    "mean": "chấn thương"
  },
  {
    "word": "alert",
    "mean": "cảnh giác"
  },
  {
    "word": "follow",
    "mean": "theo"
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
    "word": "protect",
    "mean": "bảo vệ"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "community",
    "mean": "cộng đồng"
  },
  {
    "word": "riding",
    "mean": "việc đi xe"
  },
  {
    "word": "bicycle",
    "mean": "xe đạp"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "way",
    "mean": "cách; đường"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "workers",
    "mean": "nhân viên"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
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
    "word": "cause",
    "mean": "gây ra"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "cyclists",
    "mean": "người đi xe đạp"
  },
  {
    "word": "wear",
    "mean": "mặc; đội; thắt"
  },
  {
    "word": "helmets",
    "mean": "mũ bảo hiểm"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "trip",
    "mean": "chuyến đi"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "signs",
    "mean": "biển báo"
  },
  {
    "word": "hand",
    "mean": "tay"
  },
  {
    "word": "signals",
    "mean": "tín hiệu"
  },
  {
    "word": "lanes",
    "mean": "làn đường"
  },
  {
    "word": "bright",
    "mean": "sáng màu"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "see",
    "mean": "nhìn thấy"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "easily",
    "mean": "dễ dàng"
  },
  {
    "word": "cycling",
    "mean": "việc đạp xe"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "costs",
    "mean": "chi phí"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "trips",
    "mean": "các chuyến đi"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "driving",
    "mean": "việc lái xe"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "creates",
    "mean": "tạo ra"
  },
  {
    "word": "environment",
    "mean": "môi trường"
  }
];

const newEx5Data = [
  "Rush hour is the busiest time of the day in many cities.",
  "People leave home early for work and school.",
  "Roads become crowded with cars, buses, motorbikes, and bicycles.",
  "Traffic moves slowly because many vehicles travel together at once.",
  "Many drivers become impatient during heavy traffic and long waits.",
  "They should stay calm, keep safe distances, and obey traffic lights carefully.",
  "Listening to traffic reports helps people choose better routes before leaving home.",
  "Rush hour can waste time and increase pollution.",
  "People should leave earlier, use public transportation, or work from home when possible.",
  "Smart travel plans make daily journeys easier and safer."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Rush hour is the busiest time of the day in many cities."
  },
  {
    "id": 2,
    "correct": "People leave home early for work and school."
  },
  {
    "id": 3,
    "correct": "Roads become crowded with cars, buses, motorbikes, and bicycles."
  },
  {
    "id": 4,
    "correct": "Traffic moves slowly because many vehicles travel together at once."
  },
  {
    "id": 5,
    "correct": "Many drivers become impatient during heavy traffic and long waits."
  },
  {
    "id": 6,
    "correct": "They should stay calm, keep safe distances, and obey traffic lights carefully."
  },
  {
    "id": 7,
    "correct": "Listening to traffic reports helps people choose better routes before leaving home."
  },
  {
    "id": 8,
    "correct": "Rush hour can waste time and increase pollution."
  },
  {
    "id": 9,
    "correct": "People should leave earlier, use public transportation, or work from home when possible."
  },
  {
    "id": 10,
    "correct": "Smart travel plans make daily journeys easier and safer."
  },
  {
    "id": 11,
    "correct": "Crossing the road safely is an important skill for everyone."
  },
  {
    "id": 12,
    "correct": "Busy streets have many cars, buses, motorbikes, and bicycles moving quickly."
  },
  {
    "id": 13,
    "correct": "Children should learn road safety from parents and teachers before walking alone in the city every day."
  },
  {
    "id": 14,
    "correct": "People should use crosswalks and traffic lights whenever possible."
  },
  {
    "id": 15,
    "correct": "Before crossing, look left, right, and left again carefully."
  }
];

const newEx7Data = [
  {
    "q": "Why does traffic move slowly during rush hour?",
    "a": "Because many vehicles travel together at once."
  },
  {
    "q": "How should drivers behave during heavy traffic?",
    "a": "They should stay calm, keep safe distances, and obey traffic lights."
  },
  {
    "q": "What can traffic reports help people do?",
    "a": "They help people choose better routes before leaving home."
  },
  {
    "q": "What can people do to make rush-hour journeys easier?",
    "a": "They can leave earlier, use public transportation, or work from home when possible."
  },
  {
    "q": "What should children learn before walking alone in the city?",
    "a": "They should learn road safety from parents and teachers."
  },
  {
    "q": "What should people do before crossing a road?",
    "a": "They should look left, right, and left again carefully."
  },
  {
    "q": "What should cyclists wear?",
    "a": "They should wear helmets."
  },
  {
    "q": "What should cyclists check before every trip?",
    "a": "They should check their bicycles."
  },
  {
    "q": "Why are bright clothes useful for cyclists?",
    "a": "They help drivers see cyclists more easily."
  },
  {
    "q": "Why should more people ride bicycles for short trips?",
    "a": "Cycling is healthy, saves transportation costs, reduces traffic, and does not cause air pollution."
  }
];
