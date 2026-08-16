// ===== park01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. A _____ park is a peaceful place where people relax and enjoy nature.",
    "a": "beautiful"
  },
  {
    "q": "2. It _____ green grass, colorful flowers, tall trees, and clean walking paths during a peaceful visit with family and friends.",
    "a": "has"
  },
  {
    "q": "3. _____, children, and friends often visit the park after school or work together.",
    "a": "families"
  },
  {
    "q": "4. _____ can walk, jog, ride bicycles, or sit on benches during a peaceful visit with family and friends.",
    "a": "people"
  },
  {
    "q": "5. _____ play on swings and slides while parents watch happily during a peaceful visit with family and friends.",
    "a": "children"
  },
  {
    "q": "6. _____ visitors read books, take photos, or feed ducks near the small lake every weekend.",
    "a": "some"
  },
  {
    "q": "7. A beautiful _____ makes the city cleaner and more enjoyable during a peaceful visit with family and friends.",
    "a": "park"
  },
  {
    "q": "8. It _____ fresh air, quiet spaces, and happy memories for everyone during a peaceful visit with family and friends.",
    "a": "gives"
  },
  {
    "q": "9. People _____ keep the park clean by using trash bins and protecting nature every day.",
    "a": "should"
  },
  {
    "q": "10. _____ people enjoy different activities in the park every day during a peaceful visit with family and friends.",
    "a": "many"
  },
  {
    "q": "11. _____ are safe places where families, friends, and neighbors spend time together during a peaceful visit with family and friends.",
    "a": "parks"
  },
  {
    "q": "12. _____ can exercise, relax, and enjoy the fresh air outside happily during a peaceful visit with family and friends.",
    "a": "visitors"
  },
  {
    "q": "13. Some people _____ around the park or run on the paths during a peaceful visit with family and friends.",
    "a": "walk"
  },
  {
    "q": "14. Children _____ games, fly kites, and climb on playground equipment during a peaceful visit with family and friends.",
    "a": "play"
  },
  {
    "q": "15. _____ have picnics, listen to music, or watch birds in the trees during sunny afternoons.",
    "a": "others"
  },
  {
    "q": "16. Park _____ help people stay healthy and happy during a peaceful visit with family and friends.",
    "a": "activities"
  },
  {
    "q": "17. _____ time outside reduces stress and gives everyone more energy during a peaceful visit with family and friends.",
    "a": "spending"
  },
  {
    "q": "18. People should _____ others, keep the park clean, and enjoy every visit with kindness and care.",
    "a": "respect"
  },
  {
    "q": "19. My _____ enjoys having a picnic in the park on weekends during a peaceful visit with family and friends.",
    "a": "family"
  },
  {
    "q": "20. We _____ delicious food, cold drinks, fruits, and a large blanket during a peaceful visit with family and friends.",
    "a": "bring"
  }
];

