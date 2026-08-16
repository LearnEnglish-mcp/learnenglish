// ===== traffic02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. So sánh nhất với the",
    "formula": "S + be + the + superlative + noun",
    "desc": "Dùng dạng so sánh nhất để nói mức độ cao nhất trong một nhóm.",
    "example": "Rush hour is the busiest time of the day in many cities.",
    "vi": "Giờ cao điểm là thời gian bận rộn nhất trong ngày ở nhiều thành phố.",
    "extra": [
      {
        "en": "Morning traffic is the busiest part of her commute.",
        "vi": "Giao thông buổi sáng là phần đông nhất trong hành trình của cô ấy."
      },
      {
        "en": "This is the safest route to school.",
        "vi": "Đây là tuyến đường an toàn nhất đến trường."
      }
    ]
  },
  {
    "title": "2. Because + mệnh đề",
    "formula": "Main clause + because + S + V",
    "desc": "Dùng because để giải thích nguyên nhân.",
    "example": "Traffic moves slowly because many vehicles travel together at once.",
    "vi": "Giao thông di chuyển chậm vì nhiều phương tiện cùng đi một lúc.",
    "extra": [
      {
        "en": "The road is crowded because many people are traveling.",
        "vi": "Con đường đông vì nhiều người đang di chuyển."
      },
      {
        "en": "She leaves early because rush hour is busy.",
        "vi": "Cô ấy rời đi sớm vì giờ cao điểm đông đúc."
      }
    ]
  },
  {
    "title": "3. Should + động từ nguyên mẫu",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "They should stay calm, keep safe distances, and obey traffic lights carefully.",
    "vi": "Họ nên giữ bình tĩnh, giữ khoảng cách an toàn và tuân thủ đèn giao thông cẩn thận.",
    "extra": [
      {
        "en": "Drivers should keep a safe distance.",
        "vi": "Người lái xe nên giữ khoảng cách an toàn."
      },
      {
        "en": "Children should learn road safety early.",
        "vi": "Trẻ em nên học an toàn đường bộ sớm."
      }
    ]
  },
  {
    "title": "4. Can + động từ nguyên mẫu",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng hoặc kết quả có thể xảy ra.",
    "example": "Rush hour can waste time and increase pollution.",
    "vi": "Giờ cao điểm có thể làm lãng phí thời gian và làm tăng ô nhiễm.",
    "extra": [
      {
        "en": "A bicycle can reduce travel costs.",
        "vi": "Xe đạp có thể giảm chi phí đi lại."
      },
      {
        "en": "Good planning can make trips easier.",
        "vi": "Lập kế hoạch tốt có thể làm chuyến đi dễ hơn."
      }
    ]
  },
  {
    "title": "5. Mệnh lệnh phủ định với Never",
    "formula": "Never + V + object",
    "desc": "Dùng never ở đầu câu mệnh lệnh để nhấn mạnh điều tuyệt đối không nên làm.",
    "example": "Never run across busy roads or use mobile phones while walking through traffic areas.",
    "vi": "Không bao giờ chạy băng qua những con đường đông đúc hoặc dùng điện thoại di động khi đi bộ qua khu vực giao thông.",
    "extra": [
      {
        "en": "Never cross the road without looking.",
        "vi": "Không bao giờ băng qua đường mà không quan sát."
      },
      {
        "en": "Never use a phone while cycling.",
        "vi": "Không bao giờ dùng điện thoại khi đang đạp xe."
      }
    ]
  },
  {
    "title": "6. Whenever + tính từ/trạng thái",
    "formula": "whenever + adjective / whenever possible",
    "desc": "Dùng whenever để diễn tả bất cứ khi nào điều kiện phù hợp.",
    "example": "People should use crosswalks and traffic lights whenever possible.",
    "vi": "Mọi người nên sử dụng vạch qua đường và đèn giao thông bất cứ khi nào có thể.",
    "extra": [
      {
        "en": "Use bicycle lanes whenever possible.",
        "vi": "Hãy sử dụng làn xe đạp bất cứ khi nào có thể."
      },
      {
        "en": "Walk on sidewalks whenever possible.",
        "vi": "Hãy đi trên vỉa hè bất cứ khi nào có thể."
      }
    ]
  },
  {
    "title": "7. Must + động từ nguyên mẫu",
    "formula": "S + must + V",
    "desc": "Dùng must để diễn tả quy tắc bắt buộc.",
    "example": "They must follow traffic signs, use hand signals, and stay in bicycle lanes whenever possible.",
    "vi": "Họ phải tuân theo biển báo giao thông, dùng tín hiệu tay và đi trong làn xe đạp bất cứ khi nào có thể.",
    "extra": [
      {
        "en": "Cyclists must obey red lights.",
        "vi": "Người đi xe đạp phải tuân thủ đèn đỏ."
      },
      {
        "en": "Riders must check their bicycles before trips.",
        "vi": "Người đi xe phải kiểm tra xe đạp trước chuyến đi."
      }
    ]
  },
  {
    "title": "8. V-ing làm chủ ngữ",
    "formula": "V-ing + be/V + complement",
    "desc": "Dùng danh động từ làm chủ ngữ của câu.",
    "example": "Riding a bicycle is a healthy and enjoyable way to travel.",
    "vi": "Đi xe đạp là một cách di chuyển lành mạnh và thú vị.",
    "extra": [
      {
        "en": "Walking is good exercise.",
        "vi": "Đi bộ là một hình thức tập thể dục tốt."
      },
      {
        "en": "Cycling saves transportation costs.",
        "vi": "Đạp xe tiết kiệm chi phí đi lại."
      }
    ]
  },
  {
    "title": "9. Instead of + V-ing",
    "formula": "instead of + V-ing",
    "desc": "Dùng instead of để nói làm một việc thay cho một việc khác.",
    "example": "More people should ride bicycles for short trips instead of driving cars.",
    "vi": "Nhiều người nên đi xe đạp cho những chuyến đi ngắn thay vì lái ô tô.",
    "extra": [
      {
        "en": "Walk instead of driving for short trips.",
        "vi": "Hãy đi bộ thay vì lái xe cho những chuyến đi ngắn."
      },
      {
        "en": "Take a bus instead of using a private car.",
        "vi": "Hãy đi xe buýt thay vì dùng ô tô riêng."
      }
    ]
  },
  {
    "title": "10. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help với tân ngữ và động từ nguyên mẫu để nói giúp ai làm gì.",
    "example": "Bright clothes help drivers see cyclists more easily.",
    "vi": "Quần áo sáng màu giúp người lái xe nhìn thấy người đi xe đạp dễ dàng hơn.",
    "extra": [
      {
        "en": "Traffic reports help people choose better routes.",
        "vi": "Bản tin giao thông giúp mọi người chọn tuyến đường tốt hơn."
      },
      {
        "en": "Helmets help riders stay safer.",
        "vi": "Mũ bảo hiểm giúp người đi xe an toàn hơn."
      }
    ]
  }
];
