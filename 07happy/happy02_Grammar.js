// ===== happy02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Hiện tại đơn với động từ thường",
    "formula": "S + V(s) + O",
    "desc": "Dùng hiện tại đơn để mô tả sự thật hoặc hành động thường gặp.",
    "example": "Friendship brings joy, comfort, and meaning to our lives.",
    "vi": "Tình bạn mang lại niềm vui, sự an ủi và ý nghĩa cho cuộc sống của chúng ta.",
    "extra": [
      {
        "en": "Friendship brings comfort to many people.",
        "vi": "Tình bạn mang lại sự an ủi cho nhiều người."
      },
      {
        "en": "Kindness builds stronger relationships.",
        "vi": "Lòng tốt xây dựng những mối quan hệ bền chặt hơn."
      }
    ]
  },
  {
    "title": "2. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make + tân ngữ + tính từ để nói điều gì khiến ai ở trạng thái nào.",
    "example": "True friendship makes people feel accepted and understood.",
    "vi": "Tình bạn chân thành khiến mọi người cảm thấy được chấp nhận và thấu hiểu.",
    "extra": [
      {
        "en": "Kind words make people feel accepted.",
        "vi": "Những lời tử tế khiến mọi người cảm thấy được chấp nhận."
      },
      {
        "en": "Helping others can make us happier.",
        "vi": "Giúp đỡ người khác có thể khiến chúng ta hạnh phúc hơn."
      }
    ]
  },
  {
    "title": "3. Enjoy + V-ing",
    "formula": "S + enjoy + V-ing",
    "desc": "Dùng enjoy trước động từ thêm -ing để nói thích làm một hoạt động.",
    "example": "Friends often enjoy studying, playing sports, talking, or traveling together.",
    "vi": "Bạn bè thường thích học tập, chơi thể thao, trò chuyện hoặc đi du lịch cùng nhau.",
    "extra": [
      {
        "en": "Friends enjoy talking after school.",
        "vi": "Bạn bè thích trò chuyện sau giờ học."
      },
      {
        "en": "Many people enjoy helping their community.",
        "vi": "Nhiều người thích giúp đỡ cộng đồng của mình."
      }
    ]
  },
  {
    "title": "4. Should + động từ nguyên mẫu",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "To keep a strong friendship, we should be honest, kind, and respectful.",
    "vi": "Để giữ một tình bạn bền chặt, chúng ta nên trung thực, tử tế và tôn trọng.",
    "extra": [
      {
        "en": "Friends should listen to each other.",
        "vi": "Bạn bè nên lắng nghe nhau."
      },
      {
        "en": "We should show gratitude every day.",
        "vi": "Chúng ta nên thể hiện lòng biết ơn mỗi ngày."
      }
    ]
  },
  {
    "title": "5. V-ing làm chủ ngữ",
    "formula": "V-ing phrase + can + V",
    "desc": "Dùng cụm V-ing làm chủ ngữ để nói về một hoạt động.",
    "example": "Helping other people can bring deep happiness.",
    "vi": "Giúp đỡ người khác có thể mang lại niềm hạnh phúc sâu sắc.",
    "extra": [
      {
        "en": "Helping others can improve our mood.",
        "vi": "Giúp đỡ người khác có thể cải thiện tâm trạng."
      },
      {
        "en": "Sharing food can show kindness.",
        "vi": "Chia sẻ thức ăn có thể thể hiện lòng tốt."
      }
    ]
  },
  {
    "title": "6. When-clause",
    "formula": "When + S + V, S + V",
    "desc": "Dùng when để nêu hoàn cảnh trước mệnh đề chính.",
    "example": "When we give time, attention, or support, we make someone’s day better.",
    "vi": "Khi chúng ta dành thời gian, sự chú ý hoặc sự hỗ trợ, chúng ta làm cho một ngày của ai đó tốt đẹp hơn.",
    "extra": [
      {
        "en": "When we help someone, we often feel useful.",
        "vi": "Khi giúp ai đó, chúng ta thường cảm thấy có ích."
      },
      {
        "en": "When friends listen, trust becomes stronger.",
        "vi": "Khi bạn bè lắng nghe, niềm tin trở nên mạnh mẽ hơn."
      }
    ]
  },
  {
    "title": "7. May + động từ nguyên mẫu",
    "formula": "S + may + V",
    "desc": "Dùng may để nói một khả năng có thể xảy ra.",
    "example": "We may not receive money or a gift, but the smile of another person can be a wonderful reward.",
    "vi": "Chúng ta có thể không nhận được tiền hay quà, nhưng nụ cười của người khác có thể là một phần thưởng tuyệt vời.",
    "extra": [
      {
        "en": "A small gift may bring joy.",
        "vi": "Một món quà nhỏ có thể mang lại niềm vui."
      },
      {
        "en": "People may feel calmer after helping others.",
        "vi": "Mọi người có thể cảm thấy bình tĩnh hơn sau khi giúp người khác."
      }
    ]
  },
  {
    "title": "8. By + V-ing",
    "formula": "By + V-ing, S + V",
    "desc": "Dùng by + V-ing để chỉ cách thức đạt được kết quả.",
    "example": "By helping others, we create more kindness around us and make our own lives much happier every day too.",
    "vi": "Bằng cách giúp người khác, chúng ta tạo thêm lòng tốt quanh mình và làm cho chính cuộc sống của mình hạnh phúc hơn mỗi ngày.",
    "extra": [
      {
        "en": "By sharing kindness, we build stronger communities.",
        "vi": "Bằng cách chia sẻ lòng tốt, chúng ta xây dựng cộng đồng bền chặt hơn."
      },
      {
        "en": "By listening carefully, friends understand each other better.",
        "vi": "Bằng cách lắng nghe cẩn thận, bạn bè hiểu nhau hơn."
      }
    ]
  },
  {
    "title": "9. Mean + V-ing",
    "formula": "S + mean(s) + V-ing",
    "desc": "Dùng mean + V-ing để giải thích một khái niệm bao gồm hành động nào.",
    "example": "Being thankful means noticing and appreciating the good things in life.",
    "vi": "Biết ơn có nghĩa là nhận ra và trân trọng những điều tốt đẹp trong cuộc sống.",
    "extra": [
      {
        "en": "Being grateful means noticing good things.",
        "vi": "Biết ơn có nghĩa là nhận ra những điều tốt đẹp."
      },
      {
        "en": "Good friendship means caring about others.",
        "vi": "Tình bạn tốt có nghĩa là quan tâm đến người khác."
      }
    ]
  },
  {
    "title": "10. So sánh hơn với become",
    "formula": "S + become(s) + comparative adjective",
    "desc": "Dùng become + tính từ so sánh hơn để nói sự thay đổi trạng thái.",
    "example": "When we remember the positive parts of life, our thoughts become calmer and more hopeful.",
    "vi": "Khi nhớ đến những mặt tích cực của cuộc sống, suy nghĩ của chúng ta trở nên bình tĩnh và hy vọng hơn.",
    "extra": [
      {
        "en": "People become calmer when they focus on positive things.",
        "vi": "Mọi người trở nên bình tĩnh hơn khi tập trung vào điều tích cực."
      },
      {
        "en": "Friendships become stronger with trust.",
        "vi": "Tình bạn trở nên bền chặt hơn nhờ niềm tin."
      }
    ]
  }
];