const newEx2Data = [
  {
    "q": "1. What does a beautiful park provide for people?",
    "opts": [
      "Fresh air, quiet spaces, and happy memories",
      "Heavy traffic and noise",
      "Office equipment",
      "Indoor shopping areas"
    ],
    "a": "Fresh air, quiet spaces, and happy memories"
  },
  {
    "q": "2. What can people do on benches in the park?",
    "opts": [
      "Drive cars",
      "Cook in an office",
      "Cross a highway",
      "Sit and relax"
    ],
    "a": "Sit and relax"
  },
  {
    "q": "3. What do children play on while parents watch?",
    "opts": [
      "Buses and trains",
      "Boats and planes",
      "Swings and slides",
      "Printers and desks"
    ],
    "a": "Swings and slides"
  },
  {
    "q": "4. What may visitors feed near the small lake?",
    "opts": [
      "Whales",
      "Ducks",
      "Tigers",
      "Horses"
    ],
    "a": "Ducks"
  },
  {
    "q": "5. What can children fly in the park?",
    "opts": [
      "Kites",
      "Tickets",
      "Reports",
      "Traffic lights"
    ],
    "a": "Kites"
  },
  {
    "q": "6. Why are park activities good for people?",
    "opts": [
      "They make roads crowded",
      "They increase office work",
      "They close public spaces",
      "They help people stay healthy and happy"
    ],
    "a": "They help people stay healthy and happy"
  },
  {
    "q": "7. What does the family bring for a picnic?",
    "opts": [
      "Helmets and traffic signs",
      "Tools and machines",
      "Food, drinks, fruits, and a blanket",
      "Computers and printers"
    ],
    "a": "Food, drinks, fruits, and a blanket"
  },
  {
    "q": "8. What does the family do before going home?",
    "opts": [
      "They frighten the ducks",
      "They clean the area and put trash in bins",
      "They damage the flowers",
      "They leave all trash outside"
    ],
    "a": "They clean the area and put trash in bins"
  },
  {
    "q": "9. What does “beautiful” mean in this lesson?",
    "opts": [
      "công viên",
      "thanh bình",
      "nơi; địa điểm",
      "đẹp"
    ],
    "a": "đẹp"
  },
  {
    "q": "10. What does “grass” mean in this lesson?",
    "opts": [
      "công viên",
      "thanh bình",
      "cỏ",
      "đẹp"
    ],
    "a": "cỏ"
  },
  {
    "q": "11. What does “visit” mean in this lesson?",
    "opts": [
      "thanh bình",
      "thăm",
      "đẹp",
      "công viên"
    ],
    "a": "thăm"
  },
  {
    "q": "12. What does “play” mean in this lesson?",
    "opts": [
      "chơi",
      "đẹp",
      "công viên",
      "thanh bình"
    ],
    "a": "chơi"
  },
  {
    "q": "13. What does “photos” mean in this lesson?",
    "opts": [
      "đẹp",
      "công viên",
      "thanh bình",
      "ảnh"
    ],
    "a": "ảnh"
  },
  {
    "q": "14. What does “gives” mean in this lesson?",
    "opts": [
      "công viên",
      "thanh bình",
      "mang lại",
      "đẹp"
    ],
    "a": "mang lại"
  },
  {
    "q": "15. What does “bins” mean in this lesson?",
    "opts": [
      "thanh bình",
      "thùng rác",
      "đẹp",
      "công viên"
    ],
    "a": "thùng rác"
  },
  {
    "q": "16. What does “exercise” mean in this lesson?",
    "opts": [
      "tập thể dục",
      "đẹp",
      "công viên",
      "thanh bình"
    ],
    "a": "tập thể dục"
  },
  {
    "q": "17. What does “picnics” mean in this lesson?",
    "opts": [
      "đẹp",
      "công viên",
      "thanh bình",
      "các buổi dã ngoại"
    ],
    "a": "các buổi dã ngoại"
  },
  {
    "q": "18. What does “energy” mean in this lesson?",
    "opts": [
      "công viên",
      "thanh bình",
      "năng lượng",
      "đẹp"
    ],
    "a": "năng lượng"
  },
  {
    "q": "19. What does “cold” mean in this lesson?",
    "opts": [
      "thanh bình",
      "lạnh",
      "đẹp",
      "công viên"
    ],
    "a": "lạnh"
  },
  {
    "q": "20. What does “stories” mean in this lesson?",
    "opts": [
      "câu chuyện",
      "đẹp",
      "công viên",
      "thanh bình"
    ],
    "a": "câu chuyện"
  }
];

