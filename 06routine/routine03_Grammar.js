// ===== routine03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. V-ing as subject",
    "formula": "V-ing phrase + be + complement",
    "desc": "Dùng cụm V-ing làm chủ ngữ.",
    "example": "Helping my family is a good habit that I practice every day.",
    "vi": "Giúp đỡ gia đình là một thói quen tốt mà tôi thực hiện mỗi ngày.",
    "extra": [
      {
        "en": "Walking every morning is good for health.",
        "vi": "Đi bộ mỗi sáng tốt cho sức khỏe."
      },
      {
        "en": "Reading before bed is a relaxing habit.",
        "vi": "Đọc sách trước khi ngủ là một thói quen thư giãn."
      }
    ]
  },
  {
    "title": "2. When-clause",
    "formula": "When + S + V, S + V",
    "desc": "Dùng when để chỉ tình huống hoặc thời điểm.",
    "example": "When my parents are busy, I help prepare simple food or look after our home.",
    "vi": "Khi bố mẹ bận, tôi giúp chuẩn bị món ăn đơn giản hoặc trông nom nhà cửa.",
    "extra": [
      {
        "en": "When I feel tired, I take a short break.",
        "vi": "Khi cảm thấy mệt, tôi nghỉ một lát."
      },
      {
        "en": "When the weather is hot, we drink more water.",
        "vi": "Khi thời tiết nóng, chúng tôi uống nhiều nước hơn."
      }
    ]
  },
  {
    "title": "3. Can + make + object + adjective",
    "formula": "S + can + make + O + adjective",
    "desc": "Dùng can + make + tân ngữ + tính từ để nói khả năng tạo ra một trạng thái.",
    "example": "Small actions can make home life easier, happier, and more comfortable for everyone.",
    "vi": "Những hành động nhỏ có thể khiến cuộc sống gia đình dễ dàng, vui vẻ và thoải mái hơn cho mọi người.",
    "extra": [
      {
        "en": "Small actions can make family life easier.",
        "vi": "Những hành động nhỏ có thể làm cuộc sống gia đình dễ dàng hơn."
      },
      {
        "en": "Too much screen time can make people tired.",
        "vi": "Quá nhiều thời gian màn hình có thể khiến mọi người mệt."
      }
    ]
  },
  {
    "title": "4. However as a connector",
    "formula": "However, + clause",
    "desc": "Dùng However để nối với ý trước và thể hiện sự tương phản.",
    "example": "However, spending too much time on screens can make me tired.",
    "vi": "Tuy nhiên, dành quá nhiều thời gian trước màn hình có thể khiến tôi mệt.",
    "extra": [
      {
        "en": "I use a computer for study. However, I take regular breaks.",
        "vi": "Tôi dùng máy tính để học. Tuy nhiên, tôi nghỉ giải lao thường xuyên."
      },
      {
        "en": "The task is difficult. However, I keep trying.",
        "vi": "Nhiệm vụ khó. Tuy nhiên, tôi vẫn tiếp tục cố gắng."
      }
    ]
  },
  {
    "title": "5. Before + V-ing",
    "formula": "S + V + O + before + V-ing",
    "desc": "Dùng before + V-ing để nói việc cần làm trước một hành động khác.",
    "example": "I finish important homework before watching videos or playing games.",
    "vi": "Tôi hoàn thành bài tập quan trọng trước khi xem video hoặc chơi trò chơi.",
    "extra": [
      {
        "en": "I check my bag before leaving home.",
        "vi": "Tôi kiểm tra cặp trước khi rời nhà."
      },
      {
        "en": "She drinks water before starting exercise.",
        "vi": "Cô ấy uống nước trước khi bắt đầu tập thể dục."
      }
    ]
  },
  {
    "title": "6. During + noun",
    "formula": "During + noun, S + V",
    "desc": "Dùng during + danh từ để chỉ khoảng thời gian một hành động xảy ra.",
    "example": "During meals, I keep my phone away.",
    "vi": "Trong bữa ăn, tôi để điện thoại ra xa.",
    "extra": [
      {
        "en": "During meals, I keep my phone away.",
        "vi": "Trong bữa ăn, tôi để điện thoại ra xa."
      },
      {
        "en": "During the evening, we talk as a family.",
        "vi": "Trong buổi tối, chúng tôi trò chuyện cùng gia đình."
      }
    ]
  },
  {
    "title": "7. Instead as a connector",
    "formula": "Instead, + clause",
    "desc": "Dùng Instead để giới thiệu một lựa chọn thay thế.",
    "example": "Instead, I read a book or talk with my family.",
    "vi": "Thay vào đó, tôi đọc sách hoặc nói chuyện với gia đình.",
    "extra": [
      {
        "en": "I do not watch another video. Instead, I read a book.",
        "vi": "Tôi không xem thêm video. Thay vào đó, tôi đọc sách."
      },
      {
        "en": "She does not play games. Instead, she finishes her homework.",
        "vi": "Cô ấy không chơi trò chơi. Thay vào đó, cô ấy hoàn thành bài tập."
      }
    ]
  },
  {
    "title": "8. First conditional pattern",
    "formula": "If + S + cannot + V, S + V",
    "desc": "Dùng mệnh đề if để nêu tình huống và hành động xử lý tương ứng.",
    "example": "If I cannot complete something, I move it to another suitable time.",
    "vi": "Nếu không thể hoàn thành việc gì đó, tôi chuyển nó sang một thời điểm phù hợp khác.",
    "extra": [
      {
        "en": "If I cannot finish a task, I move it to tomorrow.",
        "vi": "Nếu không thể hoàn thành nhiệm vụ, tôi chuyển nó sang ngày mai."
      },
      {
        "en": "If we plan carefully, we can use our time well.",
        "vi": "Nếu lên kế hoạch cẩn thận, chúng ta có thể sử dụng thời gian tốt."
      }
    ]
  },
  {
    "title": "9. Adverb not always",
    "formula": "S + do not always + V",
    "desc": "Dùng not always để nói một việc không xảy ra mọi lúc.",
    "example": "I do not always follow the plan perfectly, but it gives me direction and helps me become more organized.",
    "vi": "Tôi không phải lúc nào cũng làm theo kế hoạch hoàn hảo, nhưng nó cho tôi định hướng và giúp tôi trở nên ngăn nắp hơn.",
    "extra": [
      {
        "en": "I do not always follow the same routine.",
        "vi": "Tôi không phải lúc nào cũng làm theo cùng một thói quen."
      },
      {
        "en": "We do not always finish every task early.",
        "vi": "Chúng tôi không phải lúc nào cũng hoàn thành mọi nhiệm vụ sớm."
      }
    ]
  },
  {
    "title": "10. Enough + noun",
    "formula": "Enough + noun + V + O",
    "desc": "Dùng enough trước danh từ để diễn tả số lượng hoặc mức độ đủ.",
    "example": "Enough sleep helps my body rest and my mind work better.",
    "vi": "Ngủ đủ giúp cơ thể tôi nghỉ ngơi và tâm trí hoạt động tốt hơn.",
    "extra": [
      {
        "en": "Enough sleep helps children focus at school.",
        "vi": "Ngủ đủ giúp trẻ tập trung ở trường."
      },
      {
        "en": "Enough water helps the body work well.",
        "vi": "Đủ nước giúp cơ thể hoạt động tốt."
      }
    ]
  }
];
