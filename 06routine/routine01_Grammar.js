// ===== routine01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Adverbs of frequency",
    "formula": "S + usually/often + V",
    "desc": "Dùng trạng từ tần suất để nói về thói quen thường xuyên.",
    "example": "I usually wake up at six o’clock every morning.",
    "vi": "Tôi thường thức dậy lúc sáu giờ mỗi sáng.",
    "extra": [
      {
        "en": "I usually drink water after I wake up.",
        "vi": "Tôi thường uống nước sau khi thức dậy."
      },
      {
        "en": "My family often eats breakfast together.",
        "vi": "Gia đình tôi thường ăn sáng cùng nhau."
      }
    ]
  },
  {
    "title": "2. Sequence adverb: First",
    "formula": "First, + S + V",
    "desc": "Dùng First ở đầu câu để nói hành động xảy ra trước tiên.",
    "example": "First, I make my bed, wash my face, and brush my teeth.",
    "vi": "Đầu tiên, tôi dọn giường, rửa mặt và đánh răng.",
    "extra": [
      {
        "en": "First, I open the window for fresh air.",
        "vi": "Đầu tiên, tôi mở cửa sổ để đón không khí trong lành."
      },
      {
        "en": "First, we check our plan for the day.",
        "vi": "Đầu tiên, chúng tôi kiểm tra kế hoạch trong ngày."
      }
    ]
  },
  {
    "title": "3. Coordinated verbs with and",
    "formula": "S + V + O + and + V + O",
    "desc": "Dùng and để nối hai hành động cùng chủ ngữ.",
    "example": "Then I drink a glass of water and do some light exercise for ten minutes.",
    "vi": "Sau đó, tôi uống một cốc nước và tập thể dục nhẹ trong mười phút.",
    "extra": [
      {
        "en": "I wash my face and brush my teeth every morning.",
        "vi": "Tôi rửa mặt và đánh răng mỗi sáng."
      },
      {
        "en": "We read short stories and learn new words together.",
        "vi": "Chúng tôi đọc truyện ngắn và học từ mới cùng nhau."
      }
    ]
  },
  {
    "title": "4. Before + V-ing",
    "formula": "Before + V-ing, S + V",
    "desc": "Dùng before + V-ing để diễn tả một hành động xảy ra trước hành động chính.",
    "example": "Before leaving home, I check my school bag and make sure I have all my books and pens.",
    "vi": "Trước khi rời nhà, tôi kiểm tra cặp sách và chắc chắn rằng mình có đủ sách và bút.",
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
    "title": "5. Adjective + to-infinitive",
    "formula": "S + linking verb + adjective + to + V",
    "desc": "Dùng tính từ + to-infinitive để diễn tả trạng thái hoặc sự sẵn sàng làm việc gì.",
    "example": "I feel fresh, active, and ready to study.",
    "vi": "Tôi cảm thấy tỉnh táo, năng động và sẵn sàng học tập.",
    "extra": [
      {
        "en": "I am ready to start my homework.",
        "vi": "Tôi sẵn sàng bắt đầu làm bài tập."
      },
      {
        "en": "They are happy to practice English together.",
        "vi": "Họ vui khi cùng nhau luyện tập tiếng Anh."
      }
    ]
  },
  {
    "title": "6. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu không to để nói sự hỗ trợ.",
    "example": "Reading helps me learn new words and understand different ideas.",
    "vi": "Đọc sách giúp tôi học từ mới và hiểu những ý tưởng khác nhau.",
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
    "title": "7. When-clause",
    "formula": "When + S + V, S + V",
    "desc": "Dùng mệnh đề when để nói thời điểm một hành động xảy ra.",
    "example": "When I find a difficult word, I write it in a notebook.",
    "vi": "Khi gặp một từ khó, tôi viết nó vào sổ tay.",
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
    "title": "8. By + V-ing",
    "formula": "By + V-ing, S + V",
    "desc": "Dùng by + V-ing để nói cách thức đạt được một kết quả.",
    "example": "By reading every day, I improve my English, grow my knowledge, and sleep more peacefully.",
    "vi": "Bằng việc đọc mỗi ngày, tôi cải thiện tiếng Anh, mở rộng kiến thức và ngủ yên hơn.",
    "extra": [
      {
        "en": "By reading daily, I improve my vocabulary.",
        "vi": "Bằng cách đọc hằng ngày, tôi cải thiện vốn từ."
      },
      {
        "en": "By exercising regularly, people build healthy habits.",
        "vi": "Bằng cách tập thể dục đều đặn, mọi người xây dựng thói quen lành mạnh."
      }
    ]
  },
  {
    "title": "9. Because-clause",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "I try to exercise every day because it keeps me healthy and strong.",
    "vi": "Tôi cố gắng tập thể dục mỗi ngày vì điều đó giúp tôi khỏe mạnh và cường tráng.",
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
    "title": "10. Do not + base verb",
    "formula": "S + do not + V + O",
    "desc": "Dùng do not + động từ nguyên mẫu để tạo câu phủ định ở hiện tại đơn.",
    "example": "We do not need expensive equipment or a large gym.",
    "vi": "Chúng ta không cần thiết bị đắt tiền hay một phòng gym lớn.",
    "extra": [
      {
        "en": "We do not need expensive equipment to walk.",
        "vi": "Chúng ta không cần thiết bị đắt tiền để đi bộ."
      },
      {
        "en": "I do not use my phone before bed.",
        "vi": "Tôi không dùng điện thoại trước khi đi ngủ."
      }
    ]
  }
];