const newEx3Data = [
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "where",
    "mean": "nơi mà"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "grass",
    "mean": "cỏ"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "tall",
    "mean": "cao"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "paths",
    "mean": "lối đi"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "visit",
    "mean": "thăm"
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
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "jog",
    "mean": "chạy bộ chậm"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "sit",
    "mean": "ngồi"
  },
  {
    "word": "benches",
    "mean": "ghế băng"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "swings",
    "mean": "xích đu"
  },
  {
    "word": "slides",
    "mean": "cầu trượt"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "visitors",
    "mean": "du khách"
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
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "photos",
    "mean": "ảnh"
  },
  {
    "word": "feed",
    "mean": "cho ăn"
  },
  {
    "word": "ducks",
    "mean": "vịt"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "lake",
    "mean": "hồ"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "weekend",
    "mean": "cuối tuần"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "more",
    "mean": "hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "gives",
    "mean": "mang lại"
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
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "spaces",
    "mean": "không gian"
  },
  {
    "word": "happy",
    "mean": "vui vẻ; hạnh phúc"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
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
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "trash",
    "mean": "rác"
  },
  {
    "word": "bins",
    "mean": "thùng rác"
  },
  {
    "word": "protecting",
    "mean": "việc bảo vệ"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "places",
    "mean": "nơi"
  },
  {
    "word": "neighbors",
    "mean": "hàng xóm"
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
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "outside",
    "mean": "ở ngoài trời"
  },
  {
    "word": "around",
    "mean": "quanh"
  },
  {
    "word": "run",
    "mean": "chạy"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "fly",
    "mean": "thả; bay"
  },
  {
    "word": "kites",
    "mean": "những cái diều"
  },
  {
    "word": "climb",
    "mean": "leo"
  },
  {
    "word": "playground",
    "mean": "sân chơi"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "picnics",
    "mean": "các buổi dã ngoại"
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
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "sunny",
    "mean": "có nắng"
  },
  {
    "word": "afternoons",
    "mean": "các buổi chiều"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở trạng thái"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "spending",
    "mean": "việc dành thời gian"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "care",
    "mean": "sự quan tâm"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "picnic",
    "mean": "buổi dã ngoại"
  },
  {
    "word": "enjoys",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "having",
    "mean": "việc có; việc tham gia"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "bring",
    "mean": "mang theo"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "cold",
    "mean": "lạnh"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "fruits",
    "mean": "trái cây"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "blanket",
    "mean": "tấm chăn"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "excited",
    "mean": "hào hứng"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "sandwiches",
    "mean": "bánh mì kẹp"
  },
  {
    "word": "tell",
    "mean": "kể"
  },
  {
    "word": "funny",
    "mean": "hài hước"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "big",
    "mean": "lớn"
  },
  {
    "word": "tree",
    "mean": "cây"
  },
  {
    "word": "brother",
    "mean": "anh/em trai"
  },
  {
    "word": "flies",
    "mean": "thả; bay"
  },
  {
    "word": "kite",
    "mean": "cái diều"
  },
  {
    "word": "lunch",
    "mean": "bữa trưa"
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
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "schedules",
    "mean": "lịch trình"
  },
  {
    "word": "going",
    "mean": "đi"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "properly",
    "mean": "đúng cách"
  }
];

