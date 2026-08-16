// ===== environment02 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. Water pollution occurs when waste, chemicals, oil, or plastic enter rivers, lakes, and _____.",
    "a": "oceans"
  },
  {
    "q": "2. It can also make people sick when they drink or use unsafe _____. for a safer and healthier environment every day",
    "a": "water"
  },
  {
    "q": "3. Plastic waste often reaches rivers and oceans, where animals may eat it or become _____.",
    "a": "trapped"
  },
  {
    "q": "4. When individuals, shops, and governments cooperate, we can keep the environment cleaner and protect wildlife from plastic _____.",
    "a": "pollution"
  },
  {
    "q": "5. Recycling means turning used materials into new products instead of throwing them _____. for a safer and healthier environment every day",
    "a": "away"
  },
  {
    "q": "6. Recycling also saves energy and reduces the amount of rubbish sent to _____. for a safer and healthier environment every day",
    "a": "landfills"
  },
  {
    "q": "7. Good recycling habits can make homes, schools, and communities cleaner and more _____. for a safer and healthier environment every day",
    "a": "responsible"
  },
  {
    "q": "8. Dirty water can come from factories, farms, homes, and careless littering. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "9. It is a problem in many parts of the world. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "10. Polluted water harms fish, birds, plants, and other living things. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "11. Clean water is necessary for cooking, washing, farming, and daily life. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "12. We should never throw rubbish into drains, rivers, or beaches. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "13. People can use fewer chemicals and recycle waste properly. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "14. Governments and companies must treat dirty water before releasing it. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "15. Protecting water means protecting life, health, and the future of our _____. This environmental idea is important for people and communities every day.",
    "a": "communities"
  },
  {
    "q": "16. Plastic is useful, but too much plastic waste causes environmental problems. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "17. Many plastic bags, bottles, cups, and straws are used only once. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "18. They may remain in nature for hundreds of years. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "19. Burning plastic can create harmful smoke. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  },
  {
    "q": "20. Streets and parks look dirty when people leave plastic rubbish everywhere. This environmental idea is important for people and _____ every day.",
    "a": "communities"
  }
];

