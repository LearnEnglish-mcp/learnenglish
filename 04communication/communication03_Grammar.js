// ===== communication03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Make + object + adjective",
    "formula": "S + make + O + Adj",
    "desc": "Dùng make + tân ngữ + tính từ để diễn tả tác động.",
    "example": "Friendly communication makes shopping easier and creates a pleasant experience for everyone involved.",
    "vi": "Giao tiếp thân thiện làm cho việc mua sắm dễ dàng hơn và tạo ra trải nghiệm dễ chịu cho tất cả mọi người liên quan.",
    "extra": [
      {
        "en": "Kind words make people comfortable.",
        "vi": "Lời nói tử tế khiến mọi người thoải mái."
      },
      {
        "en": "Clear directions make travel easier.",
        "vi": "Chỉ dẫn rõ ràng làm việc đi lại dễ dàng hơn."
      }
    ]
  },
  {
    "title": "2. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Customers should thank the shop assistant after buying something or receiving help.",
    "vi": "Khách hàng nên cảm ơn nhân viên sau khi mua đồ hoặc nhận được sự giúp đỡ.",
    "extra": [
      {
        "en": "People should listen carefully.",
        "vi": "Mọi người nên lắng nghe cẩn thận."
      },
      {
        "en": "Customers should speak politely.",
        "vi": "Khách hàng nên nói chuyện lịch sự."
      }
    ]
  },
  {
    "title": "3. To-infinitive for purpose",
    "formula": "S + V + O + to V",
    "desc": "Dùng to V để diễn tả mục đích.",
    "example": "Customers communicate with waiters to choose food, order drinks, and ask about special dishes.",
    "vi": "Khách hàng giao tiếp với nhân viên phục vụ để chọn thức ăn, gọi đồ uống và hỏi về các món đặc biệt.",
    "extra": [
      {
        "en": "Customers ask questions to choose suitable dishes.",
        "vi": "Khách hàng đặt câu hỏi để chọn món phù hợp."
      },
      {
        "en": "People use polite words to show respect.",
        "vi": "Mọi người dùng lời lẽ lịch sự để thể hiện sự tôn trọng."
      }
    ]
  },
  {
    "title": "4. Before + V-ing",
    "formula": "S + V + O + before + V-ing",
    "desc": "Dùng before + V-ing để nói hành động xảy ra trước.",
    "example": "Customers usually read the menu before ordering their meals.",
    "vi": "Khách hàng thường đọc thực đơn trước khi gọi món.",
    "extra": [
      {
        "en": "Check the message before sending it.",
        "vi": "Hãy kiểm tra tin nhắn trước khi gửi."
      },
      {
        "en": "Read the menu before ordering food.",
        "vi": "Hãy đọc thực đơn trước khi gọi món."
      }
    ]
  },
  {
    "title": "5. Should + coordinated verbs",
    "formula": "S + should + V, V, and V",
    "desc": "Dùng should với nhiều động từ song song để đưa ra lời khuyên.",
    "example": "Customers should speak politely, wait patiently, and pay the bill before leaving.",
    "vi": "Khách hàng nên nói chuyện lịch sự, chờ đợi kiên nhẫn và thanh toán hóa đơn trước khi rời đi.",
    "extra": [
      {
        "en": "Customers should read, ask, and wait politely.",
        "vi": "Khách hàng nên đọc, hỏi và chờ đợi lịch sự."
      },
      {
        "en": "Workers should listen, explain, and cooperate respectfully.",
        "vi": "Người lao động nên lắng nghe, giải thích và hợp tác một cách tôn trọng."
      }
    ]
  },
  {
    "title": "6. Coordinated gerund phrases as subject",
    "formula": "V-ing phrase + and + V-ing phrase + plural verb",
    "desc": "Dùng hai cụm V-ing nối bằng and làm chủ ngữ số nhiều.",
    "example": "Speaking clearly and using respectful language reduce misunderstandings.",
    "vi": "Nói rõ ràng và sử dụng ngôn ngữ tôn trọng làm giảm hiểu lầm.",
    "extra": [
      {
        "en": "Speaking clearly and listening carefully reduce confusion.",
        "vi": "Nói rõ ràng và lắng nghe cẩn thận giúp giảm nhầm lẫn."
      },
      {
        "en": "Reading regularly and writing often improve communication skills.",
        "vi": "Đọc thường xuyên và viết nhiều giúp cải thiện kỹ năng giao tiếp."
      }
    ]
  },
  {
    "title": "7. Depend on + noun",
    "formula": "S + depend on + N",
    "desc": "Dùng depend on để nói sự phụ thuộc.",
    "example": "Good relationships depend on kindness, patience, and cooperation.",
    "vi": "Mối quan hệ tốt phụ thuộc vào lòng tốt, sự kiên nhẫn và hợp tác.",
    "extra": [
      {
        "en": "Good relationships depend on trust.",
        "vi": "Mối quan hệ tốt phụ thuộc vào niềm tin."
      },
      {
        "en": "Successful teamwork depends on clear communication.",
        "vi": "Làm việc nhóm thành công phụ thuộc vào giao tiếp rõ ràng."
      }
    ]
  },
  {
    "title": "8. Help + object + bare infinitive",
    "formula": "S + help + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu.",
    "example": "They help people express ideas clearly, understand others, and build strong relationships.",
    "vi": "Chúng giúp mọi người diễn đạt ý tưởng rõ ràng, hiểu người khác và xây dựng những mối quan hệ bền chặt.",
    "extra": [
      {
        "en": "Good questions help people understand each other.",
        "vi": "Những câu hỏi hay giúp mọi người hiểu nhau."
      },
      {
        "en": "Clear words help visitors find the right place.",
        "vi": "Lời nói rõ ràng giúp du khách tìm đúng nơi."
      }
    ]
  },
  {
    "title": "9. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để diễn tả khả năng.",
    "example": "Everyone can improve communication skills through regular practice.",
    "vi": "Mọi người đều có thể cải thiện kỹ năng giao tiếp thông qua luyện tập thường xuyên.",
    "extra": [
      {
        "en": "Friends can share ideas online.",
        "vi": "Bạn bè có thể chia sẻ ý tưởng trực tuyến."
      },
      {
        "en": "People can ask for help politely.",
        "vi": "Mọi người có thể nhờ giúp đỡ một cách lịch sự."
      }
    ]
  },
  {
    "title": "10. Make + object + comparative adjective",
    "formula": "S + make + O + comparative adjective",
    "desc": "Dùng make + tân ngữ + tính từ so sánh hơn để nói sự thay đổi.",
    "example": "Respect, patience, and kindness make every conversation more successful.",
    "vi": "Sự tôn trọng, kiên nhẫn và lòng tốt làm cho mọi cuộc trò chuyện thành công hơn.",
    "extra": [
      {
        "en": "Practice makes communication easier.",
        "vi": "Luyện tập làm cho giao tiếp dễ dàng hơn."
      },
      {
        "en": "Kindness makes conversations more pleasant.",
        "vi": "Lòng tốt làm cho cuộc trò chuyện dễ chịu hơn."
      }
    ]
  }
];