const newEx4Data = [
  {
    "word": "beautiful",
    "mean": "đẹp"
  },
  {
    "word": "park",
    "mean": "công viên"
  },
  {
    "word": "peaceful",
    "mean": "thanh bình"
  },
  {
    "word": "place",
    "mean": "nơi; địa điểm"
  },
  {
    "word": "where",
    "mean": "nơi mà"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "relax",
    "mean": "thư giãn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "enjoy",
    "mean": "yêu thích; tận hưởng"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "green",
    "mean": "xanh"
  },
  {
    "word": "grass",
    "mean": "cỏ"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "flowers",
    "mean": "hoa"
  },
  {
    "word": "tall",
    "mean": "cao"
  },
  {
    "word": "trees",
    "mean": "cây"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "paths",
    "mean": "lối đi"
  },
  {
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "visit",
    "mean": "thăm"
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
    "word": "work",
    "mean": "làm việc"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "walk",
    "mean": "đi bộ"
  },
  {
    "word": "jog",
    "mean": "chạy bộ chậm"
  },
  {
    "word": "ride",
    "mean": "đi; đi xe"
  },
  {
    "word": "bicycles",
    "mean": "xe đạp"
  },
  {
    "word": "sit",
    "mean": "ngồi"
  },
  {
    "word": "benches",
    "mean": "ghế băng"
  },
  {
    "word": "play",
    "mean": "chơi"
  },
  {
    "word": "swings",
    "mean": "xích đu"
  },
  {
    "word": "slides",
    "mean": "cầu trượt"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "parents",
    "mean": "cha mẹ"
  },
  {
    "word": "watch",
    "mean": "quan sát"
  },
  {
    "word": "happily",
    "mean": "vui vẻ"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "visitors",
    "mean": "du khách"
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
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "photos",
    "mean": "ảnh"
  },
  {
    "word": "feed",
    "mean": "cho ăn"
  },
  {
    "word": "ducks",
    "mean": "vịt"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "lake",
    "mean": "hồ"
  },
  {
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "weekend",
    "mean": "cuối tuần"
  },
  {
    "word": "makes",
    "mean": "làm cho"
  },
  {
    "word": "city",
    "mean": "thành phố"
  },
  {
    "word": "cleaner",
    "mean": "sạch hơn"
  },
  {
    "word": "more",
    "mean": "hơn"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị"
  },
  {
    "word": "gives",
    "mean": "mang lại"
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
    "word": "quiet",
    "mean": "yên tĩnh"
  },
  {
    "word": "spaces",
    "mean": "không gian"
  },
  {
    "word": "happy",
    "mean": "vui vẻ; hạnh phúc"
  },
  {
    "word": "memories",
    "mean": "những kỷ niệm"
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
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "using",
    "mean": "việc sử dụng"
  },
  {
    "word": "trash",
    "mean": "rác"
  },
  {
    "word": "bins",
    "mean": "thùng rác"
  },
  {
    "word": "protecting",
    "mean": "việc bảo vệ"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "activities",
    "mean": "hoạt động"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "safe",
    "mean": "an toàn"
  },
  {
    "word": "places",
    "mean": "nơi"
  },
  {
    "word": "neighbors",
    "mean": "hàng xóm"
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
    "word": "exercise",
    "mean": "tập thể dục"
  },
  {
    "word": "outside",
    "mean": "ở ngoài trời"
  },
  {
    "word": "around",
    "mean": "quanh"
  },
  {
    "word": "run",
    "mean": "chạy"
  },
  {
    "word": "games",
    "mean": "trò chơi"
  },
  {
    "word": "fly",
    "mean": "thả; bay"
  },
  {
    "word": "kites",
    "mean": "những cái diều"
  },
  {
    "word": "climb",
    "mean": "leo"
  },
  {
    "word": "playground",
    "mean": "sân chơi"
  },
  {
    "word": "equipment",
    "mean": "thiết bị"
  },
  {
    "word": "others",
    "mean": "những người khác"
  },
  {
    "word": "have",
    "mean": "có"
  },
  {
    "word": "picnics",
    "mean": "các buổi dã ngoại"
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
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "sunny",
    "mean": "có nắng"
  },
  {
    "word": "afternoons",
    "mean": "các buổi chiều"
  },
  {
    "word": "help",
    "mean": "giúp"
  },
  {
    "word": "stay",
    "mean": "duy trì; ở trạng thái"
  },
  {
    "word": "healthy",
    "mean": "khỏe mạnh"
  },
  {
    "word": "spending",
    "mean": "việc dành thời gian"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "stress",
    "mean": "căng thẳng"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "respect",
    "mean": "tôn trọng"
  },
  {
    "word": "kindness",
    "mean": "lòng tốt"
  },
  {
    "word": "care",
    "mean": "sự quan tâm"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "picnic",
    "mean": "buổi dã ngoại"
  },
  {
    "word": "enjoys",
    "mean": "thích; tận hưởng"
  },
  {
    "word": "having",
    "mean": "việc có; việc tham gia"
  },
  {
    "word": "weekends",
    "mean": "các cuối tuần"
  },
  {
    "word": "bring",
    "mean": "mang theo"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "cold",
    "mean": "lạnh"
  },
  {
    "word": "drinks",
    "mean": "đồ uống"
  },
  {
    "word": "fruits",
    "mean": "trái cây"
  },
  {
    "word": "large",
    "mean": "lớn"
  },
  {
    "word": "blanket",
    "mean": "tấm chăn"
  },
  {
    "word": "feels",
    "mean": "cảm thấy"
  },
  {
    "word": "excited",
    "mean": "hào hứng"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "sandwiches",
    "mean": "bánh mì kẹp"
  },
  {
    "word": "tell",
    "mean": "kể"
  },
  {
    "word": "funny",
    "mean": "hài hước"
  },
  {
    "word": "stories",
    "mean": "câu chuyện"
  },
  {
    "word": "big",
    "mean": "lớn"
  },
  {
    "word": "tree",
    "mean": "cây"
  },
  {
    "word": "brother",
    "mean": "anh/em trai"
  },
  {
    "word": "flies",
    "mean": "thả; bay"
  },
  {
    "word": "kite",
    "mean": "cái diều"
  },
  {
    "word": "lunch",
    "mean": "bữa trưa"
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
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "laugh",
    "mean": "cười"
  },
  {
    "word": "talk",
    "mean": "nói chuyện"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "schedules",
    "mean": "lịch trình"
  },
  {
    "word": "going",
    "mean": "đi"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "all",
    "mean": "tất cả"
  },
  {
    "word": "properly",
    "mean": "đúng cách"
  }
];

