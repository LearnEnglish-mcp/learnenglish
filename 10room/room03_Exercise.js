// ===== room03 EXERCISES =====

const newEx1Data = [
  {
    "q": "1. The guest room is located on the ground floor, near the _____, which describes everyday life in our home clearly.",
    "a": "bathroom"
  },
  {
    "q": "2. It has a comfortable bed, a wardrobe, a small table, and a _____.",
    "a": "chair"
  },
  {
    "q": "3. There are also clean blankets, pillows, and towels for _____, which describes everyday life in our home clearly.",
    "a": "visitors"
  },
  {
    "q": "4. When relatives or friends stay at our house, they sleep in this _____.",
    "a": "room"
  },
  {
    "q": "5. Before they arrive, my family cleans the room, changes the bedsheets, and prepares some drinking _____.",
    "a": "water"
  },
  {
    "q": "6. We want our guests to feel _____, which describes everyday life in our home clearly.",
    "a": "welcome"
  },
  {
    "q": "7. The guest room is usually empty, but it is still an important part of the _____.",
    "a": "house"
  },
  {
    "q": "8. A clean and comfortable guest room shows kindness and _____ to visitors, which describes everyday life in our home clearly.",
    "a": "respect"
  },
  {
    "q": "9. The laundry room is at the back of my house, near the _____.",
    "a": "kitchen"
  },
  {
    "q": "10. It contains a washing machine, some baskets, detergent, clothes hangers, and cleaning _____.",
    "a": "tools"
  },
  {
    "q": "11. There is also a window that brings fresh _____ into the room, which describes everyday life in our home clearly.",
    "a": "air"
  },
  {
    "q": "12. My family uses this room to wash and organize _____, which describes everyday life in our home clearly.",
    "a": "clothes"
  },
  {
    "q": "13. We separate white clothes from colored clothes before _____ them, which describes everyday life in our home clearly.",
    "a": "washing"
  },
  {
    "q": "14. After that, we hang the clothes outside or use a drying _____, which describes everyday life in our home clearly.",
    "a": "machine"
  },
  {
    "q": "15. The laundry room helps us keep the house _____, which describes everyday life in our home clearly.",
    "a": "organized"
  },
  {
    "q": "16. We should store cleaning products safely and keep them away from _____, which describes everyday life in our home clearly.",
    "a": "children"
  },
  {
    "q": "17. A tidy laundry room makes washing clothes easier and _____, which describes everyday life in our home clearly.",
    "a": "faster"
  },
  {
    "q": "18. The storage room is under the _____, which describes everyday life in our home clearly.",
    "a": "stairs"
  },
  {
    "q": "19. It is a small room where my family keeps things that we do not use every _____.",
    "a": "day"
  },
  {
    "q": "20. There are boxes, old books, suitcases, tools, and seasonal decorations _____, which describes everyday life in our home clearly.",
    "a": "inside"
  }
];

