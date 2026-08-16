// ===== room01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. The living room is an important place in my _____, which describes everyday life in our home clearly.",
    "a": "house"
  },
  {
    "q": "2. It is usually at the front of the house, near the main _____.",
    "a": "door"
  },
  {
    "q": "3. There is a sofa, a television, a coffee table, and some family pictures on the _____.",
    "a": "wall"
  },
  {
    "q": "4. My family often spends time together in this _____, which describes everyday life in our home clearly.",
    "a": "room"
  },
  {
    "q": "5. We watch television, talk about our day, listen to music, or welcome _____.",
    "a": "visitors"
  },
  {
    "q": "6. Sometimes, my children sit on the sofa and read _____, which describes everyday life in our home clearly.",
    "a": "books"
  },
  {
    "q": "7. I like the living room because it is comfortable and _____, which describes everyday life in our home clearly.",
    "a": "friendly"
  },
  {
    "q": "8. I always keep it clean and _____, which describes everyday life in our home clearly.",
    "a": "tidy"
  },
  {
    "q": "9. It is a wonderful place where my family can relax and enjoy happy moments _____.",
    "a": "together"
  },
  {
    "q": "10. My bedroom is a quiet and _____ room, which describes everyday life in our home clearly.",
    "a": "comfortable"
  },
  {
    "q": "11. It is located upstairs, next to the _____, which describes everyday life in our home clearly.",
    "a": "bathroom"
  },
  {
    "q": "12. Inside the room, there is a bed, a wardrobe, a small desk, a chair, and a _____.",
    "a": "lamp"
  },
  {
    "q": "13. I usually study or read books at my desk in the _____, which describes everyday life in our home clearly.",
    "a": "evening"
  },
  {
    "q": "14. Before going to sleep, I prepare my clothes for the next day and put my phone _____.",
    "a": "away"
  },
  {
    "q": "15. I also open the window to get some fresh _____, which describes everyday life in our home clearly.",
    "a": "air"
  },
  {
    "q": "16. I like my bedroom because it gives me privacy and _____, which describes everyday life in our home clearly.",
    "a": "peace"
  },
  {
    "q": "17. I keep my clothes and personal things _____, which describes everyday life in our home clearly.",
    "a": "organized"
  },
  {
    "q": "18. After a busy day, my bedroom is the best place to rest and _____.",
    "a": "sleep"
  },
  {
    "q": "19. The kitchen is at the back of my house, near the _____ room.",
    "a": "dining"
  },
  {
    "q": "20. It has a refrigerator, a cooker, a sink, some cupboards, and many cooking _____.",
    "a": "tools"
  }
];

