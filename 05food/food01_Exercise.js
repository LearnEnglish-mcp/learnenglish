// ===== food01 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. It is a _____ choice for busy people who want tasty food without spending too much money.",
    "a": "good"
  },
  {
    "q": "2. They _____ at the menu, choose their favorite food, and order it from the seller.",
    "a": "look"
  },
  {
    "q": "3. They _____ buy drinks or desserts with their food to make the meal complete.",
    "a": "often"
  },
  {
    "q": "4. I _____ buy this meal from a friendly street food seller near my school.",
    "a": "usually"
  },
  {
    "q": "5. The _____ cooks the chicken over hot charcoal and serves it with fresh salad.",
    "a": "seller"
  },
  {
    "q": "6. It _____ makes me happy, and I never get tired of its great taste.",
    "a": "always"
  },
  {
    "q": "7. _____ street foods include sandwiches, noodles, grilled meat, fried rice, and fresh fruit during a typical street food visit in the city.",
    "a": "popular"
  },
  {
    "q": "8. Many _____ buy street food on their way to work, school, or home during a typical street food visit in the city.",
    "a": "people"
  },
  {
    "q": "9. People _____ food stalls when they feel hungry or want a quick meal during a typical street food visit in the city.",
    "a": "visit"
  },
  {
    "q": "10. I like _____ it because it has a wonderful smell and rich flavor during a typical street food visit in the city.",
    "a": "eating"
  },
  {
    "q": "11. People _____ eating quick, tasty meals from small food stalls or carts during a typical street food visit in the city.",
    "a": "enjoy"
  },
  {
    "q": "12. These _____ are usually cheap and easy to find in busy places during a typical street food visit in the city.",
    "a": "foods"
  },
  {
    "q": "13. _____ usually wait only a few minutes before receiving their meals during a typical street food visit in the city.",
    "a": "customers"
  },
  {
    "q": "14. I enjoy eating this _____ food with my family or friends during a typical street food visit in the city.",
    "a": "street"
  },
  {
    "q": "15. Street _____ is popular in many countries around the world during a typical street food visit in the city.",
    "a": "food"
  },
  {
    "q": "16. It _____ people together and lets visitors enjoy traditional flavors during a typical street food visit in the city.",
    "a": "brings"
  },
  {
    "q": "17. Many _____ like trying different street foods wherever they go during a typical street food visit in the city.",
    "a": "travelers"
  },
  {
    "q": "18. _____ customers pay with cash or a mobile payment app during a typical street food visit in the city.",
    "a": "most"
  },
  {
    "q": "19. The seller _____ the food carefully and serves it fresh during a typical street food visit in the city.",
    "a": "prepares"
  },
  {
    "q": "20. Street food _____ cook meals in front of customers during a typical street food visit in the city.",
    "a": "sellers"
  }
];

