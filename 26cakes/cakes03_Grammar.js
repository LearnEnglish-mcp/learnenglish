const newGrammarData = [
  {
    "title": "1. Passive voice with be made",
    "formula": "S + be + V3 + from + ingredients",
    "desc": "Dùng bị động để mô tả nguyên liệu.",
    "example": "The batter is made from rice flour, coconut milk, and turmeric.",
    "vi": "Bột bánh được làm từ bột gạo, nước cốt dừa và nghệ.",
    "extra": [
      {
        "en": "The cake is made from rice flour and coconut milk.",
        "vi": "Bánh được làm từ bột gạo và nước cốt dừa."
      },
      {
        "en": "Sweet cakes are made from simple ingredients.",
        "vi": "Bánh ngọt được làm từ những nguyên liệu đơn giản."
      }
    ]
  },
  {
    "title": "2. Passive voice with be placed",
    "formula": "S + be + V3 + place",
    "desc": "Dùng bị động để mô tả vị trí của nguyên liệu.",
    "example": "A shrimp is usually placed on top of each cake.",
    "vi": "Một con tôm thường được đặt trên mỗi chiếc bánh.",
    "extra": [
      {
        "en": "A shrimp is placed on each small cake.",
        "vi": "Một con tôm được đặt trên mỗi chiếc bánh nhỏ."
      },
      {
        "en": "The cakes are placed carefully on a plate.",
        "vi": "Các chiếc bánh được đặt cẩn thận trên đĩa."
      }
    ]
  },
  {
    "title": "3. When-clause",
    "formula": "S + be + complement + when + V3",
    "desc": "Dùng when để nói điều kiện hoặc thời điểm món ăn ngon nhất.",
    "example": "It is best when served hot.",
    "vi": "Bánh ngon nhất khi được phục vụ nóng.",
    "extra": [
      {
        "en": "Banh khot tastes best when served hot.",
        "vi": "Bánh khọt ngon nhất khi được phục vụ nóng."
      },
      {
        "en": "The cake is softest when served fresh.",
        "vi": "Bánh mềm nhất khi được phục vụ tươi."
      }
    ]
  },
  {
    "title": "4. May + have",
    "formula": "S + may + have + O",
    "desc": "Dùng may để nói một khả năng hoặc phiên bản có thể có.",
    "example": "Sweet cakes may have green bean, coconut, or sugar filling.",
    "vi": "Bánh ngọt có thể có nhân đậu xanh, dừa hoặc đường.",
    "extra": [
      {
        "en": "Sweet cakes may have coconut filling.",
        "vi": "Bánh ngọt có thể có nhân dừa."
      },
      {
        "en": "Savory cakes may have pork and shrimp.",
        "vi": "Bánh mặn có thể có thịt lợn và tôm."
      }
    ]
  },
  {
    "title": "5. Until-clause",
    "formula": "S + be + V3 + until + clause",
    "desc": "Dùng until để nói quá trình tiếp diễn đến một trạng thái.",
    "example": "The cake is steamed until the dough becomes soft and chewy.",
    "vi": "Bánh được hấp cho đến khi bột trở nên mềm và dai.",
    "extra": [
      {
        "en": "The dough is steamed until it becomes chewy.",
        "vi": "Bột được hấp cho đến khi trở nên dai."
      },
      {
        "en": "Each layer cooks until it becomes firm.",
        "vi": "Mỗi lớp được nấu cho đến khi trở nên chắc."
      }
    ]
  },
  {
    "title": "6. When-clause with can",
    "formula": "When + clause, S + can + V",
    "desc": "Dùng when với can để nói khả năng trong một tình huống.",
    "example": "When people open the leaf, they can smell a pleasant banana leaf aroma.",
    "vi": "Khi mọi người mở lá, họ có thể ngửi thấy mùi thơm dễ chịu của lá chuối.",
    "extra": [
      {
        "en": "When people open the leaf, they can smell banana.",
        "vi": "Khi mọi người mở lá, họ có thể ngửi thấy mùi chuối."
      },
      {
        "en": "When the cake is hot, people can enjoy its aroma.",
        "vi": "Khi bánh nóng, mọi người có thể thưởng thức hương thơm."
      }
    ]
  },
  {
    "title": "7. While for contrast",
    "formula": "Clause, while + clause",
    "desc": "Dùng while để đối chiếu hai nhóm.",
    "example": "Children like its soft texture, while adults remember it from childhood.",
    "vi": "Trẻ em thích kết cấu mềm của bánh, trong khi người lớn nhớ đến nó từ thời thơ ấu.",
    "extra": [
      {
        "en": "Children enjoy sweet cakes, while adults remember traditions.",
        "vi": "Trẻ em thích bánh ngọt, trong khi người lớn nhớ về truyền thống."
      },
      {
        "en": "Some cakes are steamed, while others are baked.",
        "vi": "Một số bánh được hấp, trong khi loại khác được nướng."
      }
    ]
  },
  {
    "title": "8. But for contrast",
    "formula": "Clause, but + clause",
    "desc": "Dùng but để nối hai ý tương phản.",
    "example": "Its name means pig skin cake, but it does not contain pig skin.",
    "vi": "Tên bánh có nghĩa là bánh da lợn, nhưng bánh không chứa da lợn.",
    "extra": [
      {
        "en": "The name sounds unusual, but the cake contains no skin.",
        "vi": "Tên nghe lạ nhưng bánh không chứa da."
      },
      {
        "en": "The cake is rich, but it is not too heavy.",
        "vi": "Bánh béo nhưng không quá nặng."
      }
    ]
  },
  {
    "title": "9. Only after",
    "formula": "S + V + O + only after + clause",
    "desc": "Dùng only after để nhấn mạnh trình tự.",
    "example": "They add the next layer only after the first becomes firm.",
    "vi": "Họ chỉ thêm lớp tiếp theo sau khi lớp đầu tiên trở nên chắc.",
    "extra": [
      {
        "en": "Cooks add another layer only after the first firms.",
        "vi": "Người nấu thêm lớp khác chỉ sau khi lớp đầu chắc lại."
      },
      {
        "en": "People cut the cake only after it cools.",
        "vi": "Mọi người cắt bánh chỉ sau khi bánh nguội."
      }
    ]
  },
  {
    "title": "10. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make + tân ngữ + tính từ để nói tác động.",
    "example": "Its bright colorful layers make it attractive to children and adults.",
    "vi": "Những lớp màu sắc tươi sáng làm bánh hấp dẫn đối với trẻ em và người lớn.",
    "extra": [
      {
        "en": "Pandan makes the cake green and fragrant.",
        "vi": "Lá dứa làm bánh xanh và thơm."
      },
      {
        "en": "Colorful layers make the cake attractive to children.",
        "vi": "Các lớp nhiều màu làm bánh hấp dẫn với trẻ em."
      }
    ]
  }
];
