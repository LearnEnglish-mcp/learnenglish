// ===== traffic03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Should + động từ nguyên mẫu",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Drivers should stay focused and always watch other vehicles, cyclists, and pedestrians.",
    "vi": "Người lái xe nên tập trung và luôn quan sát các phương tiện khác, người đi xe đạp và người đi bộ.",
    "extra": [
      {
        "en": "Drivers should watch the road carefully.",
        "vi": "Người lái xe nên quan sát đường cẩn thận."
      },
      {
        "en": "Passengers should respect other travelers.",
        "vi": "Hành khách nên tôn trọng những người đi lại khác."
      }
    ]
  },
  {
    "title": "2. Must + động từ nguyên mẫu",
    "formula": "S + must + V",
    "desc": "Dùng must để diễn tả quy tắc bắt buộc.",
    "example": "Drivers must obey speed limits and stop completely at red lights.",
    "vi": "Người lái xe phải tuân thủ giới hạn tốc độ và dừng hẳn khi đèn đỏ.",
    "extra": [
      {
        "en": "Drivers must obey traffic signs.",
        "vi": "Người lái xe phải tuân theo biển báo giao thông."
      },
      {
        "en": "Cyclists must use lights at night.",
        "vi": "Người đi xe đạp phải dùng đèn vào ban đêm."
      }
    ]
  },
  {
    "title": "3. Because + mệnh đề",
    "formula": "Main clause + because + S + V",
    "desc": "Dùng because để giải thích nguyên nhân.",
    "example": "They should avoid using mobile phones while driving because distractions are dangerous.",
    "vi": "Họ nên tránh dùng điện thoại di động khi lái xe vì sự xao nhãng rất nguy hiểm.",
    "extra": [
      {
        "en": "People walk because short trips are easy on foot.",
        "vi": "Mọi người đi bộ vì những chuyến đi ngắn dễ thực hiện bằng chân."
      },
      {
        "en": "Buses are useful because they carry many passengers.",
        "vi": "Xe buýt hữu ích vì chúng chở nhiều hành khách."
      }
    ]
  },
  {
    "title": "4. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make với tân ngữ và tính từ để diễn tả việc làm cho điều gì trở nên như thế nào.",
    "example": "Cars, buses, trucks, and motorbikes produce smoke that makes the air dirty.",
    "vi": "Ô tô, xe buýt, xe tải và xe máy tạo ra khói khiến không khí bẩn.",
    "extra": [
      {
        "en": "Trees make city air cleaner.",
        "vi": "Cây xanh làm không khí thành phố sạch hơn."
      },
      {
        "en": "Good habits make roads safer.",
        "vi": "Thói quen tốt làm đường phố an toàn hơn."
      }
    ]
  },
  {
    "title": "5. Can + động từ nguyên mẫu",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc tác động.",
    "example": "Poor air quality can affect people's health, especially children and older adults living nearby.",
    "vi": "Chất lượng không khí kém có thể ảnh hưởng đến sức khỏe của mọi người, đặc biệt là trẻ em và người lớn tuổi sống gần đó.",
    "extra": [
      {
        "en": "Public transport can reduce pollution.",
        "vi": "Phương tiện công cộng có thể giảm ô nhiễm."
      },
      {
        "en": "Walking can improve fitness.",
        "vi": "Đi bộ có thể cải thiện thể lực."
      }
    ]
  },
  {
    "title": "6. By + V-ing",
    "formula": "by + V-ing",
    "desc": "Dùng by + V-ing để nói cách thức thực hiện một việc.",
    "example": "People can help reduce pollution by using public transportation more often.",
    "vi": "Mọi người có thể giúp giảm ô nhiễm bằng cách sử dụng phương tiện công cộng thường xuyên hơn.",
    "extra": [
      {
        "en": "You can save fuel by taking a bus.",
        "vi": "Bạn có thể tiết kiệm nhiên liệu bằng cách đi xe buýt."
      },
      {
        "en": "People stay active by walking every day.",
        "vi": "Mọi người duy trì vận động bằng cách đi bộ mỗi ngày."
      }
    ]
  },
  {
    "title": "7. So sánh hơn",
    "formula": "comparative adjective + than / comparative adjective",
    "desc": "Dùng dạng so sánh hơn để mô tả mức độ cao hơn hoặc thấp hơn.",
    "example": "Public transportation makes daily journeys cheaper, safer, and better for the environment.",
    "vi": "Phương tiện công cộng làm cho hành trình hằng ngày rẻ hơn, an toàn hơn và tốt hơn cho môi trường.",
    "extra": [
      {
        "en": "A bus can be cheaper than a taxi.",
        "vi": "Xe buýt có thể rẻ hơn taxi."
      },
      {
        "en": "Quiet streets are safer for pedestrians.",
        "vi": "Đường phố yên tĩnh an toàn hơn cho người đi bộ."
      }
    ]
  },
  {
    "title": "8. One of the + so sánh nhất + danh từ số nhiều",
    "formula": "one of the + superlative + plural noun",
    "desc": "Dùng cấu trúc one of the để nói một trong những đối tượng nổi bật nhất.",
    "example": "Walking is one of the healthiest ways to travel in the city.",
    "vi": "Đi bộ là một trong những cách di chuyển lành mạnh nhất trong thành phố.",
    "extra": [
      {
        "en": "Cycling is one of the cleanest ways to travel.",
        "vi": "Đạp xe là một trong những cách di chuyển sạch nhất."
      },
      {
        "en": "Walking is one of the easiest daily exercises.",
        "vi": "Đi bộ là một trong những bài tập hằng ngày dễ nhất."
      }
    ]
  },
  {
    "title": "9. Whenever + possible",
    "formula": "whenever possible",
    "desc": "Dùng whenever possible để diễn tả bất cứ khi nào có thể.",
    "example": "Pedestrians should use sidewalks whenever possible and cross roads carefully.",
    "vi": "Người đi bộ nên sử dụng vỉa hè bất cứ khi nào có thể và băng qua đường cẩn thận.",
    "extra": [
      {
        "en": "Use public transport whenever possible.",
        "vi": "Hãy dùng phương tiện công cộng bất cứ khi nào có thể."
      },
      {
        "en": "Choose safe crossings whenever possible.",
        "vi": "Hãy chọn nơi qua đường an toàn bất cứ khi nào có thể."
      }
    ]
  },
  {
    "title": "10. Help + động từ nguyên mẫu",
    "formula": "S + help(s) + V",
    "desc": "Dùng help theo sau bởi động từ nguyên mẫu để nói hỗ trợ một hành động.",
    "example": "Looking both ways before crossing helps prevent accidents and keeps everyone safe outside.",
    "vi": "Nhìn cả hai phía trước khi băng qua giúp ngăn ngừa tai nạn và giữ mọi người an toàn bên ngoài.",
    "extra": [
      {
        "en": "Traffic lights help prevent accidents.",
        "vi": "Đèn giao thông giúp ngăn ngừa tai nạn."
      },
      {
        "en": "Sidewalks help keep pedestrians safe.",
        "vi": "Vỉa hè giúp giữ người đi bộ an toàn."
      }
    ]
  }
];