const newEx2Data = [
  {
    "q": "1. What is the Vietnamese meaning of “popular”?",
    "opts": [
      "phổ biến",
      "thích; tận hưởng",
      "xe đẩy bán hàng",
      "chiên; rán"
    ],
    "a": "phổ biến"
  },
  {
    "q": "2. What is the Vietnamese meaning of “around”?",
    "opts": [
      "bữa ăn",
      "xung quanh; quanh",
      "mì",
      "trái cây"
    ],
    "a": "xung quanh; quanh"
  },
  {
    "q": "3. What is the Vietnamese meaning of “eating”?",
    "opts": [
      "thức ăn",
      "cơm; gạo",
      "việc ăn",
      "phát hiện; tìm thấy"
    ],
    "a": "việc ăn"
  },
  {
    "q": "4. What is the Vietnamese meaning of “small”?",
    "opts": [
      "nướng",
      "thường",
      "nấu ăn",
      "nhỏ"
    ],
    "a": "nhỏ"
  },
  {
    "q": "5. What is the Vietnamese meaning of “meat”?",
    "opts": [
      "thịt",
      "rẻ",
      "phía trước",
      "cách"
    ],
    "a": "thịt"
  },
  {
    "q": "6. What is the Vietnamese meaning of “busy”?",
    "opts": [
      "ngon",
      "nhộn nhịp",
      "nơi sinh sống; nhà",
      "quan trọng"
    ],
    "a": "nhộn nhịp"
  },
  {
    "q": "7. What is the Vietnamese meaning of “can”?",
    "opts": [
      "phần",
      "truyền thống",
      "có thể",
      "mua"
    ],
    "a": "có thể"
  },
  {
    "q": "8. What is the Vietnamese meaning of “flavors”?",
    "opts": [
      "đơn giản",
      "bữa ăn",
      "hầu hết",
      "các hương vị"
    ],
    "a": "các hương vị"
  },
  {
    "q": "9. What is the Vietnamese meaning of “seller”?",
    "opts": [
      "người bán hàng",
      "chuẩn bị",
      "thường xuyên",
      "có giá phải chăng"
    ],
    "a": "người bán hàng"
  },
  {
    "q": "10. What is the Vietnamese meaning of “convenient”?",
    "opts": [
      "tiền",
      "thuận tiện",
      "no bụng",
      "gần"
    ],
    "a": "thuận tiện"
  },
  {
    "q": "11. Where do people often buy street food?",
    "opts": [
      "Only inside offices",
      "Only in hospitals",
      "At small food stalls or carts",
      "At sports stadiums only"
    ],
    "a": "At small food stalls or carts"
  },
  {
    "q": "12. What do popular street foods in the lesson include?",
    "opts": [
      "Only raw vegetables",
      "Only cakes and ice cream",
      "Only soup and bread",
      "Sandwiches, noodles, grilled meat, fried rice, and fresh fruit"
    ],
    "a": "Sandwiches, noodles, grilled meat, fried rice, and fresh fruit"
  },
  {
    "q": "13. Why is street food easy for busy people to buy?",
    "opts": [
      "It is usually cheap and easy to find",
      "It is available only once a year",
      "It requires a long reservation",
      "It is served only at home"
    ],
    "a": "It is usually cheap and easy to find"
  },
  {
    "q": "14. What can people do while eating street food?",
    "opts": [
      "Drive a train",
      "Walk or sit nearby",
      "Swim in a pool",
      "Attend a formal meeting"
    ],
    "a": "Walk or sit nearby"
  },
  {
    "q": "15. What does street food help visitors enjoy?",
    "opts": [
      "Traffic signs",
      "Office rules",
      "Traditional flavors",
      "School exams"
    ],
    "a": "Traditional flavors"
  },
  {
    "q": "16. What do customers usually do before ordering?",
    "opts": [
      "Buy a bus ticket",
      "Leave the stall immediately",
      "Cook the meal themselves",
      "Look at the menu and choose food"
    ],
    "a": "Look at the menu and choose food"
  },
  {
    "q": "17. How do most customers pay in the lesson?",
    "opts": [
      "With cash or a mobile payment app",
      "Only with gold coins",
      "Only by bank check",
      "Only with travel tickets"
    ],
    "a": "With cash or a mobile payment app"
  },
  {
    "q": "18. How long do customers usually wait?",
    "opts": [
      "Several days",
      "Only a few minutes",
      "A whole month",
      "More than one week"
    ],
    "a": "Only a few minutes"
  },
  {
    "q": "19. What is the writer's favorite street food?",
    "opts": [
      "A fruit dessert",
      "Fried fish with noodles",
      "Grilled chicken with rice",
      "A vegetable soup"
    ],
    "a": "Grilled chicken with rice"
  },
  {
    "q": "20. How does the writer describe the favorite meal?",
    "opts": [
      "Dry and difficult to eat",
      "Cold and tasteless",
      "Very expensive and small",
      "Warm, delicious, and filling"
    ],
    "a": "Warm, delicious, and filling"
  }
];