const newEx2Data = [
  {
    "q": "1. Complete the sentence: _____ pollution occurs when waste, chemicals, oil, or plastic enter rivers, lakes, and oceans.",
    "opts": [
      "water",
      "pollution",
      "clean",
      "occurs"
    ],
    "a": "water"
  },
  {
    "q": "2. Complete the sentence: _____ water can come from factories, farms, homes, and careless littering.",
    "opts": [
      "water",
      "pollution",
      "clean",
      "dirty"
    ],
    "a": "dirty"
  },
  {
    "q": "3. Complete the sentence: It is a _____ in many parts of the world.",
    "opts": [
      "pollution",
      "clean",
      "problem",
      "water"
    ],
    "a": "problem"
  },
  {
    "q": "4. Complete the sentence: _____ water harms fish, birds, plants, and other living things.",
    "opts": [
      "clean",
      "polluted",
      "water",
      "pollution"
    ],
    "a": "polluted"
  },
  {
    "q": "5. Complete the sentence: It can also make _____ sick when they drink or use unsafe water.",
    "opts": [
      "people",
      "water",
      "pollution",
      "clean"
    ],
    "a": "people"
  },
  {
    "q": "6. Complete the sentence: _____ water is necessary for cooking, washing, farming, and daily life.",
    "opts": [
      "water",
      "pollution",
      "occurs",
      "clean"
    ],
    "a": "clean"
  },
  {
    "q": "7. Complete the sentence: We _____ never throw rubbish into drains, rivers, or beaches.",
    "opts": [
      "pollution",
      "clean",
      "should",
      "water"
    ],
    "a": "should"
  },
  {
    "q": "8. Complete the sentence: _____ can use fewer chemicals and recycle waste properly.",
    "opts": [
      "clean",
      "people",
      "water",
      "pollution"
    ],
    "a": "people"
  },
  {
    "q": "9. Complete the sentence: _____ and companies must treat dirty water before releasing it.",
    "opts": [
      "governments",
      "water",
      "pollution",
      "clean"
    ],
    "a": "governments"
  },
  {
    "q": "10. Complete the sentence: _____ water means protecting life, health, and the future of our communities.",
    "opts": [
      "water",
      "pollution",
      "clean",
      "protecting"
    ],
    "a": "protecting"
  },
  {
    "q": "11. Complete the sentence: _____ is useful, but too much plastic waste causes environmental problems.",
    "opts": [
      "pollution",
      "clean",
      "plastic",
      "water"
    ],
    "a": "plastic"
  },
  {
    "q": "12. Complete the sentence: Many _____ bags, bottles, cups, and straws are used only once.",
    "opts": [
      "clean",
      "plastic",
      "water",
      "pollution"
    ],
    "a": "plastic"
  },
  {
    "q": "13. Complete the sentence: They may _____ in nature for hundreds of years.",
    "opts": [
      "remain",
      "water",
      "pollution",
      "clean"
    ],
    "a": "remain"
  },
  {
    "q": "14. Complete the sentence: _____ waste often reaches rivers and oceans, where animals may eat it or become trapped.",
    "opts": [
      "water",
      "pollution",
      "clean",
      "plastic"
    ],
    "a": "plastic"
  },
  {
    "q": "15. Complete the sentence: _____ plastic can create harmful smoke.",
    "opts": [
      "pollution",
      "clean",
      "burning",
      "water"
    ],
    "a": "burning"
  },
  {
    "q": "16. Complete the sentence: _____ and parks look dirty when people leave plastic rubbish everywhere.",
    "opts": [
      "clean",
      "streets",
      "water",
      "pollution"
    ],
    "a": "streets"
  },
  {
    "q": "17. Complete the sentence: We can _____ plastic waste by carrying reusable bags, bottles, and containers.",
    "opts": [
      "reduce",
      "water",
      "pollution",
      "clean"
    ],
    "a": "reduce"
  },
  {
    "q": "18. Complete the sentence: We _____ refuse unnecessary plastic items and choose products with less packaging.",
    "opts": [
      "water",
      "pollution",
      "clean",
      "should"
    ],
    "a": "should"
  },
  {
    "q": "19. Complete the sentence: _____ and recycling are important.",
    "opts": [
      "pollution",
      "clean",
      "reusing",
      "water"
    ],
    "a": "reusing"
  },
  {
    "q": "20. Complete the sentence: When _____, shops, and governments cooperate, we can keep the environment cleaner and protect wildlife from plastic pollution.",
    "opts": [
      "clean",
      "individuals",
      "water",
      "pollution"
    ],
    "a": "individuals"
  }
];

