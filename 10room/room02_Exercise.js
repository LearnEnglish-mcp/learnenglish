// ===== room02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. The dining _____ is between the kitchen and the living room, which describes everyday life in our home clearly.",
    "a": "room"
  },
  {
    "q": "2. It has a large dining _____, several chairs, a cupboard, and a light above the table.",
    "a": "table"
  },
  {
    "q": "3. We also put some flowers in the _____ of the table, which describes everyday life in our home clearly.",
    "a": "middle"
  },
  {
    "q": "4. My family usually has breakfast and dinner _____ in this room, which describes everyday life in our home clearly.",
    "a": "together"
  },
  {
    "q": "5. During meals, we talk about our work, school, and daily _____, which describes everyday life in our home clearly.",
    "a": "activities"
  },
  {
    "q": "6. We try not to use our phones while _____, which describes everyday life in our home clearly.",
    "a": "eating"
  },
  {
    "q": "7. I enjoy spending time in the dining room because family meals are _____.",
    "a": "important"
  },
  {
    "q": "8. They give us time to communicate and _____ each other, which describes everyday life in our home clearly.",
    "a": "understand"
  },
  {
    "q": "9. A clean and comfortable dining room makes every meal more enjoyable and _____.",
    "a": "meaningful"
  },
  {
    "q": "10. The bathroom is next to my _____, which describes everyday life in our home clearly.",
    "a": "bedroom"
  },
  {
    "q": "11. It is not very large, but it is clean and _____, which describes everyday life in our home clearly.",
    "a": "useful"
  },
  {
    "q": "12. There is a shower, a toilet, a sink, a mirror, and a small cupboard for towels and personal _____.",
    "a": "items"
  },
  {
    "q": "13. I use the bathroom every morning and _____, which describes everyday life in our home clearly.",
    "a": "evening"
  },
  {
    "q": "14. I brush my teeth, wash my face, take a shower, and prepare myself for the _____.",
    "a": "day"
  },
  {
    "q": "15. After using it, I always turn off the water and keep the floor _____.",
    "a": "dry"
  },
  {
    "q": "16. A clean bathroom is important for good _____, which describes everyday life in our home clearly.",
    "a": "health"
  },
  {
    "q": "17. Everyone in the family should keep it tidy and save _____, which describes everyday life in our home clearly.",
    "a": "water"
  },
  {
    "q": "18. We should also clean the sink, mirror, and floor _____, which describes everyday life in our home clearly.",
    "a": "regularly"
  },
  {
    "q": "19. The study room is in a quiet area of my _____, which describes everyday life in our home clearly.",
    "a": "house"
  },
  {
    "q": "20. It has a desk, a comfortable chair, a bookshelf, a computer, and a reading _____.",
    "a": "lamp"
  }
];