const newEx3Data = [
  {
    "word": "popular",
    "mean": "phổ biến"
  },
  {
    "word": "street",
    "mean": "đường phố"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "countries",
    "mean": "quốc gia"
  },
  {
    "word": "around",
    "mean": "xung quanh; quanh"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "people",
    "mean": "mọi người"
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
    "word": "quick",
    "mean": "nhanh"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "stalls",
    "mean": "quầy hàng"
  },
  {
    "word": "carts",
    "mean": "xe đẩy bán hàng"
  },
  {
    "word": "foods",
    "mean": "thức ăn"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "sandwiches",
    "mean": "bánh mì kẹp"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "grilled",
    "mean": "nướng"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "fried",
    "mean": "chiên; rán"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "cheap",
    "mean": "rẻ"
  },
  {
    "word": "easy",
    "mean": "dễ"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "places",
    "mean": "những nơi"
  },
  {
    "word": "sellers",
    "mean": "những người bán hàng"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "front",
    "mean": "phía trước"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "looks",
    "mean": "trông có vẻ"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "sitting",
    "mean": "việc ngồi; đang ngồi"
  },
  {
    "word": "nearby",
    "mean": "gần đó"
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
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "lets",
    "mean": "cho phép"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "flavors",
    "mean": "các hương vị"
  },
  {
    "word": "travelers",
    "mean": "du khách; người đi đường"
  },
  {
    "word": "trying",
    "mean": "việc thử"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "wherever",
    "mean": "bất cứ nơi đâu"
  },
  {
    "word": "go",
    "mean": "đi"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "hungry",
    "mean": "đói"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "menu",
    "mean": "thực đơn"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "order",
    "mean": "gọi; đặt"
  },
  {
    "word": "seller",
    "mean": "người bán hàng"
  },
  {
    "word": "most",
    "mean": "hầu hết"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "cash",
    "mean": "tiền mặt"
  },
  {
    "word": "mobile",
    "mean": "di động"
  },
  {
    "word": "payment",
    "mean": "thanh toán"
  },
  {
    "word": "app",
    "mean": "ứng dụng"
  },
  {
    "word": "prepares",
    "mean": "chuẩn bị"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "serves",
    "mean": "phục vụ"
  },
  {
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "receiving",
    "mean": "việc nhận"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
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
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "complete",
    "mean": "đầy đủ; hoàn chỉnh"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "affordable",
    "mean": "có giá phải chăng"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "choice",
    "mean": "sự lựa chọn"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "spending",
    "mean": "việc chi tiêu"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "chicken",
    "mean": "thịt gà; gà"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "tender",
    "mean": "mềm; mềm mọng"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "sauce",
    "mean": "nước sốt"
  },
  {
    "word": "warm",
    "mean": "ấm"
  },
  {
    "word": "filling",
    "mean": "no bụng"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "smell",
    "mean": "ngửi"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "flavor",
    "mean": "hương vị"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "near",
    "mean": "gần"
  },
  {
    "word": "cooks",
    "mean": "nấu"
  },
  {
    "word": "over",
    "mean": "trên; qua"
  },
  {
    "word": "hot",
    "mean": "nóng"
  },
  {
    "word": "charcoal",
    "mean": "than củi"
  },
  {
    "word": "salad",
    "mean": "salad; món rau trộn"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "prepared",
    "mean": "được chuẩn bị"
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
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "get",
    "mean": "có được; nhận"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "great",
    "mean": "rất lớn; tuyệt vời"
  },
  {
    "word": "taste",
    "mean": "hương vị"
  }
];