const newEx3Data = [
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "clean",
    "mean": "sạch; làm sạch"
  },
  {
    "word": "occurs",
    "mean": "xảy ra"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "chemicals",
    "mean": "hóa chất"
  },
  {
    "word": "oil",
    "mean": "dầu"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "plastic",
    "mean": "nhựa"
  },
  {
    "word": "enter",
    "mean": "đi vào; xâm nhập"
  },
  {
    "word": "rivers",
    "mean": "sông"
  },
  {
    "word": "lakes",
    "mean": "hồ"
  },
  {
    "word": "oceans",
    "mean": "đại dương"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "factories",
    "mean": "nhà máy"
  },
  {
    "word": "farms",
    "mean": "các nông trại"
  },
  {
    "word": "homes",
    "mean": "nơi ở; môi trường sống"
  },
  {
    "word": "careless",
    "mean": "bất cẩn"
  },
  {
    "word": "littering",
    "mean": "việc xả rác"
  },
  {
    "word": "problem",
    "mean": "vấn đề"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "parts",
    "mean": "phần"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "polluted",
    "mean": "bị ô nhiễm"
  },
  {
    "word": "harms",
    "mean": "gây hại"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "plants",
    "mean": "cây"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "living",
    "mean": "sống; thuộc sinh vật"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "sick",
    "mean": "ốm; bị bệnh"
  },
  {
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "unsafe",
    "mean": "không an toàn"
  },
  {
    "word": "necessary",
    "mean": "cần thiết"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "washing",
    "mean": "việc rửa"
  },
  {
    "word": "farming",
    "mean": "nông nghiệp"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "rubbish",
    "mean": "rác"
  },
  {
    "word": "drains",
    "mean": "cống thoát nước"
  },
  {
    "word": "beaches",
    "mean": "bãi biển"
  },
  {
    "word": "fewer",
    "mean": "ít hơn"
  },
  {
    "word": "recycle",
    "mean": "tái chế"
  },
  {
    "word": "properly",
    "mean": "đúng cách"
  },
  {
    "word": "governments",
    "mean": "chính phủ"
  },
  {
    "word": "companies",
    "mean": "các công ty"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "treat",
    "mean": "đối xử"
  },
  {
    "word": "releasing",
    "mean": "xả ra"
  },
  {
    "word": "protecting",
    "mean": "đang bảo vệ"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "communities",
    "mean": "cộng đồng"
  },
  {
    "word": "reducing",
    "mean": "giảm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "causes",
    "mean": "gây ra"
  },
  {
    "word": "environmental",
    "mean": "thuộc môi trường"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
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
    "word": "cups",
    "mean": "cốc"
  },
  {
    "word": "straws",
    "mean": "ống hút"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "once",
    "mean": "một lần; cùng lúc"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "remain",
    "mean": "vẫn; duy trì"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "hundreds",
    "mean": "hàng trăm"
  },
  {
    "word": "years",
    "mean": "năm"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "reaches",
    "mean": "đến; chạm tới"
  },
  {
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "trapped",
    "mean": "bị mắc kẹt"
  },
  {
    "word": "burning",
    "mean": "đốt"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "harmful",
    "mean": "có hại"
  },
  {
    "word": "smoke",
    "mean": "khói"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "leave",
    "mean": "rời đi"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "carrying",
    "mean": "việc mang; đang mang"
  },
  {
    "word": "reusable",
    "mean": "có thể tái sử dụng"
  },
  {
    "word": "containers",
    "mean": "đồ chứa; hộp đựng"
  },
  {
    "word": "refuse",
    "mean": "từ chối"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "items",
    "mean": "vật dụng"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "packaging",
    "mean": "bao bì"
  },
  {
    "word": "reusing",
    "mean": "tái sử dụng"
  },
  {
    "word": "recycling",
    "mean": "việc tái chế"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "individuals",
    "mean": "các cá nhân"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "cooperate",
    "mean": "hợp tác"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "environment",
    "mean": "môi trường"
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
    "word": "wildlife",
    "mean": "động vật hoang dã"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "turning",
    "mean": "biến; chuyển"
  },
  {
    "word": "materials",
    "mean": "vật liệu"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "throwing",
    "mean": "vứt"
  },
  {
    "word": "away",
    "mean": "ra xa; đi"
  },
  {
    "word": "common",
    "mean": "phổ biến; thông thường"
  },
  {
    "word": "recyclable",
    "mean": "có thể tái chế"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "paper",
    "mean": "giấy"
  },
  {
    "word": "glass",
    "mean": "thủy tinh"
  },
  {
    "word": "metal",
    "mean": "kim loại"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "types",
    "mean": "các loại"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
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
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "separate",
    "mean": "riêng biệt"
  },
  {
    "word": "bins",
    "mean": "thùng rác"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "collect",
    "mean": "thu nhận; thu thập"
  },
  {
    "word": "cans",
    "mean": "lon"
  },
  {
    "word": "placed",
    "mean": "nơi; đặt"
  },
  {
    "word": "correct",
    "mean": "sửa; chỉnh"
  },
  {
    "word": "container",
    "mean": "thùng; hộp đựng"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "amount",
    "mean": "lượng"
  },
  {
    "word": "sent",
    "mean": "được đưa; được gửi"
  },
  {
    "word": "landfills",
    "mean": "bãi chôn lấp"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "times",
    "mean": "những lúc; thời điểm"
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
    "word": "schools",
    "mean": "trường học"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  }
];

