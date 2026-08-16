// ===== routine03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. I do not always follow the plan perfectly, but it gives me direction and helps me become more _____.",
    "a": "organized"
  },
  {
    "q": "2. This habit helps me sleep better, focus on my work, and enjoy more activities in real _____.",
    "a": "life"
  },
  {
    "q": "3. When my parents are busy, I help prepare simple food or look after our _____.",
    "a": "home"
  },
  {
    "q": "4. I also take short breaks, look outside, stretch my body, and rest my _____ regularly.",
    "a": "eyes"
  },
  {
    "q": "5. We clean different rooms, buy groceries, and then enjoy free time as a _____.",
    "a": "family"
  },
  {
    "q": "6. In the morning, I read my list and choose the most important _____ first.",
    "a": "task"
  },
  {
    "q": "7. In the morning, I wake up more easily and feel _____ for the day.",
    "a": "ready"
  },
  {
    "q": "8. I also sweep the floor, take out the rubbish, and water the _____ and this supports a balanced schedule for the whole day.",
    "a": "plants"
  },
  {
    "q": "9. Small actions can make home life easier, happier, and more _____ for everyone as part of a healthy and organized daily routine.",
    "a": "comfortable"
  },
  {
    "q": "10. Going to bed early is a healthy habit that _____ me every day while building useful habits for everyday life.",
    "a": "helps"
  },
  {
    "q": "11. Before sleeping, I brush my teeth, prepare my clothes, and set my _____ so the routine remains simple and helpful each day.",
    "a": "alarm"
  },
  {
    "q": "12. I avoid coffee in the evening and stop using my _____ before bed and this supports a balanced schedule for the whole day.",
    "a": "phone"
  },
  {
    "q": "13. Helping my family is a good habit that I _____ every day as part of a healthy and organized daily routine.",
    "a": "practice"
  },
  {
    "q": "14. If I cannot complete something, I move it to another suitable _____ while building useful habits for everyday life.",
    "a": "time"
  },
  {
    "q": "15. Planning helps me use my time wisely and avoid forgetting important _____ so the routine remains simple and helpful each day.",
    "a": "things"
  },
  {
    "q": "16. I use a phone and computer for study, news, and _____ and this supports a balanced schedule for the whole day.",
    "a": "entertainment"
  },
  {
    "q": "17. However, spending too much time on screens can make me _____ as part of a healthy and organized daily routine.",
    "a": "tired"
  },
  {
    "q": "18. In the evening, I stop using screens thirty _____ before bed while building useful habits for everyday life.",
    "a": "minutes"
  },
  {
    "q": "19. Every evening, I spend a few minutes planning the _____ day so the routine remains simple and helpful each day.",
    "a": "next"
  },
  {
    "q": "20. Sometimes I read a short story or listen to soft _____ and this supports a balanced schedule for the whole day.",
    "a": "music"
  }
];