const newEx4Data = [
  {
    "word": "popular",
    "mean": "phổ biến"
  },
  {
    "word": "street",
    "mean": "đường phố"
  },
  {
    "word": "food",
    "mean": "thức ăn"
  },
  {
    "word": "countries",
    "mean": "quốc gia"
  },
  {
    "word": "around",
    "mean": "xung quanh; quanh"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "people",
    "mean": "mọi người"
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
    "word": "quick",
    "mean": "nhanh"
  },
  {
    "word": "tasty",
    "mean": "ngon"
  },
  {
    "word": "meals",
    "mean": "bữa ăn"
  },
  {
    "word": "small",
    "mean": "nhỏ"
  },
  {
    "word": "stalls",
    "mean": "quầy hàng"
  },
  {
    "word": "carts",
    "mean": "xe đẩy bán hàng"
  },
  {
    "word": "foods",
    "mean": "thức ăn"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "sandwiches",
    "mean": "bánh mì kẹp"
  },
  {
    "word": "noodles",
    "mean": "mì"
  },
  {
    "word": "grilled",
    "mean": "nướng"
  },
  {
    "word": "meat",
    "mean": "thịt"
  },
  {
    "word": "fried",
    "mean": "chiên; rán"
  },
  {
    "word": "rice",
    "mean": "cơm; gạo"
  },
  {
    "word": "and",
    "mean": "và"
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
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "cheap",
    "mean": "rẻ"
  },
  {
    "word": "easy",
    "mean": "dễ"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "busy",
    "mean": "nhộn nhịp"
  },
  {
    "word": "places",
    "mean": "những nơi"
  },
  {
    "word": "sellers",
    "mean": "những người bán hàng"
  },
  {
    "word": "cook",
    "mean": "nấu ăn"
  },
  {
    "word": "front",
    "mean": "phía trước"
  },
  {
    "word": "customers",
    "mean": "khách hàng"
  },
  {
    "word": "smells",
    "mean": "có mùi; ngửi"
  },
  {
    "word": "delicious",
    "mean": "ngon"
  },
  {
    "word": "looks",
    "mean": "trông có vẻ"
  },
  {
    "word": "colorful",
    "mean": "đầy màu sắc"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "way",
    "mean": "cách"
  },
  {
    "word": "work",
    "mean": "hoạt động; làm việc"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "while",
    "mean": "trong khi"
  },
  {
    "word": "walking",
    "mean": "việc đi bộ"
  },
  {
    "word": "sitting",
    "mean": "việc ngồi; đang ngồi"
  },
  {
    "word": "nearby",
    "mean": "gần đó"
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
    "word": "local",
    "mean": "địa phương"
  },
  {
    "word": "culture",
    "mean": "văn hóa"
  },
  {
    "word": "brings",
    "mean": "mang lại"
  },
  {
    "word": "together",
    "mean": "cùng nhau"
  },
  {
    "word": "lets",
    "mean": "cho phép"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "traditional",
    "mean": "truyền thống"
  },
  {
    "word": "flavors",
    "mean": "các hương vị"
  },
  {
    "word": "travelers",
    "mean": "du khách; người đi đường"
  },
  {
    "word": "trying",
    "mean": "việc thử"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "wherever",
    "mean": "bất cứ nơi đâu"
  },
  {
    "word": "go",
    "mean": "đi"
  },
  {
    "word": "buying",
    "mean": "mua"
  },
  {
    "word": "simple",
    "mean": "đơn giản"
  },
  {
    "word": "enjoyable",
    "mean": "thú vị; dễ chịu"
  },
  {
    "word": "visit",
    "mean": "thăm"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "hungry",
    "mean": "đói"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "meal",
    "mean": "bữa ăn"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "menu",
    "mean": "thực đơn"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "favorite",
    "mean": "yêu thích"
  },
  {
    "word": "order",
    "mean": "gọi; đặt"
  },
  {
    "word": "seller",
    "mean": "người bán hàng"
  },
  {
    "word": "most",
    "mean": "hầu hết"
  },
  {
    "word": "pay",
    "mean": "thanh toán"
  },
  {
    "word": "cash",
    "mean": "tiền mặt"
  },
  {
    "word": "mobile",
    "mean": "di động"
  },
  {
    "word": "payment",
    "mean": "thanh toán"
  },
  {
    "word": "app",
    "mean": "ứng dụng"
  },
  {
    "word": "prepares",
    "mean": "chuẩn bị"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "serves",
    "mean": "phục vụ"
  },
  {
    "word": "wait",
    "mean": "chờ"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "minutes",
    "mean": "phút"
  },
  {
    "word": "receiving",
    "mean": "việc nhận"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
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
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "complete",
    "mean": "đầy đủ; hoàn chỉnh"
  },
  {
    "word": "fast",
    "mean": "nhanh"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "affordable",
    "mean": "có giá phải chăng"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "choice",
    "mean": "sự lựa chọn"
  },
  {
    "word": "without",
    "mean": "không có; mà không"
  },
  {
    "word": "spending",
    "mean": "việc chi tiêu"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "money",
    "mean": "tiền"
  },
  {
    "word": "chicken",
    "mean": "thịt gà; gà"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "tender",
    "mean": "mềm; mềm mọng"
  },
  {
    "word": "vegetables",
    "mean": "rau củ"
  },
  {
    "word": "sauce",
    "mean": "nước sốt"
  },
  {
    "word": "warm",
    "mean": "ấm"
  },
  {
    "word": "filling",
    "mean": "no bụng"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "wonderful",
    "mean": "tuyệt vời"
  },
  {
    "word": "smell",
    "mean": "ngửi"
  },
  {
    "word": "rich",
    "mean": "phong phú"
  },
  {
    "word": "flavor",
    "mean": "hương vị"
  },
  {
    "word": "friendly",
    "mean": "thân thiện"
  },
  {
    "word": "near",
    "mean": "gần"
  },
  {
    "word": "cooks",
    "mean": "nấu"
  },
  {
    "word": "over",
    "mean": "trên; qua"
  },
  {
    "word": "hot",
    "mean": "nóng"
  },
  {
    "word": "charcoal",
    "mean": "than củi"
  },
  {
    "word": "salad",
    "mean": "salad; món rau trộn"
  },
  {
    "word": "clean",
    "mean": "sạch"
  },
  {
    "word": "prepared",
    "mean": "được chuẩn bị"
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
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "happy",
    "mean": "vui vẻ"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "get",
    "mean": "có được; nhận"
  },
  {
    "word": "tired",
    "mean": "mệt"
  },
  {
    "word": "great",
    "mean": "rất lớn; tuyệt vời"
  },
  {
    "word": "taste",
    "mean": "hương vị"
  }
];