const newEx4Data = [
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "pollution",
    "mean": "ô nhiễm"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "clean",
    "mean": "sạch; làm sạch"
  },
  {
    "word": "occurs",
    "mean": "xảy ra"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "waste",
    "mean": "chất thải"
  },
  {
    "word": "chemicals",
    "mean": "hóa chất"
  },
  {
    "word": "oil",
    "mean": "dầu"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "plastic",
    "mean": "nhựa"
  },
  {
    "word": "enter",
    "mean": "đi vào; xâm nhập"
  },
  {
    "word": "rivers",
    "mean": "sông"
  },
  {
    "word": "lakes",
    "mean": "hồ"
  },
  {
    "word": "oceans",
    "mean": "đại dương"
  },
  {
    "word": "dirty",
    "mean": "bẩn"
  },
  {
    "word": "can",
    "mean": "có thể"
  },
  {
    "word": "come",
    "mean": "đến"
  },
  {
    "word": "factories",
    "mean": "nhà máy"
  },
  {
    "word": "farms",
    "mean": "các nông trại"
  },
  {
    "word": "homes",
    "mean": "nơi ở; môi trường sống"
  },
  {
    "word": "careless",
    "mean": "bất cẩn"
  },
  {
    "word": "littering",
    "mean": "việc xả rác"
  },
  {
    "word": "problem",
    "mean": "vấn đề"
  },
  {
    "word": "many",
    "mean": "nhiều"
  },
  {
    "word": "parts",
    "mean": "phần"
  },
  {
    "word": "world",
    "mean": "thế giới"
  },
  {
    "word": "polluted",
    "mean": "bị ô nhiễm"
  },
  {
    "word": "harms",
    "mean": "gây hại"
  },
  {
    "word": "fish",
    "mean": "cá"
  },
  {
    "word": "birds",
    "mean": "chim"
  },
  {
    "word": "plants",
    "mean": "cây"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "living",
    "mean": "sống; thuộc sinh vật"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "make",
    "mean": "làm cho"
  },
  {
    "word": "people",
    "mean": "mọi người"
  },
  {
    "word": "sick",
    "mean": "ốm; bị bệnh"
  },
  {
    "word": "drink",
    "mean": "uống"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "unsafe",
    "mean": "không an toàn"
  },
  {
    "word": "necessary",
    "mean": "cần thiết"
  },
  {
    "word": "cooking",
    "mean": "việc nấu ăn"
  },
  {
    "word": "washing",
    "mean": "việc rửa"
  },
  {
    "word": "farming",
    "mean": "nông nghiệp"
  },
  {
    "word": "daily",
    "mean": "hằng ngày"
  },
  {
    "word": "life",
    "mean": "cuộc sống"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "never",
    "mean": "không bao giờ"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "rubbish",
    "mean": "rác"
  },
  {
    "word": "drains",
    "mean": "cống thoát nước"
  },
  {
    "word": "beaches",
    "mean": "bãi biển"
  },
  {
    "word": "fewer",
    "mean": "ít hơn"
  },
  {
    "word": "recycle",
    "mean": "tái chế"
  },
  {
    "word": "properly",
    "mean": "đúng cách"
  },
  {
    "word": "governments",
    "mean": "chính phủ"
  },
  {
    "word": "companies",
    "mean": "các công ty"
  },
  {
    "word": "must",
    "mean": "phải"
  },
  {
    "word": "treat",
    "mean": "đối xử"
  },
  {
    "word": "releasing",
    "mean": "xả ra"
  },
  {
    "word": "protecting",
    "mean": "đang bảo vệ"
  },
  {
    "word": "means",
    "mean": "có nghĩa là"
  },
  {
    "word": "health",
    "mean": "sức khỏe"
  },
  {
    "word": "future",
    "mean": "tương lai"
  },
  {
    "word": "communities",
    "mean": "cộng đồng"
  },
  {
    "word": "reducing",
    "mean": "giảm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "but",
    "mean": "nhưng"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "much",
    "mean": "nhiều; rất"
  },
  {
    "word": "causes",
    "mean": "gây ra"
  },
  {
    "word": "environmental",
    "mean": "thuộc môi trường"
  },
  {
    "word": "problems",
    "mean": "vấn đề"
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
    "word": "cups",
    "mean": "cốc"
  },
  {
    "word": "straws",
    "mean": "ống hút"
  },
  {
    "word": "used",
    "mean": "được sử dụng"
  },
  {
    "word": "only",
    "mean": "chỉ"
  },
  {
    "word": "once",
    "mean": "một lần; cùng lúc"
  },
  {
    "word": "may",
    "mean": "có thể"
  },
  {
    "word": "remain",
    "mean": "vẫn; duy trì"
  },
  {
    "word": "nature",
    "mean": "thiên nhiên"
  },
  {
    "word": "hundreds",
    "mean": "hàng trăm"
  },
  {
    "word": "years",
    "mean": "năm"
  },
  {
    "word": "often",
    "mean": "thường xuyên"
  },
  {
    "word": "reaches",
    "mean": "đến; chạm tới"
  },
  {
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "animals",
    "mean": "động vật"
  },
  {
    "word": "eat",
    "mean": "ăn"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "trapped",
    "mean": "bị mắc kẹt"
  },
  {
    "word": "burning",
    "mean": "đốt"
  },
  {
    "word": "create",
    "mean": "tạo ra"
  },
  {
    "word": "harmful",
    "mean": "có hại"
  },
  {
    "word": "smoke",
    "mean": "khói"
  },
  {
    "word": "streets",
    "mean": "các con phố"
  },
  {
    "word": "parks",
    "mean": "công viên"
  },
  {
    "word": "look",
    "mean": "nhìn"
  },
  {
    "word": "leave",
    "mean": "rời đi"
  },
  {
    "word": "everywhere",
    "mean": "khắp mọi nơi"
  },
  {
    "word": "reduce",
    "mean": "giảm"
  },
  {
    "word": "carrying",
    "mean": "việc mang; đang mang"
  },
  {
    "word": "reusable",
    "mean": "có thể tái sử dụng"
  },
  {
    "word": "containers",
    "mean": "đồ chứa; hộp đựng"
  },
  {
    "word": "refuse",
    "mean": "từ chối"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "items",
    "mean": "vật dụng"
  },
  {
    "word": "choose",
    "mean": "chọn"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "less",
    "mean": "ít hơn"
  },
  {
    "word": "packaging",
    "mean": "bao bì"
  },
  {
    "word": "reusing",
    "mean": "tái sử dụng"
  },
  {
    "word": "recycling",
    "mean": "việc tái chế"
  },
  {
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "individuals",
    "mean": "các cá nhân"
  },
  {
    "word": "shops",
    "mean": "cửa hàng"
  },
  {
    "word": "cooperate",
    "mean": "hợp tác"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "environment",
    "mean": "môi trường"
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
    "word": "wildlife",
    "mean": "động vật hoang dã"
  },
  {
    "word": "home",
    "mean": "nơi sinh sống; nhà"
  },
  {
    "word": "school",
    "mean": "trường học"
  },
  {
    "word": "turning",
    "mean": "biến; chuyển"
  },
  {
    "word": "materials",
    "mean": "vật liệu"
  },
  {
    "word": "new",
    "mean": "mới"
  },
  {
    "word": "instead",
    "mean": "thay vì"
  },
  {
    "word": "throwing",
    "mean": "vứt"
  },
  {
    "word": "away",
    "mean": "ra xa; đi"
  },
  {
    "word": "common",
    "mean": "phổ biến; thông thường"
  },
  {
    "word": "recyclable",
    "mean": "có thể tái chế"
  },
  {
    "word": "include",
    "mean": "bao gồm"
  },
  {
    "word": "paper",
    "mean": "giấy"
  },
  {
    "word": "glass",
    "mean": "thủy tinh"
  },
  {
    "word": "metal",
    "mean": "kim loại"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "types",
    "mean": "các loại"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "save",
    "mean": "cứu; bảo vệ"
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
    "word": "families",
    "mean": "gia đình"
  },
  {
    "word": "prepare",
    "mean": "chuẩn bị"
  },
  {
    "word": "separate",
    "mean": "riêng biệt"
  },
  {
    "word": "bins",
    "mean": "thùng rác"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "students",
    "mean": "học sinh; sinh viên"
  },
  {
    "word": "collect",
    "mean": "thu nhận; thu thập"
  },
  {
    "word": "cans",
    "mean": "lon"
  },
  {
    "word": "placed",
    "mean": "nơi; đặt"
  },
  {
    "word": "correct",
    "mean": "sửa; chỉnh"
  },
  {
    "word": "container",
    "mean": "thùng; hộp đựng"
  },
  {
    "word": "saves",
    "mean": "tiết kiệm"
  },
  {
    "word": "energy",
    "mean": "năng lượng"
  },
  {
    "word": "reduces",
    "mean": "giảm"
  },
  {
    "word": "amount",
    "mean": "lượng"
  },
  {
    "word": "sent",
    "mean": "được đưa; được gửi"
  },
  {
    "word": "landfills",
    "mean": "bãi chôn lấp"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "even",
    "mean": "thậm chí"
  },
  {
    "word": "better",
    "mean": "tốt hơn"
  },
  {
    "word": "choices",
    "mean": "những lựa chọn"
  },
  {
    "word": "buy",
    "mean": "mua"
  },
  {
    "word": "what",
    "mean": "gì; điều gì"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "times",
    "mean": "những lúc; thời điểm"
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
    "word": "schools",
    "mean": "trường học"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "responsible",
    "mean": "có trách nhiệm"
  }
];