const newEx2Data = [
  {
    "q": "1. Complete the sentence: The guest room is located on the ground floor, near the _____.",
    "opts": [
      "bathroom",
      "bed",
      "wardrobe",
      "table"
    ],
    "a": "bathroom"
  },
  {
    "q": "2. Complete the sentence: It has a comfortable bed, a wardrobe, a small table, and a _____.",
    "opts": [
      "guest",
      "chair",
      "room",
      "ground"
    ],
    "a": "chair"
  },
  {
    "q": "3. Complete the sentence: There are also clean blankets, pillows, and towels for _____.",
    "opts": [
      "guest",
      "room",
      "visitors",
      "ground"
    ],
    "a": "visitors"
  },
  {
    "q": "4. Complete the sentence: When relatives or friends stay at our house, they sleep in this _____.",
    "opts": [
      "guest",
      "ground",
      "floor",
      "room"
    ],
    "a": "room"
  },
  {
    "q": "5. Complete the sentence: Before they arrive, my family cleans the room, changes the bedsheets, and prepares some drinking _____.",
    "opts": [
      "water",
      "guest",
      "ground",
      "floor"
    ],
    "a": "water"
  },
  {
    "q": "6. Complete the sentence: We want our guests to feel _____.",
    "opts": [
      "has",
      "welcome",
      "stay",
      "sleep"
    ],
    "a": "welcome"
  },
  {
    "q": "7. Complete the sentence: The guest room is usually empty, but it is still an important part of the _____.",
    "opts": [
      "ground",
      "floor",
      "house",
      "bathroom"
    ],
    "a": "house"
  },
  {
    "q": "8. Complete the sentence: A clean and comfortable guest room shows kindness and _____ to visitors.",
    "opts": [
      "ground",
      "floor",
      "bathroom",
      "respect"
    ],
    "a": "respect"
  },
  {
    "q": "9. Complete the sentence: The laundry room is at the back of my house, near the _____.",
    "opts": [
      "kitchen",
      "guest",
      "ground",
      "floor"
    ],
    "a": "kitchen"
  },
  {
    "q": "10. Complete the sentence: It contains a washing machine, some baskets, detergent, clothes hangers, and cleaning _____.",
    "opts": [
      "guest",
      "tools",
      "room",
      "ground"
    ],
    "a": "tools"
  },
  {
    "q": "11. Complete the sentence: There is also a window that brings fresh _____ into the room.",
    "opts": [
      "guest",
      "ground",
      "air",
      "floor"
    ],
    "a": "air"
  },
  {
    "q": "12. Complete the sentence: My family uses this room to wash and organize _____.",
    "opts": [
      "guest",
      "ground",
      "floor",
      "clothes"
    ],
    "a": "clothes"
  },
  {
    "q": "13. Complete the sentence: We separate white clothes from colored clothes before _____ them.",
    "opts": [
      "washing",
      "located",
      "comfortable",
      "small"
    ],
    "a": "washing"
  },
  {
    "q": "14. Complete the sentence: After that, we hang the clothes outside or use a drying _____.",
    "opts": [
      "guest",
      "machine",
      "room",
      "ground"
    ],
    "a": "machine"
  },
  {
    "q": "15. Complete the sentence: The laundry room helps us keep the house _____.",
    "opts": [
      "located",
      "comfortable",
      "organized",
      "small"
    ],
    "a": "organized"
  },
  {
    "q": "16. Complete the sentence: We should store cleaning products safely and keep them away from _____.",
    "opts": [
      "guest",
      "room",
      "ground",
      "children"
    ],
    "a": "children"
  },
  {
    "q": "17. Complete the sentence: A tidy laundry room makes washing clothes easier and _____.",
    "opts": [
      "faster",
      "located",
      "comfortable",
      "small"
    ],
    "a": "faster"
  },
  {
    "q": "18. Complete the sentence: The storage room is under the _____.",
    "opts": [
      "guest",
      "stairs",
      "ground",
      "floor"
    ],
    "a": "stairs"
  },
  {
    "q": "19. Complete the sentence: It is a small room where my family keeps things that we do not use every _____.",
    "opts": [
      "guest",
      "ground",
      "day",
      "floor"
    ],
    "a": "day"
  },
  {
    "q": "20. Complete the sentence: There are boxes, old books, suitcases, tools, and seasonal decorations _____.",
    "opts": [
      "also",
      "usually",
      "still",
      "inside"
    ],
    "a": "inside"
  }
];