const newEx2Data = [
  {
    "q": "1. Complete the sentence: The living room is an important place in my _____.",
    "opts": [
      "house",
      "front",
      "door",
      "sofa"
    ],
    "a": "house"
  },
  {
    "q": "2. Complete the sentence: It is usually at the front of the house, near the main _____.",
    "opts": [
      "room",
      "door",
      "place",
      "sofa"
    ],
    "a": "door"
  },
  {
    "q": "3. Complete the sentence: There is a sofa, a television, a coffee table, and some family pictures on the _____.",
    "opts": [
      "room",
      "place",
      "wall",
      "house"
    ],
    "a": "wall"
  },
  {
    "q": "4. Complete the sentence: My family often spends time together in this _____.",
    "opts": [
      "place",
      "house",
      "front",
      "room"
    ],
    "a": "room"
  },
  {
    "q": "5. Complete the sentence: We watch television, talk about our day, listen to music, or welcome _____.",
    "opts": [
      "visitors",
      "room",
      "place",
      "house"
    ],
    "a": "visitors"
  },
  {
    "q": "6. Complete the sentence: Sometimes, my children sit on the sofa and read _____.",
    "opts": [
      "room",
      "books",
      "place",
      "house"
    ],
    "a": "books"
  },
  {
    "q": "7. Complete the sentence: I like the living room because it is comfortable and _____.",
    "opts": [
      "important",
      "main",
      "friendly",
      "some"
    ],
    "a": "friendly"
  },
  {
    "q": "8. Complete the sentence: I always keep it clean and _____.",
    "opts": [
      "living",
      "important",
      "main",
      "tidy"
    ],
    "a": "tidy"
  },
  {
    "q": "9. Complete the sentence: It is a wonderful place where my family can relax and enjoy happy moments _____.",
    "opts": [
      "together",
      "usually",
      "there",
      "often"
    ],
    "a": "together"
  },
  {
    "q": "10. Complete the sentence: My bedroom is a quiet and _____ room.",
    "opts": [
      "living",
      "comfortable",
      "important",
      "main"
    ],
    "a": "comfortable"
  },
  {
    "q": "11. Complete the sentence: It is located upstairs, next to the _____.",
    "opts": [
      "room",
      "place",
      "bathroom",
      "house"
    ],
    "a": "bathroom"
  },
  {
    "q": "12. Complete the sentence: Inside the room, there is a bed, a wardrobe, a small desk, a chair, and a _____.",
    "opts": [
      "place",
      "house",
      "front",
      "lamp"
    ],
    "a": "lamp"
  },
  {
    "q": "13. Complete the sentence: I usually study or read books at my desk in the _____.",
    "opts": [
      "evening",
      "room",
      "place",
      "house"
    ],
    "a": "evening"
  },
  {
    "q": "14. Complete the sentence: Before going to sleep, I prepare my clothes for the next day and put my phone _____.",
    "opts": [
      "usually",
      "away",
      "there",
      "often"
    ],
    "a": "away"
  },
  {
    "q": "15. Complete the sentence: I also open the window to get some fresh _____.",
    "opts": [
      "room",
      "place",
      "air",
      "house"
    ],
    "a": "air"
  },
  {
    "q": "16. Complete the sentence: I like my bedroom because it gives me privacy and _____.",
    "opts": [
      "place",
      "house",
      "front",
      "peace"
    ],
    "a": "peace"
  },
  {
    "q": "17. Complete the sentence: I keep my clothes and personal things _____.",
    "opts": [
      "organized",
      "living",
      "important",
      "main"
    ],
    "a": "organized"
  },
  {
    "q": "18. Complete the sentence: After a busy day, my bedroom is the best place to rest and _____.",
    "opts": [
      "spends",
      "sleep",
      "watch",
      "talk"
    ],
    "a": "sleep"
  },
  {
    "q": "19. Complete the sentence: The kitchen is at the back of my house, near the _____ room.",
    "opts": [
      "living",
      "important",
      "dining",
      "main"
    ],
    "a": "dining"
  },
  {
    "q": "20. Complete the sentence: It has a refrigerator, a cooker, a sink, some cupboards, and many cooking _____.",
    "opts": [
      "room",
      "place",
      "house",
      "tools"
    ],
    "a": "tools"
  }
];

const newEx3Data = [
  {
    "word": "living",
    "mean": "thuộc phòng khách; dùng cho sinh hoạt"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "front",
    "mean": "phía trước"
  },
  {
    "word": "main",
    "mean": "chính"
  },
  {
    "word": "door",
    "mean": "cửa"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "sofa",
    "mean": "ghế sofa"
  },
  {
    "word": "television",
    "mean": "tivi; truyền hình"
  },
  {
    "word": "coffee",
    "mean": "cà phê"
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
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "pictures",
    "mean": "những bức ảnh"
  },
  {
    "word": "wall",
    "mean": "tường"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "spends",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "watch",
    "mean": "xem"
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
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "sit",
    "mean": "ngồi"
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
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "clean",
    "mean": "sạch sẽ"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "moments",
    "mean": "những khoảnh khắc"
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
    "word": "located",
    "mean": "nằm ở; tọa lạc"
  },
  {
    "word": "upstairs",
    "mean": "ở tầng trên"
  },
  {
    "word": "next",
    "mean": "kế bên; tiếp theo"
  },
  {
    "word": "bathroom",
    "mean": "phòng tắm"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "wardrobe",
    "mean": "tủ quần áo"
  },
  {
    "word": "small",
    "mean": "nhỏ"
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
    "word": "lamp",
    "mean": "đèn"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "away",
    "mean": "ra xa; đi"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "open",
    "mean": "mở"
  },
  {
    "word": "window",
    "mean": "cửa sổ"
  },
  {
    "word": "get",
    "mean": "có được; nhận"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "privacy",
    "mean": "quyền riêng tư"
  },
  {
    "word": "peace",
    "mean": "sự bình yên"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "organized",
    "mean": "ngăn nắp; có tổ chức"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "kitchen",
    "mean": "nhà bếp"
  },
  {
    "word": "back",
    "mean": "phía sau"
  },
  {
    "word": "dining",
    "mean": "thuộc phòng ăn; dùng để ăn"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "refrigerator",
    "mean": "tủ lạnh"
  },
  {
    "word": "cooker",
    "mean": "bếp nấu"
  },
  {
    "word": "sink",
    "mean": "bồn rửa"
  },
  {
    "word": "cupboards",
    "mean": "các tủ đựng đồ"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "bright",
    "mean": "sáng"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "prepares",
    "mean": "chuẩn bị"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "soup",
    "mean": "canh; súp"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "plates",
    "mean": "đĩa"
  },
  {
    "word": "one",
    "mean": "một; một trong số"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "rooms",
    "mean": "các phòng"
  },
  {
    "word": "full",
    "mean": "đầy"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "closer",
    "mean": "gần gũi hơn"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  }
];