const newEx2Data = [
  {
    "q": "1. What chores does the writer do after meals?",
    "opts": [
      "The writer clears the table and washes the dishes.",
      "It teaches responsibility and useful life skills.",
      "Too much screen time can make the writer tired.",
      "The writer keeps the phone away."
    ],
    "a": "The writer clears the table and washes the dishes."
  },
  {
    "q": "2. How does helping the family benefit the writer?",
    "opts": [
      "Too much screen time can make the writer tired.",
      "It teaches responsibility and useful life skills.",
      "The writer keeps the phone away.",
      "The writer reads a book or talks with family."
    ],
    "a": "It teaches responsibility and useful life skills."
  },
  {
    "q": "3. Why does the writer limit screen time?",
    "opts": [
      "The writer keeps the phone away.",
      "The writer reads a book or talks with family.",
      "Too much screen time can make the writer tired.",
      "The writer plans the next day every evening."
    ],
    "a": "Too much screen time can make the writer tired."
  },
  {
    "q": "4. What does the writer do during meals with the phone?",
    "opts": [
      "The writer reads a book or talks with family.",
      "The writer plans the next day every evening.",
      "The writer moves it to another suitable time.",
      "The writer keeps the phone away."
    ],
    "a": "The writer keeps the phone away."
  },
  {
    "q": "5. What does the writer do instead of using screens before bed?",
    "opts": [
      "The writer reads a book or talks with family.",
      "The writer plans the next day every evening.",
      "The writer moves it to another suitable time.",
      "It helps the writer use time wisely, avoid forgetting things, and become more organized."
    ],
    "a": "The writer reads a book or talks with family."
  },
  {
    "q": "6. When does the writer plan the next day?",
    "opts": [
      "The writer moves it to another suitable time.",
      "The writer plans the next day every evening.",
      "It helps the writer use time wisely, avoid forgetting things, and become more organized.",
      "The writer usually goes to bed at ten o’clock."
    ],
    "a": "The writer plans the next day every evening."
  },
  {
    "q": "7. What happens if the writer cannot complete a task?",
    "opts": [
      "It helps the writer use time wisely, avoid forgetting things, and become more organized.",
      "The writer usually goes to bed at ten o’clock.",
      "The writer moves it to another suitable time.",
      "Enough sleep helps the body rest and supports mood, memory, attention, study, and health."
    ],
    "a": "The writer moves it to another suitable time."
  },
  {
    "q": "8. How does planning help the writer?",
    "opts": [
      "The writer usually goes to bed at ten o’clock.",
      "Enough sleep helps the body rest and supports mood, memory, attention, study, and health.",
      "The writer clears the table and washes the dishes.",
      "It helps the writer use time wisely, avoid forgetting things, and become more organized."
    ],
    "a": "It helps the writer use time wisely, avoid forgetting things, and become more organized."
  },
  {
    "q": "9. What time does the writer usually go to bed?",
    "opts": [
      "The writer usually goes to bed at ten o’clock.",
      "Enough sleep helps the body rest and supports mood, memory, attention, study, and health.",
      "The writer clears the table and washes the dishes.",
      "It teaches responsibility and useful life skills."
    ],
    "a": "The writer usually goes to bed at ten o’clock."
  },
  {
    "q": "10. What are some benefits of enough sleep?",
    "opts": [
      "The writer clears the table and washes the dishes.",
      "Enough sleep helps the body rest and supports mood, memory, attention, study, and health.",
      "It teaches responsibility and useful life skills.",
      "Too much screen time can make the writer tired."
    ],
    "a": "Enough sleep helps the body rest and supports mood, memory, attention, study, and health."
  },
  {
    "q": "11. What is the Vietnamese meaning of “helping”?",
    "opts": [
      "rửa",
      "giúp",
      "việc giúp đỡ",
      "sạch"
    ],
    "a": "việc giúp đỡ"
  },
  {
    "q": "12. What is the Vietnamese meaning of “practice”?",
    "opts": [
      "sàn nhà",
      "hoặc",
      "thực phẩm và đồ tạp hóa",
      "sự luyện tập"
    ],
    "a": "sự luyện tập"
  },
  {
    "q": "13. What is the Vietnamese meaning of “clear”?",
    "opts": [
      "rõ ràng",
      "cây",
      "mọi người",
      "thời gian"
    ],
    "a": "rõ ràng"
  },
  {
    "q": "14. What is the Vietnamese meaning of “sweep”?",
    "opts": [
      "thức ăn",
      "quét",
      "mua",
      "cuộc sống"
    ],
    "a": "quét"
  },
  {
    "q": "15. What is the Vietnamese meaning of “help”?",
    "opts": [
      "sạch",
      "dạy",
      "giúp",
      "dễ hơn"
    ],
    "a": "giúp"
  },
  {
    "q": "16. What is the Vietnamese meaning of “rooms”?",
    "opts": [
      "hữu ích",
      "hơn; nhiều hơn",
      "máy tính",
      "các phòng"
    ],
    "a": "các phòng"
  },
  {
    "q": "17. What is the Vietnamese meaning of “care”?",
    "opts": [
      "quan tâm",
      "hoàn thành",
      "tuy nhiên",
      "ngắm; quan sát"
    ],
    "a": "quan tâm"
  },
  {
    "q": "18. What is the Vietnamese meaning of “news”?",
    "opts": [
      "quan trọng",
      "tin tức",
      "duỗi; giãn cơ",
      "thay vào đó"
    ],
    "a": "tin tức"
  },
  {
    "q": "19. What is the Vietnamese meaning of “thirty”?",
    "opts": [
      "hoạt động; làm việc",
      "nhiệm vụ",
      "ba mươi",
      "phù hợp"
    ],
    "a": "ba mươi"
  },
  {
    "q": "20. What is the Vietnamese meaning of “list”?",
    "opts": [
      "điều gì đó",
      "ít hơn",
      "làm; khiến",
      "danh sách"
    ],
    "a": "danh sách"
  }
];