const newEx3Data = [
  {
    "word": "guest",
    "mean": "khách"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "located",
    "mean": "nằm ở; tọa lạc"
  },
  {
    "word": "ground",
    "mean": "mặt đất; tầng trệt trong cụm ground floor"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "bathroom",
    "mean": "phòng tắm"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
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
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "chair",
    "mean": "ghế"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "clean",
    "mean": "sạch sẽ"
  },
  {
    "word": "blankets",
    "mean": "chăn"
  },
  {
    "word": "pillows",
    "mean": "gối"
  },
  {
    "word": "towels",
    "mean": "khăn tắm"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "relatives",
    "mean": "người thân; họ hàng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "cleans",
    "mean": "dọn dẹp; làm sạch"
  },
  {
    "word": "changes",
    "mean": "thay đổi"
  },
  {
    "word": "bedsheets",
    "mean": "ga trải giường"
  },
  {
    "word": "prepares",
    "mean": "chuẩn bị"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "drinking",
    "mean": "dùng để uống"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "guests",
    "mean": "khách"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "empty",
    "mean": "trống; hết"
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
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "part",
    "mean": "phần"
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
    "word": "respect",
    "mean": "sự tôn trọng"
  },
  {
    "word": "laundry",
    "mean": "việc giặt giũ; đồ giặt"
  },
  {
    "word": "back",
    "mean": "phía sau"
  },
  {
    "word": "kitchen",
    "mean": "nhà bếp"
  },
  {
    "word": "contains",
    "mean": "chứa; có"
  },
  {
    "word": "washing",
    "mean": "dùng để giặt; rửa"
  },
  {
    "word": "machine",
    "mean": "máy"
  },
  {
    "word": "baskets",
    "mean": "giỏ"
  },
  {
    "word": "detergent",
    "mean": "chất giặt tẩy"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "hangers",
    "mean": "móc treo quần áo"
  },
  {
    "word": "cleaning",
    "mean": "dùng để vệ sinh; làm sạch"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "window",
    "mean": "cửa sổ"
  },
  {
    "word": "brings",
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
    "word": "uses",
    "mean": "sử dụng"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "separate",
    "mean": "tách riêng"
  },
  {
    "word": "white",
    "mean": "màu trắng"
  },
  {
    "word": "colored",
    "mean": "có màu"
  },
  {
    "word": "hang",
    "mean": "treo; phơi"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "drying",
    "mean": "dùng để sấy; làm khô"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "organized",
    "mean": "ngăn nắp; có tổ chức"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "store",
    "mean": "cất giữ"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "away",
    "mean": "ra xa; đi"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "storage",
    "mean": "sự lưu trữ; chứa đồ"
  },
  {
    "word": "stairs",
    "mean": "cầu thang"
  },
  {
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
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
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "boxes",
    "mean": "hộp"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "suitcases",
    "mean": "va-li"
  },
  {
    "word": "seasonal",
    "mean": "theo mùa"
  },
  {
    "word": "decorations",
    "mean": "đồ trang trí"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "items",
    "mean": "vật dụng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "groups",
    "mean": "nhóm"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "labels",
    "mean": "nhãn"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "broken",
    "mean": "bị hỏng"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "objects",
    "mean": "vật phẩm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "rooms",
    "mean": "các phòng"
  },
  {
    "word": "spacious",
    "mean": "rộng rãi"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "crowded",
    "mean": "đông đúc"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "organization",
    "mean": "sự sắp xếp; tổ chức"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "garage",
    "mean": "ga-ra"
  },
  {
    "word": "left",
    "mean": "bên trái"
  },
  {
    "word": "side",
    "mean": "phía; bên"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "space",
    "mean": "không gian"
  },
  {
    "word": "car",
    "mean": "ô tô"
  },
  {
    "word": "two",
    "mean": "hai"
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
    "word": "helmets",
    "mean": "mũ bảo hiểm"
  },
  {
    "word": "equipment",
    "mean": "thiết bị; trang bị"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "out",
    "mean": "ra ngoài"
  },
  {
    "word": "going",
    "mean": "việc đi"
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
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "lock",
    "mean": "khóa"
  },
  {
    "word": "door",
    "mean": "cửa"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "rain",
    "mean": "mưa"
  },
  {
    "word": "sunlight",
    "mean": "ánh nắng"
  },
  {
    "word": "theft",
    "mean": "trộm cắp"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "bright",
    "mean": "sáng"
  },
  {
    "word": "secure",
    "mean": "an toàn; được bảo vệ"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "travelling",
    "mean": "việc đi lại"
  },
  {
    "word": "whole",
    "mean": "toàn bộ"
  }
];

