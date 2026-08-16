// ===== routine01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Before leaving home, I check my school bag and make sure I have all my books and _____.",
    "a": "pens"
  },
  {
    "q": "2. Then I drink a glass of water and do some light exercise for ten _____.",
    "a": "minutes"
  },
  {
    "q": "3. On weekends, I wake up later, but I still follow most of these healthy _____.",
    "a": "habits"
  },
  {
    "q": "4. I enjoy short stories, simple English books, and articles about animals, science, or interesting _____.",
    "a": "places"
  },
  {
    "q": "5. By reading every day, I improve my English, grow my knowledge, and _____ more peacefully.",
    "a": "sleep"
  },
  {
    "q": "6. Exercise gives me more energy and helps me feel less tired during lessons or _____.",
    "a": "work"
  },
  {
    "q": "7. Then I look up its meaning and try to use it in a _____.",
    "a": "sentence"
  },
  {
    "q": "8. I try to exercise every day because it keeps me healthy and _____ and this supports a balanced schedule for the whole day.",
    "a": "strong"
  },
  {
    "q": "9. First, I make my bed, wash my face, and brush my _____ as part of a healthy and organized daily routine.",
    "a": "teeth"
  },
  {
    "q": "10. When I find a difficult word, I write it in a _____ while building useful habits for everyday life.",
    "a": "notebook"
  },
  {
    "q": "11. In the morning, I stretch my body and walk around my _____ so the routine remains simple and helpful each day.",
    "a": "neighborhood"
  },
  {
    "q": "12. Sometimes I ride my bicycle or play football with my _____ and this supports a balanced schedule for the whole day.",
    "a": "friends"
  },
  {
    "q": "13. The most important thing is to exercise safely and _____ it as part of a healthy and organized daily routine.",
    "a": "enjoy"
  },
  {
    "q": "14. This simple morning routine helps me _____ the day well while building useful habits for everyday life.",
    "a": "start"
  },
  {
    "q": "15. I usually read for thirty minutes before _____ to bed so the routine remains simple and helpful each day.",
    "a": "going"
  },
  {
    "q": "16. Reading helps me learn new words and understand different _____ and this supports a balanced schedule for the whole day.",
    "a": "ideas"
  },
  {
    "q": "17. This habit also helps me relax after a _____ day as part of a healthy and organized daily routine.",
    "a": "busy"
  },
  {
    "q": "18. I turn off my phone and choose a quiet _____ while building useful habits for everyday life.",
    "a": "place"
  },
  {
    "q": "19. I wear comfortable clothes, bring some _____, and start slowly so the routine remains simple and helpful each day.",
    "a": "water"
  },
  {
    "q": "20. We do not need expensive equipment or a _____ gym and this supports a balanced schedule for the whole day.",
    "a": "large"
  }
];