const newEx3Data = [
  {
    "word": "helping",
    "mean": "việc giúp đỡ"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
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
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "sweep",
    "mean": "quét"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "take",
    "mean": "lấy; mang; dành"
  },
  {
    "word": "rubbish",
    "mean": "rác"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "plants",
    "mean": "cây"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
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
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "rooms",
    "mean": "các phòng"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "groceries",
    "mean": "thực phẩm và đồ tạp hóa"
  },
  {
    "word": "then",
    "mean": "sau đó"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "free",
    "mean": "rảnh"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "housework",
    "mean": "việc nhà"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
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
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "care",
    "mean": "quan tâm"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "actions",
    "mean": "hành động"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "proud",
    "mean": "tự hào"
  },
  {
    "word": "finish",
    "mean": "hoàn thành"
  },
  {
    "word": "jobs",
    "mean": "chức năng; công việc"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "limiting",
    "mean": "việc hạn chế"
  },
  {
    "word": "screen",
    "mean": "màn hình"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "computer",
    "mean": "máy tính"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "news",
    "mean": "tin tức"
  },
  {
    "word": "entertainment",
    "mean": "giải trí"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "spending",
    "mean": "dành (thời gian)"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
  },
  {
    "word": "much",
    "mean": "nhiều"
  },
  {
    "word": "screens",
    "mean": "màn hình"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "therefore",
    "mean": "vì vậy"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "homework",
    "mean": "bài tập về nhà"
  },
  {
    "word": "watching",
    "mean": "ngắm; quan sát"
  },
  {
    "word": "videos",
    "mean": "video"
  },
  {
    "word": "playing",
    "mean": "việc chơi"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "keep",
    "mean": "giữ"
  },
  {
    "word": "away",
    "mean": "ra xa"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "breaks",
    "mean": "nghỉ giải lao; làm vỡ"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "stretch",
    "mean": "duỗi; giãn cơ"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "eyes",
    "mean": "mắt"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "thirty",
    "mean": "ba mươi"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "instead",
    "mean": "thay vào đó"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "book",
    "mean": "sách"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "focus",
    "mean": "tập trung"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "real",
    "mean": "thực tế; thật"
  },
  {
    "word": "change",
    "mean": "thay đổi"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "planning",
    "mean": "việc lập kế hoạch"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "few",
    "mean": "một vài"
  },
  {
    "word": "next",
    "mean": "tiếp theo"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "notebook",
    "mean": "sổ tay"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "schoolwork",
    "mean": "bài vở ở trường"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "any",
    "mean": "bất kỳ"
  },
  {
    "word": "meetings",
    "mean": "các cuộc họp"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "list",
    "mean": "danh sách"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "task",
    "mean": "nhiệm vụ"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "finishing",
    "mean": "hoàn thành"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
  },
  {
    "word": "move",
    "mean": "di chuyển"
  },
  {
    "word": "another",
    "mean": "một cái/điều khác"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "forgetting",
    "mean": "việc quên"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "clearer",
    "mean": "rõ ràng hơn"
  },
  {
    "word": "worry",
    "mean": "sự lo lắng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
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
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "plan",
    "mean": "kế hoạch"
  },
  {
    "word": "perfectly",
    "mean": "một cách hoàn hảo"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "direction",
    "mean": "định hướng"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "organized",
    "mean": "ngăn nắp; có tổ chức"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "early",
    "mean": "sớm"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "go",
    "mean": "đi"
  },
  {
    "word": "ten",
    "mean": "mười"
  },
  {
    "word": "o'clock",
    "mean": "giờ (đúng giờ)"
  },
  {
    "word": "sleeping",
    "mean": "việc ngủ"
  },
  {
    "word": "brush",
    "mean": "đánh; chải"
  },
  {
    "word": "teeth",
    "mean": "răng"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "set",
    "mean": "đặt"
  },
  {
    "word": "alarm",
    "mean": "báo thức"
  },
  {
    "word": "bedroom",
    "mean": "phòng ngủ"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "dark",
    "mean": "tối"
  },
  {
    "word": "coffee",
    "mean": "cà phê"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "story",
    "mean": "câu chuyện"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "soft",
    "mean": "nhẹ; êm"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "mind",
    "mean": "tâm trí"
  },
  {
    "word": "wake",
    "mean": "thức dậy"
  },
  {
    "word": "easily",
    "mean": "dễ dàng"
  },
  {
    "word": "ready",
    "mean": "sẵn sàng"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "bedtime",
    "mean": "giờ đi ngủ"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "mood",
    "mean": "tâm trạng"
  },
  {
    "word": "memory",
    "mean": "trí nhớ"
  },
  {
    "word": "attention",
    "mean": "sự chú ý"
  },
  {
    "word": "routine",
    "mean": "thói quen"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  }
];