const newEx5Data = [
  "Water pollution occurs when waste, chemicals, oil, or plastic enter rivers, lakes, and oceans.",
  "Dirty water can come from factories, farms, homes, and careless littering.",
  "It is a problem in many parts of the world.",
  "Polluted water harms fish, birds, plants, and other living things.",
  "It can also make people sick when they drink or use unsafe water.",
  "Clean water is necessary for cooking, washing, farming, and daily life.",
  "We should never throw rubbish into drains, rivers, or beaches.",
  "People can use fewer chemicals and recycle waste properly.",
  "Governments and companies must treat dirty water before releasing it.",
  "Protecting water means protecting life, health, and the future of our communities."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "Water pollution occurs when waste, chemicals, oil, or plastic enter rivers, lakes, and oceans."
  },
  {
    "id": 2,
    "correct": "Dirty water can come from factories, farms, homes, and careless littering."
  },
  {
    "id": 3,
    "correct": "It is a problem in many parts of the world."
  },
  {
    "id": 4,
    "correct": "Polluted water harms fish, birds, plants, and other living things."
  },
  {
    "id": 5,
    "correct": "It can also make people sick when they drink or use unsafe water."
  },
  {
    "id": 6,
    "correct": "Clean water is necessary for cooking, washing, farming, and daily life."
  },
  {
    "id": 7,
    "correct": "We should never throw rubbish into drains, rivers, or beaches."
  },
  {
    "id": 8,
    "correct": "People can use fewer chemicals and recycle waste properly."
  },
  {
    "id": 9,
    "correct": "Governments and companies must treat dirty water before releasing it."
  },
  {
    "id": 10,
    "correct": "Protecting water means protecting life, health, and the future of our communities."
  },
  {
    "id": 11,
    "correct": "Plastic is useful, but too much plastic waste causes environmental problems."
  },
  {
    "id": 12,
    "correct": "Many plastic bags, bottles, cups, and straws are used only once."
  },
  {
    "id": 13,
    "correct": "They may remain in nature for hundreds of years."
  },
  {
    "id": 14,
    "correct": "Plastic waste often reaches rivers and oceans, where animals may eat it or become trapped."
  },
  {
    "id": 15,
    "correct": "Burning plastic can create harmful smoke."
  }
];

