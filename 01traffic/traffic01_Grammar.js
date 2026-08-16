// ===== traffic01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Hiện tại đơn với to be",
    "formula": "S + be + adjective/noun",
    "desc": "Dùng để mô tả trạng thái hoặc đặc điểm thường xuyên.",
    "example": "City traffic is busy every day, especially in the morning and evening.",
    "vi": "Giao thông thành phố đông đúc mỗi ngày, đặc biệt vào buổi sáng và buổi tối.",
    "extra": [
      {
        "en": "City roads are busy in the morning.",
        "vi": "Đường phố thành phố đông đúc vào buổi sáng."
      },
      {
        "en": "Public transport is useful for many families.",
        "vi": "Phương tiện công cộng hữu ích cho nhiều gia đình."
      }
    ]
  },
  {
    "title": "2. Should + động từ nguyên mẫu",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Drivers should stop at red lights and follow speed limits carefully.",
    "vi": "Người lái xe nên dừng ở đèn đỏ và tuân thủ giới hạn tốc độ cẩn thận.",
    "extra": [
      {
        "en": "Cyclists should wear helmets on busy roads.",
        "vi": "Người đi xe đạp nên đội mũ bảo hiểm trên đường đông."
      },
      {
        "en": "Passengers should wait patiently at bus stops.",
        "vi": "Hành khách nên kiên nhẫn chờ tại trạm xe buýt."
      }
    ]
  },
  {
    "title": "3. Can + động từ nguyên mẫu",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc tác động có thể xảy ra.",
    "example": "Heavy traffic can cause delays and air pollution.",
    "vi": "Giao thông đông đúc có thể gây chậm trễ và ô nhiễm không khí.",
    "extra": [
      {
        "en": "Public buses can reduce traffic in the city.",
        "vi": "Xe buýt công cộng có thể giảm giao thông trong thành phố."
      },
      {
        "en": "Good habits can prevent road accidents.",
        "vi": "Thói quen tốt có thể ngăn ngừa tai nạn đường bộ."
      }
    ]
  },
  {
    "title": "4. So sánh hơn với than",
    "formula": "S + be + comparative adjective + than + noun",
    "desc": "Dùng tính từ so sánh hơn với than để so sánh hai đối tượng.",
    "example": "They are usually cheaper than driving private cars every day.",
    "vi": "Chúng thường rẻ hơn so với việc lái ô tô riêng mỗi ngày.",
    "extra": [
      {
        "en": "Bus travel is cheaper than driving a private car.",
        "vi": "Đi xe buýt rẻ hơn lái ô tô riêng."
      },
      {
        "en": "Walking is safer than running across a busy road.",
        "vi": "Đi bộ an toàn hơn chạy băng qua đường đông."
      }
    ]
  },
  {
    "title": "5. Need to + động từ",
    "formula": "S + need to + V",
    "desc": "Dùng need to để diễn tả điều cần làm.",
    "example": "They need to buy tickets, stand in line, and respect other travelers.",
    "vi": "Họ cần mua vé, xếp hàng và tôn trọng những người đi lại khác.",
    "extra": [
      {
        "en": "Drivers need to watch the road carefully.",
        "vi": "Người lái xe cần quan sát đường cẩn thận."
      },
      {
        "en": "Pedestrians need to use safe crossings.",
        "vi": "Người đi bộ cần sử dụng nơi qua đường an toàn."
      }
    ]
  },
  {
    "title": "6. Must + động từ nguyên mẫu",
    "formula": "S + must + V",
    "desc": "Dùng must để diễn tả quy định hoặc nghĩa vụ bắt buộc.",
    "example": "Drivers must wear seat belts and avoid using mobile phones while driving.",
    "vi": "Người lái xe phải thắt dây an toàn và tránh sử dụng điện thoại di động khi lái xe.",
    "extra": [
      {
        "en": "Motorbike riders must follow traffic signs.",
        "vi": "Người đi xe máy phải tuân theo biển báo giao thông."
      },
      {
        "en": "Drivers must stop when the light is red.",
        "vi": "Người lái xe phải dừng khi đèn đỏ."
      }
    ]
  },
  {
    "title": "7. Before + V-ing",
    "formula": "before + V-ing",
    "desc": "Dùng before + V-ing để diễn tả một hành động cần thực hiện trước một hành động khác.",
    "example": "Pedestrians need to use crosswalks before crossing busy roads every day.",
    "vi": "Người đi bộ cần sử dụng vạch qua đường trước khi băng qua những con đường đông đúc mỗi ngày.",
    "extra": [
      {
        "en": "Look both ways before crossing the street.",
        "vi": "Hãy nhìn cả hai phía trước khi băng qua đường."
      },
      {
        "en": "Check traffic lights before crossing.",
        "vi": "Hãy kiểm tra đèn giao thông trước khi băng qua."
      }
    ]
  },
  {
    "title": "8. Because + mệnh đề",
    "formula": "Main clause + because + S + V",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "More people should use it often because cleaner transportation helps protect the environment and improve city life.",
    "vi": "Nhiều người nên sử dụng nó thường xuyên vì phương tiện sạch hơn giúp bảo vệ môi trường và cải thiện cuộc sống thành phố.",
    "extra": [
      {
        "en": "People take buses because they are convenient.",
        "vi": "Mọi người đi xe buýt vì chúng thuận tiện."
      },
      {
        "en": "Cyclists wear helmets because safety is important.",
        "vi": "Người đi xe đạp đội mũ bảo hiểm vì an toàn rất quan trọng."
      }
    ]
  },
  {
    "title": "9. Help + động từ nguyên mẫu",
    "formula": "S + help(s) + V",
    "desc": "Dùng help theo sau bởi động từ nguyên mẫu để nói hỗ trợ một hành động.",
    "example": "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
    "vi": "Đèn giao thông, biển báo đường bộ và cảnh sát giúp giữ cho giao thông an toàn và có trật tự.",
    "extra": [
      {
        "en": "Crosswalks help keep pedestrians safe.",
        "vi": "Vạch qua đường giúp giữ người đi bộ an toàn."
      },
      {
        "en": "Public transport helps reduce traffic.",
        "vi": "Phương tiện công cộng giúp giảm giao thông."
      }
    ]
  },
  {
    "title": "10. V-ing làm chủ ngữ",
    "formula": "V-ing + V + object/complement",
    "desc": "Dùng danh động từ ở đầu câu làm chủ ngữ.",
    "example": "Following traffic rules reduces accidents and protects many lives.",
    "vi": "Tuân thủ luật giao thông làm giảm tai nạn và bảo vệ nhiều sinh mạng.",
    "extra": [
      {
        "en": "Walking saves money on short trips.",
        "vi": "Đi bộ tiết kiệm tiền cho những chuyến đi ngắn."
      },
      {
        "en": "Cycling improves health and fitness.",
        "vi": "Đạp xe cải thiện sức khỏe và thể lực."
      }
    ]
  }
];