const newEx2Data = [
  {
    "q": "1. Complete the sentence: The dining _____ is between the kitchen and the living room.",
    "opts": [
      "room",
      "table",
      "chairs",
      "cupboard"
    ],
    "a": "room"
  },
  {
    "q": "2. Complete the sentence: It has a large dining _____, several chairs, a cupboard, and a light above the table.",
    "opts": [
      "room",
      "table",
      "kitchen",
      "flowers"
    ],
    "a": "table"
  },
  {
    "q": "3. Complete the sentence: We also put some flowers in the _____ of the table.",
    "opts": [
      "dining",
      "living",
      "middle",
      "large"
    ],
    "a": "middle"
  },
  {
    "q": "4. Complete the sentence: My family usually has breakfast and dinner _____ in this room.",
    "opts": [
      "also",
      "during",
      "about",
      "together"
    ],
    "a": "together"
  },
  {
    "q": "5. Complete the sentence: During meals, we talk about our work, school, and daily _____.",
    "opts": [
      "activities",
      "room",
      "kitchen",
      "table"
    ],
    "a": "activities"
  },
  {
    "q": "6. Complete the sentence: We try not to use our phones while _____.",
    "opts": [
      "has",
      "eating",
      "put",
      "talk"
    ],
    "a": "eating"
  },
  {
    "q": "7. Complete the sentence: I enjoy spending time in the dining room because family meals are _____.",
    "opts": [
      "living",
      "large",
      "important",
      "several"
    ],
    "a": "important"
  },
  {
    "q": "8. Complete the sentence: They give us time to communicate and _____ each other.",
    "opts": [
      "has",
      "put",
      "talk",
      "understand"
    ],
    "a": "understand"
  },
  {
    "q": "9. Complete the sentence: A clean and comfortable dining room makes every meal more enjoyable and _____.",
    "opts": [
      "meaningful",
      "living",
      "large",
      "several"
    ],
    "a": "meaningful"
  },
  {
    "q": "10. Complete the sentence: The bathroom is next to my _____.",
    "opts": [
      "kitchen",
      "bedroom",
      "table",
      "chairs"
    ],
    "a": "bedroom"
  },
  {
    "q": "11. Complete the sentence: It is not very large, but it is clean and _____.",
    "opts": [
      "dining",
      "living",
      "useful",
      "several"
    ],
    "a": "useful"
  },
  {
    "q": "12. Complete the sentence: There is a shower, a toilet, a sink, a mirror, and a small cupboard for towels and personal _____.",
    "opts": [
      "room",
      "kitchen",
      "table",
      "items"
    ],
    "a": "items"
  },
  {
    "q": "13. Complete the sentence: I use the bathroom every morning and _____.",
    "opts": [
      "evening",
      "kitchen",
      "table",
      "chairs"
    ],
    "a": "evening"
  },
  {
    "q": "14. Complete the sentence: I brush my teeth, wash my face, take a shower, and prepare myself for the _____.",
    "opts": [
      "room",
      "day",
      "kitchen",
      "table"
    ],
    "a": "day"
  },
  {
    "q": "15. Complete the sentence: After using it, I always turn off the water and keep the floor _____.",
    "opts": [
      "dining",
      "living",
      "dry",
      "large"
    ],
    "a": "dry"
  },
  {
    "q": "16. Complete the sentence: A clean bathroom is important for good _____.",
    "opts": [
      "kitchen",
      "table",
      "chairs",
      "health"
    ],
    "a": "health"
  },
  {
    "q": "17. Complete the sentence: Everyone in the family should keep it tidy and save _____.",
    "opts": [
      "water",
      "room",
      "kitchen",
      "table"
    ],
    "a": "water"
  },
  {
    "q": "18. Complete the sentence: We should also clean the sink, mirror, and floor _____.",
    "opts": [
      "usually",
      "regularly",
      "together",
      "during"
    ],
    "a": "regularly"
  },
  {
    "q": "19. Complete the sentence: The study room is in a quiet area of my _____.",
    "opts": [
      "kitchen",
      "table",
      "house",
      "chairs"
    ],
    "a": "house"
  },
  {
    "q": "20. Complete the sentence: It has a desk, a comfortable chair, a bookshelf, a computer, and a reading _____.",
    "opts": [
      "room",
      "kitchen",
      "chairs",
      "lamp"
    ],
    "a": "lamp"
  }
];

const newEx3Data = [
  {
    "word": "dining",
    "mean": "thuộc phòng ăn; dùng để ăn"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "kitchen",
    "mean": "nhà bếp"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "living",
    "mean": "thuộc phòng khách; dùng cho sinh hoạt"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "several",
    "mean": "vài; một số"
  },
  {
    "word": "chairs",
    "mean": "những chiếc ghế"
  },
  {
    "word": "cupboard",
    "mean": "tủ đựng đồ"
  },
  {
    "word": "light",
    "mean": "đèn; ánh sáng"
  },
  {
    "word": "above",
    "mean": "ở phía trên"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "middle",
    "mean": "ở giữa; phần giữa"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "breakfast",
    "mean": "bữa sáng"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "during",
    "mean": "trong; trong suốt"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
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
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "use",
    "mean": "sử dụng"
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
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "spending",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "clean",
    "mean": "sạch sẽ"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
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
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "bathroom",
    "mean": "phòng tắm"
  },
  {
    "word": "next",
    "mean": "kế bên; tiếp theo"
  },
  {
    "word": "bedroom",
    "mean": "phòng ngủ"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "shower",
    "mean": "vòi sen; việc tắm"
  },
  {
    "word": "toilet",
    "mean": "bồn cầu; nhà vệ sinh"
  },
  {
    "word": "sink",
    "mean": "bồn rửa"
  },
  {
    "word": "mirror",
    "mean": "gương"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "towels",
    "mean": "khăn tắm"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "items",
    "mean": "vật dụng"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
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
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "face",
    "mean": "khuôn mặt"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "turn",
    "mean": "vặn; chuyển; tắt trong cụm turn off"
  },
  {
    "word": "off",
    "mean": "tắt; rời khỏi"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "dry",
    "mean": "khô"
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
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "desk",
    "mean": "bàn học; bàn làm việc"
  },
  {
    "word": "chair",
    "mean": "ghế"
  },
  {
    "word": "bookshelf",
    "mean": "giá sách"
  },
  {
    "word": "computer",
    "mean": "máy tính"
  },
  {
    "word": "reading",
    "mean": "việc đọc"
  },
  {
    "word": "lamp",
    "mean": "đèn"
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
    "word": "focus",
    "mean": "tập trung"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "homework",
    "mean": "bài tập về nhà"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "distractions",
    "mean": "sự xao nhãng"
  },
  {
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "creativity",
    "mean": "sự sáng tạo"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "documents",
    "mean": "tài liệu"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "peaceful",
    "mean": "yên bình"
  },
  {
    "word": "can",
    "mean": "có thể"
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
    "word": "better",
    "mean": "tốt hơn"
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
    "word": "things",
    "mean": "đồ vật; việc"
  }
];