const newEx4Data = [
  {
    "word": "helping",
    "mean": "việc giúp đỡ"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "practice",
    "mean": "sự luyện tập"
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
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "clear",
    "mean": "rõ ràng"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "sweep",
    "mean": "quét"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "take",
    "mean": "lấy; mang; dành"
  },
  {
    "word": "rubbish",
    "mean": "rác"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "plants",
    "mean": "cây"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
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
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "rooms",
    "mean": "các phòng"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "groceries",
    "mean": "thực phẩm và đồ tạp hóa"
  },
  {
    "word": "then",
    "mean": "sau đó"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "free",
    "mean": "rảnh"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "housework",
    "mean": "việc nhà"
  },
  {
    "word": "teaches",
    "mean": "dạy"
  },
  {
    "word": "responsibility",
    "mean": "trách nhiệm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
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
    "word": "shows",
    "mean": "các chương trình; thể hiện"
  },
  {
    "word": "care",
    "mean": "quan tâm"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "actions",
    "mean": "hành động"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "happier",
    "mean": "vui hơn"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "proud",
    "mean": "tự hào"
  },
  {
    "word": "finish",
    "mean": "hoàn thành"
  },
  {
    "word": "jobs",
    "mean": "chức năng; công việc"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "limiting",
    "mean": "việc hạn chế"
  },
  {
    "word": "screen",
    "mean": "màn hình"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "computer",
    "mean": "máy tính"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "news",
    "mean": "tin tức"
  },
  {
    "word": "entertainment",
    "mean": "giải trí"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "spending",
    "mean": "dành (thời gian)"
  },
  {
    "word": "too",
    "mean": "cũng; quá"
  },
  {
    "word": "much",
    "mean": "nhiều"
  },
  {
    "word": "screens",
    "mean": "màn hình"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "therefore",
    "mean": "vì vậy"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "control",
    "mean": "kiểm soát"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "homework",
    "mean": "bài tập về nhà"
  },
  {
    "word": "watching",
    "mean": "ngắm; quan sát"
  },
  {
    "word": "videos",
    "mean": "video"
  },
  {
    "word": "playing",
    "mean": "việc chơi"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "keep",
    "mean": "giữ"
  },
  {
    "word": "away",
    "mean": "ra xa"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "breaks",
    "mean": "nghỉ giải lao; làm vỡ"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "stretch",
    "mean": "duỗi; giãn cơ"
  },
  {
    "word": "body",
    "mean": "cơ thể"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "eyes",
    "mean": "mắt"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "stop",
    "mean": "dừng"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "thirty",
    "mean": "ba mươi"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "instead",
    "mean": "thay vào đó"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "book",
    "mean": "sách"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "focus",
    "mean": "tập trung"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "activities",
    "mean": "các hoạt động"
  },
  {
    "word": "real",
    "mean": "thực tế; thật"
  },
  {
    "word": "change",
    "mean": "thay đổi"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "planning",
    "mean": "việc lập kế hoạch"
  },
  {
    "word": "spend",
    "mean": "dành (thời gian)"
  },
  {
    "word": "few",
    "mean": "một vài"
  },
  {
    "word": "next",
    "mean": "tiếp theo"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "notebook",
    "mean": "sổ tay"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "schoolwork",
    "mean": "bài vở ở trường"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "any",
    "mean": "bất kỳ"
  },
  {
    "word": "meetings",
    "mean": "các cuộc họp"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "list",
    "mean": "danh sách"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "task",
    "mean": "nhiệm vụ"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "each",
    "mean": "mỗi"
  },
  {
    "word": "finishing",
    "mean": "hoàn thành"
  },
  {
    "word": "if",
    "mean": "nếu"
  },
  {
    "word": "cannot",
    "mean": "không thể"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "something",
    "mean": "điều gì đó"
  },
  {
    "word": "move",
    "mean": "di chuyển"
  },
  {
    "word": "another",
    "mean": "một cái/điều khác"
  },
  {
    "word": "suitable",
    "mean": "phù hợp"
  },
  {
    "word": "wisely",
    "mean": "một cách khôn ngoan"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "forgetting",
    "mean": "việc quên"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "clearer",
    "mean": "rõ ràng hơn"
  },
  {
    "word": "worry",
    "mean": "sự lo lắng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
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
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "plan",
    "mean": "kế hoạch"
  },
  {
    "word": "perfectly",
    "mean": "một cách hoàn hảo"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "direction",
    "mean": "định hướng"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "organized",
    "mean": "ngăn nắp; có tổ chức"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "balanced",
    "mean": "cân bằng"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "early",
    "mean": "sớm"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "go",
    "mean": "đi"
  },
  {
    "word": "ten",
    "mean": "mười"
  },
  {
    "word": "o'clock",
    "mean": "giờ (đúng giờ)"
  },
  {
    "word": "sleeping",
    "mean": "việc ngủ"
  },
  {
    "word": "brush",
    "mean": "đánh; chải"
  },
  {
    "word": "teeth",
    "mean": "răng"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "set",
    "mean": "đặt"
  },
  {
    "word": "alarm",
    "mean": "báo thức"
  },
  {
    "word": "bedroom",
    "mean": "phòng ngủ"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "dark",
    "mean": "tối"
  },
  {
    "word": "coffee",
    "mean": "cà phê"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "story",
    "mean": "câu chuyện"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "soft",
    "mean": "nhẹ; êm"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "mind",
    "mean": "tâm trí"
  },
  {
    "word": "wake",
    "mean": "thức dậy"
  },
  {
    "word": "easily",
    "mean": "dễ dàng"
  },
  {
    "word": "ready",
    "mean": "sẵn sàng"
  },
  {
    "word": "keeping",
    "mean": "việc giữ"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "bedtime",
    "mean": "giờ đi ngủ"
  },
  {
    "word": "improves",
    "mean": "cải thiện"
  },
  {
    "word": "mood",
    "mean": "tâm trạng"
  },
  {
    "word": "memory",
    "mean": "trí nhớ"
  },
  {
    "word": "attention",
    "mean": "sự chú ý"
  },
  {
    "word": "routine",
    "mean": "thói quen"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "happiness",
    "mean": "hạnh phúc"
  }
];