const newEx4Data = [
  {
    "word": "living",
    "mean": "thuộc phòng khách; dùng cho sinh hoạt"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "front",
    "mean": "phía trước"
  },
  {
    "word": "main",
    "mean": "chính"
  },
  {
    "word": "door",
    "mean": "cửa"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "sofa",
    "mean": "ghế sofa"
  },
  {
    "word": "television",
    "mean": "tivi; truyền hình"
  },
  {
    "word": "coffee",
    "mean": "cà phê"
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
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "pictures",
    "mean": "những bức ảnh"
  },
  {
    "word": "wall",
    "mean": "tường"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "spends",
    "mean": "dành (thời gian)"
  },
  {
    "word": "time",
    "mean": "thời gian"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "watch",
    "mean": "xem"
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
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "listen",
    "mean": "lắng nghe"
  },
  {
    "word": "music",
    "mean": "âm nhạc"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "sometimes",
    "mean": "đôi khi"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "sit",
    "mean": "ngồi"
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
    "word": "like",
    "mean": "thích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "clean",
    "mean": "sạch sẽ"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "enjoy",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "moments",
    "mean": "những khoảnh khắc"
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
    "word": "located",
    "mean": "nằm ở; tọa lạc"
  },
  {
    "word": "upstairs",
    "mean": "ở tầng trên"
  },
  {
    "word": "next",
    "mean": "kế bên; tiếp theo"
  },
  {
    "word": "bathroom",
    "mean": "phòng tắm"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "bed",
    "mean": "giường"
  },
  {
    "word": "wardrobe",
    "mean": "tủ quần áo"
  },
  {
    "word": "small",
    "mean": "nhỏ"
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
    "word": "lamp",
    "mean": "đèn"
  },
  {
    "word": "study",
    "mean": "học"
  },
  {
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "going",
    "mean": "việc đi"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "phone",
    "mean": "điện thoại"
  },
  {
    "word": "away",
    "mean": "ra xa; đi"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "open",
    "mean": "mở"
  },
  {
    "word": "window",
    "mean": "cửa sổ"
  },
  {
    "word": "get",
    "mean": "có được; nhận"
  },
  {
    "word": "fresh",
    "mean": "tươi; trong lành"
  },
  {
    "word": "air",
    "mean": "không khí"
  },
  {
    "word": "gives",
    "mean": "cho; mang lại"
  },
  {
    "word": "privacy",
    "mean": "quyền riêng tư"
  },
  {
    "word": "peace",
    "mean": "sự bình yên"
  },
  {
    "word": "personal",
    "mean": "cá nhân"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "organized",
    "mean": "ngăn nắp; có tổ chức"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "best",
    "mean": "tốt nhất"
  },
  {
    "word": "rest",
    "mean": "nghỉ ngơi"
  },
  {
    "word": "kitchen",
    "mean": "nhà bếp"
  },
  {
    "word": "back",
    "mean": "phía sau"
  },
  {
    "word": "dining",
    "mean": "thuộc phòng ăn; dùng để ăn"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "refrigerator",
    "mean": "tủ lạnh"
  },
  {
    "word": "cooker",
    "mean": "bếp nấu"
  },
  {
    "word": "sink",
    "mean": "bồn rửa"
  },
  {
    "word": "cupboards",
    "mean": "các tủ đựng đồ"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "bright",
    "mean": "sáng"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "prepares",
    "mean": "chuẩn bị"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "soup",
    "mean": "canh; súp"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "dishes",
    "mean": "món ăn"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "plates",
    "mean": "đĩa"
  },
  {
    "word": "one",
    "mean": "một; một trong số"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "rooms",
    "mean": "các phòng"
  },
  {
    "word": "full",
    "mean": "đầy"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "closer",
    "mean": "gần gũi hơn"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "preparing",
    "mean": "việc chuẩn bị"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  }
];