const newEx2Data = [
  {
    "q": "1. What time does the writer usually wake up?",
    "opts": [
      "The writer usually wakes up at six o’clock.",
      "The writer washes their face and brushes their teeth.",
      "The writer often eats bread, eggs, or noodles.",
      "It helps the writer start the day well and feel ready to study."
    ],
    "a": "The writer usually wakes up at six o’clock."
  },
  {
    "q": "2. What does the writer do after making the bed?",
    "opts": [
      "The writer often eats bread, eggs, or noodles.",
      "The writer washes their face and brushes their teeth.",
      "It helps the writer start the day well and feel ready to study.",
      "The writer usually reads for thirty minutes."
    ],
    "a": "The writer washes their face and brushes their teeth."
  },
  {
    "q": "3. What does the writer often eat for breakfast?",
    "opts": [
      "It helps the writer start the day well and feel ready to study.",
      "The writer usually reads for thirty minutes.",
      "The writer often eats bread, eggs, or noodles.",
      "The writer writes it in a notebook, looks up its meaning, and tries to use it in a sentence."
    ],
    "a": "The writer often eats bread, eggs, or noodles."
  },
  {
    "q": "4. Why does the morning routine help the writer?",
    "opts": [
      "The writer usually reads for thirty minutes.",
      "The writer writes it in a notebook, looks up its meaning, and tries to use it in a sentence.",
      "It improves English, grows knowledge, and helps the writer sleep more peacefully.",
      "It helps the writer start the day well and feel ready to study."
    ],
    "a": "It helps the writer start the day well and feel ready to study."
  },
  {
    "q": "5. How long does the writer usually read before bed?",
    "opts": [
      "The writer usually reads for thirty minutes.",
      "The writer writes it in a notebook, looks up its meaning, and tries to use it in a sentence.",
      "It improves English, grows knowledge, and helps the writer sleep more peacefully.",
      "The writer stretches and walks around the neighborhood."
    ],
    "a": "The writer usually reads for thirty minutes."
  },
  {
    "q": "6. What does the writer do with a difficult word?",
    "opts": [
      "It improves English, grows knowledge, and helps the writer sleep more peacefully.",
      "The writer writes it in a notebook, looks up its meaning, and tries to use it in a sentence.",
      "The writer stretches and walks around the neighborhood.",
      "It helps people stay healthy, strong, and energetic."
    ],
    "a": "The writer writes it in a notebook, looks up its meaning, and tries to use it in a sentence."
  },
  {
    "q": "7. How does daily reading help the writer?",
    "opts": [
      "The writer stretches and walks around the neighborhood.",
      "It helps people stay healthy, strong, and energetic.",
      "It improves English, grows knowledge, and helps the writer sleep more peacefully.",
      "The most important thing is to exercise safely and enjoy it."
    ],
    "a": "It improves English, grows knowledge, and helps the writer sleep more peacefully."
  },
  {
    "q": "8. What exercise does the writer do in the morning?",
    "opts": [
      "It helps people stay healthy, strong, and energetic.",
      "The most important thing is to exercise safely and enjoy it.",
      "The writer usually wakes up at six o’clock.",
      "The writer stretches and walks around the neighborhood."
    ],
    "a": "The writer stretches and walks around the neighborhood."
  },
  {
    "q": "9. Why is regular exercise useful?",
    "opts": [
      "It helps people stay healthy, strong, and energetic.",
      "The most important thing is to exercise safely and enjoy it.",
      "The writer usually wakes up at six o’clock.",
      "The writer washes their face and brushes their teeth."
    ],
    "a": "It helps people stay healthy, strong, and energetic."
  },
  {
    "q": "10. What does the text say is most important about exercise?",
    "opts": [
      "The writer usually wakes up at six o’clock.",
      "The most important thing is to exercise safely and enjoy it.",
      "The writer washes their face and brushes their teeth.",
      "The writer often eats bread, eggs, or noodles."
    ],
    "a": "The most important thing is to exercise safely and enjoy it."
  },
  {
    "q": "11. What is the Vietnamese meaning of “morning”?",
    "opts": [
      "khuôn mặt",
      "tập thể dục",
      "buổi sáng",
      "mì"
    ],
    "a": "buổi sáng"
  },
  {
    "q": "12. What is the Vietnamese meaning of “six”?",
    "opts": [
      "sau đó",
      "bữa sáng",
      "trường học",
      "sáu"
    ],
    "a": "sáu"
  },
  {
    "q": "13. What is the Vietnamese meaning of “make”?",
    "opts": [
      "làm; tạo",
      "làm",
      "bánh mì",
      "sách"
    ],
    "a": "làm; tạo"
  },
  {
    "q": "14. What is the Vietnamese meaning of “teeth”?",
    "opts": [
      "có; dùng",
      "răng",
      "kiểm tra",
      "tốt"
    ],
    "a": "răng"
  },
  {
    "q": "15. What is the Vietnamese meaning of “exercise”?",
    "opts": [
      "mì",
      "giúp",
      "tập thể dục",
      "nhưng"
    ],
    "a": "tập thể dục"
  },
  {
    "q": "16. What is the Vietnamese meaning of “home”?",
    "opts": [
      "ngày",
      "theo",
      "yêu thích",
      "nơi sinh sống; nhà"
    ],
    "a": "nơi sinh sống; nhà"
  },
  {
    "q": "17. What is the Vietnamese meaning of “active”?",
    "opts": [
      "năng động",
      "cho; mang lại",
      "việc đi",
      "mới"
    ],
    "a": "năng động"
  },
  {
    "q": "18. What is the Vietnamese meaning of “read”?",
    "opts": [
      "nơi; đặt",
      "đọc",
      "sổ tay",
      "điện thoại"
    ],
    "a": "đọc"
  },
  {
    "q": "19. What is the Vietnamese meaning of “relax”?",
    "opts": [
      "hơn; nhiều hơn",
      "khu phố",
      "thư giãn",
      "chậm rãi"
    ],
    "a": "thư giãn"
  },
  {
    "q": "20. What is the Vietnamese meaning of “comfortable”?",
    "opts": [
      "mọi người",
      "thể thao",
      "thức dậy",
      "thoải mái"
    ],
    "a": "thoải mái"
  }
];