const newEx5Data = [
  "Helping my family is a good habit that I practice every day.",
  "After meals, I clear the table and wash the dishes.",
  "I also sweep the floor, take out the rubbish, and water the plants.",
  "When my parents are busy, I help prepare simple food or look after our home.",
  "We clean different rooms, buy groceries, and then enjoy free time as a family.",
  "Doing housework teaches me responsibility and useful life skills.",
  "It also shows my family that I care about them.",
  "Small actions can make home life easier, happier, and more comfortable for everyone.",
  "I feel proud when I finish my jobs well.",
  "I use a phone and computer for study, news, and entertainment."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Helping my family is a good habit that I practice every day."
  },
  {
    "id": 2,
    "correct": "After meals, I clear the table and wash the dishes."
  },
  {
    "id": 3,
    "correct": "I also sweep the floor, take out the rubbish, and water the plants."
  },
  {
    "id": 4,
    "correct": "When my parents are busy, I help prepare simple food or look after our home."
  },
  {
    "id": 5,
    "correct": "At weekends, everyone works together."
  },
  {
    "id": 6,
    "correct": "We clean different rooms, buy groceries, and then enjoy free time as a family."
  },
  {
    "id": 7,
    "correct": "Doing housework teaches me responsibility and useful life skills."
  },
  {
    "id": 8,
    "correct": "It also shows my family that I care about them."
  },
  {
    "id": 9,
    "correct": "Small actions can make home life easier, happier, and more comfortable for everyone."
  },
  {
    "id": 10,
    "correct": "I feel proud when I finish my jobs well."
  },
  {
    "id": 11,
    "correct": "I use a phone and computer for study, news, and entertainment."
  },
  {
    "id": 12,
    "correct": "However, spending too much time on screens can make me tired."
  },
  {
    "id": 13,
    "correct": "Therefore, I try to control my screen time every day."
  },
  {
    "id": 14,
    "correct": "I finish important homework before watching videos or playing games."
  },
  {
    "id": 15,
    "correct": "During meals, I keep my phone away."
  }
];

const newEx7Data = [
  {
    "q": "What chores does the writer do after meals?",
    "a": "The writer clears the table and washes the dishes."
  },
  {
    "q": "How does helping the family benefit the writer?",
    "a": "It teaches responsibility and useful life skills."
  },
  {
    "q": "Why does the writer limit screen time?",
    "a": "Too much screen time can make the writer tired."
  },
  {
    "q": "What does the writer do during meals with the phone?",
    "a": "The writer keeps the phone away."
  },
  {
    "q": "What does the writer do instead of using screens before bed?",
    "a": "The writer reads a book or talks with family."
  },
  {
    "q": "When does the writer plan the next day?",
    "a": "The writer plans the next day every evening."
  },
  {
    "q": "What happens if the writer cannot complete a task?",
    "a": "The writer moves it to another suitable time."
  },
  {
    "q": "How does planning help the writer?",
    "a": "It helps the writer use time wisely, avoid forgetting things, and become more organized."
  },
  {
    "q": "What time does the writer usually go to bed?",
    "a": "The writer usually goes to bed at ten o’clock."
  },
  {
    "q": "What are some benefits of enough sleep?",
    "a": "Enough sleep helps the body rest and supports mood, memory, attention, study, and health."
  }
];