const newEx4Data = [
  {
    "word": "dining",
    "mean": "thuộc phòng ăn; dùng để ăn"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "kitchen",
    "mean": "nhà bếp"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "living",
    "mean": "thuộc phòng khách; dùng cho sinh hoạt"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "several",
    "mean": "vài; một số"
  },
  {
    "word": "chairs",
    "mean": "những chiếc ghế"
  },
  {
    "word": "cupboard",
    "mean": "tủ đựng đồ"
  },
  {
    "word": "light",
    "mean": "đèn; ánh sáng"
  },
  {
    "word": "above",
    "mean": "ở phía trên"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "middle",
    "mean": "ở giữa; phần giữa"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "breakfast",
    "mean": "bữa sáng"
  },
  {
    "word": "dinner",
    "mean": "bữa tối"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "during",
    "mean": "trong; trong suốt"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
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
    "word": "work",
    "mean": "công việc"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "try",
    "mean": "thử"
  },
  {
    "word": "not",
    "mean": "không"
  },
  {
    "word": "use",
    "mean": "sử dụng"
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
    "word": "eating",
    "mean": "việc ăn"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "spending",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "give",
    "mean": "mang lại"
  },
  {
    "word": "communicate",
    "mean": "giao tiếp"
  },
  {
    "word": "understand",
    "mean": "hiểu"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "clean",
    "mean": "sạch sẽ"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
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
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "meaningful",
    "mean": "có ý nghĩa"
  },
  {
    "word": "bathroom",
    "mean": "phòng tắm"
  },
  {
    "word": "next",
    "mean": "kế bên; tiếp theo"
  },
  {
    "word": "bedroom",
    "mean": "phòng ngủ"
  },
  {
    "word": "very",
    "mean": "rất"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "shower",
    "mean": "vòi sen; việc tắm"
  },
  {
    "word": "toilet",
    "mean": "bồn cầu; nhà vệ sinh"
  },
  {
    "word": "sink",
    "mean": "bồn rửa"
  },
  {
    "word": "mirror",
    "mean": "gương"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "towels",
    "mean": "khăn tắm"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "items",
    "mean": "vật dụng"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
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
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "face",
    "mean": "khuôn mặt"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "turn",
    "mean": "vặn; chuyển; tắt trong cụm turn off"
  },
  {
    "word": "off",
    "mean": "tắt; rời khỏi"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "dry",
    "mean": "khô"
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
    "word": "everyone",
    "mean": "mọi người"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "desk",
    "mean": "bàn học; bàn làm việc"
  },
  {
    "word": "chair",
    "mean": "ghế"
  },
  {
    "word": "bookshelf",
    "mean": "giá sách"
  },
  {
    "word": "computer",
    "mean": "máy tính"
  },
  {
    "word": "reading",
    "mean": "việc đọc"
  },
  {
    "word": "lamp",
    "mean": "đèn"
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
    "word": "focus",
    "mean": "tập trung"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "english",
    "mean": "tiếng Anh"
  },
  {
    "word": "read",
    "mean": "đọc"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "complete",
    "mean": "hoàn thành"
  },
  {
    "word": "tasks",
    "mean": "nhiệm vụ"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "do",
    "mean": "làm"
  },
  {
    "word": "homework",
    "mean": "bài tập về nhà"
  },
  {
    "word": "avoid",
    "mean": "tránh"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "distractions",
    "mean": "sự xao nhãng"
  },
  {
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "supports",
    "mean": "hỗ trợ"
  },
  {
    "word": "learning",
    "mean": "việc học"
  },
  {
    "word": "creativity",
    "mean": "sự sáng tạo"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "documents",
    "mean": "tài liệu"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "peaceful",
    "mean": "yên bình"
  },
  {
    "word": "can",
    "mean": "có thể"
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
    "word": "better",
    "mean": "tốt hơn"
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
    "word": "things",
    "mean": "đồ vật; việc"
  }
];