const newEx5Data = [
  "Street food is popular in many countries around the world.",
  "People enjoy eating quick, tasty meals from small food stalls or carts.",
  "Popular street foods include sandwiches, noodles, grilled meat, fried rice, and fresh fruit.",
  "These foods are usually cheap and easy to find in busy places.",
  "Street food sellers cook meals in front of customers.",
  "The food smells delicious and looks colorful.",
  "Many people buy street food on their way to work, school, or home.",
  "They can eat while walking or sitting nearby.",
  "Street food is an important part of local culture.",
  "It brings people together and lets visitors enjoy traditional flavors."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "The food smells delicious and looks colorful."
  },
  {
    "id": 2,
    "correct": "Buying street food is simple and enjoyable."
  },
  {
    "id": 3,
    "correct": "The food is warm, delicious, and filling."
  },
  {
    "id": 4,
    "correct": "They can eat while walking or sitting nearby."
  },
  {
    "id": 5,
    "correct": "Buying street food is fast, convenient, and affordable."
  },
  {
    "id": 6,
    "correct": "Everything is clean and carefully prepared every day."
  },
  {
    "id": 7,
    "correct": "Street food sellers cook meals in front of customers."
  },
  {
    "id": 8,
    "correct": "Street food is an important part of local culture."
  },
  {
    "id": 9,
    "correct": "My favorite street food is grilled chicken with rice."
  },
  {
    "id": 10,
    "correct": "It has tender meat, fresh vegetables, and tasty sauce."
  },
  {
    "id": 11,
    "correct": "Street food is popular in many countries around the world."
  },
  {
    "id": 12,
    "correct": "It brings people together and lets visitors enjoy traditional flavors."
  },
  {
    "id": 13,
    "correct": "Many travelers like trying different street foods wherever they go."
  },
  {
    "id": 14,
    "correct": "Most customers pay with cash or a mobile payment app."
  },
  {
    "id": 15,
    "correct": "The seller prepares the food carefully and serves it fresh."
  }
];

const newEx7Data = [
  {
    "q": "Why is street food popular in many countries?",
    "a": "It is quick, tasty, usually cheap, and easy to find in busy places."
  },
  {
    "q": "What kinds of food are listed as popular street foods?",
    "a": "The lesson lists sandwiches, noodles, grilled meat, fried rice, and fresh fruit."
  },
  {
    "q": "Where do street food sellers cook meals?",
    "a": "They cook meals in front of customers."
  },
  {
    "q": "How can people eat street food when they are busy?",
    "a": "They can eat while walking or sitting nearby."
  },
  {
    "q": "How does street food connect with local culture?",
    "a": "It lets visitors enjoy traditional flavors and brings people together."
  },
  {
    "q": "What do people do when they visit food stalls?",
    "a": "They look at the menu, choose their favorite food, and order it from the seller."
  },
  {
    "q": "How can customers pay for street food?",
    "a": "They can pay with cash or a mobile payment app."
  },
  {
    "q": "Why is buying street food convenient?",
    "a": "Customers usually wait only a few minutes and can get a quick meal."
  },
  {
    "q": "What ingredients are in the writer's favorite street food?",
    "a": "It has grilled chicken with rice, tender meat, fresh vegetables, and tasty sauce."
  },
  {
    "q": "Why does the writer enjoy the favorite street food?",
    "a": "It has a wonderful smell, rich flavor, and great taste."
  }
];
