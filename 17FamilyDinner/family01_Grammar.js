// ===== family01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple with be",
    "formula": "S + be + noun phrase",
    "desc": "Dùng hiện tại đơn với be để định nghĩa hoặc mô tả.",
    "example": "Family dinner is an important part of daily life in many homes.",
    "vi": "Bữa tối gia đình là một phần quan trọng của cuộc sống hằng ngày trong nhiều gia đình.",
    "extra": [
      {
        "en": "Family members often sit together for dinner.",
        "vi": "Các thành viên gia đình thường ngồi cùng nhau ăn tối."
      },
      {
        "en": "A simple meal can create warm family memories.",
        "vi": "Một bữa ăn đơn giản có thể tạo ra kỷ niệm gia đình ấm áp."
      }
    ]
  },
  {
    "title": "2. When-clause",
    "formula": "S + be + time + when + clause",
    "desc": "Dùng when để bổ sung thông tin về thời điểm.",
    "example": "It is a time when family members sit together, enjoy food, and share their experiences.",
    "vi": "Đây là lúc các thành viên trong gia đình ngồi cùng nhau, thưởng thức thức ăn và chia sẻ những trải nghiệm của mình.",
    "extra": [
      {
        "en": "Dinner is a time when everyone can talk.",
        "vi": "Bữa tối là lúc mọi người có thể trò chuyện."
      },
      {
        "en": "Children share stories when the family eats together.",
        "vi": "Trẻ em chia sẻ câu chuyện khi gia đình ăn cùng nhau."
      }
    ]
  },
  {
    "title": "3. Can + bare infinitive",
    "formula": "S + can + V + O",
    "desc": "Dùng can để nói khả năng hoặc kết quả có thể xảy ra.",
    "example": "A simple meal can bring happiness and strengthen family relationships.",
    "vi": "Một bữa ăn đơn giản có thể mang lại hạnh phúc và củng cố các mối quan hệ gia đình.",
    "extra": [
      {
        "en": "Shared meals can strengthen close family relationships.",
        "vi": "Những bữa ăn chung có thể củng cố mối quan hệ gia đình gần gũi."
      },
      {
        "en": "Parents can bring happiness through caring conversations.",
        "vi": "Cha mẹ có thể mang lại niềm vui qua những cuộc trò chuyện quan tâm."
      }
    ]
  },
  {
    "title": "4. Coordinated clauses with and",
    "formula": "Clause + and + clause",
    "desc": "Dùng and để nối hai mệnh đề có quan hệ gần nhau.",
    "example": "Parents listen to their children, and children learn from their parents.",
    "vi": "Cha mẹ lắng nghe con cái, và con cái học hỏi từ cha mẹ.",
    "extra": [
      {
        "en": "Parents listen, and children share their experiences.",
        "vi": "Cha mẹ lắng nghe, và trẻ em chia sẻ trải nghiệm."
      },
      {
        "en": "Children learn, and parents offer useful support.",
        "vi": "Trẻ em học hỏi, và cha mẹ đưa ra sự hỗ trợ hữu ích."
      }
    ]
  },
  {
    "title": "5. What-clause as subject",
    "formula": "What + V + ... + be + complement",
    "desc": "Dùng mệnh đề bắt đầu bằng what làm chủ ngữ.",
    "example": "What matters most is spending time together.",
    "vi": "Điều quan trọng nhất là dành thời gian bên nhau.",
    "extra": [
      {
        "en": "What matters most is enjoying time together.",
        "vi": "Điều quan trọng nhất là tận hưởng thời gian bên nhau."
      },
      {
        "en": "What helps families connect is regular communication.",
        "vi": "Điều giúp gia đình gắn kết là giao tiếp thường xuyên."
      }
    ]
  },
  {
    "title": "6. Before + V-ing",
    "formula": "Before + V-ing, S + V",
    "desc": "Dùng before + V-ing để nói hành động xảy ra trước.",
    "example": "Before cooking, family members choose ingredients and decide what dishes to make.",
    "vi": "Trước khi nấu, các thành viên trong gia đình chọn nguyên liệu và quyết định sẽ làm những món gì.",
    "extra": [
      {
        "en": "Before cooking, everyone can choose fresh ingredients.",
        "vi": "Trước khi nấu, mọi người có thể chọn nguyên liệu tươi."
      },
      {
        "en": "Before dinner, children can help set the table.",
        "vi": "Trước bữa tối, trẻ em có thể giúp dọn bàn."
      }
    ]
  },
  {
    "title": "7. May + bare infinitive",
    "formula": "S + may + V",
    "desc": "Dùng may để nói một việc có thể làm.",
    "example": "They may wash vegetables, set the table, or carry dishes to the dining room.",
    "vi": "Các em có thể rửa rau, dọn bàn hoặc mang món ăn đến phòng ăn.",
    "extra": [
      {
        "en": "Children may wash vegetables before the meal.",
        "vi": "Trẻ em có thể rửa rau trước bữa ăn."
      },
      {
        "en": "Parents may ask children to carry dishes.",
        "vi": "Cha mẹ có thể nhờ trẻ mang món ăn."
      }
    ]
  },
  {
    "title": "8. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make + tân ngữ + tính từ để diễn tả kết quả.",
    "example": "Working together makes meal preparation easier and more enjoyable.",
    "vi": "Cùng làm việc giúp việc chuẩn bị bữa ăn dễ dàng và thú vị hơn.",
    "extra": [
      {
        "en": "Working together makes cooking easier for everyone.",
        "vi": "Cùng làm việc giúp việc nấu ăn dễ hơn cho mọi người."
      },
      {
        "en": "Shared preparation makes family meals more enjoyable.",
        "vi": "Cùng chuẩn bị làm bữa ăn gia đình thú vị hơn."
      }
    ]
  },
  {
    "title": "9. Try + to-infinitive",
    "formula": "S + try + to + V",
    "desc": "Dùng try + to-infinitive để nói sự cố gắng.",
    "example": "Many families try to have dinner together after work or school.",
    "vi": "Nhiều gia đình cố gắng ăn tối cùng nhau sau giờ làm việc hoặc học tập.",
    "extra": [
      {
        "en": "Families try to eat together after work.",
        "vi": "Các gia đình cố gắng ăn cùng nhau sau giờ làm."
      },
      {
        "en": "Children try to help with simple meal tasks.",
        "vi": "Trẻ em cố gắng giúp những việc đơn giản khi chuẩn bị bữa ăn."
      }
    ]
  },
  {
    "title": "10. Spend + time + V-ing",
    "formula": "S + spend + time + V-ing",
    "desc": "Dùng spend + time + V-ing để nói dành thời gian làm gì.",
    "example": "People often eat more balanced meals and spend less time using phones or watching television.",
    "vi": "Mọi người thường ăn các bữa cân bằng hơn và dành ít thời gian hơn cho điện thoại hoặc xem tivi.",
    "extra": [
      {
        "en": "People spend less time using phones at dinner.",
        "vi": "Mọi người dành ít thời gian dùng điện thoại hơn trong bữa tối."
      },
      {
        "en": "Families spend time talking while they eat.",
        "vi": "Các gia đình dành thời gian trò chuyện trong khi ăn."
      }
    ]
  }
];