const newEx4Data = [
  {
    "word": "guest",
    "mean": "khách"
  },
  {
    "word": "room",
    "mean": "phòng"
  },
  {
    "word": "located",
    "mean": "nằm ở; tọa lạc"
  },
  {
    "word": "ground",
    "mean": "mặt đất; tầng trệt trong cụm ground floor"
  },
  {
    "word": "floor",
    "mean": "sàn nhà"
  },
  {
    "word": "bathroom",
    "mean": "phòng tắm"
  },
  {
    "word": "has",
    "mean": "có"
  },
  {
    "word": "comfortable",
    "mean": "thoải mái"
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
    "word": "table",
    "mean": "bàn"
  },
  {
    "word": "and",
    "mean": "và"
  },
  {
    "word": "chair",
    "mean": "ghế"
  },
  {
    "word": "there",
    "mean": "ở đó"
  },
  {
    "word": "also",
    "mean": "cũng"
  },
  {
    "word": "clean",
    "mean": "sạch sẽ"
  },
  {
    "word": "blankets",
    "mean": "chăn"
  },
  {
    "word": "pillows",
    "mean": "gối"
  },
  {
    "word": "towels",
    "mean": "khăn tắm"
  },
  {
    "word": "visitors",
    "mean": "du khách"
  },
  {
    "word": "when",
    "mean": "khi"
  },
  {
    "word": "relatives",
    "mean": "người thân; họ hàng"
  },
  {
    "word": "or",
    "mean": "hoặc"
  },
  {
    "word": "friends",
    "mean": "bạn bè"
  },
  {
    "word": "stay",
    "mean": "giữ; ở lại"
  },
  {
    "word": "house",
    "mean": "ngôi nhà"
  },
  {
    "word": "sleep",
    "mean": "ngủ; giấc ngủ"
  },
  {
    "word": "arrive",
    "mean": "đến"
  },
  {
    "word": "family",
    "mean": "gia đình"
  },
  {
    "word": "cleans",
    "mean": "dọn dẹp; làm sạch"
  },
  {
    "word": "changes",
    "mean": "thay đổi"
  },
  {
    "word": "bedsheets",
    "mean": "ga trải giường"
  },
  {
    "word": "prepares",
    "mean": "chuẩn bị"
  },
  {
    "word": "some",
    "mean": "một số"
  },
  {
    "word": "drinking",
    "mean": "dùng để uống"
  },
  {
    "word": "water",
    "mean": "nước"
  },
  {
    "word": "want",
    "mean": "muốn"
  },
  {
    "word": "guests",
    "mean": "khách"
  },
  {
    "word": "feel",
    "mean": "cảm thấy"
  },
  {
    "word": "welcome",
    "mean": "chào đón"
  },
  {
    "word": "usually",
    "mean": "thường"
  },
  {
    "word": "empty",
    "mean": "trống; hết"
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
    "word": "important",
    "mean": "quan trọng"
  },
  {
    "word": "part",
    "mean": "phần"
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
    "word": "respect",
    "mean": "sự tôn trọng"
  },
  {
    "word": "laundry",
    "mean": "việc giặt giũ; đồ giặt"
  },
  {
    "word": "back",
    "mean": "phía sau"
  },
  {
    "word": "kitchen",
    "mean": "nhà bếp"
  },
  {
    "word": "contains",
    "mean": "chứa; có"
  },
  {
    "word": "washing",
    "mean": "dùng để giặt; rửa"
  },
  {
    "word": "machine",
    "mean": "máy"
  },
  {
    "word": "baskets",
    "mean": "giỏ"
  },
  {
    "word": "detergent",
    "mean": "chất giặt tẩy"
  },
  {
    "word": "clothes",
    "mean": "quần áo"
  },
  {
    "word": "hangers",
    "mean": "móc treo quần áo"
  },
  {
    "word": "cleaning",
    "mean": "dùng để vệ sinh; làm sạch"
  },
  {
    "word": "tools",
    "mean": "công cụ"
  },
  {
    "word": "window",
    "mean": "cửa sổ"
  },
  {
    "word": "brings",
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
    "word": "uses",
    "mean": "sử dụng"
  },
  {
    "word": "wash",
    "mean": "rửa"
  },
  {
    "word": "organize",
    "mean": "tổ chức"
  },
  {
    "word": "separate",
    "mean": "tách riêng"
  },
  {
    "word": "white",
    "mean": "màu trắng"
  },
  {
    "word": "colored",
    "mean": "có màu"
  },
  {
    "word": "hang",
    "mean": "treo; phơi"
  },
  {
    "word": "outside",
    "mean": "bên ngoài"
  },
  {
    "word": "use",
    "mean": "sử dụng"
  },
  {
    "word": "drying",
    "mean": "dùng để sấy; làm khô"
  },
  {
    "word": "helps",
    "mean": "giúp"
  },
  {
    "word": "keep",
    "mean": "giữ; duy trì"
  },
  {
    "word": "organized",
    "mean": "ngăn nắp; có tổ chức"
  },
  {
    "word": "should",
    "mean": "nên"
  },
  {
    "word": "store",
    "mean": "cất giữ"
  },
  {
    "word": "products",
    "mean": "sản phẩm"
  },
  {
    "word": "safely",
    "mean": "an toàn"
  },
  {
    "word": "away",
    "mean": "ra xa; đi"
  },
  {
    "word": "children",
    "mean": "trẻ em"
  },
  {
    "word": "tidy",
    "mean": "gọn gàng"
  },
  {
    "word": "makes",
    "mean": "làm; khiến"
  },
  {
    "word": "easier",
    "mean": "dễ hơn"
  },
  {
    "word": "faster",
    "mean": "nhanh hơn"
  },
  {
    "word": "storage",
    "mean": "sự lưu trữ; chứa đồ"
  },
  {
    "word": "stairs",
    "mean": "cầu thang"
  },
  {
    "word": "where",
    "mean": "nơi mà; ở đâu"
  },
  {
    "word": "keeps",
    "mean": "giữ; duy trì"
  },
  {
    "word": "things",
    "mean": "đồ vật; việc"
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
    "word": "every",
    "mean": "mỗi"
  },
  {
    "word": "day",
    "mean": "ngày"
  },
  {
    "word": "boxes",
    "mean": "hộp"
  },
  {
    "word": "old",
    "mean": "xưa; cũ"
  },
  {
    "word": "books",
    "mean": "sách"
  },
  {
    "word": "suitcases",
    "mean": "va-li"
  },
  {
    "word": "seasonal",
    "mean": "theo mùa"
  },
  {
    "word": "decorations",
    "mean": "đồ trang trí"
  },
  {
    "word": "inside",
    "mean": "bên trong"
  },
  {
    "word": "items",
    "mean": "vật dụng"
  },
  {
    "word": "different",
    "mean": "khác nhau"
  },
  {
    "word": "groups",
    "mean": "nhóm"
  },
  {
    "word": "write",
    "mean": "viết"
  },
  {
    "word": "labels",
    "mean": "nhãn"
  },
  {
    "word": "find",
    "mean": "phát hiện; tìm thấy"
  },
  {
    "word": "quickly",
    "mean": "nhanh chóng"
  },
  {
    "word": "need",
    "mean": "cần"
  },
  {
    "word": "check",
    "mean": "kiểm tra"
  },
  {
    "word": "regularly",
    "mean": "thường xuyên"
  },
  {
    "word": "throw",
    "mean": "vứt; ném"
  },
  {
    "word": "broken",
    "mean": "bị hỏng"
  },
  {
    "word": "unnecessary",
    "mean": "không cần thiết"
  },
  {
    "word": "objects",
    "mean": "vật phẩm"
  },
  {
    "word": "useful",
    "mean": "hữu ích"
  },
  {
    "word": "because",
    "mean": "bởi vì"
  },
  {
    "word": "other",
    "mean": "khác"
  },
  {
    "word": "rooms",
    "mean": "các phòng"
  },
  {
    "word": "spacious",
    "mean": "rộng rãi"
  },
  {
    "word": "however",
    "mean": "tuy nhiên"
  },
  {
    "word": "become",
    "mean": "trở nên"
  },
  {
    "word": "too",
    "mean": "quá"
  },
  {
    "word": "crowded",
    "mean": "đông đúc"
  },
  {
    "word": "good",
    "mean": "tốt"
  },
  {
    "word": "organization",
    "mean": "sự sắp xếp; tổ chức"
  },
  {
    "word": "safer",
    "mean": "an toàn hơn"
  },
  {
    "word": "more",
    "mean": "nhiều hơn"
  },
  {
    "word": "convenient",
    "mean": "thuận tiện"
  },
  {
    "word": "garage",
    "mean": "ga-ra"
  },
  {
    "word": "left",
    "mean": "bên trái"
  },
  {
    "word": "side",
    "mean": "phía; bên"
  },
  {
    "word": "enough",
    "mean": "đủ"
  },
  {
    "word": "space",
    "mean": "không gian"
  },
  {
    "word": "car",
    "mean": "ô tô"
  },
  {
    "word": "two",
    "mean": "hai"
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
    "word": "helmets",
    "mean": "mũ bảo hiểm"
  },
  {
    "word": "equipment",
    "mean": "thiết bị; trang bị"
  },
  {
    "word": "area",
    "mean": "khu vực"
  },
  {
    "word": "morning",
    "mean": "buổi sáng"
  },
  {
    "word": "take",
    "mean": "đi; lấy"
  },
  {
    "word": "vehicles",
    "mean": "phương tiện"
  },
  {
    "word": "out",
    "mean": "ra ngoài"
  },
  {
    "word": "going",
    "mean": "việc đi"
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
    "word": "evening",
    "mean": "buổi tối"
  },
  {
    "word": "put",
    "mean": "đặt; để"
  },
  {
    "word": "lock",
    "mean": "khóa"
  },
  {
    "word": "door",
    "mean": "cửa"
  },
  {
    "word": "carefully",
    "mean": "cẩn thận"
  },
  {
    "word": "protects",
    "mean": "bảo vệ"
  },
  {
    "word": "rain",
    "mean": "mưa"
  },
  {
    "word": "sunlight",
    "mean": "ánh nắng"
  },
  {
    "word": "theft",
    "mean": "trộm cắp"
  },
  {
    "word": "always",
    "mean": "luôn luôn"
  },
  {
    "word": "bright",
    "mean": "sáng"
  },
  {
    "word": "secure",
    "mean": "an toàn; được bảo vệ"
  },
  {
    "word": "well",
    "mean": "tốt"
  },
  {
    "word": "travelling",
    "mean": "việc đi lại"
  },
  {
    "word": "whole",
    "mean": "toàn bộ"
  }
];