const newEx5Data = [
  "A beautiful park is a peaceful place where people relax and enjoy nature.",
  "It has green grass, colorful flowers, tall trees, and clean walking paths.",
  "Families, children, and friends often visit the park after school or work together.",
  "People can walk, jog, ride bicycles, or sit on benches.",
  "Children play on swings and slides while parents watch happily.",
  "Some visitors read books, take photos, or feed ducks near the small lake every weekend.",
  "A beautiful park makes the city cleaner and more enjoyable.",
  "It gives fresh air, quiet spaces, and happy memories for everyone.",
  "People should keep the park clean by using trash bins and protecting nature every day.",
  "Many people enjoy different activities in the park every day."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "A beautiful park is a peaceful place where people relax and enjoy nature."
  },
  {
    "id": 2,
    "correct": "It has green grass, colorful flowers, tall trees, and clean walking paths."
  },
  {
    "id": 3,
    "correct": "Families, children, and friends often visit the park after school or work together."
  },
  {
    "id": 4,
    "correct": "People can walk, jog, ride bicycles, or sit on benches."
  },
  {
    "id": 5,
    "correct": "Children play on swings and slides while parents watch happily."
  },
  {
    "id": 6,
    "correct": "Some visitors read books, take photos, or feed ducks near the small lake every weekend."
  },
  {
    "id": 7,
    "correct": "A beautiful park makes the city cleaner and more enjoyable."
  },
  {
    "id": 8,
    "correct": "It gives fresh air, quiet spaces, and happy memories for everyone."
  },
  {
    "id": 9,
    "correct": "People should keep the park clean by using trash bins and protecting nature every day."
  },
  {
    "id": 10,
    "correct": "Many people enjoy different activities in the park every day."
  },
  {
    "id": 11,
    "correct": "Parks are safe places where families, friends, and neighbors spend time together."
  },
  {
    "id": 12,
    "correct": "Visitors can exercise, relax, and enjoy the fresh air outside happily."
  },
  {
    "id": 13,
    "correct": "Some people walk around the park or run on the paths."
  },
  {
    "id": 14,
    "correct": "Children play games, fly kites, and climb on playground equipment."
  },
  {
    "id": 15,
    "correct": "Others have picnics, listen to music, or watch birds in the trees during sunny afternoons."
  }
];

const newEx7Data = [
  {
    "q": "Why is a beautiful park a peaceful place for families and friends?",
    "a": "It has green spaces, clean paths, fresh air, and places where people can relax together."
  },
  {
    "q": "Which activities can people do in the park?",
    "a": "They can walk, jog, ride bicycles, sit on benches, read, take photos, and enjoy nature."
  },
  {
    "q": "What do children do while parents watch them?",
    "a": "They play on swings and slides while their parents watch happily."
  },
  {
    "q": "How does a beautiful park improve city life?",
    "a": "It makes the city cleaner and more enjoyable and provides fresh air and quiet spaces."
  },
  {
    "q": "Why should people use trash bins in the park?",
    "a": "Using trash bins helps keep the park clean and protects nature."
  },
  {
    "q": "What activities can children enjoy during sunny afternoons?",
    "a": "They can play games, fly kites, climb on playground equipment, and watch birds."
  },
  {
    "q": "How do park activities support health?",
    "a": "They help people exercise, reduce stress, stay healthy, and gain more energy."
  },
  {
    "q": "What food and items does the family bring for a picnic?",
    "a": "They bring delicious food, cold drinks, fruits, and a large blanket."
  },
  {
    "q": "What does the family do after lunch?",
    "a": "They walk around the lake and enjoy the beautiful flowers together."
  },
  {
    "q": "What does the family do before going home?",
    "a": "They clean the area carefully and throw all trash into the bins properly."
  }
];

