const newGrammarData = [
  {
    "title": "1. Gerund as subject",
    "formula": "V-ing + be + complement",
    "desc": "Dùng V-ing làm chủ ngữ.",
    "example": "Choosing the right clothes and shoes is very important for marathon runners.",
    "vi": "Chọn đúng quần áo và giày rất quan trọng đối với người chạy marathon.",
    "extra": [
      {
        "en": "Choosing comfortable shoes is important for runners.",
        "vi": "Chọn giày thoải mái rất quan trọng với người chạy."
      },
      {
        "en": "Wearing light clothes is useful in warm weather.",
        "vi": "Mặc quần áo nhẹ hữu ích trong thời tiết ấm."
      }
    ]
  },
  {
    "title": "2. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu để nói tác dụng.",
    "example": "Comfortable sportswear helps the body stay cool and dry during training.",
    "vi": "Trang phục thể thao thoải mái giúp cơ thể mát và khô trong khi tập.",
    "extra": [
      {
        "en": "Good shoes help runners move more comfortably.",
        "vi": "Giày tốt giúp người chạy di chuyển thoải mái hơn."
      },
      {
        "en": "Water helps the body stay healthy during exercise.",
        "vi": "Nước giúp cơ thể khỏe trong khi tập."
      }
    ]
  },
  {
    "title": "3. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Every runner should choose shoes that fit well and provide enough comfort for daily practice and long races.",
    "vi": "Mỗi người chạy nên chọn giày vừa chân và cung cấp đủ sự thoải mái cho việc tập hằng ngày và các cuộc đua dài.",
    "extra": [
      {
        "en": "Runners should choose shoes that fit properly.",
        "vi": "Người chạy nên chọn giày vừa chân."
      },
      {
        "en": "Athletes should drink water during long races.",
        "vi": "Vận động viên nên uống nước trong các cuộc đua dài."
      }
    ]
  },
  {
    "title": "4. Present simple with coordinated verbs",
    "formula": "S + V + O, V + O, and V + O",
    "desc": "Dùng các động từ song song để liệt kê chức năng.",
    "example": "Good shoes support the feet, protect the knees, and reduce the risk of injury.",
    "vi": "Giày tốt hỗ trợ bàn chân, bảo vệ đầu gối và giảm nguy cơ chấn thương.",
    "extra": [
      {
        "en": "Healthy meals build muscles, support recovery, and provide energy.",
        "vi": "Các bữa lành mạnh xây cơ, hỗ trợ hồi phục và cung cấp năng lượng."
      },
      {
        "en": "Volunteers provide water, give directions, and support runners.",
        "vi": "Tình nguyện viên cung cấp nước, chỉ đường và hỗ trợ người chạy."
      }
    ]
  },
  {
    "title": "5. To-infinitive of purpose",
    "formula": "S + V + O + to + V",
    "desc": "Dùng to-infinitive để nói mục đích.",
    "example": "Some runners wear special socks to prevent blisters during long runs.",
    "vi": "Một số người chạy mang tất đặc biệt để ngăn phồng rộp trong những buổi chạy dài.",
    "extra": [
      {
        "en": "Runners wear hats to protect themselves from the sun.",
        "vi": "Người chạy đội mũ để bảo vệ khỏi nắng."
      },
      {
        "en": "Athletes stretch to reduce the risk of injury.",
        "vi": "Vận động viên giãn cơ để giảm nguy cơ chấn thương."
      }
    ]
  },
  {
    "title": "6. Comparative adjectives",
    "formula": "S + V + comparative adjectives",
    "desc": "Dùng tính từ so sánh hơn để mô tả mức độ thay đổi.",
    "example": "Good preparation with the right clothing makes every marathon experience safer, easier, and much more enjoyable.",
    "vi": "Chuẩn bị tốt với trang phục phù hợp làm cho mỗi trải nghiệm marathon an toàn hơn, dễ dàng hơn và thú vị hơn nhiều.",
    "extra": [
      {
        "en": "Good clothing makes training safer and easier.",
        "vi": "Trang phục tốt làm việc tập an toàn và dễ hơn."
      },
      {
        "en": "Proper hydration makes recovery faster and more comfortable.",
        "vi": "Cấp nước đúng cách làm hồi phục nhanh và thoải mái hơn."
      }
    ]
  },
  {
    "title": "7. Before/during/after sequence",
    "formula": "S + should + V + before, during, and after + noun",
    "desc": "Dùng các giới từ thời gian để chỉ trình tự.",
    "example": "They should drink water before, during, and after exercise to stay healthy and avoid dehydration and tiredness.",
    "vi": "Họ nên uống nước trước, trong và sau khi tập để giữ sức khỏe và tránh mất nước cùng mệt mỏi.",
    "extra": [
      {
        "en": "Runners drink before, during, and after long training sessions.",
        "vi": "Người chạy uống trước, trong và sau các buổi tập dài."
      },
      {
        "en": "Athletes eat before, during, and after demanding events.",
        "vi": "Vận động viên ăn trước, trong và sau các sự kiện nặng."
      }
    ]
  },
  {
    "title": "8. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "Some runners enjoy bananas, yogurt, or energy bars before running because these foods are easy to digest.",
    "vi": "Một số người chạy thích chuối, sữa chua hoặc thanh năng lượng trước khi chạy vì những thực phẩm này dễ tiêu hóa.",
    "extra": [
      {
        "en": "Runners eat bananas because they are easy to digest.",
        "vi": "Người chạy ăn chuối vì chúng dễ tiêu hóa."
      },
      {
        "en": "Athletes drink water because hydration supports performance.",
        "vi": "Vận động viên uống nước vì cấp nước hỗ trợ thành tích."
      }
    ]
  },
  {
    "title": "9. When-clause",
    "formula": "When + clause, main clause",
    "desc": "Dùng when để nói thời điểm một hành động xảy ra.",
    "example": "When the race begins, runners should avoid starting too fast.",
    "vi": "Khi cuộc đua bắt đầu, người chạy nên tránh xuất phát quá nhanh.",
    "extra": [
      {
        "en": "When the race starts, runners keep a steady pace.",
        "vi": "Khi cuộc đua bắt đầu, người chạy giữ tốc độ ổn định."
      },
      {
        "en": "When runners feel tired, they listen to their bodies.",
        "vi": "Khi người chạy mệt, họ lắng nghe cơ thể."
      }
    ]
  },
  {
    "title": "10. Not only ... but also",
    "formula": "S + be + not only + noun + but also + noun phrase",
    "desc": "Dùng not only ... but also để nhấn mạnh hai vai trò.",
    "example": "The marathon is not only a race but also a celebration of hard work, courage, determination, and personal achievement.",
    "vi": "Marathon không chỉ là một cuộc đua mà còn là sự tôn vinh lao động chăm chỉ, lòng dũng cảm, quyết tâm và thành tựu cá nhân.",
    "extra": [
      {
        "en": "A marathon is not only physical but also mental.",
        "vi": "Marathon không chỉ về thể chất mà còn về tinh thần."
      },
      {
        "en": "Race day is not only competition but also celebration.",
        "vi": "Ngày đua không chỉ là thi đấu mà còn là sự ăn mừng."
      }
    ]
  }
];