const newEx3Data = [
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "routine",
    "mean": "thói quen"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "wake",
    "mean": "thức dậy"
  },
  {
    "word": "six",
    "mean": "sáu"
  },
  {
    "word": "o'clock",
    "mean": "giờ (đúng giờ)"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "face",
    "mean": "khuôn mặt"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "then",
    "mean": "sau đó"
  },
  {
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "glass",
    "mean": "cốc; ly"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "some",
    "mean": "một ít; một số"
  },
  {
    "word": "light",
    "mean": "nhẹ"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "ten",
    "mean": "mười"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "have",
    "mean": "có; dùng"
  },
  {
    "word": "breakfast",
    "mean": "bữa sáng"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "bread",
    "mean": "bánh mì"
  },
  {
    "word": "eggs",
    "mean": "trứng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "leaving",
    "mean": "rời đi"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "bag",
    "mean": "cặp; túi"
  },
  {
    "word": "sure",
    "mean": "chắc chắn"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "pens",
    "mean": "bút"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "ready",
    "mean": "sẵn sàng"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "later",
    "mean": "sau đó"
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
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "habits",
    "mean": "tập tính; thói quen"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "reading",
    "mean": "đọc"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "thirty",
    "mean": "ba mươi"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "articles",
    "mean": "bài viết"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "science",
    "mean": "khoa học"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "places",
    "mean": "nơi; đặt"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "word",
    "mean": "từ"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "notebook",
    "mean": "sổ tay"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "meaning",
    "mean": "nghĩa"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "sentence",
    "mean": "câu"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "turn",
    "mean": "lượt"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "grow",
    "mean": "phát triển"
  },
  {
    "word": "knowledge",
    "mean": "kiến thức"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "peacefully",
    "mean": "một cách yên bình"
  },
  {
    "word": "valuable",
    "mean": "quý giá"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
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
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "neighborhood",
    "mean": "khu phố"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "ride",
    "mean": "chuyến đi"
  },
  {
    "word": "bicycle",
    "mean": "xe đạp"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "football",
    "mean": "bóng đá"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
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
    "word": "equipment",
    "mean": "thiết bị; trang bị"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "gym",
    "mean": "phòng tập thể dục"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "running",
    "mean": "việc chạy bộ"
  },
  {
    "word": "dancing",
    "mean": "việc khiêu vũ"
  },
  {
    "word": "playing",
    "mean": "việc chơi"
  },
  {
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "thing",
    "mean": "điều; thứ"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "effort",
    "mean": "nỗ lực"
  },
  {
    "word": "matters",
    "mean": "có ý nghĩa; quan trọng"
  }
];

