// ===== routine02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. V-ing as subject",
    "formula": "V-ing phrase + be + complement",
    "desc": "Dùng cụm V-ing làm chủ ngữ của câu.",
    "example": "Drinking enough water is an important habit in my daily life.",
    "vi": "Uống đủ nước là một thói quen quan trọng trong cuộc sống hằng ngày của tôi.",
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
    "title": "2. After + V-ing",
    "formula": "S + V + after + V-ing",
    "desc": "Dùng after + V-ing để nói một hành động xảy ra sau hành động khác.",
    "example": "I drink a glass of water after waking up and carry a bottle with me.",
    "vi": "Tôi uống một cốc nước sau khi thức dậy và mang theo một chai nước.",
    "extra": [
      {
        "en": "I drink water after finishing exercise.",
        "vi": "Tôi uống nước sau khi tập thể dục xong."
      },
      {
        "en": "She rests after cleaning her room.",
        "vi": "Cô ấy nghỉ ngơi sau khi dọn phòng."
      }
    ]
  },
  {
    "title": "3. When-clause",
    "formula": "When + S + V, S + V",
    "desc": "Dùng when để mở đầu mệnh đề chỉ thời gian hoặc tình huống.",
    "example": "When the weather is hot, I drink more because I lose water through sweat.",
    "vi": "Khi thời tiết nóng, tôi uống nhiều hơn vì cơ thể mất nước qua mồ hôi.",
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
    "title": "4. Instead of + noun",
    "formula": "S + V + O + instead of + noun",
    "desc": "Dùng instead of để nói sự lựa chọn thay thế.",
    "example": "I choose clean water instead of sweet drinks most of the time.",
    "vi": "Hầu hết thời gian tôi chọn nước sạch thay vì đồ uống ngọt.",
    "extra": [
      {
        "en": "I choose water instead of sweet drinks.",
        "vi": "Tôi chọn nước thay vì đồ uống ngọt."
      },
      {
        "en": "He reads a book instead of his phone.",
        "vi": "Cậu ấy đọc sách thay vì dùng điện thoại."
      }
    ]
  },
  {
    "title": "5. To-infinitive of purpose",
    "formula": "To + V, S + V",
    "desc": "Dùng to + động từ nguyên mẫu ở đầu câu để chỉ mục đích.",
    "example": "To remember this habit, I put my bottle on my desk.",
    "vi": "Để nhớ thói quen này, tôi đặt chai nước trên bàn.",
    "extra": [
      {
        "en": "To stay healthy, I drink enough water.",
        "vi": "Để khỏe mạnh, tôi uống đủ nước."
      },
      {
        "en": "To keep my room tidy, I clean it daily.",
        "vi": "Để giữ phòng gọn gàng, tôi dọn phòng hằng ngày."
      }
    ]
  },
  {
    "title": "6. Because-clause",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để giải thích lý do.",
    "example": "I clean my room regularly because I like a neat and comfortable space.",
    "vi": "Tôi dọn phòng thường xuyên vì tôi thích một không gian ngăn nắp và thoải mái.",
    "extra": [
      {
        "en": "I exercise because I want to stay healthy.",
        "vi": "Tôi tập thể dục vì tôi muốn khỏe mạnh."
      },
      {
        "en": "She reads every day because she enjoys books.",
        "vi": "Cô ấy đọc mỗi ngày vì cô ấy thích sách."
      }
    ]
  },
  {
    "title": "7. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu không to.",
    "example": "A tidy room helps me find things quickly and study better.",
    "vi": "Một căn phòng gọn gàng giúp tôi tìm đồ nhanh và học tốt hơn.",
    "extra": [
      {
        "en": "Reading helps me learn new vocabulary.",
        "vi": "Đọc sách giúp tôi học từ vựng mới."
      },
      {
        "en": "Regular exercise helps people stay healthy.",
        "vi": "Tập thể dục đều đặn giúp mọi người khỏe mạnh."
      }
    ]
  },
  {
    "title": "8. So + clause",
    "formula": "Clause, so + S + V",
    "desc": "Dùng so để nối kết quả hoặc phản ứng với mệnh đề trước.",
    "example": "Cleaning takes less time when I do a little each day, so I try not to be lazy.",
    "vi": "Việc dọn dẹp tốn ít thời gian hơn khi tôi làm một chút mỗi ngày, vì vậy tôi cố gắng không lười biếng.",
    "extra": [
      {
        "en": "I clean a little each day, so my room stays tidy.",
        "vi": "Tôi dọn một chút mỗi ngày nên phòng luôn gọn gàng."
      },
      {
        "en": "The lesson is short, so I can practice every day.",
        "vi": "Bài học ngắn nên tôi có thể luyện tập mỗi ngày."
      }
    ]
  },
  {
    "title": "9. Adverb of frequency: sometimes",
    "formula": "S + sometimes + V",
    "desc": "Dùng sometimes để nói một hành động thỉnh thoảng xảy ra.",
    "example": "I sometimes practice with classmates.",
    "vi": "Đôi khi tôi luyện tập với bạn cùng lớp.",
    "extra": [
      {
        "en": "I sometimes practice English with classmates.",
        "vi": "Đôi khi tôi luyện tiếng Anh với bạn cùng lớp."
      },
      {
        "en": "We sometimes listen to short English songs.",
        "vi": "Đôi khi chúng tôi nghe những bài hát tiếng Anh ngắn."
      }
    ]
  },
  {
    "title": "10. Comparative: better than",
    "formula": "S + be + better than + noun phrase",
    "desc": "Dùng better than để so sánh hai cách hoặc lựa chọn.",
    "example": "A short practice every day is better than a long lesson once a month.",
    "vi": "Luyện tập ngắn mỗi ngày tốt hơn một bài học dài mỗi tháng một lần.",
    "extra": [
      {
        "en": "Daily practice is better than studying once a month.",
        "vi": "Luyện tập hằng ngày tốt hơn học một lần mỗi tháng."
      },
      {
        "en": "A tidy desk is better than a messy one.",
        "vi": "Một chiếc bàn gọn gàng tốt hơn một chiếc bàn bừa bộn."
      }
    ]
  }
];