const newEx5Data = [
  "The guest room is located on the ground floor, near the bathroom.",
  "A clean and comfortable guest room shows kindness and respect to visitors.",
  "There is also a window that brings fresh air into the room.",
  "After that, we hang the clothes outside or use a drying machine.",
  "We should store cleaning products safely and keep them away from children.",
  "It has enough space for a car, two motorbikes, and some bicycles.",
  "My family also keeps helmets, tools, and cleaning equipment in this area.",
  "A well-organized garage makes travelling more convenient for the whole family.",
  "It has a comfortable bed, a wardrobe, a small table, and a chair.",
  "When relatives or friends stay at our house, they sleep in this room."
];

const newEx6Data = [
  {
    "id": 1,
    "correct": "The guest room is located on the ground floor, near the bathroom."
  },
  {
    "id": 2,
    "correct": "A clean and comfortable guest room shows kindness and respect to visitors."
  },
  {
    "id": 3,
    "correct": "There is also a window that brings fresh air into the room."
  },
  {
    "id": 4,
    "correct": "After that, we hang the clothes outside or use a drying machine."
  },
  {
    "id": 5,
    "correct": "We should store cleaning products safely and keep them away from children."
  },
  {
    "id": 6,
    "correct": "It has enough space for a car, two motorbikes, and some bicycles."
  },
  {
    "id": 7,
    "correct": "My family also keeps helmets, tools, and cleaning equipment in this area."
  },
  {
    "id": 8,
    "correct": "A well-organized garage makes travelling more convenient for the whole family."
  },
  {
    "id": 9,
    "correct": "It has a comfortable bed, a wardrobe, a small table, and a chair."
  },
  {
    "id": 10,
    "correct": "When relatives or friends stay at our house, they sleep in this room."
  },
  {
    "id": 11,
    "correct": "The laundry room is at the back of my house, near the kitchen."
  },
  {
    "id": 12,
    "correct": "It contains a washing machine, some baskets, detergent, clothes hangers, and cleaning tools."
  },
  {
    "id": 13,
    "correct": "There are boxes, old books, suitcases, tools, and seasonal decorations inside."
  },
  {
    "id": 14,
    "correct": "We organize the items into different groups and write labels on the boxes."
  },
  {
    "id": 15,
    "correct": "We also check the room regularly and throw away broken or unnecessary objects."
  }
];