const newEx4Data = [
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "routine",
    "mean": "thói quen"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "wake",
    "mean": "thức dậy"
  },
  {
    "word": "six",
    "mean": "sáu"
  },
  {
    "word": "o'clock",
    "mean": "giờ (đúng giờ)"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "first",
    "mean": "đầu tiên"
  },
  {
    "word": "make",
    "mean": "làm; tạo"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "face",
    "mean": "khuôn mặt"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "then",
    "mean": "sau đó"
  },
  {
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "glass",
    "mean": "cốc; ly"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "some",
    "mean": "một ít; một số"
  },
  {
    "word": "light",
    "mean": "nhẹ"
  },
  {
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "ten",
    "mean": "mười"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "have",
    "mean": "có; dùng"
  },
  {
    "word": "breakfast",
    "mean": "bữa sáng"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "often",
    "mean": "thường"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "bread",
    "mean": "bánh mì"
  },
  {
    "word": "eggs",
    "mean": "trứng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "leaving",
    "mean": "rời đi"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "bag",
    "mean": "cặp; túi"
  },
  {
    "word": "sure",
    "mean": "chắc chắn"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "pens",
    "mean": "bút"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "start",
    "mean": "bắt đầu"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "active",
    "mean": "năng động"
  },
  {
    "word": "ready",
    "mean": "sẵn sàng"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "later",
    "mean": "sau đó"
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
    "word": "follow",
    "mean": "theo"
  },
  {
    "word": "most",
    "mean": "phần lớn"
  },
  {
    "word": "healthy",
    "mean": "lành mạnh"
  },
  {
    "word": "habits",
    "mean": "tập tính; thói quen"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "without",
    "mean": "không có; không bị"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "reading",
    "mean": "đọc"
  },
  {
    "word": "one",
    "mean": "một"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "thirty",
    "mean": "ba mươi"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "short",
    "mean": "ngắn"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "articles",
    "mean": "bài viết"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "science",
    "mean": "khoa học"
  },
  {
    "word": "interesting",
    "mean": "thú vị"
  },
  {
    "word": "places",
    "mean": "nơi; đặt"
  },
  {
    "word": "learn",
    "mean": "học"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "words",
    "mean": "lời nói; từ ngữ"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "ideas",
    "mean": "ý tưởng"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "difficult",
    "mean": "khó khăn"
  },
  {
    "word": "word",
    "mean": "từ"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "notebook",
    "mean": "sổ tay"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "meaning",
    "mean": "nghĩa"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "sentence",
    "mean": "câu"
  },
  {
    "word": "habit",
    "mean": "thói quen"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "turn",
    "mean": "lượt"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "improve",
    "mean": "cải thiện"
  },
  {
    "word": "grow",
    "mean": "phát triển"
  },
  {
    "word": "knowledge",
    "mean": "kiến thức"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "more",
    "mean": "hơn; nhiều hơn"
  },
  {
    "word": "peacefully",
    "mean": "một cách yên bình"
  },
  {
    "word": "valuable",
    "mean": "quý giá"
  },
  {
    "word": "activity",
    "mean": "hoạt động"
  },
  {
    "word": "doing",
    "mean": "việc làm"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "strong",
    "mean": "khỏe; mạnh"
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
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "neighborhood",
    "mean": "khu phố"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "ride",
    "mean": "chuyến đi"
  },
  {
    "word": "bicycle",
    "mean": "xe đạp"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "football",
    "mean": "bóng đá"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "wear",
    "mean": "mặc"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "bring",
    "mean": "mang"
  },
  {
    "word": "slowly",
    "mean": "chậm rãi"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "lessons",
    "mean": "những bài học"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "regular",
    "mean": "đều đặn"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "everyone",
    "mean": "mọi người"
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
    "word": "equipment",
    "mean": "thiết bị; trang bị"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "gym",
    "mean": "phòng tập thể dục"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "running",
    "mean": "việc chạy bộ"
  },
  {
    "word": "dancing",
    "mean": "việc khiêu vũ"
  },
  {
    "word": "playing",
    "mean": "việc chơi"
  },
  {
    "word": "sports",
    "mean": "thể thao"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "thing",
    "mean": "điều; thứ"
  },
  {
    "word": "safely",
    "mean": "một cách an toàn"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "effort",
    "mean": "nỗ lực"
  },
  {
    "word": "matters",
    "mean": "có ý nghĩa; quan trọng"
  }
];