const newEx5Data = [
  "The room is simple, but it helps me focus on my work.",
  "The dining room is between the kitchen and the living room.",
  "We also put some flowers in the middle of the table.",
  "My family usually has breakfast and dinner together in this room.",
  "During meals, we talk about our work, school, and daily activities.",
  "I enjoy spending time in the dining room because family meals are important.",
  "A clean and comfortable dining room makes every meal more enjoyable and meaningful.",
  "It is not very large, but it is clean and useful.",
  "Everyone in the family should keep it tidy and save water.",
  "The study room is in a quiet area of my house."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "The room is simple, but it helps me focus on my work."
  },
  {
    "id": 2,
    "correct": "The dining room is between the kitchen and the living room."
  },
  {
    "id": 3,
    "correct": "We also put some flowers in the middle of the table."
  },
  {
    "id": 4,
    "correct": "My family usually has breakfast and dinner together in this room."
  },
  {
    "id": 5,
    "correct": "During meals, we talk about our work, school, and daily activities."
  },
  {
    "id": 6,
    "correct": "I enjoy spending time in the dining room because family meals are important."
  },
  {
    "id": 7,
    "correct": "A clean and comfortable dining room makes every meal more enjoyable and meaningful."
  },
  {
    "id": 8,
    "correct": "It is not very large, but it is clean and useful."
  },
  {
    "id": 9,
    "correct": "Everyone in the family should keep it tidy and save water."
  },
  {
    "id": 10,
    "correct": "The study room is in a quiet area of my house."
  },
  {
    "id": 11,
    "correct": "We try to keep the room quiet and avoid unnecessary distractions."
  },
  {
    "id": 12,
    "correct": "I like the study room because it supports learning and creativity."
  },
  {
    "id": 13,
    "correct": "They give us time to communicate and understand each other."
  },
  {
    "id": 14,
    "correct": "After using it, I always turn off the water and keep the floor dry."
  },
  {
    "id": 15,
    "correct": "We should also clean the sink, mirror, and floor regularly."
  }
];

const newEx7Data = [
  {
    "q": "Where is the dining room in relation to the kitchen and living room?",
    "a": "It is between the kitchen and the living room."
  },
  {
    "q": "What does the family put in the middle of the dining table?",
    "a": "They put some flowers in the middle of the table."
  },
  {
    "q": "What does the family try not to do while eating?",
    "a": "They try not to use their phones while eating."
  },
  {
    "q": "Why are family meals important to the writer?",
    "a": "They give the family time to communicate and understand each other."
  },
  {
    "q": "What items are mentioned in the bathroom?",
    "a": "The bathroom has a shower, a toilet, a sink, a mirror, and a small cupboard."
  },
  {
    "q": "What does the writer do in the bathroom every morning and evening?",
    "a": "The writer brushes teeth, washes the face, takes a shower, and prepares for the day."
  },
  {
    "q": "How does the writer save water after using the bathroom?",
    "a": "The writer turns off the water after using the bathroom."
  },
  {
    "q": "What furniture and equipment are in the study room?",
    "a": "It has a desk, a comfortable chair, a bookshelf, a computer, and a reading lamp."
  },
  {
    "q": "How does the family reduce distractions in the study room?",
    "a": "They try to keep the room quiet and avoid unnecessary distractions."
  },
  {
    "q": "How can a peaceful study room help people?",
    "a": "It can help people work better and learn new things every day."
  }
];