const newEx7Data = [
  {
    "q": "Where is the guest room located?",
    "a": "It is on the ground floor, near the bathroom."
  },
  {
    "q": "What does the family prepare before guests arrive?",
    "a": "They clean the room, change the bedsheets, and prepare drinking water."
  },
  {
    "q": "What does a clean and comfortable guest room show?",
    "a": "It shows kindness and respect to visitors."
  },
  {
    "q": "What equipment is found in the laundry room?",
    "a": "It contains a washing machine, baskets, detergent, clothes hangers, and cleaning tools."
  },
  {
    "q": "What does the family do before washing clothes?",
    "a": "They separate white clothes from colored clothes."
  },
  {
    "q": "Why should cleaning products be stored safely?",
    "a": "They should be kept safely and away from children."
  },
  {
    "q": "What kinds of things are kept in the storage room?",
    "a": "The family keeps boxes, old books, suitcases, tools, and seasonal decorations there."
  },
  {
    "q": "How do labels help the family in the storage room?",
    "a": "Labels help the family find things quickly when they need them."
  },
  {
    "q": "What vehicles can the garage hold?",
    "a": "It has space for a car, two motorbikes, and some bicycles."
  },
  {
    "q": "What does the garage protect the vehicles from?",
    "a": "It protects them from rain, sunlight, and theft."
  }
];