const newEx5Data = [
  "I usually wake up at six o’clock every morning.",
  "First, I make my bed, wash my face, and brush my teeth.",
  "Then I drink a glass of water and do some light exercise for ten minutes.",
  "After that, I have breakfast with my family.",
  "I often eat bread, eggs, or noodles.",
  "This simple morning routine helps me start the day well.",
  "I feel fresh, active, and ready to study.",
  "On weekends, I wake up later, but I still follow most of these healthy habits.",
  "It gives me time to prepare without stress.",
  "Reading is one of my favorite daily habits."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "I usually wake up at six o’clock every morning."
  },
  {
    "id": 2,
    "correct": "First, I make my bed, wash my face, and brush my teeth."
  },
  {
    "id": 3,
    "correct": "Then I drink a glass of water and do some light exercise for ten minutes."
  },
  {
    "id": 4,
    "correct": "After that, I have breakfast with my family."
  },
  {
    "id": 5,
    "correct": "I often eat bread, eggs, or noodles."
  },
  {
    "id": 6,
    "correct": "Before leaving home, I check my school bag and make sure I have all my books and pens."
  },
  {
    "id": 7,
    "correct": "This simple morning routine helps me start the day well."
  },
  {
    "id": 8,
    "correct": "I feel fresh, active, and ready to study."
  },
  {
    "id": 9,
    "correct": "On weekends, I wake up later, but I still follow most of these healthy habits."
  },
  {
    "id": 10,
    "correct": "It gives me time to prepare without stress."
  },
  {
    "id": 11,
    "correct": "Reading is one of my favorite daily habits."
  },
  {
    "id": 12,
    "correct": "I usually read for thirty minutes before going to bed."
  },
  {
    "id": 13,
    "correct": "I enjoy short stories, simple English books, and articles about animals, science, or interesting places."
  },
  {
    "id": 14,
    "correct": "Reading helps me learn new words and understand different ideas."
  },
  {
    "id": 15,
    "correct": "When I find a difficult word, I write it in a notebook."
  }
];

const newEx7Data = [
  {
    "q": "What time does the writer usually wake up?",
    "a": "The writer usually wakes up at six o’clock."
  },
  {
    "q": "What does the writer do after making the bed?",
    "a": "The writer washes their face and brushes their teeth."
  },
  {
    "q": "What does the writer often eat for breakfast?",
    "a": "The writer often eats bread, eggs, or noodles."
  },
  {
    "q": "Why does the morning routine help the writer?",
    "a": "It helps the writer start the day well and feel ready to study."
  },
  {
    "q": "How long does the writer usually read before bed?",
    "a": "The writer usually reads for thirty minutes."
  },
  {
    "q": "What does the writer do with a difficult word?",
    "a": "The writer writes it in a notebook, looks up its meaning, and tries to use it in a sentence."
  },
  {
    "q": "How does daily reading help the writer?",
    "a": "It improves English, grows knowledge, and helps the writer sleep more peacefully."
  },
  {
    "q": "What exercise does the writer do in the morning?",
    "a": "The writer stretches and walks around the neighborhood."
  },
  {
    "q": "Why is regular exercise useful?",
    "a": "It helps people stay healthy, strong, and energetic."
  },
  {
    "q": "What does the text say is most important about exercise?",
    "a": "The most important thing is to exercise safely and enjoy it."
  }
];

