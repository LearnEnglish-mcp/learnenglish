// ===== family03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Can assist by + V-ing",
    "formula": "S + can assist by + V-ing",
    "desc": "Dùng by + V-ing để nói cách hỗ trợ.",
    "example": "Children can assist by washing vegetables, preparing ingredients, or setting the table.",
    "vi": "Trẻ em có thể hỗ trợ bằng cách rửa rau, chuẩn bị nguyên liệu hoặc dọn bàn.",
    "extra": [
      {
        "en": "Children can assist by washing fresh vegetables.",
        "vi": "Trẻ em có thể hỗ trợ bằng cách rửa rau tươi."
      },
      {
        "en": "They can assist by setting the dinner table.",
        "vi": "Các em có thể hỗ trợ bằng cách dọn bàn ăn."
      }
    ]
  },
  {
    "title": "2. Learn how to + verb",
    "formula": "S + learn how to + V",
    "desc": "Dùng how to + động từ để nói học cách làm việc gì.",
    "example": "Children learn how to prepare food safely and understand the value of healthy eating.",
    "vi": "Trẻ em học cách chuẩn bị thức ăn an toàn và hiểu giá trị của việc ăn uống lành mạnh.",
    "extra": [
      {
        "en": "Children learn how to prepare food safely.",
        "vi": "Trẻ em học cách chuẩn bị thức ăn an toàn."
      },
      {
        "en": "Young cooks learn how to use simple skills.",
        "vi": "Người nấu trẻ học cách sử dụng những kỹ năng đơn giản."
      }
    ]
  },
  {
    "title": "3. Become + adjective",
    "formula": "S + become + adjective",
    "desc": "Dùng become + tính từ để nói sự thay đổi trạng thái.",
    "example": "They also become more responsible and independent.",
    "vi": "Các em cũng trở nên có trách nhiệm và độc lập hơn.",
    "extra": [
      {
        "en": "Children become more responsible through regular practice.",
        "vi": "Trẻ em trở nên có trách nhiệm hơn qua luyện tập thường xuyên."
      },
      {
        "en": "Cooking skills help children become more independent.",
        "vi": "Kỹ năng nấu ăn giúp trẻ trở nên độc lập hơn."
      }
    ]
  },
  {
    "title": "4. To-infinitive of purpose",
    "formula": "S + V + to + V",
    "desc": "Dùng to-infinitive để nói mục đích.",
    "example": "Everyone works together to create a delicious meal.",
    "vi": "Mọi người cùng làm việc để tạo ra một bữa ăn ngon.",
    "extra": [
      {
        "en": "Families work together to prepare delicious meals.",
        "vi": "Các gia đình cùng làm việc để chuẩn bị bữa ăn ngon."
      },
      {
        "en": "Children help parents to make cooking easier.",
        "vi": "Trẻ em giúp cha mẹ làm việc nấu ăn dễ hơn."
      }
    ]
  },
  {
    "title": "5. Until-clause",
    "formula": "S + be + V3 + until + clause",
    "desc": "Dùng until để nói một hành động tiếp tục đến một thời điểm.",
    "example": "The fish is cooked until it is golden and delicious.",
    "vi": "Cá được nấu cho đến khi vàng và ngon.",
    "extra": [
      {
        "en": "Fish cooks until it becomes golden and tasty.",
        "vi": "Cá được nấu đến khi trở nên vàng và ngon."
      },
      {
        "en": "Families wait until everyone is ready to eat.",
        "vi": "Các gia đình đợi đến khi mọi người sẵn sàng ăn."
      }
    ]
  },
  {
    "title": "6. When + past participle",
    "formula": "Main clause + when + V3 phrase",
    "desc": "Dùng when + phân từ quá khứ trong cụm rút gọn chỉ thời điểm.",
    "example": "This dish tastes even better when eaten with rice and soup.",
    "vi": "Món này còn ngon hơn khi ăn cùng cơm và canh.",
    "extra": [
      {
        "en": "This meal tastes better when shared with family.",
        "vi": "Bữa ăn này ngon hơn khi được chia sẻ với gia đình."
      },
      {
        "en": "Vegetables are delicious when eaten with fresh fish.",
        "vi": "Rau rất ngon khi ăn cùng cá tươi."
      }
    ]
  },
  {
    "title": "7. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để giải thích nguyên nhân.",
    "example": "I enjoy this meal because it reminds me of family gatherings.",
    "vi": "Tôi thích bữa ăn này vì nó nhắc tôi về những buổi tụ họp gia đình.",
    "extra": [
      {
        "en": "I enjoy dinner because my family eats together.",
        "vi": "Tôi thích bữa tối vì gia đình tôi ăn cùng nhau."
      },
      {
        "en": "Children smile because family meals feel warm.",
        "vi": "Trẻ em mỉm cười vì bữa ăn gia đình tạo cảm giác ấm áp."
      }
    ]
  },
  {
    "title": "8. Without + V-ing",
    "formula": "Main clause + without + V-ing",
    "desc": "Dùng without + V-ing để nói không thực hiện một hành động.",
    "example": "Family members can sit together longer and enjoy a relaxed meal without rushing.",
    "vi": "Các thành viên gia đình có thể ngồi cùng nhau lâu hơn và thưởng thức một bữa ăn thư giãn mà không vội vàng.",
    "extra": [
      {
        "en": "Families can enjoy dinner without using phones.",
        "vi": "Các gia đình có thể thưởng thức bữa tối mà không dùng điện thoại."
      },
      {
        "en": "People can talk together without rushing the meal.",
        "vi": "Mọi người có thể trò chuyện cùng nhau mà không vội vàng."
      }
    ]
  },
  {
    "title": "9. May + bare infinitive",
    "formula": "S + may + V",
    "desc": "Dùng may để nói khả năng.",
    "example": "Others may invite relatives or grandparents to join the meal.",
    "vi": "Những gia đình khác có thể mời họ hàng hoặc ông bà tham gia bữa ăn.",
    "extra": [
      {
        "en": "Grandparents may join a special weekend dinner.",
        "vi": "Ông bà có thể tham gia một bữa tối cuối tuần đặc biệt."
      },
      {
        "en": "Relatives may bring food to family gatherings.",
        "vi": "Họ hàng có thể mang thức ăn đến buổi tụ họp gia đình."
      }
    ]
  },
  {
    "title": "10. Even + can",
    "formula": "Even + noun phrase + can + V",
    "desc": "Dùng even để nhấn mạnh một trường hợp tưởng như đơn giản.",
    "example": "Even a simple dinner can strengthen relationships and create lasting memories.",
    "vi": "Ngay cả một bữa tối đơn giản cũng có thể củng cố các mối quan hệ và tạo ra những kỷ niệm lâu dài.",
    "extra": [
      {
        "en": "Even simple meals can create happy memories.",
        "vi": "Ngay cả bữa ăn đơn giản cũng có thể tạo kỷ niệm vui."
      },
      {
        "en": "Even busy families can share dinner together.",
        "vi": "Ngay cả gia đình bận rộn cũng có thể ăn tối cùng nhau."
      }
    ]
  }
];