const newEx7Data = [
  {
    "q": "What is one important idea explained in the reading?",
    "a": "Water pollution occurs when waste, chemicals, oil, or plastic enter rivers, lakes, and oceans."
  },
  {
    "q": "What environmental problem is mentioned in the text?",
    "a": "Dirty water can come from factories, farms, homes, and careless littering."
  },
  {
    "q": "What can people do to help according to the reading?",
    "a": "It is a problem in many parts of the world."
  },
  {
    "q": "Why is this environmental topic important?",
    "a": "Polluted water harms fish, birds, plants, and other living things."
  },
  {
    "q": "What example does the reading give?",
    "a": "It can also make people sick when they drink or use unsafe water."
  },
  {
    "q": "What can happen if the environment is not protected?",
    "a": "Clean water is necessary for cooking, washing, farming, and daily life."
  },
  {
    "q": "How can daily habits make a difference?",
    "a": "We should never throw rubbish into drains, rivers, or beaches."
  },
  {
    "q": "What does the reading say about natural resources?",
    "a": "People can use fewer chemicals and recycle waste properly."
  },
  {
    "q": "What action is suggested for communities or governments?",
    "a": "Governments and companies must treat dirty water before releasing it."
  },
  {
    "q": "What is one key message from these chapters?",
    "a": "Protecting water means protecting life, health, and the future of our communities."
  }
];