const newEx5Data = [
  "I usually study or read books at my desk in the evening.",
  "Sometimes, my children help wash vegetables, prepare plates, or clean the table.",
  "We should always keep the kitchen clean and safe after preparing food.",
  "It is usually at the front of the house, near the main door.",
  "We watch television, talk about our day, listen to music, or welcome visitors.",
  "I like the living room because it is comfortable and friendly.",
  "I like my bedroom because it gives me privacy and peace.",
  "The kitchen is at the back of my house, near the dining room.",
  "The living room is an important place in my house.",
  "Sometimes, my children sit on the sofa and read books."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "I usually study or read books at my desk in the evening."
  },
  {
    "id": 2,
    "correct": "Sometimes, my children help wash vegetables, prepare plates, or clean the table."
  },
  {
    "id": 3,
    "correct": "We should always keep the kitchen clean and safe after preparing food."
  },
  {
    "id": 4,
    "correct": "It is usually at the front of the house, near the main door."
  },
  {
    "id": 5,
    "correct": "We watch television, talk about our day, listen to music, or welcome visitors."
  },
  {
    "id": 6,
    "correct": "I like the living room because it is comfortable and friendly."
  },
  {
    "id": 7,
    "correct": "I like my bedroom because it gives me privacy and peace."
  },
  {
    "id": 8,
    "correct": "The kitchen is at the back of my house, near the dining room."
  },
  {
    "id": 9,
    "correct": "The living room is an important place in my house."
  },
  {
    "id": 10,
    "correct": "Sometimes, my children sit on the sofa and read books."
  },
  {
    "id": 11,
    "correct": "I also open the window to get some fresh air."
  },
  {
    "id": 12,
    "correct": "After a busy day, my bedroom is the best place to rest and sleep."
  },
  {
    "id": 13,
    "correct": "It has a refrigerator, a cooker, a sink, some cupboards, and many cooking tools."
  },
  {
    "id": 14,
    "correct": "We cook rice, soup, vegetables, meat, and other delicious dishes."
  },
  {
    "id": 15,
    "correct": "My family often spends time together in this room."
  }
];

const newEx7Data = [
  {
    "q": "What furniture and decorations are mentioned in the living room?",
    "a": "The living room has a sofa, a television, a coffee table, and family pictures."
  },
  {
    "q": "What does the family do together in the living room?",
    "a": "They watch television, talk about their day, listen to music, and welcome visitors."
  },
  {
    "q": "Why does the writer like the living room?",
    "a": "The writer likes it because it is comfortable and friendly."
  },
  {
    "q": "Where is the bedroom located?",
    "a": "It is upstairs, next to the bathroom."
  },
  {
    "q": "What does the writer do before going to sleep?",
    "a": "The writer prepares clothes for the next day and puts the phone away."
  },
  {
    "q": "Why does the writer like the bedroom?",
    "a": "It gives the writer privacy and peace."
  },
  {
    "q": "What equipment is mentioned in the kitchen?",
    "a": "The kitchen has a refrigerator, a cooker, a sink, cupboards, and cooking tools."
  },
  {
    "q": "What foods does the family cook in the kitchen?",
    "a": "They cook rice, soup, vegetables, meat, and other dishes."
  },
  {
    "q": "How do the children help in the kitchen?",
    "a": "They help wash vegetables, prepare plates, or clean the table."
  },
  {
    "q": "Why should the kitchen be kept clean and safe?",
    "a": "The text says the kitchen should be kept clean and safe after preparing food."
  }
];
